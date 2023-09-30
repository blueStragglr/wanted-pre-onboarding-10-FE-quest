'use client'

import LoginContainer from "./components/LoginContainer";
import MessageContainer from "./components/MessageContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-TBackground items-center justify-center p-24">
      <LoginContainer></LoginContainer>
      <MessageContainer></MessageContainer>
    </main>
  )
}
