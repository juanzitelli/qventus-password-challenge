import { PasswordContextProvider, PasswordErrors, PasswordInput } from ".";
import { Requirements } from "./usePassword";

export const Password = ({
  requirements,
  validateOnBlur,
  id,
  name,
}: {
  requirements: Requirements;
  validateOnBlur: boolean;
  id: string;
  name: string;
}) => {
  return (
    <>
      <PasswordContextProvider requirements={requirements}>
        <PasswordInput validateOnBlur={validateOnBlur} id={id} name={name} />
        <PasswordErrors />
      </PasswordContextProvider>
    </>
  );
};
