import { ChangeEvent, FocusEvent } from "react";
import { usePasswordContext } from "./usePasswordContext";

export const PasswordInput = ({
  validateOnBlur = false,
}: {
  validateOnBlur?: boolean;
}) => {
  const { setPassword, password, validatePassword } = usePasswordContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!validateOnBlur) {
      validatePassword(e.target.value);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    validatePassword(e.target.value);
  };

  return (
    <input
      style={{}}
      required={true}
      type="password"
      value={password}
      onChange={handleChange}
      {...(validateOnBlur
        ? {
            onBlur: handleBlur,
          }
        : {})}
    />
  );
};
