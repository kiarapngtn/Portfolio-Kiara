import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import lift from "../assets/projects/kk2.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Awesome To Do's"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. The platform allows for full CURD functionality on profiles and posts, and users can confirm or cancel a ride from a post and message each other after confirmation. Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://kiangawesometodos.onrender.com"
            />
         </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects