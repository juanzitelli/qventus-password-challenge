import { PasswordContextProvider, PasswordErrors, PasswordInput } from ".";
import { Requirements } from "./usePassword";

export const Password = ({
  requirements,
  validateOnBlur,
  id,
  name,
  customClassNames: {
    input: {
      inputClassName,
      containerClassName,
      labelClassName,
      toggleShowClassName,
    },
    errors: { listElementClassName, listItemClassName },
  } = {
    input: {},
    errors: {},
  },
}: {
  requirements: Requirements;
  validateOnBlur: boolean;
  id: string;
  name: string;
  customClassNames?: {
    input: {
      inputClassName?: string;
      containerClassName?: string;
      labelClassName?: string;
      toggleShowClassName?: string;
    };
    errors: {
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
          containerClassName={containerClassName}
          labelClassName={labelClassName}
          toggleShowClassName={toggleShowClassName}
          inputClassName={inputClassName}
        />
        <PasswordErrors
          listElementClassName={listElementClassName}
          listItemClassName={listItemClassName}
        />
      </PasswordContextProvider>
    </>
  );
};
