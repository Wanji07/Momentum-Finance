import LinearProgress from '@mui/material/LinearProgress';

function Dashboard() {
    return(
        <>
        <div id="container" className="flex flex-col items-center justify-start gap-3 ">
            <section id="overview-container" className="flex flex-col gap-5 w-[88%] max-w-md mx-auto border border-white/5  shadow-md p-6 bg-[#161B22] bg-[radial-gradient(circle_at_top_left,#10b98133,transparent_40%)] rounded-xl">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide">FINANCIAL OVERVIEW</h2>
                </div>
                <h1 className="text-xl font-semibold text-white">Hello, User!</h1>
                <h2 className="text-sm text-white/60">Here's your financial review.</h2>
                <section id="remaining-budget-dashboard" className="w-full mx-auto border border-white/5 flex flex-col gap-2 shadow-md p-6 bg-[#1d2635] bg-[radial-gradient(circle_at_top_right,#3b82f622,transparent_60%)] rounded-xl">
                    <h2 className="text-sm text-white/60">Remaining budget</h2>
                    <h1 className="text-2xl font-semibold text-white">₱12,521</h1>
                    <div id="remaining-budget-bar" className="w-full flex items-center gap-3">
                        <LinearProgress
                            variant="determinate"
                            value={24}
                            sx={{
                                flex: 1,
                                height: 10,
                                borderRadius: 999,
                                backgroundColor: 'rgba(16, 185, 129, 0.18)',
                                boxShadow: 'inset 0 0 0 1px rgba(16, 185, 129, 0.2)',
                                '& .MuiLinearProgress-bar': {
                                    borderRadius: 999,
                                    background: 'linear-gradient(90deg, #34d399 0%, #10b981 55%, #059669 100%)',
                                    boxShadow: '0 0 12px rgba(16, 185, 129, 0.55)',
                                },
                            }}
                        />
                        <h2 className="text-sm font-semibold text-emerald-300">24% used</h2>
                    </div>
                </section>
                <section id="daily-budget-dashboard" className="w-full mx-auto border border-emerald-500/20 flex flex-col gap-2 shadow-md p-6 bg-[#1a2e25] bg-[radial-gradient(circle_at_bottom_right,#10b98122,transparent_60%)] rounded-xl">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xs text-emerald-400/80 font-semibold tracking-wide uppercase">Today's Safe-to-Spend</h2>
                    </div>
                    <h1 className="text-2xl font-semibold text-emerald-300">₱714</h1>
                    <h2 className="text-xs text-emerald-400/70 font-semibold tracking-wide uppercase">For 12 more days</h2>
                </section>
            </section>
            <section id="categories-container" className="flex flex-col gap-5 w-[88%] max-w-md mx-auto border border-white/5  shadow-md p-6 bg-[#161B22] bg-[radial-gradient(circle_at_top_left,#10b98133,transparent_40%)] rounded-xl">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide">CATEGORY BUDGETS</h2>
                </div>
                <div id="category-dashboard" className="w-full mx-auto border border-white/5 flex flex-col gap-3 shadow-md p-6 bg-[#1d2635] bg-[radial-gradient(circle_at_top_right,#3b82f622,transparent_60%)] rounded-xl">
                    <div id="category-card" className="flex flex-col gap-2 group rounded-lg border border-white/10 bg-white/2 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.16)]">
                        <div id="category-header" className="flex items-center justify-between gap-3">
                            <h1 className="flex-1 text-lg font-semibold text-white/90 group-hover:text-emerald-200">🍔 Food</h1>
                            <h2 className="shrink-0 text-xs text-white/40 group-hover:text-emerald-200">₱2,300 / ₱4,000</h2>
                        </div>
                        <div id="remaining-budget-bar" className="w-full flex items-center gap-3">
                            <LinearProgress
                                variant="determinate"
                                value={57}
                                sx={{
                                    flex: 1,
                                    height: 10,
                                    borderRadius: 999,
                                    backgroundColor: 'rgba(16, 185, 129, 0.18)',
                                    boxShadow: 'inset 0 0 0 1px rgba(16, 185, 129, 0.2)',
                                    '& .MuiLinearProgress-bar': {
                                        borderRadius: 999,
                                        background: 'linear-gradient(90deg, #34d399 0%, #10b981 55%, #059669 100%)',
                                        boxShadow: '0 0 12px rgba(16, 185, 129, 0.55)',
                                    },
                                }}
                            />
                            <h2 className="text-sm font-semibold text-emerald-300">57% used</h2>
                        </div>
                    </div>
                    <div id="category-card" className="flex flex-col gap-2 group rounded-lg border border-white/10 bg-white/2 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.16)]">
                        <div id="category-header" className="flex items-center justify-between gap-3">
                            <h1 className="flex-1 text-lg font-semibold text-white/90 group-hover:text-emerald-200">💡 Bills</h1>
                            <h2 className="shrink-0 text-xs text-white/40 group-hover:text-emerald-200">₱4,122 / ₱6,000</h2>
                        </div>
                        <div id="remaining-budget-bar" className="w-full flex items-center gap-3">
                            <LinearProgress
                                variant="determinate"
                                value={68}
                                sx={{
                                    flex: 1,
                                    height: 10,
                                    borderRadius: 999,
                                    backgroundColor: 'rgba(16, 185, 129, 0.18)',
                                    boxShadow: 'inset 0 0 0 1px rgba(16, 185, 129, 0.2)',
                                    '& .MuiLinearProgress-bar': {
                                        borderRadius: 999,
                                        background: 'linear-gradient(90deg, #34d399 0%, #10b981 55%, #059669 100%)',
                                        boxShadow: '0 0 12px rgba(16, 185, 129, 0.55)',
                                    },
                                }}
                            />
                            <h2 className="text-sm font-semibold text-emerald-300">68% used</h2>
                        </div>
                    </div>
                    <div id="create-category" className="flex flex-col gap-2 group rounded-lg border border-white/10 bg-white/2 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/5 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.16)]">
                        <h1 className="text-md font-semibold text-white/70 group-hover:text-emerald-200">+ Create Category</h1>
                    </div>
                </div>
            </section>
            <section id="recent-transactions-dashboard" className=" w-[88%] max-w-md mx-auto border border-red-500/20 flex flex-col gap-2 shadow-md p-6 bg-[#2e1a1a] bg-[radial-gradient(circle_at_bottom_right,#ef444433,transparent_60%)] rounded-xl">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                    <h2 className="text-xs text-red-400/80 font-semibold tracking-wide uppercase">RECENT TRANSACTIONS</h2>
                </div>
                <div id="transactions-cards" className="flex flex-col gap-2 items-center">
                    <div id="transaction-card" className="w-full rounded-lg border border-white/10 bg-[#1f1111] px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full border border-red-400/30 bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-300">
                                F
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-sm font-semibold text-white/90">Jollibee</h3>
                                <p className="text-xs text-white/55">Food • Today 2:14 PM</p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-red-300">-₱245</p>
                    </div>
                    <div id="transaction-card" className="w-full rounded-lg border border-white/10 bg-[#1f1111] px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full border border-red-400/30 bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-300">
                                Th
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-sm font-semibold text-white/90">Shoppee</h3>
                                <p className="text-xs text-white/55">Shopping • Yesterday 5:24 PM</p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-red-300">-₱121</p>
                    </div>
                    <div id="transaction-card" className="w-full rounded-lg border border-white/10 bg-[#1f1111] px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full border border-red-400/30 bg-red-500/20 flex items-center justify-center text-sm font-bold text-red-300">
                                W
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-sm font-semibold text-white/90">Gym</h3>
                                <p className="text-xs text-white/55">Fitness • March 20 9:24 AM</p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold text-red-300">-₱40</p>
                    </div>
                    <div id="view-transactions" className="w-full rounded-lg border border-white/10 bg-[#1f1111] px-4 py-3 flex items-center justify-center">
                        <div className="flex items-center justify-center">
                            <h3 className="text-sm font-semibold text-red-300/60">View all Transactions →</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Dashboard