---
title: "CSS-in-JS: Pros and Cons for Modern React Development"
description: "What CSS-in-JS is, its pros and cons for modern React development, and when it is the right choice."
date: "2024-10-04"
author: "Sujith Gunasekaran"
tags: ["CSS-in-JS", "Reactjs", "CSS", "JavaScript", "Styled Components", "Frontend Development"]
medium: "https://medium.com/@sujithg1999/css-in-js-pros-and-cons-for-modern-react-development-3e1cbc329eda"
---

In the world of React development, there are countless ways to manage styles, but one of the newer, more popular techniques is CSS-in-JS. It's exactly what it sounds like: writing your styles in JavaScript, often inside your component files, instead of in external `.css` files. While it may sound strange at first, CSS-in-JS has been gaining traction for good reasons. But, like any tool, it has its pros and cons.

In this post, I'll dive deep into what CSS-in-JS is, why it's gaining popularity, and when you should (or shouldn't) use it.

## What is CSS-in-JS?

At its core, CSS-in-JS allows us to write CSS code within our JavaScript files, usually alongside our React components. This approach promotes a component-based styling method, where styles are tightly coupled with the components they belong to.

Rather than maintaining separate stylesheets for different parts of our app, CSS-in-JS enables us to create styles right within our JavaScript, keeping everything localized and scoped to our components.

Some of the most popular libraries that make CSS-in-JS possible are styled-components, Emotion, and JSS. These libraries allow us to write CSS as JavaScript objects, template literals, or tagged template strings, depending on the library.

### CSS-in-JS Examples

Let's see an example of how you might style a button component using styled-components.

```jsx Button.jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default function App() {
  return <Button>Click Me!</Button>;
}
```

In this example, `Button` is a React component that comes with built-in styles. What's amazing is that these styles are automatically scoped to the component itself, meaning no more global style conflicts.

## Pros of using CSS-in-JS

### Scoped Styles

With CSS-in-JS, styles are scoped by default. That means we won't have to worry about our button styles accidentally overriding styles in other parts of our app. It eliminates the hassle of class name conflicts and the "cascade" problem that comes with traditional CSS.

### Dynamic Styling

One of the most powerful features of CSS-in-JS is its ability to dynamically change styles based on component state or props. Instead of switching between multiple classes, we can use logic to apply styles directly.

```jsx DynamicButton.jsx
const Button = styled.button`
  background-color: ${props => props.primary ? "#4CAF50" : "gray"};
`;
```

### Component-Based Approach

In React, we already think of our UIs in terms of components, so why not apply the same concept to our styles? CSS-in-JS aligns with React's component philosophy, ensuring that your styles live right alongside the component code they're styling, making the development process more intuitive and organized.

### No More Global Stylesheet Chaos

With traditional CSS, it's easy to accidentally affect styles across the whole app when modifying a global stylesheet. With CSS-in-JS, we avoid the risks of global styles which can affect other parts of our app, leading to more predictable and maintainable code.

## Cons of using CSS-in-JS

### Performance Overhead

CSS-in-JS adds a slight performance cost since it generates CSS and injects it into the DOM at runtime. While modern libraries are optimized, in very large apps with a lot of styled-components, you could see a noticeable slowdown in initial render times. The good news? Many libraries now have server-side rendering (SSR) options to mitigate this.

### Tooling & Ecosystem

While CSS-in-JS libraries have come a long way, they sometimes still lag behind traditional CSS when it comes to certain features like media queries or complex animations. Additionally, integrating these tools into larger projects can sometimes cause compatibility issues with existing build tools.

### Bigger Bundle Sizes

Since our styles are now part of our JavaScript bundle, this can increase the size of your app's initial payload. This isn't usually a dealbreaker, but it's something to be aware of, especially in performance-sensitive applications.

## Should you use it?

So far, we have seen what CSS-in-JS is, how to implement it, and its pros and cons. Many new techniques will come in the future, but we need to analyze and think about whether we need these features. So, should you adopt CSS-in-JS for your next project? It depends!

CSS-in-JS is great for:

- Component-based applications where you want to keep styles scoped to specific components and avoid global style conflicts.
- Dynamic styling that relies on JavaScript logic to apply styles based on state or props.
- Design systems that require easy theming capabilities.

## What's your opinion?

So, what do you think? Is CSS-in-JS the future of styling, or do you prefer sticking with traditional methods? I'd love to hear your thoughts and experiences in the comments!
