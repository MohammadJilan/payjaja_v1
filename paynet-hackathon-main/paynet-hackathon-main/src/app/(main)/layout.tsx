import Navbar from "@/lib/components/shared/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-gray-200">{children}</main>
      <Navbar />
    </>
  );
}
