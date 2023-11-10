import { combineReducers, createStore } from 'redux';
import { sidebarCollapse } from './sidebarCollapse/index';

const rootReducer = combineReducers({
  sidebar: sidebarCollapse,
});
export const store = createStore(rootReducer);
