import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "./themeProvider"
import { Input } from "./ui/input";
import { useState } from "react";

const tabs: string[] = ["Movies", "Series", "Actors"] as const;

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [activeTab, setActiveTab] = useState<"Movies" | "Series" | "Actors">("Movies");
    return (
        <header className="w-full flex items-center justify-between p-3 border-b border-border">
            <div className="flex gap-4 items-center">
                <h1 className="text-2xl font-semibold">FilmifyHub</h1>
                <Input placeholder="Search..." className="w-sm" />
            </div>

            <div className="flex gap-8 items-center">
                <div>
                    {
                        tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`px-8 py-2 font-semibold border-b-2 duration-200 ${activeTab === tab ? "border-primary" : "border-secondary hover:bg-secondary"}`}
                                onClick={() => setActiveTab(tab as "Movies" | "Series" | "Actors")}
                            >
                                {tab}
                            </button>
                        ))
                    }
                </div>

                <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
                <div className="flex gap-4 items-center">
                    <Button size="lg" variant="ghost">Sign In</Button>
                    <Button size="lg">Sign Up</Button>
                </div>
            </div>
        </header>
    )
}

export default Header