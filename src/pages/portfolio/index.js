import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Portfolio | {meta.title} </title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <nav className="portfolio-navbar">
        <ul>
          <li onClick={() => handleScroll('code-section')}>Code</li>
          <li onClick={() => handleScroll('motorcycles-section')}>Motorcycles</li>
          <li onClick={() => handleScroll('snowsports-section')}>Snowsports</li>
        </ul>
      </nav>
      <div className="portfolio-content">
        <section id="code-section" className="portfolio-section">
          <h2>Code</h2>
        </section>
        <section id="motorcycles-section" className="portfolio-section">
          <h2>Motorcycles</h2>
        </section>
        <section id="snowsports-section" className="portfolio-section">
          <h2>Snowsports</h2>
        </section>
      </div>
    </HelmetProvider>
  );
}

