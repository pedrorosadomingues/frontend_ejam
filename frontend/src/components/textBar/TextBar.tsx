export default function TextBar(): JSX.Element {
    return (
        <div className="h-[86px] md:w-[100%] w-[95%]  flex flex-col md:items-center md:justify-center">
            <h1 className="font-primary font-normal text-[32px] md:text-[48px] text-black text-center ml-[15px] md:ml-[0px] md:mt-[0px] mt-[52px]">Wait ! Your Order In Progress.</h1>
            <p className="font-primary font-light text-primaryGray text-[24px] hidden md:block">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing </p>
            <p className="font-primary font-light text-primaryGray text-[16px] md:hidden text-center ml-[15px]">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
    )
}