import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>Choose Color from here love : </h1>
      <li>
        <Link href="/exercises/01-screensaver/blue">blue</Link>
      </li>
      <li>
        <Link href="/exercises/01-screensaver/red">red</Link>
      </li>
      <li>
        <Link href="/exercises/01-screensaver/green">green</Link>
      </li>
      <li>
        <Link href="/exercises/01-screensaver/pink">pink</Link>
      </li>
    </div>
  );
}
