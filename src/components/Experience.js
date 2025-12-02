import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  const experiences = [
    {
      title: "AWS - Cloud & AI Masterclass Participant",
      company: "AWS Office Headquarters, Copenhagen, Denmark",
      period: "Currently studying",
      description: [
        "7-week masterclass providing hands-on experience with AWS technologies",
        "Building skills to design, deploy, and run real-world cloud and AI solutions",
        "Progressing from cloud fundamentals to advanced AI applications",
        "Learning to independently create and manage cloud environments",
        "Deploying three-tier web applications",
        "Evaluating and understanding architectural trade-offs",
        "Implementing serverless solutions",
        "Understanding fundamentals of AI and Machine Learning",
        "Applying generative AI concepts in practice",
        "Building RAG-based (Retrieval-Augmented Generation) systems",
        "Developing agent-based AI applications",
        "Key technologies: Amazon EC2, Amazon RDS, AWS Lambda, Amazon Bedrock, Strands Agent, Kiro, and other core AWS services",
      ],
    },
    {
      title: "Code Mentor, Reviewer, and Teacher",
      company: "HackYourFuture Denmark",
      period: "Sep 2025 - Present",
      description: [
        "Providing hands-on technical guidance and mentorship on core web development concepts, including HTML, CSS, JavaScript, and the React ecosystem",
        "Conducting detailed code reviews for student assignments, focusing on enforcing best practices, clean component architecture, and high technical quality",
        "Serving as a Technical Resource, helping aspiring developers troubleshoot complex issues and develop effective problem-solving strategies",
        "Supporting the community by guiding the next generation of developers and helping them prepare for professional roles",
      ],
    },
    {
      title: "Web Developer",
      company: "LifeBonder",
      period: "Jan 2025 - Sep 2025",
      description: [
        "Designed and implemented interactive user interfaces using React, ensuring a seamless user experience",
        "Utilized Git and GitHub for version control, collaborating efficiently on projects and maintaining code integrity",
        "Created wireframes and UI designs in Figma, translating design concepts into functional web pages",
        "Focused on performance, accessibility, and usability, delivering intuitive and engaging web experiences",
      ],
    },
    {
      title: "Full Stack Developer Bootcamp",
      company: "ReDI School of Digital Integration",
      period: "Sep 2024 - Jan 2025",
      description: [
        "Participated in an intensive 18-week Full-Stack Developer Bootcamp focused on building skills in both front-end and back-end development",
        "Covered modern web technologies and best practices through hands-on projects",
        "Front-End: HTML5, CSS3, JavaScript (ES6+), React.js",
        "Back-End: Node.js, Express, RESTful APIs",
        "Database: MongoDB",
        "Version Control: Git, GitHub",
      ],
    },
    {
      title: "Web Development Intern",
      company: "Brainvalley Software Pvt Ltd",
      period: "Apr 2022 - Nov 2022",
      description: [
        "Worked with HTML, CSS and JS along with CSS frameworks like Bootstrap and JS framework like React JS",
        "Reviewed and debugged codes",
        "Created Projects from scratch",
        "Trained the team about Git, GitHub and few topics under Bootstrap",
        "Worked with React JS libraries like framer motion, Ant Design",
        "Good knowledge on responsive web designing",
        "Good knowledge in MongoDB, Mongoose and NodeJS",
      ],
    },
    {
      title: "Sr. Systems Engineer",
      company: "Cognizant",
      period: "Oct 2018 - Dec 2018",
      description: [
        "Worked in customer support for a pharmaceutical project",
        "Experience in Incident Management, User Access Management, Service Request Management, Knowledge Management, Job Monitoring and Application Support",
        "Given technical support via calls and emails",
        "Prepared SOP for the team",
        "Trained the newly joined people",
      ],
    },
    {
      title: "System Engineer",
      company: "Cognizant",
      period: "Aug 2017 - Sep 2018",
      description: [
        "Handled incidents and service requests from the users",
        "Providing daily call-backs to users, to make sure the issue is fixed or escalated",
        "Helped in achieving teams daily task goals",
      ],
    },
    {
      title: "Graduate Trainee",
      company: "Cognizant",
      period: "Aug 2016 - May 2017",
      description: [
        "Understood the work environment and getting used to know people and culture from different part of India",
        "Passionated to work with colleagues",
        "Understood the way of work and learned different tools to perform the daily task",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
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
                  <h2>Experience</h2>
                  <p>Here's a summary of my professional experience</p>
                  <Row>
                    {experiences.map((experience, index) => {
                      return (
                        <Col
                          key={index}
                          size={12}
                          md={6}
                          style={{ marginTop: "1rem" }}
                        >
                          <div className="experience-item">
                            <div className="experience-header">
                              <h4>{experience.title}</h4>
                              <h5>{experience.company}</h5>
                              <span className="period">
                                {experience.period}
                              </span>
                            </div>
                            <ul className="experience-description">
                              {experience.description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
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
