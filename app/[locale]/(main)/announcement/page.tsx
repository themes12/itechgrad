import React from 'react'
// import { Announcement_card } from '@/components/announcement_component/announce_card';
// import {
//   Button, Divider,
// } from "@nextui-org/react";
// import { Navbar, NavbarBrand, NavbarContent, Input } from '@nextui-org/react';
// import { useTranslations } from "next-intl";
// import SelectableChip from '@/components/general/chip';
import Strapi from 'strapi-sdk-js';
import AnnoucementMain from '@/components/announcement_component/announcement_main';
// import { Posts } from '@/types/posts';
const strapi = new Strapi()
type Props = {}

const Page = async (props: Props) => {
  return (
    <div>
      <section className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 relative">
        <AnnoucementMain />
      </section>
    </div>

  );
}

export default Page