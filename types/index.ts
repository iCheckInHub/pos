type TMenuServiceExtends = TMenuService & {
  quantity: number;
  optionIds: string[];
};

// interface IService {
//   id?: string;
//   name: string;
//   image: string;
//   price: number;
//   description?: string;
//   duration?: number;
//   extras?: IServiceExtra[];
//   top?: boolean;
//   menu_id: string;
//   quantity?: number;
//   optionIds?: string[];
// }

// interface IServiceExtra {
//   id?: string;
//   name: string;
//   description?: string;
//   multiple?: boolean;
//   options?: IServiceExtraOption[];
//   service_id: string;
// }

// interface IServiceExtraOption {
//   id?: string;
//   name: string;
//   description: string;
//   price: number;
//   duration: number;
//   extra_id: string;
//   default?: boolean;
// }

// interface IPlace {
//   id?: string;
//   name: string;
//   image?: string;
//   cover?: string;
//   description?: string;
//   address: string;
//   hours?: { [key: string]: string };
//   phone?: string;
//   rating?: number;
//   review?: number;
//   place_id?: string;
//   menus?: IMenu[];
// }

// interface IMenu {
//   id?: string;
//   name: string;
//   items?: IMenu[];
//   services?: IService[];
//   parent_id?: string;
//   place_id?: string;
// }

interface TCart {
  place_id: string;
  items: TCartItem[];
}

interface TCartItem {
  id: string;
  quantity?: number;
  optionIds?: string[];
}
