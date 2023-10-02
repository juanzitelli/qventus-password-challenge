import { createContext } from "react";
import { Requirements, usePassword } from "./usePassword";

export type PasswordContextValue = ReturnType<typeof usePassword>;

export const PasswordContext = createContext<PasswordContextValue | undefined>(
  undefined
);

type PasswordProviderProps = {
  children: React.ReactNode;
  requirements: Requirements;
};

export const PasswordContextProvider: React.FC<PasswordProviderProps> = ({
  children,
  requirements,
}) => {
  return (
    <PasswordContext.Provider value={usePassword({ requirements })}>
      {children}
    </PasswordContext.Provider>
  );
};
