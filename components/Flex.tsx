"use client";
import styled from "styled-components";

export interface FlexProps {
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: number;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
}

const Flex = styled.div<FlexProps>`
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  display: flex;
  gap: ${({ gap }) => gap || 8}px;
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
`;

export default Flex;
