import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h1>
                  {`Hi! I'm Fouziya `}{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p>
                  I am a passionate and results driven Frontend Developer
                  specializing in creating accessible, high performance web
                  applications, primarily leveraging React, Next.js, and
                  TypeScript. With a strong foundation in UI/UX principles, my
                  expertise lies in efficiently translating complex visual
                  designs (from tools like Figma) into clean, well structured,
                  and fully responsive user interfaces. I approach development
                  with a user centric mindset, proven by my work launching
                  several key, accessibility focused pages during my internship
                  at LifeBonder, and my ability to deliver scalable projects
                  from concept to deployment, such as my Twitter Clone built
                  with React, Vite, and Tailwind CSS. Beyond coding, I am
                  committed to technical excellence and collaboration. As a Code
                  Mentor and Reviewer at Hack Your Future, I actively provide
                  hands on guidance, enforce best practices through detailed
                  code reviews, and help students transition into professional
                  roles. I am currently expanding my expertise into cloud
                  computing and AI through the AWS Cloud & AI Masterclass, where
                  I'm learning to design, deploy, and manage cloud environments
                  and build AI powered solutions using AWS services. My passion
                  for innovation extends to competitive programming, as
                  demonstrated by my participation in hackathon in 2025, where
                  I've honed my problem solving skills and ability to deliver
                  under pressure. I thrive in remote, collaborative
                  environments, managing version control (Git/GitHub) to ensure
                  clean versioning and smooth team workflows. I am dedicated to
                  continuous learning currently expanding my skills into React
                  Native and cloud technologies and am actively seeking roles
                  that prioritize clean code, intuitive design, and continuous
                  growth.
                </p>
                <button
                  onClick={() =>
                    (window.location.href = "mailto:fouzifathii@gmail.com")
                  }
                >
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
};
