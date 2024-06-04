import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Colors from './assets/style';
import routes from './routes/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './views/Home';
import ToasterContainer from './Components/Toaster';
import "@fontsource/noto-sans";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    text: {
      primary: Colors.white
    }
  },
  typography: {
    fontFamily: "Noto Sans",
    h1: {
      fontSize: "72px",
    },

    h2: {
      fontSize: "64px",
    },
    h3: {
      fontSize: "48px"
    },
    h4: {
      fontSize: "36px"
    },
    h5: {
      fontSize: "24px"
    },
    h6: {
      fontSize: "20px"
    },
    body1: {
      fontSize: "16px"
    },
    body2: {
      fontSize: "14px"
    },
    caption: {
      fontSize: "12px"
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
