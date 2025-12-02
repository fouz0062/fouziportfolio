import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-start mb-4 mb-sm-0">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center">
            <div className="social-icon footer-social">
              <a
                href="https://www.linkedin.com/in/fouziya-mohamed-ashik-b70b26a3/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/fouz0062"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a
                href="https://drive.google.com/file/d/156Yi3cFNQiY_6wXqx68mJYj2Zp_I0Vor/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Resume" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
