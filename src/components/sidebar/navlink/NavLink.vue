<template>
  <div>
    <div v-if="!subMenus">
      <router-link :to="link" class="sidebar-link" exact>
        <span class="icon">
          <i class="material-icons" v-if="icon">
{{ icon }}
</i>
         <!-- <i :class="icon" v-if="icon"></i> -->
          <i class="far fa-circle nav-icon-transparent" v-else></i>
        </span>
        <span class="text">{{ title }}</span> 
      </router-link>
    </div>
    <div v-else>
      <a
        href="#"
        class="sidebar-link sidebar-link-left-align"
        @click="showSubMenu()"
      >
        <div class="sidebar-link-left">
          <span class="icon">
            <!--<i :class="icon"></i> -->
             <i class="material-icons">
{{ icon }}
</i>
          </span>
          <span class="text">{{ title }}</span>
        </div>
        <span :class="{ rotation: isOpens, closeSubMenu : !isOpens }">
          <i class="fas fa-angle-right arrow-position"></i>
        </span>
      </a>
       <transition 
          name="expand"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave">
          <div v-show="show">
            <ul class="showM">
              <li v-for="(subMenu, index) in subMenus" :key="index">
                <NavLink
                  :title="subMenu.title"
                  :link="subMenu.link"
                  :icon="subMenu.icon"
                  :subMenus="subMenu.subMenus"
                  :showmenu="showmenu"
                  :isOpen="isOpen"
                ></NavLink>
              </li>
            </ul>
          </div>
       </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavLink",
  props: ["title", "link", "icon", "subMenus", "showmenu", "isOpen"],
  data() {
    return {
      show: this.showmenu,
      isOpens: this.isOpen,
    };
  },
  methods: {
    enter(el:any) {
        el.style.height = 'auto';
        const height = getComputedStyle(el).height;
        el.style.height = 0;
        getComputedStyle(el);
        setTimeout(() => {
          el.style.height = height;
        });        
      },
      afterEnter(el:any) {
        el.style.height = 'auto';
      },
      leave(el:any) {
        el.style.height = getComputedStyle(el).height;
        getComputedStyle(el);
        setTimeout(() => {
          el.style.height = 0;
        });
      },
    showSubMenu() {
      this.show = !this.show;
      this.isOpens = !this.isOpens;
    },

  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons&rel=stylesheet");
</style>

<style lang="scss">
@import "navlink.scss";
</style>