import bugApi from "../services/bugApi";

async function toggle(context, bugToToggle) {
  console.dir(arguments);
  bugToToggle.isClosed = !bugToToggle.isClosed;
  const updatedBug = await bugApi.save(bugToToggle);
  context.commit("replaceBug", updatedBug);
}

export default toggle;
