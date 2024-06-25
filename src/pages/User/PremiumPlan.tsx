import React from "react";
import SubscriptionTier from "../../components/User/ui/SubscriptionTier";

const PremiumPlans = () => {
  return (
    <div>
      <hr />
      <div className="bg-black p-8 space-y-6">
        <h1 className="text-center text-white text-3xl font-bold mb-4">
          Subscription Tiers
        </h1>
        <h3 className="text-center text-white text-lg mb-6">
          Upgrade to Plus, Gold, or Platinum for an enhanced LoveLink
          experience.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SubscriptionTier
            tier="Plus"
            price="$9.99"
            duration="1 month"
            features={[
              "Unlimited Likes",
              "Unlimited Rewinds",
              "Passport™ To Any Location",
              "Hide Advertisements",
              "Go Incognito",
              "™ See Who Likes You",
              "New Top Picks every day",
              "Weekly Super Likes",
              "1 Free Boost a month",
            ]}
          />
          <SubscriptionTier
            tier="Gold"
            price="$19.99"
            duration="3 months"
            features={[
              "Unlimited Likes",
              "Unlimited Rewinds",
              "Passport™ To Any Location",
              "Hide Advertisements",
              "Go Incognito",
              "™ See Who Likes You",
              "New Top Picks every day",
              "Weekly Super Likes",
              "1 Free Boost a month",
              "Message before Matching",
              "Prioritized Likes",
              "See the Likes you’ve sent in the last 7 days",
            ]}
          />
          <SubscriptionTier
            tier="Platinum"
            price="$29.99"
            duration="6 months"
            features={[
              "Unlimited Likes",
              "Unlimited Rewinds",
              "Passport™ To Any Location",
              "Hide Advertisements",
              "Go Incognito",
              "™ See Who Likes You",
              "New Top Picks every day",
              "Weekly Super Likes",
              "1 Free Boost a month",
              "Message before Matching",
              "Prioritized Likes",
              "See the Likes you’ve sent in the last 7 days",
              "And everything you love from Tinder Plus®!",
              "And everything you love from Tinder Gold™!",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumPlans;
