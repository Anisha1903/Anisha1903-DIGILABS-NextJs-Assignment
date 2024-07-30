// import React from "react";
// import { PiBell } from "react-icons/pi";

// const BellCircle = () => {
//   return (
//     <div className="w-[375px] h-[290px] mt-16 flex justify-center items-center mx-auto">
//       {/* circles */}
//         <div className="w-[375px]  h-[350px] flex justify-center items-center border-gradient">
//           <div className="w-[300px] h-[300px]  flex justify-center items-center border-gradient">
//             <div className="w-[222px] h-[222px]  flex justify-center items-center border-gradient">
//               <div className="w-[160px] h-[160px]  bg-custom-gradient flex justify-center items-center rounded-full">
//                 {/* <div className="w-[100px] h-[100px] bg-custom-gradient  flex justify-center items-center rounded-full"> */}
//                 <PiBell className="w-[100px] h-[100px] opacity-95 text-white" />
//                 {/* </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BellCircle;

import React from "react";
import { PiBell } from "react-icons/pi";

const BellCircle = () => {
  return (
    <div className="w-[375px] h-[290px] mt-16 flex justify-center items-center mx-auto">
      {/* circles */}
      <div className="w-[375px] h-[375px] flex justify-center items-center border-gradient">
        <div className="w-[300px] h-[300px] flex justify-center items-center border-gradient">
          <div className="w-[222px] h-[222px] flex justify-center items-center border-gradient">
            <div className="w-[160px] h-[160px] bg-custom-gradient flex justify-center items-center rounded-full">
              <PiBell className="w-[100px] h-[100px] opacity-95 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellCircle;
