import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
