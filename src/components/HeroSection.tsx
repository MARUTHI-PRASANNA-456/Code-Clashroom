import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Trophy, Users, Brain, Target, Gamepad2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-energy-flow bg-[length:200%_100%]">
              BATTLE ARENA
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-secondary animate-battle-pulse">
              CS Edition
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master Computer Science concepts through epic real-time battles. Compete, learn, and dominate with your fellow CS warriors!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="battle" className="text-lg px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              Start Battle
            </Button>
            <Button size="lg" variant="cyber" className="text-lg px-8 py-4">
              <Target className="mr-2 h-5 w-5" />
              Practice Mode
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            <Card className="cyber-border p-6 hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary">Real-Time Battles</h3>
                <p className="text-muted-foreground">Compete live with classmates in epic knowledge showdowns</p>
              </div>
            </Card>

            <Card className="cyber-border p-6 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-bold text-accent">Master CS Topics</h3>
                <p className="text-muted-foreground">Data Structures, Algorithms, OS, DBMS, and more</p>
              </div>
            </Card>

            <Card className="cyber-border p-6 hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-secondary to-destructive rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-secondary">Epic Leaderboards</h3>
                <p className="text-muted-foreground">Climb rankings and earn legendary status</p>
              </div>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center animate-battle-pulse">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Battles Fought</div>
            </div>
            <div className="text-center animate-battle-pulse" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-muted-foreground">CS Warriors</div>
            </div>
            <div className="text-center animate-battle-pulse" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-secondary">95%</div>
              <div className="text-muted-foreground">Skill Boost</div>
            </div>
            <div className="text-center animate-battle-pulse" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl font-bold text-success">24/7</div>
              <div className="text-muted-foreground">Arena Open</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Gamepad2 className="h-8 w-8 text-primary/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce" style={{animationDelay: '1s'}}>
        <Zap className="h-6 w-6 text-accent/30" />
      </div>
    </div>
  );
};

export default HeroSection;