import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';
import MainTitle from '@/components/mainTitle/mainTitle';
import './services.css';
import { StructuredNotes } from '@/components/structuredNotes/structuredNotes';
import { NicheOpportunities } from '@/components/nicheOpportunities/nicheOpportunities';
import { SmeService } from '@/components/smeService/smeService';
import { ClubDeals } from '@/components/clubDeals/clubDeals';
import { AlternativePlatforms } from '@/components/alternativePlatforms/alternativePlatforms';
import CircleDecoratorHover from '@/components/decorators/circleDecoratorHover';
import CrossDecoratorHover from '@/components/decorators/crossDecoratorHover';

export function Services() {
  return (
    <section id='services' className='divContainerServices'>
      <MainTitle title="our services" />
      <div className='topDecorator'>
        <CircleDecoratorHover />
      </div>
      <div className="servicesContent">
        <DropDownMenu title="structured notes" linkButton={true} open={true}>
          <StructuredNotes />
        </DropDownMenu>
        <DropDownMenu title="sme u.s. lending found" linkButton={true}>
          <SmeService />
        </DropDownMenu>
        <DropDownMenu title="club deals" linkButton={false}>
          <ClubDeals />
        </DropDownMenu>
        <DropDownMenu title="niche opportunities" linkButton={true}>
          <NicheOpportunities />
        </DropDownMenu>
        <DropDownMenu title="alternative platforms" linkButton={true}>
          <AlternativePlatforms />
        </DropDownMenu>
      </div>
      <div className="crossDecorator">
        <CrossDecoratorHover />
      </div>
    </section>
  );
}

export default Services;
