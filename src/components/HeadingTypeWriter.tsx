import Typewriter from "typewriter-effect";

export default function HeadingTypewriter() {
    return (
      <h1 className="text-5xl text-center md:text-left md:text-9xl font-semibold max-w-full mb-6 md:ml-10">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("एंटोनी")
              .pauseFor(1500)
              .deleteAll()
              .typeString("ആൻ്റണി")
              .pauseFor(1500)
              .deleteAll()
              .typeString("Antony")
              .pauseFor(6000)
              .deleteAll()
              .start(); 
          }}
          options={{
            loop: true, 
            delay: 75, 
            deleteSpeed: 50,
            autoStart: true,
          }}
        />
        <span className="font-extrabold tracking-wider">SUN</span>
      </h1>
    );
}