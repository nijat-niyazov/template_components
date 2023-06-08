import { ReactNode } from "react";

export interface ListProps<Item> {
  items: Item[];
  render:(item:Item)=>ReactNode
}
