import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // אם יש לך עיצוב כלשהו
import App from "./App"; // ייבוא הקומפוננטה הראשית

// רינדור האפליקציה לתוך אלמנט HTML עם id="root"
const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
