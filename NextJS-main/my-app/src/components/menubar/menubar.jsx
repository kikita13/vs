import React, { useState } from "react";
import styles from "@styles/menubar.module.css";
import Button from "./button";
import Input from "./input";

const Menubar = (props) => {

  const { setPosts, setGroup } = props;
  const [valueFilterWord, setValueFilterWord] = useState('')
  const [valueId, setValueId] = useState("");
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [valueCity, setValueCity] = useState("");
  const [maxPosts, setMaxPosts] = useState("");
  return (
    <div className={styles.bar}>
      <Input
        text="Id"
        styles={styles}
        valueId={valueId}
        setValue={setValueId}
      />
      <Input
        text="Max posts"
        styles={styles}
        maxPosts={maxPosts}
        setValue={setMaxPosts}
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
      <Input
        text="Filter"
        styles={styles}
        valueCity={valueFilterWord}
        setValue={setValueFilterWord}
      />
      <Button
        text="Start"
        styles={styles}
        firstName={valueFirstName}
        lastName={valueLastName}
        city={valueCity}
        id={valueId}
        maxPosts={maxPosts}
        setPosts={setPosts}
        setGroup={setGroup}
      />
    </div>
  );
};

export default Menubar;
