export default function Contact() {
    const contacts = [
      {
        platform: "antonysun13@gmail.com",
        icon: "icons/gmail.svg",
        link: "mailto:antonysun13@gmail.com",
      },
      {
        platform: "linkedin",
        icon: "icons/linkedin.svg",
        link: "https://www.linkedin.com/in/antony-sun-sun/",
      },
      {
        platform: "github",
        icon: "icons/github.svg",
        link: "https://github.com/antonypauson/",
      },
      {
        platform: "discord",
        icon: "icons/discord.svg",
        link: "https://discord.com/channels/@me/heliostone/",
      },
    ];
    return (
      <>
        <div className="bg-zinc-600 min-h-screen flex flex-col justify-center items-center gap-10 font-medium">
          <h4 className="text-7xl">
            <span className="text-stone-50 font-extrabold text-8xl">
              Connect
            </span>{" "}
            with me
          </h4>
          <div className="grid grid-cols-4 max-w-[80%] mx-auto gap-5">
            {contacts.map((each) => (
              <a
                href={each.link}
                target="_blank"
                rel="noopener noreferrer"
                key={each.platform}
              >
                <div className="bg-zinc-700 p-6 rounded-3xl flex flex-col justify-center items-center group cursor-pointer">
                  <img
                    src={each.icon}
                    className="w-46 object-contain mb-4 grayscale-100 transform group-hover:grayscale-0 group-hover:-translate-y-5 duration-500"
                  />
                  <p className="opacity-0 group-hover:opacity-100 duration-600 text-nowrap text-white">
                    {each.platform}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <a href="/resume/RESUME-1.pdf" download>
            <button className="p-5 bg-white rounded-2xl hover:bg-zinc-400 transform hover:scale-110 hover:text-white duration-300 cursor-pointer">
              Download my resume
            </button>
          </a>
        </div>
      </>
    );
}