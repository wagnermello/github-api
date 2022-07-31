import React from "react";

const Results = (props) => {
	const { repos } = props;
	console.log("Repos is: ", repos.data);

	const listRepos =
		repos.length !== 0 ? (
			repos.data.slice(0, 5).map((item) => (
				<li>
					<a href={item.html_url} target="_blank">
						{item.name}
					</a>
				</li>
			))
		) : (
			<li>No repos found</li>
		);
	return (
		<ul>
			<li>{listRepos}</li>
		</ul>
	);
};

export default Results;
