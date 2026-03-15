export default function CreateTransaction() {
    const fieldClass =
        "w-full rounded-lg border border-white/10 bg-[#1d2635] px-3 py-2.5 text-sm text-white placeholder:text-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition-all duration-200 focus:border-emerald-400/50 focus:bg-[#1f2c3e] focus:shadow-[0_0_0_3px_rgba(16,185,129,0.12)]";
    const receiptFieldClass =
        "w-full rounded-lg border border-white/10 bg-[#1d2635] px-3 py-2 text-sm text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition-all duration-200 file:mr-3 file:rounded-md file:border-0 file:bg-emerald-500/15 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-emerald-300 hover:file:bg-emerald-500/25 focus:border-emerald-400/50 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.12)]";

    return(
        <div id="container" className="flex flex-col items-center justify-start gap-3">
            <section id="overview-container" className="flex flex-col gap-5 w-[88%] max-w-md mx-auto border border-white/5 shadow-md p-6 bg-[#161B22] bg-[radial-gradient(circle_at_top_left,#10b98133,transparent_40%)] rounded-xl">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                    <h2 className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">Create Transaction</h2>
                </div>

                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="amount" className="text-xs font-semibold tracking-wide text-white/70 uppercase">Amount</label>
                        <input id="amount" type="number" name="amount" placeholder="₱0.00" className={fieldClass} />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="type" className="text-xs font-semibold tracking-wide text-white/70 uppercase">Type</label>
                            <select id="type" name="type" className={fieldClass}>
                                <option value="expense">Expense</option>
                                <option value="income">Income</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="category" className="text-xs font-semibold tracking-wide text-white/70 uppercase">Category</label>
                            <select id="category" name="category" className={fieldClass}>
                                <option>Food</option>
                                <option>Bills</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="receipt" className="text-xs font-semibold tracking-wide text-white/70 uppercase">Receipt (optional)</label>
                        <input id="receipt" type="file" name="receipt" accept="image/*,application/pdf" className={receiptFieldClass} />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label htmlFor="note" className="text-xs font-semibold tracking-wide text-white/70 uppercase">Note</label>
                        <input id="note" type="text" name="note" placeholder="Add a quick note" className={fieldClass} />
                    </div>

                    <button
                        type="submit"
                        className="mt-1 inline-flex items-center justify-center rounded-lg border border-emerald-400/40 bg-emerald-500 px-4 py-2.5 text-sm font-semibold tracking-wide text-emerald-950 shadow-[0_10px_24px_rgba(16,185,129,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400"
                    >
                        Save Transaction
                    </button>
                </form>
            </section>
            <button
                type="button"
                className="w-[88%] max-w-md rounded-lg border border-white/5 bg-[#1d2635] px-4 py-2.5 text-xs font-semibold tracking-[0.14em] text-white/75 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/35 hover:bg-emerald-500/10 hover:text-emerald-200"
            >
                GO BACK HOME
            </button>
        </div>
    )
}