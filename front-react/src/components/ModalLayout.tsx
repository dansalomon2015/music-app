import React, { FC } from "react";
import { Artist } from "./Artist";
import { Albums } from "./Albums";

export const ModalLayout: FC<{ artistId: string; goBack: () => void }> = ({ artistId, goBack }) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed  inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative w-full max-w-full max-h-full transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all ">
                        <div className="bg-white">
                            <div className="flex flex-wrap border-b-2">
                                <div className="w-full min-h-full bg-gray-300" id="artist-image-container">
                                    <Artist artistId={artistId} />
                                </div>
                            </div>
                            <div className="pt-5 px-10 sm:pt-14 sm:px-24">
                                <Albums artistId={artistId} />
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                onClick={goBack}
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
