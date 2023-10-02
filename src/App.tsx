import { PasswordInput } from "./PasswordInput";

export const App = () => {
  return (
    <>
      <h1>Password component</h1>
      <PasswordInput
        requirements={{
          hasOneOrMoreSpecialCharacters: {
            message:
              "Password should include at least one special character like $ or @",
          },
          hasADigit: {
            message: "Password should include at least a digit like 1, 2 or 3",
          },
          hasUppercaseLetter: {
            message:
              "Password should include at least one uppercase letter like A, B or C",
          },
          hasNoConsecutiveLetters: {
            message:
              "Password shouldn't include two consecutive letters like aa or BB",
          },
        }}
      />
    </>
  );
};
