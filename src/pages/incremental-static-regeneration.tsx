import Head from "next/head";
import Link from "next/link";

import Title from "@/components/Title";
import Alert from "@/components/Alert";
import VideoWrapper from "@/components/VideoWrapper";
import Resume from "@/components/Resume";

import img1 from '@/assets/static-rendering/incremental_static_regeneration.jpeg'

import pagesStyles from "@/styles/Pages.module.css";
import styles from "@/styles/StaticRendering.module.css";
import ImageWrapper from "@/components/ImageWrapper";

export default function IncrementalStaticRegeneration() {
    return (
        <>
            <Head>
                <title>Regeneração Incremental Estática | Incremental Static Regeneration</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={pagesStyles.page}>
                <main className={pagesStyles.main}>
                    <Title borderBlack>Esta é uma página com Incremental Static Regeneration - ISR</Title>

                    <section className={pagesStyles.section}>
                        <p>
                            A técnica de ISR <span className={styles.focus}>gera algumas página no momento do build e outras sob demanda</span>. As página podem ser cacheadas por uma CDN e o cache é invalidado quando a página é regenerada. Essa técnica reduz o tempo de build, dado que nem todas as páginas são geradas.
                        </p>

                        <p>
                            O ISR ajuda a resolver a demora no tempo do build e o problema de dados dinâmicos discutidos na renderização Estática.

                            O ISR permite pré-renderizar certas páginas estáticas e renderizar as páginas dinâmicas sob demanda quando o usuário as solicita. Isso resulta em tempos de build mais curtos e permite a invalidação automática do cache e a regeneração da página após um intervalo de tempo específico.

                            Como exemplo, vamos mostrar uma página com detalhes de usuários do github.
                        </p>
                    </section>

                    <Alert>
                        <p>
                            <span className={styles.focus}>INDICADO PARA</span> páginas que precisam ser (re)generadas dado intervalo de tempo ou sob demanda; não são específicas de um usuário; podem ser cacheadas de forma global.
                        </p>
                    </Alert>

                    <section className={pagesStyles.section}>
                        <ImageWrapper image={img1} source='https://www.dhiwise.com/post/incremental-static-regeneration-a-revolution-in-react-app' />

                        O Next.js nos ajuda a conseguir isso usando o método getStaticPaths para gerar caminhos dinâmicos. Podemos dizer ao Next.js quais páginas pré-gerar com base em seus parâmetros de consulta.

                        Para nossa demonstração, vamos buscar todas as listagens e pré-gerar as páginas para cada uma delas. Observe que isso levaria muito tempo se houvesse milhares de listagens. Nesse caso, teremos que dizer ao Next para pré-gerar apenas um subconjunto de todas as páginas e renderizar um fallback quando as páginas de listagem restantes forem geradas sob demanda (quando o usuário solicitar).

                        As páginas pré-renderizadas e geradas sob demanda são entregues de forma semelhante. Se um usuário solicitar uma página que ainda não foi gerada, ela será gerada sob demanda e armazenada em cache pelo Edge. Assim, apenas o primeiro usuário provavelmente terá uma experiência pior para páginas que não são pré-renderizadas. Todos os outros se beneficiarão da resposta rápida e armazenada em cache.
                    </section>

                    <VideoWrapper fileName='video5.webm' />

                    Isso resolve o problema de longo tempo de construção dos métodos anteriores. Mas ainda temos a landing page, que precisa ser reimplantada toda vez que temos uma nova listagem.

                    Para habilitar uma atualização da landing page, podemos invalidar automaticamente o cache e regenerar a página em segundo plano em um intervalo específico. Podemos usar isso adicionando um campo revalidate ao objeto retornado.

                    <VideoWrapper fileName='video6.webm' />

                    Se um usuário solicitar uma página que esteja no cache por mais tempo do que o número especificado de segundos, o usuário verá inicialmente a página obsoleta. A regeneração da página é acionada simultaneamente. Depois que a página é regenerada em segundo plano, o cache é invalidado e atualizado com a página regenerada recentemente.

                    <Resume
                        title='Resumo da Renderização Estática'
                        qualifications={[
                            { name: 'Time To First Byte', score: 'good' },
                            { name: 'First Contentful Paint', score: 'good' },
                            { name: 'Largest Contentful Paint', score: 'good' },
                            { name: 'Time To Interactive', score: 'good' },
                            { name: 'Cumulative Layout Shift', score: 'good' },
                            { name: 'First Input Delay', score: 'good' },
                            { name: 'Fast Build Times', score: 'good' },
                            { name: 'Low Server Costs', score: 'warn' },
                            { name: 'Easy Rollbacks', score: 'good' },
                            { name: 'Reliable uptime', score: 'good' },
                            { name: 'Dynamic Content', score: 'good' },
                            { name: 'Scalable infraestructure', score: 'good' },
                        ]}
                    />

                    <section className={pagesStyles.section}>
                        <p>
                            Resumindo, com o ISR podemos mostrar conteúdo dinâmico revalidando a página de forma automática de tempos em tempos. Entretanto, nosso conteúdo provavelmente não é atualizado com a mesma frequência do intervalo que definimos, resultando em regeneração desnecessária de páginas e invalidação do cache e em custos de servidor mais altos.
                        </p>

                        <Link href='/incremental-static-regeneration/1' className={styles.button}>
                            Clique aqui para ver o exemplo
                        </Link>
                    </section>
                </main>
            </div>
        </>
    )
}
