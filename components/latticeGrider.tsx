import Image from "next/image";
export default function Lattice() {
  return (
    <>
      <div className="relative -skew-x-6 -skew-y-6 scale-110">
        <Image
          className="absolute object-cover"
          width={1500}
          height={1500}
          src="/r1.png"
          alt=""
        />
        <Image
          width={1500}
          height={1500}
          className="absolute object-cover"
          src="/t2.png"
          alt=""
        />
        <Image
          width={1500}
          height={1500}
          className="absolute object-cover"
          src="/o3.png"
          alt=""
        />
        <Image
          width={1500}
          height={1500}
          className="object-cover"
          src="/l4.png"
          alt=""
        />
      </div>
    </>
  );
}
