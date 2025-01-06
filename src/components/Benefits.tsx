import { Calculator, Shield, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Calculator,
    title: "Tarifs transparents",
    description: "Prix fixés à l'avance, sans surprises",
  },
  {
    icon: CheckCircle,
    title: "Chauffeurs professionnels",
    description: "Chauffeurs certifiés et expérimentés",
  },
  {
    icon: Shield,
    title: "Paiement sécurisé",
    description: "Paiement en ligne ou en espèces",
  },
];

export const Benefits = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <benefit.icon className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};