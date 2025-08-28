import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { LeadForm } from "@/components/LeadForm";
import { EmailVerification } from "@/components/EmailVerification";
import { ResourceAccess } from "@/components/ResourceAccess";

type Step = "hero" | "form" | "verification" | "access";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("hero");
  const [userEmail, setUserEmail] = useState("");
  const [selectedResource, setSelectedResource] = useState("all");

  const handleGetStarted = () => {
    setCurrentStep("form");
  };

  const handleGetResource = (resourceType: string) => {
    setSelectedResource(resourceType);
    setCurrentStep("form");
  };

  const handleFormSuccess = (email: string) => {
    setUserEmail(email);
    setCurrentStep("verification");
  };

  const handleEmailVerified = () => {
    setCurrentStep("access");
  };

  const handleStartOver = () => {
    setCurrentStep("hero");
    setUserEmail("");
    setSelectedResource("all");
  };

  const handleBackToForm = () => {
    setCurrentStep("form");
  };

  return (
    <div className="min-h-screen bg-background">
      {currentStep === "hero" && (
        <>
          <HeroSection onGetStarted={handleGetStarted} />
          <ResourcesSection onGetResource={handleGetResource} />
        </>
      )}
      
      {currentStep === "form" && (
        <LeadForm 
          resourceType={selectedResource}
          onSuccess={handleFormSuccess}
        />
      )}
      
      {currentStep === "verification" && (
        <EmailVerification 
          email={userEmail}
          onVerified={handleEmailVerified}
          onBack={handleBackToForm}
        />
      )}
      
      {currentStep === "access" && (
        <ResourceAccess 
          email={userEmail}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
};

export default Index;
