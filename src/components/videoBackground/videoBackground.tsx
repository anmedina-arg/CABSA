'use client';
import { useEffect, useState } from 'react';

export default function VideoBackground() {
  const videoBackgroundHorizontal = 'videos/VIDEO_WEB_MAIN_HERO.webm';
  const videoBackgroundHorizontalIos = 'videos/VIDEO_WEB_MAIN_HERO.m4v';
  const videoBackgroundHorizontalMp4 = 'videos/VIDEO_WEB_MAIN_HERO.mp4';
  const videoBackgroundVertical =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.webm';
  const videoBackgroundVerticalIos =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.m4v';
  const videoBackgroundVerticalMp4 =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.m4v';

  const [isPortrait, setIsPortrait] = useState(false);
  const [key, setKey] = useState(0); // Estado adicional para forzar el rerender

  const updateOrientation = () => {
    setIsPortrait(window.innerHeight > window.innerWidth);
    setKey(prevKey => prevKey + 1); // Actualiza el estado del key para forzar el rerender
  };

  useEffect(() => {
    window.addEventListener('resize', updateOrientation);
    window.addEventListener('orientationchange', updateOrientation);

    return () => {
      window.removeEventListener('resize', updateOrientation);
      window.removeEventListener('orientationchange', updateOrientation);
    };
  }, []);

  return (
    <video key={key} autoPlay loop muted playsInline className="heroBackground">
      {
        <>
          {isPortrait ? (
            <>
              <source src={videoBackgroundVertical} type="video/webm" />
              <source src={videoBackgroundVerticalIos} type="video/mp4" />
              <source src={videoBackgroundVerticalMp4} type="video/mp4" />
            </>
          ) : (
            <>
              <source src={videoBackgroundHorizontal} type="video/webm" />
              <source src={videoBackgroundHorizontalIos} type="video/mp4" />
              <source src={videoBackgroundHorizontalMp4} type="video/mp4" />
            </>
          )}
        </>
      }
      Your browser does not support the video tag.
    </video>
  );
}
