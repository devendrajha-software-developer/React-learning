# Clean Code Structure

## Current Problem

`App.js` became very large because it contains:

- Components.
- Big restaurant data.
- App logic.
- Long learning comments.

This makes the code harder to read.

## Better Folder Structure

```text
React-learning/
  App.js
  index.css
  index.html

  components/
    Header.js
    Body.js
    RestaurantCard.js

  utils/
    mockData.js
    constants.js

  notes/
    react-basics.md
    components.md
    rendering-lists.md
    props-and-key.md
    errors-and-debugging.md
    styling-and-images.md
    flow-chart.md
    clean-code-structure.md
```

## What Goes Where

`App.js`:

```text
Main app layout only.
```

`components/`:

```text
Reusable UI components like Header, Body, RestaurantCard.
```

`utils/mockData.js`:

```text
Large restaurant list data.
```

`utils/constants.js`:

```text
Reusable constants like image CDN URL.
```

`notes/`:

```text
Detailed explanations, mistakes, flowcharts, and learning notes.
```

## Rule To Remember

```text
Code files = clean implementation
Repo notes = detailed explanation
Physical notebook = interview revision
```

## Best Practices

- Keep code comments short.
- Move long explanations to markdown files.
- Keep components small and reusable.
- Move big data out of component files.
- Move repeated values into constants.
- Keep styling and image URL notes separate from component logic.
- Keep physical notebook notes short and interview-focused.

