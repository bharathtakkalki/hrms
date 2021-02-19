import React, { Fragment } from "react";

const defaultClasses = {
  inputClassName: "",
  labelClassName: "",
  iconClassName: "",
  inputComponentClass: "",
  inputIconContainer: "",
};

const Input = ({
  type = "text",
  value,
  name,
  label,
  id,
  icon,
  classes={...defaultClasses},
  placeholder,
  onChange,
}) => {
  const {
    inputClassName,
    labelClassName,
    iconClassName,
    inputComponentClass,
    inputIconContainer,
  } = classes;
  return (
    <div className={`input-component ${inputComponentClass}`}>
      {label && <label className={`label ${labelClassName}`}>{label}</label>}
      <div className={`input-icon-container ${inputIconContainer}`}>
        <input
          id={id}
          onChange={onChange}
          className={`input ${inputClassName}`}
          placeholder={placeholder}
          type={type}
          value={value}
          name={name}
        />
        {icon}
      </div>
    </div>
  );
};

export default Input;
