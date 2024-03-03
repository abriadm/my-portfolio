import "./component.css";
import { activity } from "./data";
import me from "../assets/me.jpg";

const HomePage = () => {
  const listItem = activity.map((item) => (
    <li key={item.id} className="item-list">
      <img src={item.img} />
      <h5>&quot;{item.desc}&quot;</h5>
    </li>
  ));

  return (
    <section>
      <h1 className="header">Facts About Me!!!</h1>
      <div className="intro">
        <img src={me} alt="my picture" />
        <div className="intro-text">
          <p>
            Hey! I&apos;m Giveonaldo also known as <b>Abriansyah Adam</b>,
            I&apos;m still alive btw based in Yogyakarta
            <br />
            <i>Entry level Web Developer</i> &#128513;&#128536;
          </p>
          <a href="mailto:giveonaldo@gmail.com">Contact me!!</a>
        </div>
      </div>
      <h1 className="header">Activity</h1>
      <ul className="container">{listItem}</ul>
      <footer>
        <h5>&copy; Giveonaldo, All Rights Reserved</h5>
      </footer>
    </section>
  );
};

export default HomePage;
