import { FC } from 'react';

export type ProfileProps = {
  name: string;
};

const Profile: FC<ProfileProps> = ({ name }) => {
  return <div>Welcome {name}, you are owner of this profile</div>;
};

export default Profile;
