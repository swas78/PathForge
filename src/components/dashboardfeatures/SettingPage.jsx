import { FileDown, Moon, Trash2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SettingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050816] px-6 py-6 text-white">
      <div className="mb-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 text-xl font-semibold"
        >
          <ArrowLeft className="text-indigo-400" />
          <span>PathForge</span>
        </button>
        <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-xs tracking-widest text-gray-400">ACCOUNT CONTROL</p>
        <h1 className="mt-1 text-3xl font-bold">Settings</h1>
      </div>

      <Section title="Data & Privacy">
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-500/20 p-2">
                <Moon size={18} className="text-indigo-300" />
              </div>
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-xs text-gray-400">Appearance preference</p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
              Enabled
            </span>
          </div>

          <div className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/20 p-2">
                <FileDown size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="font-medium">Export roadmap (JSON)</p>
                <p className="text-xs text-gray-400">Download your local progress</p>
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer items-center justify-between rounded-xl border border-red-400/20 bg-white/5 p-4 transition hover:bg-red-500/10">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-red-500/20 p-2">
                <Trash2 size={18} className="text-red-400" />
              </div>
              <div>
                <p className="font-medium text-red-300">Clear all data</p>
                <p className="text-xs text-gray-400">Permanently delete roadmap history</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="About">
        <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          <Row label="Version" value="v2.4.0-stable" />
          <Row label="Build ID" value="0x7FF2A1" />
        </div>
      </Section>

      <div className="mt-10 overflow-hidden rounded-2xl bg-linear-to-r from-indigo-900/40 to-blue-900/40 p-6">
        <p className="text-xs tracking-widest text-gray-400">PRECISION GUIDED</p>
        <h2 className="mt-2 text-xl font-semibold">Your Forge, Your Rules.</h2>
      </div>
    </div>
  );
}

export default SettingPage;

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 text-xs text-gray-400">{title}</h3>
      {children}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between px-4 py-3 text-sm">
      <span className="text-gray-400">{label}</span>
      <span>{value}</span>
    </div>
  );
}
