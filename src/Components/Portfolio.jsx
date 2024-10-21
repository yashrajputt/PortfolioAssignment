/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pixels: A React movie App",
    description:
      "Pixels is a React-based movie app that fetches data from the TMDB API, allowing users to browse movie details, search, and filter by genre. It features a responsive design, utilizes hooks like useState and useEffect, and is styled with Tailwind CSS.",
    url: "https://pixelmoviez.netlify.app/",
  },
  {
    title: "EarthStore: an Ecommerce website",
    description:
      "Earthstore is a React-based e-commerce app that fetches product data from dummyjson and fakestoreAPI, offering features like category filtering, search, and an Add to Cart option. It's almost fully responsive, uses React hooks for state management and routing, and is styled with Tailwind CSS.",
    url: "https://planetearthstore.netlify.app/",
  },
  {
    title: "My Resume Site",
    description:
      "I created a personal portfolio using HTML, CSS, and Bootstrap, showcasing my projects and skills with a clean, responsive design. It highlights my expertise in front-end development and provides an easy-to-navigate interface for visitors.",
    url: "https://yashrajput-portfolio.netlify.app/",
  },
  {
    title: "Rotating Cube",
    description:
      "I developed a Three.js project featuring a rotating cube positioned above a plane, demonstrating 3D graphics and animation techniques. The project showcases my skills in rendering and manipulating 3D objects within a web environment.",
    url: "https://rotatingcubeonplane.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
