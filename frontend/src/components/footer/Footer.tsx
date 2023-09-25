export default function Footer(): JSX.Element {
    return (
        <footer className="md:h-[88px] h-[102px] bg-primaryBlue flex md:mt-[61px] mt-[32px]">
            <div className="flex flex-col md:flex-row justify-between items-center w-[83%] m-auto">
                <div className="flex items-center">
                    <span className="capitalize text-[12px] md:text-[16px] font-light font-primary md:leading-[22px] leading-[16px]">Copyright (c) 2023</span>
                    <img className="ml-[12px] md:ml-[16px]  md:mr-[16px] mr-[12px] h-[14px] md:h-[16px]" src='/images/main/twoelfthImage.svg'/>
                    <span className="lowercase text-[12px] md:text-[16px] font-light font-primary md:leading-[22px] leading-[16px]">Clarifionsupport@clarifion.com</span>
                </div>
                <div className="flex items-center mt-[12px]  md:mt-[0px]">
                    <img className="mr-[12px] md:mr-[16px] md:w-[16px] w-[13px]" src='/images/main/footerPadlock.svg'/>
                    <span className="capitalize text-[12px] md:text-[16px] font-light font-primary md:leading-[22px] leading-[16px]">Secure 256-bit SSL encryption.</span>
                </div>
            </div>
        </footer>
    )
}