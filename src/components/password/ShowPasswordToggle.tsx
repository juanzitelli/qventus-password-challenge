import clsx from "clsx";
import {
  FaRegEyeSlash as HideIcon,
  FaRegEye as ShowIcon,
} from "react-icons/fa";

export const ShowPasswordToggle = ({
  password,
  setIsHidden,
  isHidden,
  className = "",
}: {
  password: string;
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) => {
  return (
    <button
      className={clsx(
        "border-2 border-black rounded-md px-2 py-1 aspect-square",
        className
      )}
      type="button"
      title={`${isHidden ? "Show" : "Hide"} password`}
      onClick={() => {
        if (password.length > 0) setIsHidden((ps) => !ps);
      }}
    >
      {isHidden ? <ShowIcon /> : <HideIcon />}
    </button>
  );
};
