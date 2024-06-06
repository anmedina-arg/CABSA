export function orientation(
  setWidth: any, 
  setHeight: any, 
  setKey: any, 
  widthMobile: string, 
  widthDesktop: string,
  heightMobile: string,
  heightDesktop: string
) {
  const currentOrientation =  window.screen.orientation.type.startsWith('portrait');

  setWidth( currentOrientation ? 
    widthMobile : widthDesktop
  );

  setHeight( currentOrientation ? 
    heightMobile : heightDesktop
  );
  setKey((prevKey: number) => prevKey + 1);
}