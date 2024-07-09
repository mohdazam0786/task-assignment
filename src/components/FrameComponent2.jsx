import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "", group33405, lift, propWidth }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`h-24 w-[135px] flex flex-col items-center justify-between py-4 px-0 box-border text-left text-sm text-grey-text-2 font-inter ${className}`}
      style={frameDiv1Style}
    >
      <img
        className="w-[30.1px] h-[34px] relative object-contain"
        alt=""
        src={group33405}
      />
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-14">
        <div className="self-stretch flex flex-row items-end justify-start">
          <div className="relative inline-block min-w-[22px]">{lift}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  group33405: PropTypes.string,
  lift: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent2;
