import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, FileText, Home, CheckSquare, TrendingUp, Share2 } from "lucide-react";

interface ResourceAccessProps {
  email: string;
  onStartOver: () => void;
}

export const ResourceAccess = ({ email, onStartOver }: ResourceAccessProps) => {
  const resources = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Complete Buyer's Guide",
      description: "62-page comprehensive guide to buying your first home in Ontario",
      fileSize: "2.4 MB PDF",
      downloadUrl: "#"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Exclusive Property Listings",
      description: "Access to off-market properties and pre-construction deals",
      fileSize: "Portal Access",
      downloadUrl: "#"
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: "Home Inspection Checklist",
      description: "Professional 15-point inspection checklist PDF",
      fileSize: "1.8 MB PDF",
      downloadUrl: "#"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Insights Report",
      description: "Q4 2024 Ontario real estate market analysis and forecasts",
      fileSize: "3.2 MB PDF",
      downloadUrl: "#"
    }
  ];

  const handleDownload = (resourceTitle: string) => {
    // Simulate download
    console.log(`Downloading: ${resourceTitle}`);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 bg-success rounded-full flex items-center justify-center text-white mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Your
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Resource Library</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Congratulations! Your email <strong>{email}</strong> has been verified. 
            You now have access to all our premium resources.
          </p>
        </div>

        {/* Resource Download Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-form transition-all duration-300 border-0 bg-gradient-card">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold mb-1">{resource.title}</CardTitle>
                    <CardDescription className="text-sm">{resource.description}</CardDescription>
                    <p className="text-xs text-muted-foreground mt-2">{resource.fileSize}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => handleDownload(resource.title)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <Card className="shadow-form border-0 bg-gradient-card mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">What's Next?</CardTitle>
            <CardDescription>
              You're now part of our exclusive community of successful home buyers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Monthly Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Get fresh market insights and new listings delivered monthly
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Share2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Exclusive Access</h3>
                <p className="text-sm text-muted-foreground">
                  First access to off-market deals and pre-construction opportunities
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Direct access to our team of real estate professionals
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Bookmark this page for easy access to your resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Access Property Portal
            </Button>
            <Button variant="outline" size="lg" onClick={onStartOver}>
              Share with Friends
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};