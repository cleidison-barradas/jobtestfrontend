import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'MyStore',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
  return persistedReducer;
};
