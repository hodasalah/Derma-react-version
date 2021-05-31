import React from "react";
import Layout from "../layout";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Features from "../components/features";
import VideoSec from "../components/videoSection";
import Blog from "../components/blog";
import Videos from "../components/videos";
import Reference from "../components/reference";

const Home = () => {
	return (
		<Layout>
			<main>
				<Hero />
				<About />
				<Features />
				<VideoSec />
				<Blog />
				<Videos />
				<Reference />
			</main>
		</Layout>
	);
};

export default Home;
