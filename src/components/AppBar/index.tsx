import { CircleHelp, EyeOff, UserRound } from "lucide-react"

interface AppBarProps {

}

export const AppBar = () => {
    return (
        <div className="flex justify-between">
            <img
                src="https://avatars.githubusercontent.com/u/82860253?s=96&v=4"
                className="rounded-full w-12 h-12 object-cover"
            />

            <div className="flex justify-between gap-6">
                <button>
                    <EyeOff className="text-zinc-50 " />
                </button>
                <button>
                    <CircleHelp className="text-zinc-50" />
                </button>
                <button>
                    <UserRound className="text-zinc-50" />
                </button>
      
            </div>

        </div>
    )
}