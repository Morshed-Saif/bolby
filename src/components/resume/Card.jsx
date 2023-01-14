import { SlGraduation, SlBriefcase } from "react-icons/sl";

const Card = (props) => {
	return (
		<div className="timeline__item">
			{props.category === "education" ? (
				<SlGraduation className={props.icon} />
			) : (
				<SlBriefcase className={props.icon} />
			)}
			<span className="timeline__date">{props.year}</span>
			<h3 className="timeline__title">{props.title}</h3>
			<p className="timeline__text">{props.desc}</p>
		</div>
	);
};

export default Card;
