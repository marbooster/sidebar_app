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
          :class="{ activeMenu: show || childActive, desactiveMenu: activeParent != (show && childActive)  }"
          v-on:click.prevent="showSubMenu()">

          <div class="sidebar-link-left">
            <div
              v-if="subMenus"
              class="vsm--arrow"
              :class="{ 'vsm--arrow_open': show }">
            </div>
          </div>

          <span class="children-title">{{ title }} </span>
    </a>
        <transition
          name="expand"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave">
          
          <div v-show="show">
            <ul class="showMenu" :id="id">
              <li v-for="(subMenu, index) in subMenus" :key="index" @click="activeChildMenu()">
                <NavLinkSimple
                  :activeItem="activeItem"
                  :title="subMenu.title"
                  :link="subMenu.link"
                  :icon="subMenu.icon"
                  :id="subMenu.id"
                  :subMenus="subMenu.subMenus"
                  :showmenu="showmenu"
                  :isOpen="isOpen">
                </NavLinkSimple>
              </li>
            </ul>
          </div>
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
  name: "NavLinkSimple",
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
      childActive: false,
      activeParent:false
    };
  },
  computed: {
    ...mapGetters("sidebar", [
      "getSidebarActiveElement",
      "getActiveParentMenu",
    ]),
  },
  methods: {
    ...mapActions("sidebar", [
      "setSidebarActiveElement",
      "setActiveParentMenu",
    ]),
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
      if(this.show == false){
          this.activeParent = true
      }
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
