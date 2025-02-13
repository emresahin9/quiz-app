import { Option } from "./option";

export interface Question {
    questionId: number;
    question: string;
    options: Option[];
}