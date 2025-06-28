import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaLinux, FaBootstrap, FaCode
} from "react-icons/fa";
import {
  SiKotlin, SiTypescript, SiSpring, SiExpress, SiTailwindcss, SiPostgresql, SiMongodb, SiJavascript
} from "react-icons/si";

// Fix for C icon since it's not available in react-icons
import { FaCode as FaCodeC } from "react-icons/fa";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

// Icon mapping for dynamic icon rendering
const iconComponents = {
  'FaJava': FaJava,
  'FaPython': FaPython,
  'FaJs': SiJavascript, // Using SiJavascript for better icon
  'FaReact': FaReact,
  'FaNodeJs': FaNodeJs,
  'FaGitAlt': FaGitAlt,
  'FaDocker': FaDocker,
  'FaAws': FaAws,
  'FaLinux': FaLinux,
  'FaBootstrap': FaBootstrap,
  'FaCode': FaCode,
  'FaCodeC': FaCodeC, // For C language
  'SiKotlin': SiKotlin,
  'SiTypescript': SiTypescript,
  'SiSpring': SiSpring,
  'SiExpress': SiExpress,
  'SiTailwindcss': SiTailwindcss,
  'SiPostgresql': SiPostgresql,
  'SiMongodb': SiMongodb
};

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Skills</h3>
          </Col>
          <Col lg="7">
            <div className="skills-container">
              {skills.map((category, i) => (
                <div key={i} className="skill-category mb-5">
                  <h4 className="skill-category-title mb-3">{category.category}</h4>
                  <div className="skills-list">
                    {category.items.map((item, j) => {
                      const IconComponent = iconComponents[item.icon];
                      return (
                        <div key={j} className="skill-item">
                          <span className="skill-icon">
                            {IconComponent && <IconComponent size={20} />}
                          </span>
                          <span className="skill-name">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
