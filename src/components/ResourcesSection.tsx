import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Home, CheckSquare, TrendingUp } from "lucide-react";

interface ResourcesSectionProps {
  onGetResource: (resourceType: string) => void;
}

export const ResourcesSection = ({ onGetResource }: ResourcesSectionProps) => {
  const resources = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Complete Buyer's Guide",
      description: "Step-by-step guide to buying your first home in Ontario, including financing tips and legal requirements.",
      features: ["First-time buyer checklist", "Mortgage pre-approval guide", "Legal requirements", "Hidden cost calculator"],
      type: "buyer-guide"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Exclusive Property Listings",
      description: "Access to off-market properties and pre-construction deals not available to the general public.",
      features: ["Off-market listings", "Pre-construction deals", "Investment opportunities", "Price reduction alerts"],
      type: "listings"
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Home Inspection Checklist",
      description: "Professional checklist used by top inspectors to evaluate properties and avoid costly surprises.",
      features: ["Room-by-room checklist", "Red flag indicators", "Negotiation leverage tips", "Printable PDF format"],
      type: "inspection-checklist"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Insights Report",
      description: "Monthly market analysis with pricing trends, inventory levels, and forecasts for Ontario regions.",
      features: ["Price trend analysis", "Inventory tracking", "Seasonal patterns", "Investment hotspots"],
      type: "market-report"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unlock Your
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Free Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant access to our exclusive collection of tools, guides, and insights 
            that have helped over 1,000 buyers find their perfect homes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-form transition-all duration-300 border-0 bg-gradient-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <CardTitle className="text-xl font-bold">{resource.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {resource.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => onGetResource(resource.type)}
                >
                  Get Free Access
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Join thousands of successful home buyers who used our resources to save money and time.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => onGetResource('all')}
            className="text-lg px-12 py-4"
          >
            Get All Resources Free
          </Button>
        </div>
      </div>
    </section>
  );
};