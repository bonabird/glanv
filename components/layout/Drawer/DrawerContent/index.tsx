import { NavItem } from "@/components/layout/Drawer/DrawerContent/nav-item";
import { NavObj, Item } from "@/nav-items/invoice";

export function DrawerLinks({ NavigationItems }: { NavigationItems: NavObj }) {
  return (
    <section>
      {NavigationItems.links.map((nav: Item) => (
        <NavItem key={nav.id} href={nav.link}>
          <nav.icon className="h-4 w-4" />
          {nav.title}
        </NavItem>
      ))}
    </section>
  );
}
