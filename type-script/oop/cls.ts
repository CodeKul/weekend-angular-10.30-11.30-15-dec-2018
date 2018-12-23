import { GpsListener } from './gps-listener';
export abstract class Animal implements GpsListener {
    constructor(
        protected legs: number = 4,
        private eyes: number = 2
    ) {

    }

    abstract run(): void

    location() {

    }
}