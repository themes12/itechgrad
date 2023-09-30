'use client'

import { NextUIProvider } from '@nextui-org/react'
import { PrimeReactProvider } from "primereact/api";
import { usePassThrough } from 'primereact/passthrough';
import Tailwind from "primereact/passthrough/tailwind";
import { classNames } from 'primereact/utils';

export function Providers({ children }: { children: React.ReactNode }) {
  const CustomTailwind = usePassThrough(
    Tailwind,
    {
      calendar: {
        input: {
          root: {
            className: classNames(
              'font-sans text-base text-gray-600 dark:text-white/80 bg-default-100 dark:bg-gray-900 p-3 outline-none transition-colors duration-200 appearance-none rounded-lg',
              'hover:bg-default-200' //Hover
            )
          }
        }
      }
    },
    { mergeSections: true, mergeProps: false }
  );

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: CustomTailwind }}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </PrimeReactProvider>
  )
}