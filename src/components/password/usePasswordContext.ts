import { useContext } from "react";
import { PasswordContext, PasswordContextValue } from "./PasswordContext";

export const usePasswordContext = (): PasswordContextValue => {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error(
      "usePasswordContext must be used within a PasswordProvider"
    );
  }
  return context;
};
