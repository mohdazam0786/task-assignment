import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";

const Neighborhood = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_1px_16px_4px_rgba(108,_100,_93,_0.14)] rounded bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-8 pb-6 pr-[35px] pl-9 gap-[36px] max-w-full shrink-0 text-left text-13xl text-black font-merriweather-sans border-[0.5px] border-solid border-border-grey mq800:gap-[18px] mq800:pt-[21px] mq800:pb-5 mq800:box-border ${className}`}
    >
      <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-lgi mq800:text-7xl">
        Explore Neighborhood
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start gap-[17px] max-w-full text-center text-sm font-inter mq1350:flex-wrap">
        <iframe
          className="[border:none] flex-1 flex flex-col items-start justify-start min-w-[522px] max-w-full mq800:min-w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400488395!2d77.04417347155065!3d28.52725273882469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1720506923608!5m2!1sen!2sin"
        />
        <div className="w-[428px] bg-snow overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[42px] box-border min-w-[428px] max-w-full mq450:pb-[27px] mq450:box-border mq800:min-w-full mq1350:flex-1">
          <div className="bg-snow flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
            <button className="cursor-pointer [border:none] pt-0 px-0 pb-0 bg-[transparent] h-12 flex flex-col items-end justify-start box-border shrink-0">
              <div className="bg-cream-dark flex flex-row items-start justify-start py-[15px] px-9">
                <b className="relative text-sm inline-block font-merriweather-sans text-main-blue text-center min-w-[69px]">
                  Transport
                </b>
              </div>
              <div className="flex flex-row items-start justify-end py-0 pr-[3px] pl-1">
                <img
                  className="h-0.5 w-[135px] relative"
                  alt=""
                  src="/line-8.svg"
                />
              </div>
            </button>
            <div className="flex flex-row items-start justify-center shrink-0 [row-gap:20px] mq450:flex-wrap">
              <button className="cursor-pointer [border:none] py-[15px] px-[37px] bg-cream-dark flex flex-row items-start justify-start shrink-0 hover:bg-lightgray-100">
                <div className="relative text-sm font-merriweather-sans text-main-blue text-center inline-block min-w-[68px]">
                  Essentials
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[15px] px-[49px] bg-cream-dark flex flex-row items-start justify-start shrink-0 z-[1] ml-[-0.1px] hover:bg-lightgray-100 mq450:ml-0">
                <div className="relative text-sm font-merriweather-sans text-main-blue text-center inline-block min-w-[43px]">
                  Utility
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start py-3 px-0 box-border gap-[8px] max-w-full">
              <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-[19px] gap-[10px_201px] min-h-[172px] max-w-full border-[1px] border-solid border-border-grey mq800:gap-[50px] mq1125:gap-[100px]">
                <div className="w-[348px] flex flex-row items-center justify-between max-w-full gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[13px]">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-40.svg"
                    />
                    <div className="relative font-semibold inline-block min-w-[78px]">
                      Bus Station
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-41.svg"
                  />
                </div>
                <div className="w-[348px] flex flex-row items-center justify-between max-w-full gap-[20px] mq800:flex-wrap mq800:justify-center">
                  <div className="flex flex-col items-start justify-center gap-[16px] min-w-[162px] mq800:flex-1">
                    <div className="relative">Mira Road Station (E)</div>
                    <div className="relative">Mira Road Station (E)</div>
                    <div className="relative">Mira Road Station (E)</div>
                    <div className="relative">Mira Road Police Station</div>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[16px] min-w-[101px] mq800:flex-1">
                    <div className="relative inline-block min-w-[101px]">
                      0.7 km | 3 mins
                    </div>
                    <div className="relative inline-block min-w-[101px]">
                      0.8 km | 2 mins
                    </div>
                    <div className="relative inline-block min-w-[101px]">
                      0.9 km | 4 mins
                    </div>
                    <div className="relative inline-block min-w-[98px]">
                      1.8 km | 6 mins
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-center py-2.5 pr-[19px] pl-[17px] border-[1px] border-solid border-border-grey">
                <FormControl
                  className="self-stretch font-inter font-semibold text-sm text-black gap-[20px]"
                  variant="standard"
                  sx={{
                    borderRadius: "0px 0px 0px 0px",
                    width: "348px",
                    height: "22px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "22px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "22px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "22px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "22px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select color="primary" disableUnderline displayEmpty />
                  <FormHelperText />
                </FormControl>
              </div>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-center py-2.5 pr-[19px] pl-[17px] border-[1px] border-solid border-border-grey">
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                  <div className="flex flex-row items-center justify-start gap-[13px]">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-44.svg"
                    />
                    <div className="relative font-semibold inline-block min-w-[99px]">
                      Metro stations
                    </div>
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-45.svg"
                  />
                </div>
              </div>
              <FormControl
                className="self-stretch font-inter font-semibold text-sm text-black"
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "386px",
                  height: "46px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "46px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "46px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "46px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "46px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary">Airport</InputLabel>
                <Select
                  color="primary"
                  label="Airport"
                  disableUnderline
                  displayEmpty
                />
                <FormHelperText />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Neighborhood.propTypes = {
  className: PropTypes.string,
};

export default Neighborhood;
