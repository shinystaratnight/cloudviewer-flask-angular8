import { Injectable } from "@angular/core";
import { EgretSidebarComponent } from "./egret-sidebar.component";

@Injectable({
  providedIn: "root"
})
export class EgretSidebarHelperService {
  sidebarList: EgretSidebarComponent[];

  constructor() {
    this.sidebarList = [];
  }

  setSidebar(name, sidebar): void {
    this.sidebarList[name] = sidebar;
  }

  getSidebar(name): any {
    return this.sidebarList[name];
  }

  removeSidebar(name) {
    if (!this.sidebarList[name]) {
      console.warn(`The sidebar with name '${name}' doesn't exist.`);
    }

    // remove sidebar
    delete this.sidebarList[name];
  }
}
