import LoginForm from "@/components/LoginForm";
import { Card } from "@/components/ui/card";
import Spline from "@splinetool/react-spline/next";

export default function login() {
  return (
    <div className="relative bg-muted grid h-[93vh] items-center justify-center overflow-hidden lg:grid-cols-5">
      <div className="z-10 flex h-[93vh] items-center justify-center lg:col-span-2">
         <LoginForm/>
      </div>
      <div className="flex -mt-[800px] lg:m-0 justify-center lg:block overflow-hidden lg:col-span-3">
        <Spline
          className="lg:block drop-shadow-md"
          scene="../../cube.splinecode"
        />
      </div>
    </div>
  );
}
