import bugApi from "../services/bugApi";

async function loadBugs(context) {
  const bugs = await bugApi.getAll();
  context.commit("initBugs", bugs);
}

export default loadBugs;
