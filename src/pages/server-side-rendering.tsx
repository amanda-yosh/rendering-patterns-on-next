import Head from "next/head";
import Image from "next/image";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import Resume from "@/components/Resume";
import Title from "@/components/Title";

import img2 from '@/assets/server-rendering/ssr2.png'

import pagesStyles from '@/styles/Pages.module.css'
import styles from "@/styles/StaticRendering.module.css";
import Alert from "@/components/Alert";

type Repo = {
    name: string
    stargazers_count: number
}

export default function ServerSideRendering({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log('HERE', repo.stargazers_count)

    return (
        <>
            <Head>
                <title>Renderização do lado do Servidor | Server Side Rendering</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={pagesStyles.page}>
                <main className={pagesStyles.main}>
                    <Title borderBlack>
                        Esta é uma página que renderiza do lado do servidor
                    </Title>

                    <section className={pagesStyles.section}>
                        <p>
                            Com a renderização do lado do servidor, <span className={styles.focus}>geramos o HTML para cada solicitação</span>. Essa abordagem é mais adequada para páginas que contêm dados personalizados, por exemplo, dados baseados no cookie do usuário ou dados obtidos da solicitação do usuário. Também é adequada para páginas que devem bloquear a renderização, talvez com base no estado de autenticação.
                        </p>

                        <p>
                            Um painel personalizado é um excelente exemplo de conteúdo altamente dinâmico em uma página. A maior parte do conteúdo é baseada na identidade do usuário ou no nível de autorização que pode estar contido em um cookie de usuário. Este painel só mostra quando um usuário é autenticado e possivelmente mostra dados confidenciais específicos do usuário que não devem ser visíveis para outros.
                        </p>

                        <p>
                            O Next.js possui o método <span className={styles.focus}>getServerSideProps</span> que permite a renderização da página no servidor. Esse método <span className={styles.focus}>roda no servidor para cada solicitação</span> e <span className={styles.focus}>passa os dados retornados para a página para gerar o HTML</span>.
                        </p>

                        <Alert>
                            <p>
                                <span className={styles.focus}>INDICADO PARA</span> páginas que possuem conteúdo muito personalizado; páginas que usam dados baseados na request, que usam cookies por exemplo; e páginas que pode ter bloqueio de renderização.
                            </p>
                        </Alert>
                    </section>

                    {/* VIDEO!!! */}

                    <section className={pagesStyles.section}>
                        <p>
                            Quando um usuário solicita a página, o método getServerSideProps é executado, retorna os dados usados para gerar a página e envia a resposta ao cliente. O cliente então renderiza esse HTML e pode enviar outra solicitação para buscar o pacote JavaScript que hidrata os elementos.
                            <br />
                            O conteúdo HTML gerado <span className={styles.focus}>é exclusivo para cada solicitação</span> e <span className={styles.focus}>não deve ser armazenado em cache pela CDN</span>.
                        </p>

                        <p>
                            A rede e o thread principal para o cliente são muito semelhantes para renderização estática e do lado do servidor. O FCP é quase igual ao LCP, e podemos facilmente evitar mudanças de layout, pois não há carregamento de conteúdo dinâmico após o carregamento inicial da página.
                        </p>
                    </section>

                    <Image
                        src={img2}
                        alt=""
                        width={600}
                        height={300}
                        priority
                    />

                    {/* VIDEO */}

                    <p>
                        No entanto, o TTFB para páginas renderizadas pelo servidor é significativamente maior do que a renderização estática, pois a página é gerada do zero a cada solicitação.
                    </p>

                    <Resume
                        title='Renderização Estática'
                        qualifications={[
                            { name: 'Time To First Byte', score: 'warn' },
                            { name: 'First Contentful Paint', score: 'warn' },
                            { name: 'Largest Contentful Paint', score: 'warn' },
                            { name: 'Time To Interactive', score: 'warn' },
                            { name: 'Cumulative Layout Shift', score: 'good' },
                            { name: 'First Input Delay', score: 'warn' },
                            { name: 'Fast Build Times', score: 'good' },
                            { name: 'Low Server Costs', score: 'warn' },
                            { name: 'Easy Rollbacks', score: 'warn' },
                            { name: 'Reliable uptime', score: 'warn' },
                            { name: 'Dynamic Content', score: 'good' },
                            { name: 'Scalable infraestructure', score: 'good' },
                        ]}
                    />
                </main>
            </div>
        </>
    );
}

export const getServerSideProps = (async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo: Repo = await res.json()

    return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>
