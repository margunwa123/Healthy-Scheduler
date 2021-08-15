import { useEffect, useState } from 'react';

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  const toggleAudioPlaying = () => setAudioPlaying(!audioPlaying);

  useEffect(() => {
    audioPlaying ? audio.play() : audio.pause();
  }, [audioPlaying]);

  useEffect(() => {
    audio.addEventListener('ended', () => setAudioPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setAudioPlaying(false));
    };
  }, []);

  return { audioPlaying, toggleAudioPlaying };
};
export { useAudio };
