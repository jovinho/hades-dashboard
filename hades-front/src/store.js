import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./reducers";

const middleware = [thunk];

const loggerMiddleware = createLogger({
  predicate: () => true
});

middleware.push(loggerMiddleware);

const initialState = {};

export function makeStore() {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}

export default makeStore();
