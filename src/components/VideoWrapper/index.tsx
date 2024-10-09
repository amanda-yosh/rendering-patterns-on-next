import styles from './VideoWrapper.module.css'

export default function VideoWrapper({ fileName, fileType = 'webm', source }: {
    fileName: string,
    fileType?: string,
    source?: string
}) {
    return (
        <div className={styles.container}>
            <video width="640" height="360" controls>
                <source src={`/${fileName}`} type={`video/${fileType}`} />
                Seu navegador não suporta o formato de vídeo.
            </video>
            <p className={styles.sub}>{source}</p>
        </div>
    )
}
