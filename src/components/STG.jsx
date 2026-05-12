import akamePfp from "/sssss.jpg";

const LeftPanel = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-5 md:w-1/3">
      <img
        src={akamePfp}
        className="rounded-full w-52 h-52 border-4 border-sky-400 shadow-[0_0_20px_#38bdf8]"
      />

      <h1 className="glitch text-5xl font-bold text-sky-400">
        $opoTechieG1rl.exe
      </h1>

<div className="flex flex-col space-y-3 whitespace-nowrap">
        <p className="font-mono text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
          → Networking Systems Initialized
        </p>

        <p className="font-mono text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
          → Programming Modules Active
        </p>

        <p className="font-mono text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
          → Secure Channel Established
        </p>
      </div>
    </div>
  );
};

export default LeftPanel;