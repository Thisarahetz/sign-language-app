import { create } from "zustand";

interface IUser {
  success: any;
  data: any;
}

export interface IState {
  user: IUser;
}

export const initialState: IState = {
  user: {
    success: false,
    data: null,
  },
};

export const userStore = create<IState>()((set) => ({
  user: initialState.user,
  setUser: (user: IUser) => set({ user }),
  resetUser: () => set({ user: initialState.user }),
}));
