import CustomImage from '@/components/Images/CustomImage';
import CustomVideo from '@/components/Videos/CustomVideo';

export default function IntroSection () {

	return (
		<section className='s2Parent'>
			<div className='p-5'>
				<div className='mb-5 max-[800px]:max-w-[500px] min-[801px]:max-w-[650px]'>
					<blockquote>
						Welcome to Curology, where skin care becomes a personalized journey. Unveil your skin is true
						potential with our dermatologist-designed, science-based solutions. Say goodbye to generic
						skincare and hello to a world where your unique skin goals take center stage. Whether it is
						conquering acne, banishing dark spots, or embracing firmer skin, Curology is your trusted ally.
						Join us and redefine the future of skincare.
					</blockquote>
				</div>
				<div className='mb-4 border-t-2 border-b-2 border-b-black border-t-black'>
					<div className='grid lg:grid-cols-4 max-sm:grid-cols-1 sm:grid-cols-2 gap-4 py-5'>
							<figure
								className='max-w-[450px]'>
								<CustomImage
									src='images/curology-sink%20ad.webp'
									alt='Curology Showcase Ad'
									aspectRatio={2 / 3}
								/>
								<figcaption>
									Made for your skin goals
								</figcaption>
							</figure>
							<div className='flex justify-center'>
								<figure
									className='min-[601px]:max-w-[300px] max-[600px]:max-w-[250px]'>
									<CustomImage
										src='images/curology-poster.webp'
										alt='Curology Showcase Ad'
										aspectRatio={205 / 318}
									/>
								</figure>
							</div>
							<figure
								className='max-w-[450px]'>
								<CustomImage
									src='images/curology-granny%20ad.webp'
									alt='Curology Showcase Ad'
									aspectRatio={1920 / 2879}
								/>
								<figcaption className='text-balance'>
									Dermatologist-designed and Science-based
								</figcaption>
							</figure>
						<div className='w-full h-full flex items-end'>
							<blockquote>
								Beauty starts with healthy, glowing skin. Curology is more than just skincare – it is a transformation.
								We understand that every individual is unique, and so is their skin. That is why we have harnessed the
								power of science and innovation to create a range of products that adapt to your specific needs.
							</blockquote>
						</div>
					</div>
				</div>
			</div>
			<div className='min-[801px]:grid min-[801px]:place-items-end'>
				<CustomVideo
					id={'intro-video'}
					videoSrc='curology/video/background%20video/large%20screen/large.m3u8'
					aspectRatio={25 / 12}
				/>
			</div>
			</section>
	);
}
