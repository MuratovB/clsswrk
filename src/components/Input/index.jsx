import "./index.css";

export function Input(props) {
  const {
    type = "text",
    placeholder = "",
    value = "",
    onChange = () => {},
    disabled = false,
    label = "",
    danger = false,
  } = props;

  const className = `input ${danger ? "input--danger" : ""}`;

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
      />
    </div>
  );
}

export default Input;
