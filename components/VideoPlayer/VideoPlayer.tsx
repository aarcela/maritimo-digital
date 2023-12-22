import React, { ReactNode } from "react";
import ReactPlayer from "react-player";

interface VideosProps {
  title: string;
  url: string
}

export const VideosPlayer: React.FC<VideosProps> = ({ title, url}) => {
  return (
    <div className="flex flex-col rounded-lg border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="items-start flex-initial ">
        {/* <ReactPlayer url={url} /> */}
        <iframe
          src={url} allowFullScreen
        ></iframe>
      </div>

      <div className="flex-1">
        <span className={`text-2xl font-medium font-satoshi`}>
          {title}
        </span>
      </div>
    </div>
  );
};
