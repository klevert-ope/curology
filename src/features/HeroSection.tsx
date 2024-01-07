import React from "react";
import { useBackgroundFetcher } from "@/src/hooks/Images/useBackgroundFetcher";

interface HeroSectionProps {
	src: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ src }: HeroSectionProps) => {
	const { imageUrl, error } = useBackgroundFetcher({ src });

	if (error) {
		return <div>Error loading background image</div>;
	}

	const sectionStyle: React.CSSProperties = {
		backgroundImage: `url(${imageUrl})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};

	const achievements: string[] = [
		'93% report effective',
		'5M+ treated',
		'9K+ 5-star reviews',
	];

	return (
		<section className='s1Parent h-svh w-full' style={sectionStyle}>
			<div className='grid items-center justify-items-center s1Div1'>
				<div>
					<h1 className='text-amber-300 title pointer-events-none'>Curology</h1>
					<h2 className='text-black quote1 pointer-events-none'>See yourself transform</h2>
				</div>
			</div>
			<div className='grid items-end justify-items-end s1Div2'>
					<ul  className='mr-3 mb-2 achievements'>
						{achievements.map((item: string, index: number) => (
							<li key={String([index])}>{item}</li>
						))}
					</ul>
			</div>
		</section>
	);
};

export default HeroSection;
