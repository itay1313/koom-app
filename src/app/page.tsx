"use client";
import Link from "next/link";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import ModalSignUp from "./_components/ModalSignUp";

export default function Home() {
  const { user } = useUser();

  console.log(user);

  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <SignedOut>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Koom. <span className="text-primary">It's</span> Time
          </h1>
          <div className="flex flex-col items-center gap-2">
            <h3 className="mb-4 text-3xl text-white">
              To wake up, you need to create an account.
            </h3>
            <ModalSignUp />
          </div>
        </SignedOut>
        <SignedIn>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Welcome{" "}
            <span className="capitalize text-primary"> {user?.firstName}</span>{" "}
            Wazap?
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                {user?.firstName}. It's time to wake up - click here to read
                first steps on how to wake up with the Koom App.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Waking up →</h3>
              <div className="text-lg">
                {user?.firstName}. Tell us how you woke up - click here to tell
                us how you woke up.
              </div>
            </Link>
          </div>
        </SignedIn>
      </div>
    </>
  );
}
