'use client';
import { useEffect, useState } from 'react';

type VideoSrc = {
  src: string;
  type: 'video/webm' | 'video/m4v' | 'video/mp4';
};

export default function VideoBackground() {
  const videoBackgroundHorizontal = 'videos/VIDEO_WEB_MAIN_HERO.webm';
  const videoBackgroundHorizontalM4v = 'videos/VIDEO_WEB_MAIN_HERO.m4v';
  const videoBackgroundHorizontalMp4 = 'videos/VIDEO_WEB_MAIN_HERO.mp4';
  const videoBackgroundVertical =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.webm';
  const videoBackgroundVerticalM4v =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.m4v';
  const videoBackgroundVerticalMp4 =
    'videos/VIDEO_WEB_MAIN_HERO_MOBILE_VERTICAL.mp4';

  const [videoSrcs, setVideosSrcs] = useState<VideoSrc[]>([
    {
      src: '',
      type: 'video/webm',
    },
    {
      src: '',
      type: 'video/m4v',
    },
    {
      src: '',
      type: 'video/mp4',
    },
  ]);
  const [key, setKey] = useState<{ id: number; portrait: null | boolean }>({
    id: 0,
    portrait: null,
  });

  function updateOrientation() {
    const isCurrentlyPortrait =
      window.screen.orientation?.type.startsWith('portrait') ||
      window.innerHeight > window.innerWidth;

    setVideosSrcs(
      isCurrentlyPortrait
        ? [
          {
            src: videoBackgroundVertical,
            type: 'video/webm',
          },
          {
            src: videoBackgroundVerticalM4v,
            type: 'video/m4v',
          },
          {
            src: videoBackgroundVerticalMp4,
            type: 'video/mp4',
          },
        ]
        : [
          {
            src: videoBackgroundHorizontal,
            type: 'video/webm',
          },
          {
            src: videoBackgroundHorizontalM4v,
            type: 'video/m4v',
          },
          {
            src: videoBackgroundHorizontalMp4,
            type: 'video/mp4',
          },
        ]
    );

    setKey(prevKey => {
      if (prevKey.portrait === isCurrentlyPortrait) {
        return prevKey;
      }
      return {
        portrait: isCurrentlyPortrait,
        id: prevKey.id + 1,
      };
    });
  }

  useEffect(() => {
    updateOrientation();
    if ('orientation' in screen) {
      window.screen.orientation.addEventListener('change', updateOrientation);
      return () => {
        window.screen.orientation.removeEventListener(
          'change',
          updateOrientation
        );
      };
    }
    window.addEventListener('resize', updateOrientation);
    return () => {
      window.removeEventListener('resize', updateOrientation);
    };
  }, []);

  return (
    <video
      key={key.id}
      autoPlay
      loop
      muted
      playsInline
      className="heroBackground"
    >
      {videoSrcs.map(video => (
        <source src={video.src} type={video.type} />
      ))}
      Your browser does not support the video tag.
    </video>
  );
}
