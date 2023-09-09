import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Navbar from "../components/Navbar";
import LogoHeart from "../components/LogoHeart";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout home>
			<LogoHeart />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</Layout>
	);
}

export default MyApp;
