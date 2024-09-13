export type HomeUIProps = {
  onClickNav: (page: string) => void;
  handleMouseEnter: (page: string) => void;
  handleMouseLeave: () => void;
  navName: string;
  isHover: boolean;
};

export type ImgProps = {
  navName: string | null;
  isHover: boolean;
};
