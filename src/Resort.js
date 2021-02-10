import React, { useState, useEffect } from "react";

function Resort() {
  const [resort, setResort] = useState({});

  function getResort() {
    fetch("https://api.fnugg.no/get/resort/17")
      .then((response) => response.json())
      .then((json) => setResort(json));
  }

  useEffect(() => {
    getResort();
  }, []);

  return resort.found ? (
    <div className="resort">åpne heiser: {resort._source.lifts.open}</div>
  ) : (
    <div> ok </div>
  );
}

export default Resort;
