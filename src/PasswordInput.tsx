import { ChangeEvent, FocusEvent } from "react";
import { usePassword, type Requirements } from "./usePassword";

export const PasswordInput = ({
  requirements,
  validateOnBlur = false,
}: {
  requirements: Requirements;
  validateOnBlur?: boolean;
}) => {
  const { errors, validatePassword, setPassword, password } = usePassword({
    requirements,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (validateOnBlur) {
      validatePassword(e.target.value);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    validatePassword(e.target.value);
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        {...(validateOnBlur
          ? {
              onBlur: handleBlur,
            }
          : {})}
      />
      {errors.length > 0 ? (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
