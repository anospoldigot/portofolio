// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Laravel from "../assets/img/Laravel.svg";
import Codeigniter from "../assets/img/codeigniter.svg";
import HTML5 from "../assets/img/html-5.png";
import React from "../assets/img/react.png";
import Jquery from "../assets/img/jquery.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<p>Sebagai lulusan rekayasa perangkat lunak saya sangat menyukai bidang IT dan terus meningkatkan skill setiap waktu.</p>
							<Carousel responsive={responsive} autoPlay={true}
								autoPlaySpeed={1000} infinite={true} className="owl-carousel owl-theme skill-slider">
								<div className="item">
									<img src={HTML5} alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>HTML</h5>
								</div>
								<div className="item">
									<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>CSS</h5>
								</div>
								<div className="item">
									<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>Javascript</h5>
								</div>
								<div className="item">
									<img src="https://www.php.net/images/logos/new-php-logo.svg" alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>PHP</h5>
								</div>
								<div className="item">
									<img src={Codeigniter} alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>Codeigniter</h5>
								</div>
								<div className="item">
									<img src={Laravel} alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>Laravel</h5>
								</div>
								<div className="item">
									<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Image" style={{ height: 100, objectFit: 'contain' }} />
									<h5>Express.js</h5>
								</div>
								<div className="item">
									<img src={Jquery} alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>Jquery</h5>
								</div>
								<div className="item">
									<img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>Vue.js</h5>
								</div>
								<div className="item">
									<img src={React}  alt="Image" style={{height: 100, objectFit: 'contain'}} />
									<h5>React.js & React Native</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="Image" />
		</section>
	)
}
