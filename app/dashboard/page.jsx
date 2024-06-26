"use client";

import {
  Home,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Skull,
  Users2,
} from "lucide-react";
import ComplainPage from "./complain/page";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";
import CasePage from "./case/page";
import CaseList from "./caseList/page";
import Crimestat from "./crimeStat/page";
import React, { useState } from "react";
export default function page() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isActive, setIsActive] = useState("");
  return (
    <main>
      {" "}
      <div className="flex h-full  w-full flex-col ">
        <header className="flex items-center fixed w-full p-4 top-0  left-0 justify-between bg-background border-b">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-bold"
            prefetch={false}
            onClick={() => setCurrentPage("home")}
          >
            <CrimeIcon className="h-6 w-6" />
            <span>Crime Database</span>
          </Link>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Jane Doe</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    className="flex items-center gap-2"
                    prefetch={false}
                  >
                    <UserIcon className="h-4 w-4" />
                    <span>View Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <TooltipProvider>
          <aside className="fixed inset-y-0 top-16 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex  bg-black  ">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white md:h-8 md:w-8"
                    onClick={() => setCurrentPage("home")}
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Dashboard</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg  text-muted-foreground transition-colors hover:text-white md:h-8 md:w-8"
                    onClick={() => setCurrentPage("case")}
                  >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">Complainant List</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Complainant list</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white md:h-8 md:w-8"
                    onClick={() => setCurrentPage("analytics")}
                  >
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Analytics</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Analytics</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-white  md:h-8 md:w-8"
                    onClick={() => setCurrentPage("crime")}
                  >
                    <Skull className="h-5 w-5" />
                    <span className="sr-only">Crime List</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Crime List</TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </aside>
        </TooltipProvider>
        <div className="flex-grow mt-20 ml-10">
          {currentPage === "home" && <ComplainPage />}
          {currentPage === "case" && <CasePage />}
          {currentPage === "analytics" && <CaseList />}
          {currentPage === "crime" && <Crimestat />}
        </div>
      </div>
    </main>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
function CrimeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
