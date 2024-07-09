import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const BuyersrentersDashboard = () => {
  return (
    <div className="w-full relative bg-white h-[900px] overflow-hidden text-left text-xl text-white font-merriweather-sans">
      <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(68,_51,_35,_0.2)] bg-main-blue w-[1440px] h-[900px] overflow-hidden">
        <div className="absolute top-[262px] left-[186px] flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[96px]">
            <div className="flex flex-col items-start justify-start py-6 px-0 gap-[24px]">
              <div className="w-[364px] relative whitespace-pre-wrap inline-block">
                Upload your property in 4 simple steps
              </div>
              <div className="flex flex-col items-center justify-start gap-[8px] text-sm">
                <div className="w-[307px] flex flex-row items-center justify-start">
                  <img
                    className="w-[46px] relative h-[39px] object-cover"
                    alt=""
                    src="/image-29@2x.png"
                  />
                  <div className="w-[260px] relative inline-block shrink-0">
                    <span>{`Add your properties `}</span>
                    <span className="font-extrabold">Basic Details</span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="w-[39px] relative h-[38px] object-cover"
                    alt=""
                    src="/image-30@2x.png"
                  />
                  <div className="w-[260px] relative inline-block shrink-0">
                    <span>Add property</span>
                    <b>{` `}</b>
                    <span className="font-extrabold">Location</span>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="w-[39px] relative h-[38px] object-cover"
                      alt=""
                      src="/image-30@2x.png"
                    />
                    <div className="w-[260px] relative inline-block shrink-0">
                      <span>{`Add property `}</span>
                      <span className="font-extrabold">
                        Features and amenities
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="w-[39px] relative h-[38px] object-cover"
                    alt=""
                    src="/image-30@2x.png"
                  />
                  <div className="w-[260px] relative inline-block shrink-0">
                    <span>Add</span>
                    <span className="font-extrabold"> Price details</span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="w-[39px] relative h-[38px] object-cover"
                    alt=""
                    src="/image-30@2x.png"
                  />
                  <div className="w-[260px] relative inline-block shrink-0">
                    <span>Add your best</span>
                    <span className="font-extrabold"> Property Shots</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[608px] relative shadow-[0px_-2px_6.2px_2px_rgba(59,_48,_38,_0.16)_inset,_0px_5px_10.8px_2px_#fff_inset,_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-2xl bg-white box-border h-[376px] overflow-hidden shrink-0 text-base text-gray-200 font-inter border-[1px] border-solid border-border-grey">
              <div className="absolute top-[calc(50%_-_80px)] left-[calc(50%_-_236px)] overflow-y-auto flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[380px] overflow-hidden flex flex-row items-center justify-between pt-0 px-0 pb-2 box-border">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <div className="relative leading-[22px] font-medium">
                        Enter OTP sent on 999-999-9999
                      </div>
                      <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                        *
                      </div>
                    </div>
                    <div className="relative text-xs leading-[22px] text-main-blue">
                      Change
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xs text-main-blue">
                    <TextField
                      className="[border:none] bg-[transparent] w-[382px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] font-inter text-sm text-gray-300"
                      color="primary"
                      label="0 0 0 0 0"
                      variant="outlined"
                      sx={{
                        "& .MuiInputBase-root": { height: "42px" },
                        width: "382px",
                      }}
                    />
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-end">
                      <div className="relative leading-[22px]">Resend OTP</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-full top-[0.5px] right-[0px] left-[0px] bg-cream h-[68px] flex flex-row items-center justify-start pt-2 px-[68px] pb-0 box-border text-xl text-main-blue font-merriweather-sans">
                <div className="w-[267px] relative inline-block shrink-0">
                  LETS GET YOU STARTED !
                </div>
              </div>
              <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-cream h-[63px] flex flex-row items-center justify-between py-2.5 px-8 box-border text-xs text-grey-text-2">
                <div className="relative">
                  <span>{`Need Help? `}</span>
                  <span className="font-medium text-black">
                    Call 9999999999
                  </span>
                </div>
                <Button
                  className="w-[110px]"
                  disableElevation
                  color="primary"
                  variant="contained"
                  href="/sellers-flow-property-detail"
                  sx={{
                    borderRadius: "0px 0px 0px 0px",
                    width: 110,
                    height: 32,
                  }}
                >
                  NEXT
                </Button>
              </div>
              <div className="absolute top-[68px] right-[0px] w-[13px] h-[245px]">
                <div className="absolute top-[0px] right-[0px] w-[13px] h-[245px]">
                  <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[13px] h-[245px]" />
                </div>
                <div className="absolute h-[20.82%] w-[61.54%] top-[6.94%] right-[23.08%] bottom-[72.24%] left-[15.38%] rounded-mini bg-lightgray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[128px] left-[116px] flex flex-col items-start justify-start gap-[16px] text-13xl">
        <div className="relative">Sell or Rent your Property For Free</div>
        <div className="w-[821px] relative text-base font-light inline-block">
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </div>
      </div>
      <div className="absolute top-[-1px] left-[calc(50%_-_721px)] bg-cream box-border w-[1442px] h-[74px] overflow-hidden text-lg text-peru font-merriweather border-[1px] border-solid border-cream-dark">
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
              <a className="[text-decoration:none] relative font-bold text-[inherit]">
                PROPERTIES
              </a>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <Link
                className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit]"
                to="/sellers-flow-property-detail"
              >
                MY DASHBOARD/ACTIVITY
              </Link>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <Link
                className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit]"
                to="/sellers-flow-property-features-and-amenities"
              >
                LIST YOUR PROPERTY
              </Link>
            </div>
            <div className="hidden flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <b className="relative">ABOUT US</b>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <a className="[text-decoration:none] relative font-bold text-[inherit]">
                CONTACT US
              </a>
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

export default BuyersrentersDashboard;
