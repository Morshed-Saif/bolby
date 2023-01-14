import { SlFire, SlCup, SlPeople, SlBadge } from "react-icons/sl";

const AboutBox = () => {
	return (
		<div className="about__boxes grid">
			<div className="about__box">
				<SlFire className="about__icon" />

				<div>
					<h3 className="about__title">198</h3>
					<span className="about__subtitle">Project Completed</span>
				</div>
			</div>

			<div className="about__box">
				<SlCup className="about__icon" />

				<div>
					<h3 className="about__title">5670</h3>
					<span className="about__subtitle">Cup of coffee</span>
				</div>
			</div>

			<div className="about__box">
				<SlPeople className="about__icon" />

				<div>
					<h3 className="about__title">427</h3>
					<span className="about__subtitle">Satisfied clients</span>
				</div>
			</div>

			<div className="about__box">
				<SlBadge className="about__icon" />

				<div>
					<h3 className="about__title">35</h3>
					<span className="about__subtitle">Nominees winner</span>
				</div>
			</div>
		</div>
	);
};

export default AboutBox;
