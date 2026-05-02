/**
 * /orders/detail route — renders the Order Detail screen.
 * Kept thin; all composition lives in OrderDetailScreen.
 */

import "@/theme/unistyles";
import { OrderDetailScreen } from "../../components/orders/OrderDetailScreen";

export default function OrderDetailRoute() {
  return <OrderDetailScreen />;
}
