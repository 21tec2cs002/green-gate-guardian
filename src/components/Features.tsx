
import { Shield, Zap, Code, Users, Lock, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with multi-factor authentication, encryption at rest, and advanced threat detection."
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get authentication running in under 5 minutes with our pre-built components and SDKs."
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Clean APIs, comprehensive documentation, and SDKs for every major framework and language."
    },
    {
      icon: Users,
      title: "User Management",
      description: "Complete user lifecycle management with profiles, roles, permissions, and organizational structures."
    },
    {
      icon: Lock,
      title: "Advanced Features",
      description: "Password policies, session management, social logins, and single sign-on (SSO) out of the box."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Built for scale with 99.9% uptime SLA, global CDN, and automatic load balancing."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need for
            <span className="text-primary"> Secure Authentication</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From basic login forms to enterprise SSO, we've got you covered with production-ready components.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
