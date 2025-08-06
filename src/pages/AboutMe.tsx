export default function AboutMe() {
    const techStack = [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "React", icon: "/icons/react.svg" },
    //   { name: "TypeScript", icon: "/icons/typescript.svg" },
    //   { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    //   { name: "Java", icon: "/icons/java.svg" },
    //   { name: "Node.js", icon: "/icons/node.svg" },
    //   { name: "Git", icon: "/icons/git.svg" },
    ];

    return (
      <div className="grid grid-cols-2 bg-zinc-800 min-h-screen pt-30 text-white text-lg">
        <div className="flex flex-col bg-amber-800 justify-start gap-10 ">
          <h1 className="text-7xl">
            <span className="font-extrabold">Hello</span>, I'm Antony!
          </h1>
          <p className="text-3xl">
            I'm a software engineer from Kerala, India. I enjoy learning new
            things in the world of computer science. I've got my first computer
            when I was 18, since then, there is nothing in the world that
            interests me more. This world of internet and technology has been
            what I am most grateful for. Swipe up for knowing more about me,
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5 p-4">
          {techStack.map((each) => (
            <div
              key={each.name}
              className="bg-blue-700 p-5 rounded-lg flex flex-col items-center justify-center w-24 h-24 text-sm group"
            >
              <img src={each.icon} className="w-11 grayscale group-hover:grayscale-0 group-hover:-translate-y-2" />
              <span className="opacity-0 group-hover:opacity-100">
                {each.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
}