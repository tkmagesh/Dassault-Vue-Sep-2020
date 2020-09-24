import bugApi from "../services/bugApi";

async function addNew(context, newBugData) {
  const newBug = await bugApi.save(newBugData);
  context.commit("addBug", newBug);
}
export default addNew;
