import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';
import MainTitle from '@/components/mainTitle/mainTitle';
import SectionLayout from '@/components/sectionLayout/sectionLayout';
import { About } from '../about/about';
import './services.css';


export function Services() {
  return (
    <SectionLayout id='services'>
      <section>
        <MainTitle title='our services' />
        <div className="servicesContent">
          <DropDownMenu title='structured notes'><About/></DropDownMenu>
          <DropDownMenu title='sme u.s. lending found'>hola</DropDownMenu>
          <DropDownMenu title='club deals'>hola</DropDownMenu>
          <DropDownMenu title='niche opportunities'>hola</DropDownMenu>
          <DropDownMenu title='alternative platforms'>hola</DropDownMenu>
        </div>
      </section>
    </SectionLayout>
  );
};

export default Services;