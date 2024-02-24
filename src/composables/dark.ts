import { useDark, useToggle } from "@vueuse/core";

export const isDark = useDark();
export const toggleDark = () => {
  console.log(isDark.value)
  useToggle(isDark)
};
