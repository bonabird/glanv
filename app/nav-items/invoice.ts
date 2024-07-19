import { SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import { ComponentType } from 'react';

export type NavObj = {
  id: string;
  title: string;
  icon: string;
  links: Item[];
};

export type Item = {
  id: string;
  title: string;
  link: string;
  icon:  ComponentType<React.SVGProps<SVGSVGElement>>;
};

const invoiceNavItems: NavObj = {
  id: "invoice",
  title: "Invoice",
  icon: "receipt",
  links: [
    {
      id: "dashoboard",
      title: "Dashboard",
      link: "/",
      icon: UsersIcon,
    },
    {
      id: "create-invoice",
      title: "Create Invoice",
      link: "/invoice/create",
      icon: SettingsIcon,
    },
    {
      id: "view-invoice",
      title: "View Invoice",
      link: "/invoice/view",
      icon: VercelLogo,
    },
  ],
};
export default invoiceNavItems;
