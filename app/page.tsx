import OrderbookClient from "./orderbookClient";
import CurrentOrder from "./currentOrder";

import Card from "./components/Card";
import Header from "./components/Header";
import PriceBox from "./components/PriceBox";

export default function Home() {
  return (
    <main className="bg-gray-800 w-screen h-screen text-white">
      <Header />
      <div className=" max-w-[1240px] h-[80vh] text-black mx-auto ">
        <div className="grid grid-cols-5 w-full h-full gap-5 bg-gray-200 rounded-2xl shadow-lg p-5">
          <div className="col-span-3 bg-gray-200  ">
            <div className="flex flex-col gap-5 w-full h-full">
              <div className="h-1/2 bg-gray-200 p-2">
                <div className="flex flex-row gap-3 ">
                  <PriceBox />
                  <PriceBox />
                </div>
              </div>
              <div>
                <div>
                  <PriceBox />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 py-10 px-5">
            <div className="w-full pr-5">
              <Card qoutetitle="Quote Token" basetitle="Base Token" />
            </div>
          </div>
        </div>
      </div>
    </main>
    // <CurrentOrder />
  );
}
