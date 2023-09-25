import ResponsiveStep from "./ResponsiveStep"

export default function ResponsiveStepContainer(): JSX.Element {
    return (
        <div className="md:hidden items-center h-[140px]">
            <div className="flex items-center justify-between w-[83%] m-auto">
                <ResponsiveStep text="Cart Review" image="/images/progressBar/primaryImage.svg"></ResponsiveStep>
                <ResponsiveStep text="Checkout" image="/images/progressBar/primaryImage.svg"></ResponsiveStep>
                <ResponsiveStep text="Special Offer" image="/images/progressBar/secondaryImage.svg"></ResponsiveStep>
                <ResponsiveStep text="Confirmation" image="/images/progressBar/thirdImage.svg"></ResponsiveStep>
            </div>
        </div>
    )
}
