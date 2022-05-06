<template>
    <a
          :href="link"
          :id="id"
          class="sidebar-link sidebar-link-left-align"
          :class="{ activeMenu: inputState === title }"
          v-on:click.prevent="() => updateActiveValue(isActived)">

          <div class="sidebar-link-left">
            <div
              v-if="subMenus"
              class="vsm--arrow"
              :class="{ 'vsm--arrow_open': isActivedMenu }">
            </div>
          </div>

          <span class="children-title">{{ title }}</span>
    </a>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
    props: ["link", "id", "subMenus", "title", "activeItem", "show", "parentMenu","myprop"],
    data(){
        return {
             headerLinkWasClicked: true,
             isActived: false,
             inputState: ''
        }
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
    isActivedMenu() : string | boolean {
        return this.isActived;
    }
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
    updateActiveValue(value: boolean) {
        this.isActived =  !value
         this.$emit('activeValueSet', this.isActived)
        return this.isActived
    },
   },
   watch: {
   parentMenu: function(value: string) { // watch it
         this.inputState = value
    },
   }
})
</script>
