import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Vehicles from "../pages/Vehicles";
import Drivers from "../pages/Drivers";
import Trips from "../pages/Trips";
import Maintenance from "../pages/Maintenance";
import Fuel from "../pages/Fuel";
import Expenses from "../pages/Expenses";
import Reports from "../pages/Reports";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Dashboard />} />

                    <Route
                        path="dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="vehicles"
                        element={<Vehicles />}
                    />

                    <Route
                        path="drivers"
                        element={<Drivers />}
                    />

                    <Route
                        path="trips"
                        element={<Trips />}
                    />

                    <Route
                        path="maintenance"
                        element={<Maintenance />}
                    />

                    <Route
                        path="fuel"
                        element={<Fuel />}
                    />

                    <Route
                        path="expenses"
                        element={<Expenses />}
                    />

                    <Route
                        path="reports"
                        element={<Reports />}
                    />
                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;