const colors = [
  "text-red-400",
  "text-orange-400",
  "text-amber-400",
  "text-yellow-400",
  "text-lime-400",
  "text-green-400",
  "text-emerald-400",
  "text-teal-400",
  "text-cyan-400",
  "text-sky-400",
  "text-blue-400",
  "text-violet-400",
  "text-purple-400",
  "text-fuchsia-400",
  "text-pink-400",
  "text-rose-400",
  "text-slate-400",
];



export default function Projects() {
  const projectDetails = [
    {
      title: "My project",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus amet autem iure provident sequi magnam dicta, veniam rem ut vel illum, magni ea dolor alias suscipit sit sed perspiciatis obcaecati.",
      projectLink: "https://github.com/antonypauson/",
      githubLink: "https://github.com/antonypauson/",
      icon: "icons/linkedin.svg",
      tech: [
        "javascript",
        "typescript",
        "react",
        "tailwind",
        "jquery",
        "mwoone",
      ],
    },
    {
      title: "My project",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus amet autem iure provident sequi magnam dicta, veniam rem ut vel illum, magni ea dolor alias suscipit sit sed perspiciatis obcaecati.",
      projectLink: "https://github.com/antonypauson/",
      githubLink: "https://github.com/antonypauson/",
      icon: "icons/linkedin.svg",
      tech: [
        "javascript",
        "typescript",
        "react",
        "tailwind",
        "jquery",
        "mwoone",
      ],
    },
    {
      title: "My project",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus amet autem iure provident sequi magnam dicta, veniam rem ut vel illum, magni ea dolor alias suscipit sit sed perspiciatis obcaecati.",
      projectLink: "https://github.com/antonypauson/",
      githubLink: "https://github.com/antonypauson/",
      icon: "icons/linkedin.svg",
      tech: [
        "javascript",
        "typescript",
        "react",
        "tailwind",
        "jquery",
        "mwoone",
      ],
    },
    {
      title: "My project",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus amet autem iure provident sequi magnam dicta, veniam rem ut vel illum, magni ea dolor alias suscipit sit sed perspiciatis obcaecati.",
      projectLink: "https://github.com/antonypauson/",
      githubLink: "https://github.com/antonypauson/",
      icon: "icons/linkedin.svg",
      tech: [
        "javascript",
        "typescript",
        "react",
        "tailwind",
        "jquery",
        "mwoone",
      ],
    },
  ];
  return (
    <div className="bg-zinc-600 min-h-screen py-20">
      <h4 className="md:text-7xl text-4xl text-center md:ml-5">
        Some{" "}
        <span className="text-stone-50 font-extrabold md:text-8xl text-6xl heading-connect">
          projects
        </span>{" "}
        I've done
      </h4>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80%] mx-auto gap-x-5.5 gap-y-10 py-10">
        {projectDetails.map((each) => (
          <div
            key={each.title}
            className="bg-zinc-400 rounded-4xl relative group md:grayscale-100 hover:grayscale-0 hover:bg-white img-intial-move duration-500 hover:-translate-2"
          >
            <img
              src={each.icon}
              className="w-50 md:w-100 group-hover:blur-md group-hover:bg-gray-700 justify-self-center"
            />
            <div className="p-5 group-hover:opacity-100 md:grid flex flex-col">
              <h4 className="text-2xl font-bold">{each.title}</h4>
              <p>{each.description}</p>
              <div className="tags space-x-2 opacity group-hover:opacity-100 flex justify-center flex-wrap gap-2 md:gap-4 mt-2">
                {each.tech.map((tech) => {
                  const randomColor =
                    colors[Math.floor(Math.random() * colors.length)];
                  return (
                    <span
                      key={tech}
                      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${randomColor} inset-ring bg-zinc-800 opacity-trans hover:scale-105 cursor-pointer`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="buttons space-x-3 md:opacity- group-hover:opacity-100 flex justify-between mt-3.5">
                <a
                  href={each.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={each.title}
                >
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:text-gray-800 hover:bg-gray-300 cursor-pointer">
                    View Project
                  </button>
                </a>
                <a
                  href={each.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={each.title}
                >
                  <img
                    src="icons/github.svg"
                    className="grayscale-100 w-10 hover:grayscale-50 cursor-pointer hover:scale-105"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
