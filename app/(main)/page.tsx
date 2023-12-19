import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="md:py-10 bg-primary-50 bg-dotted-pattern bg-contain py-5">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Elevate Your Events, Host & Connect Seamlessly!</h1>
            <p className="p-regular-20 md:p-regular-24 text-muted-foreground">Ignite your celebrations, effortless hosting, unforgettable connections.</p>
            <Button asChild size="lg" className="w-full sm:w-fit text-md">
              <Link href="#events">
                Look around
              </Link>
            </Button>
          </div>
          <Image
            src="/festiva.png"
            alt="Hero"
            width={2000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-lg"
          />
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trusted by <br />multiple events.</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          Category
        </div>
      </section>
    </>
  );
};
