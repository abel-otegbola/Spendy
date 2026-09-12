import { ChartNoAxesCombined, CreditCard } from "lucide-react"

export default function BankingCard() {
  return (
    <div className="order-3 flex w-full max-w-[330px] flex-col gap-4 rounded-2xl border border-border/[0.5] bg-white dark:bg-[#101010] p-5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.16)] absolute md:scale-100 scale-60 sm:right-0 -right-20 sm:top-[100px] top-[60px] sm:order-none sm:w-[260px] z-2">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] opacity-50">Banking</p>
          <h3 className="mt-1 text-lg font-semibold">Money, in motion</h3>
        </div>
        <CreditCard className="size-5 opacity-70" strokeWidth={1.5} />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs opacity-50">Available balance</p>
          <p className="mt-1 text-2xl font-semibold">$8,420.60</p>
        </div>
        <ChartNoAxesCombined className="size-8 opacity-60" strokeWidth={1.25} />
      </div>
      <div className="flex items-center justify-between border-t border-white/15 pt-3 text-xs">
        <span className="opacity-50">Last transfer</span>
        <span className="font-medium">Completed</span>
      </div>
    </div>
  )
}
