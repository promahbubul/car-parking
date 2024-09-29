/* eslint-disable react/prop-types */
const Input = ({ type, name, placeholder, defaultValue }) => {
  return (
    <input
      defaultValue={defaultValue && defaultValue}
      type={type ? type : "text"}
      name={name}
      placeholder={placeholder}
      className="input input-bordered input-accent w-full"
    />
  );
};
export default Input;
