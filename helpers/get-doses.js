export default function getDosages(dosageIndicators) {
  const doseNumber = (dosage) =>
    dosage.dosageNumber.toString().replace(" ", "").toLowerCase();

  const boosterShots = dosageIndicators.filter(
    (dosage) => doseNumber(dosage) === "boosterdosage"
  );

  const dosages = dosageIndicators
    .filter((dosage) => doseNumber(dosage) !== "boosterdosage")
    .sort((a, b) => {
      const doseOne = Number(a.dosageNumber);
      const doseTwo = Number(b.dosageNumber);

      return doseOne - doseTwo;
    });

  return { dosages, boosterShots };
}
