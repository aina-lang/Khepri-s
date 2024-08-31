import { CTA, Typography } from "@/components";
import React from "react";

export default function notFound() {
  return (
    <main>
      <section className="container flex items-center flex-col justify-center min-h-screen">
        <div>
          <Typography variant="h1" className="!text-9xl text-secondary-500 dark:text-primary my-4">
            404
          </Typography>
          <Typography variant="h4" className="text-center text-secondary-500 dark:text-grey-100">Page not found</Typography>
        </div>
        <CTA url="/" className="flex items-center justify-center bg-primary text-secondary-500 py-4 md:py-2 h-full w-full md:w-fit min-w-[224px] max-w-[384px] mt-4">
            <Typography variant="small" className="uppercase text-[12px] font-bold">Go Back</Typography>
        </CTA>
      </section>
    </main>
  );
}
