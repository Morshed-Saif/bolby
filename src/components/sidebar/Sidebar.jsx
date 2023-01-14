import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import {
	SlHome,
	SlUserFollowing,
	SlBriefcase,
	SlGraduation,
	SlLayers,
	SlNote,
	SlBubble,
} from "react-icons/sl";

const Sidebar = () => {
	const [toggle, showMenu] = useState(false);

	return (
		<>
			<aside className={toggle ? "aside show-menu" : "aside"}>
				<a href="#home" className="nav__logo">
					<img src={Logo} alt="" />
				</a>

				<nav className="nav">
					<div className="nav__menu">
						<ul className="nav__list">
							<li className="nav__item">
								<a href="#home" className="nav__link">
									<SlHome />
								</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link">
									<SlUserFollowing />
								</a>
							</li>
							<li className="nav__item">
								<a href="#services" className="nav__link">
									<SlBriefcase />
								</a>
							</li>
							<li className="nav__item">
								<a href="#resume" className="nav__link">
									<SlGraduation />
								</a>
							</li>
							<li className="nav__item">
								<a href="#work" className="nav__link">
									<SlLayers />
								</a>
							</li>
							<li className="nav__item">
								<a href="#blog" className="nav__link">
									<SlNote />
								</a>
							</li>
							<li className="nav__item">
								<a href="#contact" className="nav__link">
									<SlBubble />
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<div className="nav__footer">
					<span className="copyright">&copy; 2022 - 2023.</span>
				</div>
			</aside>

			<div
				className={
					toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"
				}
				onClick={() => showMenu(!toggle)}
			>
				<SlMenu className="icon-menu" />
			</div>
		</>
	);
};

export default Sidebar;
