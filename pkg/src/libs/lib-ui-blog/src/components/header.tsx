"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import {
  XMarkIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

import { Container } from "@libs/blog/components/container";
import { Navigation } from "@libs/blog/types/navigation";
import { Theme } from "@libs/blog/types/themes";

interface MobileNavigationProps {
  links: Navigation[];
  theme: Theme;
}

const MobileNavigation = ({ links, theme }: MobileNavigationProps) => {
  return (
    <Popover className="pointer-events-auto md:hidden">
      <Popover.Button
        className={twMerge(
          "group flex items-center rounded-full px-4 py-2 text-sm font-medium shadow-lg ring-1 backdrop-blur",
          theme === "default"
            ? "bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            : "",
          theme === "solarized"
            ? "bg-base3/90 text-base01 shadow-base01/5 ring-base02/5 dark:bg-base03/90 dark:text-base1 dark:ring-base2/10 dark:hover:ring-base2/20"
            : "",
        )}
      >
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Popover.Button
                        as={Link}
                        href={link.href}
                        className="block py-2"
                      >
                        {link.title}
                      </Popover.Button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};

interface DesktopNavigationProps {
  links: Navigation[];
  theme: Theme;
}

const DesktopNavigation = ({ links, theme }: DesktopNavigationProps) => {
  const currentPath = usePathname();

  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {links.map((link, index) => {
          const isActive = currentPath === link.href;
          return (
            <li key={index}>
              <Link
                href={link.href}
                className={clsx(
                  "relative block px-3 py-2 transition",
                  isActive
                    ? "text-brand-primary-500 dark:text-brand-primary-400"
                    : "hover:text-brand-primary-500 dark:hover:text-brand-primary-400",
                )}
              >
                {link.title}
                {isActive && (
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-brand-primary-500/0 via-brand-primary-500/40 to-brand-primary-500/0 dark:from-brand-primary-400/0 dark:via-brand-primary-400/40 dark:to-brand-primary-400/0" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-brand-primary-50 [@media(prefers-color-scheme:dark)]:stroke-brand-primary-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-brand-primary-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-brand-primary-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-brand-primary-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-brand-primary-500" />
    </button>
  );
};

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

const AvatarContainer = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10",
      )}
      {...props}
    />
  );
};

const Avatar = ({
  avatarImage,
  routeHome,
  large = false,
  className,
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  avatarImage: StaticImageData;
  routeHome: string;
  large?: boolean;
}) => {
  return (
    <Link
      href={routeHome}
      aria-label="Home"
      className={twMerge(
        clsx(className, "pointer-events-auto"),
        "block h-16 w-16 origin-left",
      )}
      style={{ transform: "var(--avatar-image-transform)" }}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9",
        )}
        priority
      />
    </Link>
  );
};

interface HeaderProps {
  avatarImage: StaticImageData;
  routeHome: string;
  links: Navigation[];
  theme: Theme;
}

export const Header = ({
  avatarImage,
  routeHome,
  links,
  theme,
}: HeaderProps) => {
  const isHomePage = usePathname() === "/";

  const headerRef = useRef<React.ElementRef<"div">>(null);
  const avatarRef = useRef<React.ElementRef<"div">>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    const downDelay = avatarRef.current?.offsetTop ?? 0;
    const upDelay = 64;

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value);
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property);
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return;
      }

      const { top, height } = headerRef.current.getBoundingClientRect();
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      );

      if (isInitial.current) {
        setProperty("--header-position", "sticky");
      }

      setProperty("--content-offset", `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`);
        setProperty("--header-mb", `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`);
        setProperty("--header-mb", `${height - offset}px`);
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`);
        setProperty("--header-mb", `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty("--header-inner-position", "fixed");
        removeProperty("--header-top");
        removeProperty("--avatar-top");
      } else {
        removeProperty("--header-inner-position");
        setProperty("--header-top", "0px");
        setProperty("--avatar-top", "0px");
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return;
      }

      const fromScale = 1;
      const toScale = 36 / 64;
      const fromX = 0;
      const toX = 2 / 16;

      const scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      );

      const borderScale = 1 / (toScale / scale);
      const borderX = (-toX + x) * borderScale;
      const borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty("--avatar-border-transform", borderTransform);
      setProperty("--avatar-border-opacity", scale === toScale ? "1" : "0");
    }

    function updateStyles() {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("scroll", updateStyles);
      window.removeEventListener("resize", updateStyles);
    };
  }, [isHomePage]);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{
                position:
                  "var(--header-position)" as React.CSSProperties["position"],
              }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{
                  position:
                    "var(--header-inner-position)" as React.CSSProperties["position"],
                }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 top-3 origin-left transition-opacity"
                    style={{
                      opacity: "var(--avatar-border-opacity, 0)",
                      transform: "var(--avatar-border-transform)",
                    }}
                  />
                  <Avatar
                    avatarImage={avatarImage}
                    routeHome={routeHome}
                    large
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position:
              "var(--header-position)" as React.CSSProperties["position"],
          }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position:
                "var(--header-inner-position)" as React.CSSProperties["position"],
            }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar avatarImage={avatarImage} routeHome={routeHome} />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation links={links} theme={theme} />
                <DesktopNavigation links={links} theme={theme} />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && (
        <div
          className="flex-none"
          style={{ height: "var(--content-offset)" }}
        />
      )}
    </>
  );
};
