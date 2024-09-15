import { configureStore } from '@reduxjs/toolkit';
import lang from '../locale/translation/en_us';
import storePersist, { localStorageHealthCheck } from './storePersist';
import rootReducer from './rootReducer';

localStorageHealthCheck();

const LANG_INITIAL_STATE = {
  result: lang,
  langCode: 'en_us',
  isLoading: false,
  isSuccess: false,
};

const lang_state = storePersist.get('translate')
  ? storePersist.get('translate')
  : LANG_INITIAL_STATE;


const initialState = { translate: lang_state };

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  // devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

//  console.log(
//    '🚀 Welcome to IDURAR ERP CRM! Did you know that we also offer commercial customization services? Contact us at hello@idurarapp.com for more information.'
//  );

export default store;
