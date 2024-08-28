import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ResultsService {
    monthlyRepayment = 0;
    totalRepayment = 0;
    calculated = false;

    calculateResults(values: { amount: number; term: number; interest: number; type: string }) {
        const { amount, interest, term, type } = values;

        const annualRate = interest / 100;

        const monthlyRate = annualRate / 12;

        const totalTermsInMonths = term * 12;

        const monthlyPayment = (amount * monthlyRate * (1 + monthlyRate) ** totalTermsInMonths) / ((1 + monthlyRate) ** totalTermsInMonths - 1);

        if (type === "repayment") {
            this.totalRepayment = monthlyPayment * totalTermsInMonths;
            this.monthlyRepayment = monthlyPayment;
        } else {
            this.totalRepayment = monthlyPayment * totalTermsInMonths - amount;
            this.monthlyRepayment = this.totalRepayment / totalTermsInMonths;
        }
        this.calculated = true;
    }

    clear() {
        this.calculated = false;
    }
}
