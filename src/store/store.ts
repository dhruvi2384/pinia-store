import { defineStore } from "pinia";
export const useUserStore = defineStore("counter", {
    state: () => ({
        count: 1,
    }),
    getters: {
        getUser: (state) => state.count * 2,
    },
    actions: {
        setUser() {
            this.count++;
        },
    },
});