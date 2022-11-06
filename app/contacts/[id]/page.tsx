import axios from "axios";
import { cache } from "react";

import Flex from "../../../components/Flex";
import Image from "next/image";

export interface ContactDetailProps {}

const getContactDetail = cache(async (id: string) => {
  const contact = await axios.get(
    `https://6359cd1b38725a1746b7ccfa.mockapi.io/api/contacts/${id}`
  );

  return contact.data;
});

const ContactDetail = async ({ params: { id } }: any) => {
  const contact = await getContactDetail(id);
  return (
    <Flex gap={16}>
      <Image src={contact.avatar} alt={contact.name} width={400} height={400} />
      <Flex flexDirection="column">
        <h2>{contact.name}</h2>
        <h3>{contact.company}</h3>
        <h3>{contact.role}</h3>
      </Flex>
    </Flex>
  );
};

export default ContactDetail;
