import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Plus, Search, Settings, BarChart2, Map, Flag, Users } from "lucide-react";
import EditNodeModal from "../dashboardfeatures/EditNodeModal";

const SIDEBAR_ITEMS = [
  { icon: Map, label: "Roadmaps", active: true },
  { icon: Flag, label: "Milestones" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Users, label: "Team" },
  { icon: Settings, label: "Settings", to: "/settingpage" },
];

const CARD_WIDTH = 256;
const CARD_HEIGHT = 164;
const COLUMN_GAP = 36;
const ROW_GAP = 82;
const CANVAS_PADDING = 24;
const COLUMN_COUNT = 4;

function createStep(id, label, desc, status, badge, active = false) {
  return { id, label, desc, status, badge, active };
}

const initialSteps = [
  createStep(
    "1",
    "Choose Destination",
    "Pick the city or country, shortlist travel dates, and confirm the overall vibe of the trip.",
    "Completed",
    "Plan",
  ),
  createStep(
    "2",
    "Set Budget",
    "Lock a rough budget for flights, hotel, food, local transport, and activities.",
    "Completed",
    "Budget",
  ),
  createStep(
    "3",
    "Book Flights",
    "Compare routes, choose the best timing, and secure round-trip tickets.",
    "Completed",
    "Travel",
  ),
  createStep(
    "4",
    "Reserve Stay",
    "Select the hotel or stay based on location, safety, budget, and nearby access.",
    "Active",
    "Stay",
    true,
  ),
  createStep(
    "5",
    "Plan Activities",
    "Create a short list of must-visit places, experiences, and free-time options.",
    "Active",
    "Explore",
  ),
  createStep(
    "6",
    "Prepare Documents",
    "Keep IDs, tickets, bookings, and payment essentials ready before departure.",
    "Pending",
    "Ready",
  ),
];

function getStepPosition(index) {
  const row = Math.floor(index / COLUMN_COUNT);
  const indexInRow = index % COLUMN_COUNT;
  // Every other row is reversed to create the zig-zag roadmap layout.
  const column = row % 2 === 0 ? indexInRow : COLUMN_COUNT - 1 - indexInRow;

  return {
    left: CANVAS_PADDING + column * (CARD_WIDTH + COLUMN_GAP),
    top: CANVAS_PADDING + row * (CARD_HEIGHT + ROW_GAP),
  };
}

function buildConnectorPath(from, to) {
  const fromCenterY = from.top + CARD_HEIGHT / 2;
  const toCenterY = to.top + CARD_HEIGHT / 2;
  const sameRow = from.top === to.top;

  if (sameRow) {
    // Same-row arrows can point left or right depending on the reversed row.
    const goingRight = to.left > from.left;
    const startX = goingRight ? from.left + CARD_WIDTH : from.left;
    const endX = goingRight ? to.left : to.left + CARD_WIDTH;

    return `M ${startX} ${fromCenterY} L ${endX} ${toCenterY}`;
  }

  const startX = from.left + CARD_WIDTH / 2;
  const endX = to.left + CARD_WIDTH / 2;
  const startY = from.top + CARD_HEIGHT;
  const endY = to.top;
  const midY = startY + ROW_GAP / 2;

  return `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`;
}

