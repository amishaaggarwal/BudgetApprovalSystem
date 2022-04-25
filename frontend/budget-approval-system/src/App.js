import Routing from "util/Routing/Routing";
import { ThemeProvider } from "@mui/material/styles";
import AppTheme from "Constants/AppTheme";

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
