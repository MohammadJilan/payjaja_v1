import { createClient } from "@/lib/supabase/server";
import { BookMinus, HomeIcon, Menu } from "lucide-react";
import Link from "next/link";
import UserProfile from "./UserProfile";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <div className="fixed bottom-0 w-full  bg-slate-700 text-white flex justify-around py-2 ">
      {/* Icon 1 */}
      <Link href="/" className="flex flex-col items-center">
        <HomeIcon />
        <span className="text-xs">Home</span>
      </Link>
      {/* Icon 2 */}
      <div className="flex flex-col items-center">
        <Link href="/schemes" className="flex flex-col items-center">
          <Menu />
          <span className="text-xs">Schemes</span>
        </Link>
      </div>
      {/* Icon 3 */}
      <div className="flex flex-col items-center">
        <Link href="/invoice" className="flex flex-col items-center">
          <BookMinus />
          <span className="text-xs">Invoice</span>
        </Link>
      </div>

      {/* Icon 5 */}

      <div className="flex flex-col items-center">
        <UserProfile user={user} />
      </div>
    </div>
  );
}
