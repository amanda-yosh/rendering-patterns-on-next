import Image, { StaticImageData } from "next/image";

import styles from './ImageWrapper.module.css'

export default function ImageWrapper({ image, source }: {
    image: string | StaticImageData,
    source?: string
}) {
    return (
        <div className={styles.imageWrapper}>
            <Image
                src={image}
                alt=""
                width={600}
                height={380}
                priority
            />
            {source && <p className={styles.sub}>{source}</p>}
        </div>
    );
}
