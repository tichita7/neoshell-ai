import { useRef, useState } from "react";
import glowline from "./assets/images/glow-line.png";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const outputRef = useRef(null);

  {/* Connection to backend */}

  const handleGenerate = async () => {

  try {

    setOutput("Generating command...");

    const response = await fetch(
      "http://127.0.0.1:8001/generate",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          input: input,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      setOutput(data.data);
    } else {
      setOutput("Error: " + data.data);
    }

  } catch (error) {

    console.log(error);

    setOutput("Backend connection failed.");
  }

  // ALWAYS SCROLL
  setTimeout(() => {
    outputRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};

  {/*  Main frontend UI design */}
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(120,0,255,0.18),transparent_40%)]"></div>

      {/* Hero Section */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center

          pt-18
          sm:pt-20
          md:pt-25
          lg:pt-30

          px-4
          sm:px-6
          md:px-8
        "
      >

        {/* Heading */}
        <h1
          className="
            font-['Orbitron']

            text-4xl
            sm:text-5xl
            md:text-5xl
            lg:text-7xl

            font-black
            uppercase
            tracking-wide
            text-center
            leading-none
          "
        >
          NEOSHELL{" "}
          <span className="text-violet-500">
            AI
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-4

            text-gray-400
            uppercase

            tracking-[0.25em]
            sm:tracking-[0.35em]

            text-[9px]
            sm:text-xs
            md:text-sm

            text-center
          "
        >
          AI Powered Command Generator
        </p>

        {/* Neon Line */}
        <img
          src={glowline}
          alt="glow"
          className="
            w-24
            sm:w-32
            md:w-40

            mx-auto

            mb-1
            sm:mb-2

            opacity-90
            blur-[0.3px]
          "
        />

        {/* Input Section */}
        <div
          className="
            w-full

            max-w-sm
            sm:max-w-2xl
            md:max-w-4xl
            lg:max-w-5xl

            mt-2
            sm:mt-3

          "
        >

          {/* Textarea */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your command request..."
            className="
              w-full

              h-20
              sm:h-25
              md:h-30

              bg-black

              border
              border-gray-300/20

              rounded-2xl

              p-2
              sm:p-6

              text-base
              sm:text-lg
              md:text-xl

              text-white
              placeholder:text-gray-500

              outline-none
              resize-none

              focus:border-violet-500

              transition
            "
          />

          {/* Button */}
          <div className="flex justify-center mt-5">

            <button
              onClick={handleGenerate}
              className="
                px-6
                sm:px-10

                py-3
                sm:py-4

                border
                border-violet-500/50

                rounded-1xl

                uppercase

                tracking-[0.15em]
                sm:tracking-[0.25em]

                hover:bg-violet-500/10

                transition

                flex
                items-center
                gap-2
                sm:gap-3
              "
            >

              <span className="text-violet-500 font-bold">
                {">_"}
              </span>

              <span
                className="
                  text-white
                  text-sm
                  sm:text-base
                  md:text-lg
                "
              >
                Generate Command
              </span>

            </button>

          </div>

        </div>
      </div>

      {/* Output Section */}
      <div
        ref={outputRef}
        className="
          relative
          z-10

          px-4
          sm:px-6

          pb-20
          sm:pb-32

          pt-16

          flex
          flex-col
          items-center
        "
      >

        {/* Output Heading */}
        <p
          className="
            text-violet-400

            uppercase

            tracking-[0.3em]

            text-xs
            sm:text-sm

            mb-6
            sm:mb-8

            text-center
          "
        >
          Generated Command
        </p>

        {/* Output Box */}
        <div
          className="
            w-full

            max-w-sm
            sm:max-w-2xl
            md:max-w-4xl
            lg:max-w-5xl

            bg-black

            border
            border-violet-500/10

            rounded-3xl

            p-5
            sm:p-8

            min-h-[150px]
            sm:min-h-[200px]
          "
        >

          <code
            className="
              text-green-400

              text-lg
              sm:text-xl
              md:text-2xl

              break-all
            "
          >
            {output || "> Output will appear here..."}
          </code>

        </div>
      </div>
    </div>
  );
}

export default App;