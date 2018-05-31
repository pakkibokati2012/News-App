import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducers from '../src/reducers';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
