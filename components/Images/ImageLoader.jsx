import ContentLoader from 'react-content-loader';

const ImageLoader = () => {
	return (
		<ContentLoader
			speed={2}
			width='350'
			height='450'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
			className='ContentLoader'
		>
			<rect
				x='0'
				y='0'
				rx='0'
				ry='0'
				width='350'
				height='450'
			/>
		</ContentLoader>
	);
}
export default ImageLoader;
