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
    <div className="flex flex-col">
      <div className="grid rounded-sm bg-gray-2 dark:bg-meta-4">
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            Audios
          </h5>
        </div>
      </div>

      {audioMaterial.map((materialData, key) => (
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
}
