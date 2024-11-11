"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function SwitchTheme() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="dark-mode">
        <SunIcon />
      </Label>
      <Switch
        defaultChecked={theme === "dark"}
        onCheckedChange={(event:any) =>
          setTheme(event.valueOf() ? "dark" : "light")
        }
        id="dark-mode"
      />
      <Label htmlFor="dark-mode">
        <MoonIcon />
      </Label>
    </div>
  );
}
