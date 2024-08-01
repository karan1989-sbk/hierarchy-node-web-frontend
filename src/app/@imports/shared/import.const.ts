import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { TieredMenuModule } from "primeng/tieredmenu";

const CommonAppModule = [
    CommonModule,
    BrowserAnimationsModule,
]
const PrimengModule = [
    ButtonModule,
    TieredMenuModule
]

export { CommonAppModule,PrimengModule }