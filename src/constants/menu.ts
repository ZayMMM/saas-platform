import Logo from "../assets/images/trade-logo.png";

export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
  logo?: string;
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboard",
    icon: "",
    label: "",
    isTitle: true,
    logo: `${Logo}`,
  },
  {
    key: "apps",
    icon: "home",
    label: "Home",
    isTitle: true,
  },
  {
    key: "base-ui",
    icon: "home",
    label: "Individual Data",
    isTitle: true,
  },
  {
    key: "components",
    icon: "aperture",
    label: "Support",
    isTitle: true,
  },
];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboard",
    icon: "",
    label: "",
    isTitle: true,
    logo: `${Logo}`,
  },
  {
    key: "apps",
    icon: "home",
    label: "Home",
    isTitle: true,
    url: "/home",
  },
  {
    key: "base-ui",
    icon: "bar-chart",
    label: "Individual Data",
    isTitle: true,
    url: "/individual",
  },
  {
    key: "components",
    icon: "aperture",
    label: "Support",
    isTitle: true,
  },
];

const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [];

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
