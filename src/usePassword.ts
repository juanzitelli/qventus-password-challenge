import { useState } from "react";

export const PASSWORD_RULES = {
  hasOneOrMoreSpecialCharacters: /[\W_]+/,
  hasADigit: /\d+/,
  hasUppercaseLetter: /[A-Z]+/,
  hasNoConsecutiveLetters: /^(?!.*([A-Za-z])\1)/,
};

export type PasswordKeys = keyof typeof PASSWORD_RULES;
export type Requirements = { [K in PasswordKeys]: { message: string } };

export const usePassword = ({
  requirements,
}: {
  requirements: Requirements;
}) => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const validatePassword = (password: string) => {
    const newErrors: string[] = [];

    for (const rule in requirements) {
      if (!PASSWORD_RULES[rule as PasswordKeys].test(password)) {
        newErrors.push(requirements[rule as PasswordKeys].message);
      }
    }

    setErrors(newErrors);
  };

  return {
    password,
    setPassword,
    validatePassword,
    errors,
  };
};
