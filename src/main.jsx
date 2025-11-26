import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import StoryPage from "./pages/storyPage.jsx"; // <-- NEW PAGE

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
