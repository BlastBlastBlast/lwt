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
          <a className="bike-portfolio-link" href="/portfolio/motorcycles/tr1">
            <div className="bike-wide-img-container">
              <img src="/img_assets/motorcycles/Tr1_2.jpg" alt="TR1" className="bike-wide-img" />
              <div className="bike-wide-title-overlay">83'TR1</div>
            </div>
          </a>
          <a className="bike-portfolio-link" href="/portfolio/motorcycles/bmw">
            <div className="bike-wide-img-container bike-wide-img-container-bmw">
              <img src="/img_assets/motorcycles/bmw_2.jpg" alt="BMW 76'R100" className="bike-wide-img bike-wide-img-bmw" />
              <div className="bike-wide-title-overlay">76'R100</div>
            </div>
          </a>
        </section>
        <section id="snowsports-section" className="portfolio-section">
          <h2>Snowsports</h2>
        </section>
      </div>
    </HelmetProvider>
  );
}

