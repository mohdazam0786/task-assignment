import { Radio, FormControlLabel, Button } from "@mui/material";

const SellersFlowPropertyFeatures = () => {
  return (
    <div className="w-full relative bg-white h-[900px] overflow-hidden text-right text-sm text-dust-red-5 font-inter">
      <img
        className="absolute top-[83px] left-[1389px] w-6 h-6 overflow-hidden"
        alt=""
        src="/frame1.svg"
      />
      <div className="absolute top-[130px] left-[calc(50%_-_488px)] shadow-[0px_2px_8px_2px_rgba(18,_43,_73,_0.18)] rounded-2xl bg-white w-[976px] h-[552px] overflow-hidden">
        <div className="absolute top-[124px] left-[78px] w-[820px] h-[368px] overflow-y-auto flex flex-col items-start justify-start gap-[60px]">
          <div className="self-stretch flex flex-col items-start justify-start text-left text-lg text-black">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-semibold">General Features</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="relative leading-[22px]">*</div>
              <div className="relative text-lg font-semibold text-black text-left">
                Non- Veg
              </div>
            </div>
            <div className="flex flex-row items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-gray-200">
              <FormControlLabel
                label="Allowed"
                control={<Radio color="primary" />}
              />
              <FormControlLabel
                label="Not Allowed"
                control={<Radio color="primary" />}
              />
              <div className="hidden flex-row items-center justify-start gap-[23px]">
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-white box-border border-[1px] border-solid border-gainsboro" />
                </div>
                <div className="w-[190px] relative leading-[22px] inline-block shrink-0">
                  Allowed
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="relative leading-[22px]">*</div>
              <div className="relative text-lg font-semibold text-black text-left">
                Pets Allowed
              </div>
            </div>
            <div className="flex flex-row items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-gray-200">
              <FormControlLabel
                label="Yes"
                control={<Radio color="primary" />}
              />
              <FormControlLabel
                label="No"
                control={<Radio color="primary" />}
              />
              <div className="hidden flex-row items-center justify-start gap-[23px]">
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-white box-border border-[1px] border-solid border-gainsboro" />
                </div>
                <div className="w-[190px] relative leading-[22px] inline-block shrink-0">
                  Allowed
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[22px]">*</div>
                <div className="relative text-lg font-semibold text-black text-left">
                  Electricity
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-gray-200">
              <div className="flex flex-row items-center justify-start gap-[23px]">
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_13px)] rounded-81xl bg-white box-border w-[26px] h-[26px] border-[1px] border-solid border-main-blue" />
                  <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-[18px] h-[18px]">
                    <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] rounded-[50%] bg-lavender w-[18px] h-[18px]" />
                    <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] rounded-xl bg-main-blue w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="w-[190px] relative inline-block shrink-0">
                  Rare/No Powercut
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[23px]">
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-white box-border border-[1px] border-solid border-gainsboro" />
                </div>
                <div className="w-[190px] relative inline-block shrink-0">
                  Frequent Powercut
                </div>
              </div>
              <div className="hidden flex-row items-center justify-start gap-[23px]">
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-white box-border border-[1px] border-solid border-gainsboro" />
                </div>
                <div className="w-[190px] relative leading-[22px] inline-block shrink-0">
                  Allowed
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[22px]">*</div>
                <div className="relative text-lg font-semibold text-black text-left">
                  Water Supply
                </div>
              </div>
            </div>
            <div className="flex flex-row items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-gray-200">
              <div className="flex flex-row items-center justify-start gap-[23px]">
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_13px)] rounded-81xl bg-white box-border w-[26px] h-[26px] border-[1px] border-solid border-main-blue" />
                  <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-[18px] h-[18px]">
                    <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] rounded-[50%] bg-lavender w-[18px] h-[18px]" />
                    <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_7px)] rounded-xl bg-main-blue w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="w-[190px] relative inline-block shrink-0">
                  <p className="m-0">{`Municipal Corporation `}</p>
                  <p className="m-0">(BMC)</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[23px]">
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-white box-border border-[1px] border-solid border-gainsboro" />
                </div>
                <div className="w-[190px] relative inline-block shrink-0">
                  Borewell
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[23px]">
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-white box-border border-[1px] border-solid border-gainsboro" />
                </div>
                <div className="w-[190px] relative leading-[22px] inline-block shrink-0">
                  Both
                </div>
              </div>
            </div>
          </div>
          <div className="w-[821px] relative box-border h-px shrink-0 border-t-[1px] border-solid border-border-grey" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[22px]">*</div>
                <div className="relative text-lg font-semibold text-black text-left">
                  Furnishing
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-2 gap-[24px] text-left text-base text-black">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Fully Furnished
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Semi Furnished
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Unfurnished
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[821px] relative box-border h-px shrink-0 border-t-[1px] border-solid border-border-grey" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-lg text-black">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-semibold">Additional Features</div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-2 gap-[24px] text-base">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Air Conditioning
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Washing machine
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Ceiling Fans
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Microwave
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Refrigerator
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    oven
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[821px] relative box-border h-px shrink-0 border-t-[1px] border-solid border-border-grey" />
          <div className="flex flex-col items-start justify-start gap-[32px] text-left text-lg text-black">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-semibold">Tiles</div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-2 gap-[24px] text-base">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Normal White Tiles
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Marble
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Vitrified Tiles
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[821px] relative box-border h-px shrink-0 border-t-[1px] border-solid border-border-grey" />
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="relative leading-[22px]">*</div>
                <div className="relative text-lg font-semibold text-black text-left">
                  Safety
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-2 gap-[24px] text-left text-base text-black">
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Security Systems- CCTV
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    Vitrified Tiles
                  </div>
                </div>
                <div className="hidden flex-row items-center justify-start gap-[23px]">
                  <div className="w-[26px] relative h-[26px]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                  </div>
                  <div className="w-[190px] relative inline-block shrink-0">
                    24/7 Security personnel (Gated Security)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[821px] relative box-border h-px shrink-0 border-t-[1px] border-solid border-border-grey" />
          <div className="w-[820px] bg-white flex flex-col items-start justify-start gap-[60px] text-left text-grey-text-2">
            <div className="flex flex-col items-start justify-start text-lg text-black">
              <div className="relative font-semibold">SOCIETY AMENITIES</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <div className="w-[31px] h-[34px] flex flex-row items-center justify-start">
                    <img
                      className="w-9 relative h-[34px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/frame3@2x.png"
                    />
                  </div>
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative whitespace-pre-wrap">
                      24/7 Security
                    </div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="h-24 overflow-hidden shrink-0 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[35px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame4.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">CCTV Camera</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[30.1px] relative h-[34px] object-cover"
                    alt=""
                    src="/group-33405@2x.png"
                  />
                  <div className="w-[135px] flex flex-col items-center justify-center py-0 px-[22px] box-border">
                    <div className="flex flex-row items-end justify-start">
                      <div className="relative">Lift</div>
                    </div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-9 overflow-hidden shrink-0"
                    alt=""
                    src="/frame5.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Reserved Parking</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame6.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Regular water supply</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame7.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">{`Power Back up-Partial `}</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame7.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">{`Power Back up-Full `}</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[43px] relative h-[36.7px] object-cover"
                    alt=""
                    src="/group-334221@2x.png"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Maintenance staff</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="h-24 overflow-hidden shrink-0 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame8.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Garden/ Park</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 overflow-hidden shrink-0 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame9.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Kids Play area</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame10.svg"
                  />
                  <div className="w-[135px] flex flex-col items-center justify-center py-0 px-[22px] box-border">
                    <div className="flex flex-row items-end justify-start">
                      <div className="relative">Sport</div>
                    </div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame111.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Property Gym</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-8 relative h-9 overflow-hidden shrink-0"
                    alt=""
                    src="/frame12.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Community Hall</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame13.svg"
                  />
                  <div className="w-[135px] flex flex-col items-center justify-center py-0 px-[22px] box-border">
                    <div className="flex flex-row items-end justify-start">
                      <div className="relative">Shopping center</div>
                    </div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-8 relative h-9 overflow-hidden shrink-0"
                    alt=""
                    src="/frame12.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Club House</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 overflow-hidden shrink-0 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame14.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Swimming pool</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-8 relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame15.svg"
                  />
                  <div className="w-[135px] flex flex-col items-center justify-center py-0 px-[22px] box-border">
                    <div className="flex flex-row items-end justify-start">
                      <div className="relative">Intercom</div>
                    </div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame16.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Fire Safety</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="h-24 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-8 relative h-9 overflow-hidden shrink-0"
                    alt=""
                    src="/frame12.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Club House</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
              <div className="h-[138px] flex flex-col items-center justify-center gap-[16px]">
                <div className="w-[135px] h-24 overflow-hidden shrink-0 flex flex-col items-center justify-between py-4 px-0 box-border">
                  <img
                    className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                    alt=""
                    src="/frame14.svg"
                  />
                  <div className="w-[135px] flex flex-row items-center justify-center">
                    <div className="relative">Swimming pool</div>
                  </div>
                </div>
                <div className="w-[26px] relative h-[26px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[0.8px] border-solid border-gray-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[821px] relative box-border h-px shrink-0 border-t-[1px] border-solid border-border-grey" />
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
        <div className="absolute top-[0px] left-[calc(50%_-_488px)] w-[976px] h-[88px] text-center text-main-blue font-merriweather-sans">
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
            <div className="flex-1 shadow-[0px_-2px_4px_rgba(18,_43,_73,_0.2)_inset,_0px_2px_6px_#fff_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] h-20 flex flex-col items-start justify-start">
              <div className="self-stretch flex-1 bg-aliceblue flex flex-row items-center justify-center p-2.5">
                <div className="w-[122px] relative inline-block shrink-0">{`FEATURES & AMENITIES`}</div>
              </div>
            </div>
            <div className="flex-1 bg-cream h-20 flex flex-row items-center justify-center p-2.5 box-border text-grey-text-2">
              <div className="w-28 relative inline-block shrink-0">
                PRICE DETAILS
              </div>
            </div>
            <div className="flex-1 bg-cream h-20 flex flex-row items-center justify-center p-2.5 box-border text-grey-text-2">
              <div className="w-28 relative inline-block shrink-0">
                PROPERTY IMAGES
              </div>
            </div>
          </div>
          <div className="absolute top-[80px] left-[0px] w-[976px] h-2">
            <div className="absolute top-[0px] left-[0px] bg-border-grey w-[976px] h-2" />
            <div className="absolute top-[0px] left-[0px] bg-main-blue w-[390px] h-2" />
          </div>
        </div>
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-main-blue h-[60px] flex flex-row items-center justify-between py-2.5 px-[65px] box-border text-left text-xs text-white">
          <div className="relative">
            <span>{`Need Help? `}</span>
            <span className="font-medium">Call 9999999999</span>
          </div>
          <Button
            className="w-[120px] [filter:drop-shadow(0px_4px_4px_rgba(18,_43,_73,_0.32))]"
            color="primary"
            variant="contained"
            href="/sellers-flow-price-details"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 120, height: 33 }}
          >
            NEXT
          </Button>
        </div>
      </div>
      <div className="absolute w-[calc(100%_+_2px)] top-[-1px] right-[-1px] left-[-1px] bg-cream box-border h-[74px] overflow-hidden text-left text-lg text-peru font-merriweather border-[1px] border-solid border-cream-dark">
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

export default SellersFlowPropertyFeatures;
