import Link from "next/link";

import styles from './UserPanel.module.css';

type UserProps = {
    name: string,
    avatar_url: string,
    company: string,
    login: string,
    location: string,
    bio: string,
    id: string,
    html_url: string,
    email: string,
    followers: number,
    following: number,
    public_repos: number,
}

export default function UserPanel({ user }: { user: UserProps }) {
    const {
        bio = '',
        name = '',
        login = '',
        avatar_url = '',
        company = '',
        location = '',
        id = '',
        followers = 0,
        following = 0,
        public_repos = 0,
        html_url = ''
    } = user;

    return (
        <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
                <img src={avatar_url} alt={`Avatar de ${name}`} className={styles.avatar} />
                <div className={styles.profileInfo}>
                    <h2>{name}</h2>
                    <p className={styles.login}>{id}</p>
                    <p className={styles.login}>{login}</p>
                    <p className={styles.location}>{location}</p>
                    <p className={styles.company}>Company: {company}</p>
                    <p className={styles.bio}>{bio}</p>
                </div>
            </div>

            <div className={styles.profileStats}>
                <div className={styles.stat}>
                    <p>Repos</p>
                    <p className={styles.statValue}>{public_repos}</p>
                </div>
                <div className={styles.stat}>
                    <p>Followers</p>
                    <p className={styles.statValue}>{followers}</p>
                </div>
                <div className={styles.stat}>
                    <p>Following</p>
                    <p className={styles.statValue}>{following}</p>
                </div>
            </div>

            <div className={styles.profileLinks}>
                <Link className={styles.linkItem} href={html_url} target="_blank">
                    GitHub Profile
                </Link>
                <Link className={styles.linkItem} href={`${html_url}?tab=repositories`} target="_blank">
                    View Repositories
                </Link>
            </div>
        </div>
    )
}