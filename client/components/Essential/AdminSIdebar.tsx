"use client";

import {
  LayoutDashboard,
  Ticket,
  Users,
  Mail,
  BarChart3,
  ScrollText,
  Settings,
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
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Tickets", url: "/admin/tickets", icon: Ticket },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Invitations", url: "/admin/invite", icon: Mail },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Audit Logs", url: "/admin/logs", icon: ScrollText },
  { title: "Settings", url: "/admin/org_setting", icon: Settings },
];

const footerLinks = [
  { title: "Docs", url: "/admin/docs", icon: FileText },
  { title: "Help", url: "/admin/help", icon: HelpCircle },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const isActiveLink = (url: string) => {
    if (url === "/admin") return pathname === url;
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
              <span className="text-[13px] font-medium">{item.title}</span>
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
                <h2 className="text-sm font-semibold text-white">Acme Corp</h2>
                <p className="text-[11px] text-zinc-500">Enterprise Plan</p>
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