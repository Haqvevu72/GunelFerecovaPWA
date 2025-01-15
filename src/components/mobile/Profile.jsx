import profileImg from "@assets/images/profile.png";

const Profile = () => {
  return (
    <div className="w-full min-h-[400px] pt-5">
      <div className="relative h-[420px] w-[360px] mx-auto">
        <img className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-14" src={profileImg} alt="profile" />
      </div>
    </div>
  );
};

export default Profile;
