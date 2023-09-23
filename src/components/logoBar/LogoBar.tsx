export default function LogoBar(): JSX.Element {
    return (
        <div className="flex items-end h-[64px] justify-center">
            <div className="flex items-end h-[64px] justify-between w-[83%] ">
                <img className="h-[36px]" src='/images/logoBar/fifthImage.svg'></img>
                <div className="flex items-center justify-between h-[36px] w-[13%]">
                    <img className="h-[32px] w-[43%]" src='/images/logoBar/sixthImage.svg'></img>
                    <img className="h-[32px] w-[43%]" src='/images/logoBar/seventhImage.svg'></img>
                </div>
            </div>
        </div>
    )
}