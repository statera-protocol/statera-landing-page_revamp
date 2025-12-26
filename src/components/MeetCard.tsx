import Image from "next/image";
import React from "react";

const subProduct = [
  {
    product: "Stable Coin",
    icon: "/stablecoinicon.png",
  },
  {
    product: "Launchpad",
    icon: "/launch-icon.png",
  },
  {
    product: "Liquid Staking",
    icon: "/liquidstakingicon.png",
  },
];

const MeetCard = () => {
  return (
    <div className="w-100 lg:w-114 rounded-4xl p-1 bg-linear-to-b from-[#3490C9] to-[#FFFFFF] mt-18 relative mx-auto md:mx-0">
      <div className="w-full h-full rounded-4xl p-2 md:p-4 lg:p-8 bg-linear-to-r from-[#1d01b9] to-[#060124]">
        <div>
          <span className="py-2 px-10 tracking-widest text-2xl bg-white text-black font-semibold rounded-2xl absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2">
            Offering
          </span>
          <div>
            <div className="list-none flex flex-col gap-2  bg-linear-to-r from-[#FFFFFF] via-[#173AED] via-[#ED2222] to-[#D2E5F2] p-px rounded-2xl lg:mt-4">
              <div className="list-none flex flex-col gap-2 bg-linear-to-r from-[#000001] to-[#0F0067] p-4 md:p-8 rounded-2xl">
                {subProduct.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full flex justify-between items-center rounded-4xl p-px bg-linear-to-r from-[#FFFFFF] via-[#173AED] via-[#ED2222] to-[#D2E5F2]"
                  >
                    <div
                      key={idx}
                      className="w-full flex justify-between items-center p-2 rounded-4xl bg-linear-to-r from-[#000001] to-[#0F0067] px-6"
                    >
                      <p className="text-xl md:text-2xl font-semibold">
                        {item.product}
                      </p>
                      <span>
                        <Image
                          src={item.icon}
                          alt={item.product}
                          width={50}
                          height={50}
                        />
                      </span>
                    </div>
                  </div>
                ))}
                <button className="mt-4 py-4 uppercase bg-white rounded-2xl text-black text-2xl md:text-2xl font-bold px-4">
                  <h3>In One Ecosystem</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetCard;
