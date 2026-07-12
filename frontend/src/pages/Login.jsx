import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login as loginService } from "../services/auth.service";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();

    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await loginService(form);

            login(data.data.user, data.data.token);

            navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-xl p-8 w-[400px]"
            >
                <h1 className="text-3xl font-bold mb-6 text-center">
                    TransitOps Login
                </h1>

                <input
                    className="w-full border p-3 rounded mb-4"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />

                <input
                    className="w-full border p-3 rounded mb-4"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />

                <button
                    className="w-full bg-blue-600 text-white py-3 rounded-lg"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;