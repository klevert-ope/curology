import { useVideoFetcher } from "@/hooks/Videos/useVideoFetcher";
import { useVideoPlayer } from "@/hooks/Videos/useVideoPlayer";
import dynamic from "next/dynamic";

const Controls = dynamic(() => import("@/components/Videos/Controls"));
const VideoLoader = dynamic(() => import("@/components/Videos/VideoLoader"));

function CustomVideo({ videoSrc, height, width }) {
  const { videoSource, isLoading, isError } = useVideoFetcher(videoSrc);
  const { videoRef } = useVideoPlayer(videoSource);

  if (isError) {
    return <div>Error loading video</div>;
  }

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        {isLoading ? (
          <VideoLoader />
        ) : videoSource ? (
          <div>
            <div className="relative">
              <Controls videoRef={videoRef} />
              <video
                ref={videoRef}
                width={width}
                height={height}
                controls={false}
                className="w-full object-contain"
                onContextMenu={handleContextMenu}
              >
                <source src={videoSource} type="application/x-mpegURL" />
              </video>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default CustomVideo;
