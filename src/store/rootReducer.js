import { configureStore } from '@reduxjs/toolkit';
import { sidebarCollapse } from './sidebarCollapse/index';
import { api } from './api/api';

// const rootReducer = combineReducers({
//   sidebar: sidebarCollapse,
// });
export const store = configureStore({
  reducer: {
    sidebar: sidebarCollapse,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
