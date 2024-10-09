import Image from "next/image";

import styles from './UserCard.module.css'

type UserProps = {
    user: {
        avatar_url: string;
        name: string;
        location: string;
        bio: string;
        public_repos: number;
        followers: number;
        following: number;
    }
}

export default function UserCard({ user }: UserProps) {
    const { avatar_url, name, location, bio, public_repos, followers, following } = user;

    return (
        <div className={styles.card}>
            <Image
                className={styles.avatar}
                src={user.avatar_url}
                alt=""
                width={60}
                height={60}
                priority
            />

            <h2 className={styles.name}>{name}</h2>
            <p className={styles.location}>{location}</p>
            <p className={styles.bio}>{bio}</p>

            <div className={styles.stats}>
                <div>
                    <span className={styles.statNumber}>{followers}</span>
                    <span className={styles.statLabel}>Seguidores</span>
                </div>
                <div>
                    <span className={styles.statNumber}>{following}</span>
                    <span className={styles.statLabel}>Seguindo</span>
                </div>
                <div>
                    <span className={styles.statNumber}>{public_repos}</span>
                    <span className={styles.statLabel}>Repositórios Públicos</span>
                </div>
            </div>
        </div>
    )
}
