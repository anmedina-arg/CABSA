import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';
import MainTitle from '@/components/mainTitle/mainTitle';
import './services.css';
import { StructuredNotes } from '@/components/structuredNotes/structuredNotes';
import { NicheOpportunities } from '@/components/nicheOpportunities/nicheOpportunities';
import { SmeService } from '@/components/smeService/smeService';
import { ClubDeals } from '@/components/clubDeals/clubDeals';

export function Services() {
  return (
    <div id='services' className='divContainerServices'>
      <MainTitle title="our services" />
      <div className="servicesContent">
        <DropDownMenu title="structured notes" linkButton={true}>
          <StructuredNotes />
        </DropDownMenu>
        <DropDownMenu title="sme u.s. lending found" linkButton={true}>
          <SmeService />
        </DropDownMenu>
        <DropDownMenu title="club deals">
          <ClubDeals />
        </DropDownMenu>
        <DropDownMenu title="niche opportunities" linkButton={true}>
          <NicheOpportunities />
        </DropDownMenu>
        <DropDownMenu title="alternative platforms" linkButton={true}>hola</DropDownMenu>
      </div>
    </div>
  );
}

export default Services;
