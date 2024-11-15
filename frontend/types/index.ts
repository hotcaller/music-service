type ImageStyle = {
  
}


export interface MenuButtonProps {
  icon: string,
  iconSize: number,
  buttonStyles?: string,
  tooltipText?: string,
  active: boolean,
}

export interface BigMusicCardProps {
  image: string,
  name: string,
  group: string,
  date: string
}

export interface MusicCardProps {
  image: string,
  size: number,
  name: string,
  group: string,
  duration: string,
  date: string
}


export interface Artist {
  name: string;
  info: string;
}

export interface Album {
  title: string;
  release_date: string;
  artist: Artist;
  cover_art_path: string;
}


export interface Song {
  title: string;
  release_date: string;
  formatted_duration : string;
  cover_art_path: string;
  album: Album;
}

export interface SettingsProps {
  isOpen: boolean,
  onClose: () => void
}

export interface ListboxWrapperProps {
  children: React.ReactNode
}

export interface SongImageProps {
  image: string, 
  size: number, 
  style?: {}, 
  alt: string, 
  className?: string, 
  link?: string
}