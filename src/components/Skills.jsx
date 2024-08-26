const skills = [
    { name: "HTML5", src: "../../public/assets/html.png", bgColor: "#FCE4E4" },
    { name: "CSS3", src: "../../public/assets/css.png", bgColor: "#E0F0FF" },
    {
      name: "JavaScript",
      src: "../../public/assets/javascript.png",
      bgColor: "#F9F9D4",
    },
    { name: "React", src: "../../public/assets/react.png", bgColor: "#D8F4FF" },
    { name: 'Next.js', src: '../../public/assets/next-js.png', bgColor: '#F4F4F4' },
    { name: "Redux", src: "../../public/assets/redux.png", bgColor: "#F3E7FF" },
    {
      name: "Tailwind CSS",
      src: "../../public/assets/tailwind-css.png",
      bgColor: "#D4F8FF",
    },
    {
      name: "Bootstrap",
      src: "../../public/assets/bootstrap.png",
      bgColor: "#E8D6F1",
    },
    { name: "SCSS", src: "../../public/assets/sass.png", bgColor: "#E8D6F1" },
    { name: "MUI", src: "../../public/assets/mu5.png", bgColor: "#B9D9FF" },
    { name: "Node.js", src: "../../public/assets/node.png", bgColor: "#D4E6D7" },
    {
      name: "MongoDB",
      src: "../../public/assets/mongodb.png",
      bgColor: "#B9E2D4",
    },
    {
      name: "TypeScript",
      src: "../../public/assets/typescript.png",
      bgColor: "#98bbe2", 
    },
  ];
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="pb-20 sm:pb-20 px-[5%] bg-gray-900 text-white max-w-4xl w-full mx-auto"
      >
        <div className="flex items-center justify-center flex-wrap gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
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
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;  