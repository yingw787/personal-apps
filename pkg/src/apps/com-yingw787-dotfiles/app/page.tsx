import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@libs/shadcn-ui/components/ui/card";

const HomePage: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Card className="w-[700px]">
          <CardHeader>
            <CardTitle>Dotfiles</CardTitle>
            <CardDescription>
              This site exists to host my dotfiles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <div>Run the commands below to get started:</div>
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
