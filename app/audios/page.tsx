const audioMaterial: any[] = [
  {
    link: "https://drive.google.com/file/d/1W70Pa4gWX3N5-5VDCsRDl7MjTZCeMQ5U/view",
    name: "Clase 1",
  },
  {
    link: "https://drive.google.com/file/d/1dKxRtzcZMpTlIwCI25D0S3dGUgEmam15/view",
    name: "Clase 2",
  },
  {
    link: "https://drive.google.com/file/d/1VTITBzi2RgZHM-GgIi-ot5WlJg_YMTY8/view",
    name: "Clase 3",
  },
];

export default function Audios() {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="grid rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Audios
            </h5>
          </div>
        </div>
      <div className="flex flex-row gap-2">
        {audioMaterial.map((materialData, key) => (
          <a key={key} href={materialData.link}>
            <div className="w-25 text-black-2 m-4 rounded border p-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
              </svg>
              {materialData.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
