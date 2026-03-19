export default function SmartInsights() {
    return (
        <div className="space-y-3 rounded-xl border border-emerald-400/20 bg-[#162233] bg-[radial-gradient(circle_at_top_right,#10b98122,transparent_60%)] p-4 shadow-[0_10px_30px_rgba(16,185,129,0.08)]">
            <h1 className="text-xl font-semibold leading-tight text-white">
                You spent <span className="text-emerald-300">PHP 12,430</span> this month.
            </h1>
            <div className="flex items-center justify-between gap-3 pt-1">
                <p className="text-xs text-white/60">Based on your latest recorded transactions</p>
            </div>
        </div>
    )
}