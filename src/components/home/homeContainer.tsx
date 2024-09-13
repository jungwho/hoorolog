import { useState } from "react";
import { useRouter } from "next/router";
import HomeUI from "./homePresenter";

const Home = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>(false);
  const [navName, setNavName] = useState<string | null>(null);

  const onClickNav = (page: string) => {
    router.push(`/${page}`);
  };
  const handleMouseEnter = (page: string) => {
    setIsHover(true);
    setNavName(page);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <HomeUI
      onClickNav={onClickNav}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      navName={navName}
      isHover={isHover}
    />
  );
};

export default Home;
