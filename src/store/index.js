import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import LayoutSaga from "./layouts/saga";
import rootReducer from "./reducers";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

  const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(...middlewares)
      ),
  );
  
sagaMiddleware.run(LayoutSaga);
  
export default store;