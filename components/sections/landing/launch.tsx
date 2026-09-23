import { Apple, Check, CloudUpload, Globe, Play, Rocket, Smartphone } from "lucide-react";

const stores = [
    { name: "App Store", icon: <Apple size={14} />, status: "Ready" },
    { name: "Google Play", icon: <Play size={14} fill="currentColor" />, status: "Ready" },
];

export default function LaunchCard() {
    return (
        <div className="flex w-[75%] flex-col gap-4 mx-auto">
            <div className="relative p-[1px] overflow-hidden w-[360px] mx-auto rounded-[24px] bg-[#101010]">
              <span className="absolute top-0 left-0 bg-gradient-to-r from-green-400 via-green-300 to-lime-500 w-[70%] translate-x-[10%] h-[130%] z-1 blur-[8px] animate-spin-slow"></span>
                <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[20px] border border-border/[0.6] bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:bg-[#101010] z-2">
                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-green-400/[0.12] blur-3xl" />
                    <div className="relative flex items-center justify-between border-b border-border/[0.6] pb-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-[#101010] bg-[url('/bg.svg')] bg-cover bg-center">
                                <Rocket size={15} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold">Aurora Finance</p>
                                <p className="text-[9px] opacity-45">Version 1.0.0</p>
                            </div>
                        </div>
                        <span className="flex items-center gap-1 rounded-full bg-green-400/[0.15] px-2 py-1 text-[9px] font-semibold text-green-600 dark:text-green-300">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" /> Live build
                        </span>
                    </div>

                    <div className="relative mt-4 overflow-hidden rounded-xl bg-white dark:bg-[#101010] bg-[url('/bg.svg')] bg-cover bg-center  p-4 text-white">
                        <div className="absolute right-3 top-3 opacity-30">
                            <CloudUpload className="animate-bounce" size={22} />
                        </div>
                        <p className="text-[9px] tracking-[0.16em] text-green-300/80">Deploying to production</p>
                        <p className="mt-2 text-lg font-semibold tracking-tight">Your app is ready to ship.</p>
                        <div className="mt-5 flex items-center justify-between text-[9px] opacity-60">
                            <span>Uploading build</span>
                            <span>78%</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.15]">
                            <div className="h-full w-[78%] animate-pulse rounded-full bg-green-300" />
                        </div>
                    </div>

                    <div className="mt-3 flex flex-col gap-2">
                        {stores.map((store) => (
                            <div key={store.name} className="flex items-center justify-between rounded-lg border border-border/[0.7] px-3 py-2">
                                <div className="flex items-center gap-2">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-border/[0.35]">{store.icon}</span>
                                    <span className="text-[10px] font-medium">{store.name}</span>
                                </div>
                                <span className="flex items-center gap-1 text-[9px] text-green-600 dark:text-green-300">
                                    <Check size={11} /> {store.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-3 flex items-center gap-2 rounded-lg bg-green-300/[0.15] p-2 text-[9px] text-green-700 dark:text-green-200">
                        <Globe size={13} />
                        <span>Review complete. Publishing worldwide.</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 opacity-50">
                <Smartphone size={14} />
                <span className="text-[10px] font-medium tracking-[0.12em]">One build. Every platform.</span>
            </div>
        </div>
    );
}

export function LaunchIcons() {
    return (
        <div className="flex flex-1 items-center opacity-50">
            <div className="relative p-[2px] overflow-hidden rounded-[20px] w-fit">
                <span className="absolute top-0 left-0 bg-gradient-to-r from-border to-green-500 w-[120%] h-[120%] -translate-x-[10%] z-1 blur-[8px] animate-spin-fast"></span>

                <div className={`relative flex gap-4  bg-white dark:bg-[#121212] items-center justify-center text-[10px] font-medium tracking-[0.12em] w-fit p-4 border border-border rounded-[18px] z-2`}>
                    <Rocket size={48} strokeWidth={0.5} />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-[40%]">
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
                <div className="w-full h-[2px] bg-border/[0.4] rounded-full"></div>
            </div>
            <div className="relative p-[2px] overflow-hidden rounded-[20px] w-fit">
                <span className="absolute top-0 left-0 bg-gradient-to-r from-border to-green-500 w-[120%] h-[120%] -translate-x-[10%] z-1 blur-[8px] animate-spin-fast"></span>

                <div className={`relative flex gap-4  bg-white dark:bg-[#121212] items-center justify-center text-[10px] font-medium tracking-[0.12em] w-fit p-4 border border-border rounded-[18px] z-2`}>
                    <CloudUpload size={48} strokeWidth={0.5} />
                </div>
            </div>

        </div>
    );
}
