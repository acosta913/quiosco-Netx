import { prisma } from "@/prisma/lib/prisma";
import CategoryIcon from "../ui/CategoryIcon";

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function OrderSidebar() {
  const categories = await getCategories();
  return (
    <aside>
      <nav className=" mt-10">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
}
