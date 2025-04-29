import { Store } from "@prisma/client";

import { PopoverTrigger } from "./ui/popover";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreswitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function Storeswitcher({
  className,
  items = []
}: StoreswitcherProps) {
  return (
    <div>
      Store Switcher
    </div>
  );
};