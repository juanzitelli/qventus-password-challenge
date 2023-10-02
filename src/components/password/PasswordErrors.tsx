import { usePasswordContext } from "./usePasswordContext";

export const PasswordErrors = () => {
  const { errors } = usePasswordContext();

  return errors.length > 0 ? (
    <ul className="flex flex-col gap-2 text-xs sm:text-base">
      {errors.map((error, index) => (
        <li key={index}>❌ {error}</li>
      ))}
    </ul>
  ) : null;
};
