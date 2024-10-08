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
        // se for warn mudar a cor do background
        <div className={styles.resumeWrapper}>
            <h2>{title}</h2>
            <div className={styles.cardsWrapper}>
                {qualifications.map((qualification) => (
                    <div className={styles.card} key={qualification.name}>
                        <Image
                            className="logo"
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
