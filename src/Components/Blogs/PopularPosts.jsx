import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

function PopularPosts({ posts }) {
	return (
		<div>
			<p className="text-primary font-medium">POPULAR POST</p>
			<div className="flex flex-col lg:flex-row xl:flex-col gap-10 justify-center items-center">
				<div className="flex flex-col divide-y-2">
					{posts.map((post, index) => (
						<div
							key={index}
							className="flex justify-center items-center gap-2 p-4"
						>
							<NavLink
								to={post.link}
								target={"_blank"}
								className="flex w-1/4"
							>
								{post.image && post.image !== "" && (
									<img
										className="p-2 aspect-square object-contain w-auto cursor-pointer"
										src={post.image}
										alt="Post"
									/>
								)}
							</NavLink>
							<div className="flex flex-col w-3/4">
								<NavLink
									to={post.link}
									target={"_blank"}
									className="text-md font-medium text-primary cursor-pointer"
								>
									{post.title}
								</NavLink>
								<p className="text-sm">{post.body}</p>
							</div>
						</div>
					))}
				</div>
				<Card
					className="mt-6 mx-auto justify-center text-center items-center flex flex-col gap-10"
					theme="primary"
				>
					<h3 className="text-lg">Get More Done Together With Us</h3>
					<p className="text-justify">
						Energize Your Software Solutions with our comprehensive
						range of services.
					</p>
					<NavLink
						to="https://www.valscotech.com/Login"
						target={"_blank"}
					>
						<Button theme="monochrome">Get Started</Button>
					</NavLink>
				</Card>
			</div>
		</div>
	);
}

export default PopularPosts;
