import { create } from 'zustand';

const user = create((set) => ({
  role: '',
  token: '',
  userData: {},

  setRole: (role) => set(() => ({ role })),
  setToken: (token) => set(() => ({ token })),
}));

export default user;
