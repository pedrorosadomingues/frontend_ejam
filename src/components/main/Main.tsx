import LeftColumn from "./components/leftColumn/LeftColumn";
import RightColumn from "./components/rightColumn/RightColumn";

export default function Main(): JSX.Element {
    return (
        <div className=" flex justify-center w-[83%] m-auto bg-fourthGray ">
            <LeftColumn />
            <RightColumn />
        </div>
    )
}