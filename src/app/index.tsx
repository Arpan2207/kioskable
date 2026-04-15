/**
 * Root route — renders the Home POS screen.
 * Kept intentionally thin; all UI composition lives in HomePosScreen.
 */

import "@/theme/unistyles";
import { HomePosScreen } from "@/components/pos/HomePosScreen";

export default function Index() {
  return <HomePosScreen />;
}
