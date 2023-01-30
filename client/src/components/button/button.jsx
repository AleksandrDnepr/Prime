import "./button.css";

export function Button({
  size,
  rounding,
  clickEvent,
  isDisabled,
  children,
  role,
}) {
  function BtnSize() {
    switch (size) {
      case "m":
        return "Btn Btn__m_size";
      case "l":
        return "Btn Btn__l_size";
      default:
        break;
    }
  }

  function BtnBorder() {
    switch (rounding) {
      case "none":
        return "Btn__border-round-none";
      case "right":
        return "Btn__border-round-right";
      case "left":
        return "Btn__border-round-left";
      case "both":
        return "Btn__border-round-both";
      default:
        break;
    }
  }

  function className() {
    return `${BtnSize(size)} ${BtnBorder(rounding)}`;
  }

  return (
    <button
      role={role}
      type="button"
      className={className()}
      onClick={clickEvent}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
