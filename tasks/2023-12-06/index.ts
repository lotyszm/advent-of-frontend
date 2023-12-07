enum InvalidState {
  unknown = "unknown",
}

export class OrderController {
  private machines = new Set<Machine>();

  registerMachine(machine: Machine) {
    this.machines.add(machine);
  }

  unregisterMachine(machine: Machine) {
    this.machines.delete(machine);
  }

  setState(state: string) {
    if (state === InvalidState.unknown) {
      throw new Error("Invalid state provided");
    }
    this.machines.forEach((machine) => {
      machine.setState(state);
    });
  }
}

export class Machine {
  private statesLog: string[] = [];

  state: string | null = null;

  performAudit() {
    return this.statesLog.map((state, index) => {
      return `Order #${index + 1} - ${state}`;
    });
  }

  setState(state: string) {
    this.state = state;
    this.statesLog.push(state);
  }

}
