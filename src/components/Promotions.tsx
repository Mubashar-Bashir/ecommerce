import { Products } from "@/app/utils/mocks";
import { Product } from "@/app/utils/types";
import Image, { StaticImageData } from "next/image";

function getPromotions() {
  return Products.filter((p) => p.is_promotion);
}

export const Promotions = () => {
  const Promotion_selector = getPromotions();


  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div>
          <h3 className="text-blue-600 center font-bold mt-2">Promotions</h3>
          <h1 className="text-4xl center font-bold mt-3">
            Our Promotions Events
          </h1>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        {/* Left side div with grid structure */}
        <div className="grid-cols-2 w-2/5 space-y-3">
          {/* Top grey div */}
          <div className="flex bg-gray-300">
            <div className="px-8 py-4">
              <h1 className="text-3xl font-bold">GET UP TO <br /> 60%</h1>
              <p className="">For the summer <br /> season</p>
            </div>
            {/* flex image for left div women wear black-shade */}
            <div className="flex scale-100 space-x-4">
              {Promotion_selector.map((item, index) =>
                item.id === 10 ? (
                  <div key={index}>
                    <Image
                      src={item.img}
                      alt="image"
                      width={300}
                      height={250}
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>
          {/* Bottom black div */}
          <div className="flex-col mt-3 px-5 py-8 w-full bg-gray-900 text-white justify-around items-center">
            <h1 className="text-4xl font-bold center mt-15">GET 30% Off </h1>
            <span className="center mt-3 text-white">
              USE PROMO CODE
            </span>
            <span className="bg-slate-600 mt-2 center ">
              DINEWEEKEND SALE
            </span>
          </div>
        </div>

        {/* Right side divs */}
        <div className="flex-2 space-y-4 h-300 flex">
          {Promotion_selector.map((item, index) =>
            item.id === 11 ? (
              <div key={index} className="bg-rose-100 flex flex-col items-center">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="line-through text-gray-600">
                  ${item.old_price}{" "}
                </p>
                <p className="font-bold">${item.new_price}</p>
                <Image
                  src={item.img}
                  alt="image"
                  width={250}
                  height={250}
                />
              </div>
            ) : null
          )}
        </div>

        <div className="flex-2 space-y-4 h-300 flex">
          {Promotion_selector.map((item, index) =>
            item.id === 1 ? (
              <div key={index} className="flex-col bg-gray-300 items-center">
                <p className="flex text-xl font-bold">{item.title}</p>
                <p className="flex flex-row line-through text-gray-600">
                  ${item.old_price}{" "}
                </p>
                <p className="flex-row font-bold">${item.new_price}</p>
                <div className="flex h-400">
                  <Image
                    src={item.img}
                    alt="image"
                    width={250}
                    height={250}
                  />
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default Promotions;
