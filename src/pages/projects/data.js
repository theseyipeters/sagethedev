import CommonLogo from "../../svgs/CommonLogo";
import Crafter from "../../svgs/Crafter";
import RandoLogo2 from "../../svgs/RandoLogo";
import TXELogo from "../../svgs/TXELogo";

export const projects = [
	{
		title: "Common",
		description:
			"Common is a versatile JavaScript-based tool designed to effortlessly create stunning color gradients and palettes. It provides designers and developers with an intuitive interface to generate harmonious color schemes for their projects, enhancing creativity and efficiency in the design process.",
		href: "https://usecommon.vercel.app",
		gifSrc:
			"https://i.ibb.co/D1bG8Zy/copy-70-F90528-4-B4-E-4844-B3-AA-9-DD8-AF76231-A.gif",
		tools: ["React", "Tailwind", "Nextjs", "Context"],
		inspired: "Adenekan Wonderful - Piggment",
		icon: <CommonLogo />,
	},
	{
		title: "Crafter AI",
		description:
			"Crafter AI is a project management tool similar to Jira, enhanced with AI capabilities to aid teams in organizing, tracking, and managing their work more efficiently.",
		href: "https://usecrafter.com",
		gifSrc:
			"https://i.ibb.co/Np51sXd/copy-7680-EC6-F-6951-41-C4-897-C-36-DFABB5-D900.gif",
		tools: ["React", "Typescript", "Redux", "Nextjs", "Stripe API"],
		icon: <Crafter />,
	},
	{
		title: "Rando",
		description:
			"Rando is a robust, programmatically-driven mock data generator that produces structured JSON outputs based on user-defined input parameters. It leverages contextual information, such as geographical location or provider-specific constraints, to tailor the mock data accordingly. By taking advantage of a Provider context—which could represent elements like country, regulatory requirements, or localized data norms—Rando dynamically adjusts its output to generate realistic, scenario-appropriate mock data",
		gifSrc:
			"https://i.ibb.co/C1qpT1m/copy-F878029-E-CAF0-4869-92-D6-034-F422-D4545.gif",
		tools: ["React", "Redux"],
		icon: <RandoLogo2 />,
	},
	{
		title: "TxE Summit 2023",
		description:
			"Enugu TxE aims to ignite innovation, foster collaboration, and empower the local entrepreneurial community.",
		href: "https://enugutechsummit.com",
		gifSrc:
			"https://i.ibb.co/3Sg91hH/copy-DA849-B43-E086-49-C4-A9-B3-275-D92-FFF879.gif",
		tools: ["React", "SwiperJS", "QRCodeJS"],
		icon: <TXELogo />,
	},
];

const projectPositions = [
	[
		{ top: "-10vh", left: "-5%" },
		{ top: "15vh", left: "40%" },
		{ top: "30vh", left: "75%" },
		{ top: "50vh", left: "5%" },
	],
	[
		{ top: "-10vh", left: "25%" },
		{ top: "45vh", left: "40%" },
		{ top: "10vh", left: "75%" },
		{ top: "25vh", left: "0%" },
	],
	[
		{ top: "-10vh", left: "45%" },
		{ top: "45vh", left: "30%" },
		{ top: "30vh", left: "75%" },
		{ top: "10vh", left: "0%" },
	],
	[
		{ top: "-10vh", left: "-5%" },
		{ top: "15vh", left: "40%" },
		{ top: "30vh", left: "75%" },
		{ top: "50vh", left: "5%" },
	],
	[
		{ top: "-10vh", left: "25%" },
		{ top: "45vh", left: "40%" },
		{ top: "10vh", left: "75%" },
		{ top: "25vh", left: "0%" },
	],
	[
		{ top: "10vh", left: "45%" },
		{ top: "85vh", left: "40%" },
		{ top: "50vh", left: "75%" },
		{ top: "50vh", left: "0%" },
	],
];

