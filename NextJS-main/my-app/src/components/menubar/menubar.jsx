import React, { useState } from "react";
import styles from "@styles/menubar.module.css";
import Button from "./button";
import Input from "./input";

const Menubar = (props) => {

  const { setPosts, setGroup } = props;
  const [valueId, setValueId] = useState("");
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [valueCity, setValueCity] = useState("");
  return (
    <div className={styles.bar}>
      <Input
        text="Id"
        styles={styles}
        valueId={valueId}
        setValue={setValueId}
      />
      <Input
        text="First name"
        styles={styles}
        valueFirstName={valueFirstName}
        setValue={setValueFirstName}
      />
      <Input
        text="Last name"
        styles={styles}
        valueLastName={valueLastName}
        setValue={setValueLastName}
      />
      <Input
        text="City"
        styles={styles}
        valueCity={valueCity}
        setValue={setValueCity}
      />
      <Button
        text="Start"
        styles={styles}
        firstName={valueFirstName}
        lastName={valueLastName}
        city={valueCity}
        id={valueId}
        setPosts={setPosts}
        setGroup={setGroup}
      />
    </div>
  );
};

export default Menubar;
