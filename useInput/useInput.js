export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({ target: { value } }) => {
    const willUpdate =
      typeof validator === "function" ? validator(value) : true;
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
