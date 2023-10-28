import { lazy } from "react";

const LandingPage = lazy(() => import("./pages/Landing"));
const Test = lazy(() => import("./pages/Test"));

export { LandingPage, Test };
