import Link from "next/link";
import React from "react";
import Flex from "../../components/Flex";
import axios from "axios";
import Image from "next/image";

export const revalidate = 60;

const asyncGetContacts = async () => {
  try {
    const contacts = await axios.get(
      "https://6359cd1b38725a1746b7ccfa.mockapi.io/api/contacts"
    );
    return contacts.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Contacts = async () => {
  const contacts = await asyncGetContacts();

  return (
    <Flex flexDirection="row" gap={16}>
      {contacts.map((contact: any, idx: number) => (
        <Link key={`${contact.id}-${idx}`} href={`/contacts/${contact.id}`}>
          <Flex
            flexDirection="column"
            gap={8}
            justifyContent="center"
            alignItems="center"
            style={{
              maxWidth: "100px",
              textAlign: "center",
            }}
          >
            <Image
              src={contact.avatar}
              alt={contact.name}
              width={100}
              height={100}
            />
            <h5>{contact.name}</h5>
            <h6>{contact.company}</h6>
            <h6>{contact.role}</h6>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};

export default Contacts;
