import { Component, inject } from "@angular/core";
import { ResultsService } from "../results/results.service";

@Component({
    selector: "app-result-card",
    standalone: true,
    imports: [],
    templateUrl: "./result-card.component.html",
    styleUrl: "./result-card.component.scss",
})
export class ResultCardComponent {
    private resultsService = inject(ResultsService);

    private getCurrencyString(amount: number) {
        return amount.toLocaleString("en-US", {
            style: "currency",
            currency: "GBP",
        });
    }

    get monthlyRepayment() {
        return this.getCurrencyString(this.resultsService.monthlyRepayment);
    }

    get totalRepayment() {
        return this.getCurrencyString(this.resultsService.totalRepayment);
    }
}
