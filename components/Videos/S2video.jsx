import { VideoPlayer } from "@/components/Videos/VideoPlayer";

export function VideoLaptop() {
  const videoSrc = "curology/video/background%20video/large%20screen/large.m3u8";

  return (
    <VideoPlayer id="Laptop" videoSrc={videoSrc} width="1500" height="720" />
  );
}

export function VideoMobile() {
  const videoSrc = "curology/video/background%20video/mobile/mobile.m3u8";

  return (
    <VideoPlayer id="Mobile" videoSrc={videoSrc} width="600" height="1066" />
  );
}

