import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

export default store;
