export default function DiscountInfo() {
    return (
        <div>
            <div className="mt-[32px] flex bg-thirdBlue rounded-[10px] pt-[12px] pb-[12px] pl-[16px] pr-[16px] items-center">
                <img src='images/main/ninthImage.svg'></img><span className=" ml-[16px] text-black font-primary size-[16px] font-light leading[22ox] ">Save <span className="text-secondaryBlue"> 53%</span> and get <span className="text-secondaryBlue">6 extra Clarifision</span> for only  <span className="text-secondaryBlue"> $14 Each</span>.</span>
            </div>
            <button className="mt-[20px] bg-secondaryGreen flex items-center justify-center rounded-[50px] w-full h-[59px]">
                <span className="mr-[19px] font-primary text-[20px] font-hard TEXT-WHITE">YES - CLAIM MY DISCOUNT</span>
                <img src='images/main/eleventhImage.svg'></img>
            </button>
            <div className="flex mt-[12px] border border-gray-300 rounded-[4px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] justify-center h-[33px]">
                <span className="text-primaryGray text-[12px] leading-[16px] font-light">Free Shipping</span>
                <img className="ml-[16px] mr-[16px]" src='images/main/twoelfthImage.svg'></img>
                <img className="mr-[16px]" src='images/main/padlock.svg'></img>
                <span className="text-primaryGray text-[12px] leading-[18px] font-light">Secure 256-Bit SSL Encryption.</span>
                <img className="mr-[16px] ml-[16px]"src='images/main/twoelfthImage.svg'></img>
                <img className="mr-[2px]" src='images/main/shopPayLogo.svg'></img>
                <img className="mr-[2px]" src='images/main/paypalLogo.svg'></img>
                <img className="mr-[2px]" src='images/main/mastercardLogo.svg'></img>
                <img  className="mr-[2px]" src='images/main/googlePayLogo.svg'></img>
                <img className="mr-[2px]" src='images/main/applePayLogo.svg'></img>
                <img src='images/main/amexLogo.svg'></img>
            </div>
            <a className="mt-[20px] text-primaryRed uppercase font-primary text-[18px] font-normal underline flex justify-center items-center" >No thanks, I don’t want this.</a>
            <div className="flex items-center mt-[32px]">
                <img src='images/main/stamp.svg'></img>
                <p className="ml-[16px] text-primaryGray text-[16px] font-light leading-[22px] font-primary">If you are not completely thrilled with your Clarifion - We have a <span className="font-hard">30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
            </div>
        </div>
    )
}