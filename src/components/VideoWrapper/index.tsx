export default function VideoWrapper({ fileName, fileType = 'webm', source }: {
    fileName: string,
    fileType?: string,
    source?: string
}) {
    return (
        <>
            <video width="640" height="360" controls>
                <source src={`/${fileName}`} type={`video/${fileType}`} />
                Seu navegador não suporta o formato de vídeo.
            </video>
            <p>{source}</p>
        </>
    )
}
