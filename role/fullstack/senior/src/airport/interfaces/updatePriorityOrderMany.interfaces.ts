import { priorityOrderAirport } from "../enum/priorityOrderAirport.enum"

export interface IUpdatePriorityOrderMany {
    airportIds: Array<number>
    priorityOrder: priorityOrderAirport
}
