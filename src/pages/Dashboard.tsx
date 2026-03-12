function Dashboard() {
    return(
        <>
        <div id="container" className="flex flex-col items-center justify-start gap-2 ">
            <section id="welcome-message" className="w-[88%] max-w-md mx-auto border border-white/5 flex flex-col gap-2 shadow-md p-6 bg-[#161B22] bg-[radial-gradient(circle_at_top_left,#10b98133,transparent_40%)] rounded-xl">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide">FINANCIAL OVERVIEW</h2>
                </div>
                <h1 className="text-xl font-semibold text-white">Hello, User!</h1>
                <h2 className="text-sm text-white/60">Here's your financial review.</h2>
            </section>
        </div>
        </>
    )
}

export default Dashboard