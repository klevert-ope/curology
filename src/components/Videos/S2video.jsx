import { VideoPlayer } from '@/src/components/Videos/VideoPlayer';

export function VideoLaptop () {
  const videoSrc = 'curology/video/background%20video/large%20screen/large.m3u8';

  return (
    <div className='aspect-[25 / 12] hidden min-[501px]:block'>
      <VideoPlayer id='Laptop'
                   videoSrc={videoSrc}
                   width='1500'
                   height='720'
      />
    </div>

  );
}

export function VideoMobile () {
  const videoSrc = 'curology/video/background%20video/mobile/mobile.m3u8';

  return (
    <div className='aspect-[300 / 533] hidden max-[500px]:block'>
      <VideoPlayer id='Mobile'
                   videoSrc={videoSrc}
                   width='600'
                   height='1066'
      />
    </div>

  );
}
