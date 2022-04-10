import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import moment from "moment";

const LocalStore = () => {
  const [name, setName] = useState("");
  const [stark, setStark] = useState("");
  const [textViwe, setTextViwe] = useState([
    { id: 1, name: "Shola", stark: "React Js", time: Date.now() },
    { id: 2, name: "Jude", stark: "Express Js", time: Date.now() },
    { id: 3, name: "Blessing", stark: "UI/UX", time: Date.now() },
  ]);

  const addNewName = () => {
    const id = uuid();
    console.log(id);
    // const id = textViwe.length + 1;
    const add = { id, name, stark, time: Date.now() };
    setTextViwe([...textViwe, add]);
    setName("");
    setStark("");
  };

  console.log(textViwe);

  useEffect(() => {
    localStorage.setItem("localBase", JSON.stringify(textViwe));
  }, []);

  useEffect(() => {
    const viewJson = JSON.parse(localStorage.getItem("localBase"));
    setTextViwe(viewJson);
  }, []);

  return (
    <Container>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Stark"
        value={stark}
        onChange={(e) => {
          setStark(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(name, stark);
          addNewName();
        }}
      >
        Submit
      </button>
      {textViwe?.map((props) => (
        <Card key={props.id}>
          <Title> {props.name} </Title>
          <Sub> {props.stark}</Sub>
          <Sma> {moment(props.time).fromNow()} </Sma>
        </Card>
      ))}
    </Container>
  );
};

export default LocalStore;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  height: 230px;
  width: 200px;
  background-color: darkcyan;
  text-align: center;
  margin: 20px;
`;
const Title = styled.h1``;
const Sub = styled.h2``;
const Sma = styled.div``;
