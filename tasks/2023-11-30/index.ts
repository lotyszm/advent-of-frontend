interface Mineral {
  value: number;
  mass: number;
}

export function optimizeLoad(minerals: Mineral[], maxMass: number): Mineral[] {
  
  // totalMass is less or equal than maxMass = return all minerals
  const totalMass = calculateTotalMass(minerals);
  if (totalMass <= maxMass) {
    return minerals;
  }

  // sort minerals by value DESC
  const sortedMinerals = minerals.sort((m1, m2) => m2.value - m1.value);

  const selectedMinerals: Mineral[] = [];

  sortedMinerals.forEach((m) => {
    if(calculateTotalMass(selectedMinerals) + m.mass <= maxMass ) {
      selectedMinerals.push(m);
    }
  });
  
  return selectedMinerals;
}


function calculateTotalMass(minerals: Mineral[]) : number {
  return minerals.reduce((total, mineral) => total + mineral.mass, 0);
}