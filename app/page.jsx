"use client";

import { useScrollSmoother } from "@/hooks/ui/useScrollSmoother";
import ScrollThumb from "@/components/ui/ScrollThumb";
import Intro from "@/components/sections/intro";
import {
	QueryClient,
	QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();
export default function Home() {
	useScrollSmoother();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div id="smooth-wrapper">
					<div id="smooth-content">
						<main>
							<Intro />
						</main>
					</div>
				</div>
				<ScrollThumb />
			</QueryClientProvider>
		</>
	);
}
