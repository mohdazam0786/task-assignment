import { Button } from "@mui/material";

const SellersPhotoDetails1 = () => {
  return (
    <div className="w-full relative bg-white h-[900px] overflow-hidden text-left text-lg text-gray-200 font-inter">
      <div className="absolute top-[162px] left-[calc(50%_-_601px)] w-[820px] overflow-y-auto flex flex-col items-start justify-start gap-[20px]">
        <div className="relative text-5xl leading-[22px]">
          Thank you for listing your property with us,
        </div>
        <div className="w-[820px] relative leading-[38px] inline-block">
          Your listing will be reviewed and will go live within 24 hours.
        </div>
        <div className="w-[820px] relative leading-[38px] inline-block">
          <p className="[margin-block-start:0] [margin-block-end:4px]">{`We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. `}</p>
        </div>
        <div className="relative text-base font-jacques-francois text-main-blue">
          -Dylan Estates
        </div>
        <div className="w-[380px] rounded-sm h-[51px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
          <div className="self-stretch flex-1 rounded-sm bg-white flex flex-row items-center justify-start py-[5px] px-3 gap-[4px]">
            <img
              className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/inputprefix1@2x.png"
            />
            <div className="flex-1 h-11 overflow-hidden" />
            <img
              className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover hidden"
              alt=""
              src="/inputsuffix1@2x.png"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[40px]">
          <Button
            className="w-[207px]"
            disableElevation
            color="primary"
            variant="contained"
            href="/sellers-photo-details"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 207 }}
          >
            Edit Property Listing
          </Button>
          <Button
            className="w-[207px]"
            disableElevation
            color="primary"
            variant="contained"
            href="/preview"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 207 }}
          >
            Preview Property Listing
          </Button>
        </div>
      </div>
      <div className="absolute w-[calc(100%_+_2px)] top-[-1px] right-[-1px] left-[-1px] bg-cream box-border h-[74px] overflow-hidden text-peru font-merriweather border-[1px] border-solid border-cream-dark">
        <div className="absolute top-[calc(50%_-_27px)] left-[60px] w-[105px] h-12">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-center gap-[2px]">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-[47.5px] relative h-[27px]"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="flex flex-col items-center justify-center mt-[-17px]">
                  <img
                    className="w-7 relative h-[12.7px]"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <div className="flex flex-col items-center justify-center gap-[1.4px] mt-[-3px]">
                    <div className="flex flex-row items-center justify-center gap-[1.4px]">
                      <div className="w-[3.4px] relative [background:linear-gradient(180deg,_#a57946,_#f7d9bc)] h-[3.4px]" />
                      <div className="w-[3.4px] relative [background:linear-gradient(180deg,_#a57946,_#f7d9bc)] h-[3.4px]" />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[1.4px]">
                      <div className="w-[3.4px] relative [background:linear-gradient(180deg,_#a57946,_#f7d9bc)] h-[3.4px]" />
                      <div className="w-[3.4px] relative [background:linear-gradient(180deg,_#a57946,_#f7d9bc)] h-[3.4px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-0 px-0.5">
                <b className="relative">Dylan Estate</b>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[32px] right-[60px] h-[27px] flex flex-row items-end justify-start gap-[40px] text-sm text-black font-inter">
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <b className="relative">PROPERTIES</b>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <b className="relative">MY DASHBOARD/ACTIVITY</b>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <b className="relative">LIST YOUR PROPERTY</b>
            </div>
            <div className="hidden flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <b className="relative">ABOUT US</b>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <b className="relative">CONTACT US</b>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <b className="relative">MORE</b>
            </div>
          </div>
          <div className="w-[1.4px] relative box-border h-[25.4px] border-r-[1.4px] border-solid border-black" />
          <div className="flex flex-row items-start justify-center pt-1 px-0 pb-0 gap-[34px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/frame11.svg"
            />
            <img
              className="w-[21px] relative h-[21px] overflow-hidden shrink-0"
              alt=""
              src="/frame2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersPhotoDetails1;
