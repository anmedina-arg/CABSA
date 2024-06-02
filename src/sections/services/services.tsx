import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';
import MainTitle from '@/components/mainTitle/mainTitle';
import SectionLayout from '@/components/sectionLayout/sectionLayout';
import { About } from '../about/about';


export function Services() {
  return (
    <SectionLayout id='services'>
      <section>
        <MainTitle title='our services' />
        <DropDownMenu title='structured notes' open><About/></DropDownMenu>
        <DropDownMenu title='sme u.s. lending found'>hola</DropDownMenu>
        <DropDownMenu title='club deals'>hola</DropDownMenu>
        <DropDownMenu title='niche opportunities'>hola</DropDownMenu>
        <DropDownMenu title='alternative platforms'>hola</DropDownMenu>
      </section>
    </SectionLayout>
  );
};

export default Services;