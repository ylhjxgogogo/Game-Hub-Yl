import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Platform from "../entities/Platform";
import { IconType } from "react-icons";
import { Fragment } from "react/jsx-runtime";
interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    nintendo: SiNintendo,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        return (
          <Fragment key={platform.id}>
            <Icon as={iconMap[platform.slug]} color="gray.500" />
          </Fragment>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
