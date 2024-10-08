import Image from "next/image";

interface DogCardProps {
    name: string,
    age: number,
    breed: string,
    veterinary_history: {
        vaccines: Array<string>,
        deworming: string,
        castration: boolean
    },
    image: string
}

import styles from "./DogCard.module.css";

export default function DogCard({ name, age, breed, image, veterinary_history }: DogCardProps) {
    const { vaccines, deworming, castration } = veterinary_history;

    return (
        <div className={styles.card}>
            <Image
                src={image}
                alt=""
                width={300}
                height={180}
                priority
            />

            <div className={styles.container}>
                <p>Nome: {name} | Idade: {age}</p>
                <p>Raça: {breed}</p>

                <p>Histórico Veterinário</p>

                <p>Vacinas: {vaccines.map((vaccine) => <span key={vaccine}>{vaccine},</span>)}</p>
                <p>Vermifugação: <span>{deworming}</span></p>
                <p>Castrado? <span>{castration ? 'SIM' : 'NÃO'}</span></p>
            </div>
        </div>
    )
}