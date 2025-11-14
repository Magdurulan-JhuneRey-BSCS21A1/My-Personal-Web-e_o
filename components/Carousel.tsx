export default function Carousel() {
  return (
    <div className="flex justify-center py-4">
      <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] bg-white shadow-lg rounded-lg flex items-center justify-center p-4">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 text-center">
            Tweet
        </p>
      </div>
    </div>
  );
}