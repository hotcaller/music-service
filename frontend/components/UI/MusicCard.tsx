import Image from "next/image";
import { MusicCardProps } from "@/types"
import SongImage from "./SongImage";

const MusicCard: React.FunctionComponent<MusicCardProps> = ({
  image,
  size,
  name,
  group,
  duration,
  date
}: MusicCardProps) => {
  return (
    <>
      <div className="music-card">
        <div className="music-card__container">
          <div className="music-card__image">
            <SongImage
              image={image}
              size={size}
              alt="album-image"
              className="rounded-lg shadow-3xl">
            </SongImage>
          </div>

          <div className="music-card__information">
            <div className="music-card__title">
              <a href="#" className="music-card__name text-dark">{name}</a>
              <a href="#" className="music-card__group text-dark">{group}</a>
            </div>

            <div className="music-card__additionall_information">
              <h3 className="music-card__duration text-dark">{duration}</h3>
              <h4 className="music-card__date  text-sm">{date}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicCard