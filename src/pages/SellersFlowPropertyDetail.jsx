import {
  Radio,
  FormControlLabel,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const SellersFlowPropertyDetail = () => {
  return (
    <div className="w-full relative bg-white h-[900px] overflow-hidden text-left text-base text-gray-200 font-inter">
      <img
        className="absolute top-[83px] left-[1389px] w-6 h-6 overflow-hidden"
        alt=""
        src="/frame1.svg"
      />
      <div className="absolute top-[130px] left-[calc(50%_-_488px)] shadow-[0px_2px_8px_2px_rgba(18,_43,_73,_0.18)] rounded-2xl bg-white w-[976px] h-[552px] overflow-hidden">
        <div className="absolute top-[124px] left-[calc(50%_-_410px)] w-[820px] h-[368px] overflow-y-auto flex flex-col items-start justify-start gap-[60px]">
          <div className="flex flex-col items-start justify-start text-right text-sm text-dust-red-5">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="w-[400px] overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 box-border gap-[4px]">
                <div className="relative leading-[22px]">*</div>
                <div className="relative text-base leading-[22px] font-medium text-gray-200 text-left">
                  Property For :
                </div>
              </div>
              <div className="flex flex-row items-end justify-start py-0 px-2 gap-[24px] text-left text-base text-gray-200">
                <FormControlLabel
                  label="Rent"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="Sale"
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
          </div>
          <div className="flex flex-col items-start justify-start text-right text-sm text-dust-red-5">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="w-[400px] overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 box-border gap-[4px]">
                <div className="relative leading-[22px]">*</div>
                <div className="relative text-lg leading-[22px] font-medium text-gray-200 text-left">
                  Property Type :
                </div>
              </div>
              <div className="flex flex-row items-end justify-start py-0 px-2 gap-[24px]">
                <FormControlLabel
                  label="Residential"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="Commercial"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="Land / Plot"
                  control={<Radio color="primary" />}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[60px]">
            <TextField
              className="[border:none] bg-[transparent] w-[380px] font-inter font-medium text-base text-gray-200"
              color="primary"
              label="Built up Area"
              helperText="Sq. Ft."
              required={true}
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "70px" },
                width: "380px",
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] w-[380px] font-inter font-medium text-base text-gray-200"
              color="primary"
              label="Carpet Area"
              helperText="Sq. Ft."
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "70px" },
                width: "380px",
              }}
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[60px]">
            <div className="w-[380px] flex flex-row items-start justify-between">
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                  <div className="relative leading-[22px] font-medium">
                    Property on Floor
                  </div>
                  <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                    *
                  </div>
                </div>
                <div className="w-[172px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-white box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-start text-sm text-gray-300 border-[1px] border-solid border-grey-text-2">
                  <div className="self-stretch flex-1 rounded-sm bg-white flex flex-row items-center justify-start py-[5px] px-3 gap-[4px] border-[1px] border-solid border-gainsboro">
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative leading-[22px]">Floor</div>
                    </div>
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/inputsuffix@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                  <div className="relative leading-[22px] font-medium">
                    Total Floors
                  </div>
                  <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                    *
                  </div>
                </div>
                <div className="w-[172px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-white box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-start text-sm text-gray-300 border-[1px] border-solid border-grey-text-2">
                  <div className="self-stretch flex-1 rounded-sm bg-white flex flex-row items-center justify-start py-[5px] px-3 gap-[4px] border-[1px] border-solid border-gainsboro">
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative leading-[22px]">Total Floor</div>
                    </div>
                    <img
                      className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover hidden"
                      alt=""
                      src="/inputsuffix@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Property Facing
                </div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="w-[382px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-white box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-start text-sm text-gray-300 border-[1px] border-solid border-grey-text-2">
                <div className="self-stretch flex-1 rounded-sm bg-white flex flex-row items-center justify-start py-[5px] px-3 gap-[4px] border-[1px] border-solid border-gainsboro">
                  <img
                    className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/inputprefix@2x.png"
                  />
                  <div className="flex-1 overflow-hidden flex flex-row items-center justify-start">
                    <div className="relative leading-[22px]">Select</div>
                  </div>
                  <img
                    className="w-3 relative h-1.5 object-contain"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover hidden"
                    alt=""
                    src="/inputsuffix@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Property Age
                </div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-start justify-start gap-[24px] text-sm text-black">
                <div className="shadow-[0px_-8px_12px_rgba(1,_8,_16,_0.8)_inset,_0px_8px_12px_rgba(122,_183,_255,_0.9)_inset,_0px_6px_24px_4px_rgba(174,_185,_197,_0.32)] rounded-xl [background:linear-gradient(180deg,_#062244_32.1%,_#10345c_51.6%,_rgba(14,_54,_100,_0.95)_69.1%)] h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] box-border text-white">
                  <div className="relative">Any</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">Less than 1 Year</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">1- 3 Years</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">3- 5 Years</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">5 - 10 Years</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">Greater than 10 Years</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">5+ BHK</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="w-[673px] flex flex-col items-start justify-start gap-[2px]">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  BHK Type
                </div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-start justify-start gap-[24px] text-sm text-black">
                <div className="shadow-[0px_-8px_12px_rgba(1,_8,_16,_0.8)_inset,_0px_8px_12px_rgba(122,_183,_255,_0.9)_inset,_0px_6px_24px_4px_rgba(174,_185,_197,_0.32)] rounded-xl [background:linear-gradient(180deg,_#062244_32.1%,_#10345c_51.6%,_rgba(14,_54,_100,_0.95)_69.1%)] h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] box-border text-white">
                  <div className="relative">Any</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">1 RK</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">1 BHK</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">2 BHK</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">3 BHK</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">4 BHK</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">5+ BHK</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="w-[673px] flex flex-col items-start justify-start gap-[2px]">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative font-medium">Bathrooms/ Toilets</div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] text-sm text-black">
                <div className="shadow-[0px_-8px_12px_rgba(1,_8,_16,_0.8)_inset,_0px_8px_12px_rgba(122,_183,_255,_0.9)_inset,_0px_6px_24px_4px_rgba(174,_185,_197,_0.32)] rounded-xl [background:linear-gradient(180deg,_#062244_32.1%,_#10345c_51.6%,_rgba(14,_54,_100,_0.95)_69.1%)] h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] box-border text-white">
                  <div className="relative">Any</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">1</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">2</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">3</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">4</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">5</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">6+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="w-[673px] flex flex-col items-start justify-start gap-[2px]">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative font-medium">Balcony</div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-start justify-start gap-[24px] text-sm text-black">
                <div className="shadow-[0px_-8px_12px_rgba(1,_8,_16,_0.8)_inset,_0px_8px_12px_rgba(122,_183,_255,_0.9)_inset,_0px_6px_24px_4px_rgba(174,_185,_197,_0.32)] rounded-xl [background:linear-gradient(180deg,_#062244_32.1%,_#10345c_51.6%,_rgba(14,_54,_100,_0.95)_69.1%)] h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] box-border text-white">
                  <div className="relative">1</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">0</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">1</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">2</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">3</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">4 +</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">6+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="w-[673px] flex flex-col items-start justify-start gap-[2px]">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative font-medium">Tenant Preference</div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-start gap-[24px] text-sm text-black">
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] text-base border-[1px] border-solid border-border-grey">
                  <div className="relative">Any</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] text-base border-[1px] border-solid border-border-grey">
                  <div className="relative">Family</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">Bachelor (Man)</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">Bachelor (Women)</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">4</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">5</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">6+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="w-[673px] flex flex-col items-start justify-start gap-[2px]">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative font-medium">Availability</div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-start justify-start gap-[24px] text-sm text-black">
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">Immediate</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">within 15 days</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">within 1 month</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] flex flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">within 2 months</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">{`>10`}</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">5</div>
                </div>
                <div className="rounded-11xl bg-white box-border h-[39px] hidden flex-col items-center justify-center py-2.5 px-[25px] border-[1px] border-solid border-border-grey">
                  <div className="relative">6+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
              <div className="relative leading-[22px] font-medium">
                Property Description
              </div>
              <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                *
              </div>
            </div>
            <div className="self-stretch rounded-sm bg-white box-border h-24 overflow-hidden shrink-0 flex flex-row items-start justify-start text-sm text-gray-300 border-[1px] border-solid border-gainsboro">
              <div className="self-stretch rounded-sm bg-white flex flex-row items-start justify-start py-4 px-3 border-[1px] border-solid border-gainsboro">
                <div className="w-[796px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
                  <div className="relative leading-[22px]">
                    Add a description for your property to attract the best
                    tenant
                  </div>
                </div>
              </div>
            </div>
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
        <div className="absolute top-[0px] left-[-2px] w-[978px] flex flex-col items-start justify-end py-0 pr-0.5 pl-0 box-border text-center text-sm text-grey-text-2 font-merriweather-sans">
          <div className="w-[976px] flex flex-row items-start justify-start">
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 shadow-[0px_-2px_4px_rgba(18,_43,_73,_0.2)_inset,_0px_2px_6px_#fff_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] h-20 flex flex-col items-start justify-start text-main-blue"
              to="/sellers-flow-property-features-and-amenities"
            >
              <div className="self-stretch bg-aliceblue h-20 flex flex-row items-center justify-center p-2.5 box-border">
                <div className="w-[122px] relative inline-block shrink-0">
                  PROPERTY DETAILS
                </div>
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 bg-cream h-20 flex flex-row items-center justify-center p-2.5 box-border text-[inherit]"
              to="/sellers-flow-location-detail"
            >
              <div className="w-28 relative inline-block shrink-0">
                LOCATION DETAILS
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 bg-cream h-20 flex flex-row items-center justify-center p-2.5 box-border text-[inherit]"
              to="/sellers-flow-property-features-and-amenities"
            >
              <div className="w-28 relative inline-block shrink-0">{`FEATURES & AMENITIES`}</div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 bg-cream h-20 flex flex-row items-center justify-center p-2.5 box-border text-[inherit]"
              to="/sellers-flow-price-details"
            >
              <div className="w-28 relative inline-block shrink-0">
                PRICE DETAILS
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 bg-cream h-20 flex flex-row items-center justify-center p-2.5 box-border text-[inherit]"
              to="/sellers-photo-details"
            >
              <div className="w-28 relative inline-block shrink-0">
                PROPERTY IMAGES
              </div>
            </Link>
          </div>
          <div className="w-[976px] bg-border-grey flex flex-col items-start justify-center py-0 pr-0.5 pl-0 box-border">
            <div className="self-stretch relative bg-main-blue h-2 [transform:_rotate(180deg)]" />
          </div>
        </div>
        <div className="absolute top-[88px] right-[0px] w-[15px] h-[245px]">
          <div className="absolute top-[0px] left-[-1px] bg-whitesmoke w-4 h-[404px]" />
        </div>
        <div className="absolute h-[9.24%] w-[1.02%] top-[17.57%] right-[0.31%] bottom-[73.19%] left-[98.67%] rounded-mini bg-lightgray-200" />
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-main-blue h-[60px] flex flex-row items-center justify-between py-2.5 px-[65px] box-border text-xs text-white">
          <div className="relative">
            <span>{`Need Help? `}</span>
            <span className="font-medium">Call 9999999999</span>
          </div>
          <Button
            className="w-[110px]"
            disableElevation
            color="primary"
            variant="contained"
            href="/sellers-flow-location-detail"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 110, height: 32 }}
          >
            NEXT
          </Button>
        </div>
      </div>
      <div className="absolute w-[calc(100%_+_2px)] top-[-1px] right-[-1px] left-[-1px] bg-cream box-border h-[74px] overflow-hidden flex flex-row items-end justify-start pt-[9px] px-[60px] pb-[13px] gap-[264px] text-lg text-peru font-merriweather border-[1px] border-solid border-cream-dark">
        <a className="[text-decoration:none] w-[105px] relative h-12 text-[inherit]">
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
        </a>
        <div className="h-[27px] flex flex-row items-end justify-start gap-[40px] text-sm text-black font-inter">
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <a className="[text-decoration:none] relative font-bold text-[inherit]">
                PROPERTIES
              </a>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <a className="[text-decoration:none] relative font-bold text-[inherit]">
                MY DASHBOARD/ACTIVITY
              </a>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <Link
                className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit]"
                to="/sellers-flow-location-detail"
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
              <a className="[text-decoration:none] relative font-bold text-[inherit]">
                MORE
              </a>
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

export default SellersFlowPropertyDetail;
