import { Card } from "@apps/com-yingw787/components/card";
import { Section } from "@apps/com-yingw787/components/section";
import { SimpleLayout } from "@apps/com-yingw787/components/simple-layout";

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
            <p>
              My first professional grade laptop was a 2012 MacBook Pro my dad
              bought me for college. I used it all the way until 2019, upgrading
              the internals along the way when things got to slow.
            </p>
            <br />
            <p>
              When I interviewed at Mercury in 2019, Max mentioned it was a bit
              slower than other laptops around the office. I decided to upgrade
              to make my interviewing experience a bit better and got myself a
              Lenovo. I tripped over the power cord that December and bent the
              plug, and that is when I decided to keep it.
            </p>
            <br />
            <p>
              I like this laptop for the upgradeability - I buy RAM and disk
              separately to get the best price and upgrade on my own timeline.
              Since I use Linux, I&apos;m hoping this is the last laptop I
              really need to upgrade to. If Ubuntu gets too slow, I&apos;ll
              change the distro to something like Arch.
            </p>
          </Tool>
          <Tool title="2x Dell U2717D Monitors (2018)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Sublime Text 4">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, Sublime Text is still the best text editor ever
            made.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
};

export default Toolchain;
