import React, { useEffect, useState } from "react";
import { ZCrystalData } from "../data/zCrystalData";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BsInfoCircle } from "react-icons/bs";

const ZCrystalDetail = () => {
  const [zCrystalData, setZCrystalData] = useState(ZCrystalData);
  const [parent] = useAutoAnimate();

  const [searchTerm, setSearchTerm] = useState("");
  const filteredZcry = zCrystalData.filter((zcry) => zcry.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const [selectedZcry, setSelectedZcry] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = (zcry) => {
    setSelectedZcry(zcry);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedZcry(null);
    setModalOpen(false);
  };

  useEffect(() => {
    setZCrystalData(ZCrystalData);
  }, []);

  return (
    <section className="grid gap-2 items-center justify-center mx-auto mt-16">
      {/* Searching Data */}
      <div className="lg:-ml-[242px] xl:-ml-[435px]">
        <input type="text" value={searchTerm} placeholder="Search Tms..." onChange={(e) => setSearchTerm(e.target.value)} className="w-[152px] rounded-md" />
      </div>

      {/*=====Display Mapping Data=====*/}
      <div ref={parent} className="relative z-0 md:grid md:grid-cols-2 xl:grid-cols-3 lg:ml-56 xl:ml-72 2xl:ml-32 2xl:-mr-32 ">
        {filteredZcry.map((zcry) => (
          <div key={zcry.id}>
            <div className="rounded-md w-[300px] flex flex-row justify-center bg-white p-3 gap-2 m-2 ">
              <div className="container p-3 flex flex-col gap-1 ">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">{zcry.name}</div>
                  <div className={`w-3/12 flex items-center justify-center rounded-l-full bg-costumeRed`}>
                    <img src={zcry.img} alt={zcry.name} className="pl-5 pr-2" />
                  </div>
                </div>

                <div className="flex rounded-md items-center justify-center cursor-pointer bg-slate-400 p-1 hover:-translate-y-1 transform-all duration-1000" onClick={() => handleModalOpen(zcry)}>
                  <span className="mr-2">Detail</span>
                  <BsInfoCircle />
                </div>
                <hr />

                {/* Display Mapping Data */}
                {/* Modal Box */}
                {modalOpen && selectedZcry && (
                  <>
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center lg:ml-40 sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={handleModalClose}>
                          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                          &#8203;
                        </span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                {/* Icon */}
                                <img src={selectedZcry.img} alt={selectedZcry.name} />
                              </div>
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedZcry.name}</h3>
                                <div className="mt-2">
                                  {/* Source Tms */}
                                  <h2 className="font-semibold">Source</h2>
                                  <div className="border p-2 rounded-md flex flex-wrap justify-between gap-2">
                                    {selectedZcry.sources.map((source, index) => {
                                      return (
                                        <div key={index} className="bg-slate-400 grow rounded-md px-4 py-2">
                                          {source}
                                        </div>
                                      );
                                    })}
                                  </div>
                                  <hr />

                                  {/* Description Tms */}
                                  <h2 className="font-semibold pt-4">Description</h2>
                                  <div className="flex flex-col gap-2">
                                    <div className="p-2 border rounded-md">{selectedZcry.description}</div>

                                    <div className="p-2 selection:bg-fuchsia-300 border rounded-md">
                                      <span className={`font-semibold text-${selectedZcry.orangeColor}`}>Orange Effect: </span>
                                      {selectedZcry.orangeEffect}
                                    </div>

                                    <div className="p-2 border rounded-md">
                                      <span className={`font-semibold text-${selectedZcry.redColor}`}>Red Effect: </span>
                                      {selectedZcry.redEffect}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                              type="button"
                              onClick={handleModalClose}
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZCrystalDetail;
