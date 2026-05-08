import { ArrowLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/" },
    { name: "Security", path: "/" },
  ];

  return (
    <nav className="w-full border-b border-white/10 bg-[#080d1d] px-8 py-5 text-white">
      <div className="mx-auto flex max-w-325 items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-indigo-400"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-3 text-xl font-bold tracking-wide">
            <span className="text-indigo-400">⛓</span>
            <span>PATHFORGE</span>
          </div>
        </div>

        <div className="flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative rounded-md px-2 py-1 text-[16px] font-semibold transition ${
                  isActive ? "text-indigo-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute left-0 -bottom-2 h-0.5 w-full rounded-full bg-indigo-400" />
                )}
              </Link>
            );
          })}

          <Link
            to="/planningpage"
            className="ml-6 rounded-lg bg-indigo-500 px-6 py-2.5 font-semibold transition hover:bg-indigo-400"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
