import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <div className="text-button mx-5 my-5 flex justify-between text-2xl font-bold">
      FamilyFriends
      <FiBell color="grey" size={30} />
    </div>
  );
};

export default Header;
