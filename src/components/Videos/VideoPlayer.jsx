import CustomVideo from '@/src/components/Videos/CustomVideo';

export function VideoPlayer ({ videoSrc, id, height, width }) {
  return (
    <div id={id}>
      <CustomVideo videoSrc={videoSrc}
                   width={width}
                   height={height} />
    </div>
  );
}
