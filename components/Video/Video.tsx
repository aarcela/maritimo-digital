import React, { ReactNode } from "react";
import ReactPlayer from "react-player";

interface VideosProps {
  title: string;
  url: string
}

export const VideosPlayer: React.FC<VideosProps> = ({ title, url}) => {
  return (
    <div className="rounded-sm w-max border border-stroke bg-white py-3 px-3 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex rounded-full bg-meta-2 dark:bg-meta-4">
        {/* <ReactPlayer url={url} /> */}
        <iframe
          src={url}
          width="640"
          height="480"
        ></iframe>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <span className={`flex items-center gap-1 text-sm font-medium`}>
          {title}
        </span>
      </div>
    </div>
  );
};
