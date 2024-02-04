import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/CWTS.png"
import proj2 from "../assets/img/FOG.png"
import proj3 from "../assets/img/AWS.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Photobooth Application",
            description: "Design & Development",
            imgUrl: proj3,
        },
        {
            title: "Data Scraiping",
            description: "Development",
            imgUrl: proj2,
        },
        {
            title: "CWTS Website",
            description: "Design & Development",
            imgUrl: proj1,
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
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        I take great pride in presenting the
                                        following projects that showcase my
                                        professional accomplishments:
                                    </p>
                                    <Tab.Container
                                        id="projects-tabs"
                                        defaultActiveKey="first"
                                    >
                                        <Tab.Content
                                            id="slideInUp"
                                            className={
                                                isVisible
                                                    ? "animate__animated animate__slideInUp"
                                                    : ""
                                            }
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map(
                                                        (project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        }
                                                    )}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Cumque quam, quod
                                                    neque provident velit, rem
                                                    explicabo excepturi id illo
                                                    molestiae blanditiis,
                                                    eligendi dicta officiis
                                                    asperiores delectus quasi
                                                    inventore debitis quo.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Cumque quam, quod
                                                    neque provident velit, rem
                                                    explicabo excepturi id illo
                                                    molestiae blanditiis,
                                                    eligendi dicta officiis
                                                    asperiores delectus quasi
                                                    inventore debitis quo.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
