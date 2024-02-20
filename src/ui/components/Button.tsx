import { Button, ButtonTypes } from "@/models/ButtonModel";

export default function Button({
  text,
  type,
  redirectTo,
  icon,
  className,
}: Button) {
  const button: Button = {
    text: text,
    type: type,
    redirectTo: redirectTo,
    icon: icon,
    className: className,
  };

  function getButtonStyles(type: ButtonTypes) {
    switch (type) {
      case "primary":
        return "bg-bg-button-primary text-text-button-primary hover:bg-utility-brand-700";
      case "secondary":
        return "bg-bg-button-secondary text-text-button-secondary hover:bg-bg-button-secondary-hover";
      case "tertiary":
        return "bg-bg-button-tertiary text-text-button-tertiary hover:text-utility-brand-800";
      default:
        return "";
    }
  }

  function getIconStyles(type: ButtonTypes) {
    switch (type) {
      case "primary":
        return "stroke-text-button-primary";
      case "secondary":
        return "stroke-text-button-secondary";
      case "tertiary":
        return "stroke-text-button-tertiary";
      default:
        return "";
    }
  }

  return (
    <button
      className={`flex justify-center items-center px-5 py-3 rounded-lg font-semibold ${getButtonStyles(
        button.type
      )} ${className} transition-all duration-300 ease-in-out`}
    >
      {button.text}
      {button.icon ? (
        <button.icon
          className={`pl-2 ${getIconStyles(button.type)}`}
          width={20}
          height={20}
        />
      ) : (
        <></>
      )}
    </button>
  );
}
