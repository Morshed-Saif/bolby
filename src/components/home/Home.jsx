import "./home.css";
import Me from "../../assets/avatar-1.svg";

import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
	return (
		<section className="home container" id="home">
			<div className="intro">
				<img src={Me} alt="" className="home__img" />
				<h1 className="home__name">Bolby Doe</h1>
				<span className="home__education">
					I'm a Front-End developer
				</span>

				<HeaderSocials />

				<a href="#contact" className="btn">
					Hire me
				</a>

				<ScrollDown />
			</div>

			<Shapes />
		</section>
	);
};

export default Home;
