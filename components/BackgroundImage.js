import React from "react";
import Image from "next/image";

const BackgroundImage = (pageProps) => {
	return (
		<div className="bg">
			<Image
				src={"/herzberg_westbhf.jpeg"}
				alt="Westbahnhof"
				sizes="max-width: 768px) 100vw,
				// (max-width: 1200px) 50vw,
				// 33vw"
				layout="fill"
			/>
		</div>
	);
};

export default BackgroundImage;
