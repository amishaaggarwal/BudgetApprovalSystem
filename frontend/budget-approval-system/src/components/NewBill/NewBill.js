import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

function NewBill() {
  const [newBill, setNewBill] = useState({
    project_name: "",
    date_of_issue: "",
    bill_document: "",
    department: "",
    applied_to: "",
    amount: "",
  });

  const handleChange = (e) => {
    const data = newBill;
    data[e.target.name] = e.target.value;
    setNewBill(data);
  };

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
        <label className="InputFile" htmlFor="bd">
          Bill Document{" "}
          <input
            type="file"
            id="bd"
            name="bill_document"
            accept=".pdf"
            onChange={handleChange}
          />
        </label>
      </Box>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
}

export default NewBill;
