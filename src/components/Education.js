import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Education = () => {
  const educations = [
    {
      degree: "AWS Cloud AI Course",
      institution: "Amazon X HackYourFuture",
      period: "2025 - 2025",
    },
    {
      degree: "Full Stack Developer BootCamp",
      institution: "REDI School of Digital Integration",
      period: "2024 - 2025",
    },
    {
      degree: "MBA",
      institution: "University of madras",
      period: "2016 - 2018",
    },
    {
      degree: "B.Sc. Mathematics",
      institution: "University of madras",
      period: "2013 - 2016",
    },
  ];

  return (
    <section className="education" id="education">
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
                  <h2>Education</h2>
                  <p>My educational background and qualifications</p>
                  <Row>
                    {educations.map((education, index) => {
                      return (
                        <Col
                          key={index}
                          size={12}
                          md={6}
                          style={{ marginTop: "1rem" }}
                        >
                          <div className="education-item">
                            <div className="education-header">
                              <h4>{education.degree}</h4>
                              <h5>{education.institution}</h5>
                              <span className="period">{education.period}</span>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
