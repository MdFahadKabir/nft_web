import { TopNav } from "@/components/TopNav";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html className="bg-main max-w-screen-2xl mx-auto" lang="en">
      <head />
      <body>
        <Providers>
          <div>
            <div className="relative h-full w-full">
              <Navbar />
              <TopNav />
              <main>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
