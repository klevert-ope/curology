import {useBackgroundFetcher} from '@/hooks/Images/useBackgroundFetcher';

function S1({src}) {
	const {imageUrl, error} = useBackgroundFetcher(src);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const sectionStyle = {
		backgroundImage: `url(${imageUrl})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		width: '100%',
		height: '100svh',
	};

	return (
		<section id='S1parent' style={sectionStyle}>
			<div id='S1div1' className=' grid justify-items-center items-center'>
				<div>
					<h1 id='title' className='text-amber-300 '>Curology</h1>
					<blockquote id='quote1' className=' text-black '>See yourself transform</blockquote>
				</div>
			</div>
			<div id='S1div2' className=' grid justify-items-end items-end'>
				<div id='achievements' className='mr-3 mb-2 '>
					<ul>93% report effective</ul>
					<ul> 5M+ treated</ul>
					<ul>9K+ 5-star reviews</ul>
				</div>
			</div>
		</section>
	);
}

export default S1;
