import RegisterForm from "@/components/RegisterForm";
import Spline from "@splinetool/react-spline/next";

export default function Register() {
  return (
    <div className="flex relative h-[93vh] overflow-hidden w-screen items-center justify-center bg-muted">
      <RegisterForm />
      {/* <div className="h-screen w-screen">
        <Spline className="drop-shadow-md grow-0" scene="../../flow.splinecode" />
      </div> */}
    </div>
  );
}
