import iconPerson from "./assets/images/icon-person.svg";
import iconDollar from "./assets/images/icon-dollar.svg";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("Custom");
  const [selectedTip, setSelectedTip] = useState("");

  const handleTip = (percent) => {
    switch (percent) {
      case 5:
        setTip(5);
        setSelectedTip(5);
        break;
      case 10:
        setTip(10);
        setSelectedTip(10);
        break;
      case 15:
        setTip(15);
        setSelectedTip(15);
        break;
      case 25:
        setTip(25);
        setSelectedTip(25);
        break;
      case 50:
        setTip(50);
        setSelectedTip(50);
        break;
      case "custom":
        setTip(customTip);
        setSelectedTip("custom");
        break;
      default:
        setTip("");
        break;
    }
  };

  return (
    <div className="bg-lightgrayishcyan flex flex-col h-full justify-center items-center font-monospace font-bold">
      <div className="py-8">
        <h1 className="uppercase tracking-widest text-2xl">
          spli
          <br />
          tter
        </h1>
      </div>
      <div className="bg-white w-full h-full px-7 py-6 rounded-t-3xl grid grid-cols-1 xl:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-1">
            <h3>Bill</h3>
            <div className="flex-row flex w-full justify-between bg-verylightgrayishcyan rounded-md p-3">
              <img src={iconDollar} alt="person" className="object-contain" />
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="bg-verylightgrayishcyan text-xl text-darkcyan font-bold text-right"
                onFocus={(e) => e.target.value == 0 && setBill("")}
                defaultValue="142.55"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h3>Select Tip %</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                className={
                  "bg-darkcyan text-white text-2xl rounded-md py-3 hover:bg-strongcyan" +
                    selectedTip ===
                    5 && +"bg-strongcyan"
                }
                onClick={(e) => handleTip(5)}
              >
                5%
              </button>
              <button
                onClick={(e) => handleTip(10)}
                className={
                  "bg-darkcyan text-white text-2xl rounded-md py-3 hover:bg-strongcyan" +
                    selectedTip ===
                    10 && +"bg-strongcyan"
                }
              >
                10%
              </button>
              <button
                onClick={(e) => handleTip(15)}
                className="bg-darkcyan text-white text-2xl rounded-md py-3 hover:bg-strongcyan"
              >
                15%
              </button>
              <button
                onClick={(e) => handleTip(25)}
                className="bg-darkcyan text-white text-2xl rounded-md py-3 hover:bg-strongcyan"
              >
                25%
              </button>
              <button
                onClick={(e) => handleTip(50)}
                className="bg-darkcyan text-white text-2xl rounded-md py-3 hover:bg-strongcyan"
              >
                50%
              </button>
              <div className="bg-darkcyan text-white text-2xl rounded-md py-3 text-center">
                <input
                  type="text"
                  defaultValue={"Custom %"}
                  className={
                    "w-5/6 bg-darkcyan text-center focus:bg-darkgrayishcyan outline-none rounded-md"
                  }
                  onFocus={(e) => setCustomTip("")}
                  onChange={(e) => setCustomTip(e.target.value)}
                  value={customTip}
                />
              </div>

              <p>{selectedTip}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <h3>Number of People</h3>
              <h3 className={people < 1 ? "text-red-600" : "hidden"}>
                Can't be zero
              </h3>
            </div>
            <div
              className={
                "flex-row flex w-full justify-between bg-verylightgrayishcyan rounded-md p-3"
              }
            >
              <img src={iconPerson} alt="person" className="object-contain" />
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                onFocus={(e) => e.target.value == 0 && setPeople("")}
                min={1}
                className="bg-verylightgrayishcyan text-xl text-darkcyan font-bold text-right"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-darkcyan p-5 rounded-xl space-y-4">
            <div className="flex justify-between items-center text-darkgrayishcyan">
              <div>
                <h3 className="text-white font-bold">Tip Amount</h3>
                <p>/ person</p>
              </div>
              <p className="text-strongcyan text-3xl">
                ${people > 0 ? (((bill / 100) * tip) / people).toFixed(2) : 0}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold">Tip Total</h3>
              </div>
              <p className="text-strongcyan text-3xl">
                ${((bill / 100) * tip).toFixed(2)}
              </p>
            </div>
            <div className="w-full bg-strongcyan text-darkcyan font-bold rounded-md text-center py-2">
              <button>RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
