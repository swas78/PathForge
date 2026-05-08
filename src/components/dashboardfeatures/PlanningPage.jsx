import {
  ArrowLeft,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlanningPage() {
  const navigate = useNavigate();
  const [roadmapTitle, setRoadmapTitle] = useState("");

  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-3"
        >
          <ArrowLeft className="text-gray-400 hover:text-white" />

          <h1 className="text-2xl font-bold">PathForge</h1>
        </button>

        <div className="w-9 h-9 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="text-center max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-indigo-300 uppercase">
            New Initiative
          </p>

          <h2 className="mt-3 text-5xl font-bold">Forge Your Vision</h2>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Design a structured path for your next breakthrough. Define the
            scope and set the foundation for success.
          </p>
        </div>

        <div className="mt-10 w-full max-w-155 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div>
            <label className="text-sm text-gray-400">ROADMAP TITLE</label>

            <input
              type="text"
              value={roadmapTitle}
              onChange={(e) => setRoadmapTitle(e.target.value)}
              placeholder="e.g., Goa Weekend Trip Plan"
              className="mt-3 w-full rounded-xl border border-white/10 bg-[#0d1333] px-4 py-4 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm text-gray-400">DESCRIPTION</label>

            <textarea
              rows={6}
              placeholder="Define the high-level goals and architecture..."
              className="mt-3 w-full rounded-xl border border-white/10 bg-[#0d1333] px-4 py-4 outline-none resize-none focus:border-indigo-500"
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition cursor-pointer">
              <div className="flex items-start gap-3">
                <Sparkles className="text-cyan-400" size={20} />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    AI Suggestions
                  </p>

                  <p className="mt-2 text-sm text-gray-200 leading-relaxed">
                    Generate milestones based on your title automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition cursor-pointer">
              <div className="flex items-start gap-3">
                <Users className="text-pink-400" size={20} />

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Collaboration
                  </p>

                  <p className="mt-2 text-sm text-gray-200 leading-relaxed">
                    Invite team members to forge this path together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const title = roadmapTitle.trim() || "Goa Weekend Trip Plan";
              // Keep the title available even if the user refreshes after entering the dashboard.
              localStorage.setItem("pathforge-roadmap-title", title);
              navigate("/dashboard", { state: { roadmapTitle: title } });
            }}
            className="mt-8 w-full rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 py-4 text-lg font-semibold shadow-[0_0_40px_rgba(99,102,241,0.45)] transition hover:scale-[1.01] hover:opacity-95"
          >
            Create Roadmap ⚡
          </button>
        </div>

        <p className="mt-8 text-xs tracking-[0.25em] text-gray-500 uppercase">
          Securely Hosted On Pathforge Protocol
        </p>
      </div>
    </div>
  );
}
