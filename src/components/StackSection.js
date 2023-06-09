import React from "react";
import TechnologyCard from "./TechnologyCard";
// SVGs
// Import styles
import styled from "styled-components";
import { Section, Description } from "../styles";
// Animations
import UseScroll from "./useScroll";

const StackSection = ({ technologies }) => {
  return (
    <UseScroll>
      <TechStack>
        <Description>
          <h2>Tech stack</h2>
          <Cards>
            {technologies.map((technology, index) => (
              <TechnologyCard
                icon={technology.icon}
                key={index}
                name={technology.name}
              />
            ))}
          </Cards>
        </Description>
      </TechStack>
    </UseScroll>
  );
};
export default StackSection;

const TechStack = styled(Section)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 900px) {
    margin-top: 4rem;
    h2 {
      font-size: 2rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 2rem;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  @media (max-width: 700px) {
    column-gap: 1rem;
    justify-content: space-around;
  }
`;
