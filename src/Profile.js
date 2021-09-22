// import { Component } from "react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>The page is Loading</div>;
  }

  return (
    isAuthenticated && (
      <>
        <img src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
      </>
    )
  );
};
export default Profile;
