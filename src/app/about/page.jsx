import { Suspense } from "react";
import {displayLang} from "@/lib/lang";
import {safeFetch} from "@/lib/safeFetch";
import AboutIntro from "@/components/about/AboutIntro";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata = {
    title: "About Us",
    description: "Learn more about our company",
};

const About = async () => {
    const lang = await displayLang();

    const [aboutIntro, teamHeading, teamMembers] = await Promise.all([
        safeFetch(`about-page-intros?lang=${lang}`),
        safeFetch(`about-page-team-headings?lang=${lang}`),
        safeFetch(`about-page-teams?lang=${lang}`)
    ]);

    const intro = aboutIntro.data[0];
    const heading = teamHeading.data[0];
    const members = teamMembers.data;

    return (
        <div className="container">
            <AboutIntro data={intro} />
            <Suspense fallback={<p>Loading slider...</p>}>
                <AboutTeam heading={heading} data={members} />
            </Suspense>
        </div>
    );
};

export default About;