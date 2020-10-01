import Layout from '../../components/layout'
import { getAllExperienceIds, getExperienceData } from '../../lib/experiences'
import styles from "./experience.module.css";
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Experience({ experienceData }) {
    return (
        <Layout>
            <Head>
                <title>{experienceData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{experienceData.title}</h1>
                <h3 className={styles.company}>{experienceData.company}</h3>
                <div className={utilStyles.lightText}>
                    <Date dateString={experienceData.startDate} /> - {experienceData.endDate && <Date dateString={experienceData.endDate} />}
                </div>  
                <br/>
                <div dangerouslySetInnerHTML={{ __html: experienceData.contentHtml }} />   
            </article>
        </Layout>
      )
}

export async function getStaticPaths() {
    const paths = getAllExperienceIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const experienceData = await getExperienceData(params.id)
    return {
        props: {
          experienceData
        }
    }
}