import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import { useContext } from "react";
import { AuthContext } from "./Context/UserContext";

function App() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="App">
      <div className="mt-16">
        {!isLoggedIn ? (
          <>
            <button
              onClick={handleLogin}
              type="button"
              id="btn"
              class="  text-white v bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
            <p>Please Login From here</p>
          </>
        ) : (
          <>
            <button
              onClick={handleLogout}
              type="button"
              id="btn"
              class="  text-white v bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Logout
            </button>
            <p>Now you are logged In</p>
          </>
        )}
      </div>
      <Input />
    </div>
  );
}

export default App;
