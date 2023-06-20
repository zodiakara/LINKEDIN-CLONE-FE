import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import searchReducer from "../reducers/searchReducer";
import authSlice from "../reducers/auth/authSlice";
import expSlice from "../reducers/userExp/expSlice";
import postsSlice from "../reducers/posts/postsSlice";
import usersSlice from "../reducers/users/usersSlice";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import educationSlice from "../reducers/userEd/educationSlice";
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
  search: searchReducer,
  posts: postsSlice,
  auth: authSlice,
  exp: expSlice,
  users: usersSlice,
  edu: educationSlice,
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
