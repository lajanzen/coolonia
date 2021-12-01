import React from "react";
import Events from "./Events";

export default {
  title: "Page/Events",
  component: Events,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <Events />;