export const projects2 = [
	{
		id: 1,
		projectTitle: "zeeh africa",
		projectDescription:
			"Zeeh Africa is a fintech company that provides robust API infrastructure to businesses, enabling them to integrate seamless financial solutions into their applications. The platform offers scalable and secure APIs that facilitate various financial services, including payments, credit scoring, and business insights.",
		link: "https://zeeh.africa",

		imgSrc2: [
			{
				img: "/images/projects/zeeh/zeeh1.svg",
				position: { top: "-10vh", left: "45%" },
			},
			{
				img: "/images/projects/zeeh/zeehGif.gif",
				position: { top: "45vh", left: "30%" },
			},
			{
				img: "/images/projects/zeeh/zeeh.svg",
				position: { top: "30vh", left: "75%" },
			},
			{
				img: "/images/projects/zeeh/zeehGif.gif",
				position: { top: "10vh", left: "0%" },
			},
		],

		features: [
			"API-Driven Financial Solutions",
			"Credit Scoring System",
			"Payment Gateway Integration",
			"Business Insights",
			"Easy-to-use SDKs and documentation for developers to integrate APIs",
		],
		toolsArray: ["React", "Tailwind", "Nextjs", "Context"],
		inspired: "Adenekan Wondeful",
		positions: projectPositions[1],
		bg: "#4F55E3",
	},
	{
		id: 2,
		projectTitle: "Beatslot",
		projectDescription:
			"Beatslot is the go-to platform for beat makers to showcase, sell, and license their beats effortlessly. With the rise of Afrobeats and global music trends, Beatslot bridges the gap between producers and artists looking for the perfect sound.",
		link: "https://beatslot-website.vercel.app",

		imgSrc2: [
			{
				img: "/images/projects/beatslot/hero-light.svg",
				position: { top: "-10vh", left: "-5%" },
			},
			{
				img: "/images/projects/beatslot/cover.svg",
				position: { top: "15vh", left: "40%" },
			},
			{
				img: "/images/projects/beatslot/beatslotGif.gif",
				position: { top: "30vh", left: "75%" },
			},
			{
				img: "/images/projects/beatslot/e-commerce.svg",
				position: { top: "50vh", left: "5%" },
			},
		],
		features: [
			"Seamless beat uploads & previews",
			"Secure licensing & transactions",
			"Artist-producer collaboration tools",
			"A growing community of music creatives",
		],
		toolsArray: ["React", "Tailwind", "Nextjs", "Context"],
		positions: projectPositions[0],
		bg: "#790C0B",
	},
	{
		id: 6,
		projectTitle: "Crafter AI",
		projectDescription:
			"Crafter AI is a project management tool similar to Jira, enhanced with AI capabilities to aid teams in organizing, tracking, and managing their work more efficiently.",
		link: "https://usecrafter.com",

		imgSrc2: [
			{
				img: "/images/projects/crafter/crafter.svg",
				position: { top: "0vh", left: "35%" },
			},
			{
				img: "/images/projects/crafter/crafter2.svg",
				position: { top: "45vh", left: "50%" },
			},
			{
				img: "https://i.ibb.co/Np51sXd/copy-7680-EC6-F-6951-41-C4-897-C-36-DFABB5-D900.gif",
				position: { top: "10vh", left: "75%" },
			},
			{
				img: "/images/projects/crafter/crafter1.svg",
				position: { top: "5vh", left: "-10%" },
			},
			{
				img: "/images/projects/crafter/crafter3.svg",
				position: { top: "50vh", left: "0%" },
			},
		],
		toolsArray: ["React", "Typescript", "Redux", "Nextjs", "Stripe API"],
		bg: "#1E1D1D",
	},

	{
		id: 5,
		projectTitle: "Nook",
		projectDescription:
			"Nook is a comprehensive property management platform designed to empower landlords and estate companies in Africa. It streamlines property management tasks and facilitates thorough tenant background checks, ensuring a secure and efficient rental process.",
		link: "https://nook.africa",

		imgSrc2: [
			{
				img: "/images/projects/nook/nook1.svg",
				position: { top: "-10vh", left: "45%" },
			},
			{
				img: "/images/projects/nook/nook2.svg",
				position: { top: "45vh", left: "40%" },
			},
			{
				img: "/images/projects/nook/nook3.svg",
				position: { top: "30vh", left: "75%" },
			},
			{
				img: "/images/projects/nook/nook.svg",
				position: { top: "10vh", left: "0%" },
			},
		],
		toolsArray: ["React", "Tailwind", "Nextjs", "Context"],
		positions: projectPositions[2],
		bg: "#5F6D7E",
	},
	{
		id: 7,
		projectTitle: "Rando",
		projectDescription:
			"Rando is a robust, programmatically-driven mock data generator that produces structured JSON outputs based on user-defined input parameters. It leverages contextual information, such as geographical location or provider-specific constraints, to tailor the mock data accordingly. By taking advantage of a Provider context—which could represent elements like country, regulatory requirements, or localized data norms—Rando dynamically adjusts its output to generate realistic, scenario-appropriate mock data.",
		link: "https://rando-webapp.vercel.app",
		imgSrc2: [
			{
				img: "/images/projects/rando/rando.svg",
				position: { top: "10vh", left: "45%" },
			},
			{
				img: "/images/projects/rando/rando1.svg",
				position: { top: "85vh", left: "40%" },
			},
			{
				img: "https://i.ibb.co/C1qpT1m/copy-F878029-E-CAF0-4869-92-D6-034-F422-D4545.gif",
				position: { top: "50vh", left: "75%" },
			},
			{
				img: "/images/projects/rando/rando2.svg",
				position: { top: "50vh", left: "0%" },
			},
		],
		toolsArray: ["React", "Redux", "Faker JS", "OpenAI API"],
		bg: "#242424",
	},
	{
		id: 3,
		projectTitle: "Common",
		projectDescription:
			"Common is a sleek tool for designers and developers to create stunning color gradients and palettes with ease. Whether you're working on a UI, branding, or creative project, Common helps you find the perfect color combinations effortlessly.",
		link: "https://usecommon.vercel.app",

		imgSrc2: [
			{
				img: "https://i.ibb.co/D1bG8Zy/copy-70-F90528-4-B4-E-4844-B3-AA-9-DD8-AF76231-A.gif",
				position: { top: "-10vh", left: "25%" },
			},
			{
				img: "/images/projects/common/common1.svg ",
				position: { top: "45vh", left: "40%" },
			},
			{
				img: "/images/projects/common/common-cover.svg",
				position: { top: "10vh", left: "75%" },
			},
			{
				img: "/images/projects/common/common2.svg",
				position: { top: "25vh", left: "0%" },
			},
		],
		features: [
			"Generate beautiful gradients in seconds",
			"Smart color palette suggestions",
			"Intuitive UI for quick exploration",
			"Perfect for designers, developers & creatives",
		],
		toolsArray: ["React", "Tailwind", "Nextjs", "Context"],
		inspired: "Adenekan Wondeful",
		bg: "#54751C",
	},

	// {
	// 	id: 3,
	// 	projectTitle: "Playport",
	// 	projectDescription:
	// 		"Tired of losing your playlists when switching music platforms? Playport makes it effortless to transfer your favorite playlists between Spotify, YouTube Music, Apple Music, and more. No more rebuilding playlists from scratch—just connect, convert, and enjoy your music anywhere.",
	// 	link: "https://staging-playport-fe.vercel.app/explore",

	// 	imgSrc2: [
	// 		{
	// 			img: "/images/projects/steady/steady1.svg",
	// 			position: { top: "-10vh", left: "45%" },
	// 		},

	// 		{
	// 			img: "/images/projects/steady/steady2.svg",
	// 			position: { top: "30vh", left: "75%" },
	// 		},
	// 		{
	// 			img: "/images/projects/steady/steady.svg",
	// 			position: { top: "10vh", left: "0%" },
	// 		},
	// 	],

	// 	features: [
	// 		"Easy daily check-ins to track progress",
	// 		"Goal setting for structured recovery",
	// 		"Private & secure – your journey, your pace",
	// 	],
	// 	toolsArray: ["React", "Tailwind", "Nextjs", "Context"],
	// 	inspired: "Adenekan Wondeful",
	// 	positions: projectPositions[1],
	// 	bg: "#4D6D69",
	// },
	// {
	// 	id: 4,
	// 	projectTitle: "Steady",
	// 	projectDescription:
	// 		"Steady is a simple yet powerful tool designed to help people on their recovery journey stay accountable. Whether you're overcoming addiction or working toward personal growth, Steady helps you log your progress daily and build consistency.",
	// 	link: "https://staging-steady-fe.vercel.app/",

	// 	imgSrc2: [
	// 		{
	// 			img: "/images/projects/steady/steady1.svg",
	// 			position: { top: "-10vh", left: "-5%" },
	// 		},

	// 		{
	// 			img: "/images/projects/steady/steady2.svg",
	// 			position: { top: "30vh", left: "75%" },
	// 		},
	// 		{
	// 			img: "/images/projects/steady/steady.svg",
	// 			position: { top: "50vh", left: "5%" },
	// 		},
	// 	],

	// 	features: [
	// 		"Easy daily check-ins to track progress",
	// 		"Goal setting for structured recovery",
	// 		"Private & secure – your journey, your pace",
	// 	],
	// 	toolsArray: ["React", "Tailwind", "Nextjs", "Context"],
	// 	inspired: "Adenekan Wondeful",
	// 	positions: projectPositions[1],
	// 	bg: "#FCBD47",
	// },
];
