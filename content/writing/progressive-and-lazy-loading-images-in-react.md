---
title: "Progressive and lazy loading images in React.js"
description: "How lazy and progressive loading improve image performance, and how to implement them in React."
date: "2024-09-11"
author: "Sujith Gunasekaran"
tags: ["Lazy Loading", "Reactjs", "Performance", "Progressive Loading", "Intersection Observer", "Image Optimization", "JavaScript"]
medium: "https://medium.com/@sujithg1999/progressive-and-lazy-loading-images-in-react-js-4bff31a66785"
---

In today's fast-paced digital world, users expect websites and apps to load instantly. However, large media files, especially high-resolution images, can slow down the initial loading time of an application. When all images are loaded immediately, users are left waiting for the content to fully appear, leading to a sluggish experience. This is particularly problematic for users with slow internet connections or those on mobile devices.

Let's look at how we can improve the performance. There are several ways to do this, and in this blog we will focus on **lazy loading** and **progressive loading** of images.

First, we will understand what **progressive loading** and **lazy loading** are. Then we will dive into the implementation.

## Progressive Loading: Optimizing the Image Display

You've probably noticed that on many websites, images appear blurry at first, especially when your internet is slow. Ever wondered why that happens or what's going on behind the scenes? Let's dive in and find out!

**Progressive loading** offers a solution by initially loading a lower-resolution version of the image. This allows users to see a placeholder or a blurry preview as the image progressively loads in higher quality. By adopting this approach, we ensure that users don't have to wait for the full image to download before they see anything, resulting in a faster loading time, a smoother visual experience, and better website performance.

## Lazy Loading: Deferring Image Loading Until Needed

Imagine if we had to render 500 to 600 high-quality images on a single page. What would happen? Obviously, the website would slow down, take longer to load, and use more memory, which would lead to a pretty bad user experience.

But with **lazy loading**, we can make this much smoother. Instead of loading all the images right away, lazy loading only fetches images as they come into view. This speeds up the initial load time and reduces unnecessary network requests, especially for images that users might never even scroll down to see.

So far, we've covered two different techniques, and it's important to note that each one addresses a different issue.

> **Progressive loading** helps by showing a lower-quality version of an image first, giving users something to see right away while the full image loads in the background.

> On the other hand, **lazy loading** makes sure that images are only loaded when they're about to come into view, saving bandwidth and speeding up the initial load time. Both techniques work together to improve the overall performance and user experience.

Up until now, we have understood the techniques. Now we will see how to implement them in React.js. Here's a React component that combines both lazy loading and progressive loading:

```jsx LazyImage.jsx
import { useEffect, useState, useRef } from 'react';

const LazyImage = (props) => {

    // props
    const { src, alt, fallbackImage } = props;

    // state
    const [imageSrc, setImageSrc] = useState(fallbackImage);

    // ref
    const inputRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const image = new Image();
                image.src = src;
                image.onload = function () {
                    setImageSrc(src);
                }
                observer.disconnect();
            }
        });
        const element = inputRef.current;

        if (element) {
            observer.observe(element);
        }

        return () => {
            observer.unobserve(element);
        }

    }, [])

    return (
        <img
            className={'image'}
            src={imageSrc}
            alt={alt}
            ref={inputRef}
            loading='lazy'
        />
    )
}

export default LazyImage;
```

Let's go through the code part by part. At a high level, this is a reusable component that handles both lazy loading and progressive loading of an image.

- **Initial State:** The component starts by setting the `imageSrc` state to a `fallbackImage`. This is a low-resolution image that will be displayed initially.
- **Intersection Observer:** With the Intersection Observer we can detect whether the image is in the viewport, or about to enter it, and run our logic based on that. Learn more about the [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
- **Image Pre-loading:** When the image element comes into view, a new `Image` object is created to load the full-resolution image. Once the image has loaded, the `imageSrc` state is updated to display the full-quality image.

<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/ks_8O-S5sXY" title="Progressive and lazy loading demo" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

If you check out the video above, you'll notice that the images start out as blurred placeholders. Once the original image fully loads from the server, it seamlessly replaces the blurred version on the screen. This is how progressive loading works. There are five images in total, but if you look closely at the network requests, you'll see that only the first two load initially. As you scroll, the images load just before they enter the viewport, and until that happens, the fallback image is shown.

Check out the full code implementation on [CodeSandbox](https://codesandbox.io/p/sandbox/lazy-load-image-forked-62gf32).

Feel free to share feedback. Connect with me on [LinkedIn](https://www.linkedin.com/in/sujith-gunasekaran-3b21a4140/).
