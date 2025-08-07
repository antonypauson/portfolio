function SectionOne() {
  const techStack = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Node.js", icon: "/icons/node.svg" },
    { name: "Git", icon: "/icons/git.svg" },
  ];

  return (
    <div className="grid md:grid-cols-2 bg-zinc-600 min-h-screen pt-30 text-black text-lg gap-3 md:items-start md:px-10">
      <div className="flex flex-col justify-start gap-10 px-4 items-center mb-2">
        <h1 className="text-5xl py- md:py-0 md:text-7xl">
          <span className="font-extrabold text-indigo-100">Hello,</span> I'm
          Antony!
        </h1>
        <p className="lg:text-3xl text-justify">
          I'm a{" "}
          <span className="font-extrabold text-indigo-100">
            software engineer
          </span>{" "}
          from Kerala, India. I enjoy learning new things in the world of
          computer science. I've got my first computer when I was 18, since
          then, there is nothing in the world that interests me more. This world
          of internet and technology has been what I am most grateful for. Swipe
          up for knowing more about me.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 p-4 mx-auto gap-2.5 md:gap-7">
        {techStack.map((each) => (
          <div
            key={each.name}
            className="bg-zinc-700 p-5 rounded-lg flex flex-col items-center justify-center md:w-24 md:h-24 w-20 h-20 lg:w-24 lg:h-24 text-sm group "
          >
            <img
              src={each.icon}
              className="w-11 grayscale group-hover:grayscale-0 group-hover:-translate-y-2 duration-850"
            />
            <span className="md:opacity-0 group-hover:opacity-100 text-white">
              {each.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionTwo() {
  const roadmapData = [
    {
      title: "Graduated from College",
      date: "May 2025",
      icon: "icons/html.svg",
      description:
        "Finished college with a CGPA of 7.86. My major was Computer Science Engineering. ",
    },
    {
      title: "Graduated from College",
      date: "May 2025",
      icon: "icons/html.svg",
      description:
        "Finished college with a CGPA of 7.86. My major was Computer Science Engineering. ",
    },
    {
      title: "Graduated from College",
      date: "May 2025",
      icon: "icons/html.svg",
      description:
        "Finished college with a CGPA of 7.86. My major was Computer Science Engineering. ",
    },
    {
      title: "Graduated from College",
      date: "May 2025",
      icon: "icons/html.svg",
      description:
        "Finished college with a CGPA of 7.86. My major was Computer Science Engineering. ",
    },
    {
      title: "Graduated from College",
      date: "May 2025",
      icon: "icons/html.svg",
      description:
        "Finished college with a CGPA of 7.86. My major was Computer Science Engineering. ",
    },
  ];

  return (
    <div className="bg-gray-400 min-h-screen text-zinc-900 relative">
      {
        roadmapData.slice().reverse().map((each, index) => {
          const opacityClass = index % 2 !== 0 && 'opacity-0'; 
          const opacityClass2 = index % 2 === 0 && 'opacity-0'; 
          return (
            <div className="grid md:grid-cols-2 py-30 ">
              <div
                className={`max-w-[400px] md:w-3/4 bg-gray-200 px-10 py-5 justify-self-center ${opacityClass} relative rounded-xl grid`}
              >
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-20 h-1 bg-white w-20"></div>
                <h1 className="font-extrabold text-xl text-zinc-900">
                  {each.title}
                </h1>
                <p className="italic font-light">{each.date}</p>
                <p className="text-md">{each.description}</p>
                <img src={each.icon} className="w-15 justify-self-center" />
              </div>
              <div
                className={`w-3/4 bg-gray-200 px-10 py-5 justify-self-center ${opacityClass2} relative rounded-xl grid`}
              >
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-20 h-1 bg-white w-20"></div>
                <h1 className="font-extrabold text-xl text-zinc-900">
                  {each.title}
                </h1>
                <p className="italic font-light">{each.date}</p>
                <p className="text-md">{each.description}</p>
                <img src={each.icon} className="w-15 justify-self-center" />
              </div>
            </div>
          );
        })
      }
      <div className="absolute left-1/2 w-[2px] bg-white h-full top-0"></div>
    </div>
  )
}
export default function AboutMe() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
    </>
  );
}
