import { Button } from "@mui/material";

const SellersPhotoDetails = () => {
  return (
    <div className="w-full relative bg-white h-[900px] overflow-hidden text-left text-lg text-black font-inter">
      <div className="absolute top-[130px] left-[calc(50%_-_488px)] shadow-[0px_2px_8px_2px_rgba(18,_43,_73,_0.18)] rounded-2xl bg-white w-[976px] h-[552px] overflow-hidden">
        <div className="absolute top-[124px] left-[78px] w-[820px] h-[368px] overflow-y-auto flex flex-col items-start justify-start gap-[40px]">
          <div className="self-stretch relative leading-[22px] text-gray-200">{`Add Photos / videos to attract more tenants! `}</div>
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch relative text-base leading-[22px] font-medium text-gray-200">
              Add Photos of living room, bedroom, bathroom, floor, doors,
              kitchen, balcony, location map, neighborhood, etc
            </div>
            <img
              className="w-[820px] h-[309px] object-cover"
              loading="eager"
              alt=""
              src="/frame-664@2x.png"
            />
            <div className="relative">OR</div>
            <div className="relative">{`We can upload them for you! You can email the pictures and videos to us at Dylanestate.com `}</div>
          </div>
          <div className="relative text-xs">
            <p className="m-0">{`Accepted formats are .jpg, .gif, .bmp & .png. `}</p>
            <p className="m-0">
              Maximum size allowed is 20 MB. Minimum dimension allowed 600*400
              Pixel
            </p>
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
        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_488px)] w-[976px] h-[88px] text-center text-sm text-main-blue font-merriweather-sans">
          <div className="absolute top-[0px] left-[calc(50%_-_488px)] w-[976px] flex flex-row items-start justify-start">
            <div className="flex-1 h-20 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 bg-cream flex flex-row items-center justify-center p-2.5">
                <div className="w-[122px] relative inline-block shrink-0">
                  PROPERTY DETAILS
                </div>
              </div>
            </div>
            <div className="flex-1 h-20 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 bg-cream flex flex-row items-center justify-center p-2.5">
                <div className="w-[122px] relative inline-block shrink-0">
                  LOCATION DETAILS
                </div>
              </div>
            </div>
            <div className="flex-1 h-20 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 bg-cream flex flex-row items-center justify-center p-2.5">
                <div className="w-[122px] relative inline-block shrink-0">{`FEATURES & AMENITIES`}</div>
              </div>
            </div>
            <div className="flex-1 h-20 flex flex-col items-start justify-start text-black">
              <div className="self-stretch flex-1 bg-cream flex flex-row items-center justify-center p-2.5">
                <div className="w-[122px] relative inline-block shrink-0">
                  PRICE DETAILS
                </div>
              </div>
            </div>
            <div className="flex-1 shadow-[0px_-2px_4px_rgba(18,_43,_73,_0.2)_inset,_0px_2px_6px_#fff_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] h-20 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 bg-aliceblue flex flex-row items-center justify-center p-2.5">
                <div className="w-[122px] relative inline-block shrink-0">
                  PROPERTY IMAGES
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[80px] left-[0px] w-[976px] h-2">
            <div className="absolute top-[0px] left-[0px] bg-border-grey w-[976px] h-2" />
            <div className="absolute top-[0px] left-[0px] bg-main-blue w-[781px] h-2" />
          </div>
        </div>
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-main-blue h-[60px] flex flex-row items-center justify-between py-2.5 px-[65px] box-border text-xs text-white">
          <div className="relative">
            <span>{`Need Help? `}</span>
            <span className="font-medium">Call 9999999999</span>
          </div>
          <Button
            className="[filter:drop-shadow(0px_4px_4px_rgba(18,_43,_73,_0.32))]"
            color="primary"
            variant="contained"
            href="/sellers-photo-details1"
            sx={{ borderRadius: "0px 0px 0px 0px", height: 33 }}
          >{`SAVE & POST`}</Button>
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

export default SellersPhotoDetails;
