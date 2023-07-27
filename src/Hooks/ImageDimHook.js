import { useEffect } from "react";

const useImgDimHook = (mediaRef, defaultMedia) => {
    useEffect(() => {
        const imageDimensionSet = () => {
          if(mediaRef.current){
            const image = new Image();
            image.src = defaultMedia;
            image.onload = () => {
              const imageWidth = +image.width;
              const imageHeight = +image.height;
    
              let desiredWidth = imageWidth;
              let desiredHeight = imageHeight;
    
              if(imageWidth > 520){
                const excessWidth = imageWidth - 520;
                const excessPerc = Math.round((excessWidth / imageWidth) * 100);
    
                desiredWidth = 520;
                desiredHeight = Math.round(((100 - excessPerc) / 100) * imageHeight);
              } 
              mediaRef.current.style.width = `${desiredWidth}px`;
              mediaRef.current.style.height = `${desiredHeight}px`;
            }
          }
    
        }
        imageDimensionSet()
    }, [])
}

export default useImgDimHook;