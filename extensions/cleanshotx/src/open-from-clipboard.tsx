import { closeMainWindow, open } from "@raycast/api";

export default async function Command() {
  const url = "cleanshot://open-from-clipboard";
  open(url);
  await closeMainWindow();
}
