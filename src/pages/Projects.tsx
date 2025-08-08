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
        <h4 className="md:text-7xl text-4xl text-center md:text-left ml-5">
          Some{" "}
          <span className="text-stone-50 font-extrabold md:text-8xl text-6xl heading-connect">
            projects
          </span>{" "}
          I've done
        </h4>
        <div className="relative grid grid-cols-3 max-w-[80%] mx-auto gap-x-5.5 gap-y-10 py-10">
          {projectDetails.map((each) => (
            <div
              key={each.title}
              className="bg-zinc-300 rounded-4xl relative group grayscale-100 hover:grayscale-0"
            >
              <img
                src={each.icon}
                className="w-100 group-hover:blur-md group-hover:bg-gray-700"
              />
              <div className="p-5 group-hover:opacity-100">
                <h4 className="text-2xl font-bold">{each.title}</h4>
                <p>{each.description}</p>
                <div className="tags space-x-2 opacity-0 group-hover:opacity-100">
                  <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring">
                    Badge
                  </span>
                  <span className="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 text-xs font-medium text-pink-400 inset-ring ">
                    Badge
                  </span>
                </div>
                <div className="buttons flex space-x-3 opacity-0 group-hover:opacity-100">
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:text-gray-800 hover:bg-white mt-3">
                    View Project
                  </button>
                  <img
                    src="icons/github.svg"
                    className="grayscale-100 w-10 hover:grayscale-50"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ); 
}