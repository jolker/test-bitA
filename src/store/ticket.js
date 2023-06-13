import { defineStore } from "pinia";
import _ from "lodash";

export const useTicketStore = defineStore({
  id: "ticketState",
  state: () => ({
    tickets: [],
  }),
  getters: {},
  actions: {
    addTodo(title) {
      const ticket = {
        id: Math.floor(Math.random() * 10000), // random ID
        title,
        items: [],
      };
      this.tickets = [ticket, ...this.tickets];
    },

    addItem(id, name) {
      const item = {
        id: Math.floor(Math.random() * 10000), // random ID
        name,
        status: false,
      };

      const find = _.find(this.tickets, (val) => {
        return val.id === id;
      });

      if (find) {
        find.items.push(item);
      }
    },

    removeItem(id, subId) {
      const find = _.find(this.tickets, (val) => {
        return val.id === id;
      });

      if (find) {
        _.remove(find.items, (n) => {
          return n.id === subId;
        });
        // find.items = find.items.filter((item) => item.id !== subId);
      }
    },
  },
});
