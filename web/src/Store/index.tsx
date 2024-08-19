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

const userStore = (set:any, get:any) => ({
  user: initialState.user,
  setUser: (user: IUser) => set({ user }),
  resetUser: () => set({ user: initialState.user }),
});


const useUserStore = create(userStore);

export default useUserStore;

