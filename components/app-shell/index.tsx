"use client";

import { cn } from "@/libs/utils";
import { Box } from "@/components/base/container/Box";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useMemo, useState } from "react";
import { AppShellItem } from "../base/app-shell-item";

import {
  HiMenuAlt2 as IconCollapse,
  HiHome as IconHome,
  HiSearch as IconSearch,
  HiTrendingUp as IconTrending,
} from "react-icons/hi";

import { MdFavorite as IconFavorite } from "react-icons/md";
import { TbLayoutSidebarRightCollapseFilled as IconCollapseOut } from "react-icons/tb";
import { MdPlaylistAdd as IconPlaylist } from "react-icons/md";

import { ROUTE } from "@/libs/route";

export const AppShell: React.FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const routes = useMemo(
    () => [
      {
        icon: IconHome,
        label: ROUTE.DEFAULT.LABEL,
        active: pathname === ROUTE.DEFAULT.HREF,
        href: ROUTE.DEFAULT.HREF,
      },
      {
        icon: IconSearch,
        label: ROUTE.SEARCH.LABEL,
        active: pathname === ROUTE.SEARCH.HREF,
        href: ROUTE.SEARCH.HREF,
      },
      {
        icon: IconFavorite,
        label: ROUTE.FAVORITE.LABEL,
        active: pathname === ROUTE.FAVORITE.HREF,
        href: ROUTE.FAVORITE.HREF,
      },
      {
        icon: IconTrending,
        label: ROUTE.TRENDING.LABEL,
        active: pathname === ROUTE.TRENDING.HREF,
        href: ROUTE.TRENDING.HREF,
      },
    ],
    [pathname]
  );

  const className =
    "hidden md:flex flex-col gap-y-2 bg-black h-full p-2 transition-width duration-300";

  return (
    <Wrapper>
      <section className={cn(className, isCollapsed ? "w-20" : "w-[300px]")}>
        <button
          className="text-white p-2 flex items-center space-x-5"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <IconCollapse size={32} />
          ) : (
            <IconCollapseOut size={32} />
          )}
        </button>

        <Box>
          <div
            className={cn("flex flex-col gap-y-4 px-5 py-4", {
              "items-center": isCollapsed,
            })}
          >
            {routes.map((item) => (
              <AppShellItem
                key={item.label}
                {...item}
                isCollapsed={isCollapsed}
              />
            ))}
          </div>
        </Box>

        <Box className="overflow-y-auto h-full">
          <div
            className={cn("flex flex-col gap-y-4 px-5 py-4", {
              "items-center": isCollapsed,
            })}
          >
            <AppShellItem
              icon={IconPlaylist}
              label={ROUTE.PLAYLIST.LABEL}
              active={pathname === ROUTE.PLAYLIST.HREF}
              href={ROUTE.PLAYLIST.HREF}
              isCollapsed={isCollapsed}
            />
          </div>
        </Box>
      </section>

      <section className="h-full flex-1 overflow-y-auto md:ms-2">
        {children}
      </section>
    </Wrapper>
  );
};

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={cn("flex h-full", { "h-[calc(100%-80px)]": false })}>
    {children}
  </div>
);
