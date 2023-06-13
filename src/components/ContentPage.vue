<template lang="pug">
div
  .flex.items-center
    .uppercase.font-bold(class='text-red-600 text-[32px]') Dashboard
    el-input.ml-auto.cus-input(class='!w-[200px]' placeholder='New list')
    .ml-3.cursor-pointer.rounded-md.text-white.bg-red-600.py-2.px-4 Create

</template>

<script>
export default {
  name: "ContentPage",

  data() {
    return {};
  },

  methods: {},
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
