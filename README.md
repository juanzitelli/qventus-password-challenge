# Qventus Take Home Assessment

> by [@juanzitelli](https://github.com/juanzitelli)

## Description

This repository contains a reusable React component designed to handle password requirements for various applications. The component allows developers to easily implement consistent password validation across multiple React frontend applications.

## Getting Started

1.  Clone this repository.
2.  Install dependencies using `pnpm install`
3.  Run `pnpm test` to verify everything's working as expected by expecting all the tests to pass.
4.  Run `pnpm dev` to run the test app in development mode. It should be available reachable at [localhost:3000](http://localhost:3000)
5.  Done! You can play around with the app by toggling the different requirements that are listed on the main screen.
6.  Extra: You can decide whether the validation event occurs when the user focuses outside the input or when the input changes
7.  Extra: You can show/hide the contents of the password input by clicking on the "eye" button next to the input. You can't "show" the password if it's length is 0.
    1. `validateOnBlur` set to `true` will validate the password when the user loses focus from the input element.
    2. `validateOnBlur` set to `false` will validate the password when the user changes the contents of the input.

## Assumptions

- Each application may have different password requirements.
- Password requirements are provided as a list and can be customized.
- The component's styling should be consistent with the provided design but allows for customization.

## Possible features

- Integration with popular form management/validation libraries (formik, react-hook-form).
- Improved error messaging and feedback for users.
