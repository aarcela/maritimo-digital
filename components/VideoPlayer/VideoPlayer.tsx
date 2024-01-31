import React, { ReactNode } from "react";
import ReactPlayer from "react-player";

interface VideosProps {
  title: string;
  url: string
}

export const VideosPlayer: React.FC<VideosProps> = ({ title, url}) => {
  return (
    <div className="flex flex-col rounded-lg border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
        {/* <ReactPlayer url={url} /> */}
        <iframe
        className="w-100"
          src={url} allowFullScreen
        ></iframe>
      <div>
        <span className={`text-2xl font-medium font-satoshi`}>
          {title}
        </span>
      </div>
    </div>
  );
};
