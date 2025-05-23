export type ThemeColorKey =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "danger";

export type ThemeColors = {
  [key in ThemeColorKey]: string;
};

export const themeColors: ThemeColors = {
  primary:
    "text-indigo-700 bg-indigo-100 border-indigo-300 hover:bg-indigo-200",
  secondary: "text-pink-600 bg-pink-100 border-pink-300 hover:bg-pink-200",
  info: "text-blue-600 bg-blue-100 border-blue-300 hover:bg-blue-200",
  success: "text-green-600 bg-green-100 border-green-300 hover:bg-green-200",
  warning:
    "text-yellow-600 bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
  danger: "text-red-600 bg-red-100 border-red-300 hover:bg-red-200",
};
