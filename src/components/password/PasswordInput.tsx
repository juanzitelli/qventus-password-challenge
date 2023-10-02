import { clsx } from "clsx";
import { ChangeEvent, FocusEvent } from "react";
import {
  FaRegEyeSlash as HideIcon,
  FaRegEye as ShowIcon,
} from "react-icons/fa";
import { usePasswordContext } from "./usePasswordContext";

export const PasswordInput = ({
  validateOnBlur = false,
  className = "",
  label = "Password",
}: {
  validateOnBlur?: boolean;
  className?: string;
  label?: string;
}) => {
  const { setPassword, password, validatePassword, isHidden, setIsHidden } =
    usePasswordContext();

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
    <div className="flex flex-row justify-start items-end md:justify-end gap-2">
      <label className="flex flex-col gap-1" htmlFor="label">
        {label}
        <input
          className={clsx(
            "border-2 border-black rounded-md bg-inherit px-2 py-1",
            className
          )}
          required={true}
          type={isHidden ? "password" : "text"}
          value={password}
          onChange={handleChange}
          {...(validateOnBlur
            ? {
                onBlur: handleBlur,
              }
            : {})}
        />
      </label>
      <button
        className="border-2 border-black rounded-md px-2 py-1"
        type="button"
        onClick={() => {
          if (password.length > 0) setIsHidden((ps) => !ps);
        }}
      >
        {isHidden ? <ShowIcon /> : <HideIcon />}
      </button>
    </div>
  );
};
