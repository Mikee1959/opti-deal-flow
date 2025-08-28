import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Mail, RefreshCw, Download } from "lucide-react";

interface EmailVerificationProps {
  email: string;
  onVerified: () => void;
  onBack: () => void;
}

export const EmailVerification = ({ email, onVerified, onBack }: EmailVerificationProps) => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (otp === "123456" || otp.length === 6) {
        toast({
          title: "Email Verified!",
          description: "Your resources are now ready for download.",
        });
        onVerified();
      } else {
        toast({
          title: "Invalid Code",
          description: "Please check your email and enter the correct verification code.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setTimeLeft(60);
    setCanResend(false);

    try {
      // Simulate resending OTP
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Code Resent",
        description: "A new verification code has been sent to your email.",
      });
    } catch (error) {
      toast({
        title: "Failed to Resend",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
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
              Verify Your Email
            </CardTitle>
            <CardDescription className="text-lg">
              We've sent a 6-digit verification code to:
              <br />
              <strong className="text-foreground">{email}</strong>
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-sm font-medium">
                  Verification Code
                </Label>
                <Input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit code"
                  className="h-12 text-center text-2xl font-mono tracking-widest"
                  maxLength={6}
                />
                <p className="text-xs text-muted-foreground">
                  Please check your email (including spam folder) for the verification code.
                </p>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full h-14 text-lg"
                disabled={isVerifying || otp.length !== 6}
              >
                {isVerifying ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Verify & Access Resources
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-4">
              {canResend ? (
                <Button 
                  variant="ghost" 
                  onClick={handleResendCode}
                  disabled={isResending}
                  className="text-primary hover:text-primary-light"
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Resending...
                    </>
                  ) : (
                    "Resend verification code"
                  )}
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Resend code in {timeLeft} seconds
                </p>
              )}
              
              <Button 
                variant="link" 
                onClick={onBack}
                className="text-muted-foreground"
              >
                Back to form
              </Button>
            </div>

            {/* Demo Note */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Demo:</strong> Use code <span className="font-mono bg-background px-2 py-1 rounded">123456</span> 
                or any 6-digit code to proceed
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};