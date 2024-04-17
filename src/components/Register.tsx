"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";

const NormalLoginForm: any = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState<any>({});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const addUser = async () => {
		try {
			const response = await fetch("/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Failed to save data");
			}

			console.log("Data saved successfully!");
			// Optionally reset the form after successful submission
			setFormData({ name: "", email: "", password: "" });
		} catch (error) {
			console.error("Error saving data:", error);
		}
	};

	const submitHandler = (e: any) => {
		e.preventDefault();
		const validationErrors = validateForm(formData);
		if (Object.keys(validationErrors).length === 0) {
			addUser();
		} else {
			setErrors(validationErrors);
		}
	};

	const validateForm = (formData: any) => {
		const errors: any = {};
		// Validate name
		if (!formData.name.trim()) {
			errors.name = "Name is required";
		}
		// Validate email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim()) {
			errors.email = "Email is required";
		} else if (!emailRegex.test(formData.email)) {
			errors.email = "Invalid email format";
		}
		// Validate password
		if (!formData.password.trim()) {
			errors.password = "Password is required";
		} else if (formData.password.trim().length < 6) {
			errors.password = "Password must be at least 6 characters long";
		}
		return errors;
	};
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a
					href="#"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					<img
						className="w-8 h-8 mr-2"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
						alt="logo"
					/>
					TRACK
				</a>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Create new account
						</h1>
						<form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
							<div>
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Jai"
									required
									value={formData.name}
									onChange={handleChange}
								/>
								{errors.name && (
									<span style={{ color: "red" }}>{errors.name}</span>
								)}
							</div>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required
									value={formData.email}
									onChange={handleChange}
								/>
								{errors.email && (
									<span style={{ color: "red" }}>{errors.email}</span>
								)}
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
									value={formData.password}
									onChange={handleChange}
								/>
								{errors.password && (
									<span style={{ color: "red" }}>{errors.password}</span>
								)}
							</div>

							<button
								type="submit"
								style={{ background: "blue" }}
								className="w-full font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Create Account
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account ?{" "}
								<Link
									href="/login"
									className="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>
									Login
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NormalLoginForm;
