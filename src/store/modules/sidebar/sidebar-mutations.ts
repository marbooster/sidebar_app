import { MutationTree } from 'vuex';
import { sidebarState } from "./types";

export const mutations: MutationTree<sidebarState> = {

    setActiveSidebar(state, payload: boolean) {
        state.activeSidebar = payload
    },

    setSidebarActiveElement(state, payload: string) {
        state.sidebarActiveElement = payload
    },

    setActiveParentMenu(state, payload: boolean) {
        state.activeParentMenu = payload
    }
};