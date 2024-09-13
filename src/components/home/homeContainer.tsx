import { useRouter } from "next/router";
import { useStore } from "../store";
import HomeUI from "./homePresenter";

const Home = () => {
  const router = useRouter();
  const { setNavIndex, setIsHover } = useStore();

  const onClickNav = (page: string) => {
    router.push(`/${page}`);
  };
  const handleMouseEnter = (index: number) => {
    setIsHover(true);
    setNavIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <HomeUI
      onClickNav={onClickNav}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
};

export default Home;
