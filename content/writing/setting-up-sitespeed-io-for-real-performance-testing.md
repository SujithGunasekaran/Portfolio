---
title: "Setting Up Sitespeed.io for Real Performance Testing"
description: "Why Lighthouse alone can mislead, and how to set up Sitespeed.io with Podman and GitHub Actions for real browser performance testing."
date: "2026-05-19"
author: "Sujith Gunasekaran"
tags: ["Sitespeed.io", "Performance", "Core Web Vitals", "Frontend", "Frontend Development", "Lighthouse", "GitHub Actions"]
medium: "https://medium.com/@sujithg1999/setting-up-sitespeed-io-for-real-performance-testing-227bcee9f68f"
---

You run Lighthouse locally, see a 95 performance score, push to production, and then realise your actual users are experiencing much slower load times. Sound familiar?

Lighthouse is great for quick audits, but it has limitations. It simulates network throttling mathematically rather than applying real network constraints. It also runs a single test, so if your laptop is doing something in the background, your scores can vary wildly between runs.

Sitespeed.io takes a different approach. It runs real browsers with actual network throttling, captures video of your page loading, and runs multiple tests to give you median values you can trust. Organisations like Wikipedia use it to monitor performance across their sites because it shows how pages actually perform, not how they might perform under simulated conditions.

We've been using Sitespeed.io for frontend performance testing for a while now, and it's helped us catch issues that Lighthouse missed completely. Here's how to set it up and integrate it into your workflow.

![Frontend performance metrics illustration showing FCP, LCP and TTI gauges next to browser performance charts](/image/writing/sitespeed-frontend-performance-metrics.webp)

## Why Sitespeed.io Works Better Than Lighthouse

- **Real throttling:** Applies actual network and CPU throttling instead of mathematical simulations.
- **Consistent results:** Runs multiple iterations (3, 5, or 11 times) and takes the median to eliminate random noise.
- **Visual metrics:** Records actual video of page loading with frame-by-frame analysis.

## Setting Up Sitespeed.io with Podman

We use Podman for a cleaner, containerised setup that avoids local environment issues.

### Step 1: Install Podman on macOS

```bash
brew install podman
```

### Step 2: Initialise and start the Podman machine

```bash
podman machine init
podman machine start
```

### Step 3: Pull the Sitespeed.io image

```bash
podman pull docker.io/sitespeedio/sitespeed.io
```

### Step 4: Run your first test

Test any website (you can use any of your production sites):

```bash
podman run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:latest https://your-site.com/ -b chrome -n 3 --video --visualMetrics
```

What each flag does:

- `-b chrome`: Uses the Chrome browser
- `-n 3`: Runs 3 iterations for reliable median values
- `--video`: Records a video of the page loading
- `--visualMetrics`: Calculates visual progression metrics

### Step 5: Test mobile performance

Add the `--mobile` flag to simulate mobile devices with an appropriate viewport, user agent, and CPU throttling:

```bash
podman run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:latest https://your-site.com/ -b chrome -n 3 --mobile --video --visualMetrics
```

## Understanding the Results

Once the test completes, open the generated `index.html` file:

```bash
open sitespeed-result/your-site.com/[timestamp]/index.html
```

The dashboard shows:

### Summary metrics

- **TTFB (Time to First Byte):** Server response speed
- **FCP (First Contentful Paint):** When users first see content
- **LCP (Largest Contentful Paint):** When the main content appears
- **CLS (Cumulative Layout Shift):** Page stability score
- **TBT (Total Blocking Time):** Main thread blocking duration

### Video analysis

The filmstrip view shows frame-by-frame screenshots with timestamps. This is where we spotted a third-party script blocking render for nearly 2 seconds, something that wasn't obvious from the metrics alone.

### Detailed pages tab

Click into individual pages to see waterfall charts, resource timing, and exactly what's slowing down your site.

## Automating Tests with GitHub Actions

We've integrated Sitespeed.io into our CI pipeline to test performance on every code change before it reaches production.

### Testing your application build in CI

This workflow builds your application, starts the server, and runs performance tests against it.

Create `.github/workflows/performance.yml`:

```yaml performance.yml
name: Performance Testing

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  performance-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build application
        run: npm run build

      - name: Start application server
        run: |
          npm run start &
          echo $! > server.pid
          sleep 10
        env:
          PORT: 3000

      - name: Wait for server to be ready
        run: |
          timeout 60 bash -c 'until curl -f http://localhost:3000; do sleep 2; done'

      - name: Run Sitespeed.io
        run: |
          docker run --rm --network=host -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:latest \
            http://localhost:3000 \
            -b chrome \
            -n 3 \
            --video \
            --visualMetrics \
            --outputFolder output

      - name: Stop server
        if: always()
        run: |
          if [ -f server.pid ]; then
            kill $(cat server.pid) || true
          fi

      - name: Upload performance report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: sitespeed-report
          path: output/
          retention-days: 30
```

This runs on every push and pull request to `main` and generates a downloadable report in the Actions artifacts. We typically review these reports before merging changes into `main`.

Note: The GitHub Actions workflow above is a sample configuration. You'll need to adjust it to your project structure, for example the Node.js version, the build and start commands, and the port.

## Advanced Testing Options

### Custom network conditions

Simulate specific connection speeds:

```bash
podman run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:latest \
  https://your-site.com/ \
  --connectivity.profile 3g \
  -n 5
```

### Testing localhost

To test an app running on your own machine:

```bash
podman run --rm --network=host -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:latest \
  http://host.containers.internal:3000 \
  -b chrome \
  -n 3 \
  --video
```

### Multiple iterations for production

For more reliable production monitoring, we run 5–7 iterations:

```bash
podman run --rm -v "$(pwd)":/sitespeed.io sitespeedio/sitespeed.io:latest \
  https://your-site.com/ \
  -b chrome \
  -n 7 \
  --video \
  --visualMetrics
```

## Conclusion

Sitespeed.io changed how we approach performance testing. Instead of guessing based on simulated metrics, we now have actual browser data and video proof of what users experience.

The Podman setup takes about 15 minutes and eliminates environment-specific issues. The GitHub Actions integration catches regressions automatically. The video recordings save hours of debugging.

If you're serious about web performance, give Sitespeed.io a try. The insights are worth the setup time.
