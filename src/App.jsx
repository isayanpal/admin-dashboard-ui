import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import { ThemeProvider } from "./contexts/theme-context";
import AnalyticsPage from "./pages/analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage/>,
      },
      {
        path: "reports",
        element: <h1 className="title">Reports</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
