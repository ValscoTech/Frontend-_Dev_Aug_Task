const PopularPosts = () => {
	const posts = [
		{
			title: "Next Jurisdict: The App that revolutionizes Legal Workflow",
			author: "Nisha Jainwal",
		},
		{ title: "The AI in Courtroom: A New Era", author: "Neha Singh" },
	];

	return (
		<aside className="card">
			<div className="card-body">
				<h5 className="card-title">Popular Posts</h5>
				<ul className="list-group list-group-flush">
					{posts.map((post, index) => (
						<li key={index} className="list-group-item">
							<h6>{post.title}</h6>
							<p className="text-muted">{post.author}</p>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default PopularPosts;
