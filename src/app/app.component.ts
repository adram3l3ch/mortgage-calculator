import { Component } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { FormComponent } from "./form/form.component";
import { ResultsComponent } from "./results/results.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [InputComponent, FormComponent, ResultsComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    name = "asdas";
}
