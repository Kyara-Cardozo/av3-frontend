import { Icon, IconArrowLeft, IconBrandTabler, IconChairDirector, IconDashboard, IconLibrary, IconSettings, IconUserBolt, IconUsersGroup } from "@tabler/icons-react";

const links = [
    {
      label: "Auditórios",
      href: "#",
      icon: 
        <IconChairDirector className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
    {
      label: "Usuários",
      href: "#",
      icon: 
        <IconUsersGroup className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />

    },
    {
      label: "Dashboard",
      href: "#",
      icon: 
        <IconDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    },
];

export default links;