import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dog, Heart, PawPrint } from "lucide-react";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
  "Poodle",
  "Beagle",
  "Rottweiler",
  "Dachshund",
  "Siberian Husky",
];

const dogFacts = [
  "Dogs have a sense of time and can tell how long you've been gone.",
  "A dog's nose print is unique, much like a human's fingerprint.",
  "Dalmatians are born completely white and develop their spots as they grow older.",
  "Dogs can understand up to 250 words and gestures.",
  "The Basenji is the only breed of dog that can't bark, but they can yodel!",
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [fact, setFact] = useState("");

  const handleBreedChange = (value) => {
    setSelectedBreed(value);
  };

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * dogFacts.length);
    setFact(dogFacts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Paw-some Pals</h1>
          <p className="text-xl text-gray-600">Discover the wonderful world of dogs!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Happy dogs"
              className="mx-auto object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <h2 className="text-3xl font-bold text-white">Loyal Companions</h2>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="mr-2 text-red-500" /> Why We Love Dogs
              </CardTitle>
              <CardDescription>Discover what makes dogs so special</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Dogs have been our faithful companions for thousands of years. Their unwavering loyalty,
                boundless affection, and ability to bring joy to our lives make them truly irreplaceable.
                From playful puppies to wise old friends, dogs enrich our world in countless ways.
              </p>
              <Button onClick={getRandomFact} className="w-full">
                <PawPrint className="mr-2" /> Get a Dog Fact
              </Button>
              {fact && (
                <p className="mt-4 p-3 bg-blue-100 rounded-md text-blue-800 italic">{fact}</p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Dog className="mr-2" /> Explore Dog Breeds
            </CardTitle>
            <CardDescription>Learn about different dog breeds</CardDescription>
          </CardHeader>
          <CardContent>
            <Select onValueChange={handleBreedChange} value={selectedBreed}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Select a breed" />
              </SelectTrigger>
              <SelectContent>
                {popularBreeds.map((breed) => (
                  <SelectItem key={breed} value={breed}>
                    {breed}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedBreed && (
              <p className="text-gray-700">
                You selected the {selectedBreed}. This breed is known for its{" "}
                {selectedBreed === "Labrador Retriever"
                  ? "friendly nature and intelligence."
                  : selectedBreed === "German Shepherd"
                  ? "loyalty and versatility."
                  : selectedBreed === "Golden Retriever"
                  ? "gentle temperament and beautiful coat."
                  : selectedBreed === "French Bulldog"
                  ? "charming personality and compact size."
                  : selectedBreed === "Bulldog"
                  ? "calm demeanor and wrinkled face."
                  : selectedBreed === "Poodle"
                  ? "high intelligence and hypoallergenic coat."
                  : selectedBreed === "Beagle"
                  ? "keen sense of smell and friendly disposition."
                  : selectedBreed === "Rottweiler"
                  ? "strength and protective instincts."
                  : selectedBreed === "Dachshund"
                  ? "long body and bold personality."
                  : "adaptability and striking blue eyes."}
              </p>
            )}
          </CardContent>
        </Card>

        <footer className="text-center text-gray-500">
          <p>&copy; 2024 Paw-some Pals. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
