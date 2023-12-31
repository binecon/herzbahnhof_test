import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

//have a homebtn to return to homepage

const MENU_LIST = [
	// { text: "Home", href: "/" },
	{ text: "Geschichte", href: "/westbahnhof" },
	{ text: "Perspektiven", href: "/perspektiven" },
];

const Navbar = () => {
	const [navActive, setNavActive] = useState(null);
	const [activeIdx, setActiveIdx] = useState(-1);

	return (
		<header>
			<nav className={`nav`}>
				<div
					onClick={() => setNavActive(!navActive)}
					className={`nav__menu-bar`}
				>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className={`${navActive ? "active" : ""} nav__menu-list`}>
					{MENU_LIST.map((menu, idx) => (
						<div
							onClick={() => {
								setActiveIdx(idx);
								setNavActive(false);
							}}
							key={menu.text}
						>
							<NavItem active={activeIdx === idx} {...menu} />
						</div>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
