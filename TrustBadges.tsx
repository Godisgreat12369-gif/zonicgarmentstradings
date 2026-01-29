import { Shield, Truck, Award, RefreshCw } from 'lucide-react';

function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: '100% secure transactions',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick shipping across UAE',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Certified fabrics & materials',
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
  ];

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#16a34a] rounded-full flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-[#111827] mb-2">{badge.title}</h3>
                <p className="text-sm text-[#6b7280]">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;
