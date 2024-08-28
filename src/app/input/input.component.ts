import { Component, Input, input, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-input",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./input.component.html",
    styleUrl: "./input.component.scss",
})
export class InputComponent {
    //I thought I could implement a fully customizable custom input. sadly i couldn't
    name = input.required<string>();
    placeholder = input<string>("");
    label = input<string>("");
    preText = input<string>("");
    postText = input<string>("");
    error = input<string>("");
    type = input<"number" | "radio" | "text">("text");
    radioOptions = input<{ id: string; value: string }[]>([]);
    valueChange = output<string>();

    @Input() value = "";

    onValueChange(newValue: string) {
        this.value = newValue;
        this.valueChange.emit(newValue);
    }
}
