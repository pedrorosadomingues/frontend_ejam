export default function LogoBar(): JSX.Element {
    return (
        <div className="flex items-end h-[64px] gap-[56%] justify-around ">
            <img className="h-[36px]" src='/images/fifthImage.svg'></img>
            <div className="flex items-center justify-between h-[36px] w-[13%]">
                <img className="h-[32px] w-[43%]" src='/images/sixthImage.svg'></img>
                <img className="h-[32px] w-[43%]" src='/images/seventhImage.svg'></img>
            </div>
        </div>
    )
}