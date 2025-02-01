'use client';
import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';
import MainTitle from '@/components/mainTitle/mainTitle';
import './services.css';
import { StructuredNotes } from '@/components/structuredNotes/structuredNotes';
import { NicheOpportunities } from '@/components/nicheOpportunities/nicheOpportunities';
import { SmeService } from '@/components/smeService/smeService';
import { ClubDeals } from '@/components/clubDeals/clubDeals';
import { AlternativePlatforms } from '@/components/alternativePlatforms/alternativePlatforms';
import { useEffect, useState } from 'react';
import CircleDecoratorHover from '@/components/decorators/circleDecoratorHover';
import CircleDecorator from '@/components/decorators/circleDecorator';
import { structuredNotesCards, alternativeFoundCards } from '@/utils/CardsValues';

type isOpenMenu = {
  structured: boolean;
  mutualFound: boolean;
  singleDeals: boolean;
  altrnativeFounds: boolean;
};

export function Services() {
  const [isOpen, setIsOpen] = useState<isOpenMenu>({
    structured: false,
    mutualFound: false,
    singleDeals: true,
    altrnativeFounds: false,
  });

  function handleDropDown(e: any) {
    e.preventDefault();
    const id = e.target.id as keyof isOpenMenu;

    window.location.hash = '';

    const closeAll = {
      structured: false,
      mutualFound: false,
      singleDeals: false,
      altrnativeFounds: false,
    };

    const closeNow = {
      ...closeAll,
      [id]: !isOpen[id],
    };

    setIsOpen({
      ...closeNow,
    });

    if (
      !closeNow.singleDeals &&
      !closeNow.structured &&
      !closeNow.mutualFound &&
      !closeNow.altrnativeFounds
    )
      window.location.hash = 'services';
    else window.location.hash = id;
  }

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        const offset =
          10 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 10rem
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }

    window.addEventListener('hashchange', handleHashChange);

    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section id="services" className="divContainerServices">
      <MainTitle title="our services" />
      <div className='topDecoratorWeb'>
        <CircleDecoratorHover />
      </div>
      <div className='topDecoratorMobile'>
        <CircleDecorator />
      </div>
      <div className="servicesContent">
        <DropDownMenu
          title="structured notes"
          linkButton={true}
          name="structured"
          handleDropDown={handleDropDown}
          open={isOpen.structured}
        >
          <StructuredNotes input={structuredNotesCards} />
        </DropDownMenu>
        <DropDownMenu
          title="mutual founds"
          linkButton={true}
          name="mutualFound"
          handleDropDown={handleDropDown}
          open={isOpen.mutualFound}
        >
          <AlternativePlatforms />
        </DropDownMenu>
        <DropDownMenu
          title="single deals"
          linkButton={false}
          name="singleDeals"
          handleDropDown={handleDropDown}
          open={isOpen.singleDeals}
          shineTitle={true}
        >
          <ClubDeals />
        </DropDownMenu>
        <DropDownMenu
          title="altrnative founds"
          linkButton={true}
          name="altrnativeFounds"
          handleDropDown={handleDropDown}
          open={isOpen.altrnativeFounds}
        >
          <StructuredNotes input={alternativeFoundCards} />
        </DropDownMenu>
      </div>
    </section>
  );
}

export default Services;
