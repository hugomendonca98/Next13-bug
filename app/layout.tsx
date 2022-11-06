import { ReactNode } from "react";
import GlobalStyles from "./GlobalStyles";
import RootStyleRegistry from "./RootStyleRegistry";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Your App</title>
      </head>
      <body>
        <RootStyleRegistry>
          <div>
            <GlobalStyles />
            {children}
          </div>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
