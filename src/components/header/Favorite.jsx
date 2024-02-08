import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";

export default function Favorite({ toggle, showFavModal }) {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <button className="flex items-center gap-2" onClick={() => toggle()}>
        <img src={showFavModal ? RedHeartIcon : HeartIcon} alt="" />
        <span>Favourite Locations</span>
      </button>
    </div>
  );
}
