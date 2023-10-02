import { useEffect, useState } from "react";

const PASSWORD_RULES = {
  hasOneOrMoreSpecialCharacters: /[\W_]+/,
  hasADigit: /\d+/,
  hasUppercaseLetter: /[A-Z]+/,
  hasNoConsecutiveLetters: /^(?!.*([A-Za-z])\1)/,
};

type PasswordKeys = keyof typeof PASSWORD_RULES;
export type Requirements = { [K in PasswordKeys]?: { message: string } };

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
        const failedRule = requirements[rule as PasswordKeys];
        if (failedRule) {
          newErrors.push(failedRule.message);
        }
      }
    }

    setErrors(newErrors);
  };

  useEffect(() => {
    if (Object.values(requirements).length === 0) {
      throw new Error(
        `The requirements config object should contain at least one (1) element of the following rules: ${Object.keys(
          PASSWORD_RULES
        ).join(", ")}`
      );
    }
  }, [requirements]);

  return {
    password,
    setPassword,
    validatePassword,
    errors,
  };
};
