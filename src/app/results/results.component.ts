import { Component, inject } from "@angular/core";
import { ResultCardComponent } from "../result-card/result-card.component";
import { ResultsService } from "./results.service";

@Component({
    selector: "app-results",
    standalone: true,
    imports: [ResultCardComponent],
    templateUrl: "./results.component.html",
    styleUrl: "./results.component.scss",
})
export class ResultsComponent {
    private resultsService = inject(ResultsService);

    get showResults() {
        return this.resultsService.calculated;
    }
}
