import { Container, Row, Col, Image } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fixHub from "../assets/img/projects/fixHub.png";
import hangman from "../assets/img/projects/hangman.png";
import twitterclone from "../assets/img/projects/twitterclone.png";
import whetherApp from "../assets/img/projects/whetherApp.png";
import todolist from "../assets/img/projects/todoList.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "FixHub",
      description: "The AI Front Door for Property Claims",
      imgUrl: fixHub,
      url: "https://fixhub-gilt.vercel.app/",
    },
    {
      title: "HangMan Game",
      description: "A word guessing game",
      imgUrl: hangman,
      url: "https://snack.expo.dev/@esteficodes/hangman-snack",
    },
    {
      title: "Twitter Clone",
      description: "Twitter Clone using Vite and React",
      imgUrl: twitterclone,
      url: "https://fouz0062.github.io/Clone_Twitter/",
    },
    {
      title: "Weather App",
      description: "A simple weather forecasting app",
      imgUrl: whetherApp,
      url: "https://weather-jjs4-np4x5i2x2-fouz0062.vercel.app/",
    },
    {
      title: "Todo List",
      description: "A simple todo list app with firebase",
      imgUrl: todolist,
      url: "https://fouz0062.github.io/TodoApp-Firrebase/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are some of my recent projects</p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Image className="background-image-right" src={colorSharp2} />
    </section>
  );
};
