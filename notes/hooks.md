# When this useEffect will be called ?
- Everytime when the component re renders, the useEffect will be called.
- An Empty dependency array runs effect after initial render
- Depensdencies control when effects re-run
- Changing dependency values can trigger the effect again

# Which methods can be used to display images in a React application ?
- Importing images using ES6 modules
- Using Public folder
- Loading images from remote URLs

# Why is public folder approach useful for image handling ?
- Images can be referenced without importing them

# What does useState() return internally ?

```js
const result = useState(0)
console.log(result);
```
- An array with state value and updater function

# How does useEffect behave when dependency array is not Provided ?
- Runs after every render and re-render

# What is a key characteristics of Single Page Application ?
- content updates dynamically on the same page.

# useState
- never create the useState hook `outside` the component
- never use useState inside `if-else` condition
- do not create the state variable inside `for loop`

# In React we never use <a> </a> (anchor tag) to link b/w the components, instead we are using <Link to ="/.."> </Link>
- Because `anchor tag` will refresh our component on every run but, `Link` will `refresh/load` our component in that page only without any refreshing component (This is bcoz it known as SPA)

# useParams
- Return an object with `key/value` pair of the dynamic params from the current URL
```js
import {useParams} from "react-router"
function someComponent () => {
    let params = useParams();
    params.whateverId;
    }
```

# Outlet
- 
