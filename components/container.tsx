export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto relative my-2 w-[90vw] md:my-4 md:w-[80vw] lg:my-8 lg:w-[70vw]">
      {children}
    </div>
  );
}
