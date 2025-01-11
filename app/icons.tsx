  import React, { useState } from "react";
import Image from "next/image";

export function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (href === "#") {
      e.preventDefault(); 
      setIsModalOpen(true); 
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a
        href={href}
        onClick={handleLinkClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
      >
        <div className="flex text-center w-full">
          <div className="w-10 h-10 flex items-center justify-center">
            {image && (
              <Image
                className="rounded-sm"
                alt={title}
                src={image}
                width={24}
                height={24}
              />
            )}
          </div>
          <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
            {title}
          </h2>
        </div>
      </a>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
          style={{
            animation: "fadeIn 0.3s ease-out, slideIn 0.3s ease-out",
          }}
        >
          <div
            className="bg-white p-6 rounded-lg w-11/12 sm:w-96 transition-transform transform"
            style={{
              animation: "slideDown 0.3s ease-out forwards",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6L14 14M14 6L6 14" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">Mahasiswa tingkat akhir yang tertarik pada dunia IT, terutama dalam pengembangan aplikasi dan otomasi bot. Saat ini, juga fokus mendalami Web 3.0, dengan fokus pada pembuatan smart contract di jaringan Ethereum.</p>
          </div>
        </div>
      )}
    </>
  );
}

