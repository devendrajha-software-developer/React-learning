# React Basics

## What Is React?

React is a JavaScript library used to build user interfaces. It helps us create reusable UI pieces called components.

## Why React?

- Reusable components.
- Fast UI updates.
- Easier to manage large UI.
- Useful for single page applications.

## React Element

A React element is a JavaScript object that describes what should appear on the screen.

```jsx
const heading = React.createElement("h1", {}, "Hello React");
```

`React.createElement` takes three main things:

```text
React.createElement(element, props, children)
```

Example:

```jsx
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
```

Meaning:

- `element`: the HTML tag or React component, like `"h1"`.
- `props`: attributes or properties, like `{ id: "heading" }`.
- `children`: content inside the element, like `"Hello World from React"`.

## JSX

JSX is HTML-like syntax written inside JavaScript.

```jsx
const heading = <h1>Hello React</h1>;
```

Important:

- JSX is not HTML.
- JSX is converted into `React.createElement`.
- JSX makes React code easier to read.

## JavaScript Inside JSX

If we want to write JavaScript inside JSX, we use curly braces `{}`.

Example:

```jsx
const name = "React";
const heading = <h1>Hello {name}</h1>;
```

In this app:

```jsx
<h3>{name}</h3>
<h4>{avgRating} stars</h4>
```

Interview point:

```text
Curly braces allow JavaScript expressions inside JSX.
```

## ReactDOM

ReactDOM connects React code with the browser DOM.

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
```

## Interview Points

- React is a library, not a full framework.
- JSX is syntax sugar for `React.createElement`.
- `React.createElement` takes element, props, and children.
- JavaScript expressions inside JSX are written inside `{}`.
- ReactDOM is responsible for rendering React into the browser.

