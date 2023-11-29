import { BRAND } from "@/types/brand";
import Image from "next/image";

const aditionalMaterial: any[] = [
  {
    link: "/slides/clase1.png",
    name: "Clase 1",
  },
  {
    logo: "/slides/clase2.pdf",
    name: "Clase 2",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        <div className="grid rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Láminas de la clase
            </h5>
          </div>
        </div>

        {aditionalMaterial.map((materialData, key) => (
          <div
            className={`grid sm:grid-cols-5 ${
              key === materialData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <a
                href={materialData.link}
                className="text-black dark:text-white sm:block"
              >
                <h5>{materialData.name}</h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
