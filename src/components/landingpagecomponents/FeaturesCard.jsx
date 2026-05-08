import { Link } from "react-router-dom";
import { Activity, BarChart3, Move } from "lucide-react";

function FeaturesCard() {
  return (
    <div className="bg-[#050816] px-6 py-20 md:px-16">
      <div className="mx-auto grid max-w-350 gap-8 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/4 p-8 transition hover:bg-white/5">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/3">
            <Activity className="text-purple-300" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-white">
            Interactive roadmap visualization
          </h3>

          <p className="mb-6 leading-7 text-slate-400">
            Navigate complex goal architectures with a fluid, zoomable
            interface designed for structural clarity.
          </p>

          <Link to="/explore" className="flex items-center gap-2 text-sm tracking-wide text-purple-300 transition hover:text-purple-200">
            EXPLORE ENGINE →
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/4 p-8 transition hover:bg-white/5">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/3">
            <BarChart3 className="text-cyan-300" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-white">Progress tracking</h3>

          <p className="mb-6 leading-7 text-slate-400">
            Real-time analytics and predictive milestone monitoring for every
            node in your project lifecycle.
          </p>

          <Link to="/metrics" className="flex items-center gap-2 text-sm tracking-wide text-cyan-300 transition hover:text-cyan-200">
            VIEW METRICS →
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/4 p-8 transition hover:bg-white/5">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/3">
            <Move className="text-pink-300" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-white">Drag-and-drop nodes</h3>

          <p className="mb-6 leading-7 text-slate-400">
            Reconfigure your entire strategy in seconds. High-fidelity tactile
            controls for infinite flexibility.
          </p>

          <Link to="/docs" className="flex items-center gap-2 text-sm tracking-wide text-pink-300 transition hover:text-pink-200">
            SYSTEM DOCS →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
