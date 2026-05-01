import React, { useState } from "react";

const solution = [
  [1, 2, 3, 4],
  [3, 4, 1, 2],
  [2, 1, 4, 3],
  [4, 3, 2, 1],
];

const lockedMap = [
  [true, false, true, false],
  [false, true, false, true],
  [true, false, false, true],
  [false, true, true, false],
];

const PASSWORD = "python80";

const Puzzle = ({ onSolved, onNext }) => {
  const [grid, setGrid] = useState([
    [1, "", 3, ""],
    ["", 4, "", 2],
    [2, "", "", 3],
    ["", 3, 2, ""],
  ]);

  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const updateCell = (r, c, value) => {
    if (lockedMap[r][c]) return;

    const newGrid = grid.map((row) => [...row]);
    newGrid[r][c] = value === "" ? "" : value;
    setGrid(newGrid);
  };

  const checkSolution = () => {
    let ok = true;

    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const val = grid[r][c] === "" ? null : Number(grid[r][c]);
        if (val !== solution[r][c]) ok = false;
      }
    }

    if (ok) {
      setStatus("ACCESS GRANTED");
      setSuccess(true);
      onSolved?.(PASSWORD);
    } else {
      setStatus("MATRIX DESYNC DETECTED");
      setSuccess(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center font-mono text-purple-300 z-[9999]">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-[1px] h-full left-1/2 bg-purple-500 animate-pulse" />
        <div className="absolute w-full h-[1px] top-1/2 bg-purple-500 animate-pulse" />
      </div>

      <div className="relative border border-purple-700 p-6 w-[380px] bg-black/90 shadow-[0_0_60px_rgba(168,85,247,0.35)]">

        {/* HELP BUTTON */}
        <div className="absolute top-2 right-2">
          <button
            onClick={() => setShowHelp((v) => !v)}
            className="text-purple-300 text-sm hover:text-purple-200 font-bold"
          >
            ?
          </button>
        </div>

        {/* HELP OVERLAY */}
        {showHelp && (
          <div className="absolute inset-0 z-50 backdrop-blur-md bg-black/90 border border-purple-700 p-4 text-xs text-purple-300 shadow-[0_0_60px_rgba(168,85,247,0.3)]">

            <div className="mb-3 text-purple-200 tracking-widest">
              // QUANTUM ASSIST MODULE
            </div>

            <div className="mb-3 leading-relaxed">
              Fill grid so every row & column contains:
              <br />
              <span className="text-purple-200">1 2 3 4 (no repeats)</span>
            </div>

            <div className="mb-3 text-[11px] opacity-80">
              👉 Use locked nodes as anchors  
              👉 Solve by elimination logic
            </div>

            <button
              onClick={() => setShowAnswer((v) => !v)}
              className="border border-purple-600 px-2 py-1 text-[10px] hover:bg-purple-700 transition"
            >
              {showAnswer ? "HIDE MATRIX" : "FORCE DECRYPT"}
            </button>

            {showAnswer && (
              <div className="mt-3 text-[11px] text-purple-200">
                {solution.map((row, i) => (
                  <div key={i}>{row.join(" ")}</div>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowHelp(false)}
              className="absolute bottom-3 right-3 border border-purple-500 px-3 py-1 hover:bg-purple-500 hover:text-black transition text-[10px]"
            >
              CLOSE
            </button>
          </div>
        )}

        {/* HEADER */}
        <div className="text-xs opacity-60 mb-3 tracking-widest text-purple-300">
          // QUANTUM GRID NODE
        </div>

        <div className="mb-4 text-sm tracking-widest text-purple-200">
          DECRYPT SECTORS
        </div>

        {/* GRID */}
        <div className="grid grid-cols-4 gap-1 mb-4">
          {grid.map((row, r) =>
            row.map((cell, c) => {
              const locked = lockedMap[r][c];

              return (
                <input
                  key={`${r}-${c}`}
                  value={cell}
                  onChange={(e) =>
                    updateCell(r, c, e.target.value.replace(/[^\d]/g, ""))
                  }
                  readOnly={locked}
                  maxLength={1}
                  className={`
                    w-12 h-12 text-center border outline-none transition
                    ${
                      locked
                        ? "bg-purple-950 text-purple-300 border-purple-800 cursor-not-allowed"
                        : "bg-black text-purple-300 border-purple-600 focus:border-purple-300 focus:shadow-[0_0_10px_rgba(168,85,247,0.7)]"
                    }
                  `}
                />
              );
            })
          )}
        </div>

        {/* EXECUTE */}
        <button
          onClick={checkSolution}
          className="w-full border border-purple-500 py-2 hover:bg-purple-700 transition"
        >
          EXECUTE
        </button>

        {/* STATUS */}
        {status && (
          <div className="text-center text-xs mt-3 animate-pulse text-purple-300">
            {status}
          </div>
        )}

        {/* SUCCESS */}
        {success && (
          <div className="mt-4 space-y-3">

            <div className="text-center text-white text-sm tracking-widest animate-pulse">
              ✔ MATRIX RESOLVED
            </div>

            <button
              onClick={onNext}
              className="w-full border border-white py-2 text-white hover:bg-white hover:text-black transition"
            >
              MQTT:1883 ▶
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Puzzle;