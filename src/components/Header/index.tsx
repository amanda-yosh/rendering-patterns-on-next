import Link from 'next/link';

import styles from './Header.module.css'
import { useState } from 'react';

const pageLinks = [
    { href: '/static-rendering', name: 'Renderização Estática' },
    { href: '/static-rendering-with-fetch', name: 'Renderização Estática com Fetch' },
    { href: '/static-rendering-with-getStaticProps', name: 'Renderização Estática com getStaticProps' },
    { href: '/incremental-static-regeneration', name: 'Regeneração Incremental Estática' },
    { href: '/on-demant-incremental-static-regeneration', name: 'Regeneração Incremental Estática On Demand' },
    { href: '/server-side-rendering', name: 'Renderização do lado do servidor' },
]

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
                        {pageLinks.map(({ href, name }) => (
                            <Link href={href} key={name} className={styles.link}>{name}</Link>
                        ))}
                    </div>
                </div>}
            </div>
        </header>
    );
}