import Hero from '@/components/persynix/sections/Hero';
import WhatWeBuild from '@/components/persynix/sections/WhatWeBuild';
import FeaturedWork from '@/components/persynix/sections/FeaturedWork';
import TechStack from '@/components/persynix/sections/TechStack';
import Process from '@/components/persynix/sections/Process';
import Metrics from '@/components/persynix/sections/Metrics';
import LeadershipSection from '@/components/persynix/sections/LeadershipSection';
import InsightsPreview from '@/components/persynix/sections/InsightsPreview';
import FinalCTA from '@/components/persynix/sections/FinalCTA';

const Home = () => (
  <>
    <Hero />
    <WhatWeBuild />
    <FeaturedWork />
    <TechStack />
    <Process />
    <Metrics />
    <LeadershipSection />
    <InsightsPreview />
    <FinalCTA />
  </>
);

export default Home;
