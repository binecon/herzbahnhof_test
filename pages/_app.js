import Navbar from "../components/Navbar";
import LogoHeart from "../components/LogoHeart";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<LogoHeart />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
