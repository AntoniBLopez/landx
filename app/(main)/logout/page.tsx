"use client";
import { getSession } from "@/app/api/session/getSession";
import { logoutSession } from "@/app/api/session/logoutSession";
// import { addUser } from "@/app/api/users/addUser";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Page() {

    useEffect(()=>{
		async function c() {
			let result = await getSession(localStorage.getItem('session')!!)
			if(result.session === false) window.location.assign('/login')
		}
		c()
	}, [])

    return (
        <div className="mt-36 text-center justify-center w-full">
            <h1>Do you wanna log out?</h1>
            <div className="flex mx-auto text-center justify-center w-max">
                <Button onClick={async ()=>{await logoutSession(localStorage.getItem('session')!!); window.location.assign('/')}} variant={'ghost'}>Yes</Button>
                <Button onClick={()=>{window.location.assign('/user/'+localStorage.getItem('username')!!)}} variant={'ghost'}>No</Button>
            </div>
            <BackgroundBeams className="z-[-29]"></BackgroundBeams>
        </div>
    );
}
