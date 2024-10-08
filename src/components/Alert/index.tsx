import Image from "next/image";
import warn from '@/assets/icons/warning.svg';

import styles from "./Alert.module.css";

export default function Alert({ children, type }: {
    children: React.ReactNode,
    type: 'warn'
}) {
    return (
        <div className={styles.card}>
            <Image
                src={warn}
                alt=""
                width={32}
                height={32}
                priority
            />
            {children}
        </div>
    )
}