import Image from "next/image";

const Button = ({
  bgColor = "bg-black",
  fontSize,
  className,
  label = "",
  action,
  bannerImage,
}) => {
  return (
    <>
      {bannerImage ? (
        <div className=" px-4 py-1 bg-[#ffffff] flex justify-between items-center gap-2 rounded-md cursor-pointer ">
          <div className="w-4 h-4 relative ">
            <Image src={bannerImage} alt="google image" fill priority />
          </div>
          <p className="text-sm text-[#858585]">{label}</p>
        </div>
      ) : (
        <button
          type="submit"
          onClick={action}
          className={`${bgColor} ${fontSize} ${className}`}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
