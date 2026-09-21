import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import FeaturedInsights from "@/components/sections/FeaturedInsights";
import { Ecosystem, OperatingModel, PeopleAndEngagement, ProblemsWeSolve, ProofStrip, WhatWeBuild } from "@/components/sections/HomeRedesign";

const Index = () => (
  <main id="main-content">
    <SEO title="Execution Is Ownership" description="Dropwing Groups builds, operates, and scales the infrastructure, governed intelligence, and brand systems organizations depend on." />
    <Hero />
    <ProofStrip />
    <WhatWeBuild />
    <ProblemsWeSolve />
    <OperatingModel />
    <Ecosystem />
    <FeaturedInsights />
    <PeopleAndEngagement />
  </main>
);

export default Index;
