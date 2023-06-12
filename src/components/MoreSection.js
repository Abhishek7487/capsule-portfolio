import React from "react";
// Styles
import styled from "styled-components";
import { Section, Button } from "../styles";
import Toggle from "./Toggle";
// Animations
import { m } from "framer-motion";
import UseScroll from "./useScroll";
import { fade } from "../animation";

const MoreSection = () => {
  return (
    <UseScroll>
      <More>
        <h2>
          <span>Dive deeper</span>
        </h2>
        <Toggle title="My Resume">
          <div className="answer">
            <m.div variants={fade} style={{ marginTop: "2rem" }}>
              <Button href="#" target="_blank" rel="noreferrer">
                View Resume
              </Button>
            </m.div>
          </div>
        </Toggle>
        <Toggle title="Currently working on">
          <div className="answer">
            <m.p variants={fade}>
              Building a Video Game Discovery Webapp for gamers.
              <span style={{ visibility: "hidden" }}>
                Reps: timing is everything
              </span>
            </m.p>
            <m.p variants={fade}>
              Mastering CS logic
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
              >
                <span style={{ cursor: "pointer" }}>
                  Harvard CS50x CS Fundamentals
                </span>
              </a>
            </m.p>
            <m.p variants={fade}>
              Getting to know the library that shook front-end
              <a
                target="_blank"
                rel="noreferrer"
                href="https://codewithmosh.com/p/ultimate-react-part1"
              >
                <span style={{ cursor: "pointer" }}>
                  Code with Mosh's React 18
                </span>
              </a>
            </m.p>
          </div>
        </Toggle>
      </More>
    </UseScroll>
  );
};

const More = styled(Section)`
  display: block;
  margin-top: 4rem;
  span {
    display: block;
  }
  .bookend-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    cursor: default;
    p {
      padding: 3rem 0rem 0rem 0rem;
    }
    padding: 2rem 3rem 3rem 0rem;
    @media (max-width: 1300px) {
      padding: 3rem 0rem 3rem 0rem;
    }
  }
`;

export default MoreSection;
