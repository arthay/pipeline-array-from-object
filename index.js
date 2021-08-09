const core = require('@actions/core');

function run() {
  try {
    const inputArray = JSON.parse(core.getInput('array'));
    const inputObject = JSON.parse(core.getInput('object'));
    const inputEnvironment = core.getInput('environment');
    const output = [];
    const values = [];

    for (const value of inputArray) {
      values.push(value);
      if (inputObject[value] && inputObject[value][inputEnvironment]) {
        output.push(inputObject[value][inputEnvironment]);
      }
    }

    core.setOutput('outputArray', JSON.stringify(output));
    core.setOutput('values', JSON.stringify(values));
    core.setOutput('inputArray', JSON.stringify(inputArray));
  } catch (err) {
    core.setFailed(err.message);
  }

}

run();
