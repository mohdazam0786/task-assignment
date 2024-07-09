import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

const SellersFlowPriceDetails = () => {
  const [maintainanceAnchorEl, setMaintainanceAnchorEl] = useState(null);
  const [inputAnchorEl, setInputAnchorEl] = useState(null);
  const maintainanceOpen = Boolean(maintainanceAnchorEl);
  const handleMaintainanceClick = (event) => {
    setMaintainanceAnchorEl(event.currentTarget);
  };
  const handleMaintainanceClose = () => {
    setMaintainanceAnchorEl(null);
  };
  const inputOpen = Boolean(inputAnchorEl);
  const handleInputClick = (event) => {
    setInputAnchorEl(event.currentTarget);
  };
  const handleInputClose = () => {
    setInputAnchorEl(null);
  };
  return (
    <div className="w-full relative bg-white h-[900px] overflow-hidden text-left text-base text-gray-200 font-inter">
      <div className="absolute top-[130px] left-[calc(50%_-_488px)] shadow-[0px_2px_8px_2px_rgba(18,_43,_73,_0.18)] rounded-2xl bg-white w-[976px] h-[552px] overflow-hidden">
        <div className="absolute top-[124px] left-[calc(50%_-_410px)] w-[820px] h-[368px] overflow-y-auto flex flex-col items-start justify-start gap-[60px]">
          <div className="w-[820px] flex flex-row items-start justify-between">
            <TextField
              className="[border:none] bg-[transparent] font-inter text-lg text-gray-300"
              color="primary"
              label="Rent"
              placeholder="₹"
              variant="standard"
              sx={{ "& .MuiInputBase-root": { height: "70px" } }}
            />
            <TextField
              className="[border:none] bg-[transparent] font-inter text-lg text-gray-300"
              color="primary"
              label="Security"
              placeholder="₹"
              variant="standard"
              sx={{ "& .MuiInputBase-root": { height: "70px" } }}
            />
          </div>
          <div className="w-[820px] flex flex-row items-start justify-start gap-[60px]">
            <div className="flex flex-col items-start justify-start">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative leading-[22px] font-medium">
                  Maintenance
                </div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="w-[382px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset]">
                <Button
                  id="button-Maintenance"
                  aria-controls="menu-Maintenance"
                  aria-haspopup="true"
                  aria-expanded={maintainanceOpen ? "true" : undefined}
                  onClick={handleMaintainanceClick}
                  color="primary"
                  sx={{
                    width: "382",
                    height: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "2px",
                  }}
                >
                  Maintenance
                </Button>
                <Menu
                  anchorEl={maintainanceAnchorEl}
                  open={maintainanceOpen}
                  onClose={handleMaintainanceClose}
                >
                  <MenuItem onClick={handleMaintainanceClose}>
                    Included in rent
                  </MenuItem>
                  <MenuItem onClick={handleMaintainanceClose}>
                    Extra maintenance
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div className="w-[380px] flex flex-col items-start justify-start">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start pt-0 px-0 pb-2 gap-[4px]">
                <div className="relative leading-[22px] font-medium">{`Maintenance `}</div>
                <div className="relative text-sm leading-[22px] text-dust-red-5 text-right">
                  *
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <TextField
                  className="[border:none] bg-[transparent] w-[186px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] font-inter text-lg text-gray-300"
                  color="primary"
                  label="Maintenance"
                  placeholder="₹  Maintenance"
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": { height: "42px" },
                    width: "186px",
                  }}
                />
                <div className="w-[186px] shadow-[0px_1px_1px_rgba(0,_0,_0,_0.25)_inset] rounded-sm bg-white box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-start border-[1px] border-solid border-grey-text-2">
                  <div className="self-stretch flex-1">
                    <Button
                      id="button-Monthly"
                      aria-controls="menu-Monthly"
                      aria-haspopup="true"
                      aria-expanded={inputOpen ? "true" : undefined}
                      onClick={handleInputClick}
                      color="primary"
                      sx={{
                        width: "184",
                        height: "40",
                        backgroundColor: "#fff",
                        borderRadius: "2px",
                      }}
                    >
                      Monthly
                    </Button>
                    <Menu
                      anchorEl={inputAnchorEl}
                      open={inputOpen}
                      onClose={handleInputClose}
                    >
                      <MenuItem onClick={handleInputClose}>Montly</MenuItem>
                      <MenuItem onClick={handleInputClose}>weekly</MenuItem>
                      <MenuItem onClick={handleInputClose}>yearly</MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TextField
            className="self-stretch font-inter font-medium text-base text-gray-200"
            color="primary"
            label="Additional Pricing details to convey to agent?"
            variant="standard"
            defaultValue="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
            multiline
          />
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
            <div className="flex-1 shadow-[0px_-2px_4px_rgba(18,_43,_73,_0.2)_inset,_0px_2px_6px_#fff_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] h-20 flex flex-col items-start justify-start text-black">
              <div className="self-stretch flex-1 bg-aliceblue flex flex-row items-center justify-center p-2.5">
                <div className="w-[122px] relative inline-block shrink-0">
                  PRICE DETAILS
                </div>
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
            <div className="absolute top-[0px] left-[0px] bg-main-blue w-[586px] h-2" />
          </div>
        </div>
        <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-main-blue h-[60px] flex flex-row items-center justify-between py-2.5 px-[65px] box-border text-xs text-white">
          <div className="relative">
            <span>{`Need Help? `}</span>
            <span className="font-medium">Call 9999999999</span>
          </div>
          <Button
            className="w-[120px] [filter:drop-shadow(0px_4px_4px_rgba(18,_43,_73,_0.32))]"
            color="primary"
            variant="contained"
            href="/sellers-photo-details"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 120, height: 33 }}
          >
            NEXT
          </Button>
        </div>
      </div>
      <div className="absolute w-[calc(100%_+_2px)] top-[-1px] right-[-1px] left-[-1px] bg-cream box-border h-[74px] overflow-hidden text-lg text-peru font-merriweather border-[1px] border-solid border-cream-dark">
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[calc(50%_-_27px)] left-[60px] w-[105px] h-12 text-[inherit]"
          to="/sellers-flow-property-detail"
        >
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
        </Link>
        <div className="absolute top-[32px] right-[60px] h-[27px] flex flex-row items-end justify-start gap-[40px] text-sm text-black font-inter">
          <div className="flex flex-row items-start justify-start gap-[32px]">
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <Link
                className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit]"
                to="/sellers-flow-property-detail"
              >
                PROPERTIES
              </Link>
            </div>
            <div className="flex flex-row items-end justify-center pt-2.5 px-2.5 pb-0">
              <Link
                className="cursor-pointer [text-decoration:none] relative font-bold text-[inherit]"
                to="/sellers-flow-location-detail"
              >
                MY DASHBOARD/ACTIVITY
              </Link>
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

export default SellersFlowPriceDetails;
