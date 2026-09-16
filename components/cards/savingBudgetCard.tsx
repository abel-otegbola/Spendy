import { PiggyBank } from "lucide-react"

export default function SavingBudgetCard() {
  return (
    <div className="relative z-1 md:flex hidden w-full max-w-[330px] flex-col gap-4 rounded-2xl border border-white/40 bg-white p-5 text-left shadow-[0_15px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/20 dark:bg-[#101010]/80 sm:order-none sm:w-[260px]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] opacity-50">Saving & budgeting</p>
          <h3 className="mt-1 text-lg font-semibold">Stay on course</h3>
        </div>
        <PiggyBank className="size-5 opacity-60" strokeWidth={1.5} />
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between text-xs opacity-60">
          <span>Monthly goal</span>
          <span>$840 / $1,000</span>
        </div>
        <div className="h-1 rounded-full bg-black/[0.08] dark:bg-white/[0.1]">
          <div className="h-full w-[84%] rounded-full bg-green-400" />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-black/[0.08] pt-3 text-xs dark:border-white/[0.1]">
        <span className="opacity-60">Spending this month</span>
        <span className="font-semibold">On track</span>
      </div>
    </div>
  )
}
