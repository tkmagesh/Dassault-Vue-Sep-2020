import bugApi from "../services/bugApi";

async function remove(context, bugToRemove) {
  await bugApi.remove(bugToRemove);
  context.commit("removeBug", bugToRemove);
}
export default remove;
