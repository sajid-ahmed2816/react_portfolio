import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Colors from './assets/style';
import '@fontsource/roboto';
import routes from './routes/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './views/Home';

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
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Your existing routes will be rendered inside Layout component */}
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
