export default function LeftColumn(): JSX.Element {
    return (
        <div className="w-[46%] mt-[40px] mb-[40px]">
            <img className="w-full" src='images/main/primaryImage.svg'></img>
            <div className="bg-white p-[24px] mt-[24px] rounded-[10px]">
                <div className="flex mb-[13px] items-center ">
                    <img src='images/main/secondaryImage.svg'></img>
                    <div className="flex flex-col ml-[13px] ">
                        <div className="flex mb-[8px]">
                            <img src='images/main/thirdImage.svg'></img>
                            <img src='images/main/thirdImage.svg'></img>
                            <img src='images/main/thirdImage.svg'></img>
                            <img src='images/main/thirdImage.svg'></img>
                            <img src='images/main/thirdImage.svg'></img>
                        </div>
                        <div className="flex gap-[10px]">
                            <span className="text-fifthGray text-[14px] leading-[14px] font-hard">Ken T.</span>
                            <img src='/images/main/fourthImage.svg'></img>
                            <span className="text-thirdGreen text-[12px] leading-[14px] font-light">Verified Customer</span>
                        </div>
                    </div>
                </div>
                <p className="text-primaryGray font-light text-[16px] font-primary leading-[24px]">“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
            </div>
        </div>
    );
}