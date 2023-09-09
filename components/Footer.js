import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="footerBar">
				<p>
					<a className="text-decoration: underline" href="/kontakt">
						Kontakt & Impressum
					</a>
				</p>
				<br />
				<p>{`Copyright © GareDuCœur ${year}`}</p>
			</div>
		</footer>
	);
};
export default Footer;
