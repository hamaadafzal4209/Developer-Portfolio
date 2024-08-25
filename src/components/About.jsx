

const About = () => {
  return (
    <section id="about" className="py-12 px-[5%] bg-gray-900 text-white">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div
          style={{
            boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255,0.5)",
            borderLeft: "1px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(20px)"
          }}
          className="flex items-center justify-center flex-col p-4"
        >
          <img
            src={'../../public/assets/about01.png'}
            alt="Web Development"
            className="w-full object-cover rounded-lg"
          />
          <div className="text-center mt-4">
            <p className="text-lg font-semibold mb-2">Web Development</p>
            <p className="text-gray-300 text-sm">
              Creating responsive and interactive websites using modern
              technologies.
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255,0.5)",
            borderLeft: "1px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(20px)"
          }}
          className="flex items-center justify-center flex-col p-4"
        >
          <img
           src={'../../public/assets/about02.png'}
            alt="Web Development"
            className="w-full object-cover rounded-lg"
          />
          <div className="text-center mt-4">
            <p className="text-lg font-semibold mb-2">Web Development</p>
            <p className="text-gray-300 text-sm">
              Creating responsive and interactive websites using modern
              technologies.
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255,0.5)",
            borderLeft: "1px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(20px)"
          }}
          className="flex items-center justify-center flex-col p-4"
        >
          <img
           src={'../../public/assets/about03.png'}
            alt="Web Development"
            className="w-full object-cover rounded-lg"
          />
          <div className="text-center mt-4">
            <p className="text-lg font-semibold mb-2">Web Development</p>
            <p className="text-gray-300 text-sm">
              Creating responsive and interactive websites using modern
              technologies.
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "20px 20px 50px rgba(0,0,0,0.5)",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
            borderTop: "1px solid rgba(255,255,255,0.5)",
            borderLeft: "1px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(20px)"
          }}
          className="flex items-center justify-center flex-col p-4"
        >
          <img
           src={'../../public/assets/about04.png'}
            alt="Web Development"
            className="w-full object-cover rounded-lg"
          />
          <div className="text-center mt-4">
            <p className="text-lg font-semibold mb-2">Web Development</p>
            <p className="text-gray-300 text-sm">
              Creating responsive and interactive websites using modern
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
