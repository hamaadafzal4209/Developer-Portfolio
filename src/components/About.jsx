import { Tilt } from "react-tilt";
import { Fade } from "react-awesome-reveal";

const About = () => {

  const tiltOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-20 px-[5%] bg-gray-900 text-white"
    >
      <Fade>
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
      </Fade>

      {/* Services cards */}
      <div className="card-container gap-6">
        {/* Mobile App Development Card */}
        <Fade>
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
        </Fade>

        {/* Backend Development Card */}
        <Fade>
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
        </Fade>

        {/* Frontend Development Card */}
        <Fade>
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
        </Fade>

        {/* API Integration Card */}
        <Fade>
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
        </Fade>
      </div>
    </section>
  );
};

export default About;