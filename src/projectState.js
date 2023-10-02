import pizza from "./images/pizza.webp";
import waves1 from "./images/waves1.webp";
import usepopcorn1 from "./images/usepopcorn1.webp";

export const projectState = () => {
  return [
    {
      title: "Waves",
      mainImg: waves1,
      mainImgAlt: "simple desktop view of miminalist music player",
      url: "/work/waves",
      repoLink: "https://github.com/Abhishek7487/React_Player",
      siteLink: "https://abhishek7487.github.io/React_Player/",
      technologies: [
        { icon: ["fab", "react"], name: "React" },
        { icon: ["fab", "git"], name: "Git" },
        { icon: ["fab", "sass"], name: "Sass" },
        { icon: ["fab", "js"], name: "Javascript" },
        { icon: ["fab", "github"], name: "Github" },
        { icon: ["fab", "html5"], name: "HTML5" },
      ],
      details: [
        {
          title: "Challenges",
          description:
            "Avoiding redundant state variables, working with outdated information",
        },
        {
          title: "Successes",
          description:
            "Implemented autoplay and skip-track features, added pretty style touches while keeping the design sleek",
        },
        {
          title: "Next",
          description:
            "Incorporating more song libraries with option to select genre",
        },
      ],
    },

    {
      title: "Fast React Pizza Co.",
      mainImg: pizza,
      mainImgAlt: "Fast React Pizza ordering app",
      url: "/work/pizza",
      siteLink: "https://pizza-co.netlify.app/",
      repoLink: "https://github.com/Abhishek7487/fast-react-pizza",
      technologies: [
        { icon: ["fab", "react"], name: "React" },
        { icon: ["fab", "figma"], name: "Figma" },
        { icon: ["fab", "css3"], name: "TailwindCSS" },
        { icon: ["fab", "github"], name: "Github" },
        { icon: ["fab", "html5"], name: "HTML5" },
      ],
      details: [
        {
          title: "Challenges",
          description: "Managing state with modern Redux-toolkit and thunks.",
        },
        {
          title: "Successes",
          description:
            "Leared Advanced React-router concepts like Data loading, useFetcher hook, etc.",
        },
        {
          title: "Next",
          description:
            "Adding the ability to add or remove ingredients for pizzas in the cart!",
        },
      ],
    },
    {
      title: "usePopcorn Movie App",
      mainImg: usepopcorn1,
      mainImgAlt: "usePopcorn Movie App",
      url: "/work/usepopcorn",
      siteLink: "https://usepopcorn-movie.netlify.app/",
      repoLink: "https://github.com/Abhishek7487/usePopcorn-movie-app",
      technologies: [
        { icon: ["fab", "figma"], name: "Figma" },
        { icon: ["fab", "html5"], name: "HTML5" },
        { icon: ["fab", "css3"], name: "Css" },
        { icon: ["fab", "react"], name: "React" },
      ],
      details: [
        {
          title: "Challenges",
          description:
            "Allowing users to search movies and add their favourite ones to the watchlist along with rating ⭐",
        },
        {
          title: "Successes",
          description: "Learned how to fetch data from API.",
        },
      ],
    },
  ];
};
