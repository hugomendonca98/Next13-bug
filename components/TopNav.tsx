"use client";

import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ContentContainer = styled.div`
  width: calc(100% - 32px);
  position: relative;
  display: block;
  height: 100%;
  overflow: hidden;
  padding: 0 16px;
`;

const Nav = styled.div`
  list-style: none;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

interface NavItemProps {
  active: boolean;
}

const NavItem = styled.button<NavItemProps>`
  color: ${({ active }) => (active ? "#314bdf" : "#000")};
  line-height: 64px;
  background-color: transparent;
  border: none;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    color: #1892bf;
  }
`;

const ContentPusher = styled.div`
  height: 64px;
  position: relative;
  width: 100%;
  z-index: -1;
`;

export interface TopNavProps {}

const TopNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Container>
        <ContentContainer>
          <Nav>
            <NavItem active={pathname === "/"} onClick={() => router.push("/")}>
              Home
            </NavItem>
            <NavItem
              active={pathname === "/about"}
              onClick={() => router.push("/about")}
            >
              About
            </NavItem>
            <NavItem
              active={pathname.indexOf("/contacts") === 0}
              onClick={() => router.push("/contacts")}
            >
              Contacts (nested layout example)
            </NavItem>
          </Nav>
        </ContentContainer>
      </Container>
      <ContentPusher />
    </>
  );
};

export default TopNav;
