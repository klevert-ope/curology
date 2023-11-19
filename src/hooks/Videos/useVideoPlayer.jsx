const Hls = require ('hls.js');
import { useCallback, useEffect, useRef } from 'react';

export function useVideoPlayer (videoSource) {
  const videoRef = useRef (null);
  const hlsRef = useRef (null);
  const loadHlsPromiseRef = useRef (null);

  const handleManifestParsed = useCallback (() => {
    videoRef.current?.play ();
  }, []);

  useEffect (() => {
    let isMounted = true;

    const loadHls = async () => {
      if (! isMounted || ! videoSource || ! Hls.isSupported ()) {
        return;
      }

      const video = videoRef.current || document.createElement ('video');
      if (! videoRef.current) {
        videoRef.current = video;
      }

      if (! hlsRef.current) {
        hlsRef.current = new Hls ();
        hlsRef.current.loadSource (videoSource);
        hlsRef.current.attachMedia (video);
        hlsRef.current.on (Hls.Events.MANIFEST_PARSED, handleManifestParsed);
      }
    };

    loadHlsPromiseRef.current = loadHls ();

    return () => {
      isMounted = false;

      if (hlsRef.current) {
        hlsRef.current.off (Hls.Events.MANIFEST_PARSED, handleManifestParsed);
        hlsRef.current.destroy ();
      }

      loadHlsPromiseRef.current?.catch ((error) => {
        console.error ('Error during cleanup:', error);
      });
    };
  }, [videoSource, handleManifestParsed]);

  return { videoRef };
}
