import { ChangeEvent, FormEvent, useState } from "react";
import { Password } from "./components/password";

const BASE_REQUIREMENTS = {
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
};

export const App = () => {
  const [validateOnBlur, setValidateOnBlur] = useState(false);
  const [selectedRequirements, setSelectedRequirements] = useState<
    Record<keyof typeof BASE_REQUIREMENTS, boolean>
  >(() => ({
    hasOneOrMoreSpecialCharacters: true,
    hasADigit: true,
    hasUppercaseLetter: true,
    hasNoConsecutiveLetters: true,
  }));

  const reqsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRequirements((ps) => ({
      ...ps,
      [e.target.name]: e.target.checked,
    }));
  };

  const filteredRequirements = Object.keys(selectedRequirements)
    .filter(
      (key) => selectedRequirements[key as keyof typeof selectedRequirements]
    )
    .reduce((obj, key) => {
      obj[key as keyof typeof BASE_REQUIREMENTS] =
        BASE_REQUIREMENTS[key as keyof typeof BASE_REQUIREMENTS];
      return obj;
    }, {} as typeof BASE_REQUIREMENTS);

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
          requirements={filteredRequirements}
          id="password"
          name="password"
          validateOnBlur={validateOnBlur}
          customClassNames={{
            errors: {
              listItemClassName: "text-xl",
            },
          }}
        />
      </form>

      <form className="flex flex-col">
        <h2 className="text-2xl">Functionality toggle</h2>
        <hr className="border-2 border-black" />
        <label
          className="flex flex-row gap-3 py-1"
          htmlFor="hasOneOrMoreSpecialCharacters"
        >
          <input
            type="checkbox"
            onChange={reqsChangeHandler}
            name="hasOneOrMoreSpecialCharacters"
            id="hasOneOrMoreSpecialCharacters"
            defaultChecked={
              selectedRequirements["hasOneOrMoreSpecialCharacters"]
            }
          />
          hasOneOrMoreSpecialCharacters
        </label>
        <label className="flex flex-row gap-3 py-1" htmlFor="hasADigit">
          <input
            type="checkbox"
            onChange={reqsChangeHandler}
            name="hasADigit"
            id="hasADigit"
            defaultChecked={selectedRequirements["hasADigit"]}
          />
          hasADigit
        </label>
        <label
          className="flex flex-row gap-3 py-1"
          htmlFor="hasUppercaseLetter"
        >
          <input
            type="checkbox"
            onChange={reqsChangeHandler}
            name="hasUppercaseLetter"
            id="hasUppercaseLetter"
            defaultChecked={selectedRequirements["hasUppercaseLetter"]}
          />
          hasUppercaseLetter
        </label>
        <label
          className="flex flex-row gap-3 py-1"
          htmlFor="hasNoConsecutiveLetters"
        >
          <input
            type="checkbox"
            onChange={reqsChangeHandler}
            name="hasNoConsecutiveLetters"
            id="hasNoConsecutiveLetters"
            defaultChecked={selectedRequirements["hasNoConsecutiveLetters"]}
          />
          hasNoConsecutiveLetters
        </label>
        <label className="flex flex-row gap-3 py-1" htmlFor="validateOnBlur">
          <input
            type="checkbox"
            onChange={() => setValidateOnBlur(!validateOnBlur)}
            name="validateOnBlur"
            id="validateOnBlur"
            defaultChecked={false}
          />
          validateOnBlur
        </label>
      </form>
    </main>
  );
};
