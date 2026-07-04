# Rendering Lists

## Why We Render Lists

When we have array data, we usually want to show one UI component for each item.

In this app, `restaurantList` is an array of restaurants. We render one `RestaurantCard` for each restaurant.

## `map`

`map` loops over an array and returns a new value for each item.

In React, we use `map` to return JSX.

```jsx
restaurantList.map((restaurant) => (
  <RestaurantCard key={restaurant.info.id} resturantData={restaurant} />
));
```

## Data Flow

```text
restaurantList array
    -> map()
    -> one restaurant object
    -> RestaurantCard
```

## Wrong Approach

```jsx
<RestaurantCard resturantData={restaurantList} />
```

Why this is wrong:

- `restaurantList` is the full array.
- `RestaurantCard` expects one restaurant object.
- `restaurantList.info` does not exist.

## Correct Approach

```jsx
restaurantList.map((restaurant) => (
  <RestaurantCard key={restaurant.info.id} resturantData={restaurant} />
));
```

Now every `RestaurantCard` receives one restaurant object.

## How One Card Gets Data

Inside `RestaurantCard`:

```jsx
const { resturantData } = props;
const { name, avgRating, cuisines } = resturantData.info;
```

Then the card can render:

```jsx
<h3>{name}</h3>
<h4>{avgRating} stars</h4>
<h4>{cuisines.join(", ")}</h4>
```

## Interview Points

- Use `map` to render lists in React.
- Each list item should have a unique `key`.
- Do not pass the full array if the child expects one object.
- Understand the shape of data before accessing nested properties.

