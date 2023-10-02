import { PasswordContextProvider, PasswordErrors, PasswordInput } from ".";
import { Requirements } from "./usePassword";

export const Password = ({
  required = false,
  requirements,
  validateOnBlur,
  id,
  name,
  customClassNames: { input, errors } = {
    input: {},
    errors: {},
  },
}: {
  required: boolean;
  requirements: Requirements;
  validateOnBlur: boolean;
  id: string;
  name: string;
  customClassNames?: {
    input?: {
      inputClassName?: string;
      containerClassName?: string;
      labelClassName?: string;
      toggleShowClassName?: string;
    };
    errors?: {
      listElementClassName?: string;
      listItemClassName?: string;
    };
  };
}) => {
  return (
    <>
      <PasswordContextProvider requirements={requirements}>
        <PasswordInput
          validateOnBlur={validateOnBlur}
          id={id}
          name={name}
          containerClassName={input?.containerClassName}
          labelClassName={input?.labelClassName}
          toggleShowClassName={input?.toggleShowClassName}
          inputClassName={input?.inputClassName}
          required={required}
        />
        <PasswordErrors
          listElementClassName={errors?.listElementClassName}
          listItemClassName={errors?.listItemClassName}
        />
      </PasswordContextProvider>
    </>
  );
};
