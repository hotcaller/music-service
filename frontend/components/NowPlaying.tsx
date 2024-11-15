import SongImage from "./UI/SongImage";
import { Button } from "@nextui-org/button";
import { FaShuffle } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

const NowPlaying = () => {
  return (
    <div className="nowplaying">
      <div className="nowplaying__container">
        <div className="my-4">
          <h2 className="nowplaying__head-title">
            Now playing
          </h2>
        </div>

        <div className="nowplaying__main">
          <div className="nowplaying__current-song">
            <SongImage 
              image="/album_cover_arts/crystal-castles-album.webp"
              size={350}
              alt="crystal-castles"
            >

            </SongImage>

            <div className="song__controlers">
              <div className="song__information">
                <div className="song__add-button">
                  <Button disableRipple={true}>
                    <span className="icon-[fluent--add-24-filled] text-gray-100"></span>
                  </Button>
                </div>
                <div className="song__head">
                  <span className="song__head-name">Vanished</span>
                  <span className="song__head-artist">Crystal Castles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NowPlaying;

{/* <span class="icon-[system-uicons--shuffle]"></span> */}
{/* <span class="icon-[ph--shuffle-light]"></span> */}


{/* <span class="icon-[fluent--add-24-filled]"></span> */}