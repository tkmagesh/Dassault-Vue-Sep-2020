import bugApi from "../services/bugApi";

async function loadById(context, bugId) {
  const bug = await bugApi.getById(bugId);
  context.commit("loadBug", bug);
}

export default loadById;
