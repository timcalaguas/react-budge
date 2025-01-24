import { createRoot } from "react-dom/client";

// @ts-expect-error
import "@splidejs/react-splide/css";
import "./index.css";
import "./custom.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
