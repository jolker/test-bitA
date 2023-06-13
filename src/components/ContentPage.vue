<template lang="pug">
div
  .flex.items-center
    .uppercase.font-bold(class='text-red-600 text-[32px]') Dashboard
    el-input.ml-auto.cus-input(class='!w-[200px]' v-model="title" placeholder='New list')
    .ml-3.cursor-pointer.rounded-md.text-white.bg-red-600.py-2.px-4(@click='create') Create
  .content.mt-5
    .grid.grid-cols-4.gap-4
      div(v-for='ticket in tickets' :key='ticket.id')
        TicketItem(:ticket='ticket')

</template>

<script>
import { useTicketStore } from "../store/ticket";
import TicketItem from "./TicketItem";
import { storeToRefs } from "pinia";

export default {
  name: "ContentPage",
  components: {
    TicketItem,
  },

  data() {
    return {
      title: "",
    };
  },

  computed: {
    tickets() {
      return this.getTickets;
    },
  },

  setup() {
    const storeTicket = useTicketStore();
    const { getTickets } = storeToRefs(storeTicket);
    return { storeTicket, getTickets };
  },

  methods: {
    create() {
      this.storeTicket.addTodo(this.title);
      this.title = "";
    },
  },
};
</script>

<style lang="scss">
.cus-input {
  input::-webkit-input-placeholder {
    /* Edge */
    font-style: italic;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer */
    font-style: italic;
  }

  input::placeholder {
    font-style: italic;
  }
}
</style>
