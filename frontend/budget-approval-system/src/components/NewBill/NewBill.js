import { Stack, TextField, Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function NewBill() {
  const [files, setFiles] = useState([]);
  const [newBill, setNewBill] = useState({
    project_name: "",
    date_of_issue: "",
    bill_document: "",
    department: "",
    applied_to: "",
    amount: "",
  });
  const [message, setMessage] = useState("");
  const handleInputChange = (e) => {
    const files = e.target.files;

    if (files.length) {
      setMessage(`${newBill.bill_document.label} ${files.item(0).name}`);
      setFiles(files);
    }
  };
  const handleChange = (e) => {
    const data = newBill;
    data[e.target.name] = e.target.value;
    setNewBill(data);
  };
  const handleSendFiles = () => {
    console.log(files[0]);

    // this.state.files
  };

  function ActionBar(props) {
    return (
      props.enabled && (
        <Button variant="contained" onClick={props.onSendClick}>
          Bill Document
        </Button>
      )
    );
  }

  function MessageBox(props) {
    return props.message.length > 0 && <Typography>{props.message}</Typography>;
  }

  function InputFile(props) {
    return (
      <label className="InputFile">
        Bill Document{" "}
        <input type="file" name="bill_document" onChange={props.onChange} />
      </label>
    );
  }
  const handleSubmit = () => {};
  return (
    <Stack
      spacing={2}
      sx={{ padding: "10px" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        autoFocus
        id="outlined-basic"
        defaultValue={newBill.project_name}
        label="Project Name"
        type="text"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        defaultValue={newBill.date_of_issue}
        label="Date of Issue"
        type="date"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        defaultValue={newBill.department}
        label="Department"
        type="text"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        defaultValue={newBill.applied_to}
        label="Manager"
        type="text"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        defaultValue={newBill.amount}
        onChange={handleChange}
        label="Bill Amount"
        type="text"
        variant="outlined"
      />
      <Box>
        <InputFile onChange={handleInputChange} />
        <MessageBox message={message} />
        <ActionBar enabled={files.length > 0} onSendClick={handleSendFiles} />
      </Box>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
}

export default NewBill;
