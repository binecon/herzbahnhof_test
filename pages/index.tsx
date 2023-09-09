import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Layout from "../components/layout";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const router = useRouter();
	const [route, setRoute] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push("/thankyou" + route);

		let form = {
			name,
			phone,
		};

		const rawResponse = await fetch("/api/submit", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(form),
		});
		const content = await rawResponse.json();

		// print to screen
		alert(content.data.tableRange);
		router.push("/thankyou");

		// Reset the form fields
		setPhone("");
		setName("");
	};

	return (
		<>
			<Layout home>
				<BackgroundImage />
				<div className="center">
					<main className="exyellowbox">
					<p>
					Wie stellen Sie sich den <br/> zukünftigen Bahnhof vor?
					</p>
						<div className="max-w-5xl mx-auto pb-16">
							<form className="ideabox py-4 space-y-4" onSubmit={handleSubmit}>
								<div className="flex items-center justify-center">
									
									<textarea className="textarea"
										value={name}
										onChange={(e) => setName(e.target.value)}
										id="name"
										placeholder="Ihre Idee"
									/>
								</div>

								<div className="sendbutton flex items-center justify-center">
									<button
										type="submit"
										className="sendbutton flex items-center justify-center w-80 rounded-md shadow py-3 px-2 text-white bg-blue-900"
									>	Idee einreichen									
									</button>
								</div>
							</form>
						</div>
					</main>
				</div>
			</Layout>
		</>
	);
};

export default Home;
