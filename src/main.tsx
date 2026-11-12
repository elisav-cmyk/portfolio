
  import { createRoot } from "react-dom/client";
  import { MotionGlobalConfig } from "motion/react";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // When someone has turned on "reduce motion" in their device settings,
  // every Motion animation jumps straight to its end state: no fades, no slides.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const applyMotionSetting = () => {
    MotionGlobalConfig.skipAnimations = reduceMotion.matches;
  };
  applyMotionSetting();
  reduceMotion.addEventListener("change", applyMotionSetting);

  createRoot(document.getElementById("root")!).render(<App />);
