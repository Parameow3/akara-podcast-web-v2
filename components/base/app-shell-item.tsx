import { cn } from "@/libs/utils";
import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  /**
   * Icon
   */
  icon: IconType;
  /**
   * Label before Icon
   */
  label: string;
  /**
   * Active state of item
   */
  active?: boolean;
  /**
   * Item href
   */
  href: string;
  /**
   * Is collapsible
   */
  isCollapsed: boolean;
}

export const AppShellItem: React.FC<Props> = (props) => {
  const { label, icon: Icon, active, href, isCollapsed } = props;

  if (!Boolean(label && Icon)) return null;

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
        { "text-white": active }
      )}
    >
      <Icon color={active ? "#20BB07" : "#FFF"} size={26} />
      {!isCollapsed && <span className="truncate w-full">{label}</span>}
    </Link>
  );
};
