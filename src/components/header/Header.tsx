export default function Header(): JSX.Element {
    return (
        <div className='bg-primaryBlue text-white flex justify-around'>
            <div className='bg-primaryBlue text-white h-[50px] w-[83%] flex items-center justify-between'>
                <div className='h-22px flex justify-center items-center gap-[8px]' >
                    <img src='/images/header/primaryImage.svg'></img>
                    <span className="text-[12px] font-primary font-light">30-DAY SATISFACTION GUARANTEE</span>
                </div>
                <div className='h-22px flex justify-center items-center gap-[8px]' >
                    <img src='/images/header/secondaryImage.svg'></img>
                    <span className="text-[12px] font-primary font-light">FREE DELIVERY ON ORDERS OVER $40.00</span>
                </div>
                <div className='h-22px flex justify-center items-center gap-[8px]' >
                    <img src='/images/header/thirdImage.svg'></img>
                    <span className="text-[12px] font-primary font-light">50.000+ HAPPY CUSTOMERS</span>
                </div>
                <div className='h-22px flex justify-center items-center gap-[8px]' >
                    <img src='/images/header/fourthImage.svg'></img>
                    <span className="text-[12px] font-primary font-light">100% MONEY BACK GUARANTEE</span>
                </div>
            </div>
        </div>
    )
}