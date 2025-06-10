
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Trusted by 10,000+ developers
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Secure Authentication
            <span className="text-primary block">Made Simple</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Build secure, scalable authentication systems in minutes, not weeks. 
            Drop-in components, enterprise-grade security, and developer-friendly APIs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Button size="lg" className="text-lg px-8">
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl animate-fade-in-up animate-float" style={{animationDelay: '0.4s'}}>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="text-left">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm text-muted-foreground overflow-x-auto">
                  <code>{`import { SecureAuth } from '@secureauth/react'

function App() {
  return (
    <SecureAuth>
      <Dashboard />
    </SecureAuth>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
