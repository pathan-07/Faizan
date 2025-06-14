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
      <BackToTop />
    </div>
  );
};

const BackToTop = () => {
  return (
    <a
      href="#hero"
      className="fixed bottom-8 right-8 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-70 transition-all duration-300 z-50 hover:bg-opacity-90 hover:opacity-100"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </a>
  );
};

export default Layout;
