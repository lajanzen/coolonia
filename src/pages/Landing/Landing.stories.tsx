import React from "react";
import Landing from "./Landing";

export default {
  title: "Page/LandingPage",
  component: Landing,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <Landing />;
