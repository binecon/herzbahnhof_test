import BackgroundImage from "../components/BackgroundImage";

export default function Home({ Component, pageProps }) {
	return (
		<>
			<BackgroundImage />
			<div className="center">
				<div className="whitebox">
					<h2>Home Page</h2>
				</div>
			</div>
		</>
	);
}
