import useEvent from '@react-hook/event';
import { useCallback, useState } from 'react';

export function useVideoControls ({ current: video }) {
  const [isPaused, setIsPaused] = useState (true);
  const [progress, setProgress] = useState (0);
  const [isBuffering, setIsBuffering] = useState (false);

  const updateProgressBar = useCallback (() => {
    setProgress ((prevProgress) => {
      if (video && video.duration) {
        return (video.currentTime / video.duration) * 100;
      }
      return prevProgress;
    });
  }, [video]);

  const updatePlayPauseState = useCallback (() => {
    setIsPaused (video.paused);
  }, [video]);

  const handleWaitingEvent = useCallback (() => {
    setIsBuffering (true);
  }, []);

  const handleCanPlayEvent = useCallback (() => {
    setIsBuffering (false);
  }, []);

  const togglePlayPause = useCallback (() => {
    try {
      if (video) {
        video.paused ? video.play () : video.pause ();
      }
    } catch (error) {
      console.error ('Error toggling play/pause:', error);
    }
  }, [video]);

  useEvent (video, 'timeupdate', updateProgressBar);
  useEvent (video, 'play', updatePlayPauseState);
  useEvent (video, 'pause', updatePlayPauseState);
  useEvent (video, 'waiting', handleWaitingEvent);
  useEvent (video, 'canplay', handleCanPlayEvent);

  return { isPaused, progress, isBuffering, togglePlayPause };
}
