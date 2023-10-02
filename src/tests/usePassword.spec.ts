import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import { usePassword } from "../components/password/usePassword";

describe("usePassword", () => {
  const requirements = {
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

  it("should throw error when the requirements object has no keys", () => {
    renderHook(() =>
      usePassword({
        requirements: {},
      })
    );

    expect(usePassword).to.throw();
  });

  it("should set the corresponding errors when the password is invalid", () => {
    const errorsArray = Object.values(requirements).map((i) => i.message);

    const { result } = renderHook(() =>
      usePassword({
        requirements,
      })
    );

    result.current.validatePassword("deaa");

    expect(result.current.errors).toEqual(errorsArray);
  });

  it("should set some errors when the password is invalid", () => {
    const modifiedRequirements = {
      hasUppercaseLetter: requirements.hasUppercaseLetter,
      hasNoConsecutiveLetters: requirements.hasNoConsecutiveLetters,
    };

    const errorsArray = Object.values(modifiedRequirements).map(
      ({ message }) => message
    );

    const { result } = renderHook(() =>
      usePassword({
        requirements: modifiedRequirements,
      })
    );

    result.current.validatePassword("aa");

    expect(result.current.errors).toEqual(errorsArray);
  });

  it("should not set any errors when the password valid", () => {
    const { result } = renderHook(() =>
      usePassword({
        requirements,
      })
    );

    result.current.validatePassword("abc1A@");

    expect(result.current.errors).toEqual([]);
  });
});
