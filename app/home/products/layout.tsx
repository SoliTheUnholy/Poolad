import Container from "@/components/container";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="h-auto rounded-xl bg-muted transition-all duration-500 ease-in">
        {children}
      </div>
    </Container>
  );
}
