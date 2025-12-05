import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "./themeProvider"

const Header = () => {
    const { theme, setTheme } = useTheme();
    return (
        <header className="w-full flex items-center justify-between p-4 border-b border-border">
            <h1 className="text-2xl font-semibold">FilmifyHub</h1>

            <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </header>
    )
}

export default Header