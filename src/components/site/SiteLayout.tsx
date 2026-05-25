import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-28 sm:pb-32">
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
      <MobileBottomNav />
    </main>
  );
}
