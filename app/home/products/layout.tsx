import Container from "@/components/container";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="h-auto min-h-[85svh] rounded-xl bg-muted transition-all duration-500 ease-in">
        {children}
      </div>
    </Container>
  );
}
