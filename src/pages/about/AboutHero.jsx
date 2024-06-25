import React from "react";
import { Link } from "react-router-dom";
import Github2 from "../../svgs/Github2";
import Dribble2 from "../../svgs/Dribble2";
import ContactMe from "../contact/ContactMe";
import Journey from "../../svgs/Journey";
import Volunteer from "../../svgs/Volunteer";
import Guitar from "../../svgs/Guitar";
import FunFact from "../../svgs/FunFact";
import Quote from "../../svgs/Quote";
import Book from "../../svgs/Book";

export default function AboutHero({ isDarkMode }) {
	const mantras = [
		{
			quote:
				"If you want to live a happy life, tie it to a goal, not to people or things.",
			author: "Albert Einstein",
		},
		{
			quote: "If you want the rainbow, you gotta put up with the rain.",
			author: "Dolly Parton",
		},
		{
			quote:
				"The big lesson in life, is never be scared of anyone or anything.",
			author: "Frank Sinatra",
		},
		{
			quote:
				"Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
			author: "Leo Burnett",
		},
		{
			quote:
				"Your time is limited, so don’t waste it living someone else’s life.",
			author: "Steve Jobs",
		},
	];

	const books = [
		{
			title: "The 48 Laws of Power",
			author: "Robert Greene",
		},
		{
			title: "The Power of Habit",
			author: "Charles Duhigg",
		},
		{
			title: "Rich Dad, Poor Dad",
			author: "Robert Kiyosaki",
		},
		{
			title: "The Millionaire FastLane",
			author: "M.J. DeMarco",
		},
		{
			title: "Power and Influence",
			author: "John P. Kotter",
		},
	];
	return (
		<section
			id="hero"
			// ref={ref}
			className="w-full flex font-grotta  flex-col pt-[50px] text-blue dark:text-white gap-y-[20px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px] overflow-auto">
			<div className="w-full flex flex-col md:flex-row lg:flex-row lg:items-center md:justify-between lg:justify-between">
				<h1 className="text-4xl font-bold text-left">About.</h1>
			</div>

			<main className="w-full text-blue dark:text-white flex mt-[50px] font-grotta ">
				<div className="flex gap-6 flex-wrap w-full">
					<div
						id="schedule-split-2"
						className="flex px-2 md:px-2 w-full lg:w-full md:w-full overflow-y-scroll">
						<div className="relative w-full mb-[30px]">
							<ul className="space-y-10 lg:px-6 list-circle z-20 md:w-full w-full border-l-0.5 lg:border-l-1 border-l-green-2 event-list">
								<li
									className={`space-y-2 px-4 md:w-full lg:w-full ${
										isDarkMode ? "inner2" : "inner1"
									}`}>
									<div className="w-full flex flex-col md:flex-row lg:flex-row lg:items-center md:justify-between lg:justify-between">
										<h1 className="font-medium text-sm md:text-xl lg:text-xl flex items-center gap-1">
											My Journey into Tech
											<span className="mt-[2px]">
												<Journey />
											</span>
										</h1>
									</div>
									<p className="w-full lg:w-full text-sm md:text-sm lg:text-base font-grotta">
										It was 2007 and I was supposed to create my first email
										together with my elder brother and I just sat down and
										watched him navigate the webpage{" "}
										<Link
											className="underline-thick cursor-pointer font-semibold"
											to={"https://yahoo.com"}>
											(Yahoo.com)
										</Link>{" "}
										I realized that he found it difficult to locate some of the
										elements of that webpage. In 2007, I was only 10years old
										and I hardly knew anything about User Experience or User
										Interface design, all I knew was the website wasn’t fine.{" "}
										<br /> <br />
										The only skills I remember having then and even till now was
										music. I remember learning the Saxophone in Primary 4 and
										going to represent my school at an annual concert that same
										year. I was tilted towards that direction growing up because
										I learned fast. The support from my parents towards my music
										skills were annoyingly overwhelming to the extent that they
										went hiring a private music lesson teacher. At this point...{" "}
										{""}
										<Link
											className="cursor-pointer hover:text-green-1 dark:hover:text-white underline-thick transition duration-500"
											target="_blank"
											to={"https://medium.com/@theseyipeters"}>
											Read more
										</Link>
									</p>
								</li>
								<li
									className={`space-y-2 px-4 md:w-full lg:w-full ${
										isDarkMode ? "inner2" : "inner1"
									}`}>
									<div className="w-full flex flex-col md:flex-row lg:flex-row lg:items-center md:justify-between lg:justify-between">
										<h1 className="font-medium text-sm md:text-xl lg:text-xl flex items-center gap-1">
											I Volunteer Sometimes too.
											<span className="mt-[2px]">
												<Volunteer />
											</span>
										</h1>
										<Link className="font-light text-sm underline underline-offset-2">
											View Images
										</Link>
									</div>
									<p className="font-grotta w-full lg:w-full text-sm md:text-sm lg:text-base">
										Giving back to the community is important to me. I volunteer
										as a <b>Mentor</b> and <b>Community Manager</b> at a local
										tech ed, helping aspiring developers build their skills and
										confidence. It's incredibly rewarding to see their progress
										and know I'm making a positive impact.
									</p>
								</li>
								<li
									className={`space-y-2 px-4 md:w-full lg:w-full ${
										isDarkMode ? "inner2" : "inner1"
									}`}>
									<div className="w-full flex flex-col md:flex-row lg:flex-row lg:items-center md:justify-between lg:justify-between">
										<h1 className="font-medium text-sm md:text-xl lg:text-xl flex items-center gap-1">
											Other Skills and Talents
											<span className="mt-[2px]">
												<Guitar />
											</span>
										</h1>
										{/* <Link className="font-light text-sm underline underline-offset-2">
											View Products
										</Link> */}
									</div>
									<p className="font-grotta w-full lg:w-full text-sm md:text-sm lg:text-base">
										Aside from web development, I'm also an accomplished
										musician. I play the guitar and have been part of a band for
										the last 3 years. We've even released a few singles on
										Spotify! Music helps me stay creative and brings a unique
										rhythm to my coding sessions.
									</p>
								</li>
								<li
									className={`space-y-2 px-4 md:w-full lg:w-full ${
										isDarkMode ? "inner2" : "inner1"
									}`}>
									<div className="w-full flex flex-col md:flex-row lg:flex-row lg:items-center md:justify-between lg:justify-between">
										<h1 className="font-medium text-base md:text-xl lg:text-xl flex items-center gap-1">
											Fun Fact about Me.
											<span className="mt-[2px]">
												<FunFact />
											</span>
										</h1>
										{/* <Link className="font-light text-sm underline underline-offset-2">
											View Products
										</Link> */}
									</div>
									<p className="font-grotta w-full lg:w-full text-sm md:text-sm lg:text-base">
										<span className="font-bold font-grotta">
											I died and rose again!
										</span>
										<br />
										Did you know I once got trapped in the trunk of a car for a
										good six to seven hours? It was one of the most harrowing
										experiences of my life. The ordeal began when a prank went
										horribly wrong, and I found myself locked inside, with no
										means of escape. As the hours dragged on, the air became
										stifling, and I could feel my strength waning. <br /> <br />
										At some point, I must have lost consciousness, slipping into
										a lifeless state. But then, miraculously, I suddenly
										regained consciousness. The rush of panic and adrenaline
										surged through me, and I knew I had to find a way out. With
										every ounce of strength I had left, I banged on the trunk,
										hoping someone would hear my desperate cries. <br /> <br />
										Eventually, after hours without seeing me, My big brother
										stepped out, and as he screamed my name, I responded with
										the last strength I had within me by hitting, and pounding
										the car. He noticed the commotion and called for help. When
										they finally opened the trunk, I was weak but incredibly
										relieved to be free. That experience taught me a lot about
										resilience and the will to survive, and more importantly,
										it's a story that reminds me of my purpose and how important
										it is that I must fulfil it.
									</p>
								</li>
								<li
									className={`space-y-2 px-4 md:w-full lg:w-full ${
										isDarkMode ? "inner2" : "inner1"
									}`}>
									<div className="w-full flex flex-col md:flex-row lg:flex-row lg:items-center md:justify-between lg:justify-between">
										<h1 className="font-medium text-sm md:text-xl lg:text-xl flex items-center gap-1">
											Personal Mantras or Quotes
											<span className="mt-[2px]">
												<Quote />
											</span>
										</h1>
										{/* <Link className="font-light text-sm underline underline-offset-2">
											View Products
										</Link> */}
									</div>
									<p className="w-full lg:w-full">
										<p className="text-sm md:text-sm lg:text-base font-grotta">
											Here, I have some of my favorite quotes and mantras that I
											live by. These just serve as a source of inspiration for
											me in moments of confusion, and maybe they could help you
											see life differently.
										</p>
										<br />
										<ul className="w-full flex flex-col gap-1 lg:gap-2">
											{mantras.map((mantra, index) => (
												<li className="mt-2 flex text-sm lg:text-base flex-row flex-wrap gap-1 lg:gap-2">
													<p className="font-grotta">"{mantra.quote}"</p>
													<p className="font-medium font-grotta">
														- {mantra.author}
													</p>
												</li>
											))}
										</ul>
									</p>
								</li>
								<li
									className={`space-y-2 px-4 md:w-full lg:w-full ${
										isDarkMode ? "inner2" : "inner1"
									}`}>
									<div className="w-full flex flex-col md:flex-row lg:flex-row lg:items-center md:justify-between lg:justify-between">
										<h1 className="font-medium text-sm md:text-xl lg:text-xl flex items-center gap-1">
											Book Recommendations
											<span className="mt-[2px]">
												<Book />
											</span>
										</h1>
										{/* <Link className="font-light text-sm underline underline-offset-2">
											View Products
										</Link> */}
									</div>
									<p className="w-full lg:w-full font-grotta">
										<p className="text-sm md:text-sm lg:text-base font-grotta">
											Here are some of my favorite books on power that have
											inspired and enlightened me over the years. Perhaps
											they'll offer you new perspectives and ideas to empower
											your own journey.
										</p>
										<br />
										<ul className="w-full flex flex-col gap-1 lg:gap-2">
											{books.map((book, index) => (
												<li className="mt-2 flex text-sm lg:text-base flex-row flex-wrap gap-1 lg:gap-2">
													<p className="font-grotta">"{book.title}"</p>
													<p className="font-medium font-grotta">
														- {book.author}
													</p>
												</li>
											))}
										</ul>
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</main>
			<ContactMe />
		</section>
	);
}
