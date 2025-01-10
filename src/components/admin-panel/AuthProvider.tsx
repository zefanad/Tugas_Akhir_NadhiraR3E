"use client"
import {SessionProvider} from "next-auth/react";
import { ReactNode } from "react";

interface PropsTYpe {
    children: ReactNode
}

const AuthProvider = ({children}: PropsTYpe) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider;