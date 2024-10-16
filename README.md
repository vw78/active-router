## @zs-repo/react-router
Based on the [ionic framework](https://ionicframework.com/docs/react) open source framework for encapsulation, the current library implements a react routing library for forward refresh and backward cache.

## Documentation

### 1. add ActiveRouterProvider
```js
import {
  ActiveRouterProvider
} from "@zs-repo/react-router";
import routes from "./router.js";

function App() {
  return <ActiveRouterProvider routes={routes}/>;
}

export default App;

```

### 2. create routes
```js
import About from "./About.jsx";
import Home from "./Home.jsx";
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];

export default routes
```

### 3. navigating in components
```js
import {
  useRouter,
  useViewDidEnter,
  useViewDidLeave,
  useViewWillEnter,
  useViewWillLeave
} from "@zs-repo/react-router";

function Home() {
  const router = useRouter();

  useViewDidEnter(() => {
    console.log('useViewDidEnter event fired');
  });

  useViewDidLeave(() => {
    console.log('useViewDidLeave event fired');
  });

  useViewWillEnter(() => {
    console.log('useViewWillEnter event fired');
  });

  useViewWillLeave(() => {
    console.log('useViewWillLeave event fired');
  });

  return <div>
    <div>Home Page</div>
    <button onClick={() => {
      router.push('/about');
    }}>to About
    </button>
  </div>;
}

export default Home;
```



