import Image from "next/image"
import React from "react"
import { SongImageProps } from "@/types"
import Link from "next/link"

const SongImage: React.FunctionComponent<SongImageProps> = ({ image, size, style, alt, className, link }) => {
  return (
    <>
     <Image
        src={image}
        width={size}
        height={size}
        style={style ? style : 'responsive'}
        alt={alt}
        className={className ? className : 'rounded-md shadow-3xl'}
    >
    </Image>
    </>
  )
}

export default SongImage