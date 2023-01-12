import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducers';
import { handler as postSagas } from './posts/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// mount it on the Store
const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(postSagas)

// render the application
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

export {store};
