interface StepContainerProps {
    text: string;
    image: string;
  }

export default function StepContainer({text, image}: StepContainerProps ): JSX.Element {
  return (
    <div className="flex items-center justify-around h-[60px] gap-[20px] hidden md:flex">
      <img src={image}></img>
      <span className={`font-primary text-[20px] ${text === 'Step 3 : Special Offer' ? 'font-hard' : 'font-light'}  text-black`}>
        {text}
      </span>
    </div>
  );
}