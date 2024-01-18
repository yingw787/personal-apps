import { type Metadata } from "next";
import Link from "next/link";

import { SimpleLayout } from "@libs/blog/components/simple-layout";
import { getCategoriesByNumArticles } from "@apps/com-yingw787-bytes/lib/categories";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@libs/shadcn-ui/components/ui/table";

export const metadata: Metadata = {
  title: "Categories",
  description: null,
};

const TableCategories = async () => {
  const categoriesByNumArticles = await getCategoriesByNumArticles();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categoriesByNumArticles.map((value, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <Link href={`/categories/${value.category}`}>
                {value.category}
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default async function Categories() {
  return (
    <SimpleLayout title="Categories" intro={null}>
      <div className="w-fit">
        <TableCategories />
      </div>
    </SimpleLayout>
  );
}
