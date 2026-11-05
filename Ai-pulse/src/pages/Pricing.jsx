import React, { useState } from 'react';
import PricingCard from '../components/pricing/PricingCard';
import FAQ from '../components/pricing/FAQ';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Professional Plans Data
  const proPlans = [
    {
      title: "Member",
      description: "Everything to grow your AI career",
      price: "$0",
      period: "forever",
      features: ["Profile, portfolio & resume", "Post, comment and follow", "Apply to unlimited jobs", "Weekly Pulse newsletter"],
      buttonText: "Start free",
      isPopular: false,
      buttonStyle: "secondary"
    },
    {
      title: "Pro",
      description: "Stand out to top AI employers",
      price: billingCycle === 'monthly' ? "$12" : "$9",
      period: "/month",
      features: ["Everything in Member", "Ad-free reading", "Featured Pro badge", "Who viewed my profile", "Profile analytics", "AI resume review", "Priority in employer search"],
      buttonText: "Upgrade to Pro",
      isPopular: true,
      buttonStyle: "primary"
    }
  ];

  // Employer Plans Data
  const employerPlans = [
    {
      title: "Starter",
      description: "For teams making a first AI hire",
      price: "$99",
      period: "/month",
      features: ["2 active job posts", "25 candidate contacts / mo", "Basic talent filters", "Company page"],
      buttonText: "Choose Starter",
      isPopular: false,
      buttonStyle: "secondary"
    },
    {
      title: "Growth",
      description: "For scaling AI teams",
      price: "$299",
      period: "/month",
      features: ["10 active job posts", "150 candidate contacts / mo", "All talent filters", "AI recommended candidates", "Saved candidate lists"],
      buttonText: "Choose Growth",
      isPopular: true,
      buttonStyle: "primary"
    },
    {
      title: "Enterprise",
      description: "For labs and large organizations",
      price: "Custom",
      period: "",
      features: ["Unlimited job posts", "Unlimited contacts", "Dedicated success manager", "SSO & team seats", "Employer branding"],
      buttonText: "Contact sales",
      isPopular: false,
      buttonStyle: "secondary"
    }
  ];

  return (
    <div className="w-full bg-[#0d1117]">
      {/* Header */}
      <div className="border-b border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-[1000px] mx-auto px-6 py-16 relative z-10">
          <h4 className="text-xs font-bold text-[#58a6ff] tracking-widest uppercase mb-3">Pricing</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Simple plans for builders and hirers
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Free for every AI professional. Upgrade when you want an edge — or when you're ready to hire.
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 py-16 space-y-24">
        
        {/* --- Section 1: Professionals --- */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h4 className="text-[10px] font-bold text-[#58a6ff] tracking-widest uppercase mb-1">For Professionals</h4>
              <h2 className="text-2xl font-bold text-white">Grow your AI career</h2>
            </div>
            
            {/* Billing Toggle */}
            <div className="flex items-center bg-[#161b22] border border-gray-700 rounded-full p-1 self-start md:self-auto">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${billingCycle === 'monthly' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center space-x-1 ${billingCycle === 'yearly' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
              >
                <span>Yearly</span>
                <span className="text-green-500 text-[10px] font-bold">-31%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proPlans.map((plan, i) => (
              <PricingCard key={i} {...plan} />
            ))}
          </div>
        </section>

        {/* --- Section 2: Employers --- */}
        <section>
          <div className="mb-8">
            <h4 className="text-[10px] font-bold text-[#58a6ff] tracking-widest uppercase mb-1">For Employers</h4>
            <h2 className="text-2xl font-bold text-white">Hire AI talent</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employerPlans.map((plan, i) => (
              <PricingCard key={i} {...plan} />
            ))}
          </div>
        </section>

        {/* --- Section 3: FAQ --- */}
        <FAQ />

      </div>
    </div>
  );
};

export default Pricing;