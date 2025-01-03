import Head from "next/head";
import Link from "next/link";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import Title from "@/components/Title";
import Alert from "@/components/Alert";
import Resume from "@/components/Resume";
import UserPanel from "@/components/UserPanel";
import ImageWrapper from "@/components/ImageWrapper";
import VideoWrapper from "@/components/VideoWrapper";

import exampleOfDinamicContent from '@/assets/server-rendering/example-of-dinamic-content.jpg'
import networkAndThread from '@/assets/server-rendering/ssr2.png'

import pagesStyles from '@/styles/Pages.module.css'
import styles from "@/styles/StaticRendering.module.css";

export default function ServerSideRendering({
    user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

                    <UserPanel user={user} />

                    <section className={pagesStyles.section}>
                        <p>
                            Com a renderização do lado do servidor, <span className={styles.focus}>geramos o HTML para cada solicitação</span>. Essa abordagem é mais adequada para páginas que contêm dados personalizados, por exemplo, baseados no cookie do usuário ou obtidos da solicitação do usuário. E também é adequada para páginas que devem bloquear a renderização, por exemplo, com base no estado de autenticação.
                        </p>

                        <p>
                            Um painel personalizado é um excelente exemplo de conteúdo altamente dinâmico em uma página.
                        </p>

                        <ImageWrapper image={exampleOfDinamicContent} width={300} source="Foto de Markus Spiske na Unsplash." />

                        <p>
                            A maior parte do conteúdo é baseada na identidade do usuário ou no nível de autorização que pode estar contido em um cookie desse usuário. Este painel só mostra quando um usuário é autenticado e possivelmente mostra dados confidenciais específicos do usuário que não devem ser visíveis para outros.
                        </p>

                        <p>
                            O Next.js possui o método <Link style={{ textDecoration: 'underline' }} href='https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props'>getServerSideProps</Link> que permite a renderização da página no servidor. Esse método <span className={styles.focus}>roda no servidor para cada solicitação</span> e <span className={styles.focus}>passa os dados retornados para a página para gerar o HTML</span>.
                        </p>

                        <Alert>
                            <p>
                                <span className={styles.focus}>INDICADO PARA</span> páginas que possuem conteúdo muito personalizado; páginas que usam dados baseados na request, que usam cookies por exemplo; e páginas que pode ter bloqueio de renderização.
                            </p>
                        </Alert>
                    </section>

                    <section className={pagesStyles.section}>
                        <p>
                            Quando um usuário solicita a página, o método getServerSideProps é executado, retorna os dados usados para gerar a página e envia a resposta ao cliente. O cliente então renderiza esse HTML e pode enviar outra solicitação para buscar o pacote JavaScript que hidrata os elementos.
                            <br />
                            O conteúdo HTML gerado <span className={styles.focus}>é exclusivo para cada solicitação</span> e <span className={styles.focus}>não deve ser armazenado em cache pela CDN</span>.
                        </p>

                        <VideoWrapper fileName='video7.webm' source="https://www.patterns.dev/vanilla/rendering-patterns" />

                        <p>
                            A rede e o thread principal para o cliente são muito semelhantes para renderização estática e do lado do servidor. O FCP é quase igual ao LCP, e podemos facilmente evitar mudanças de layout, pois não há carregamento de conteúdo dinâmico após o carregamento inicial da página.
                        </p>

                        <ImageWrapper image={networkAndThread} source='https://www.patterns.dev/vanilla/rendering-patterns' />

                        <p>
                            No entanto, o TTFB para páginas renderizadas pelo servidor é significativamente maior do que a renderização estática, pois a página é gerada do zero a cada solicitação. Podemos observar isso através do GET/ do Network.
                        </p>
                    </section>

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

                    <section className={pagesStyles.section}>
                        <p>
                            Embora o SSR seja um método excelente quando você deseja renderizar dados altamente personalizados, há algumas coisas a serem consideradas para obter uma ótima experiência do usuário e reduzir os custos do servidor, devido as serveless functions.
                        </p>

                        <p>
                            O primeiro ponto é o tempo de execução de getServerSideProps. A página só começa a ser gerada quando os dados do getServerSideProps estam disponíveis. Portanto, devemos garantir que o método getServerSideProps não seja executado por muito tempo.
                        </p>

                        <p>
                            Segundo, ter bancos de dados na mesma região que a serveless function. Se os dados estão vindo de um banco, precisamos minimizar o tempo dessas consultas. Então, devemos considerar tanto a otimização da consulta quanto a localização do banco.
                        </p>

                        <p>
                            Terceiro, adicionar cabeçalhos de controle de Cache às respostas para melhorar o desempenho do SSR.
                        </p>

                        <p>
                            E quarto, atualizar o hardware do servidor. Isso pode ajudar a processar solicitações individuais e obter respostas mais rapidamente.
                            <br />
                        </p>
                    </section>
                </main>
            </div>
        </>
    );
}

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

export const getServerSideProps = (async (context) => {
    const githubUser = context.req.cookies['user_github']
    const githubUserData = await fetch(`https://api.github.com/users/${githubUser}`)
    const user: UserProps = await githubUserData.json()

    return {
        props:
        {
            user: {
                name: user.name || '',
                avatar_url: user.avatar_url || '',
                company: user.company || '',
                login: user.login || '',
                location: user.location || '',
                bio: user.bio || '',
                id: user.id || '',
                html_url: user.html_url || '',
                email: user.email || '',
                followers: user.followers || 0,
                following: user.following || 0,
                public_repos: user.public_repos || 0,
            }
        }
    }
}) satisfies GetServerSideProps<{ user: UserProps }>
