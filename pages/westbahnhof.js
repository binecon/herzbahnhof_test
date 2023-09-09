import React from "react";

const Story = () => {
	return (
		<div className="center">
			<div className="textbox">
				<h2 className="font-semibold">Bahnhofsgeschichte</h2>
				<br />
				<p>
					- Der Bahnhof wurde mit der Bahnstrecke Berlin–Dresden im Jahre 1848
					erbaut
				</p>
				<p>
					- Der heutige Bahnhof Herzberg (Elster) hieß bis Anfang der 2000er
					Jahre zur Unterscheidung zum Stadtbahnhof Herzberg (Elster) West
				</p>
				<p>
					- Es ist ein zweigeschossiges Haus mit einem Drempel und einem
					Satteldach. An der südwestlichen Ecke trägt das Gebäude einen Turm.
				</p>
				<br />
				<img className="bahnhof_history" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Herzberg_Elster_Bahnhof_West-01.jpg/2560px-Herzberg_Elster_Bahnhof_West-01.jpg" />
			</div>
		</div>
	);
};
export default Story;
