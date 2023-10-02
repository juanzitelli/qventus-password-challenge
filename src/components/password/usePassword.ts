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
  const [isHidden, setIsHidden] = useState(true);

  const validatePassword = (password: string) => {
    const errorMessages = (Object.keys(requirements) as PasswordKeys[])
      .filter((rule) => !PASSWORD_RULES[rule].test(password))
      .map((failedRule) => requirements[failedRule]?.message)
      .filter(Boolean) as string[];

    setErrors(errorMessages);
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
    setIsHidden,
    isHidden,
  };
};
