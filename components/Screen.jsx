import React from "react";
import TextMsg from "./TextMsg";
import BellCircle from "./BellCircle";
import SendButton from "./SendButton";

const Screen = () => {
  return (
    <div className="bg-[#2a2041] sm:my-6 my-0  mx-auto w-[375px] h-[780px] ">
        <TextMsg /> 
        <BellCircle />
      <SendButton/>
    </div>
  );
};

export default Screen;