import React from "react";
import { Announcement_card } from "@/components/announcement_component/announce_card";
import { Posts } from "@/types/posts";
import Strapi from 'strapi-sdk-js';
import { useSearchParams } from "next/navigation";
const strapi = new Strapi()

type Props = {}

const ShowAnnouncement = async (props: Props) => {
    // const staffs = await strapi.find<Posts>('announcements', {
    //     filters: {
    //       category: 
    //     },
    // });
    const params = useSearchParams();
    console.log(params.toString())
  return (
    <div>
        <Announcement_card />
    </div>
  )
}

export default ShowAnnouncement