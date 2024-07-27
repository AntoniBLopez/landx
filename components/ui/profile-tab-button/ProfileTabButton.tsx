"use client";

import Link from "next/link";
import { UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { getSession } from "@/app/api/session/getSession";

export function ProfileTabButton() {
	const [session, setSession] = useState(false)
	useEffect(() => {
		async function c() {
			let result = await getSession(localStorage.getItem('session')!!)
			setSession(result.session)
		}
		c()
	}, [])
	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<UserCircle strokeWidth={1.5} className="h-[1.5rem] w-[1.5rem] rotate-0 scale-90 transition-all"></UserCircle>
					<span className="sr-only">User settings</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{
					session ? (
						<>
							<Link href="/create">
								<DropdownMenuItem>Create</DropdownMenuItem>
							</Link>
						</>
					) : null
				}
				<Link href="/dashboard">
					<DropdownMenuItem>Dashboard</DropdownMenuItem>
				</Link>
				{
					session ? (
						<>
							<Link href="/profile">
								<DropdownMenuItem>Profile</DropdownMenuItem>
							</Link>
							<Link href='/logout'>
								<DropdownMenuItem>Log out</DropdownMenuItem>
							</Link>
						</>
					) : (
						<Link href='/login'>
							<DropdownMenuItem>Log in</DropdownMenuItem>
						</Link>
					)
				}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
