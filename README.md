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

#  Higher order component
  - A **Higher-Order Component (HOC)** in React is a pattern used to reuse component logic. It is a function that takes a component as input and returns a new enhanced component.
  -  This is useful for tasks like:
     -   applying authentication, 
     -   adding styling, 
     -   or reusing common functionality across multiple components.
  
  - **Disadvantages**
    - Can lead to "Wrapper Hell" (deeply nested components).
    - Debugging is harder due to the abstraction.
    - Not as flexible as React Hooks for some use cases.  
  - **Key Points**
    - **Props Forwarding**: Always forward props to the wrapped component using **{...props}** to ensure it has access to its original props.
    - **Static Methods**: Static methods on the original component are not automatically copied to the HOC. Use the **hoist-non-react-statics** package if needed:
  ```jsx
      const withEnhancement = (WrappedComponent) => {
        return (props) => {
          // Add custom logic or props here
          return <WrappedComponent {...props} />;
        };
      };
  ```

#  Controlled Component

  A controlled component in React is an input element (e.g., ```<input>, <textarea>, <select>```) whose value is controlled by React state. React manages the component's state, and any changes are propagated via event handlers.

  - Key Features
    - React controls the form element’s value using the value attribute.
    - The component always reflects the latest state value.
    - Useful for form validation and dynamic input handling.
```jsx
    import React, { useState } from 'react';
    const ControlledComponent = () => {
        const [inputValue, setInputValue] = useState('');
        const handleChange = (event) => {
            setInputValue(event.target.value); // Update state
        };

        return (
            <div>
                <input 
                    type="text" 
                    value={inputValue} // Controlled by state
                    onChange={handleChange} // Updates state on change
                />
                <p>Input Value: {inputValue}</p>
            </div>
        );
    };
    export default ControlledComponent;
```

#  Lifting State Up
  Lifting state up is a technique used to share state between multiple components by moving the state to their closest common ancestor. This allows sibling components to communicate and share the same state.

  - Why Lift State Up?
    - To centralize state management.
    - To make data flow consistent in a parent-child hierarchy.
    - To enable communication between sibling components.
  ```jsx
      /**
      * RestaurantCategory is controlled componnet
      * Lifting state up - showList is maintened in parent(RestaurantMenu) component instead of RestaurantCategory itself
      */
  ```
# Props Drilling in React
  - React has one way data flow ( parent --> child ---> grand child ----> great grand child and so on.)
  - **Props drilling** refers to the process of passing data from a parent component to deeply nested child components through intermediate components, even if those intermediate components don’t need the data themselves. This often happens when the data or functionality needs to be used by components several levels deep in the component hierarchy.
  
  - ### Problems with Props Drilling:
    - **Redundancy**: Intermediate components pass props unnecessarily, even when they don’t use them.
    - **Tight Coupling**: Changes in the data structure or components require updates throughout the chain.
    - **Code Complexity**: For deep hierarchies, props drilling makes the code harder to read and maintain.
  - ### Solutions to Avoid Props Drilling
  1. **Context API**
    The React Context API provides a way to share values between components without explicitly passing props at every level.
    - How it works:
      - The **UserContext.Provider** wraps the component tree, providing the user value.
      The *GrandChild* uses **useContext(UserContext)** to access the data directly, avoiding intermediate props passing.
  2. **State Management Libraries (Redux, MobX, Zustand)**
    State management libraries like Redux or Zustand provide centralized stores for managing and accessing state.
    - Redux Example:
      - Store the **user** data in a global Redux store.
      - Access it in any component using **useSelector**.
  3. **Component Composition**
    If feasible, restructure your components to avoid deep hierarchies or nest only the necessary parts.

 # Redux Toolkit
    Redux Toolkit (RTK) is the official, recommended way to write Redux logic in React. It simplifies state management by reducing boilerplate code and improving developer experience.
     **React Toolkit uses Immerjs behind the scene** 
     **ImmerJS** : Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way.
     ![Immer JS](https://immerjs.github.io/immer/)

  ![alt text](redux.png)

  **Steps:**
  - Install @reduxjs/toolkit and react-redux
  - Create a Redux Slice(logical seperation of redux store)
      - A slice contains the state, reducers (logic to modify state), and actions in one file.    
  - Build our store
  - Provide Store to React
  - Use Redux State in a Component
  
  - 🎯 **Why Use Redux Toolkit?**
      - ✅ Less Boilerplate - No need for manual action types & reducers.
      - ✅ Better Performance - Uses Immer for state updates.
      - ✅ Built-in Middleware - Async handling with createAsyncThunk.
      - ✅ Scalability - Clean modular structure.



# Types of testing (developer)
 - Unit Testing - test your react component/unit in isolation of the app
 - Integration Testing - multiple components are involve
 - End to End Testing - e2e testing - testing the entire flow

# Setting up Testing in our app
 - Install React Testing Library uses jest under the hood
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel 
 - Configure Parcel Config file to disable default babel transpilation 
 - Jest  - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom
 