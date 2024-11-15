import { BigMusicCardProps } from "@/types"
import SongImage from "./SongImage"

const BigMusicCard: React.FunctionComponent<BigMusicCardProps> = ({
  image,
  name,
  group,
  date
}: BigMusicCardProps) => {
  return (
    <>
      <div className="big-music-card__container">
        <SongImage
          image={image}
          size={800}
          alt={`${name} ${group} image}`}
        >

        </SongImage>

        <div className="flex flex-col mt-2">
          <h3 className="music-card__name">{name}</h3>

          <div className="flex gap-1">
            <span className="music-card__group">{group}, <span className="music-card__date">{date}</span></span>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default BigMusicCard