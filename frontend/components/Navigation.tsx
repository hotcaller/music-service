'use client';

import Image from "next/image"
import { Divider } from "@nextui-org/divider"
import { Button } from "@nextui-org/button";
import Link from "next/link"
import { MenuButton } from "."
import Settings from "./UI/Settings";
import { useDisclosure } from "@nextui-org/modal";
import { TbLogout2 } from "react-icons/tb";

import { LuSettings } from "react-icons/lu";
import CustomButton from "./UI/CustomButton";


const Navigation = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <aside className="navigation-panel__container">
      <div className="w-full justify-between">
        <div className="navigation-panel__info mt-7 mb-6">
            <Image
              src='/Image/logo.svg'
              width={44}
              height={44}
              className="mx-auto"
              alt='logo'
            >
            </Image>
            <Image
              src='/Image/profile.svg'
              width={44}
              height={44}
              className="mx-auto"
              alt='logo'
            >
            </Image>
            <Divider className="mt-5 mb-3 w-12 mx-auto"/>
          </div>
          
          <div className="navigation-panel__activity items-center max-[800px]:justify-around max-[800px]:px-10">
            <Link href='/discover'>
              <MenuButton icon="icon-[uil--compass]" iconSize={35} active={false}/>
            </Link>
            <Link href='/'>
              <MenuButton icon="icon-[uil--headphones]" iconSize={35} active={true} />
            </Link>
            <Link href='#'>
              <MenuButton icon="icon-[uil--heart]" iconSize={35} active={false} />
            </Link>
          </div>
        </div>

      <div className="w-full flex flex-col gap-4 mb-8 max-[800px]:hidden items-center">
        <CustomButton
          onClick={onOpen}
        >
          <Settings isOpen={isOpen} onClose={onOpenChange} />
          <LuSettings color="#777" size={35} />
        </CustomButton>
        <CustomButton 
          ariaLabel="log-out"
        >
          <TbLogout2 color="#777" size={35}/>
        </CustomButton>
      </div>
    </aside>
  );
};

export default Navigation;
