import { createStore } from 'redux';
import themeReducer from './redusers/themeReducer';

const store = createStore(themeReducer);

export default store;