import Link from 'next/link';
import { useState } from 'react';

import styles from './Header.module.css'

import { routes } from '@/utils/routes';

export default function Header() {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <Link href='/' className={styles.link}>Início</Link>

            <div>
                <button onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                    Padrões de renderização
                </button>

                {dropdownIsOpen && <div>
                    <div className={styles.dropdown}>
                        {routes.map(({ href, name }) => (
                            <Link href={href} key={name} className={styles.link}>{name}</Link>
                        ))}
                    </div>
                </div>}
            </div>
        </header>
    );
}