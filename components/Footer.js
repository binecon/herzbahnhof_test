import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<p className="footerBar">contact info</p>
			<p>{`Copyright © gare du cœur ${year}`}</p>
		</footer>
	);
};
export default Footer;
