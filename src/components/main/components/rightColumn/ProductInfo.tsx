export default function ProductInfo(): JSX.Element {
    return (
        <div className="w-[100%]">
            <h1 className="text-black text-[32px] text-left font-primary font-light min-w-full "><span className="text-secondaryBlue">ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className="text-secondaryBlue"> $14 Each</span> ($84.00 Total!)</h1>
            <div className="mt-[32px]">
                <div className="flex">
                    <img src='images/main/fifthImage.svg'></img>
                    <div className="ml-[24px] w-[71%] gap-[12px] flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-primary text-[20px] font-light leading-[28px] text-black">Clarifion Air Ionizer</span>
                            <div>
                                <span className="font-primary text-[16px] leading-[21px] font-medium text-sixthGray mr-[10px] line-through">$180</span>
                                <span className="font-primary text-[22px] leading-[30px] font-medium text-secondaryBlue">$84</span>
                            </div>
                        </div>
                        <div className="flex">
                            <img className="w-[18px]" src='images/main/thirdImage.svg'></img>
                            <img className="w-[18px]" src='images/main/thirdImage.svg'></img>
                            <img className="w-[18px]" src='images/main/thirdImage.svg'></img>
                            <img className="w-[18px]" src='images/main/thirdImage.svg'></img>
                            <img className="w-[18px]" src='images/main/thirdImage.svg'></img>
                        </div>
                        <div className="flex">
                            <img src='/images/main/sixthImage.svg'></img>
                            <span className="font-primary size-[16px] text-seventhGray font-lite ml-[16px]">12 left in Stock</span>
                        </div>
                        <p className="text-primaryGray font-primary size-[16px] font-light leading-[22px]">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                    </div>
                </div>
                <div className="flex mb-[16px] mt-[16px]">
                    <img src='images/main/eighthImage.svg'></img>
                    <span className="font-primary text-primaryGray size-[16px] font-light ml-[12px]">Negative Ion Technology may
                        <span className="font-primary text-primaryGray size-[16px] font-hard"> help with allergens
                        </span>
                    </span>
                </div>
                <div className="flex mb-[16px]">
                    <img src='images/main/eighthImage.svg'></img>
                    <span className="font-primary text-primaryGray size-[16px] font-light ml-[12px]"> Designed for
                        <span className="font-primary text-primaryGray size-[16px] font-hard"> air rejuvenation
                        </span>
                    </span>
                </div>
                <div className="flex">
                    <img src='images/main/eighthImage.svg'></img>
                    <span className="font-primary text-primaryGray size-[16px] font-light ml-[12px]">
                        <span className="font-primary text-primaryGray size-[16px] font-hard">Perfect for every room
                        </span> in all types of places.
                    </span>
                </div>
            </div>
        </div>
    )
}