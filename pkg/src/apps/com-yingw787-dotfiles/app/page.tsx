import { stripIndent } from "common-tags";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@libs/shadcn-ui/components/ui/card";

const codeBlock = stripIndent`
# On vanilla ubuntu-19.10-desktop-amd64 instance
sudo apt update
sudo apt list --upgradable
sudo apt upgrade

# Restart instance to install upgrades
sudo reboot

# After logging back in, download and execute script
wget -qO- \\
    https://dotfiles.yingw787.com/setup.sh \\
    > $HOME/setup.sh
sudo -Hu $(whoami) /bin/bash $HOME/setup.sh
`;

const HomePage: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Card className="w-[80%] max-w-[700px]">
          <CardHeader>
            <CardTitle>Dotfiles</CardTitle>
            <CardDescription>
              This site exists to host my dotfiles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-5">
              <div>Run the commands below to get started:</div>
              <div className="rounded-xl">
                <SyntaxHighlighter
                  language="bash"
                  style={solarizedDark}
                  customStyle={{ borderRadius: "0.5rem", padding: "1rem" }}
                >
                  {codeBlock}
                </SyntaxHighlighter>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-zinc-600">&copy; {year} Ying Wang.</div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
