# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles



# Namaste Food


/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
 (Normal JS utility functions)
- useState() - Superpowerful State Variables in react
    ```jsx
      const [count, setCount] = useState(0);
    ```
    
- useEffect() - it will be call post the respective component is rendered
  - Uses 2 argument, 
    - 1.  Callback function 
    - 2. Dependency array -> 
        - If no dependency array provided --> use Effect will be called on post every render of useEffect
    ```jsx
        useEffect(() => {
                    console.log('Component mounted');
                  }, []);
    ```
  ## Reconciliation algorithm (React Fiber)
  - Uses virtual DOM - representaion of actual DOM - react-16
  - Diff algorithm - finds the diff of two virtual DOM(updated and previous virtual DOM)
  - [React fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

  ## Monolith and Micro Service Architecture:
    - Micro Service - Seperation of concern and Single responsibility principle.

  ## 2 ways to render data
    - **First** - Loads the page ----> api call ----> Render UI
    - **Second** - Loads the Page ----> render ui with whatever data you have ----> api call ---> re render api( *React prefer this approach*)
 


#  2 types Routing in web apps
 - Client Side Routing
 - Server Side Routing


 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Slice (cartSlice)
  - dispatch(action)
  - Selector


# Types of testing (developer)
 - Unit Testing
 - Integration Testing
 - End to End Testing - e2e testing

# Setting up Testing in our app
 - Install React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 