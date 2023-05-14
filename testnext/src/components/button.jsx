
export const Button = (props) => {
  const {value, handleClick, text} = props 
  
  return (
    <button onClick={() => handleClick()}>{text}</button>
  );
};
