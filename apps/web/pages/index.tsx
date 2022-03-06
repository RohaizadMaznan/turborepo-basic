import Link from "next/link";
import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web update on the new changes with Turborepo!</h1>
      <Button name="Yeyy!" />
      <Link href="/test">Test page</Link>
    </div>
  );
}
