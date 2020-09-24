import bugApi from "../services/bugApi";

async function removeClosed(context) {
  const currentBugs = context.state.list;
  currentBugs
    .filter(bug => bug.isClosed)
    .forEach(async closedBug => {
      await bugApi.remove(closedBug);
      context.commit("removeBug", closedBug);
    });
}

export default removeClosed;
