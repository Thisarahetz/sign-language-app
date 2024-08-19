import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
  success: boolean;
  data: any | null; 
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

const userStore = (set: any, get: any) => ({
  user: initialState.user,
  setUser: (user: IUser) => set({ user }),
  logout: () => set({ user: initialState.user }),

});

const useUserStore = create(persist(userStore,{
  name: 'user-storage'
}));

export default useUserStore;
