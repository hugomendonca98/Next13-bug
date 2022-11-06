import Link from "next/link";
import React from "react";

export interface ContactLayoutProps {
  children: React.ReactNode;
}

const ContactLayout = ({ children }: ContactLayoutProps) => {
  return (
    <div>
      <Link href="/contacts">⬅️ View All Contacts</Link> {children}
    </div>
  );
};

export default ContactLayout;
