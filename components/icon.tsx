import {
  Building2,
  Scale,
  Landmark,
  Receipt,
  Building,
  ShieldCheck,
  Trophy,
  Users,
  Lock,
  Coins,
  Clock,
  Award,
  type LucideProps,
} from "lucide-react";

const icons = {
  Building2,
  Scale,
  Landmark,
  Receipt,
  Building,
  ShieldCheck,
  Trophy,
  Users,
  Lock,
  Coins,
  Clock,
  Award,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Scale;
  return <Cmp {...props} />;
}
