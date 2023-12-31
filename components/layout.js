import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

// default page layout applies to all
export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}></header>
			<main className={styles.main}>
				{children}
				{!home && (
					<div className={styles.backToHome}>
						<Link href="/">
							<a>← Zurueck</a>
						</Link>
					</div>
				)}
			</main>
		</div>
	);
}
