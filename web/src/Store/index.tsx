import { create } from "zustand";

interface IUser {
  success: boolean;
  data: any | null; // You can replace `any` with a more specific type if you know the structure of `data`.
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

export const useUserStore = create<IState & {
  setUser: (user: IUser) => void;
  resetUser: () => void;
}>((set) => ({
  user: initialState.user,
  setUser: (user) => set({ user }),
  resetUser: () => set({ user: initialState.user }),
}));

