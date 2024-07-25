import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold mr-4">
          <Package2 className="h-6 w-6" />
          <span>Bare-Bones App</span>
        </NavLink>
        <DesktopNavbar navItems={navItems} />
        <div className="flex-1" />
        <MobileSheet navItems={navItems} />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;