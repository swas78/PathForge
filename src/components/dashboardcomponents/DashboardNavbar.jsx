import { ArrowLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

function DashboardNavbar() {
  const navigate = useNavigate();

  return (
    <div className="flex h-18 w-full items-center justify-between border-b border-white/10 bg-[#080d1d] px-6 md:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-indigo-400"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="flex items-center gap-2.5 text-lg font-semibold tracking-wide text-white">
          <span className="text-xl text-indigo-400">⛓</span>
          PathForge
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#11182f] transition hover:bg-[#161f3c]">
          <Bell size={18} className="text-slate-300" />
        </button>

        <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
