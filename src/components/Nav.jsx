{/*import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link 
        href="/" 
        legacyBehavior
    >
        <a className="text-3xl font-extrabold text-slate-900">Sure</a>
    </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href="/auth/login" legacyBehavior>
            <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8">
                Log in
            </a>
          </Link>
        )}
        {user && (
          <div>
            <Link href="/dashboard" legacyBehavior>
              <img
                referrerPolicy="no-referrer"
                className="w-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}*/}