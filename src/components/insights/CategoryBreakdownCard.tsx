import LinearProgress from '@mui/material/LinearProgress'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export default function CategoryBreakdownCard() {
    return (
        <section id="category-breakdown-dashboard" className="flex flex-col w-full mx-auto border border-white/5 gap-2 shadow-md p-6 bg-[#1d2635] bg-[radial-gradient(circle_at_top_right,#3b82f622,transparent_60%)] rounded-xl">
            <div id="category-breakdown-card" className="w-full rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-4 shadow-[0_8px_24px_rgba(16,185,129,0.08)]">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg text-white/90 font-semibold">🍔 Food</h1>
                        <h3 className="text-xs uppercase tracking-wide text-white/50">Largest category this month</h3>
                    </div>
                    <div className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                        62%
                    </div>
                </div>
                <p className="mt-3 text-2xl font-semibold text-white">₱4,200</p>
                <div className="mt-3">
                    <LinearProgress
                        aria-label="Food category usage"
                        variant="determinate"
                        value={62}
                        sx={{
                            width: '100%',
                            height: 10,
                            borderRadius: 999,
                            overflow: 'hidden',
                            backgroundColor: 'rgba(16, 185, 129, 0.18)',
                            boxShadow: 'inset 0 0 0 1px rgba(16, 185, 129, 0.2)',
                            '& .MuiLinearProgress-bar': {
                                borderRadius: 999,
                                background: 'linear-gradient(90deg, #34d399 0%, #10b981 55%, #059669 100%)',
                                boxShadow: '0 0 12px rgba(16, 185, 129, 0.55)',
                            },
                        }}
                    />
                </div>
                <h4 className="mt-2 text-xs font-medium tracking-wide text-white/60">62% of category budget used</h4>
            </div>
            <Stack
                spacing={1.5}
                className="mt-2 rounded-xl border border-emerald-400/15 bg-[#0f1724]/65 px-3 py-3"
            >
                <Pagination
                    count={2}
                    shape="rounded"
                    size="small"
                    sx={{
                        '& .MuiPagination-ul': {
                            justifyContent: 'center',
                            gap: '0.35rem',
                            flexWrap: 'nowrap',
                        },
                        '& .MuiPaginationItem-root': {
                            minWidth: 30,
                            height: 30,
                            margin: 0,
                            borderRadius: 8,
                            border: '1px solid rgba(148, 163, 184, 0.28)',
                            color: 'rgba(226, 232, 240, 0.86)',
                            backgroundColor: 'rgba(15, 23, 36, 0.85)',
                            transition: 'all 160ms ease',
                        },
                        '& .MuiPaginationItem-root:hover': {
                            borderColor: 'rgba(16, 185, 129, 0.55)',
                            backgroundColor: 'rgba(16, 185, 129, 0.12)',
                            color: '#d1fae5',
                        },
                        '& .MuiPaginationItem-root.Mui-selected': {
                            borderColor: 'rgba(52, 211, 153, 0.9)',
                            background: 'linear-gradient(135deg, rgba(52,211,153,0.28), rgba(16,185,129,0.45))',
                            color: '#ecfdf5',
                            boxShadow: '0 0 0 1px rgba(16, 185, 129, 0.35), 0 6px 14px rgba(16, 185, 129, 0.22)',
                            fontWeight: 700,
                        },
                        '& .MuiPaginationItem-ellipsis': {
                            borderColor: 'transparent',
                            backgroundColor: 'transparent',
                            color: 'rgba(148, 163, 184, 0.75)',
                        },
                    }}
                />
            </Stack>
        </section>
    )
}