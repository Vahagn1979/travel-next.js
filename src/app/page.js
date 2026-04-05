import { Suspense } from "react";
import {displayLang} from "@/lib/lang";
import Slider from "@/components/home/Slider";
import Packages from "@/components/home/Packages";
import {safeFetch} from "@/lib/safeFetch";

export const metadata = {
    title: "Travel packages",
    description: "Welcome to our home page",
};

export default async function Home() {
    const lang = await displayLang();

    const [slidersResp, packagesHeadingResp, packagesResp] = await Promise.all([
        safeFetch(`home-page-sliders?lang=${lang}`),
        safeFetch(`home-page-packages-headings?lang=${lang}`),
        safeFetch(`home-page-packages?lang=${lang}`)
    ]);

    const sliders = slidersResp.data;
    const heading = packagesHeadingResp.data[0];
    const packages = packagesResp.data;

    return (
        <div>
          <main>
              <Suspense fallback={<p>Loading slider...</p>}>
                <Slider data={sliders} />
              </Suspense>
              <Suspense fallback={<p>Loading packages...</p>}>
                <Packages heading={heading} data={packages} />
              </Suspense>
          </main>
        </div>
  );
}
