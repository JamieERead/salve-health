import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/home";
import PatientsScreen from "../screens/patients";

export const route = {
  home: "/",
  patients: "/patients",
};

const router = createBrowserRouter([
  {
    path: route.home,
    element: <HomeScreen />,
  },
  {
    path: route.patients,
    element: <PatientsScreen />,
  },
]);

export default router;
