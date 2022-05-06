
import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/sidebar/sidebar-getters";
import {actions} from "@/store/modules/sidebar/sidebar-actions";
import {mutations} from "@/store/modules/sidebar/sidebar-mutations";
import { sidebarState } from "./types";
export const state: sidebarState = {
    activeSidebar: true,
    sidebarActiveElement: "O",
    activeParentMenu: false
};

export const sidebar: Module<sidebarState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};