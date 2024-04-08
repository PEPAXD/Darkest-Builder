import React from 'react';

const dataTable = ({ dataStats, damage, crit, targetDebuff, selfBuff }) => {
  return (
    <div className="dataTable">
      {Object.entries(dataStats).map(([key, value]) => {
        let displayValue = null;
        if (key === "damage" && damage !== null) {
          displayValue = `${damage[0]}-${damage[1]}`;
        } else if (key === "crit" && crit !== null) {
          displayValue = `${crit}%`;
        } else if (key === "target" && targetDebuff !== null) {
          displayValue = targetDebuff;
        } else if (key === "self" && selfBuff !== null) {
          displayValue = selfBuff;
        }

        return displayValue !== null ? (
          <div className="tableNumber" key={key}>
            <br />
            <i>{key.toUpperCase()}</i>
            <p>{displayValue}</p>
            <br />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default dataTable;