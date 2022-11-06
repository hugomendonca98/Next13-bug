"use client";

import useStyledComponentsRegistry from "../lib/styled-components";
import { useServerInsertedHTML } from "next/navigation";
import { ReactElement } from "react";

export default function RootStyleRegistry({
  children,
}: {
  children: ReactElement;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
