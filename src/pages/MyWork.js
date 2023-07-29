import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import iphone1 from "../images/iphone1.webp";
import reactPlayer from "../images/reactPlayer.webp";
import usepopcorn1 from "../images/usepopcorn1.webp";
// Animations
import { m, LazyMotion, domAnimation } from "framer-motion";
import { pageAnim, lineAnim } from "../animation";
import UseScroll from "../components/useScroll";

const OurWork = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <Work variants={pageAnim} initial="hidden" animate="show" exit="exit">
        <h1>Projects</h1>
        <UseScroll>
          {reactPlayer && (
            <Project>
              <h2>Waves</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/waves">
                <img src={reactPlayer} alt="waves screenshot" />
              </Link>
            </Project>
          )}
        </UseScroll>

        <UseScroll>
          {usepopcorn1 && (
            <Project>
              <h2>usePopcorn Movie App</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/usepopcorn">
                <img src={usepopcorn1} alt="usePopcorn movie app" />
              </Link>
            </Project>
          )}
        </UseScroll>

        <UseScroll>
          {iphone1 && (
            <Project>
              <h2>iPhone 13 Pro</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/iphone">
                <img src={iphone1} alt="iphone homepage" />
              </Link>
            </Project>
          )}
        </UseScroll>
      </Work>
    </LazyMotion>
  );
};

const Work = styled(m.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #fff;
  h1,
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Project = styled(m.div)`
  padding-bottom: 15rem;
  .line {
    height: 0.5rem;
    background: #23dd97;
    margin-bottom: 3rem;
  }
  a {
    display: flex;
    img {
      width: 100%;
      object-fit: cover;
      border: 1px solid rgba(1, 1, 1, 0.2);
      box-shadow: 6px 6px 10px rgba(1, 1, 1, 0.2);
      margin: auto;
    }
  }
  @media (max-width: 1300px) {
    padding-bottom: 10rem;
    h2 {
      font-size: 2rem;
    }
  }
`;

export default OurWork;
