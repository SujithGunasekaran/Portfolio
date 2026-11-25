---
title: "Stop fixing SonarQube issues after raising a PR, do it inside Cursor using MCP"
description: "Set up the SonarQube MCP server in Cursor, catch issues in the editor with SonarQube for IDE, and block bad code at commit time with a pre-commit hook."
date: "2026-03-19"
author: "Sujith Gunasekaran"
tags: ["MCP", "Cursor", "SonarQube", "AI", "Code Quality", "Developer Productivity"]
medium: "https://medium.com/@sujithg1999/stop-fixing-sonarqube-issues-after-raising-a-pr-do-it-inside-cursor-using-mcp-21ce34fa5e1f"
---

You write code, raise a PR, and the pipeline runs. Five minutes later, SonarQube has flagged a bunch of things. You fix them, push again, wait for another run. That's easily 30 minutes gone on stuff that had nothing to do with the actual review. There's a better way.

## What you'll need

- Podman Desktop — download from [podman.io](https://podman.io/), install, and initialize the Podman Machine
- A SonarQube user token — My Account → Security → Generate Token
- Your project key — visible on your SonarQube project's main page
- Your SonarQube URL — e.g. `https://quality.yourcompany.com`

## Step 1: Start the Podman machine

```bash
/opt/podman/bin/podman machine start
```

On macOS, the Podman binary isn't in your default `$PATH`, so always use the full path.

## Step 2: Add the MCP server to Cursor

Go to Settings → Features → MCP Servers → Add New Server, choose Command, and paste this:

```json mcp.json
{
  "mcpServers": {
    "sonarqube": {
      "command": "/opt/podman/bin/podman",
      "args": [
        "run",
        "-i",
        "--rm",
        "--init",
        "--userns=keep-id",
        "-e", "SONARQUBE_TOKEN=YOUR_TOKEN_HERE",
        "-e", "SONARQUBE_URL=https://quality.yourcompany.com",
        "-e", "SONARQUBE_IDE_PORT=64120",
        "mcp/sonarqube"
      ]
    }
  }
}
```

Once saved, you should see a green status light. If it's red, jump to the troubleshooting section below.

Now you can already do things like this in Cursor Chat (`Cmd+L`):

```text prompt
Use @sonarqube to list all new issues for project
`<project-name>` in Pull Request #123.
```

```text prompt
Which lines in the current file are uncovered in the latest PR scan?
```

That's the MCP setup done. But you're still reacting to issues after pushing. Let's fix that.

## Taking it further, catch issues before you even commit

The MCP lets you query SonarQube from Cursor. But the SonarQube for IDE extension takes it a step further. It runs the same analysis engine locally inside your editor, so issues show up as red underlines while you're writing code. By the time you open a PR, they're already fixed.

### Install the extension

Install SonarQube for IDE from the Extensions panel (`Cmd+Shift+X`) or grab it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode).

### Authenticate with your org

1. Open the SonarQube for IDE panel in the sidebar
2. Click Add Connection
3. Enter your SonarQube URL and user token

This syncs your organisation's quality rules locally so the analysis matches exactly what CI runs.

### Bind your project

Add this to your `settings.json`:

```jsonc settings.json
"sonarlint.pathToNodeExecutable": "/Users/yourusername/.nvm/versions/node/v22.0.0/bin/node", // The Node version the extension should use.
"sonarlint.connectedMode.project": {
  "connectionId": "https-quality-yourcompany-com-",
  "projectKey": "your-project-key"
}
```

Run `which node` in your terminal to find your actual Node path. The `connectionId` is assigned by the extension after you authenticate. You can find it in the SonarQube for IDE settings.

Once this is set up, issues appear inline as you type: security vulnerabilities, bugs, code smells, and coverage gaps, before any commit and before any pipeline.

## Go even further and block bad code at commit time with a pre-commit hook

If you want a hard stop before anything reaches the remote, add a pre-commit hook. This runs SonarQube analysis on your staged files automatically every time you commit, and blocks the commit if issues are found.

Create `.git/hooks/pre-commit` in your project:

```bash pre-commit
#!/bin/bash

echo "Running SonarQube analysis before commit..."

STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM)

if [ -z "$STAGED_FILES" ]; then
  exit 0
fi

/opt/podman/bin/podman run --rm \
  -e SONARQUBE_TOKEN=$SONARQUBE_TOKEN \
  -e SONARQUBE_URL=https://quality.yourcompany.com \
  mcp/sonarqube analyze $STAGED_FILES

if [ $? -ne 0 ]; then
  echo "❌ SonarQube found issues. Fix them before committing."
  exit 1
fi

echo "✅ All good. Committing."

exit 0
```

Now the commit itself is gated. No issues, no commit. Your PR arrives clean every single time.

## Troubleshooting

- **podman: command not found**  
  Use the full path `/opt/podman/bin/podman` everywhere.
- **Unable to connect to the socket**  
  The VM isn't running. Run `podman machine start`. If that still fails: `sudo /opt/podman/bin/podman-mac-helper install`
- **The MCP can't reach the IDE extension.**  
  Make sure the extension is connected and add `"-e", "SONARQUBE_IDE_PORT=64120"` to your MCP args. Try ports 64120–64130 if needed.
- **Permission Denied**  
  `--userns=keep-id` in the config handles this. Make sure that line is present.
- **MCP light is red**  
  VM not running, wrong token, or URL typo. Check all three and reload the MCP server.

## Podman commands

- **Start:** `/opt/podman/bin/podman machine start`
- **Stop:** `/opt/podman/bin/podman machine stop`
- **Status:** `/opt/podman/bin/podman machine list`
- **Memory:** `/opt/podman/bin/podman stats --no-stream`

Each layer catches things earlier. By the time a PR is up, reviewers look at logic, not lint, and that's exactly where their attention should be.

Give it a try on your next feature branch. Even setting up the IDE extension alone will save you time from day one.
