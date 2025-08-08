import { Fragment } from "react/jsx-runtime";

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
          <span className="font-extrabold text-indigo-100 heading-connect">
            Hello,
          </span>{" "}
          I'm Antony!
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

      <div className="grid grid-cols-3 md:grid-cols-4 p-4 mx-auto gap-7.5 md:gap-7">
        {techStack.map((each) => (
          <div
            key={each.name}
            className="bg-zinc-700 p-5 rounded-lg flex flex-col items-center justify-center md:w-24 md:h-24 w-20 h-20 lg:w-24 lg:h-24 text-sm group"
          >
            <img
              src={each.icon}
              className="w-11 grayscale group-hover:grayscale-0 group-hover:-translate-y-2 duration-850 img-intial-move-2"
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

  const content = roadmapData.map((each, index) => {

    console.log("HI");
    return (
      <Fragment key={index}>
        <div
          className={index % 2 == 0 ? "bg-white p-4 rounded-3xl shadow" : ""}
        >
          {index % 2 == 0 && (
            <>
              <h1>{each.title}</h1>
              <p>{each.date}</p>
              <p>{each.description}</p>
            </>
          )}
        </div>
        <div className="w-15">
          <img src={each.icon} className="w-10" />
        </div>
        <div
          className={
            index % 2 !== 0 ? "bg-amber-200 p-4 rounded-3xl shadow" : ""
          }
        >
          {index % 2 !== 0 && (
            <>
              <h1>{each.title}</h1>
              <p>{each.date}</p>
              <p>{each.description}</p>
            </>
          )}
        </div>
      </Fragment>
    );
  })

  return (
    <div className="min-h-screen bg-zinc-800">
            <div className="bg-green-200 grid grid-cols-[1fr_auto_1fr] gap-6">

      {content}
      </div>
    </div>
  );
}
export default function AboutMe() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
    </>
  );
}
