const CircleTileButton = ({
  source_code_link,
  src,
  alt,
}: {
  source_code_link: string;
  src: string;
  alt: string;
}) => {
  return (
    <div
      onClick={() => window.open(source_code_link, "_blank")}
      className="bg-c2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-c4"
    >
      <img src={src} alt={alt} className="w-3/4 h-3/4 object-contain" />
    </div>
  );
};

export default CircleTileButton;
