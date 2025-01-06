import { Menu, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            TaxiConnect
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            FR
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Connexion
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            S'inscrire
          </Button>
        </div>

        <Button variant="ghost" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
};