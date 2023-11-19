import ContentLoader from 'react-content-loader';

const ImageLoader = () => {
  return (
    <div className='p-5 max-w-[350px]'>
      <ContentLoader
        speed={2}
        width='300'
        height='400'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        className='ContentLoader'
      >
        <rect
          x='0'
          y='0'
          rx='0'
          ry='0'
          width='300'
          height='400'
        />
      </ContentLoader>
    </div>
  );
};
export default ImageLoader;
