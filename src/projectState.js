import iphone1 from "./images/iphone1.webp";
import waves1 from "./images/waves1.webp";
import outdoors1 from "./images/outdoors1.webp.jpg";

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
      title: "iPhone 13 Pro",
      mainImg: iphone1,
      mainImgAlt: "mobile view of Apple 13 Pro website",
      url: "/work/iphone",
      siteLink: "https://iphone13pro-devabs2023.netlify.app/",
      repoLink: "https://github.com/Abhishek7487/iPhone-13-Pro",
      technologies: [
        { icon: ["fab", "git"], name: "Git" },
        { icon: ["fab", "figma"], name: "Figma" },
        { icon: ["fab", "css3"], name: "Css" },
        { icon: ["fab", "js"], name: "Javascript" },
        { icon: ["fab", "github"], name: "Github" },
        { icon: ["fab", "html5"], name: "HTML5" },
      ],
      railsInclude: true,
      herokuInclude: true,
      details: [
        {
          title: "Challenges",
          description: "Applying amazing animations in each section.",
        },
        {
          title: "Successes",
          description:
            "Leared a lot about JS Animation libs such as BarbaJS and GSAP",
        },
        {
          title: "Next",
          description:
            "Optimising performance, eliminating empty space, and adding fun cross-user interactivity features!",
        },
      ],
    },
    {
      title: "OUTDOORS Tourist Company",
      mainImg: outdoors1,
      mainImgAlt: "Outdoors tourist company",
      url: "/work/outdoors",
      siteLink: "https://outdoors-tourist-company.netlify.app/",
      repoLink: "https://github.com/Abhishek7487/OUUTDOORS-The-Tourist-Company",
      technologies: [
        { icon: ["fab", "figma"], name: "Figma" },
        { icon: ["fab", "html5"], name: "HTML5" },
        { icon: ["fab", "css3"], name: "Css" },
        { icon: ["fab", "js"], name: "JavaScript" },
      ],
      details: [
        {
          title: "Challenges",
          description:
            "Increasing user interactivity through absolutely amazing designs.",
        },
        {
          title: "Successes",
          description: "Mobile friendly design.",
        },
      ],
    },
  ];
};
