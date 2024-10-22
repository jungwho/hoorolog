export type HomeUIProps = {
  onClickNav: (page: string) => void;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
};

export interface ISignUIProps {
  text: string;
  error: string;
  isSignUp: boolean;
  onSubmit: (data: any) => Promise<void>;
}
