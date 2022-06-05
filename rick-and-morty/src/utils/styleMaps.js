import { FaRegDizzy, FaRegFlushed, FaRegGrin, FaGenderless, FaMars,FaVenus, FaTransgender,} from "react-icons/fa";

export const statusMap = {
  Alive: {
    color: "teal.500",
    icon: FaRegGrin,
    text: "Yaşıyor",
  },
  Dead: {
    color: "red.500",
    icon: FaRegDizzy,
    text: "Ölü",
  },
  unknown: {
    color: "purple.500",
    icon: FaRegFlushed,
    text: "Durumu Bilinmiyor",
  },
};

export const genderMap = {
  Male: {
    color: "blue.400",
    icon: FaMars,
    text: "Erkek",
  },
  Female: {
    color: "pink.400",
    icon: FaVenus,
    text: "Kadın",
  },
  Genderless: {
    color: "gray.500",
    icon: FaGenderless,
    text: "Cinsiyetsiz",
  },
  unknown: {
    color: "purple.400",
    icon: FaTransgender,
    text: "Cinsiyeti bilinmiyor",
  },
};
