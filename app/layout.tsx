import Container from "../components/Container";
import TopNav from "../components/TopNav";
import GlobalStyles from "./GlobalStyles";
import RootStyleRegistry from "./RootStyleRegistry";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <title>Your App</title>
      </head>
      <body>
        <RootStyleRegistry>
          <div>
            <GlobalStyles />
            <TopNav />
            {children}
          </div>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
