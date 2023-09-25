export default function ResponsiveHeader() {
    return (
        <header className="bg-primaryBlue h-[42px] flex justify-center items-center block md:hidden">
            <div className="flex w-[83%] justify-around">
                <img src='/images/header/leftArrow.svg' />
                <div className="flex justify-center items-center">
                    <img className= 'h-[20px]' src='/images/header/primaryImage.svg' />
                    <span className="capitalize text-[12px] font-primary font-normal leading-[12px] text-[white] ml-[8px]">30-DAY SATISFACTION GUARANTEE</span>
                </div>
                <img src='/images/header/rightArrow.svg'/>
            </div>
        </header>
    )
}