import React from "react";
import ReactDom from "react-dom";

// Styling
import "./index.css";

// Assets
import poster from "./poster.jpg";

// stateless functional component
// always return jsx

/**
 * Main landing page
 */
function Main() {
  return (
    <section className="main-page">
      <Movies> </Movies>
    </section>
  );
}

/**
 * Movies arrow function
 */
const Movies = () => {
  return (
    <section className="movies">
      <h1> Movies </h1>
      <InTheaters />
      <ThemeMovies />
    </section>
  );
};

/**
 * Single Movie Component
 */
const Movie = () => {
  const Poster = () => <img src={poster} alt="superman poster"></img>;
  const Summary = () => (
    <h1>
      {" "}
      With the imminent destruction of Krypton, their home planet, Jor-El
      (Russell Crowe) and his wife seek to preserve their race by sending their
      infant son to Earth. The child's spacecraft lands at the farm of Jonathan
      (Kevin Costner) and Martha (Diane Lane) Kent, who name him Clark and raise
      him as their own son. Though his extraordinary abilities have led to the
      adult Clark (Henry Cavill) living on the fringe of society, he finds he
      must become a hero to save those he loves from a dire threat.
    </h1>
  );
  return (
    <article className="movieCell">
      <Poster />
      <Summary />
    </article>
  );
};

/**
 * In theater movies component
 */
const InTheaters = () => {
  return (
    <div className="inTheaters">
      <Movie> </Movie>
      <Movie> </Movie>
      <Movie> </Movie>
    </div>
  );
};

/**
 * Select themed movies component
 * @param {} typeOfMovies
 */
const ThemeMovies = (typeOfMovies) => {
  return (
    <div className="themeMovies">
      <Movie> </Movie>
      <Movie> </Movie>
      <Movie> </Movie>
    </div>
  );
};

ReactDom.render(<Main />, document.getElementById("root"));
