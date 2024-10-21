import Image, { StaticImageData } from "next/image";

import styles from './ImageWrapper.module.css'

interface ImageWrapperProps {
    image: string | StaticImageData,
    source?: string,
    width?: number,
    height?: number
}

export default function ImageWrapper({ image, source, width = 600, height = 380 }: ImageWrapperProps) {
    return (
        <div className={styles.imageWrapper}>
            <Image
                src={image}
                alt=""
                width={width}
                height={height}
                priority
            />
            {source && <p className={styles.sub}>Fonte: {source}</p>}
        </div>
    );
}
