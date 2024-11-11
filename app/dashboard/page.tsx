import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import UserInf from "@/components/userinf";
import OrdersList from "@/components/orderslis";
export default function Dashboard() {
  return (
    <Card className="grid gap-4 p-4">
      <UserInf />
      <span className="text-xl font-bold">لیست سفارشات</span>
      <OrdersList />
    </Card>
  );
}
