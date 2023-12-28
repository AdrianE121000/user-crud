import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set, get) => {
      return {
        users: [],

        fetchUsers: async () => {
          const { users } = get();
          const res = await fetch('https://randomuser.me/api/?results=10');
          const json = await res.json();

          const newUsers = [...users, ...json.results];

          set({ users: newUsers });
        },
        addUser: (user) => {
          const id = crypto.randomUUID();
          const newUser = {
            ...user,
            login: { uuid: id, username: user.login.username },
          };

          set((state) => ({ users: [...state.users, newUser] }));
        },
        deleteUser: (id) => {
          const { users } = get();

          const newUsers = users.filter((user) => user.login.uuid !== id);

          set({ users: newUsers });
        },
        editUser: (id, user) => {
          const { users } = get();
          const index = users.findIndex((data) => data.login.uuid === id);

          users[index] = user;
        },
      };
    },
    {
      name: 'users',
    }
  )
);
