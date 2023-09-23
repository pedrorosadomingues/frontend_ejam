import StepContainer from "./components/StepContainer"

export default function ProgressBar(): JSX.Element {
    return (
        <div className="flex items-center h-[140px]">
            <div className="flex items-center justify-between w-[83%] h-[60px] m-auto">
                <StepContainer text="Step 1 : Cart Review" image="/images/progressBar/primaryImage.svg"></StepContainer>
                <StepContainer text="Step 2 : Checkout" image="/images/progressBar/primaryImage.svg"></StepContainer>
                <StepContainer text="Step 3 : Special Offer" image="/images/progressBar/secondaryImage.svg"></StepContainer>
                <StepContainer text="Step 4 : Confirmation" image="/images/progressBar/thirdImage.svg"></StepContainer>
            </div>
        </div>
    )
}