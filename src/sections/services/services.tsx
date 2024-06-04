import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';
import MainTitle from '@/components/mainTitle/mainTitle';
import SectionLayout from '@/components/sectionLayout/sectionLayout';
import './services.css';
import { StructuredNotes } from '@/components/structuredNotes/structuredNotes';
import { NicheOpportunities } from '@/components/nicheOpportunities/nicheOpportunities';
import { SmeService } from '@/components/smeService/smeService';

export function Services() {
  return (
    <SectionLayout id="services">
      <div className='divContainerServices'>
        <MainTitle title="our services" />
        <div className="servicesContent">
          <DropDownMenu title="structured notes">
            <StructuredNotes />
          </DropDownMenu>
          <DropDownMenu title="sme u.s. lending found">
            <SmeService />
          </DropDownMenu>
          <DropDownMenu title="club deals">hola</DropDownMenu>
          <DropDownMenu title="niche opportunities">
            <NicheOpportunities />
          </DropDownMenu>
          <DropDownMenu title="alternative platforms">hola</DropDownMenu>
        </div>
      </div>
    </SectionLayout>
  );
}

export default Services;
