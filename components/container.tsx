export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto relative my-4 w-[90vw] md:my-8 md:w-[80vw] lg:my-16 lg:w-[70vw]">
      {children}
    </div>
  );
}
