function HeroPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-88px)] flex-col items-center bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(103,87,255,0.12),transparent_60%)]" />
      <div className="relative z-10 mt-24 max-w-5xl px-6 text-center sm:mt-28">
        <div className="mb-7 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-[0.22em] text-slate-300">
          NEURAL WORKFLOWS 2.0
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.04] tracking-tight md:text-6xl">
          Visualize Your Goals. <br />
          <span className="text-slate-100">Build Your Roadmap.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Turn your ambitions into structured, trackable paths. The world's
          first architectural canvas for professional growth and project
          evolution.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-[#c9d0ff] px-6 py-3 font-semibold text-[#070b1a] transition hover:bg-white">
            Start Planning
          </button>

          <button className="rounded-xl border border-white/12 px-6 py-3 font-medium text-slate-300 transition hover:bg-white/6">
            View Demo
          </button>
        </div>

        <div className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            alt="network"
            className="h-65 w-full object-cover opacity-80"
          />
        </div>

        <div className="mt-16 pb-8">
          <h2 className="text-2xl font-semibold text-slate-200">Engineered for Precision</h2>

          <div className="mx-auto mt-3 h-0.75 w-16 rounded-full bg-indigo-400" />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
