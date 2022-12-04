import React, { useState, useEffect, Fragment } from "react";


const TabToTop = () => {
  const [BacktoTop, setBacktopTop] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      (window.scrollY > 100) ? setBacktopTop('d-block') : setBacktopTop('');
    });
  }, []);
  const screenup = () => {
    window.scrollTo({ top: 10, behavior: "auto", });
  };
  return (
    <Fragment>
      <button className={`${BacktoTop}`} id="back-to-top" onClick={screenup}>
        <i className="fe fe-arrow-up fs-14 pr-10"></i>
      </button>
    </Fragment>
  )
}

export default TabToTop