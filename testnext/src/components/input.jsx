
export const Input = (props) => {
  const {setValue} = props
  
  return (
    <input type="text" title="input" onChange={(e) => setValue(e.target.value)}/>
  );
};
