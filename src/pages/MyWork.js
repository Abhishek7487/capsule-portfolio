import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import wild from "../images/wild.webp";
import quiz from "../images/quiz.webp";
import pizza from "../images/pizza.webp";
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
          {wild && (
            <Project>
              <h2>The Wild Oasis.</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/wild">
                <img src={wild} alt="The Wild Oasis." />
              </Link>
            </Project>
          )}
        </UseScroll>
        <UseScroll>
          {quiz && (
            <Project>
              <h2>React Quiz App.</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/quiz">
                <img src={quiz} alt="React Quiz App." />
              </Link>
            </Project>
          )}
        </UseScroll>
        <UseScroll>
          {pizza && (
            <Project>
              <h2>Fast React Pizz Co.</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/pizza">
                <img src={pizza} alt="Fast React Pizza Co." />
              </Link>
            </Project>
          )}
        </UseScroll>
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
