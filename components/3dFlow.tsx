import Spline from "@splinetool/react-spline/next";

export default function Flow() {
  return (
    <>
      <div className="absolute">
        <Spline
          className="drop-shadow-md"
          scene="flow.splinecode"
        />
      </div>
      <div className="absolute h-[1024px] w-[1024px]"></div>
    </>
  );
}
