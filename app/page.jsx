'use client';

import {useScrollSmoother} from '@/hooks/Ui/useScrollSmoother';
import dynamic from 'next/dynamic';
import {QueryClient, QueryClientProvider} from 'react-query';

const S1 = dynamic(() => import('@/components/pages/S1'));
const S2 = dynamic(() => import('@/components/pages/S2'));
const ScrollThumb = dynamic(() => import('@/components/Ui/ScrollThumb'));

export default function Home() {
	const queryClient = new QueryClient();
	useScrollSmoother();
	return (
		<QueryClientProvider client={queryClient}>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<S1 src="images/curology-apply%20ad.webp"/>
						<S2/>
						<section className="h-screen"></section>
					</main>
				</div>
			</div>
			<ScrollThumb/>
		</QueryClientProvider>
	);
}

