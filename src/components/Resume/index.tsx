import Image from "next/image";

interface ResumeProps {
    title: string;
    qualifications: Array<{
        name: string;
        score: 'good' | 'warn'; // | 'bad';
    }>;
}

import check from '@/assets/icons/checked.svg';
import warn from '@/assets/icons/warning.svg';

import styles from "./Resume.module.css";

export default function Resume({ title, qualifications }: ResumeProps) {
    return (
        <div className={styles.resumeWrapper}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.cardsWrapper}>
                {qualifications.map((qualification) => (
                    <div
                        className={`${styles.card} ${qualification.score === 'good' ? styles.good : styles.warn}`}
                        key={qualification.name}
                    >
                        <Image
                            src={qualification.score === 'good' ? check : warn}
                            alt=""
                            width={32}
                            height={32}
                            priority
                        />
                        <p>{qualification.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
