import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import { Trophy, Medal, Crown, Zap, Target, TrendingUp, Calendar, Users } from "lucide-react";

const Leaderboard = () => {
  const topPlayers = [
    {
      id: 1,
      name: "CodeMaster_99",
      rank: 1,
      score: 15420,
      battlesWon: 89,
      winRate: 94,
      streak: 23,
      avatar: "CM",
      level: "Legendary",
      specialty: "Algorithms"
    },
    {
      id: 2,
      name: "DataStructGod",
      rank: 2,
      score: 14890,
      battlesWon: 76,
      winRate: 91,
      streak: 18,
      avatar: "DS",
      level: "Master",
      specialty: "Data Structures"
    },
    {
      id: 3,
      name: "OSNinja",
      rank: 3,
      score: 14350,
      battlesWon: 82,
      winRate: 88,
      streak: 15,
      avatar: "ON",
      level: "Master",
      specialty: "Operating Systems"
    }
  ];

  const leaderboardData = [
    ...topPlayers.map(player => ({ ...player, isCurrentUser: false })),
    {
      id: 4,
      name: "SQLQueen",
      rank: 4,
      score: 13940,
      battlesWon: 71,
      winRate: 85,
      streak: 12,
      avatar: "SQ",
      level: "Expert",
      specialty: "DBMS",
      isCurrentUser: false
    },
    {
      id: 5,
      name: "NetworkWarrior",
      rank: 5,
      score: 13670,
      battlesWon: 68,
      winRate: 83,
      streak: 9,
      avatar: "NW",
      level: "Expert",
      specialty: "Networks",
      isCurrentUser: false
    },
    {
      id: 6,
      name: "YouCurrentRank",
      rank: 6,
      score: 13200,
      battlesWon: 64,
      winRate: 80,
      streak: 7,
      avatar: "YO",
      level: "Expert",
      specialty: "Mixed",
      isCurrentUser: true
    },
    {
      id: 7,
      name: "AlgoHunter",
      rank: 7,
      score: 12800,
      battlesWon: 59,
      winRate: 78,
      streak: 5,
      avatar: "AH",
      level: "Advanced",
      specialty: "Algorithms",
      isCurrentUser: false
    },
    {
      id: 8,
      name: "CodeSamurai",
      rank: 8,
      score: 12450,
      battlesWon: 55,
      winRate: 75,
      streak: 4,
      avatar: "CS",
      level: "Advanced",
      specialty: "OOP",
      isCurrentUser: false
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-600" />;
      default:
        return <div className="w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</div>;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Legendary":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white";
      case "Master":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      case "Expert":
        return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white";
      case "Advanced":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hall of Fame
          </h1>
          <p className="text-xl text-muted-foreground">
            The greatest CS warriors of all time
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topPlayers.map((player, index) => (
            <Card 
              key={player.id} 
              className={`cyber-border p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in ${
                player.rank === 1 ? 'ring-2 ring-yellow-400 bg-gradient-to-b from-yellow-400/10 to-transparent' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="space-y-4">
                {/* Rank Icon */}
                <div className="flex justify-center">
                  {getRankIcon(player.rank)}
                </div>

                {/* Avatar */}
                <div className="flex justify-center">
                  <Avatar className="w-16 h-16 border-2 border-primary">
                    <AvatarFallback className="text-lg font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                      {player.avatar}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Player Info */}
                <div>
                  <h3 className="text-xl font-bold text-primary">{player.name}</h3>
                  <Badge className={getLevelColor(player.level)}>{player.level}</Badge>
                </div>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">{player.score.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Battle Points</div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-success">{player.battlesWon}</div>
                      <div className="text-xs text-muted-foreground">Wins</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">{player.winRate}%</div>
                      <div className="text-xs text-muted-foreground">Win Rate</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-1 text-accent">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-bold">{player.streak} win streak</span>
                  </div>
                </div>

                {/* Specialty */}
                <Badge variant="outline" className="text-primary border-primary/50">
                  {player.specialty}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="cyber-border">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary">Global Rankings</h2>
              <div className="flex space-x-2">
                <Button variant="cyber" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  This Week
                </Button>
                <Button variant="ghost" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  All Time
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {leaderboardData.map((player, index) => (
                <div 
                  key={player.id}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 animate-fade-in ${
                    player.isCurrentUser ? 'bg-primary/10 border border-primary/50' : ''
                  }`}
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  {/* Rank */}
                  <div className="w-8 flex justify-center">
                    {getRankIcon(player.rank)}
                  </div>

                  {/* Avatar */}
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className={`text-sm font-bold ${
                      player.isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {player.avatar}
                    </AvatarFallback>
                  </Avatar>

                  {/* Player Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className={`font-bold ${player.isCurrentUser ? 'text-primary' : 'text-foreground'}`}>
                        {player.name}
                      </span>
                      {player.isCurrentUser && (
                        <Badge variant="outline" className="text-xs text-primary">You</Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{player.specialty}</span>
                      <Badge className={getLevelColor(player.level)}>{player.level}</Badge>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-sm font-bold text-accent">{player.score.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-success">{player.battlesWon}</div>
                      <div className="text-xs text-muted-foreground">Wins</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-secondary">{player.winRate}%</div>
                      <div className="text-xs text-muted-foreground">Win Rate</div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1 text-accent">
                        <Zap className="h-3 w-3" />
                        <span className="text-sm font-bold">{player.streak}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Streak</div>
                    </div>
                  </div>

                  {/* Trend */}
                  <div className="w-8 flex justify-center">
                    <TrendingUp className="h-4 w-4 text-success" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Weekly Challenge */}
        <Card className="cyber-border mt-8 p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-secondary">🏆 Weekly Challenge</h3>
            <p className="text-muted-foreground">
              Complete 10 Algorithm battles this week to earn the "Algorithm Master" badge and climb the rankings!
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="battle">
                <Target className="mr-2 h-4 w-4" />
                Join Challenge
              </Button>
              <Button variant="cyber">
                View Rewards
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;