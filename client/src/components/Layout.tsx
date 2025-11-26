import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden max-w-[100vw]">
      <Navbar />
      <main className="flex-grow overflow-x-hidden w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
