import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import { TiSocialFacebook } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import social from "./social.module.css";
import { useNavigate } from "react-router-dom";
function SocilalBtn() {
	const navigate = useNavigate();

	const responseFacebook = (response: ReactFacebookLoginInfo) => {
		localStorage.setItem("token", response.accessToken);
		navigate("/user-dashboard");
		console.log(response);
		// const fbUser = {
		//     accessToken:response.accessToken,
		//     socials:response.id,
		//     firstName: response.name?.split(" ")[0],
		//     lastName:response.name?.split(" ")[2],
		//     image:response.picture?.data.url,
		//     email: response.email,
		//     name: response.name
		// }
		// apiPost("/fb-auth-login", fbUser)
		// .then((res) =>{
		//     toast.success(res.data.message)
		//     localStorage.setItem("token", response.accessToken)
		// }
		// )
		// .catch(err=>{
		//     if (err.message === "Network Error") {
		//         return toast("Network error");
		//       }
		//     //   toast("error logging in")
		//     toast.error(err.response.data.error)
		// })
	};
	return (
		<div className="social">
			<FacebookLogin
				appId="880499959662436"
				callback={responseFacebook}
				fields="name,email,picture"
				render={(renderProps) => (
					<button className={social.facebook} onClick={renderProps.onClick}>
						{" "}
						<TiSocialFacebook /> Facebook
					</button>
				)}
			/>
			<a href="http://localhost:7000/auth/google">
				<span className={social.google}>
					<FcGoogle /> Google
				</span>
			</a>
		</div>
	);
}

export default SocilalBtn;
