// "use client";

// import { Code2, Paperclip, Bell, ClipboardList, User, File, LayoutDashboard } from "lucide-react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarMenuItem,
//   SidebarFooter,
//   SidebarMenu,
//   SidebarHeader,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarMenuButton,
//   SidebarGroupLabel,
//   useSidebar,
// } from "@/components/ui/sidebar";
// import { Logo } from "./Logo";
// import { cn } from "@/lib/utils";

// const elements = [
//   {
//     title: "Dashboard",
//     url: "/admin",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Users",
//     url: "/admin/users",
//     icon: Paperclip,
//   },
//   {
//     title: "Organisation Setting",
//     url: "/admin/org_Setting",
//     icon: Bell,
//   },
//   {
//     title: "Invite",
//     url: "/admin/invite",
//     icon: User,
//   },
//   {
//     title: "Track Records",
//     url: "/admin/logs",
//     icon: User,
//   },
//   {
//     title: "Pending Requests",
//     url: "/admin/requests",
//     icon: File,
//   },
// ];


// export function AdminSidebar() {
//   const pathname = usePathname();
//   const { state } = useSidebar();
//   const isCollapsed = state === "collapsed";

//   const isActiveLink = (url: string) => {
//     if (url === "/admin") {
//       return pathname === url;
//     }
//     return pathname?.startsWith(url);
//   };

//   return (
//     <Sidebar 
//       collapsible="icon" 
//       className="bg-neutral-950 border-r border-slate-800/50 shadow-2xl"
//     >
//       <SidebarContent className="relative bg-neutral-950">
//         {/* Header with Logo */}
//         <SidebarHeader className="border-b  border-slate-800/50  backdrop-blur-sm">
//           <Logo />
//         </SidebarHeader>
        
//         <SidebarGroup className="px-2 py-4 ">
//           <SidebarGroupContent>
//             <SidebarMenu className="space-y-1">
//               {elements.map((ele) => {
//                 const isActive = isActiveLink(ele.url);
//                 return (
//                   <SidebarMenuItem key={ele.title}>
//                     <SidebarMenuButton 
//                       asChild
//                       isActive={isActive && !isCollapsed}
//                       tooltip={isCollapsed ? ele.title : undefined}
//                       className={cn(
//                         "relative h-10 rounded-r-3xl",
//                         isCollapsed 
//                           ? '!bg-transparent !border-0 !shadow-none hover:!bg-transparent hover:!border-0 hover:!shadow-none data-[active=true]:!bg-transparent data-[active=true]:!border-0' 
//                           : 'group',
//                         !isCollapsed && isActive 
//                           ? 'bg-gradient-to-r from-white/15 to-gray-200/15 border border-white/25 shadow-lg shadow-white/10' 
//                           : !isCollapsed 
//                             ? 'hover:bg-slate-900/60 hover:border hover:border-white/20'
//                             : ''
//                       )}
//                     >
//                       <Link href={ele.url} className="flex items-center gap-3 px-3">
//                         {/* Active indicator */}
//                         {isActive && !isCollapsed && (
//                           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-white to-gray-300 rounded-r-full"></div>
//                         )}
                        
//                         <div className={cn(
//                           "flex items-center justify-center",
//                           isCollapsed ? "w-6 h-6" : "w-5 h-5"
//                         )}>
//                           <ele.icon 
//                             className={cn(
//                               isCollapsed ? "w-6 h-6" : "w-5 h-5 transition-all duration-300",
//                               isCollapsed
//                                 ? isActive 
//                                   ? 'text-white'
//                                   : 'text-gray-400'
//                                 : isActive 
//                                   ? 'text-white' 
//                                   : 'text-gray-400 group-hover:text-gray-200'
//                             )}
//                           />
//                         </div>
                        
//                         {!isCollapsed && (
//                           <span
//                             className={cn(
//                               "font-madimi text-[15px] font-medium transition-all duration-300",
//                               isActive 
//                                 ? 'text-white font-semibold' 
//                                 : 'text-gray-300 group-hover:text-white'
//                             )}
//                           >
//                             {ele.title}
//                           </span>
//                         )}
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>

//       </SidebarContent>
//     </Sidebar>
//   );
// }


"use client";

import {
  LayoutDashboard,
  TicketPlus,
  User,
  FileText,
  HelpCircle,
  Building2,
} from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";

const mainLinks = [
  {
    title: "Dashboard",
    url: "/user",
    icon: LayoutDashboard,
  },
  {
    title: "Raise Ticket",
    url: "/user/raise-ticket",
    icon: TicketPlus,
  },
  {
    title: "Profile",
    url: "/user/profile",
    icon: User,
  },
];

const footerLinks = [
  {
    title: "Docs",
    url: "/user/docs",
    icon: FileText,
  },
  {
    title: "Help",
    url: "/user/help",
    icon: HelpCircle,
  },
];

export function UserSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  const isActiveLink = (url: string) => {
    if (url === "/user") return pathname === url;
    return pathname?.startsWith(url);
  };

  const renderLink = (item: (typeof mainLinks)[number]) => {
    const isActive = isActiveLink(item.url);
    const Icon = item.icon;

    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          tooltip={isCollapsed ? item.title : undefined}
          className={cn(
            "h-9 rounded-md px-2 transition-all duration-200",
            isActive
              ? "bg-[#241b3d] text-white"
              : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
          )}
        >
          <Link href={item.url} className="flex items-center gap-3">
            <Icon
              className={cn(
                "h-4 w-4 shrink-0",
                isActive ? "text-violet-300" : "text-zinc-400"
              )}
            />

            {!isCollapsed && (
              <span className="text-[13px] font-medium">
                {item.title}
              </span>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-zinc-900 bg-[#09090b]"
    >
      <SidebarContent className="bg-[#09090b] px-2">
        <SidebarHeader className="border-b border-zinc-900 px-2 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300">
              <Building2 className="h-4 w-4" />
            </div>

            {!isCollapsed && (
              <div className="leading-tight">
                <h2 className="text-sm font-semibold text-white">
                  User Panel
                </h2>

                <p className="text-[11px] text-zinc-500">
                  Support Workspace
                </p>
              </div>
            )}
          </div>
        </SidebarHeader>

        <SidebarGroup className="py-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainLinks.map(renderLink)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-zinc-900 bg-[#09090b] px-2 py-4">
        <SidebarMenu className="space-y-1">
          {footerLinks.map(renderLink)}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}