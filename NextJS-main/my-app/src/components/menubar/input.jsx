import React from 'react';

const Input = (props) => {
    const {styles, text, value, setValue} = props

    return (
        <div>
            <div>{text}</div>
            <input className={styles.input} type="text" value={value} onChange={e => setValue(e.target.value)}/>
        </div>
    );
};

export default Input;