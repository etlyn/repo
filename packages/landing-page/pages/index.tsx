import { Text, HeroSection } from "../components";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex">
        <Text variant="title" className="mr-1 text-blue-600">
          Etlyn is
        </Text>
        <Text
          variant="title"
          className="bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent"
        >
          comming soon!
        </Text>
      </div>

      <HeroSection />
    </div>
  );
}
