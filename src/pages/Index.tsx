import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheReality from "@/components/sections/TheReality";
import OperatingModel from "@/components/sections/OperatingModel";
import Capabilities from "@/components/sections/Capabilities";
import GovernanceScale from "@/components/sections/GovernanceScale";
import EngagementGate from "@/components/sections/EngagementGate";
import SiteFooter from "@/components/sections/SiteFooter";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TheReality />
      <OperatingModel />
      <Capabilities />
      <GovernanceScale />
      <EngagementGate />
      <SiteFooter />
    </main>
  );
};

export default Index;
