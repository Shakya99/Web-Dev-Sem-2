import React from "react";

function TemperatureStatus({ temp }) {
  // Convert to number
  const numTemp = Number(temp);

  // Handle invalid input
  if (temp === "" || isNaN(numTemp)) {
    return <p>Please enter a valid temperature</p>;
  }

  return (
    <div>
      {numTemp > 35 ? (
        <h2>Status: Hot </h2>
      ) : (
        <h2>Status: Normal </h2>
      )}
    </div>
  );
}

export default TemperatureStatus;