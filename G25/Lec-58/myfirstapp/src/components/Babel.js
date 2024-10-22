import React from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const Babel = () => {
  // 2.
  return _jsxs("div", {
    children: [
      _jsx("h1", {
        children: "hey there",
      }),
      _jsx("p", {
        children: "This is a paragraph",
      }),
      _jsx("h3", {
        children: "Super Hero's",
      }),
      _jsxs("ul", {
        children: [
          _jsx("li", {
            children: "Batman",
          }),
          _jsx("li", {
            children: "Superman",
          }),
          _jsx("li", {
            children: "Ironman",
          }),
        ],
      }),
    ],
  });

  // // 1. This html code get converted into jsx using the compiler name babel.
  // <div>
  //   <h1>hey there</h1>
  //   <p>This is a paragraph</p>
  //   <h3>Super Hero's</h3>
  //   <ul>
  //     <li>Batman</li>
  //     <li>Superman</li>
  //     <li>Ironman</li>
  //   </ul>
  // </div>
};

export default Babel;
