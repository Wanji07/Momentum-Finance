type TimeFilter = 'week' | 'month' | 'year'

type TimeFilterCardProps = {
    timeFilter: TimeFilter
    onTimeFilterChange: (filter: TimeFilter) => void
}

export default function TimeFilterCard({ timeFilter, onTimeFilterChange }: TimeFilterCardProps) {
    const getFilterLabelClass = (filter: TimeFilter) => {
        const baseClass = 'cursor-pointer rounded-md border px-2 py-1.5 text-center text-xs font-semibold tracking-wide transition-colors'
        const activeClass = 'border-emerald-400/40 bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/20'
        const inactiveClass = 'border-white/10 bg-white/5 text-white/75 hover:bg-white/10'

        return `${baseClass} ${timeFilter === filter ? activeClass : inactiveClass}`
    }

    return (
        <section id="time-filter-menu" className="w-full mx-auto border border-white/5 flex flex-col gap-2 shadow-md p-6 bg-[#1d2635] bg-[radial-gradient(circle_at_top_right,#3b82f622,transparent_60%)] rounded-xl">
            <h2 className="text-sm text-white/60">Time Filter</h2>
            <form className="mt-1 grid grid-cols-3 gap-2" aria-label="Time filter">
                <label className={getFilterLabelClass('week')}>
                    <input
                        type="radio"
                        name="timeFilter"
                        value="week"
                        className="sr-only"
                        checked={timeFilter === 'week'}
                        onChange={() => onTimeFilterChange('week')}
                    />
                    This Week
                </label>
                <label className={getFilterLabelClass('month')}>
                    <input
                        type="radio"
                        name="timeFilter"
                        value="month"
                        className="sr-only"
                        checked={timeFilter === 'month'}
                        onChange={() => onTimeFilterChange('month')}
                    />
                    This Month
                </label>
                <label className={getFilterLabelClass('year')}>
                    <input
                        type="radio"
                        name="timeFilter"
                        value="year"
                        className="sr-only"
                        checked={timeFilter === 'year'}
                        onChange={() => onTimeFilterChange('year')}
                    />
                    This Year
                </label>
            </form>
        </section>
    )
}
