"use client";
import React from "react";
import { AnimatedTooltip } from "../animated-tooltip";

const people = [
	{
		id: 1,
		name: "Antoni Lopez",
		designation: "Frontend Developer",
		image: "https://avatars.githubusercontent.com/u/93738827?v=4",
		url: "https://github.com/AntoniBLopez",
	},
	{
		id: 2,
		name: "Jorge Botero",
		designation: "Software Engineer",
		image: "https://avatars.githubusercontent.com/u/56240046?v=4",
		url: "https://github.com/JorBDev",
	},
	{
		id: 3,
		name: "Jimmy Reyes",
		designation: "Full Stack Developer",
		image: "https://avatars.githubusercontent.com/u/96630703?v=4",
		url: "https://github.com/jrfullstack",
	},
	{
		id: 4,
		name: "Tiago Laurenzi",
		designation: "Full Stack Developer",
		image: "https://avatars.githubusercontent.com/u/106491722?v=4",
		url: "https://github.com/xhyabunny",
	},
	{
		id: 5,
		name: "Jesús Velasco",
		designation: "Full Stack Developer",
		image: "https://avatars.githubusercontent.com/u/130942067?v=4",
		url: "https://github.com/jesusrobot0",
	},
	{
		id: 6,
		name: "Ebert Escalante",
		designation: "Full Stack Developer",
		image: "https://avatars.githubusercontent.com/u/91758582?v=4",
		url: "https://github.com/ebert-escalant",
	},
	{
		id: 7,
		name: "Oliver Ardila",
		designation: "Data Engineer",
		image: "https://avatars.githubusercontent.com/u/70169625?v=4",
		url: "https://github.com/oardilac",
	},
];

export const Footer = () => {
	return (
		<div className="flex flex-row items-center justify-center mb-10 w-full">
			<AnimatedTooltip items={people} />
		</div>
	);
};
