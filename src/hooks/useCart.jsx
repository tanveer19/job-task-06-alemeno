import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      // Check if user?.email exists before making the fetch request
      if (!user?.email) {
        return [];
      }

      const res = await fetch(
        `https://job-task-06-alemeno-server.vercel.app/carts?email=${user.email}`
      );
      return res.json();
    },
    enabled: !!user?.email, // Ensure the query is only enabled when user?.email is truthy
  });

  return [cart, refetch];
};

export default useCart;
