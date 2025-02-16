import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        phone_number: "",
        email: "",
        password: "",
        re_password: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {
                setError(data.error || "Registration failed");
            } else {
                setSuccess("Registration successful! Redirecting to login...");
                setTimeout(() => navigate("/login"), 2000);
            }
        } catch (error) {
            setError("Something went wrong, please try again.", error);
        }
    };

    return (
        <div className="text-wrap overflow-x-hidden overflow-y-hidden">
            <form className="max-w-md mx-auto mt-20 text-start" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Username
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="tel"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Phone Number
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="re_password"
                        value={formData.re_password}
                        onChange={handleChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Re-Enter Password
                    </label>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <div className="flex flex-col">
                    <button type="submit" className="bg-blue-600 text-white px-4 rounded">
                        Register
                    </button>
                    <p className="text-gray-900 py-2">
                        Already have an account? <Link to="/login"><u>Login here</u></Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;

