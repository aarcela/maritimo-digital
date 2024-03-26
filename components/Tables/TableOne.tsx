import { BRAND } from "@/types/brand";
import Image from "next/image";

const aditionalMaterial: any[] = [
  {
    link: "/slides/Clase1.pdf",
    name: "Clase 1",
  },
  {
    link: "/slides/Clase2.pdf",
    name: "Clase 2",
  },
  {
    link: "/slides/Clase3.pdf",
    name: "Clase 3",
  },
  {
    link: "https://drive.google.com/file/d/1JOa2y8vSbxJ8lSQRuKrc3AWbkUomtF1c/view?usp=drive_web",
    name: "Clase 4",
  },
  {
    link: "https://drive.google.com/file/d/1bYswjLTm4BG6ThcELdNvGC0MXTGzlIm9/view?usp=drive_web",
    name: "Clase 5",
  },
  {
    link: "https://drive.google.com/file/d/1eDMF9OKcJj4MGw1U7VN9Iha6b3DBdRwp/view?usp=drive_web",
    name: "Clase 6",
  },
  {
    link: "https://drive.google.com/file/d/1kG0MuM3652H3jsuSZQUjqyDTUq_Wc4p7/view?usp=drive_link",
    name: "Clase 7",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="p-2.5 xl:p-5">
        <h5 className="text-sm font-medium uppercase xsm:text-base">Láminas de la clase</h5>
      </div>
      <div className="flex flex-row gap-2">
        <div className="grid rounded-sm bg-gray-2 dark:bg-meta-4"></div>

        {aditionalMaterial.map((materialData, key) => (
          <a key={key} href={materialData.link} target="_blank" rel="noreferrer">
            <div className="w-25 text-black-2 m-4 rounded border p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M0 448c0 35.3 28.7 64 64 64H224V384c0-17.7 14.3-32 32-32H384V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm96 32l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM384 384H256V512L384 384z" />
              </svg>
              {materialData.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
