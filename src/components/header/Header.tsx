export default function Header() {
    return (
        <div className='bg-primaryBlue text-white h-[50px] flex items-center justify-around'>
                <div className='h-22px flex justify-center items-center gap-[8px]' >
                    <img src='/images/primaryImage.svg'></img>
                    <span className="text-[12px] fontFamily-primary">30-DAY SATISFACTION GUARANTEE</span>
                </div>
                <div className='h-22px flex justify-center items-center gap-[8px]' >
                    <img src='/images/secondaryImage.svg'></img>
                    <span className="text-[12px] ">3Free delivery on orders over $40.00</span>
                </div>
                <div className='h-22px flex justify-center items-center gap-[8px]' >
                    <img src='/images/thirdImage.svg'></img>
                    <span className="text-[12px]">50.000+ HAPPY CUSTOMERS</span>
                </div>
                <div className='h-22px flex justify-center items-center gap-[8px]' >
                    <img src='/images/fourthImage.svg'></img>
                    <span className="text-[12px]">100% Money Back Guarantee</span>
                </div>
            </div>
    )
}