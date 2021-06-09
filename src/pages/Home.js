import React from "react";
import Layout from "../layout";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Features from "../components/features";
import VideoSec from "../components/videoSection";
import Blog from "../components/blog";
import Videos from "../components/videos";
import Reference from "../components/reference";
import ScrollButton from "../components/UI/scrollButton";

const Home = ({ open, show, hide }) => {
	return (
		<Layout>
			<main>
				<Hero />
				<About />
				<Features />
				<VideoSec show={open} closeModal={hide} openModal={show} />
				<Blog />
				<Videos show={open} closeModal={hide} openModal={show} />
				<Reference />
				<ScrollButton />
			</main>
		</Layout>
	);
};

export default Home;
