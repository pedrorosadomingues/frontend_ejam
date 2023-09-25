import { StepContainerProps } from "../../StepContainerProps"

export default function ResponsiveStep({ text, image }: StepContainerProps): JSX.Element {
    return (
        <div className="flex flex-col ">
            <img className="h-[20px]" src={image} />
            <span className={`font-primary text-[12px] ${text === 'Special Offer' ? 'font-hard' : 'font-light'}  text-black mt-[5px]`}>
                {text}
            </span>
        </div>
    )
}