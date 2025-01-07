import { Footer } from "../area/Footer"
import { NavBar } from "../area/NavBar"

export const DefaultView = ({children}: Readonly<{children: React.ReactNode}>|any) => {
    return (
        <div className="flex flex-col min-h-screen justify-between items-center overflow-y-auto">
            <div className="flex flex-col pb-16 min-w-[50%] max-w-6xl">
                <NavBar />
                {children}
            </div>
            <Footer />
        </div>
    )
}