"use client";

import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import ProfileCard from "@/components/features/ProfileCard";
import { AuthContext, User } from "@/context/AuthContext";
import { SavedJobs } from "@/components/features/FavJobs";

function Account() {
  const params = useParams();
  const userId = params.userId as string;
  const router = useRouter();
  const { user } = useContext(AuthContext)!;
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const fetchAccount = async () => {
    try {
      const token = Cookies.get("token");
      if (!token && !user) {
        router.push("/sign-in");
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/account/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setLoggedInUser(data.user);
      } else {
        console.error("Response not ok", response.status);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, [userId]);

  return (
    <div className="account-page">
      {loggedInUser ? (
        <>
          <ProfileCard user={loggedInUser} fetchAccount={fetchAccount} />
          <SavedJobs />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Account;
