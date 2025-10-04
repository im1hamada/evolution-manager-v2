import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export default function Home() {
  const navigate = useNavigate();

  const handleGoToManager = () => {
    navigate("/manager");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with theme toggle */}
      <header className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <img
            src="/assets/images/evolution-logo.png"
            alt="Logo"
            className="h-8"
          />
        </div>
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/assets/images/evolution-logo.png"
                alt="Manager Logo"
                className="h-10"
              />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Manager Dashboard v2
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Modern web interface for API management
            </p>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Version 2.0.0
            </Badge>
          </div>

          {/* Main Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Welcome to Manager Dashboard
              </CardTitle>
              <CardDescription>
                A powerful, modern dashboard for managing your WhatsApp API instances
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={handleGoToManager}
                    size="lg"
                    className="px-8 py-3"
                  >
                    Access Manager Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links Card */}
          <Card>
            <CardHeader>
              <CardTitle>Resources & Support</CardTitle>
              <CardDescription>
                Get help, contribute, or learn more
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>© 2025 Manager Dashboard. Licensed under Apache 2.0.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
