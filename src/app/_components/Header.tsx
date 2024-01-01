import { Box, Stack } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { SignIn, SignOutButton, SignedIn } from "@clerk/nextjs";

import Link from "next/link";


export function Header() {

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
        paddingTop: "0.5rem",
      }}
    >
      <Toolbar>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Box
            component={Link}
            href={"/"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {/* <Image src={logo} alt="logo" width="56" /> */}
            logo
          </Box>
        </Stack>
        <Stack direction="row" alignItems="end" spacing={4}>
          <SignIn />
          <SignedIn>
            <div>You are signed in</div>
          </SignedIn>
          <SignOutButton>
            <button>Sign out</button>
          </SignOutButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
