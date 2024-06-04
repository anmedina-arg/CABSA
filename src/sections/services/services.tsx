import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';
import MainTitle from '@/components/mainTitle/mainTitle';
import SectionLayout from '@/components/sectionLayout/sectionLayout';
import './services.css';
import { StructuredNotes } from '@/components/structuredNotes/structuredNotes';

export function Services() {
  return (
    <SectionLayout id="services">
      <div className='divContainerServices'>
        <MainTitle title="our services" />
        <div className="servicesContent">
          <DropDownMenu title="structured notes">
            <StructuredNotes />
          </DropDownMenu>
          <DropDownMenu title="sme u.s. lending found">hola</DropDownMenu>
          <DropDownMenu title="club deals">hola</DropDownMenu>
          <DropDownMenu title="niche opportunities">hola</DropDownMenu>
          <DropDownMenu title="alternative platforms">hola</DropDownMenu>
        </div>
      </div>
    </SectionLayout>
  );
}

export default Services;
