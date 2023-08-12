import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth } from "../utils/AdminRoutes";
import { url } from "../api/url";

// Gambar
import logoLogin from "../assets/logo-login.png";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await url.post("/user/login", user);
      if (data.status === 200) {
        // ambil token
        const accessToken = data.data.data.token;
        localStorage.setItem("Authorization", accessToken);
        // mengatur auth
        auth.token = true;
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex w-full h-screen">
        <div className="w-2/5 bg-primary p-20">
          <img
            src={logoLogin}
            alt="logo-login"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-3/5 bg-secondary flex flex-col justify-center items-center gap-8">
          <div className="w-20 h-20">
            <img
              src={logo}
              alt="logo_dilem"
              className="object-cover object-center w-full"
            />
          </div>
          <h1 className="font-bold text-2xl text-primary">Sign in</h1>
          <form
            className="w-1/2 justify-center flex flex-col gap-4"
            onSubmit={handleLogin}
          >
            <div className="w-full">
              <input
                name="username"
                id="username"
                autoComplete="off"
                placeholder="username"
                value={user.username}
                onChange={handleChange}
                className="block w-full bg-secondary border-2 border-primary outline-none text-primary p-4 rounded-[10px] text-[18px] "
              />
            </div>
            <div className="w-full">
              <input
                name="password"
                id="password"
                type="password"
                autoComplete="off"
                placeholder="password"
                value={user.password}
                onChange={handleChange}
                className="block w-full bg-secondary border-2 border-primary outline-none text-primary p-4 rounded-[10px] text-[18px] "
              />
            </div>
            <button
              type="submit"
              className="mt-3 w-full bg-accent rounded-lg py-4 text-secondary font-medium"
            >
              Masuk
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
