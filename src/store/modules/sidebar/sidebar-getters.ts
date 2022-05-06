import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { sidebarState } from './types'


export const getters: GetterTree<sidebarState, RootState> = {
    
    getActiveSidebar(state): boolean {
        return state.activeSidebar
    },

    getSidebarActiveElement(state): string {
        return state.sidebarActiveElement
    },

    getActiveParentElement(state): boolean {
        return state.activeParentMenu
    }
};