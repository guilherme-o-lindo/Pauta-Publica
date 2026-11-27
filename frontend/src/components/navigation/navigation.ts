export interface NavigationItem {
  label: string;
  href: string;
  current?: boolean;
}
function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
}
export function searchNavigation(items: readonly NavigationItem[], query: string) {
  return items.filter((item) => normalize(item.label).includes(normalize(query.trim())));
}
