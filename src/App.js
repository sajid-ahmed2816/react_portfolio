import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Colors from './assets/style';
import routes from './routes/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './views/Home';
import ToasterContainer from './Components/Toaster';
import "@fontsource/noto-sans";
import "@fontsource/poppins"

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    text: {
      primary: Colors.black
    }
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "72px",
      color: Colors.black
    },

    h2: {
      fontSize: "64px",
      color: Colors.black
    },
    h3: {
      fontSize: "48px",
      color: Colors.black
    },
    h4: {
      fontSize: "36px",
      color: Colors.black
    },
    h5: {
      fontSize: "24px",
      color: Colors.black
    },
    h6: {
      fontSize: "20px",
      color: Colors.black
    },
    body1: {
      fontSize: "16px",
      color: Colors.black
    },
    body2: {
      fontSize: "14px",
      color: Colors.black
    },
    caption: {
      fontSize: "12px",
      color: Colors.black
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToasterContainer />
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route, ind) => (
              <Route key={ind} element={route.component} path={route.path} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
