import LoginForm from "@/components/LoginForm";
export default function login() {
  return (
    <div className="relative grid h-[93vh] items-center justify-center overflow-hidden lg:grid-cols-5">
      <div className="z-10 flex h-[93vh] items-center justify-center lg:col-span-5">
         <LoginForm/>
      </div>
    </div>
  );
}
