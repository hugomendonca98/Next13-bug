import Link from "next/link";
import React from "react";
import Flex from "../../components/Flex";

export interface ContactsLayoutProps {
  children: React.ReactNode;
  params: any;
}

const ContactsLayout = ({ children, params, ...rest }: ContactsLayoutProps) => {
  return (
    <Flex flexDirection="column">
      <h3>Contacts</h3>
      {children}
    </Flex>
  );
};

export default ContactsLayout;