function DashboardHeroPage() {
  const { state } = useLocation();
  const [open, setOpen] = useState(false);
  const [steps, setSteps] = useState(initialSteps);
  const [selectedStepId, setSelectedStepId] = useState(initialSteps[0]?.id ?? null);
  const roadmapTitle =
    state?.roadmapTitle ||
    localStorage.getItem("pathforge-roadmap-title") ||
    "Project Flow";

  // Position data is derived on each render so the visual order always matches the step list.
  const positionedSteps = steps.map((step, index) => ({ ...step, ...getStepPosition(index) }));
  const selectedStep = steps.find((step) => step.id === selectedStepId) ?? null;

  const connectors = positionedSteps.slice(0, -1).map((step, index) => ({
    id: `${step.id}-${positionedSteps[index + 1].id}`,
    path: buildConnectorPath(step, positionedSteps[index + 1]),
  }));

  const canvasWidth = CANVAS_PADDING * 2 + COLUMN_COUNT * CARD_WIDTH + (COLUMN_COUNT - 1) * COLUMN_GAP;
  const rowCount = Math.max(1, Math.ceil(positionedSteps.length / COLUMN_COUNT));
  const canvasHeight = CANVAS_PADDING * 2 + rowCount * CARD_HEIGHT + (rowCount - 1) * ROW_GAP;

  const addStep = () => {
    const newId = String(steps.length + 1);

    setSteps([
      ...steps,
      createStep(
        newId,
        `New Step ${newId}`,
        `This is the planning block for step ${newId}.`,
        "Pending",
        "Planned",
      ),
    ]);
  };

  const handleOpenStep = (stepId) => {
    setSelectedStepId(stepId);
    setOpen(true);
  };

  const handleDeleteStep = () => {
    if (!selectedStepId) {
      return;
    }

    // Rebuild the visible list after deletion so numbering and connectors stay in sync.
    const updatedSteps = steps.filter((step) => step.id !== selectedStepId);
    setSteps(updatedSteps);
    setSelectedStepId(updatedSteps[0]?.id ?? null);
    setOpen(false);
  };

  const handleSaveStep = (updatedStep) => {
    setSteps(
      steps.map((step) =>
        step.id === updatedStep.id ? { ...step, ...updatedStep } : step,
      ),
    );

    setOpen(false);
  };

  return (
    <div className="flex h-[calc(100vh-72px)] text-white">
      <aside className="flex w-64 flex-col justify-between border-r border-white/10 bg-[#0a0f22] px-5 py-6">
        <div>
          <div className="mb-8">
            <h1 className="text-lg font-semibold tracking-wide text-white">PATHFORGE</h1>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">Pro Plan</p>
          </div>

          <button
            type="button"
            onClick={addStep}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
          >
            <Plus size={16} /> Add Goal
          </button>

          <div className="mt-6 flex items-center rounded-xl border border-white/10 bg-[#11182f] px-3 py-2.5">
            <Search size={16} className="text-slate-500" />
            <input
              placeholder="Search steps..."
              className="ml-2 w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
            />
          </div>

          <div className="mt-6 space-y-3">
            {SIDEBAR_ITEMS.map(({ icon: Icon, label, active, to }) => (
              <SidebarItem key={label} icon={<Icon size={16} />} label={label} active={active} to={to} />
            ))}
          </div>
        </div>
      </aside>

      <section className="flex-1 bg-[#070b18] px-6 py-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Roadmap View</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{roadmapTitle}</h2>
            <p className="mt-2 text-sm text-slate-400">
              Add steps to build a clear roadmap. Click any step to open its details.
            </p>
          </div>
        </div>

        <div className="h-[calc(100%-110px)] overflow-auto rounded-2xl border border-white/10 bg-[#0d1328] p-5">
          <div className="relative min-h-full" style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}>
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <marker
                  id="step-arrow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="5"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#818cf8" />
                </marker>
              </defs>

              {connectors.map((connector) => (
                <path
                  key={connector.id}
                  d={connector.path}
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#step-arrow)"
                />
              ))}
            </svg>

            {positionedSteps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onClick={() => handleOpenStep(step.id)}
                className={`absolute flex flex-col justify-between rounded-2xl border px-5 py-4 text-left transition ${
                  step.active
                    ? "border-indigo-400/40 bg-[#141c35]"
                    : "border-white/10 bg-[#10172d] hover:border-white/20"
                }`}
                style={{
                  width: `${CARD_WIDTH}px`,
                  height: `${CARD_HEIGHT}px`,
                  left: `${step.left}px`,
                  top: `${step.top}px`,
                }}
              >
                <div>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] ${
                      step.active ? "bg-white/10 text-slate-200" : "bg-indigo-500 text-white"
                    }`}
                  >
                    {step.badge}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold leading-snug text-white">{step.label}</h3>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">{step.status}</p>
                  <span className="mt-1 block text-xs text-slate-500">Step {index + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <EditNodeModal
        key={selectedStep?.id ?? "empty-step"}
        isOpen={open}
        step={selectedStep}
        onClose={() => setOpen(false)}
        onDelete={handleDeleteStep}
        onSave={handleSaveStep}
      />
    </div>
  );
}

export default DashboardHeroPage;

function SidebarItem({ icon, label, active, to }) {
  const classes = `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
    active ? "bg-[#151d38] text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
  }`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <div className={classes}>
      {icon}
      <span>{label}</span>
    </div>
  );
}
