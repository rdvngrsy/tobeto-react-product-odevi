import React, {useContext} from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { setAuthentication } from "../../store/features/authSlice";

type Props = {};

const Login = (props: Props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();


	const isAuthenticatedFromButton = () => {
		dispatch(setAuthentication(false));
	};

	return (
		<div className="container mt-5">
			<form>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

				<div className="form-floating">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label>Email address</label>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
					/>
					<label>Password</label>
				</div>

				<div className="form-check text-start my-3">
					<input
						className="form-check-input"
						type="checkbox"
						value="remember-me"
						id="flexCheckDefault"
					/>
					<label className="form-check-label">Remember me</label>
				</div>
				<button
					onClick={() => {
						isAuthenticatedFromButton();
						navigate("/");
						localStorage.setItem("token", "abc");
					}}
					className="btn btn-primary w-100 py-2"
					type="button"
				>
					Sign in
				</button>
				<p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
			</form>
		</div>
	);
};

export default Login;