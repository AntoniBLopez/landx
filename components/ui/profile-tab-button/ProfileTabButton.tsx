"use client";

import * as React from "react";
import { UserCircle } from "lucide-react";


import { Button } from "@/components/ui/button";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ProfileTabButton() {
	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<UserCircle strokeWidth={1.5} className="h-[1.5rem] w-[1.5rem] rotate-0 scale-90 transition-all"></UserCircle>
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
