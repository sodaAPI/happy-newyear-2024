import { useState } from "react";
import Countdown from "react-countdown";
import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { loadConfettiPreset } from "tsparticles-preset-confetti";

function App() {
  const [message, setMessage] = useState(["Waiting for New Year ..."]);
  const [background, setBackground] = useState("stars");

  const particleStarsInitial = async (engine) => {
    await loadStarsPreset(engine);
  };

  const particleConfettiInitial = async (engine) => {
    await loadConfettiPreset(engine);
  };

  function newYearTime() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = newYearDate - dateNow;
    return timeRemaining;
  }

  function toggleNewYear() {
    setMessage["Happy New Year! 🎉"];
  }

  return (
    <>
      {toggleNewYear ? (
        <Particles
          init={particleStarsInitial}
          options={{ preset: background }}
        />
      ) : (
        <Particles
          init={particleConfettiInitial}
          options={{ preset: background }}
        />
      )}

      <div className="flex flex-col justify-center items-center gap-5 ">
        <h1 className="text-white z-10 font-bold text-4xl p-5  my-20 animate-floating">
          New Year Countdown ✨
        </h1>
        <h2 className="text-3xl text-white font-semibold z-10">
          <Typewriter words={message} loop={false} cursorStyle={"_"} cursor />
        </h2>
        <div className="flex flex-row z-10 my-10">
          <Countdown
            date={Date.now() + newYearTime()}
            onComplete={toggleNewYear}
            className="z-10 text-white text-xl p-5 bg-[#ff050577] rounded-3xl"
          />
          <div className="text-white z-10 animate-bounce">🔴</div>
        </div>
        <span className="flex flex-row gap-2 z-10 pt-[400px] text-white w-min-screen items-center justify-center">
          <p>Created by </p>
          <a
            className="z-20 transition hover:font-semibold transform duration-500 animate ease-in-out hover:scale-110"
            target={"_blank"}
            href="https://github.com/sodaAPI">
            SodaAPI ❤️
          </a>
        </span>
      </div>
    </>
  );
}

export default App;
