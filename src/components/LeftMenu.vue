<template lang="pug">
div
  el-menu(@open='handleOpen' @close='handleClose')
    el-submenu(v-for='(m, idx) in menu' :index='`${idx}`' :key='idx')
      template(slot='title')
        i.el-icon-menu
        span {{ m.name }}
      el-menu-item-group
        el-menu-item(v-for='(sub, subIdx) in m.sub' :index='`${idx}-${subIdx}`' :key='subIdx')
          span {{ sub.child_name }}
    
</template>

<script>
export default {
  name: "LeftMenu",

  data() {
    return {
      menu: [
        {
          name: "Item Parent",
          sub: [
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
          ],
        },
        {
          name: "Item Parent 2",
          sub: [
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
          ],
        },
        {
          name: "Item Parent 3",
          sub: [
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
          ],
        },
        {
          name: "Item Parent 4",
          sub: [
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
            {
              child_name: "Item children",
            },
          ],
        },
      ],
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss"></style>
