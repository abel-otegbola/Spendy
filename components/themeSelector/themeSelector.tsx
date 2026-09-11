'use client'
import { useSyncExternalStore } from 'react';
import { ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme()
    const mounted = useSyncExternalStore(
        () => () => undefined,
        () => true,
        () => false,
    )

    const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor
    return (
        <div className="relative md:flex hidden items-center">
            <ThemeIcon aria-hidden="true" className="pointer-events-none absolute left-2 size-3.5 opacity-70" />
            <select
                aria-label="Select theme"
                value={mounted ? theme : "system"}
                onChange={(event) => setTheme(event.target.value)}
                className="h-8 appearance-none rounded-md border border-border outline-none bg-background py-1 pl-7 pr-7 text-xs font-medium capitalize"
            >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <ChevronDown size={12} className="absolute right-2 text-[10px] opacity-60" />
        </div>
    )
}