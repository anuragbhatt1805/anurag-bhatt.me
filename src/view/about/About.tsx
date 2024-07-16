import { UpdatingSoon } from "../../components/UpdatingSoon"

export const About = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">About</h1>
            <UpdatingSoon />
        </div>
    )
}