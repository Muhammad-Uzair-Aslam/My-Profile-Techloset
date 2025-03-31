import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import ProfileInfo from "../../components/profileInfo/ProfileInfo";
import BankDetails from "../../components/bankDetails/BankDetails";
import SocialLinks from "../../components/socialLinks/SocialLinks";
import {data} from '../../constant/ProfileData'
const ProfilePage = () => {
  return (
    <div className="max-w-6xl py-10 mx-auto p-6 text-sm shadow-lg rounded-2xl">
      <ProfileHeader data={data} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProfileInfo data={data} />
        <BankDetails data={data} />
      </div>
      <SocialLinks data={data} />
    </div>
  );
};

export default ProfilePage;