import { Header } from "@/components/Header";
import { BookingForm } from "@/components/BookingForm";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Voyagez entre villes en toute sérénité
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Réservez votre taxi interurbain en quelques clics
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <Benefits />
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <HowItWorks />
        </div>
      </section>
    </div>
  );
};

export default Index;