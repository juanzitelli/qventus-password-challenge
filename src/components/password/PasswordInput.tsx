import { clsx } from "clsx";
import { ChangeEvent, FocusEvent } from "react";
import { ShowPasswordToggle } from "./ShowPasswordToggle";
import { usePasswordContext } from "./usePasswordContext";

export const PasswordInput = ({
  validateOnBlur = false,
  inputClassName = "",
  containerClassName = "",
  labelClassName = "",
  toggleShowClassName = "",
  label = "Password",
  ...props
}: {
  validateOnBlur?: boolean;
  inputClassName?: string;
  containerClassName?: string;
  labelClassName?: string;
  toggleShowClassName?: string;
  label?: string;
} & Pick<HTMLInputElement, "id" | "name" | "required">) => {
  const {
    setPassword,
    password,
    validatePassword,
    isHidden,
    setIsHidden,
    errors,
  } = usePasswordContext();

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
    <div
      className={clsx(
        "flex flex-row justify-start items-end md:justify-end gap-2",
        {
          "border-red-600 text-red-700": errors.length > 0,
        },
        containerClassName
      )}
    >
      <label
        className={clsx("flex flex-col gap-1", labelClassName)}
        htmlFor="label"
      >
        {label}
        <input
          className={clsx(
            "border-2 border-black rounded-md bg-inherit px-2 py-1",
            inputClassName
          )}
          type={isHidden ? "password" : "text"}
          value={password}
          onChange={handleChange}
          {...(validateOnBlur
            ? {
                onBlur: handleBlur,
              }
            : {})}
          {...props}
        />
      </label>
      <ShowPasswordToggle
        className={clsx("", toggleShowClassName)}
        password={password}
        setIsHidden={setIsHidden}
        isHidden={isHidden}
      />
    </div>
  );
};
