import { Link } from "react-router-dom";
import { Terminal, Globe } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#050816] pt-20">
      <footer className="w-full border-t border-white/10 bg-[#060b1f] py-7 text-slate-400">
        <div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <div className="flex items-center justify-center gap-2 font-semibold text-white md:justify-start">
              <span className="text-indigo-400">⛓</span>
              PathForge
            </div>

            <p className="text-xs tracking-[0.18em] text-slate-500">
              © 2024 PATHFORGE. FORGING THE FUTURE OF WORKFLOWS.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs tracking-[0.18em] text-slate-400">
            <Link to="/product" className="transition hover:text-slate-200">
              PRODUCT
            </Link>

            <Link to="/features" className="transition hover:text-slate-200">
              FEATURES
            </Link>

            <Link to="/security" className="transition hover:text-slate-200">
              SECURITY
            </Link>

            <Link to="/changelog" className="transition hover:text-slate-200">
              CHANGELOG
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-white/10 transition hover:bg-white/6">
              <Terminal size={16} />
            </div>

            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-white/10 transition hover:bg-white/6">
              <Globe size={16} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
