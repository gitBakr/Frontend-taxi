import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "Tunis",
    image: "/placeholder.svg",
    price: 45,
  },
  {
    id: 2,
    name: "Sfax",
    image: "/placeholder.svg",
    price: 65,
  },
  {
    id: 3,
    name: "Sousse",
    image: "/placeholder.svg",
    price: 55,
  },
];

export const PopularDestinations = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Destinations populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600">
                  À partir de <span className="text-primary font-bold">{destination.price} DT</span>
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Réserver</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};