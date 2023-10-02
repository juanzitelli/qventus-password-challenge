import { FormEvent } from "react";
import { Password } from "./components/password";

export const App = () => {
  return (
    <main className="flex flex-col p-3 gap-10 h-screen w-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Password Component</h1>
      <form
        className="flex flex-col w-full gap-5 sm:flex-row sm:max-w-xl items-start"
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          const password = formData.get("password");

          console.log({ password }, "🫢");
        }}
      >
        <Password
          requirements={{
            hasOneOrMoreSpecialCharacters: {
              message: "Has at least one special character like $ or @.",
            },
            hasADigit: {
              message: "Has at least a digit like 1, 2 or 3.",
            },
            hasUppercaseLetter: {
              message: "Has at least one uppercase letter like A, B or C.",
            },
            hasNoConsecutiveLetters: {
              message: "Doesn't have two consecutive letters like aa or BB.",
            },
          }}
          id="password"
          name="password"
          validateOnBlur={true}
        />
      </form>
    </main>
  );
};
