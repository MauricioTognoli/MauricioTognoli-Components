
"use client";

import React from "react";
import { ThemeLangProvider } from "./ThemeLangContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeLangProvider>{children}</ThemeLangProvider>;
};
