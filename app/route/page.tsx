import { UserButton } from "@clerk/nextjs";

export default function page() {
  return (
    <div>
      <h1>Auth Page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
