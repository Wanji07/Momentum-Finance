import { Cell, Pie, PieChart, PieLabelRenderProps, ResponsiveContainer } from 'recharts'

type CategoryItem = {
    category: string
    value: number
}

type TopCategoriesCardProps = {
    data: CategoryItem[]
    pieColors: string[]
    categoryEmojis: Record<string, string>
}

const RADIAN = Math.PI / 180

const getCompactCategoryLabel = (label: string) =>
    label.length > 9 ? `${label.slice(0, 8)}.` : label

const formatCategoryName = (category: string) =>
    category.charAt(0).toUpperCase() + category.slice(1)

export default function TopCategoriesCard({ data, pieColors, categoryEmojis }: TopCategoriesCardProps) {
    const totalValue = data.reduce((sum, item) => sum + item.value, 0)

    const getPercentage = (value: number) => {
        if (totalValue === 0) return 0
        return Math.round((value / totalValue) * 100)
    }

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name }: PieLabelRenderProps) => {
        if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
            return null
        }

        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const ncx = Number(cx)
        const ncy = Number(cy)
        const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN)
        const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN)

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > ncx ? 'start' : 'end'}
                dominantBaseline="central"
                fontSize={10}
                fontWeight={600}
            >
                {getCompactCategoryLabel(String(name ?? ''))}
            </text>
        )
    }

    return (
        <section id="top-categories-dashboard" className="overflow-hidden flex flex-col w-full mx-auto border border-white/5 gap-2 shadow-md p-6 bg-[#1d2635] bg-[radial-gradient(circle_at_top_right,#3b82f622,transparent_60%)] rounded-xl">
            <div className="h-50 w-full">
                <ResponsiveContainer width="100%" height="110%">
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="category" label={renderCustomizedLabel} labelLine={false}>
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
                {data.map((item, index) => (
                    <div key={item.category} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <span className="text-sm font-medium text-white/90">
                            {categoryEmojis[item.category]}  {formatCategoryName(item.category)} - {getPercentage(item.value)}%
                        </span>
                        <div
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: pieColors[index % pieColors.length] }}
                        ></div>
                    </div>
                ))}
            </div>
        </section>
    )
}