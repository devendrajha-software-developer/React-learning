# Components

## What Is A Component?

A component is a reusable piece of UI.

Example:

```jsx
const Header = () => {
  return <div className="header">Header</div>;
};
```

## Component Rules

- Component name should start with a capital letter.
- Component should return JSX.
- Components can be reused many times.

## Components In This App

```text
AppLayout
  -> Header
  -> Body
      -> RestaurantCard
  -> Footer
```

## Header Component

The `Header` component contains:

- Logo.
- Navigation items.
- Cart option.

## Body Component

The `Body` component contains:

- Search container.
- Restaurant container.
- Multiple `RestaurantCard` components.

## RestaurantCard Component

The `RestaurantCard` component shows one restaurant.

It displays:

- Image.
- Name.
- Rating.
- Cuisines.
- Location.
- Cost for two.

## Footer Component

The `Footer` component can be added later.

Planning:

- Copyright.
- Useful links.
- Contact information.

Example:

```jsx
const Footer = () => {
  return (
    <div className="footer">
      <h3>Footer</h3>
    </div>
  );
};
```

In the current app, `Footer` can stay commented until it is needed.

## Why Components Are Useful

- Code becomes reusable.
- Code becomes clean.
- UI is divided into smaller parts.
- Same component can display different data using props.

## Interview Points

- Components help split UI into reusable blocks.
- Functional components are normal JavaScript functions that return JSX.
- A component can receive data using props.
- Planning components before coding makes the app structure easier to understand.

