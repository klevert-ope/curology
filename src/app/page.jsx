'use client';
import HeroSection from '@/features/HeroSection';
import IntroSection from '@/features/IntroSection';
import ProductSection from '@/features/ProductSection';
import Providers from '@/utils/Providers';
import ScrollThumb from 'scrollthumb';
import { useScrollSmoother } from 'use-scrollsmoother';

export default function Home () {
	const { smoothWrapperRef, smoothContentRef } = useScrollSmoother ({
		config: {
			smooth: 2,
			smoothTouch: 0.2,
			snormalizescroll: true,
			signoremobileresize: true,
			effects: true
		}
	});
	return (
		<>
			<Providers>
				<div id='smooth-wrapper'
				     ref={smoothWrapperRef}>
					<div id='smooth-content'
					     ref={smoothContentRef}>
						<main>
							<HeroSection src='images/curology-apply%20ad.webp' />
							<IntroSection />
							<ProductSection />
						</main>
					</div>
				</div>
			</Providers>
			<ScrollThumb color={'rgba(37, 99, 235, 1)'}
			             width={'6px'}
			             height={'64px'}
			             position={'right'}
			             zIndex={'100'}
			             borderRadius={'8px'}
			             hidetime={'3'} />
		</>
	);
}
