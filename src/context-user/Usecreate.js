import { create } from "zustand";

export const Usecreate = create((set) => ({
  user: "guest",
  loggedin: false,
  setuser: (name) => set({ user: name, loggedin: true }),
}));
