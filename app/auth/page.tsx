import AuthenticationForm from "./authenticationForm";

const Authentication = () => {
	return (
		<div className="flex py-16 justify-center h-screen bg-backgroundColor">
			<div className="w-96 font-bold px-5 py-6 rounded-md ">
				<AuthenticationForm />
			</div>
		</div>
	);
};

export default Authentication;
