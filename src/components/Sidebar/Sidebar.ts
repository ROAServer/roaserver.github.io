import Sidebar from "./Sidebar.vue";

type SidebarProps = {
    name: string
    title: string
    icon: string
    enable?: boolean
    message?: string
  }[]

export {Sidebar, SidebarProps}
