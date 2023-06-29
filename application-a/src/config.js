// Fetch config variables defined in window.*
const envSettings = window;

export const configuration = {
  seed: envSettings.SEED,
  appl: envSettings.APPL,
  fetchUrl: envSettings.FETCH_URL
}