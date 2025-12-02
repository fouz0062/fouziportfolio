import nextJs from "../assets/img/nextJs.png";
import react from "../assets/img/react.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Image } from "react-bootstrap";
import CSS3 from "../assets/img/CSS3.png";
import Bootstrap from "../assets/img/Bootstrap.png";
import Figma from "../assets/img/Figma.png";
import HTML5 from "../assets/img/HTML5.png";
import JavaScript from "../assets/img/JavaScript.png";
import Tailwind from "../assets/img/Tailwind.png";
import TypeScript from "../assets/img/TypeScript.png";
import Git from "../assets/img/Git.png";
import GitHub from "../assets/img/GitHub.png";
import Firebase from "../assets/img/Firebase.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <Image src={Firebase} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <Image src={react} alt="Image" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <Image src={GitHub} alt="Image" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <Image src={Git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <Image src={TypeScript} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <Image src={Tailwind} alt="Image" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <Image src={JavaScript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <Image src={HTML5} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <Image src={Figma} alt="Image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <Image src={nextJs} alt="Image" />
                  <h5>NextJs</h5>
                </div>
                <div className="item">
                  <Image src={react} alt="Image" />
                  <h5>ReactJs</h5>
                </div>

                <div className="item">
                  <Image src={CSS3} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <Image src={Bootstrap} alt="Image" />
                  <h5>BootStrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Image className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
