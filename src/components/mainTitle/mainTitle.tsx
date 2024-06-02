import './mainTitle.css';

type MainTitleProps = {
	title: string,
	variant?: 'white' | 'pink'
}
const MainTitle = ({ title, variant = 'white' }: MainTitleProps) => {
  return (
    <h2 className={`mainTitle ${variant === 'pink' ? 'pink':''}`}> {title} </h2>
  );
};

export default MainTitle;