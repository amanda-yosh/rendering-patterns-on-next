import styles from './Title.module.css'

export default function Title({ children, borderBlack }: { children: React.ReactNode, borderBlack?: boolean }) {
    return (
        <h1
            className={styles.title}
            style={{ borderColor: borderBlack ? '#000' : '#ffde21' }}>
            {children}
        </h1>
    );
}
