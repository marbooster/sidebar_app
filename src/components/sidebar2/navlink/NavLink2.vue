<template>
  <div>
    <div v-if="!subMenus">
     <div  @click="readParent(title)">
        <router-link :to="link" class="sidebar-link" :id="id" exact>
        <span class="text">{{ title }}</span>
      </router-link>
     </div>
    </div>
    <div v-else>
      <div class="containSubmenu">
      <a
          :href="link"
          :id="id"
          class="sidebar-link sidebar-link-left-align"
          :class="{ activeMenu: isActive }"
          v-on:click.prevent="() =>  togglePanelCollapse(link)">

          <div class="sidebar-link-left">
            <div
              v-if="subMenus"
              class="vsm--arrow"
              :class="{ 'vsm--arrow_open': isActive }">
            </div>
          </div>

          <span class="children-title">{{ title }} </span>
    </a>
        <transition
          name="expand"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave">
          
          <b-collapse :visible="isActive">
            <ul class="showMenu" :id="id">
              <li v-for="(subMenu, index) in subMenus" :key="index" @click="activeChildMenu()">
                <NavLink
                  :activeItem="activeItem"
                  :title="subMenu.title"
                  :link="subMenu.link"
                  :icon="subMenu.icon"
                  :id="subMenu.id"
                  :subMenus="subMenu.subMenus"
                  :showmenu="showmenu"
                  :isOpen="isOpen">
                </NavLink>
              </li>
            </ul>
          </b-collapse>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import MenuWithItem from "../menuWithItem/MenuWithItem.vue";
export default Vue.extend({
  name: "NavLink",
  props: [
    "title",
    "link",
    "icon",
    "subMenus",
    "showmenu",
    "isOpen",
    "activeItem",
    "id",
   
  ],
  data() {
    return {
      show: this.showmenu,
     // isOpens: this.isOpen,
      headerLinkWasClicked: true,
      activeParentMenu: false,
      isActived: false,
      idElement : this.id,
      childActive: false,
      parentM: '',
       text: 'Hello',
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
    };
  },
  computed: {
    ...mapGetters("sidebar", [
      "getSidebarActiveElement",
      "getActiveParentMenu",
    ]),
    isActive(): string | boolean {
      return (
        this.activeItem &&
        this.activeItem.includes(this.id) &&
        this.headerLinkWasClicked 
      );
    },
  },
  methods: {
    ...mapActions("sidebar", [
      "setSidebarActiveElement",
      "setActiveParentMenu",
    ]),
    togglePanelCollapse(link: string) {
      this.setSidebarActiveElement(link);
      this.headerLinkWasClicked =
        !this.headerLinkWasClicked || !this.activeItem.includes(this.id);
    },
    enter(el: any) {
      el.style.height = "auto";
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el: any) {
      el.style.height = "auto";
    },
    leave(el: any) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    },
    showSubMenu() {
      this.show = !this.show;
    },

    activeValueSet(value: boolean)
    {
      this.isActived = value
    },


    readParent(titleM: string) {
      let parentMenu = ''
      let parentId = ''
          for (var i = 0; i < this.menus.length; i++) {
           if(this.menus[i].subMenus != undefined) {
              for(var j = 0; j < this.menus[i].subMenus!.length; j++){
                let value: any | undefined = this.menus[i].subMenus![j];
                if(value.title == titleM) {
                     parentMenu = this.menus[i].titleMenu;
                     parentId = this.menus[i].id
                     break; 
                }
              }
            }
          }
          this.parentM = parentMenu;
          console.log(this.parentM);
          return this.parentM;
    },
    activeChildMenu() {
      this.childActive = true;
    }
  },
});
</script>

<style lang="scss">
@import "navlink.scss";
</style>
