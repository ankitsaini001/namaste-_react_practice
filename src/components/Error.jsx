import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 px-4 err">
      <div className="text-6xl mb-4 err-alert">🚨</div>
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong</h1>
      <p className="text-lg mb-4">
        <strong>Status:</strong> {err.status || "Unknown"}<br />
        <strong>Message:</strong> {err.statusText || "Unexpected error"}
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;