import Routing from "util/Routing/Routing";
import { ThemeProvider } from "@mui/material/styles";
import AppTheme from "Constants/AppTheme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Routing />
      <ToastContainer id="toast-container" limit={1} />
    </ThemeProvider>
  );
}

export default App;
