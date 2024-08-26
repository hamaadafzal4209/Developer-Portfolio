import { useRef } from "react";
import { Tilt } from "react-tilt";

const About = () => {

  const aboutRef = useRef(null);
  
  const tiltOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <section
    ref={aboutRef}
      id="about"
      className="py-12 sm:py-20 px-[5%] bg-gray-900 text-white"
    >
      <div className="mb-12">
        <h2 className="text-base uppercase font-normal text-gray-400 mb-4">
          Introduction
        </h2>
        <h2 className="text-2xl md:text-5xl font-bold mb-4">Overview.</h2>
        <p className="text-gray-400 text-sm max-w-xl leading-[22px]">
          I am a Full Stack Web Developer with 4 years of experience in building
          dynamic and responsive mobile and web applications. My expertise
          encompasses both front-end and back-end development, allowing me to
          create comprehensive and efficient solutions.
        </p>
      </div>

      {/* Services cards */}
      <div className="card-container gap-6">
        {/* Mobile App Development Card */}
        <Tilt options={tiltOptions}>
          <div
            style={{
              boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
              borderRadius: "15px",
              overflow: "hidden",
              background: "#1b2a38",
              borderTop: "1px solid rgba(255,255,255,0.5)",
              borderLeft: "1px solid rgba(255,255,255,0.5)",
            }}
            className="flex flex-col items-center p-4 cursor-pointer"
          >
            <img
              src={"/assets/mobile.png"}
              alt="Mobile App Development"
              className="w-full object-cover rounded-lg mb-4"
              style={{ height: "200px" }}
            />
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">
                Mobile App Development
              </p>
              <p className="text-gray-300 text-sm">
                Building high-performance mobile applications for both iOS and
                Android platforms.
              </p>
            </div>
          </div>
        </Tilt>

        {/* Backend Development Card */}
        <Tilt options={tiltOptions}>
          <div
            style={{
              boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
              borderRadius: "15px",
              background: "#1b2a38",
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,0.5)",
              borderLeft: "1px solid rgba(255,255,255,0.5)",
            }}
            className="flex flex-col items-center p-4 cursor-pointer"
          >
            <img
              src={"/assets/backend.jpeg"}
              alt="Backend Development"
              className="w-full object-cover rounded-lg mb-4"
              style={{ height: "200px" }}
            />
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Backend Development</p>
              <p className="text-gray-300 text-sm">
                Creating robust and scalable backend systems with Node.js,
                Express, and databases.
              </p>
            </div>
          </div>
        </Tilt>

        {/* Frontend Development Card */}
        <Tilt options={tiltOptions}>
          <div
            style={{
              boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
              borderRadius: "15px",
              background: "#1b2a38",
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,0.5)",
              borderLeft: "1px solid rgba(255,255,255,0.5)",
            }}
            className="flex flex-col items-center p-4 cursor-pointer"
          >
            <img
              src={"/assets/frontend.jpg"}
              alt="Frontend Development"
              className="w-full object-cover rounded-lg mb-4"
              style={{ height: "200px" }}
            />
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Frontend Development</p>
              <p className="text-gray-300 text-sm">
                Designing and developing responsive UIs with React, TypeScript,
                and CSS.
              </p>
            </div>
          </div>
        </Tilt>

        {/* API Integration Card */}
        <Tilt options={tiltOptions}>
          <div
            style={{
              boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
              borderRadius: "15px",
              background: "#1b2a38",
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,0.5)",
              borderLeft: "1px solid rgba(255,255,255,0.5)",
            }}
            className="flex flex-col items-center p-4 cursor-pointer"
          >
            <img
              src={"/assets/api-integration.jpg"}
              alt="API Integration"
              className="w-full object-cover rounded-lg mb-4"
              style={{ height: "200px" }}
            />
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">API Integration</p>
              <p className="text-gray-300 text-sm">
                Integrating third-party APIs and building RESTful services for
                seamless connectivity.
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default About;
