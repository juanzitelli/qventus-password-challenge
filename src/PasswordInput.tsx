import { ChangeEvent, FocusEvent } from "react";
import { usePassword, type Requirements } from "./usePassword";

export const PasswordInput = ({
  requirements,
}: {
  requirements: Requirements;
}) => {
  const { errors, validatePassword, setPassword, password } = usePassword({
    requirements,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
        onBlur={handleBlur}
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
