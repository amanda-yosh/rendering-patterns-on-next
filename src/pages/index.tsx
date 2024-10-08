import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Title from "@/components/Title";

import questionGirl from '@/assets/home/question-girl.jpeg';
import browserRender from '@/assets/home/how-browsers-render-web-pages.png'

import styles from "@/styles/Home.module.css";

export default function Home() {
  const pages = [
    {
      href: '/static-rendering',
      name: 'Renderização Estática',
    },
    {
      href: '/static-rendering-with-fetch',
      name: 'Renderização Estática com Fetch',
    },
    {
      href: '/static-rendering-with-getStaticProps',
      name: 'Renderização Estática com getStaticProps',
    },
    {
      href: '/server-side-rendering',
      name: 'Renderização do lado do servidor',
    }
  ]

  return (
    <>
      <Head>
        <title>Padrões de Renderização | Rendering Patterns</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <main className={styles.main}>
          <Title>Padrões de Renderização | Rendering Patterns</Title>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Image
              aria-hidden
              src={questionGirl}
              alt="File icon"
              width={180}
              height={180}
            />
            <h2 style={{ lineHeight: '2rem' }}>
              Onde & <br />
              Quando o conteúdo deve ser renderizado?
            </h2>
          </div>

          <p>
            Durante o desenvolvimento web, um questionamento crucial é: &quot;Onde e quando o conteúdo deve ser renderizado&quot;
            <br />
            As opções — servidor, build ou cliente — influenciam a performance e a experiência do usuário, e a renderização pode ser feita de uma vez, em partes ou progressivamente.
          </p>

          <p>
            A escolha vai depender do caso de uso e irá pesar tanto para o time de desenvolvimento, que utilizará as ferramentas de engenharia para construir a aplicação, quanto para o usuário final, que terá a experiência de utilizar a aplicação.
          </p>

          <p>
            A escolha correta para cada caso de uso pode levar a builds mais rápidos e uma melhor performance a um baixo custo de processamento. Entretanto, a escolha errada pode matar uma aplicação.
          </p>

          <p>
            Aqui, o objetivo é entender os padrões de renderização para colocá-los em desenvolvimento da forma mais certeira possível. Utilizaremos uma aplicação em Next.js para entender e colocar em prática os padrões de renderização.
          </p>

          <p>
            Alguns padrões de renderização são:
            <br />
            SSG | ISR | SSR | Streaming SSR | Edge Rendering | Static Rendering | RSC
          </p>

          <section className={styles.section}>
            <h2>Como navegadores renderizam páginas web</h2>

            <Image
              aria-hidden
              src={browserRender}
              alt=""
              width={660}
              height={300}
            />
          </section>

          <section className={styles.section}>
            <h2>Padrões de Renderização</h2>

            <div className={styles.ctas}>
              {pages.map(({ href, name }) => (
                <Link href={href} className={styles.ctaLink} key={name}>
                  <Image
                    aria-hidden
                    src="https://nextjs.org/icons/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                  />
                  {name}
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
