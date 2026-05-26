import pfp from "../../assets/pfp.jpg";

const HeroSection = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero-profile-img-wrapper">
					<img src={pfp} alt="Athekame Bashir" className="hero-profile-img" />
				</div>
				<h1>Athekame Bashir</h1>
				<p>
					Full-Stack Web Developer | Building Modern Web Applications & APIs
				</p>
				<div className="cta-buttons">
					{/* <a href="#projects" className="btn btn-primary">
            View Projects
          </a> */}
					<a href="#contact" className="btn btn-secondary">
						Get in Touch
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
