import Navbar from "../components/Navbar";
import useAxios from "../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import WishCard from "../components/WishCard";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const mainAxios = useAxios();
  const url = `/user/wishlist?userMail=${user.email}`;
  // console.log(url);
  const getAllWishes = async () => {
    const res = await mainAxios.get(url);
    return res;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["allWishes"],
    queryFn: getAllWishes,
  });

  if (isLoading) {
    return <span>Loading....</span>;
  }

  // console.log(data);

  return (
    <main>
      <Navbar />
      <h1 className="text-5xl text-center font-bold my-10">Your Wishlist</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto my-10">
        {data.data.map((wish) => (
          <WishCard key={wish._id} data={wish}>
            {wish.title}
          </WishCard>
        ))}
      </section>
    </main>
  );
};

export default Wishlist;
