# Styling And Images

## Inline Style In React

React allows inline styles using a JavaScript object.

Example:

```jsx
const cardStyle = {
  backgroundColor: "#f0f0f0",
};

<div className="restaurant-card" style={cardStyle}>
  Restaurant Card
</div>;
```

Important:

- Inline style uses a JavaScript object.
- CSS property names are written in camelCase.
- Example: `background-color` becomes `backgroundColor`.

## Why We Should Avoid Too Much Inline Style

Inline style is okay for quick testing, but we should usually avoid it for normal styling.

Reasons:

- CSS file keeps styling separate from logic.
- Code looks cleaner.
- Classes are easier to reuse.
- Pseudo-classes like `:hover` are easier in CSS.
- Media queries and responsive styles are easier in CSS.

Better:

```jsx
<div className="restaurant-card">Restaurant Card</div>
```

Then in CSS:

```css
.restaurant-card {
  background-color: #f0f0f0;
}
```

## Image CDN URL And `cloudinaryImageId`

The Swiggy restaurant data does not give the full image URL directly. It gives an image id called `cloudinaryImageId`.

Example:

```text
cloudinaryImageId: "8aa874a03b5bd0804b6781b1fd13f02d"
```

To show the image, we combine the CDN base URL with `cloudinaryImageId`.

```jsx
const imageUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
  cloudinaryImageId;
```

Then use it in `img`:

```jsx
<img className="res-logo" alt="res-logo" src={imageUrl} />
```

In the current app, it is written directly:

```jsx
<img
  className="res-logo"
  alt="res-logo"
  src={
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    resturantData.info.cloudinaryImageId
  }
/>
```

## Best Practice

Later, move the CDN base URL into `utils/constants.js`.

```jsx
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
```

Then use:

```jsx
<img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
```

## Interview Points

- Inline styles in React are JavaScript objects.
- CSS property names are camelCase in inline styles.
- Prefer CSS classes for regular styling.
- `cloudinaryImageId` is only an image id, not the full image URL.
- CDN base URL plus `cloudinaryImageId` creates the final image URL.

