import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import styles from "./experience.module.css";
import { getSortedExperienceData } from "../../lib/experiences";
import Link from "next/link";
import Date from "../../components/date";

export function getStaticProps() {
  const allPostsData = getSortedExperienceData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Experiences({ allPostsData }) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <div className={styles.timeline}>
            {allPostsData.map(({ id, startDate, endDate, title, company }) => (
              <Link href="/experience/[id]" as={`/experience/${id}`}>
                <div className={styles.containerLeft} key={id}>
                    <div className={styles.content}>
                        <h1 className={styles.positionTitle}>{title}</h1>
                        <h3 className={styles.company}>{company}</h3>
                        <small className={utilStyles.lightText}>
                            <Date dateString={startDate} /> - {endDate && <Date dateString={endDate} />}
                        </small>  
                    </div>
                </div>
              </Link>
            ))}
            </div>
        </section>
      </Layout>
    );
  }