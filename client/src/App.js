import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import { Navigate } from "react-router-dom";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transaction from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate to="/dashboard" replace />}
              ></Route>
              <Route
                path="/dashboard"
                element={<Dashboard></Dashboard>}
              ></Route>
              <Route path="/products" element={<Products></Products>}></Route>
              <Route
                path="/customers"
                element={<Customers></Customers>}
              ></Route>
              <Route
                path="/transactions"
                element={<Transaction></Transaction>}
              ></Route>
              <Route
                path="/geography"
                element={<Geography> </Geography>}
              ></Route>
              <Route path="/overview" element={<Overview></Overview>}></Route>
              <Route path="/daily" element={<Daily></Daily>}></Route>
              <Route path="/monthly" element={<Monthly></Monthly>}></Route>
              <Route
                path="/breakdown"
                element={<Breakdown></Breakdown>}
              ></Route>
              <Route path="/admin" element={<Admin></Admin>}></Route>
              <Route
                path="/performance"
                element={<Performance></Performance>}
              ></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
