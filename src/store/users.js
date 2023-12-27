import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set, get) => {
      return {
        users: [],

        addUser: (user) => {
          const id = crypto.randomUUID();
          const newUser = { ...user, id: id };

          set((state) => ({ users: [...state.users, newUser] }));
        },
        deleteUser: (id) => {
          const { users } = get();

          const newUsers = users.filter((user) => user.id !== id);

          set({ users: newUsers });
        },
        editUser: (id, user) => {
          const { deleteUser } = get();

          deleteUser(id);

          set((state) => ({ users: [...state.users, user] }));
        },
      };
    },
    {
      name: 'users',
    }
  )
);
