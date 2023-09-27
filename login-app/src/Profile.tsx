import React, { useEffect, useState } from "react";
import axios from "axios";

type ProfileType = {
  name: string;
  id: string;
};

const Profile = (): React.ReactElement => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  useEffect(() => {
    axios
      .get("https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock")
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(profiles);

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id} className="flex items-center gap-4 my-4">
          <img
            className="w-20 h-20 rounded-full"
            src="https://source.unsplash.com/random/"
            alt="profile img"
          />
          <div className="flex-col">
            <div>id: {profile.id}</div>
            <div>username: {profile.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
