import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputComponent } from "../input/input.component";
import { ResultsService } from "../results/results.service";
import { formSchema } from "./form.schema";

@Component({
    selector: "app-form",
    standalone: true,
    imports: [FormsModule, InputComponent],
    templateUrl: "./form.component.html",
    styleUrl: "./form.component.scss",
})
export class FormComponent {
    radioOptions = [
        { id: "repayment", value: "Repayment" },
        { id: "interest", value: "Interest Only" },
    ];

    private resultsService = inject(ResultsService);

    formValues = { amount: "", term: "", interest: "", type: "" };
    errors = { amount: "", term: "", interest: "", type: "" };
    touched = false;

    private validate() {
        try {
            const data = formSchema.validateSync(this.formValues, { abortEarly: false });
            this.errors = { amount: "", term: "", interest: "", type: "" };
            return data;
        } catch (error: any) {
            for (const key in this.errors) {
                const message = error.inner?.find((e: any) => e.path === key)?.message;
                this.errors[key as keyof typeof this.errors] = message || "";
            }
            return;
        }
    }

    onSubmit() {
        this.touched = true;
        const data = this.validate();
        if (data) {
            this.resultsService.calculateResults(data);
        }
    }

    onValueChange() {
        if (this.touched) this.validate();
    }

    onClear() {
        this.formValues = { amount: "", term: "", interest: "", type: "" };
        this.errors = { amount: "", term: "", interest: "", type: "" };
        this.touched = false;
        this.resultsService.clear();
    }
}
