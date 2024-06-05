'use client';
import { useEffect, useState } from 'react';

export default function VideoBackground() {
  const videoBackgroundHorizontal = 'videos/VIDEO_WEB_MAIN_HERO.webm';
  const videoBackgroundHorizontalM4v = 'videos/VIDEO_WEB_MAIN_HERO.m4v';
  const videoBackgroundHorizontalMp4 = 'videos/VIDEO_WEB_MAIN_HERO.mp4';
  const videoBackgroundVertical =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.webm';
  const videoBackgroundVerticalM4v =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.m4v';
  const videoBackgroundVerticalMp4 =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.m4v';

  function getInitialOrientation() {
    return (
      typeof window !== 'undefined' &&
      window.screen.orientation.type.startsWith('portrait')
    );
  }
  const [videoWebm, setVideoWebm] = useState('');
  const [videoM4v, setVideoM4v] = useState('');
  const [videoMp4, setVideoMp4] = useState('');
  const [key, setKey] = useState(0);
  const updateOrientation = () => {
    const isCurrentlyPortrait =
      window.screen.orientation.type.startsWith('portrait');
    setVideoWebm(
      isCurrentlyPortrait ? videoBackgroundVertical : videoBackgroundHorizontal
    );
    setVideoM4v(
      isCurrentlyPortrait
        ? videoBackgroundVerticalM4v
        : videoBackgroundHorizontalM4v
    );
    setVideoMp4(
      isCurrentlyPortrait
        ? videoBackgroundVerticalMp4
        : videoBackgroundHorizontalMp4
    );
    setKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    updateOrientation();
    window.screen.orientation.addEventListener('change', updateOrientation);
    return () => {
      window.screen.orientation.removeEventListener(
        'change',
        updateOrientation
      );
    };
  }, []);

  return (
    <video key={key} autoPlay loop muted playsInline className="heroBackground">
      {
        <>
          <source src={videoWebm} type="video/webm" />
          <source src={videoM4v} type="video/m4v" />
          <source src={videoMp4} type="video/mp4" />
        </>
      }
      Your browser does not support the video tag.
    </video>
  );
}
