# Errors And Debugging

## Error: `cloudinaryImageId` Is Undefined

Error message:

```text
Cannot read properties of undefined: cloudinaryImageId
```

## Why This Happened

The full `restaurantList` array was passed to `RestaurantCard`.

Wrong:

```jsx
<RestaurantCard resturantData={restaurantList} />
```

But inside `RestaurantCard`, the code expected one restaurant object:

```jsx
resturantData.info.cloudinaryImageId;
```

This fails because:

```text
restaurantList.info does not exist
```

`info` exists inside each item of the array:

```text
restaurantList[0].info
restaurantList[1].info
restaurantList[2].info
```

## Correct Fix

Use `map` and pass one restaurant at a time:

```jsx
restaurantList.map((restaurant) => (
  <RestaurantCard key={restaurant.info.id} resturantData={restaurant} />
));
```

Now inside `RestaurantCard`, this works:

```jsx
resturantData.info.cloudinaryImageId;
resturantData.info.name;
```

## Error: `name` Is Undefined

Reason:

The data path is wrong or the expected data was not passed.

Correct data path:

```text
restaurant.info.name
restaurant.info.cloudinaryImageId
restaurant.info.avgRating
restaurant.info.cuisines
```

## Error: `cuisines.join` Fails

Possible reason:

`cuisines` is undefined.

Expected:

```jsx
const { cuisines } = resturantData.info;
```

Then:

```jsx
<h4>{cuisines.join(", ")}</h4>
```

## Debugging Rule

Before using nested data, check the data shape.

Good habit:

```jsx
console.log(resturantData);
```

Then confirm whether the data is:

```text
array
object
object.info
object.info.name
```

## Interview Points

- Undefined errors usually happen because data path is wrong.
- Check whether you are passing an array or a single object.
- Use `console.log` to inspect props and data shape.
- Nested properties should be accessed only after understanding the object structure.

