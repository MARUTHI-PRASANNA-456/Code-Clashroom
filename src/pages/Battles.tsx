import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { Users, Clock, Trophy, Plus, Lock, Globe } from "lucide-react";

const Battles = () => {
  const battleRooms = [
    {
      id: 1,
      name: "Data Structures Showdown",
      topic: "Data Structures",
      players: 8,
      maxPlayers: 10,
      status: "waiting",
      difficulty: "Medium",
      isPrivate: false,
      timer: "2:30"
    },
    {
      id: 2,
      name: "Algorithm Arena",
      topic: "Algorithms",
      players: 6,
      maxPlayers: 8,
      status: "active",
      difficulty: "Hard",
      isPrivate: false,
      timer: "1:15"
    },
    {
      id: 3,
      name: "OS Warriors",
      topic: "Operating Systems",
      players: 4,
      maxPlayers: 6,
      status: "waiting",
      difficulty: "Easy",
      isPrivate: true,
      timer: "5:00"
    },
    {
      id: 4,
      name: "Database Legends",
      topic: "DBMS",
      players: 12,
      maxPlayers: 15,
      status: "active",
      difficulty: "Medium",
      isPrivate: false,
      timer: "0:45"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "waiting":
        return <Badge className="bg-accent text-accent-foreground">Waiting</Badge>;
      case "active":
        return <Badge className="bg-success text-success-foreground animate-battle-pulse">Live</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-success";
      case "Medium":
        return "text-accent";
      case "Hard":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Battle Rooms
          </h1>
          <p className="text-xl text-muted-foreground">
            Join epic CS battles or create your own arena
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="battle" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              Create Battle Room
            </Button>
            <Button variant="cyber" size="lg">
              Join with Code
            </Button>
          </div>
        </div>

        {/* Battle Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {battleRooms.map((room) => (
            <Card key={room.id} className="cyber-border p-6 hover:scale-105 transition-all duration-300 animate-fade-in">
              <div className="space-y-4">
                {/* Room Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-primary">{room.name}</h3>
                    {room.isPrivate ? (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Globe className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  {getStatusBadge(room.status)}
                </div>

                {/* Room Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Topic:</span>
                    <Badge variant="outline" className="text-secondary">
                      {room.topic}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty:</span>
                    <span className={`text-sm font-medium ${getDifficultyColor(room.difficulty)}`}>
                      {room.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{room.players}/{room.maxPlayers} players</span>
                    </div>
                    
                    {room.status === "waiting" && (
                      <div className="flex items-center space-x-1 text-sm text-accent">
                        <Clock className="h-4 w-4" />
                        <span>Starts in {room.timer}</span>
                      </div>
                    )}
                    
                    {room.status === "active" && (
                      <div className="flex items-center space-x-1 text-sm text-success animate-battle-pulse">
                        <Clock className="h-4 w-4" />
                        <span>{room.timer} remaining</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(room.players / room.maxPlayers) * 100}%` }}
                  />
                </div>

                {/* Join Button */}
                <Button 
                  className="w-full" 
                  variant={room.status === "active" ? "success" : "battle"}
                  disabled={room.players >= room.maxPlayers}
                >
                  {room.status === "waiting" ? "Join Battle" : "Watch Live"}
                  {room.status === "active" && <Trophy className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 cyber-border rounded-lg">
            <div className="text-2xl font-bold text-primary">24</div>
            <div className="text-sm text-muted-foreground">Active Rooms</div>
          </div>
          <div className="text-center p-4 cyber-border rounded-lg">
            <div className="text-2xl font-bold text-accent">156</div>
            <div className="text-sm text-muted-foreground">Players Online</div>
          </div>
          <div className="text-center p-4 cyber-border rounded-lg">
            <div className="text-2xl font-bold text-secondary">89</div>
            <div className="text-sm text-muted-foreground">Battles Today</div>
          </div>
          <div className="text-center p-4 cyber-border rounded-lg">
            <div className="text-2xl font-bold text-success">12</div>
            <div className="text-sm text-muted-foreground">Topics Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battles;