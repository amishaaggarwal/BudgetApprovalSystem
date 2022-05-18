import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Title from "components/Title/Title";

function UserCard(props) {
  const user = {
    Name: `${props.data.first_name} ${props.data.last_name}`,
    Designation: props.data.designation,
    Mobile: props.data.mobile,
    Email: props.data.email,
    Gender: props.data.gender,
    Address: `${props.data.address},${props.data.city},${props.data.state},${props.data.country}`,
    DOJ: props.data.date_of_joining,
    DOB: props.data.dob,
  };

  return (
    <Card>
      <CardContent>
        <Title>{user.Name}</Title>
        {Object.entries(user).map((row) => (
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
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
                {`${props.data.education_10th_percentage}%`}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Typography variant="body2" color="text.secondary">
                12th Percentage:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${props.data.education_12th_percentage}%`}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Graduation Percentage:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${props.data.education_grad_percentage}%`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default UserCard;
