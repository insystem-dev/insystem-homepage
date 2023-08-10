'use client'

import React from "react";
import Sticky from "react-stickynode";
import "../common/assets/css/flaticon.css";
import ResetCSS from "../common/assets/css/style";
import Navbar from "../common/components/organisms/Navbar";
import { DrawerProvider } from "../common/contexts/DrawerContext";
import { GlobalStyle } from "../common/assets/css/global.style";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import Footer from "../common/components/organisms/Footer";
import { SessionProvider } from "next-auth/react";
import AuthGuard from "../common/components/templates/AuthGuard";
import { theme } from '../common/assets/css/theme';
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: false,
      refetchOnWindowFocus: false, // 창에 포커스시 refetch 여부
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
});


export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: any,
}) {
  return (
    <html lang="en">
        <title> (주)인시스템 | INSYSTEM </title>
      <ResetCSS />
      <GlobalStyle />
      <body>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <SessionProvider session={session}>
                <AuthGuard>
                  <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                    <DrawerProvider>
                      <Navbar />
                    </DrawerProvider>
                  </Sticky>
                  <div className="page-wrap">
                    {children}
                    <Footer />
                  </div>
                </AuthGuard>
              </SessionProvider>
            </RecoilRoot>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
