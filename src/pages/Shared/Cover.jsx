import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase"> {title}</h1>
            <p className="mb-5 text-xl">
              Meditation is a practice that involves training the mind to focus
              on a particular object, thought, or activity to achieve mental
              clarity, relaxation, and heightened awareness. It has been used
              for thousands of years in various cultures and religions and is
              associated with numerous physical, mental, and emotional benefits.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
