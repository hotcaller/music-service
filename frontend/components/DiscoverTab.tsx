'use client';

import { BigMusicCard, MusicCard } from '.';
import { useState, useEffect } from 'react';
import { ALBUM_COVER_ART_FOLDER } from '@/apiEndpoints.ts';
import { Album, Song } from '@/types/index.ts';

const DiscoverTab = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/get_albums/') // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error('Error fetching albums:', error));

    fetch('http://127.0.0.1:8000/api/get_songs/') // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error('Error fetching songs:', error));
  }, []);

  return (
    <>
      <div className="discover-tab__container scrollable-element h-8xl">
        <div className="discover-tab__head">
          <h1 className="discover-tab__head-text">
            Discover <br />
            New music
          </h1>
        </div>
        <div className="discover-tab__main ">
          <div className="discover-tab__top-chart">
            <div className="discover-tab__top-chart__head">
              <h2 className="discover-tab__top-chart__text">Top chart</h2>
              <div className="discover-tab__top-chart__filter">
                <h2 className="discover-tab__top-chart__filter-current">Week</h2>
              </div>
            </div>

            <div className="discover-tab__top-chart__albums">
              {albums.map((album) => (
                <BigMusicCard
                  name={album.title}
                  date={album.release_date}
                  group={album.artist.name}
                  image={`${ALBUM_COVER_ART_FOLDER}${album.cover_art_path}`}
                />
              ))}
              <BigMusicCard
                name="OK Computer"
                date="2001"
                group="Radiohead"
                image="/album_cover_arts/ok-computer-album.jpg"
              />
              <BigMusicCard
                name="In Rainbows"
                date="2004"
                group="Radiohead"
                image="/album_cover_arts/in-rainbow-album.webp"
              />
              <BigMusicCard
                name="The Division Bell"
                date="1994"
                group="Pink Floyd"
                image="/album_cover_arts/the-division-bell-album.jpg"
              />
              <BigMusicCard
                name="Crystal Castles"
                date="2008"
                group="Crystal Castles"
                image="/album_cover_arts/crystal-castles-album.webp"
              />
            </div>

            <div className="discover-tab__recommendation">
              <h2 className="text-3xl font-bold ">You may like</h2>
            </div>
            <div className="discover-tab__top-chart__little-albums">
              {songs.map((song) => (
                <MusicCard
                  size={70}
                  name={song.title}
                  date={song.release_date}
                  group={song.album.artist.name}
                  image={`${ALBUM_COVER_ART_FOLDER}${song.album.cover_art_path}`}
                  duration={song.formatted_duration}
                />
              ))}
              <MusicCard
                size={70}
                name="OK Computer"
                date="2001"
                group="Radiohead"
                image="/album_cover_arts/ok-computer-album.jpg"
                duration="2:34"
              ></MusicCard>
              <MusicCard
                size={70}
                name="Jigsaw falling into place"
                date="2004"
                group="Radiohead"
                image="/album_cover_arts/in-rainbow-album.webp"
                duration="4:12"
              ></MusicCard>
              <MusicCard
                size={70}
                name="Empathy"
                date="2008"
                group="Crystal Castles"
                image="/album_cover_arts/crystal-castles-album.webp"
                duration="1:45"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverTab;
