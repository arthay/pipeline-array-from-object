const core = require('@actions/core');

function run() {
  try {
    const inputArray = JSON.parse(core.getInput('array'));
    const inputObject = JSON.parse(core.getInput('object'));
    const inputEnvironment = core.getInput('environment');
    const output = [];

    for (const value of inputArray) {
      if (inputObject[value] && inputObject[value][inputEnvironment]) {
        output.push(inputObject[value][inputEnvironment]);
      }
    }

    core.setOutput('outputArray', JSON.stringify(output));
  } catch (err) {
    core.setFailed(err.message);
  }

}

run();
