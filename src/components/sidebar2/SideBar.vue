<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li v-for="menu in menus" :key="menu.id">
          <nav-link-simple
            :title="menu.titleMenu"
            :link="menu.link"
            :icon="menu.menuIcon"
            :subMenus="menu.subMenus"
            :showmenu="showmenu"
            :isOpen="isOpen"
            :activeItem="getSidebarActiveElement"
            :id="menu.id">
          </nav-link-simple>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapGetters} from "vuex";
import NavLink from "@/components/sidebar2/navlink/NavLink2.vue";
import NavLinkSimple from "@/components/sidebar2/navlink/NavLinkSimple.vue";
export default Vue.extend({ 
  components: {
   // NavLink,
   NavLinkSimple
  },
  data() {
    return {
      menus: [
        {
          id:'/',
          link: "/",
          titleMenu: "Dashboard",
          menuIcon: "account_circle",
        },
        {
          id:'features',
          link: "/features",
          titleMenu: "Features",
          menuIcon: "account_circle",
          subMenus: [
            {
              id:'/pages',
              title: "Pages",
              link: "/pages",
              icon: "account_circle",
            },
            {
              id:'/elements',
              title: "Elements",
              link: "/elements",
              icon: "account_circle",
            },
          ],
        },
        {
          id:'services',
          link: "/services",
          titleMenu: "Services",
          menuIcon: "account_circle",
          subMenus: [
            {
              id:'/app-design',
              title: "App Design",
              link: "/app-design",
              icon: "account_circle",
            },
            {
              id:'/web-design',
              title: "Web Design",
              link: "/web-design",
              icon: "work",
            },
          ],
        },
        
        {
          id:'/portfolio',
          link: "/portfolio",
          titleMenu: "Portfolio",
          menuIcon: "explore",
        },
        {
          id:'/overview',
          link: "/overview",
          titleMenu: "Overview",
          menuIcon: "settings",
        },
        {
          id:'/shortcuts',
          link: "/shortcuts",
          titleMenu: "Shortcuts",
        },
        {
          id:'/feedBack',
          link: "/feedBack",
          titleMenu: "FeedBack",
          menuIcon: "",
        },
      ],
      showmenu: false,
      isOpen: false,
    };
  },
    computed: {
      ...mapGetters('sidebar',['getSidebarActiveElement', 'getActiveSidebar']), 
      activeSidebar (){
            return this.getActiveSidebar;
        },
    },
  methods: {
     sidebarActive(state: boolean){         
          return !state
      },
  },
});
</script>

<style lang="scss">
@import "sidebar.scss";
</style>