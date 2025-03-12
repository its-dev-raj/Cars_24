import React, { useState } from "react";
const ModelYear = () => {
  const [range, setRange] = useState(2010);
  const [kms, setKms] = useState(1000);
  const [updown, setUpDown] = useState(false);

  return (
    <div>
      <div className="py-6" onClick={() => setUpDown((prev) => !prev)}>
        <h1 className="text-lg  font-semibold">Model Year</h1>
      </div>
      {updown ? (
        <div>
          <div>
            <div className="pl-2 flex gap-2">
              <span>2010</span>

              <input
                type="range"
                className="w-full "
                min={2010}
                max={2025}
                value={range}
                onChange={(e) => {
                  setRange(e.target.value);
                }}
              />
              <span>2025</span>
            </div>
            <h2 className="flex items-center justify-center text-sm font-semibold">
              {range}
            </h2>
          </div>
          <div>
            <h1 className="text-lg py-4 font-semibold">Kms Driven</h1>

            <div className="pl-2 flex gap-2">
              <span>1000</span>

              <input
                type="range"
                className="w-full "
                min={1000}
                max={1250000}
                value={kms}
                onChange={(e) => {
                  setKms(e.target.value);
                }}
              />
              <span>1250000</span>
            </div>
            <h2 className="flex items-center justify-center text-sm font-semibold">
              {kms}
            </h2>
          </div>
        </div>
      ) : (
        <div className="border border-b border-gray-200"></div>
      )}
    </div>
  );
};

export default ModelYear;
