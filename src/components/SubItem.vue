<template lang="pug">
div
  .flex.items-center 
    .container-checkbox
      input(type='checkbox' v-model='item.status')
      span.checkmark-checkbox
      label(:class="{ 'line-through': item.status }") {{ item.name }}
    .ml-auto.cursor-pointer(@click='remove(item.id)')
      svg.w-6.h-6(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor')
        path(stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12')

</template>

<script>
import { useTicketStore } from "../store/ticket";

export default {
  name: "SubItem",

  props: ["item", "idTicket"],

  data() {
    return {};
  },

  setup() {
    const storeTicket = useTicketStore();
    return { storeTicket };
  },

  methods: {
    onChange() {
      this.checkCreate = !this.checkCreate;
    },

    remove(id) {
      console.log("remove", id);
      this.storeTicket.removeItem(this.idTicket, id);
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss">
.container-checkbox {
  display: block;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  color: #7e838f;
  padding-left: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    z-index: 9;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .checkmark-checkbox {
    position: absolute;
    top: 3px;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px solid #cdd0dc;
    border-radius: 3px;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 3px;
      top: 3px;
      width: 10px;
      height: 10px;
      background-color: grey;
    }
  }
}

.container-checkbox input:checked ~ .checkmark-checkbox {
  background-color: white;
  border-color: #41454f;
}

.container-checkbox input:checked ~ label {
  color: #41454f;
}

.container-checkbox input:checked ~ .checkmark-checkbox:after {
  display: block;
}
</style>
