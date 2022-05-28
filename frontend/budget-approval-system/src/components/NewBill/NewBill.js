import { Box, Button, OutlinedInput, Stack, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import { BASE_URL, BILLS, GET_MANAGERS } from "Constants/apiURLs";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getLocalStorage } from "util/Storage/Storage";

function NewBill(props) {
  const { handleClose } = props;
  const d = new Date();
  const data = JSON.parse(getLocalStorage("user"));
  const [list, setList] = useState([]);
  const [newBill, setNewBill] = useState({
    project_name: "",
    amount: "",
    date_of_issue: d.toISOString().substring(0, 10),
    // bill_document: "",
    comments: "",
    approved_by: "",
    approved_on: "",
    issued_by: data.id.toString(),
  });

  const getManagerList = useCallback(() => {
    axios.get(`${BASE_URL}${GET_MANAGERS}`).then((res) => {
      setList(res.data);
    });
  }, []);

  useEffect(() => {
    getManagerList();
  }, [getManagerList]);

  const handleChange = (e) => {
    const field = newBill;
    field[e.target.name] = e.target.value;
    setNewBill(field);
  };

  const handleSubmit = () => {
    newBill.amount = parseInt(newBill.amount);
    console.log("Submit", JSON.stringify(newBill));
    axios
      .post(`${BASE_URL}${BILLS}${data.id}`, JSON.stringify(newBill), {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
      .then(() => {
        handleClose();
        toast.success("Bill added successfully", {
          theme: "dark",
          position: "top-center",
        });
      });
  };
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
        name="project_name"
        onChange={handleChange}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Manager</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="approved_by"
          input={<OutlinedInput label="Manager" />}
          onChange={handleChange}
        >
          {list.map((row) => (
            <MenuItem value={row.id.toString()} key={row.id}>
              {`${row.first_name} ${row.last_name} (${row.email})`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        defaultValue={newBill.amount}
        onChange={handleChange}
        name="amount"
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
      <TextField
        id="outlined-basic"
        multiline
        defaultValue={newBill.comments}
        onChange={handleChange}
        name="comments"
        label="Comments"
        type="text"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}

export default NewBill;
