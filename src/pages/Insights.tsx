import { useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import CategoryBreakdownCard from '../components/insights/CategoryBreakdownCard';
import TimeFilterCard from '../components/insights/TimeFilterCard';
import TopCategoriesCard from '../components/insights/TopCategoriesCard';
import SmartInsights from '../components/insights/SmartInsights'

export default function Insights() {

    const data =  [
        { category: "food", value: 60},
        { category: "transportation", value: 40},
    ]

    const categoryEmojis: { [key: string]: string } = {
        food: '🍔',
        transportation: '🚗',
    }

    const pieColors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']
    
    
    const [timeFilter, setTimeFilter] = useState<'week' | 'month' | 'year'>('week') 

    return(
        <>
        <div id="container" className="flex flex-col items-center justify-start gap-3 ">
            <section id="insights-container" className="flex flex-col gap-5 w-[88%] max-w-md mx-auto border border-white/5  shadow-md p-6 bg-[#161B22] bg-[radial-gradient(circle_at_top_left,#10b98133,transparent_40%)] rounded-xl">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide">INSIGHTS</h2>
                </div>
                <TimeFilterCard timeFilter={timeFilter} onTimeFilterChange={setTimeFilter} />
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide">SPENDING OVERVIEW</h2>
                </div>
                <section id="spending-overview-dashboard" className="flex flex-col w-full mx-auto border border-white/5 gap-2 shadow-md p-6 bg-[#1d2635] bg-[radial-gradient(circle_at_top_right,#3b82f622,transparent_60%)] rounded-xl">
                    <h1 className="text-xl text-white/90 font-semibold">₱12,430 Spent</h1>
                    <LinearProgress
                        aria-label="Monthly budget usage"
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
                    <h3 className="text-sm text-white/60">62% of Monthly Budget</h3>
                </section>
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide">CATEGORY BREAKDOWN</h2>
                </div>
                <CategoryBreakdownCard />
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide">TOP SPENDING CATEGORIES</h2>
                </div>
                <TopCategoriesCard data={data} pieColors={pieColors} categoryEmojis={categoryEmojis} />
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide">SMART INSIGHTS</h2>
                </div>
                <SmartInsights />
            </section>
        </div>
        </>
    )
}