import ContentLoader from 'react-content-loader';

const VideoLoader = () => (
  <ContentLoader
    id='video-loader'
    ltr='true'
    speed={5}
    width='100%'
    height='720'
    backgroundColor='#ebeaea'
    foregroundColor='#fffafa'
  >
    <rect x='0'
          y='0'
          rx='0'
          ry='0'
          width='100%'
          height='720' />
  </ContentLoader>
);

export default VideoLoader;
