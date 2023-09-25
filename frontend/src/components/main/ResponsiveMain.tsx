export default function ResponsiveMain(): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center md:hidden">
            <h1 className="text-black text-[21px] text-center font-primary font-light w-[88%] leading-[33px]"><span className="text-secondaryBlue">ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className="text-secondaryBlue"> $14 Each</span> ($84.00 Total!)</h1>
            <img src='images/main/responsiveProductInfo.svg' />
            <div className="flex flex-col w-[88%] mt-[24px]">
                <div className="flex">
                    <img className="w-[80px]" src='images/main/fifthImage.svg'></img>
                    <div className="ml-[12px] w-[71%] gap-[6px] flex flex-col">
                        <div className="flex justify-between">
                            <span className="font-primary text-[14px] font-light leading-[19px] text-black">Clarifion Air Ionizer</span>
                            <div>
                                <span className="font-primary text-[10px] font-medium text-sixthGray mr-[10px] line-through">$180</span>
                                <span className="font-primary text-[14px] leading-[19px] font-medium text-secondaryBlue">$84</span>
                            </div>
                        </div>
                        <div className="flex">
                            <img className="w-[12px]" src='images/main/thirdImage.svg'></img>
                            <img className="w-[12px]" src='images/main/thirdImage.svg'></img>
                            <img className="w-[12px]" src='images/main/thirdImage.svg'></img>
                            <img className="w-[12px]" src='images/main/thirdImage.svg'></img>
                            <img className="w-[12px]" src='images/main/thirdImage.svg'></img>
                        </div>
                        <div className="flex">
                            <img className="w-[12px]" src='/images/main/sixthImage.svg'></img>
                            <span className="font-primary size-[12px] text-seventhGray font-lite ml-[16px]">12 left in Stock</span>
                        </div>
                    </div>
                </div>
                <p className="text-primaryGray font-primary text-[12px] font-light leading-[16px] text-center mt-[16px]">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                <div>
                    <div className="flex mb-[16px] mt-[16px]">
                        <img className="w-[16px]" src='images/main/eighthImage.svg'></img>
                        <span className="font-primary text-primaryGray text-[12px] font-light ml-[12px]">Negative Ion Technology may
                            <span className="font-primary text-primaryGray text-[12px] font-hard"> help with allergens
                            </span>
                        </span>
                    </div>
                    <div className="flex mb-[16px]">
                        <img className="w-[16px]" src='images/main/eighthImage.svg'></img>
                        <span className="font-primary text-primaryGray text-[12px] font-light ml-[12px]"> Designed for
                            <span className="font-primary text-primaryGray text-[12px] font-hard"> air rejuvenation
                            </span>
                        </span>
                    </div>
                    <div className="flex">
                        <img className="w-[16px]" src='images/main/eighthImage.svg'></img>
                        <span className="font-primary text-primaryGray text-[12px] font-light ml-[12px]">
                            <span className="font-primary text-primaryGray text-[12px] font-hard">Perfect for every room
                            </span> in all types of places.
                        </span>
                    </div>
                </div>
                <div className="mt-[32px] flex bg-thirdBlue rounded-[10px] pt-[12px] pb-[12px] pl-[16px] pr-[16px] items-center">
                    <img className="w-[24px]" src='images/main/ninthImage.svg'></img><span className=" ml-[8px] text-black font-primary text-[14px] font-light leading[22ox] ">Save <span className="text-secondaryBlue"> 53%</span> and get <span className="text-secondaryBlue">6 extra Clarifision</span> for only  <span className="text-secondaryBlue"> $14 Each</span>.</span>
                </div>
                <button className="mt-[20px] bg-secondaryGreen flex items-center justify-center rounded-[50px] w-full h-[51px]">
                    <span className="mr-[19px] font-primary text-[14px] font-hard text-white">YES - CLAIM MY DISCOUNT</span>
                    <img src='images/main/eleventhImage.svg'></img>
                </button>
                <div className="flex flex-col mt-[12px] border border-gray-300 rounded-[4px] pl-[8px] pr-[8px] pt-[8px] pb-[8px] justify-center ">
                    <div className="flex justify-center items-center mb-[13px]">
                        <span className="text-primaryGray text-[12px] leading-[16px] font-light">Free Shipping</span>
                        <img className="ml-[6px] mr-[6px]" src='images/main/twoelfthImage.svg'></img>
                        <img className="mr-[6px]" src='images/main/padlock.svg'></img>
                        <span className="text-primaryGray text-[12px] leading-[18px] font-light">Secure 256-Bit SSL Encryption.</span>
                    </div>
                    <img src='images/main/horizontalBar.svg' />
                    <div className="flex justify-center mt-[13px] ">
                        <img className="mr-[2px]" src='images/main/shopPayLogo.svg'></img>
                        <img className="mr-[2px]" src='images/main/paypalLogo.svg'></img>
                        <img className="mr-[2px]" src='images/main/mastercardLogo.svg'></img>
                        <img className="mr-[2px]" src='images/main/googlePayLogo.svg'></img>
                        <img className="mr-[2px]" src='images/main/applePayLogo.svg'></img>
                        <img src='images/main/amexLogo.svg'></img>
                    </div>
                </div>
                <a className="mt-[12px] text-primaryRed uppercase font-primary text-[12px] font-normal underline flex justify-center items-center" >No thanks, I don’t want this.</a>
                <div className="flex items-center mt-[24px]">
                    <img className="w-[48px]" src='images/main/stamp.svg'></img>
                    <p className="ml-[16px] text-primaryGray text-[12px] font-light leading-[16px] font-primary">If you are not completely thrilled with your Clarifion - We have a <span className="font-hard">30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                </div>
            </div>
        </div>

    )
}