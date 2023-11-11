import {VideoLaptop, VideoMobile} from '@/components/Videos/S2video';
import dynamic from 'next/dynamic';

const CustomImage = dynamic(() => import('@/components/Images/CustomImage'));

function S2() {
	return (
		<section id='S2parent'>
			<div id='S2div1'>
				<blockquote id='quote2' className='p-5 max-w-md'>
					Welcome to Curology, where skin care becomes a personalized journey. Unveil your skin is true
					potential with our dermatologist-designed, science-based solutions. Say goodbye to generic
					skincare and hello to a world where your unique skin goals take center stage. Whether it is
					conquering acne, banishing dark spots, or embracing firmer skin, Curology is your trusted ally.
					Join us and redefine the future of skincare.
				</blockquote>
			</div>
			<div id='S2div2' className='grid justify-items-end'>
				<div className=' p-5 max-w-md'>
					<CustomImage
						src='images/curology-mirror.webp'
						alt='Curology Showcase Ad'
					/>
					<figcaption>
						Indulge in the luxury of self-care with our products, designed to pamper and rejuvenate your
						skin. With Curology, you are not just buying skincare; you are investing in your confidence and
						well-being.
					</figcaption>
				</div>
			</div>
			<div id='S2div3' className='grid justify-items-start p-5'>
				<div className=' max-w-sm'>
					<CustomImage
						src='images/curology-sink%20ad.webp'
						alt='Curology Showcase Ad'
					/>
					<figcaption>
						Made for your skin goals
					</figcaption>
				</div>
			</div>
			<div id='S2div4' className='grid justify-items-center'>
				<div className=' max-w-sm'>
					<CustomImage
						src='images/curology-poster.webp'
						alt='Curology Showcase Ad'
					/>
				</div>
			</div>
			<div id='S2div5' className='grid justify-items-end p-5'>
				<div className=' max-w-sm'>
					<CustomImage
						src='images/curology-granny%20ad.webp'
						alt='Curology Showcase Ad'
					/>
					<figcaption>
						Dermatologist-designed and Science-based
					</figcaption>
				</div>
			</div>
			<div id='S2div6'>
				<VideoLaptop/>
				<VideoMobile/>
			</div>
		</section>
	);
}

export default S2;
