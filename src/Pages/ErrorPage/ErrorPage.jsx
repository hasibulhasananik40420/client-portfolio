import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center min-h-screen">
        <img
          className=""
          src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7879.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
          alt=""
        />
      </div>
      <Link to="/">
        <button className="bg-secondaryColor text-white w-[200px] h-[56px] rounded-md font-Montserrat font-medium text-[16px] absolute inset-0 left-5 top-5">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
