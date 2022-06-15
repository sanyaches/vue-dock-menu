export interface MenuItemModel {
  name?: string;
  title?: string;
  id?: string;
  onSelected?: (id: string) => void;
  menu?: MenuItemModel[];
  disable?: boolean;
  highlight?: boolean;
  isDivider?: boolean;
  iconSlot?: string;
}