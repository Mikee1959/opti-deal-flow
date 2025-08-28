import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Mail, User, Lock } from "lucide-react";

interface LeadFormProps {
  resourceType?: string;
  onSuccess: (email: string) => void;
}

export const LeadForm = ({ resourceType = "all", onSuccess }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validation
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success!",
        description: "Please check your email for verification instructions.",
      });
      
      onSuccess(formData.email);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResourceTitle = () => {
    switch (resourceType) {
      case "buyer-guide": return "Complete Buyer's Guide";
      case "listings": return "Exclusive Property Listings";
      case "inspection-checklist": return "Home Inspection Checklist";
      case "market-report": return "Market Insights Report";
      default: return "All Premium Resources";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-form border-0 bg-gradient-card">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <CardTitle className="text-3xl font-bold mb-2">
              Get Your Free {getResourceTitle()}
            </CardTitle>
            <CardDescription className="text-lg">
              Join 1,000+ smart home buyers who got exclusive access to Ontario's best property deals.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Enter your full name"
                  className={`h-12 ${errors.fullName ? 'border-destructive' : ''}`}
                />
                {errors.fullName && (
                  <p className="text-destructive text-sm">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email address"
                  className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  We'll send you a verification email before granting access.
                </p>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full h-14 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Verification..." : "Get Instant Access"}
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 space-y-4">
              <div className="border-t border-border pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Email Verified Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>No Spam Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-success" />
                    <span>Your Data is Secure</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive valuable home buying tips and market updates. 
                You can unsubscribe at any time. No phone number required.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};