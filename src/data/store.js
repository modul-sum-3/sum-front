import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// const user = create(
//   (set) => ({
//     role: '',
//     token: '',
//     userData: {},

//     setRole: (role) => set(() => ({ role })),
//     setToken: (token) => set(() => ({ token })),
//   }),
//   {
//     name: 'user-storage',
//     storage: createJSONStorage(() => sessionStorage),
//   },
// );

const user = create(
  persist(
    (set) => ({
      role: '',
      token: '',
      userData: {},

      setRole: (role) => set(() => ({ role })),
      setToken: (token) => set(() => ({ token })),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default user;
