import { Fade } from 'react-awesome-reveal';

const skills = [
  { name: "HTML5", src: "/assets/html.png", bgColor: "#FCE4E4" },
  { name: "CSS3", src: "/assets/css.png", bgColor: "#E0F0FF" },
  { name: "JavaScript", src: "/assets/javascript.png", bgColor: "#F9F9D4" },
  { name: "React", src: "/assets/react.png", bgColor: "#D8F4FF" },
  { name: "Git", src: "/assets/git.png", bgColor: "#F8F8F8" },
  { name: "Next.js", src: "/assets/next-js.png", bgColor: "#F4F4F4" },
  { name: "Redux", src: "/assets/redux.png", bgColor: "#F3E7FF" },
  { name: "Tailwind CSS", src: "/assets/tailwind-css.png", bgColor: "#D4F8FF" },
  { name: "Bootstrap", src: "/assets/bootstrap.png", bgColor: "#E8D6F1" },
  { name: "SCSS", src: "/assets/sass.png", bgColor: "#E8D6F1" },
  { name: "MUI", src: "/assets/mu5.png", bgColor: "#B9D9FF" },
  { name: "Node.js", src: "/assets/node.png", bgColor: "#D4E6D7" },
  { name: "Firebase", src: "/assets/firebase.png", bgColor: "#FFF5E1" },
  { name: "MongoDB", src: "/assets/mongodb.png", bgColor: "#B9E2D4" },
  { name: "TypeScript", src: "/assets/typescript.png", bgColor: "#98bbe2" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="pb-10 px-[5%] bg-gray-900 text-white max-w-5xl w-full mx-auto"
    >
      <div className="flex items-center justify-center flex-wrap gap-6">
        {skills.map((skill, index) => (
          <Fade key={index} delay={index * 15}>
            <div className="flex flex-col items-center">
              <div
                className="flex items-center justify-center w-20 h-20 rounded-full p-4 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-sm font-semibold mt-4">{skill.name}</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Skills;