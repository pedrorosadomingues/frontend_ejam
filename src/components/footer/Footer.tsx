export default function Footer(): JSX.Element {
    return (
        <div className="h-[88px] bg-primaryBlue flex mt-[61px]">
            <div className="flex justify-between items-center w-[83%] m-auto">
                <div className="flex">
                    <span className="capitalize text-[16px] font-light font-primary leading-[22px]">Copyright (c) 2023</span>
                    <img className="ml-[16px] mr-[16px]" src='/images/main/twoelfthImage.svg'/>
                    <span className="lowercase text-[16px] font-light font-primary leading-[22px]">Clarifionsupport@clarifion.com</span>
                </div>
                <div className="flex items-center">
                    <img className="mr-[16px] w-[16px]" src='/images/main/padlock.svg'/>
                    <span className="capitalize text-[16px] font-light font-primary leading-[22px]">Secure 256-bit SSL encryption.</span>
                </div>
            </div>
        </div>
    )
}