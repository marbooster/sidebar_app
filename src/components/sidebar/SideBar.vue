<template>
  <div class="sidebar">
    <nav>
      <div class="sidebar-header">
       <div class="logo"></div>
       <div class="name">TAGBA Marcelin</div>
      </div>
      <ul>
        <li v-for="(menu, index) in menus" :key="index">
          <nav-link
            :title="menu.titleMenu"
            :link="menu.link"
            :icon="menu.menuIcon"
            :subMenus="menu.subMenus"
            :showmenu="showmenu"
            :isOpen="isOpen"
          ></nav-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavLink from "@/components/sidebar/navlink/NavLink.vue";
export default Vue.extend({
  components: {
    NavLink,
  },
  data() {
    return {
      menus: [
        {
          link: "/",
          titleMenu: "Dashboard",
          menuIcon: "face",
        },
        {
          link: "/features",
          titleMenu: "Features",
          menuIcon: "streetview",
          subMenus: [
            {
              title: "Pages",
              link: "/pages",
              icon: "streetview",
            },
            {
              title: "Elements",
              link: "/elements",
              icon: "streetview",
            },
          ],
        },
        {
          link: "/services",
          titleMenu: "Services",
          menuIcon: "face",
          subMenus: [
            {
              title: "App Design",
              link: "/app-design",
              icon: "account_circle",
            },
            {
              title: "Web Design",
              link: "/web-design",
              icon: "work",
            },
          ],
        },
        
        {
          link: "/portfolio",
          titleMenu: "Portfolio",
          menuIcon: "explore",
        },
        {
          link: "/overview",
          titleMenu: "Overview",
          menuIcon: "settings",
        },
        {
          link: "/shortcuts",
          titleMenu: "Shortcuts",
        },
        {
          link: "/feedBack",
          titleMenu: "FeedBack",
          menuIcon: "",
        },
      ],
      showmenu: false,
      isOpen: false,
    };
  },
  methods: {},
});
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>

<style lang="scss">
@import "sidebar.scss";
</style>