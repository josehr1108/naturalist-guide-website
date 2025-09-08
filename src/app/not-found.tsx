import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen finishGradientBackground text-center p-4 text-primary">
      <h1 className="text-4xl font-extrabold">404</h1>
      <h2 className="text-2xl font-bold">Lost in the Wilderness</h2>
      <p className="paragraph-text max-w-md my-4">
        It seems this trail doesn’t lead anywhere… The page you’re looking for
        has wandered off into the forest. Don’t worry—let’s guide you back to
        safer paths.
      </p>
      <Link href="/" className="text-xl font-bold">
        Return Home
      </Link>
    </div>
  );
}
