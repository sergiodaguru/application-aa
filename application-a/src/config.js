// Fetch config variables defined in window.*
const envSettings = props;

export const configuration = {
  seed: envSettings.SEED,
  appl: envSettings.APPL
}