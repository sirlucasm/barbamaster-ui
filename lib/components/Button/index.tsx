import React from "react";
import { Button as ButtonUI } from "../ui/button";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <ButtonUI className="bg-primary">{children}</ButtonUI>;
};
