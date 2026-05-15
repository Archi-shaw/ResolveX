"use client";

import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

import { AgentSidebar } from "@/components/Essential/AgentSidebar";
import { Menu, User, LogOut, UserCircle } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { signOut } from "next-auth/react";

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full overflow-hidden bg-neutral-950 text-white font-inter">
        <AgentSidebar />

        <SidebarInset className="flex min-w-0 flex-col bg-neutral-950">
          <header className="sticky top-0 z-40 w-full flex-shrink-0 border-b border-slate-700/50 bg-neutral-950/95 shadow-2xl backdrop-blur-xl">
            <div className="flex w-full items-center gap-4 px-6 py-4">
              <SidebarTrigger className="h-9 w-9 flex-shrink-0 rounded-lg border border-slate-600 bg-slate-800 text-slate-300 shadow-sm transition-all duration-200 hover:bg-slate-700 hover:text-white">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle Sidebar</span>
              </SidebarTrigger>

              <div className="flex min-w-0 flex-1 items-center justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-6 w-px flex-shrink-0 bg-slate-600" />

                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-semibold tracking-tight text-white">
                      Agent Dashboard
                    </h2>

                    <p className="truncate text-xs text-slate-400">
                      Manage assigned tickets and daily work
                    </p>
                  </div>
                </div>

                <div className="flex flex-shrink-0 items-center gap-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-gray-300 to-white shadow-lg transition-all duration-200 hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-neutral-950">
                        <User className="h-4 w-4 text-black" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="w-56 border border-slate-700 bg-neutral-900 text-white shadow-xl"
                      align="end"
                    >
                      <DropdownMenuLabel className="text-slate-300">
                        My Account
                      </DropdownMenuLabel>

                      <DropdownMenuSeparator className="bg-slate-700" />

                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer hover:bg-slate-800 focus:bg-slate-800 focus:text-white"
                      >
                        <Link href="/agent/profile" className="flex items-center">
                          <UserCircle className="mr-2 h-4 w-4" />
                          <span>View Profile</span>
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        className="cursor-pointer text-red-400 hover:bg-slate-800 focus:bg-slate-800 focus:text-red-400"
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </header>

          <main className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-br from-neutral-950 via-neutral-900/50 to-neutral-950">
            <div className="relative min-h-screen w-full">
              <div className="w-full text-white">
                <div className="w-full p-3 lg:p-5">
                  <div className="w-full rounded-2xl border border-slate-700/30 bg-neutral-950/60 p-2 shadow-lg lg:p-4 lg:px-6">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}