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

type isOpenMenu = {
  structured: boolean;
  sme: boolean;
  clubDeals: boolean;
  niche: boolean;
  platforms: boolean;
};

export function Services() {
  const [isOpen, setIsOpen] = useState<isOpenMenu>({
    structured: true,
    sme: false,
    clubDeals: false,
    niche: false,
    platforms: false,
  });

  function handleDropDown(e: any) {
    e.preventDefault();
    const id = e.target.id as keyof isOpenMenu;

    window.location.hash = '';

    const closeAll = {
      structured: false,
      sme: false,
      clubDeals: false,
      niche: false,
      platforms: false,
    };

    const closeNow = {
      ...closeAll,
      [id]: !isOpen[id],
    };

    setIsOpen({
      ...closeNow,
    });

    if (
      !closeNow.clubDeals &&
      !closeNow.structured &&
      !closeNow.sme &&
      !closeNow.niche &&
      !closeNow.platforms
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
      <div className="servicesContent">
        <DropDownMenu
          title="structured notes"
          linkButton={true}
          name="structured"
          handleDropDown={handleDropDown}
          open={isOpen.structured}
        >
          <StructuredNotes />
        </DropDownMenu>
        <DropDownMenu
          title="sme u.s. lending fund"
          linkButton={true}
          name="sme"
          handleDropDown={handleDropDown}
          open={isOpen.sme}
        >
          <SmeService />
        </DropDownMenu>
        <DropDownMenu
          title="club deals"
          linkButton={false}
          name="clubDeals"
          handleDropDown={handleDropDown}
          open={isOpen.clubDeals}
        >
          <ClubDeals />
        </DropDownMenu>
        <DropDownMenu
          title="niche opportunities"
          linkButton={true}
          name="niche"
          handleDropDown={handleDropDown}
          open={isOpen.niche}
        >
          <NicheOpportunities />
        </DropDownMenu>
        <DropDownMenu
          title="alternative platforms"
          linkButton={true}
          name="platforms"
          handleDropDown={handleDropDown}
          open={isOpen.platforms}
        >
          <AlternativePlatforms />
        </DropDownMenu>
      </div>
    </section>
  );
}

export default Services;
