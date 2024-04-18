'use client'
import withAuth from "@/components/WithAuth";

const Home = () => {
  return (
    <main className="bg-white text-netral-25 min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-0 animate-bounce">coming soon<span className="text-gray-400">.</span></h1>
      </div>
    </main>
  );
}

export default withAuth(Home);
