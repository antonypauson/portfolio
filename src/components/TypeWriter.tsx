import Typewriter from "typewriter-effect";

export default function HeadingTypewriter() {
    return (
      <h1>
        <Typewriter
          className="text-white"
          onInit={(typewriter) => {
            typewriter
              .typeString("Developer") // English
              .pauseFor(1500)
              .deleteAll()
              .typeString("Writer") // Japanese
              .pauseFor(1500)
              .deleteAll()
              .typeString("") // Arabic
              .pauseFor(1500)
              .deleteAll()
              .start(); // You can remove this `.start()` if you're controlling it differently
          }}
          options={{
            loop: true, // or false for one-time
            delay: 75, // typing speed
            deleteSpeed: 50,
            autoStart: true,
          }}
        />
      </h1>
    );
}