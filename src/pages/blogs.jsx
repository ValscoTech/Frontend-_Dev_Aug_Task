import { useEffect } from "react";
import PopularPosts from "../Components/Blogs/PopularPosts";
import MoreFeed from "../Components/Blogs/MoreFeed";

function Blogs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const popularPosts = [
		{
			title: "PRODUCT",
			body: "Meed Jurident: The App that revolutionizes Legal Workflow.",
		},
		{
			title: "BLOGS | NISHITA JAISWAL",
			body: "AI in the Courtroom: A New Era of Litigation.",
		},
		{
			title: "BLOGS | AKSHAT SINGH",
			body: "The benefits of implementing a National Legal Case Database.",
		},
	];

	const feeds = [
		{
			title: "Creating a National Legal Ca...",
			author: "@Gautam Singh",
			subtitle:
				"Ion collection is now more important than ever in the current digital age. Lawyers can improve capacity to serve their clients by enhancing their ability to collect and analyze client information, streamline case management, and improve communication.",
		},
		{
			title: "Enhancing Law Making Efficiency with...",
			author: "@Nishita Jaiswal",
			subtitle:
				"In an era marked by rapid technological advancements, it comes as no surprise that artificial intelligence (AI) is revolutionizing various industries. One sector that stands to benefit immensely from AI is governance and law making. With its ability",
		},
		{
			title: "Implementing a National Legal Case...",
			author: "@Preet Singh",
			subtitle:
				"In an era marked by rapid technological advancements, it comes as no surprise that artificial intelligence (AI) is revolutionizing various industries. One sector that stands to benefit immensely from AI is governance and law making. With its ability",
		},
	];

	return (
		<div className="container flex flex-col gap-5 mx-auto p-5 text-black dark:text-white">
			<h2 className="text-4xl py-5 font-bold dark:text-white">
				Blogs and Articles
			</h2>

			<h3 className="text-2xl font-medium dark:text-white">
				Enhancing Law making Efficiency with AI: Paving the Way for
				Smarter Governance.
			</h3>

			<img
				className="rounded-lg drop-shadow"
				src="./images/blogImage.png"
				alt=""
			/>

			<div className="flex flex-col xl:flex-row gap-10 mb-16">
				<div className="text-justify flex flex-col gap-10 text-lg xl:w-3/4">
					<p>
						Enhancing Law making Efficiency with AI: Paving the Way
						for Smarter Governance. In an era marked by rapid
						technological advancements, it comes as no surprise that
						artificial intelligence (AI) is revolutionizing various
						industries. One sector that stands to benefit immensely
						from AI is governance and law making. With its ability
						to process vast amounts of data, analyse complex
						patterns, and make informed decisions, AI holds the
						potential to enhance law-making efficiency and drive
						smarter governance. A rising number of people are now
						interested in employing AI techniques to improve
						legislative processes.
						<br />
						<br /> These tools can be used to analyse massive
						volumes of data, spot patterns and trends, and aid in
						decision-making by legislators. In this blog post, we
						will explore the ways in which AI can contribute to
						streamlining the law-making process, improving
						decision-making, and ultimately creating more effective
						and efficient laws. Researching current laws, rules, and
						precedents in-depth to help legislators make decisions
						is one of their time-consuming jobs. This procedure can
						be automated using artificial intelligence (AI), which
						can mine huge databases and legal texts for pertinent
						facts and give legislators in-depth summaries and
						comparisons. Legislators can save time and effort by
						utilising AI to swiftly find pertinent cases, laws, and
						legal concepts.
						<br />
						<br /> The prospective effects of new legislation can be
						evaluated by lawmakers with the use of AI-powered
						predictive analysis. AI algorithms can predict the
						potential effects of a law on many parts of society,
						such as the economy, employment rates, public health, or
						the environment, by examining historical data, economic
						indicators, and social factors. This knowledge can aid
						legislators in making wise choices, anticipating
						problems, and modifying policies as necessary to improve
						government. AI can process and analyse enormous volumes
						of data, giving legislators useful information for
						making decisions based on the best available evidence.
					</p>
					<h2 className="text-3xl text-primary">
						AI can spot patterns and correlations
					</h2>
					<p>
						that human legislators might overlook by combining data
						from a variety of sources, including public opinion
						polls, social media trends, economic indicators, and
						expert analysis. These data-driven insights can help
						create policies that more precisely and successfully
						address social requirements. AI has a significant
						potential to check adherence to current rules and
						regulations. Large volumes of data can be analysed by
						machine learning algorithms to look for patterns of
						probable violations or noncompliance. AI can assist in
						identifying areas where enforcement efforts should be
						concentrated by automating the monitoring process,
						allowing for more effective resource allocation. The
						Jurident is one such app that may address any judicial
						database difficulties, and it is useful not only for
						Indian lawyers but also for regular residents. It is an
						app that serves as a personal database and record of all
						cases, a law book that will assist lawyers in finding
						relevant acts, a live court, and other consumer-related
						features. By offering consumers tailored information and
						legalised solutions, Jurident will make their lives
						easier. By allowing the public access to court records,
						a database will increase the judicial system's
						transparency and accountability. By allowing people,
						legal professionals, and scholars to understand how
						legal decisions are made, it would promote increased
						fairness and uniformity in the administration of
						justice. The database can aid in the advancement of
						legal research by providing scholars, academics, and
						decision-makers with access to a variety of data. By
						giving citizens easily accessible forums to voice their
						ideas, concerns, and suggestions, AI-powered platforms
						can promote increased public involvement in the
						legislative process. Input from the public can be
						analysed by natural language processing algorithms to
						find recurring themes and feelings, assisting
						legislators in comprehending public opinion and
						incorporating it into decision-making. Additionally,
						artificial intelligence (AI) can improve transparency by
						automatically monitoring and analysing legislative
						processes, making information easily accessible to the
						public, and enhancing confidence in governmental
						authority. The effectiveness and efficiency of the
						legislative process could be greatly increased by
						artificial intelligence. AI can pave the way for wiser
						governance by automating research, enabling predictive
						analysis, facilitating data-driven decision-making,
						improving the writing of legislation, enhancing
						compliance monitoring, and encouraging public
						engagement. It will revolutionize the legislative
						working of India and will provide equal, fair, and
						transparent justice to the citizens with efficient
						working of the system.
					</p>
				</div>
				<div className="lex flex-col mx-auto xl:w-1/4 gap-3">
					<PopularPosts posts={popularPosts} />
				</div>
			</div>
			<MoreFeed feeds={feeds} />
		</div>
	);
}

export default Blogs;
