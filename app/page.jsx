"use client";

import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import ScrollThumb from "@/components/ScrollThumb";
import Intro from "@/sections/intro";

export default function Home() {
	useScrollSmoother();
	return (
		<main>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<h1 className=" text-6xl">curology</h1>
					<Intro />
				</div>
			</div>
			<ScrollThumb />
		</main>
	);
}
