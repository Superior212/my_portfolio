import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/Floating-navbar";
import { navItems } from "../../data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav className="" navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
