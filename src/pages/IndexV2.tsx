import HeroV2 from "@/components/HeroV2";
import FeaturedInsights from "@/components/sections/FeaturedInsights";
import LeadershipQuote from "@/components/sections/LeadershipQuote";
import TheReality from "@/components/sections/TheReality";
import OperatingModel from "@/components/sections/OperatingModel";
import Capabilities from "@/components/sections/Capabilities";
import GovernanceScale from "@/components/sections/GovernanceScale";
import EngagementGate from "@/components/sections/EngagementGate";

const IndexV2 = () => {
    return (
        <main>
            <HeroV2 />
            <FeaturedInsights />
            <LeadershipQuote />
            <TheReality />
            <OperatingModel />
            <Capabilities />
            <GovernanceScale />
            <EngagementGate />
        </main>
    );
};

export default IndexV2;
