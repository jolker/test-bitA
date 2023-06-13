<template lang="pug">
div
  el-container
    el-header(class='!h-full border-b')
      .flex.items-center.py-5
        img(src='./assets/logo-bitA.png')
        .ml-auto.cursor-pointer
          svg.w-6.h-6(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor')
            path(stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5')

    el-container
      el-aside(width='200px' class='h-[100vh]')
        LeftMenu
      el-main(class='bg-red-50')
        ContentPage

</template>

<script>
import LeftMenu from "./components/LeftMenu";
import ContentPage from "./components/ContentPage";
import "./styles/styles.css";

export default {
  name: "App",
  components: {
    LeftMenu,
    ContentPage,
  },
};
</script>

<style lang="scss"></style>
