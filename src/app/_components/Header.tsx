"use client";
import { Box, Stack } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useClerk,
} from "@clerk/nextjs";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import ModalSignUp from "./ModalSignUp";
import { Button } from "@mui/material";
import Navigation from "./Navigation";

export function Header() {
  const { signOut } = useClerk();

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
        paddingTop: "0.5rem",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" justifyContent="space-between">
          <Box
            component={Link}
            href={"/"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {/* <Image src={logo} alt="logo" width="56" /> */}
            logo
          </Box>
        </Stack>
        <Navigation />
        <Stack direction="row" alignItems="end" spacing={4}>
          <SignedOut>
            <SignInButton>
              <ModalSignUp />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton signOutCallback={() => signOut()}>
              <Button variant="contained" startIcon={<LogoutIcon />}>
                Sign out
              </Button>
            </SignOutButton>
          </SignedIn>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
