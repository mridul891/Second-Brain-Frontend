import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <>
      <div
        className="p-8 bg-white rounded-xl  border border-gray-200 
      max-w-[22rem] flex flex-col gap-4 items-center min-h-32 min-w-72 h-full"
      >
        {/* Header Component */}
        <div className="flex justify-between w-full font-bold">
          {/* First child */}
          <div className="flex items-center gap-3">
            <ShareIcon />
            {title}
          </div>
          {/* Second Child */}
          <div className="flex gap-2 text-gray-500 items-center">
            <ShareIcon />
            <ShareIcon />
          </div>
        </div>
        {/* Video Component   */}
        <div className="">
          {type == "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type == "twitter" && (
            <div className="w-full">
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
