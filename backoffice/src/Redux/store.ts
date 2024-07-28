import {
  configureStore,
  combineReducers,
  AnyAction,
  createAction,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import DrawerSlice from "./DrawerSlice";
import AuthSlice from "./AuthSlice";
import FormSlice from "./FormSlice";
import ModuleSlice from "./ModuleSlice";
import ActionSlice from "./ActionSlice";
import OrderSlice from "./OrderSlice";

const SIGNOUT_REQUEST = createAction("SIGNOUT_REQUEST");

const persistConfig = {
  key: "root",
  storage,
};

const appReducer = combineReducers({
  drawer: DrawerSlice,
  auth: AuthSlice,
  module: ModuleSlice,
  form: FormSlice,
  action: ActionSlice,
  order: OrderSlice,
});

const rootReducer = (
  state: ReturnType<typeof appReducer> = appReducer(undefined, { type: "" }),
  action: AnyAction
) => {
  if (action.type === SIGNOUT_REQUEST.type) {
    return appReducer(undefined, { type: undefined || "" });
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const signout = () => {
  return store.dispatch(SIGNOUT_REQUEST());
};

export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
