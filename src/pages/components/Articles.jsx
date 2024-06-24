import { React } from "react";
import Article from "./Article";
import txe from "../../assets/txe.mp4";
import todo from "../../assets/todo.svg";
import git from "../../assets/git.svg";
import { useState } from "react";

const Articles = () => {
	const [currentPage, setCurrentPage] = useState(0);

	const goToPreviousPage = () => {
		setCurrentPage((prevPage) =>
			prevPage > 0 ? prevPage - 1 : articles.length - 1
		);
	};

	const goToNextPage = () => {
		setCurrentPage((prevPage) =>
			prevPage < articles.length - 1 ? prevPage + 1 : 0
		);
	};
	const articles = [
		{
			title: "React JS: Building a To-Do-List App",
			description:
				"React is a JavaScript library for building user interfaces. It’s a popular choice for web development and is used by companies like Facebook, Netflix, and Airbnb. In this article, we will go over the major things you need to know to create a simple Todo List App using React.",
			image: git,
			link: "https://medium.com/@theseyipeters/react-js-building-a-to-do-list-app-cd04e937b3ab",
		},
		{
			title: `GIT — “Rebase, Revert, Cherry-Pick”`,
			description:
				"Git is a popular version control system used by developers all around the world to manage their source code and collaborate with other developers. In Git, there are several commands that are used to manipulate the repository history, three of which are git rebase, git revert, and git cherry-pick. ",
			image: git,
			link: "https://medium.com/@theseyipeters/git-rebase-revert-cherry-pick-ba29680109ea",
		},
	];
	return (
		<section className="h-fit py-[40px] mt-[50px] flex flex-col gap-y-[40px] relative overflow-x-hidden">
			<div className="font-grotta  text-white flex justify-between items-center ">
				<h1 className="text-[45px] px-[100px] text-green-1">Resources</h1>
				<div className="absolute bottom-[40%] flex justify-between w-full px-[20px] z-30">
					<div
						onClick={goToPreviousPage}
						className="">
						<svg
							width="100"
							height="100"
							viewBox="0 0 100 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle
								cx="50"
								cy="50"
								r="50"
								fill="#0C212C"
							/>
							<path
								d="M67.2499 50C67.2499 50.3812 67.0985 50.7469 66.8289 51.0165C66.5593 51.286 66.1937 51.4375 65.8124 51.4375H37.6572L48.1419 61.9205C48.2755 62.054 48.3814 62.2126 48.4537 62.3871C48.526 62.5616 48.5632 62.7486 48.5632 62.9375C48.5632 63.1264 48.526 63.3134 48.4537 63.4879C48.3814 63.6624 48.2755 63.821 48.1419 63.9545C48.0084 64.0881 47.8498 64.194 47.6753 64.2663C47.5008 64.3386 47.3138 64.3758 47.1249 64.3758C46.936 64.3758 46.749 64.3386 46.5745 64.2663C46.4 64.194 46.2414 64.0881 46.1079 63.9545L33.1704 51.017C33.0367 50.8835 32.9307 50.725 32.8584 50.5505C32.786 50.376 32.7488 50.1889 32.7488 50C32.7488 49.8111 32.786 49.624 32.8584 49.4495C32.9307 49.275 33.0367 49.1165 33.1704 48.983L46.1079 36.0455C46.3776 35.7757 46.7434 35.6242 47.1249 35.6242C47.5064 35.6242 47.8722 35.7757 48.1419 36.0455C48.4117 36.3152 48.5632 36.681 48.5632 37.0625C48.5632 37.444 48.4117 37.8098 48.1419 38.0795L37.6572 48.5625H65.8124C66.1937 48.5625 66.5593 48.7139 66.8289 48.9835C67.0985 49.2531 67.2499 49.6187 67.2499 50Z"
								fill="white"
							/>
						</svg>
					</div>
					<div
						onClick={goToNextPage}
						className="">
						<svg
							width="100"
							height="100"
							viewBox="0 0 100 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle
								cx="50"
								cy="50"
								r="50"
								transform="rotate(-180 50 50)"
								fill="#0C212C"
							/>
							<path
								d="M32.7501 50C32.7501 49.6188 32.9015 49.2531 33.1711 48.9835C33.4407 48.714 33.8063 48.5625 34.1876 48.5625H62.3428L51.8581 38.0795C51.7245 37.946 51.6186 37.7874 51.5463 37.6129C51.474 37.4384 51.4368 37.2514 51.4368 37.0625C51.4368 36.8736 51.474 36.6866 51.5463 36.5121C51.6186 36.3376 51.7245 36.179 51.8581 36.0455C51.9916 35.9119 52.1502 35.806 52.3247 35.7337C52.4992 35.6614 52.6862 35.6242 52.8751 35.6242C53.064 35.6242 53.251 35.6614 53.4255 35.7337C53.6 35.806 53.7586 35.9119 53.8921 36.0455L66.8296 48.983C66.9633 49.1165 67.0693 49.275 67.1416 49.4495C67.214 49.624 67.2512 49.8111 67.2512 50C67.2512 50.1889 67.214 50.376 67.1416 50.5505C67.0693 50.725 66.9633 50.8835 66.8296 51.017L53.8921 63.9545C53.6224 64.2243 53.2566 64.3758 52.8751 64.3758C52.4936 64.3758 52.1278 64.2243 51.8581 63.9545C51.5883 63.6848 51.4368 63.319 51.4368 62.9375C51.4368 62.556 51.5883 62.1902 51.8581 61.9205L62.3428 51.4375H34.1876C33.8063 51.4375 33.4407 51.2861 33.1711 51.0165C32.9015 50.7469 32.7501 50.3813 32.7501 50Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div
				className="flex pl-[100px] gap-x-[20px] w-[180%]  overflow-x-hidden"
				style={{
					width: `${articles.length * 95}%`,
					transform: `translateX(-${currentPage * (100 / articles.length)}%)`,
					transition: "transform 1s ease",
				}}>
				{articles.map((article, index) => (
					<Article
						key={index}
						title={article.title}
						description={article.description}
						image={article.image}
						link={article.link}
					/>
				))}
			</div>
			{/* <video
				src={txe}
				autoPlay={true}
			/> */}
		</section>
	);
};

export default Articles;
