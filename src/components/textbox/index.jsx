import "./styles.css";

const Textbox = ({ updateValue, validateValue, value }) => {
  function handleChange(e) {
    validateValue(e.target.value);
    updateValue(e.target.value);
  }

  return (
    <input
      className="textBox"
      type="text"
      name="textbox"
      onChange={handleChange}
      value={value}
    />
  );
};

export default Textbox;
