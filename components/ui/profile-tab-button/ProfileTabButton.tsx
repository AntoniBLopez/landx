"use client";

import * as React from "react";
import { Moon, Sun, UserCircle } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ProfileTabButton() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<UserCircle strokeWidth={.8} className="h-[1.5rem] w-[1.5rem] rotate-0 scale-90 transition-all"></UserCircle>
					<span className="sr-only">User settings</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => {}}>Dashboard</DropdownMenuItem>
				<DropdownMenuItem onClick={() => {}}>Settings</DropdownMenuItem>
				<DropdownMenuItem onClick={() => {}}>Log Out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
