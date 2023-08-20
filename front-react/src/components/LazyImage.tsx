import React, { FC, useCallback, useEffect, useState } from "react";
import PLACEHOLDER_IMG from "../img/placeholder_img.png";
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const LazyImage: FC<ImageProps> = ({ src, ...props }: ImageProps) => {
    const [imgSrc, setSrc] = useState(src);
    const [loaded, setLoaded] = useState(false);

    const onLoad = useCallback(() => {
        setSrc(src);
        setLoaded(true);
    }, [src]);

    useEffect(() => {
        const img = new Image();
        img.src = src as string;
        img.addEventListener("load", onLoad);

        return () => {
            img.removeEventListener("load", onLoad);
        };
    }, [src, onLoad]);
    if (!loaded) return <img {...props} alt={imgSrc} src={PLACEHOLDER_IMG} className={props.className} />;
    return <img {...props} alt={imgSrc} src={imgSrc} className={props.className} />;
};
