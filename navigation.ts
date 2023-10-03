import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
 
export const locales = ['en', 'th'] as const;
 
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  '/': '/',
  // If locales use different paths, you can
  // specify each external path per locale.
  '/about': '/about',
  '/announcement': '/announcement',
  '/announcement/[slug]': '/announcement/[slug]',
  '/courses/[degree]': '/courses/[degree]',
  '/courses/[degree]/all': '/courses/[degree]/all',
  '/program/[degree]': '/program/[degree]',
  '/research': '/research',
  '/staff/[type]': '/staff/[type]',

  '/admin': '/admin',
  '/admin/[degree]': '/admin/[degree]',
  '/admin/[degree]/course-management': '/admin/[degree]/course-management',
  '/admin/[degree]/program-management': '/admin/[degree]/program-management',

} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames: pathnames as typeof pathnames & Record<string & {}, string>
  });