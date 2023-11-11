import React from "react";
import SectionTitle from "./SectionTitle";

const Hero = () => {
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/images/sky-night.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <SectionTitle heading={"Meditation Benefits"}></SectionTitle>

              <p className="mb-5 text-xl">
                Many meditation apps and online resources are available to help
                beginners and experienced meditators. Some popular meditation
                apps include Headspace, Calm, Insight Timer, and 10% Happier.
                These apps offer guided meditations and tools to track your
                progress.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
