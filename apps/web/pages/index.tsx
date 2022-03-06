import Link from "next/link";
import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button name="Yeyy!" />
      <Link href="/test">Test page</Link>
    </div>
  );
}
