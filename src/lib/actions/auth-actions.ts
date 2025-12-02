"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const signUp = async (email: string, password: string, name: string) => {
  const res = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });

  return res;
};

export const signIn = async (email: string, password: string) => {
  const res = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: "/dashboard",
    },
  });

  return res;
};

export const signOut = async () => {
  const res = await auth.api.signOut({ headers: await headers() });

  return res;
};
