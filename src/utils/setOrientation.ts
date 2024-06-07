export function orientation(
  setWidth: any,
  setHeight: any,
  setKey: any,
  widthMobile: string,
  widthDesktop: string,
  widthTablet: string,
  heightMobile: string,
  heightDesktop: string
) {
  const currentOrientation =
    window.screen.orientation.type.startsWith('portrait');

  const actualWidth = window.innerWidth;

  setWidth(
    currentOrientation
      ? actualWidth < 768
        ? widthMobile
        : widthTablet
      : widthDesktop
  );

  setHeight(currentOrientation 
    ? actualWidth < 768 
      ? heightMobile 
      : heightDesktop
    : heightDesktop  
  );

  setKey((prevKey: number) => prevKey + 1);
}
