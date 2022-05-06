import { ActionTree } from 'vuex';
import { sidebarState } from "./types";
import { RootState } from "@/store/types"

export  const actions: ActionTree<sidebarState, RootState> = {

    setActiveSidebar(context, payload: boolean) {
        context.commit("setActiveSidebar", payload)
    },

    setSidebarActiveElement(context, payload: string) {
        context.commit("setSidebarActiveElement", payload)
    },

    setActiveParentMenu(context, payload: boolean)
     {
         context.commit("setActiveParentMenu", payload)
     }

}