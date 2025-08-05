import Typewriter from "typewriter-effect";

export default function HeadingTypewriter() {
    return (
      <h1>
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
      </h1>
    );
}