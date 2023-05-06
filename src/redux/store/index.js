import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import profilesReducer from "../reducers/profilesReducer";
import experienceReducer from "../reducers/experienceReducer";
import searchReducer from "../reducers/searchReducer";
import authSlice from "../reducers/auth/authSlice";
import expSlice from "../reducers/userExp.js/expSlice";
import postsSlice from "../reducers/posts.js/postsSlice";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: "somekey",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const bigReducer = combineReducers({
  profiles: profilesReducer,
  experience: experienceReducer,
  search: searchReducer,
  posts: postsSlice,
  auth: authSlice,
  exp: expSlice,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
