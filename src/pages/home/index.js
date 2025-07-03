import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import GitHubStats from "../../components/GitHubStats";

export const Home = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 home-img-swap-container"
            style={{ background: 'none', margin: '0 auto', textAlign: 'center', height: '100%' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={hovered ? '/img_assets/lwt_helmet.png' : introdata.your_img_url}
              alt="LWT Logo"
              style={{
                width: '100%',
                height: '70vh',
                display: 'block',
                margin: '0 auto',
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain'
              }}
            />
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <div className="typewriter-static-box" style={{
                  height: 'calc(3 * 48px)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <h1 className="fluidz-48 mb-1x" style={{ margin: 0 }}>
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(introdata.animated.first)
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString(introdata.animated.second)
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString(introdata.animated.third)
                          .pauseFor(1000)
                          .start();
                      }}
                      options={{
                        autoStart: true,
                        loop: true,
                        typeSpeed: 30,
                        deleteSpeed: 15,
                        delay: 50,
                        cursor: '|',
                        wrapperClassName: 'Typewriter__wrapper',
                        cursorClassName: 'Typewriter__cursor'
                      }}
                    />
                  </h1>
                </div>
                <p className="mb-1x">
                  {introdata.description.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
              <div style={{ marginTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}>
                <GitHubStats />
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
