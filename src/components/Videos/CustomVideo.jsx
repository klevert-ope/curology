import VideoLoader from '@/src/components/Videos/VideoLoader';
import { useVideoFetcher } from '@/src/hooks/Videos/useVideoFetcher';
import { useVideoPlayer } from '@/src/hooks/Videos/useVideoPlayer';
import dynamic from 'next/dynamic';

const Controls = dynamic (() => import('@/src/components/Videos/Controls'));

function CustomVideo ({ videoSrc, height, width }) {
  const { videoSource, loading, error } = useVideoFetcher (videoSrc);
  const { videoRef } = useVideoPlayer (videoSource);

  const handleContextMenu = (e) => {
    e.preventDefault ();
  };

  return (
    <>
      {loading ? (
        <VideoLoader />
      ) : error ? (
        <div className='error-message'>Error loading video: {error.message}</div>
      ) : videoSource && (
        <div className='relative'>
          <Controls videoRef={videoRef} />
          <video
            ref={videoRef}
            width={width}
            height={height}
            controls={false}
            preload='auto'
            playsInline={true}
            disablePictureInPicture
            onContextMenu={handleContextMenu}
            className='h-auto w-full object-cover'
          >
            <source src={videoSource}
                    type='application/x-mpegURL' />
          </video>
        </div>
      )}
    </>
  );
}

export default CustomVideo;
