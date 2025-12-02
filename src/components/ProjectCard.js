import { Col, Image } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <Image src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button
            style={{
              display: "block",
              textAlign: "center",
              width: "50%",
              backgroundColor: "#fff",
              color: "black",
              border: "none",
              padding: "10px",
              margin: "10px auto",
              borderRadius: "5px",
            }}
            onClick={() => window.open(url, "_blank")}
          >
            View
          </button>
        </div>
      </div>
    </Col>
  );
};
