import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { Brain, Target, Clock, Trophy, Zap, BookOpen, Code, Database } from "lucide-react";

const Practice = () => {
  const topics = [
    {
      id: 1,
      name: "Data Structures",
      icon: Code,
      progress: 75,
      questionsCompleted: 45,
      totalQuestions: 60,
      difficulty: "Medium",
      streak: 12,
      color: "primary"
    },
    {
      id: 2,
      name: "Algorithms",
      icon: Brain,
      progress: 60,
      questionsCompleted: 36,
      totalQuestions: 60,
      difficulty: "Hard",
      streak: 8,
      color: "secondary"
    },
    {
      id: 3,
      name: "Operating Systems",
      icon: Target,
      progress: 90,
      questionsCompleted: 54,
      totalQuestions: 60,
      difficulty: "Easy",
      streak: 15,
      color: "success"
    },
    {
      id: 4,
      name: "Database Management",
      icon: Database,
      progress: 40,
      questionsCompleted: 24,
      totalQuestions: 60,
      difficulty: "Medium",
      streak: 5,
      color: "accent"
    },
    {
      id: 5,
      name: "Computer Networks",
      icon: Zap,
      progress: 25,
      questionsCompleted: 15,
      totalQuestions: 60,
      difficulty: "Hard",
      streak: 3,
      color: "destructive"
    },
    {
      id: 6,
      name: "Object Oriented Programming",
      icon: BookOpen,
      progress: 85,
      questionsCompleted: 51,
      totalQuestions: 60,
      difficulty: "Easy",
      streak: 20,
      color: "primary"
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "from-success to-accent";
    if (progress >= 60) return "from-primary to-secondary";
    if (progress >= 40) return "from-accent to-primary";
    return "from-muted-foreground to-muted";
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return <Badge className="bg-success text-success-foreground">Easy</Badge>;
      case "Medium":
        return <Badge className="bg-accent text-accent-foreground">Medium</Badge>;
      case "Hard":
        return <Badge className="bg-destructive text-destructive-foreground">Hard</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Practice Arena
          </h1>
          <p className="text-xl text-muted-foreground">
            Master CS concepts at your own pace
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="cyber-border p-6 text-center animate-fade-in">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold text-primary">8.5/10</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </Card>

          <Card className="cyber-border p-6 text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-success-foreground" />
            </div>
            <div className="text-2xl font-bold text-accent">225</div>
            <div className="text-sm text-muted-foreground">Questions Solved</div>
          </Card>

          <Card className="cyber-border p-6 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-secondary to-destructive rounded-full flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold text-secondary">15</div>
            <div className="text-sm text-muted-foreground">Current Streak</div>
          </Card>

          <Card className="cyber-border p-6 text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-success to-primary rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold text-success">42h</div>
            <div className="text-sm text-muted-foreground">Study Time</div>
          </Card>
        </div>

        {/* Topics Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Choose Your Battle Ground</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <Card 
                  key={topic.id} 
                  className="cyber-border p-6 hover:scale-105 transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="space-y-4">
                    {/* Topic Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r from-${topic.color} to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary">{topic.name}</h3>
                          <div className="flex items-center space-x-2">
                            {getDifficultyBadge(topic.difficulty)}
                            <div className="flex items-center space-x-1 text-sm text-accent">
                              <Zap className="h-3 w-3" />
                              <span>{topic.streak} streak</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{topic.progress}%</div>
                        <div className="text-xs text-muted-foreground">
                          {topic.questionsCompleted}/{topic.totalQuestions}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <Progress value={topic.progress} className="h-3" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Master</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button 
                        variant={topic.progress < 100 ? "battle" : "victory"} 
                        className="flex-1"
                      >
                        {topic.progress < 100 ? "Continue Practice" : "Perfect! Review"}
                      </Button>
                      <Button variant="cyber" size="sm">
                        <Target className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Practice Section */}
        <div className="mt-12 text-center space-y-6">
          <h2 className="text-2xl font-bold text-secondary">Quick Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="battle" size="lg" className="p-6">
              <Brain className="mr-2 h-5 w-5" />
              Random Challenge
            </Button>
            <Button variant="cyber" size="lg" className="p-6">
              <Clock className="mr-2 h-5 w-5" />
              5-Minute Sprint
            </Button>
            <Button variant="energy" size="lg" className="p-6">
              <Trophy className="mr-2 h-5 w-5" />
              Daily Challenge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;