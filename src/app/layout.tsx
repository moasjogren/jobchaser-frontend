"use client";

// CSS
import "./globals.css";

// Kontext & komponenter
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import DarkModeWrapper from "@/components/features/DarkModeWrapper";

// Redux-importer
import { Provider } from "react-redux";
import store from "@/lib/store";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <html lang="en">
          <body>
            <AuthProvider>
              <DarkModeWrapper>
                <Header />
                {children}
                <Footer />
              </DarkModeWrapper>
            </AuthProvider>
          </body>
        </html>
      </ThemeProvider>
    </Provider>
  );
}
