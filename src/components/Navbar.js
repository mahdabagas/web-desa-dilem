import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

//gambar
import bgPrimary from "../assets/bg-cl-primary.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="w-full sticky top-0 z-50 drop-shadow-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgPrimary})` }}
      >
        <div className="w-5/6 mx-auto flex justify-between text-xl text-secondary items-center py-8">
          <Link to="/" className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full">
              <img
                src={logo}
                alt=""
                className="w-fll h-full object-cover object-center"
              />
            </div>
            <h1>Desa Dilem</h1>
          </Link>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "border-b border-secondary font-medium" : ""
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to={"/sekilas"}
            className={({ isActive }) =>
              isActive ? "border-b border-secondary font-medium" : ""
            }
            preventScrollReset={true}
          >
            Sekilas
          </NavLink>
          <NavLink
            to={"/visi-misi"}
            className={({ isActive }) =>
              isActive ? "border-b border-secondary font-medium" : ""
            }
          >
            Visi Misi
          </NavLink>
          <NavLink
            to={"/informasi"}
            className={({ isActive }) =>
              isActive ? "border-b border-secondary font-medium" : ""
            }
          >
            Informasi
          </NavLink>
          <NavLink
            to={"/umkm"}
            className={({ isActive }) =>
              isActive ? "border-b border-secondary font-medium" : ""
            }
            preventScrollReset
          >
            UMKM
          </NavLink>
          <NavLink
            to={"/wisata"}
            className={({ isActive }) =>
              isActive ? "border-b border-secondary font-medium" : ""
            }
          >
            Wisata
          </NavLink>
          <NavLink
            to={"/masuk"}
            className={({ isActive }) =>
              isActive ? "border-b border-secondary font-medium" : ""
            }
          >
            Masuk
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
