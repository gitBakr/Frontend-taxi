import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const BookingForm = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Réserver votre trajet</h3>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="departure">Ville de départ</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input id="departure" className="pl-10" placeholder="D'où partez-vous ?" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="arrival">Ville d'arrivée</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input id="arrival" className="pl-10" placeholder="Où allez-vous ?" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="date" type="date" className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="passengers">Passagers</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <select id="passengers" className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background">
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "passager" : "passagers"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Rechercher
        </Button>
      </form>
    </div>
  );
};