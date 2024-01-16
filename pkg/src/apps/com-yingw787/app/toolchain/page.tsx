import { Card } from "@libs/blog/components/card";
import { Section } from "@libs/blog/components/section";
import { SimpleLayout } from "@libs/blog/components/simple-layout";

const ToolsSection = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) => {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
};

const Tool = ({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
};

export const metadata = {
  title: "Toolchain",
  description: "Things I recommend to get the job done.",
};

const Toolchain = () => {
  return (
    <SimpleLayout
      title="Things I recommend to get the job done."
      intro="Over the years, I've collected some clutter that makes my life more enjoyable. Here's some of my favorites."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Lenovo ThinkPad P1 Gen 2 (2019)">
            <div>
              My first professional grade laptop was a 2012 MacBook Pro my dad
              bought me for college. I used it all the way until 2019, upgrading
              the internals along the way when things got to slow.
            </div>
            <br />
            <div>
              In 2019, an interviewer mentioned my laptop was a bit slower than
              other laptops around the office. I decided to upgrade to make my
              interviewing experience a bit better and got myself a Lenovo. I
              tripped over the power cord that December and bent the plug, and
              that is when I decided to keep it.
            </div>
            <br />
            <div>
              I like this laptop for the upgradeability - I buy RAM and disk
              separately to get the best price and upgrade on my own timeline.
              Since I use Linux, I&apos;m hoping this is the last laptop I
              really need to upgrade to. If Ubuntu gets too slow, I&apos;ll
              change the distro to something like Arch.
            </div>
          </Tool>
          <Tool title="2x Dell U2717D Monitors (2018)">
            Linux resolution scaling can be a nightmare. I purchased my laptop
            with the smallest resolution possible (1440p instead of 4K). For
            monitors, I was worried that Linux drivers for ultrawide monitors
            would not be supported, so opted for a more traditional setup of two
            monitors. More screen space as a developer = higher productivity.
          </Tool>
          <Tool title="Herman Miller Aeron Chair (with Lumbar Support)">
            Herman Miller chairs come new at $2000. I buy my Herman Miller
            chairs for around $400 on Craigslist. I bought one for work and one
            for home. I dropped the second one down some steps in D.C. and it
            still works fine.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            This editor is so good, it made some Microsoft haters come out of
            their shell. Look through the extensions marketplace for popular
            extensions, it turns a simple text editor into an IDE beast.
          </Tool>
          <Tool title="tmux">
            I used to use iTerm2 but there is no equal on Linux. So I use tmux -
            combined with tmux-resurrect, I can create the perfect terminal
            layout for me, take it to any operating system, and save my setup to
            disk to boot up whenever I restart my laptop.
          </Tool>
          <Tool title="OBS Studio">
            An open-source version of Loom. Pretty much has all features Loom
            has, a bit clunkier to use with worse audio, but totally free.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="ChatGPT">
            It&apos;s pretty much my unpaid intern that I don&apos;t feel bad
            about underpaying.
          </Tool>
          <Tool title="Hourly Journal">
            I built out my own software to record an hourly journal, where I
            actually record my day in 15-minute increments. It&apos;s helped me
            stay focused during long stretches of personal time.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
};

export default Toolchain;
