import { configureStore } from '@reduxjs/toolkit'
import sliceDataUser from './sliceLanguages';

const store = configureStore({
    reducer:{
      dataUser:  sliceDataUser,
    }
});

export default store;