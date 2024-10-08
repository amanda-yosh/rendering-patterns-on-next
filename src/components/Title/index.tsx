import styles from './Title.module.css'

export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h1 className={styles.title}>{children}</h1>
    );
}
