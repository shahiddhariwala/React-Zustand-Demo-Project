import "./styles.css";
import useTodoStore from "./store/index";
import { Button, StepIcon, TextField } from "@mui/material";
import { useState } from "react";

export default function App() {
  const tasks = useTodoStore((state) => state.tasks || []);
  const name = useTodoStore((state) => state.name);

  const addTask = useTodoStore((state) => state.addTask);
  const deleteTask = useTodoStore((state) => state.deleteTask);

  const [text, setText] = useState("");
  return (
    <div
      style={{
        backgroundColor: "yellow",
        height: "100vh",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
        textAlign: "center"
      }}
    >
      <b>Please add your tasks: {name}</b>
      <h3>Total: {tasks?.length}</h3>
      <TextField
        style={{
          backgroundColor: "white",
          width: "100%",
          margin: "10px 0"
        }}
        value={text}
        onChange={(e) => setText(e?.target?.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          if (!text) return;
          addTask(text);
          setText("");
        }}
      >
        Add
      </Button>
      <div
        style={{
          backgroundColor: "orange",
          padding: "20px",
          margin: "20px 0"
        }}
      >
        {tasks?.map((each, index) => (
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "20px",
              width: "100%",
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4px"
            }}
          >
            <span>{each}</span>
            <Button
              variant=""
              style={{
                background: "red"
              }}
              onClick={() => deleteTask(index)}
            >
              X
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
