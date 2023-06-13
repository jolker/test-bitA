<template lang="pug">
div
  .bg-white.drop-shadow-md.h-full
    .head.bg-red-600.p-3.flex.items-center
      .text-white {{ ticket.title }}
      .ml-auto.text-white.cursor-pointer(@click='createItem')
        svg.w-6.h-6(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor')
          path(stroke-linecap='round' stroke-linejoin='round' d='M12 4.5v15m7.5-7.5h-15')

    .p-3(class='h-[300px]')
      input.el-input__inner(v-if='checkCreate' v-model="name" placeholder='New item' @keyup.enter="onEnter(ticket.id)" @keyup.esc="onEsc")
      .mt-3(v-for='(item, idx) in ticket.items' v-if='ticket.items.length > 0')
        SubItem(:item='item' :idTicket='ticket.id')

</template>

<script>
import { useTicketStore } from "../store/ticket";
import SubItem from "./SubItem";

export default {
  name: "TicketItem",
  components: {
    SubItem,
  },

  props: ["ticket"],

  data() {
    return {
      checkCreate: false,
      name: "",
    };
  },

  setup() {
    const storeTicket = useTicketStore();
    return { storeTicket };
  },

  methods: {
    createItem() {
      this.checkCreate = !this.checkCreate;
    },

    onEnter(id) {
      console.log("enter", id);
      this.storeTicket.addItem(id, this.name);
      this.name = "";
    },

    onEsc() {
      console.log("esc");
      this.name = "";
      this.checkCreate = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
