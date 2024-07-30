"use client";
import React from "react";
import toast from "react-hot-toast";

const SendButton = () => {
  // defining function to send notifiations
  function sendNotification() {
    toast.success("Hey, This is notification!");
  }

  return (
    <div className="w-[327px] mx-auto mt-[120px]">
      <div className="w-[327px] min-h-[71px] justify-center items-center mx-auto flex flex-col gap-[9px]">
      <span className="w-[204px] h-[40px] text-[#FFFFFF] font-inter text-[28px] font-[700] leading-[31.9px] text-center">
        Lorem Ipsum...
      </span>
      <span className="w-[325px] opacity-60 h-[10px] text-[#FFFFFF] font-inter text-[19px] font-[200] leading-[22.9px] text-center">
        Lorem ipsum dolor sit amet.
      </span>
    </div>
      <button
        onClick={sendNotification}
        className="min-w-[327px] min-h-[46px] mt-[70px] border-[2.5px] flex justify-center items-center
       border-[#6434ce] rounded-[8px] button-gradient bg-gradient-to-r from-[#1d103a] via-[#1d103a] to-transparent"
      >
        <p className="w-[250px] h-[16px] font-inter text-[17px] text-base font-[600] leading-4 text-[#ffffff]">
          Send Notification
        </p>
      </button>
    </div>
  );
};

export default SendButton;
