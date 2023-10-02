import clsx from "clsx";
import { usePasswordContext } from "./usePasswordContext";

export const PasswordErrors = ({
  listElementClassName = "",
  listItemClassName = "",
}: {
  listElementClassName?: string;
  listItemClassName?: string;
}) => {
  const { errors } = usePasswordContext();

  return errors.length > 0 ? (
    <ul
      className={clsx(
        "flex flex-col gap-2 text-xs sm:text-base",
        listElementClassName
      )}
    >
      {errors.map((error, index) => (
        <li className={clsx("text-sm italic", listItemClassName)} key={index}>
          ❌ {error}
        </li>
      ))}
    </ul>
  ) : null;
};
