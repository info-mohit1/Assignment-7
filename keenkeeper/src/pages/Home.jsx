import { useEffect, useState, useMemo } from "react";
import Banner from "../components/Banner";
import SummaryCards from "../components/SummaryCards";
import FriendCard from "../components/FriendCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchFriends = async () => {
      try {
        const response = await fetch("/friends.json");
        const data = await response.json();
        setFriends(data);
      } catch (err) {
        console.error("Data load failed:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFriends();
  }, []);

   
  const friendsList = useMemo(() => friends, [friends]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 page-fade-in">
      <Banner />
      <div className="animate-reveal" style={{ animationDelay: '0.2s' }}>
        <SummaryCards friends={friendsList} />
      </div>

      <section className="mt-14">
        <h2 className="text-3xl font-bold text-white mb-8 inline-block relative overflow-hidden group">
          Your <span className="text-blue-500">Friends</span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {friendsList.map((friend, index) => (
            <div 
              key={friend.id || index} 
              className="staggered-card"
              style={{ "--index": index }}
            >
              <FriendCard friend={friend} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;