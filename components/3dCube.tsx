import Spline from "@splinetool/react-spline/next";

export default function Cube() {
  return (
    <>
      <div className="absolute">
        <Spline className="drop-shadow-md" scene="cube.splinecode" />
      </div>
      <div className="absolute h-[1024px] w-[1024px]"></div>
    </>
  );
}
