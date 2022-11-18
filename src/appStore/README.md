# Redux Persist

Its a library that allows using a redux store in the local storage of an application.

## Steps:-

1. install -
   npm i redux-persist.

2. Configure Redux store
   For persistReducer is wrap your app's root reducers and pass it to the persistStore function it ensures your redux state is stored to persisted storage whenever it changes

store.js

import (persistStore,persistReducer} from 'redux-persist’;
import storage from ‘redux-persist/lib/storage’

const persistConfig ={
    key:'persist-root',
    storage
}
const persistReducer=persistReducer(persistConfig,rootReducer)