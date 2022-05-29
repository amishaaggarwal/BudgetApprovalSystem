import { CardContent, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import axios from "axios";
import Title from "components/Title/Title";
import { BASE_URL, EMPLOYEES } from "Constants/apiURLs";
import { useCallback, useEffect, useState } from "react";
import { getLocalStorage } from "util/Storage/Storage";

function UserCard() {
  const data = JSON.parse(getLocalStorage("user"));
  const token = data.token;
  const id = data.id;
  const [user, setUser] = useState({});
  const [ed, setEd] = useState({});
  const getEmployeeData = useCallback(() => {
    axios
      .get(`${BASE_URL}${EMPLOYEES}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const result = res.data;
        const userData = {
          Name: `${result.first_name} ${result.last_name}`,
          Designation: result.designation,
          Mobile: result.mobile,
          Email: result.email,
          Gender: result.gender,
          Address: `${result.address},${result.city},${result.state},${result.country}`,
          DOJ: result.date_of_joining,
          DOB: result.dob,
        };
        setUser(userData);
        const edu = {
          education_12th_percentage: result.education_12th_percentage,
          education_10th_percentage: result.education_10th_percentage,
          education_grad_percentage: result.education_grad_percentage,
        };
        setEd(edu);
      });
  }, [id, token]);

  useEffect(() => {
    getEmployeeData();
  }, [getEmployeeData]);

  return user.length > 0 ? (
    <Card>
      <CardContent>
        <Title>{user.Name}</Title>
        {Object.entries(user).map((row, i) => (
          <Stack
            direction="row"
            key={i}
            spacing={1}
            sx={{ alignItems: "center" }}
          >
            <Typography variant="body1" color="text.primary">
              {`${row[0]}:`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${row[1]}`}
            </Typography>
          </Stack>
        ))}

        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Typography variant="body1" color="text.primary">
            Education:
          </Typography>
          <Stack direction="column">
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Typography variant="body2" color="text.secondary">
                10th Percentage:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${ed.education_10th_percentage}%`}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Typography variant="body2" color="text.secondary">
                12th Percentage:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${ed.education_12th_percentage}%`}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Graduation Percentage:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${ed.education_grad_percentage}%`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  ) : (
    <h1>No Data To Display!</h1>
  );
}

export default UserCard;
