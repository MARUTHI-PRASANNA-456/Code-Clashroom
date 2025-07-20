import { Button } from "@/components/ui/button";
import { Gamepad2, User, LogOut, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user, loading, signOut } = useAuth();
  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    setSigningOut(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Gamepad2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Battle Arena</h1>
              <p className="text-xs text-muted-foreground">CS Edition</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/battles" className="text-foreground hover:text-primary transition-colors">
              Battles
            </Link>
            <Link to="/practice" className="text-foreground hover:text-primary transition-colors">
              Practice
            </Link>
            <Link to="/leaderboard" className="text-foreground hover:text-primary transition-colors">
              Leaderboard
            </Link>
            <Link to="/profile" className="text-foreground hover:text-primary transition-colors">
              Profile
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : user ? (
              <>
                <span className="text-sm text-foreground">
                  Welcome, Warrior!
                </span>
                <Button 
                  variant="cyber" 
                  size="sm" 
                  onClick={handleSignOut}
                  disabled={signingOut}
                >
                  {signingOut ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <LogOut className="h-4 w-4 mr-2" />
                  )}
                  {signingOut ? "Leaving..." : "Logout"}
                </Button>
              </>
            ) : (
              <>
                <Button variant="cyber" size="sm" asChild>
                  <Link to="/login">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Link>
                </Button>
                <Button variant="battle" size="sm" asChild>
                  <Link to="/signup">
                    Join Battle
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;