import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed top-0 left-0 right-0 font-poppins bg-accent/80">
        <div className="w-5/6 mx-auto flex justify-between text-xl text-primary py-8 h-20 items-center">
          <div className="flex gap-2 items-center">
            <div className="bg-primary w-10 h-10 rounded-full"></div>
            <Link>Desa Dilem</Link>
          </div>
          <div className="hover:border-b border-primary duration-300 hover:font-medium">
            <Link to="/">Beranda</Link>
          </div>
          <div className="hover:border-b border-primary duration-300 hover:font-medium">
            <Link>Sekilas</Link>
          </div>
          <div className="hover:border-b border-primary duration-300 hover:font-medium">
            <Link>Visi Misi</Link>
          </div>
          <div className="hover:border-b border-primary duration-300 hover:font-medium">
            <Link to="/informasi">Informasi</Link>
          </div>
          <div className="hover:border-b border-primary duration-300 hover:font-medium">
            <Link to="/umkm">UMKM</Link>
          </div>
          <div className="hover:border-b border-primary duration-300 hover:font-medium">
            <Link to="/wisata">Wisata</Link>
          </div>
          <div className="hover:border-b border-primary duration-300 hover:font-medium">
            <Link>Masuk</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
