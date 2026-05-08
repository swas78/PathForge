import { useState } from "react";
import { X, Trash2 } from "lucide-react";

const BADGE_OPTIONS = ["Plan", "Budget", "Travel", "Stay", "Explore", "Ready", "Planned"];
const STATUS_OPTIONS = ["Active", "Completed", "Pending"];

function EditNodeModal({ isOpen, onClose, step, onDelete, onSave }) {
  const [title, setTitle] = useState(step?.label ?? "");
  const [desc, setDesc] = useState(step?.desc ?? "");
  const [status, setStatus] = useState(step?.status ?? "Active");
  const [badge, setBadge] = useState(step?.badge ?? "Plan");

  if (!isOpen || !step) return null;

  const handleSave = () => {
    // The modal only sends changed fields back; the dashboard keeps the full step list state.
    onSave?.({
      id: step.id,
      label: title,
      desc,
      badge,
      status,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-130 rounded-2xl border border-white/10 bg-[#0b0f2a] text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="text-lg font-semibold">Edit Node Architecture</h2>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div>
            <label className="text-xs text-gray-400">NODE TITLE</label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-lg border border-white/10 bg-[#0f1535] px-3 py-2 outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-400">DESCRIPTION</label>

            <textarea
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#0f1535] px-3 py-2 outline-none focus:border-indigo-400"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs text-gray-400">CATEGORY</label>

              <select
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/10 bg-[#0f1535] px-3 py-2 outline-none focus:border-indigo-400"
              >
                {/* Renders all Options from the arr */}
                {BADGE_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-400">STATUS</label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/10 bg-[#0f1535] px-3 py-2 outline-none focus:border-indigo-400"
              >
                {/* render all options from the arr */}
                {STATUS_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
          <button
            type="button"
            onClick={onDelete}
            className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300"
          >
            <Trash2 size={16} />
            Delete Node
          </button>

          <div className="flex items-center gap-4">
            <button onClick={onClose} className="text-sm text-gray-400 hover:text-white">
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-semibold hover:opacity-90"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNodeModal;
