import { ReactElement } from 'react';
import './sectionLayout.css';

type SectionLayoutProp = {
	children: ReactElement,
	id?: string
}
const SectionLayout = ({ children, id }:SectionLayoutProp) => {
  return (
    <section id={id} className='sectionLayout'>
      {children}
    </section>
  );
};

export default SectionLayout;