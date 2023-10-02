import { usePasswordContext } from "./usePasswordContext";

export const PasswordErrors = () => {
  const { errors } = usePasswordContext();

  return errors.length > 0 ? (
    <ul>
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  ) : null;
};
