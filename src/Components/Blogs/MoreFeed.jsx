import { NavLink } from "react-router-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";

function MoreFeed({ feeds }) {
	return (
		<div className="flex flex-col gap-6">
			<h3 className="text-2xl ">
				Explore our latest blog posts to delve deeper into the world of
				technology and discover insights about our cutting-edge
				products.
			</h3>
			<div className="min-w-full flex flex-col lg:flex-row gap-5 hover:*:scale-110 transition-all *:duration-200">
				{feeds.map((feed, index) => (
					<Card
						key={index}
						className="!max-w-md lg:!max-w-lg mx-auto text-center justify-between !bg-zinc-200 !text-slate-800 !h-80 lg:!h-96 xl:!h-72 flex flex-col gap-3"
					>
						<div className="flex flex-col gap-2">
							<h3 className="text-lg md:text-xl lg:text-2xl font-medium">
								{feed.title}
							</h3>
							<p className="text-sm">{feed.subtitle}</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-sm">{feed.author}</p>
							<NavLink className="w-fit mx-auto" to={feed.link} target="_blank">
								<Button className="!w-fit !mx-auto">
									Read More
								</Button>
							</NavLink>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

export default MoreFeed;
