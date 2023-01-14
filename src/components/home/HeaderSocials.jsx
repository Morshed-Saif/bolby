import {
	SiGmail,
	SiBuymeacoffee,
	SiGithub,
	SiLinkedin,
	SiYoutube,
} from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className="home__socials">
			<a
				href="mailto:someone@example.com"
				className="home__social-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<SiGmail />
			</a>
			<a
				href="https://www.buymeacoffee.com/"
				className="home__social-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<SiBuymeacoffee />
			</a>
			<a
				href="https://github.com"
				className="home__social-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<SiGithub />
			</a>
			<a
				href="https://linkedin.com"
				className="home__social-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<SiLinkedin />
			</a>
			<a
				href="https://youtube.com"
				className="home__social-link"
				target="_blank"
				rel="noopener noreferrer"
			>
				<SiYoutube />
			</a>
		</div>
	);
};

export default HeaderSocials;
