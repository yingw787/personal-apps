import Link from "next/link";

import { ROUTE_HOME } from "@apps/com-yingw787-bytes/lib/routes";

const NotFound = () => {
  return (
    <>
      <main className="mx-auto flex max-w-3xl flex-1 h-full items-center justify-center">
        <div className="mb-14 flex flex-col items-center justify-center">
          <h1
            aria-label="404 Not Found"
            className="text-9xl font-bold text-zinc-800 dark:text-zinc-200"
          >
            404
          </h1>
          <span aria-hidden="true" className="text-zinc-800 dark:text-zinc-200">
            ¯\_(ツ)_/¯
          </span>
          <p className="mt-4 text-2xl sm:text-3xl text-zinc-800 dark:text-zinc-200">
            Page Not Found
          </p>
          <Link
            href={ROUTE_HOME}
            className="my-6 underline decoration-dashed underline-offset-8 text-lg text-zinc-800 dark:text-zinc-200"
          >
            Go back home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
