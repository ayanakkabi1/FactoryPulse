export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f8f4ef] font-sans text-[#2d1d0c]">
      {/* ── Header ── */}
      <div className="px-[42px] pt-8 max-[900px]:px-4 max-[900px]:pt-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="m-0 mb-1 text-[38px] font-semibold leading-[1.3] tracking-[-2px] max-[600px]:text-[28px]">Vue d'ensemble</h1>
            <p className="m-0 text-[13px] font-extralight tracking-[-0.65px]">Suivez l'état de vos machines en temps réel</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex cursor-pointer items-center gap-1.5 rounded-[20px] border-[1.5px] border-[#ccc] bg-transparent px-3.5 py-1.5 text-[13px] font-extralight text-[#2d1d0c]">
              This Month
              <svg viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="#2d1d0c" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="flex cursor-pointer items-center gap-1.5 rounded-[20px] border-0 bg-[#6e473b] px-4 py-[7px] text-[13px] font-extralight text-white">
              <svg viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* ── Machine indicators ── */}
      <div className="grid grid-cols-3 gap-5 px-[42px] pt-6 max-[900px]:grid-cols-2 max-[900px]:p-4 max-[600px]:grid-cols-1">
        <div className="relative flex min-h-[100px] flex-col rounded-2xl bg-[#6e473b] p-5 text-white">
          <div className="flex items-start justify-between">
            <span className="text-[13px] font-extralight tracking-[-0.7px]">Total des machines</span>
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M7 8h10M7 12h10M7 16h6" />
              </svg>
            </span>
          </div>
          <span className="my-1 text-[27px] font-semibold leading-[38px] tracking-[-1.5px]">24</span>
          <span className="text-[11px] font-extralight tracking-[-0.55px] opacity-85">Machines enregistrées</span>
        </div>

        <div className="relative flex min-h-[100px] flex-col rounded-2xl bg-[#ebe4db] p-5 text-[#2d1d0c]">
          <div className="flex items-start justify-between">
            <span className="text-[13px] font-extralight tracking-[-0.7px]">Machines en fonctionnement</span>
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[rgba(45,29,12,0.1)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
          </div>
          <span className="my-1 text-[27px] font-semibold leading-[38px] tracking-[-1.5px]">18</span>
          <span className="text-[11px] font-extralight tracking-[-0.55px] opacity-85">En activité actuellement</span>
        </div>

        <div className="relative flex min-h-[100px] flex-col rounded-2xl bg-[#ebe4db] p-5 text-[#2d1d0c]">
          <div className="flex items-start justify-between">
            <span className="text-[13px] font-extralight tracking-[-0.7px]">Machines en panne</span>
            <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[rgba(45,29,12,0.1)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 8l8 8M16 8l-8 8" />
              </svg>
            </span>
          </div>
          <span className="my-1 text-[27px] font-semibold leading-[38px] tracking-[-1.5px]">6</span>
          <span className="text-[11px] font-extralight tracking-[-0.55px] opacity-85">Nécessitent une intervention</span>
        </div>
      </div>

    </div>
  );
}
