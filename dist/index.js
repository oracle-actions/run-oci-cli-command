require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4290:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2021, GitHub
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = void 0;
const string_decoder_1 = __nccwpck_require__(4304);
const exec = __importStar(__nccwpck_require__(1514));
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec.exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;


/***/ }),

/***/ 3109:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2021, Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v1.0 as shown at https://oss.oracle.com/licenses/upl.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const io = __importStar(__nccwpck_require__(7436));
const getExecResults_1 = __nccwpck_require__(4290);
const common = __nccwpck_require__(5049);
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
/**
 * Install the OCI CLI (if ncessary) and then run the command specified by
 * the user workflow. By default, the action suppresses/masks the command
 * and output from the GitHub console and logs to avoid leaking confidential
 * data.
 *
 */
function runOciCliCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        const configProvider = new common.ConfigFileAuthenticationDetailsProvider(process.env.OCI_CLI_CONFIG_FILE);
        if (!fs.existsSync(path.join(os.homedir(), '.oci-cli-installed'))) {
            core.startGroup('Installing Oracle Cloud Infrastructure CLI');
            const cli = yield getExecResults_1.getExecOutput('python -m pip install oci-cli');
            if (cli && cli.exitCode == 0) {
                fs.writeFileSync(path.join(os.homedir(), '.oci-cli-installed'), 'success');
            }
            core.endGroup();
        }
        const cliBin = yield io.which('oci', true);
        const cliArgs = core
            .getInput('command', { required: true })
            .replace(/^(oci\s)/, '')
            .trim();
        const jmesPath = core.getInput('query')
            ? `--query "${core.getInput('query').trim()}"`
            : '';
        const ociRegion = core.getInput('region')
            ? `--region "${core.getInput('region').trim()}"`
            : '';
        core.info('Executing Oracle Cloud Infrastructure CLI command');
        const silent = core.getBooleanInput('silent', { required: false });
        const cliCommand = `${cliBin} ${ociRegion} ${jmesPath} ${cliArgs}`;
        if (silent)
            core.setSecret(cliCommand);
        const cliResult = yield getExecResults_1.getExecOutput(cliCommand, [], { silent: silent });
        if (cliResult) {
            const stdout = cliResult.stdout ? JSON.parse(cliResult.stdout) : {};
            const stderr = cliResult.stderr ? JSON.stringify(cliResult.stderr) : '';
            if (cliResult.exitCode == 0) {
                const output = JSON.stringify(JSON.stringify(stdout));
                if (silent && output)
                    core.setSecret(output);
                core.setOutput('output', output);
                if (Object.keys(stdout).length == 1) {
                    const raw_output = stdout[0];
                    if (silent && raw_output)
                        core.setSecret(raw_output);
                    core.setOutput('raw_output', raw_output);
                }
            }
            else {
                core.setFailed(`Failed: ${JSON.stringify(stderr)}`);
            }
        }
        else {
            core.setFailed('Failed to execute OCI CLI command.');
        }
    });
}
/**
 * If OCI_CLI_CONFIG_FILE isn't set, this will immediately throw an Error
 * and fail the workflow step.
 */
runOciCliCommand().catch((e) => { if (e instanceof Error)
    core.setFailed(e.message); });


/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(7351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(5278);
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issueCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(5278);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 1514:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tr = __importStar(__nccwpck_require__(8159));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 8159:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const os = __importStar(__nccwpck_require__(2087));
const events = __importStar(__nccwpck_require__(8614));
const child = __importStar(__nccwpck_require__(3129));
const path = __importStar(__nccwpck_require__(5622));
const io = __importStar(__nccwpck_require__(7436));
const ioUtil = __importStar(__nccwpck_require__(1962));
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            strBuffer = s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                const stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                const errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            });
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 1962:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const assert_1 = __nccwpck_require__(2357);
const fs = __importStar(__nccwpck_require__(5747));
const path = __importStar(__nccwpck_require__(5622));
_a = fs.promises, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
exports.IS_WINDOWS = process.platform === 'win32';
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Recursively create a directory at `fsPath`.
 *
 * This implementation is optimistic, meaning it attempts to create the full
 * path first, and backs up the path stack from there.
 *
 * @param fsPath The path to create
 * @param maxDepth The maximum recursion depth
 * @param depth The current recursion depth
 */
function mkdirP(fsPath, maxDepth = 1000, depth = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        fsPath = path.resolve(fsPath);
        if (depth >= maxDepth)
            return exports.mkdir(fsPath);
        try {
            yield exports.mkdir(fsPath);
            return;
        }
        catch (err) {
            switch (err.code) {
                case 'ENOENT': {
                    yield mkdirP(path.dirname(fsPath), maxDepth, depth + 1);
                    yield exports.mkdir(fsPath);
                    return;
                }
                default: {
                    let stats;
                    try {
                        stats = yield exports.stat(fsPath);
                    }
                    catch (err2) {
                        throw err;
                    }
                    if (!stats.isDirectory())
                        throw err;
                }
            }
        }
    });
}
exports.mkdirP = mkdirP;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 7436:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const childProcess = __importStar(__nccwpck_require__(3129));
const path = __importStar(__nccwpck_require__(5622));
const util_1 = __nccwpck_require__(1669);
const ioUtil = __importStar(__nccwpck_require__(1962));
const exec = util_1.promisify(childProcess.exec);
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory()
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Node doesn't provide a delete operation, only an unlink function. This means that if the file is being used by another
            // program (e.g. antivirus), it won't be deleted. To address this, we shell out the work to rd/del.
            try {
                if (yield ioUtil.isDirectory(inputPath, true)) {
                    yield exec(`rd /s /q "${inputPath}"`);
                }
                else {
                    yield exec(`del /f /a "${inputPath}"`);
                }
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
            }
            // Shelling out fails to remove a symlink folder with missing source, this unlink catches that
            try {
                yield ioUtil.unlink(inputPath);
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
            }
        }
        else {
            let isDir = false;
            try {
                isDir = yield ioUtil.isDirectory(inputPath);
            }
            catch (err) {
                // if you try to delete a file that doesn't exist, desired result is achieved
                // other errors are valid
                if (err.code !== 'ENOENT')
                    throw err;
                return;
            }
            if (isDir) {
                yield exec(`rm -rf "${inputPath}"`);
            }
            else {
                yield ioUtil.unlink(inputPath);
            }
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield ioUtil.mkdirP(fsPath);
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    return { force, recursive };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 9348:
/***/ ((module) => {

// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.


module.exports = {

  newInvalidAsn1Error: function (msg) {
    var e = new Error();
    e.name = 'InvalidAsn1Error';
    e.message = msg || '';
    return e;
  }

};


/***/ }),

/***/ 194:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.

var errors = __nccwpck_require__(9348);
var types = __nccwpck_require__(2473);

var Reader = __nccwpck_require__(290);
var Writer = __nccwpck_require__(3200);


// --- Exports

module.exports = {

  Reader: Reader,

  Writer: Writer

};

for (var t in types) {
  if (types.hasOwnProperty(t))
    module.exports[t] = types[t];
}
for (var e in errors) {
  if (errors.hasOwnProperty(e))
    module.exports[e] = errors[e];
}


/***/ }),

/***/ 290:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.

var assert = __nccwpck_require__(2357);
var Buffer = __nccwpck_require__(5118).Buffer;

var ASN1 = __nccwpck_require__(2473);
var errors = __nccwpck_require__(9348);


// --- Globals

var newInvalidAsn1Error = errors.newInvalidAsn1Error;



// --- API

function Reader(data) {
  if (!data || !Buffer.isBuffer(data))
    throw new TypeError('data must be a node Buffer');

  this._buf = data;
  this._size = data.length;

  // These hold the "current" state
  this._len = 0;
  this._offset = 0;
}

Object.defineProperty(Reader.prototype, 'length', {
  enumerable: true,
  get: function () { return (this._len); }
});

Object.defineProperty(Reader.prototype, 'offset', {
  enumerable: true,
  get: function () { return (this._offset); }
});

Object.defineProperty(Reader.prototype, 'remain', {
  get: function () { return (this._size - this._offset); }
});

Object.defineProperty(Reader.prototype, 'buffer', {
  get: function () { return (this._buf.slice(this._offset)); }
});


/**
 * Reads a single byte and advances offset; you can pass in `true` to make this
 * a "peek" operation (i.e., get the byte, but don't advance the offset).
 *
 * @param {Boolean} peek true means don't move offset.
 * @return {Number} the next byte, null if not enough data.
 */
Reader.prototype.readByte = function (peek) {
  if (this._size - this._offset < 1)
    return null;

  var b = this._buf[this._offset] & 0xff;

  if (!peek)
    this._offset += 1;

  return b;
};


Reader.prototype.peek = function () {
  return this.readByte(true);
};


/**
 * Reads a (potentially) variable length off the BER buffer.  This call is
 * not really meant to be called directly, as callers have to manipulate
 * the internal buffer afterwards.
 *
 * As a result of this call, you can call `Reader.length`, until the
 * next thing called that does a readLength.
 *
 * @return {Number} the amount of offset to advance the buffer.
 * @throws {InvalidAsn1Error} on bad ASN.1
 */
Reader.prototype.readLength = function (offset) {
  if (offset === undefined)
    offset = this._offset;

  if (offset >= this._size)
    return null;

  var lenB = this._buf[offset++] & 0xff;
  if (lenB === null)
    return null;

  if ((lenB & 0x80) === 0x80) {
    lenB &= 0x7f;

    if (lenB === 0)
      throw newInvalidAsn1Error('Indefinite length not supported');

    if (lenB > 4)
      throw newInvalidAsn1Error('encoding too long');

    if (this._size - offset < lenB)
      return null;

    this._len = 0;
    for (var i = 0; i < lenB; i++)
      this._len = (this._len << 8) + (this._buf[offset++] & 0xff);

  } else {
    // Wasn't a variable length
    this._len = lenB;
  }

  return offset;
};


/**
 * Parses the next sequence in this BER buffer.
 *
 * To get the length of the sequence, call `Reader.length`.
 *
 * @return {Number} the sequence's tag.
 */
Reader.prototype.readSequence = function (tag) {
  var seq = this.peek();
  if (seq === null)
    return null;
  if (tag !== undefined && tag !== seq)
    throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) +
                              ': got 0x' + seq.toString(16));

  var o = this.readLength(this._offset + 1); // stored in `length`
  if (o === null)
    return null;

  this._offset = o;
  return seq;
};


Reader.prototype.readInt = function () {
  return this._readTag(ASN1.Integer);
};


Reader.prototype.readBoolean = function () {
  return (this._readTag(ASN1.Boolean) === 0 ? false : true);
};


Reader.prototype.readEnumeration = function () {
  return this._readTag(ASN1.Enumeration);
};


Reader.prototype.readString = function (tag, retbuf) {
  if (!tag)
    tag = ASN1.OctetString;

  var b = this.peek();
  if (b === null)
    return null;

  if (b !== tag)
    throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) +
                              ': got 0x' + b.toString(16));

  var o = this.readLength(this._offset + 1); // stored in `length`

  if (o === null)
    return null;

  if (this.length > this._size - o)
    return null;

  this._offset = o;

  if (this.length === 0)
    return retbuf ? Buffer.alloc(0) : '';

  var str = this._buf.slice(this._offset, this._offset + this.length);
  this._offset += this.length;

  return retbuf ? str : str.toString('utf8');
};

Reader.prototype.readOID = function (tag) {
  if (!tag)
    tag = ASN1.OID;

  var b = this.readString(tag, true);
  if (b === null)
    return null;

  var values = [];
  var value = 0;

  for (var i = 0; i < b.length; i++) {
    var byte = b[i] & 0xff;

    value <<= 7;
    value += byte & 0x7f;
    if ((byte & 0x80) === 0) {
      values.push(value);
      value = 0;
    }
  }

  value = values.shift();
  values.unshift(value % 40);
  values.unshift((value / 40) >> 0);

  return values.join('.');
};


Reader.prototype._readTag = function (tag) {
  assert.ok(tag !== undefined);

  var b = this.peek();

  if (b === null)
    return null;

  if (b !== tag)
    throw newInvalidAsn1Error('Expected 0x' + tag.toString(16) +
                              ': got 0x' + b.toString(16));

  var o = this.readLength(this._offset + 1); // stored in `length`
  if (o === null)
    return null;

  if (this.length > 4)
    throw newInvalidAsn1Error('Integer too long: ' + this.length);

  if (this.length > this._size - o)
    return null;
  this._offset = o;

  var fb = this._buf[this._offset];
  var value = 0;

  for (var i = 0; i < this.length; i++) {
    value <<= 8;
    value |= (this._buf[this._offset++] & 0xff);
  }

  if ((fb & 0x80) === 0x80 && i !== 4)
    value -= (1 << (i * 8));

  return value >> 0;
};



// --- Exported API

module.exports = Reader;


/***/ }),

/***/ 2473:
/***/ ((module) => {

// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.


module.exports = {
  EOC: 0,
  Boolean: 1,
  Integer: 2,
  BitString: 3,
  OctetString: 4,
  Null: 5,
  OID: 6,
  ObjectDescriptor: 7,
  External: 8,
  Real: 9, // float
  Enumeration: 10,
  PDV: 11,
  Utf8String: 12,
  RelativeOID: 13,
  Sequence: 16,
  Set: 17,
  NumericString: 18,
  PrintableString: 19,
  T61String: 20,
  VideotexString: 21,
  IA5String: 22,
  UTCTime: 23,
  GeneralizedTime: 24,
  GraphicString: 25,
  VisibleString: 26,
  GeneralString: 28,
  UniversalString: 29,
  CharacterString: 30,
  BMPString: 31,
  Constructor: 32,
  Context: 128
};


/***/ }),

/***/ 3200:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.

var assert = __nccwpck_require__(2357);
var Buffer = __nccwpck_require__(5118).Buffer;
var ASN1 = __nccwpck_require__(2473);
var errors = __nccwpck_require__(9348);


// --- Globals

var newInvalidAsn1Error = errors.newInvalidAsn1Error;

var DEFAULT_OPTS = {
  size: 1024,
  growthFactor: 8
};


// --- Helpers

function merge(from, to) {
  assert.ok(from);
  assert.equal(typeof (from), 'object');
  assert.ok(to);
  assert.equal(typeof (to), 'object');

  var keys = Object.getOwnPropertyNames(from);
  keys.forEach(function (key) {
    if (to[key])
      return;

    var value = Object.getOwnPropertyDescriptor(from, key);
    Object.defineProperty(to, key, value);
  });

  return to;
}



// --- API

function Writer(options) {
  options = merge(DEFAULT_OPTS, options || {});

  this._buf = Buffer.alloc(options.size || 1024);
  this._size = this._buf.length;
  this._offset = 0;
  this._options = options;

  // A list of offsets in the buffer where we need to insert
  // sequence tag/len pairs.
  this._seq = [];
}

Object.defineProperty(Writer.prototype, 'buffer', {
  get: function () {
    if (this._seq.length)
      throw newInvalidAsn1Error(this._seq.length + ' unended sequence(s)');

    return (this._buf.slice(0, this._offset));
  }
});

Writer.prototype.writeByte = function (b) {
  if (typeof (b) !== 'number')
    throw new TypeError('argument must be a Number');

  this._ensure(1);
  this._buf[this._offset++] = b;
};


Writer.prototype.writeInt = function (i, tag) {
  if (typeof (i) !== 'number')
    throw new TypeError('argument must be a Number');
  if (typeof (tag) !== 'number')
    tag = ASN1.Integer;

  var sz = 4;

  while ((((i & 0xff800000) === 0) || ((i & 0xff800000) === 0xff800000 >> 0)) &&
        (sz > 1)) {
    sz--;
    i <<= 8;
  }

  if (sz > 4)
    throw newInvalidAsn1Error('BER ints cannot be > 0xffffffff');

  this._ensure(2 + sz);
  this._buf[this._offset++] = tag;
  this._buf[this._offset++] = sz;

  while (sz-- > 0) {
    this._buf[this._offset++] = ((i & 0xff000000) >>> 24);
    i <<= 8;
  }

};


Writer.prototype.writeNull = function () {
  this.writeByte(ASN1.Null);
  this.writeByte(0x00);
};


Writer.prototype.writeEnumeration = function (i, tag) {
  if (typeof (i) !== 'number')
    throw new TypeError('argument must be a Number');
  if (typeof (tag) !== 'number')
    tag = ASN1.Enumeration;

  return this.writeInt(i, tag);
};


Writer.prototype.writeBoolean = function (b, tag) {
  if (typeof (b) !== 'boolean')
    throw new TypeError('argument must be a Boolean');
  if (typeof (tag) !== 'number')
    tag = ASN1.Boolean;

  this._ensure(3);
  this._buf[this._offset++] = tag;
  this._buf[this._offset++] = 0x01;
  this._buf[this._offset++] = b ? 0xff : 0x00;
};


Writer.prototype.writeString = function (s, tag) {
  if (typeof (s) !== 'string')
    throw new TypeError('argument must be a string (was: ' + typeof (s) + ')');
  if (typeof (tag) !== 'number')
    tag = ASN1.OctetString;

  var len = Buffer.byteLength(s);
  this.writeByte(tag);
  this.writeLength(len);
  if (len) {
    this._ensure(len);
    this._buf.write(s, this._offset);
    this._offset += len;
  }
};


Writer.prototype.writeBuffer = function (buf, tag) {
  if (typeof (tag) !== 'number')
    throw new TypeError('tag must be a number');
  if (!Buffer.isBuffer(buf))
    throw new TypeError('argument must be a buffer');

  this.writeByte(tag);
  this.writeLength(buf.length);
  this._ensure(buf.length);
  buf.copy(this._buf, this._offset, 0, buf.length);
  this._offset += buf.length;
};


Writer.prototype.writeStringArray = function (strings) {
  if ((!strings instanceof Array))
    throw new TypeError('argument must be an Array[String]');

  var self = this;
  strings.forEach(function (s) {
    self.writeString(s);
  });
};

// This is really to solve DER cases, but whatever for now
Writer.prototype.writeOID = function (s, tag) {
  if (typeof (s) !== 'string')
    throw new TypeError('argument must be a string');
  if (typeof (tag) !== 'number')
    tag = ASN1.OID;

  if (!/^([0-9]+\.){3,}[0-9]+$/.test(s))
    throw new Error('argument is not a valid OID string');

  function encodeOctet(bytes, octet) {
    if (octet < 128) {
        bytes.push(octet);
    } else if (octet < 16384) {
        bytes.push((octet >>> 7) | 0x80);
        bytes.push(octet & 0x7F);
    } else if (octet < 2097152) {
      bytes.push((octet >>> 14) | 0x80);
      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
      bytes.push(octet & 0x7F);
    } else if (octet < 268435456) {
      bytes.push((octet >>> 21) | 0x80);
      bytes.push(((octet >>> 14) | 0x80) & 0xFF);
      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
      bytes.push(octet & 0x7F);
    } else {
      bytes.push(((octet >>> 28) | 0x80) & 0xFF);
      bytes.push(((octet >>> 21) | 0x80) & 0xFF);
      bytes.push(((octet >>> 14) | 0x80) & 0xFF);
      bytes.push(((octet >>> 7) | 0x80) & 0xFF);
      bytes.push(octet & 0x7F);
    }
  }

  var tmp = s.split('.');
  var bytes = [];
  bytes.push(parseInt(tmp[0], 10) * 40 + parseInt(tmp[1], 10));
  tmp.slice(2).forEach(function (b) {
    encodeOctet(bytes, parseInt(b, 10));
  });

  var self = this;
  this._ensure(2 + bytes.length);
  this.writeByte(tag);
  this.writeLength(bytes.length);
  bytes.forEach(function (b) {
    self.writeByte(b);
  });
};


Writer.prototype.writeLength = function (len) {
  if (typeof (len) !== 'number')
    throw new TypeError('argument must be a Number');

  this._ensure(4);

  if (len <= 0x7f) {
    this._buf[this._offset++] = len;
  } else if (len <= 0xff) {
    this._buf[this._offset++] = 0x81;
    this._buf[this._offset++] = len;
  } else if (len <= 0xffff) {
    this._buf[this._offset++] = 0x82;
    this._buf[this._offset++] = len >> 8;
    this._buf[this._offset++] = len;
  } else if (len <= 0xffffff) {
    this._buf[this._offset++] = 0x83;
    this._buf[this._offset++] = len >> 16;
    this._buf[this._offset++] = len >> 8;
    this._buf[this._offset++] = len;
  } else {
    throw newInvalidAsn1Error('Length too long (> 4 bytes)');
  }
};

Writer.prototype.startSequence = function (tag) {
  if (typeof (tag) !== 'number')
    tag = ASN1.Sequence | ASN1.Constructor;

  this.writeByte(tag);
  this._seq.push(this._offset);
  this._ensure(3);
  this._offset += 3;
};


Writer.prototype.endSequence = function () {
  var seq = this._seq.pop();
  var start = seq + 3;
  var len = this._offset - start;

  if (len <= 0x7f) {
    this._shift(start, len, -2);
    this._buf[seq] = len;
  } else if (len <= 0xff) {
    this._shift(start, len, -1);
    this._buf[seq] = 0x81;
    this._buf[seq + 1] = len;
  } else if (len <= 0xffff) {
    this._buf[seq] = 0x82;
    this._buf[seq + 1] = len >> 8;
    this._buf[seq + 2] = len;
  } else if (len <= 0xffffff) {
    this._shift(start, len, 1);
    this._buf[seq] = 0x83;
    this._buf[seq + 1] = len >> 16;
    this._buf[seq + 2] = len >> 8;
    this._buf[seq + 3] = len;
  } else {
    throw newInvalidAsn1Error('Sequence too long');
  }
};


Writer.prototype._shift = function (start, len, shift) {
  assert.ok(start !== undefined);
  assert.ok(len !== undefined);
  assert.ok(shift);

  this._buf.copy(this._buf, start + shift, start, start + len);
  this._offset += shift;
};

Writer.prototype._ensure = function (len) {
  assert.ok(len);

  if (this._size - this._offset < len) {
    var sz = this._size * this._options.growthFactor;
    if (sz - this._offset < len)
      sz += len;

    var buf = Buffer.alloc(sz);

    this._buf.copy(buf, 0, 0, this._offset);
    this._buf = buf;
    this._size = sz;
  }
};



// --- Exported API

module.exports = Writer;


/***/ }),

/***/ 970:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2011 Mark Cavage <mcavage@gmail.com> All rights reserved.

// If you have no idea what ASN.1 or BER is, see this:
// ftp://ftp.rsa.com/pub/pkcs/ascii/layman.asc

var Ber = __nccwpck_require__(194);



// --- Exported API

module.exports = {

  Ber: Ber,

  BerReader: Ber.Reader,

  BerWriter: Ber.Writer

};


/***/ }),

/***/ 6631:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright (c) 2012, Mark Cavage. All rights reserved.
// Copyright 2015 Joyent, Inc.

var assert = __nccwpck_require__(2357);
var Stream = __nccwpck_require__(2413).Stream;
var util = __nccwpck_require__(1669);


///--- Globals

/* JSSTYLED */
var UUID_REGEXP = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;


///--- Internal

function _capitalize(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}

function _toss(name, expected, oper, arg, actual) {
    throw new assert.AssertionError({
        message: util.format('%s (%s) is required', name, expected),
        actual: (actual === undefined) ? typeof (arg) : actual(arg),
        expected: expected,
        operator: oper || '===',
        stackStartFunction: _toss.caller
    });
}

function _getClass(arg) {
    return (Object.prototype.toString.call(arg).slice(8, -1));
}

function noop() {
    // Why even bother with asserts?
}


///--- Exports

var types = {
    bool: {
        check: function (arg) { return typeof (arg) === 'boolean'; }
    },
    func: {
        check: function (arg) { return typeof (arg) === 'function'; }
    },
    string: {
        check: function (arg) { return typeof (arg) === 'string'; }
    },
    object: {
        check: function (arg) {
            return typeof (arg) === 'object' && arg !== null;
        }
    },
    number: {
        check: function (arg) {
            return typeof (arg) === 'number' && !isNaN(arg);
        }
    },
    finite: {
        check: function (arg) {
            return typeof (arg) === 'number' && !isNaN(arg) && isFinite(arg);
        }
    },
    buffer: {
        check: function (arg) { return Buffer.isBuffer(arg); },
        operator: 'Buffer.isBuffer'
    },
    array: {
        check: function (arg) { return Array.isArray(arg); },
        operator: 'Array.isArray'
    },
    stream: {
        check: function (arg) { return arg instanceof Stream; },
        operator: 'instanceof',
        actual: _getClass
    },
    date: {
        check: function (arg) { return arg instanceof Date; },
        operator: 'instanceof',
        actual: _getClass
    },
    regexp: {
        check: function (arg) { return arg instanceof RegExp; },
        operator: 'instanceof',
        actual: _getClass
    },
    uuid: {
        check: function (arg) {
            return typeof (arg) === 'string' && UUID_REGEXP.test(arg);
        },
        operator: 'isUUID'
    }
};

function _setExports(ndebug) {
    var keys = Object.keys(types);
    var out;

    /* re-export standard assert */
    if (process.env.NODE_NDEBUG) {
        out = noop;
    } else {
        out = function (arg, msg) {
            if (!arg) {
                _toss(msg, 'true', arg);
            }
        };
    }

    /* standard checks */
    keys.forEach(function (k) {
        if (ndebug) {
            out[k] = noop;
            return;
        }
        var type = types[k];
        out[k] = function (arg, msg) {
            if (!type.check(arg)) {
                _toss(msg, k, type.operator, arg, type.actual);
            }
        };
    });

    /* optional checks */
    keys.forEach(function (k) {
        var name = 'optional' + _capitalize(k);
        if (ndebug) {
            out[name] = noop;
            return;
        }
        var type = types[k];
        out[name] = function (arg, msg) {
            if (arg === undefined || arg === null) {
                return;
            }
            if (!type.check(arg)) {
                _toss(msg, k, type.operator, arg, type.actual);
            }
        };
    });

    /* arrayOf checks */
    keys.forEach(function (k) {
        var name = 'arrayOf' + _capitalize(k);
        if (ndebug) {
            out[name] = noop;
            return;
        }
        var type = types[k];
        var expected = '[' + k + ']';
        out[name] = function (arg, msg) {
            if (!Array.isArray(arg)) {
                _toss(msg, expected, type.operator, arg, type.actual);
            }
            var i;
            for (i = 0; i < arg.length; i++) {
                if (!type.check(arg[i])) {
                    _toss(msg, expected, type.operator, arg, type.actual);
                }
            }
        };
    });

    /* optionalArrayOf checks */
    keys.forEach(function (k) {
        var name = 'optionalArrayOf' + _capitalize(k);
        if (ndebug) {
            out[name] = noop;
            return;
        }
        var type = types[k];
        var expected = '[' + k + ']';
        out[name] = function (arg, msg) {
            if (arg === undefined || arg === null) {
                return;
            }
            if (!Array.isArray(arg)) {
                _toss(msg, expected, type.operator, arg, type.actual);
            }
            var i;
            for (i = 0; i < arg.length; i++) {
                if (!type.check(arg[i])) {
                    _toss(msg, expected, type.operator, arg, type.actual);
                }
            }
        };
    });

    /* re-export built-in assertions */
    Object.keys(assert).forEach(function (k) {
        if (k === 'AssertionError') {
            out[k] = assert[k];
            return;
        }
        if (ndebug) {
            out[k] = noop;
            return;
        }
        out[k] = assert[k];
    });

    /* export ourselves (for unit tests _only_) */
    out._setExports = _setExports;

    return out;
}

module.exports = _setExports(process.env.NODE_NDEBUG);


/***/ }),

/***/ 5447:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var crypto_hash_sha512 = __nccwpck_require__(8729).lowlevel.crypto_hash;

/*
 * This file is a 1:1 port from the OpenBSD blowfish.c and bcrypt_pbkdf.c. As a
 * result, it retains the original copyright and license. The two files are
 * under slightly different (but compatible) licenses, and are here combined in
 * one file.
 *
 * Credit for the actual porting work goes to:
 *  Devi Mandiri <me@devi.web.id>
 */

/*
 * The Blowfish portions are under the following license:
 *
 * Blowfish block cipher for OpenBSD
 * Copyright 1997 Niels Provos <provos@physnet.uni-hamburg.de>
 * All rights reserved.
 *
 * Implementation advice by David Mazieres <dm@lcs.mit.edu>.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * The bcrypt_pbkdf portions are under the following license:
 *
 * Copyright (c) 2013 Ted Unangst <tedu@openbsd.org>
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/*
 * Performance improvements (Javascript-specific):
 *
 * Copyright 2016, Joyent Inc
 * Author: Alex Wilson <alex.wilson@joyent.com>
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

// Ported from OpenBSD bcrypt_pbkdf.c v1.9

var BLF_J = 0;

var Blowfish = function() {
  this.S = [
    new Uint32Array([
      0xd1310ba6, 0x98dfb5ac, 0x2ffd72db, 0xd01adfb7,
      0xb8e1afed, 0x6a267e96, 0xba7c9045, 0xf12c7f99,
      0x24a19947, 0xb3916cf7, 0x0801f2e2, 0x858efc16,
      0x636920d8, 0x71574e69, 0xa458fea3, 0xf4933d7e,
      0x0d95748f, 0x728eb658, 0x718bcd58, 0x82154aee,
      0x7b54a41d, 0xc25a59b5, 0x9c30d539, 0x2af26013,
      0xc5d1b023, 0x286085f0, 0xca417918, 0xb8db38ef,
      0x8e79dcb0, 0x603a180e, 0x6c9e0e8b, 0xb01e8a3e,
      0xd71577c1, 0xbd314b27, 0x78af2fda, 0x55605c60,
      0xe65525f3, 0xaa55ab94, 0x57489862, 0x63e81440,
      0x55ca396a, 0x2aab10b6, 0xb4cc5c34, 0x1141e8ce,
      0xa15486af, 0x7c72e993, 0xb3ee1411, 0x636fbc2a,
      0x2ba9c55d, 0x741831f6, 0xce5c3e16, 0x9b87931e,
      0xafd6ba33, 0x6c24cf5c, 0x7a325381, 0x28958677,
      0x3b8f4898, 0x6b4bb9af, 0xc4bfe81b, 0x66282193,
      0x61d809cc, 0xfb21a991, 0x487cac60, 0x5dec8032,
      0xef845d5d, 0xe98575b1, 0xdc262302, 0xeb651b88,
      0x23893e81, 0xd396acc5, 0x0f6d6ff3, 0x83f44239,
      0x2e0b4482, 0xa4842004, 0x69c8f04a, 0x9e1f9b5e,
      0x21c66842, 0xf6e96c9a, 0x670c9c61, 0xabd388f0,
      0x6a51a0d2, 0xd8542f68, 0x960fa728, 0xab5133a3,
      0x6eef0b6c, 0x137a3be4, 0xba3bf050, 0x7efb2a98,
      0xa1f1651d, 0x39af0176, 0x66ca593e, 0x82430e88,
      0x8cee8619, 0x456f9fb4, 0x7d84a5c3, 0x3b8b5ebe,
      0xe06f75d8, 0x85c12073, 0x401a449f, 0x56c16aa6,
      0x4ed3aa62, 0x363f7706, 0x1bfedf72, 0x429b023d,
      0x37d0d724, 0xd00a1248, 0xdb0fead3, 0x49f1c09b,
      0x075372c9, 0x80991b7b, 0x25d479d8, 0xf6e8def7,
      0xe3fe501a, 0xb6794c3b, 0x976ce0bd, 0x04c006ba,
      0xc1a94fb6, 0x409f60c4, 0x5e5c9ec2, 0x196a2463,
      0x68fb6faf, 0x3e6c53b5, 0x1339b2eb, 0x3b52ec6f,
      0x6dfc511f, 0x9b30952c, 0xcc814544, 0xaf5ebd09,
      0xbee3d004, 0xde334afd, 0x660f2807, 0x192e4bb3,
      0xc0cba857, 0x45c8740f, 0xd20b5f39, 0xb9d3fbdb,
      0x5579c0bd, 0x1a60320a, 0xd6a100c6, 0x402c7279,
      0x679f25fe, 0xfb1fa3cc, 0x8ea5e9f8, 0xdb3222f8,
      0x3c7516df, 0xfd616b15, 0x2f501ec8, 0xad0552ab,
      0x323db5fa, 0xfd238760, 0x53317b48, 0x3e00df82,
      0x9e5c57bb, 0xca6f8ca0, 0x1a87562e, 0xdf1769db,
      0xd542a8f6, 0x287effc3, 0xac6732c6, 0x8c4f5573,
      0x695b27b0, 0xbbca58c8, 0xe1ffa35d, 0xb8f011a0,
      0x10fa3d98, 0xfd2183b8, 0x4afcb56c, 0x2dd1d35b,
      0x9a53e479, 0xb6f84565, 0xd28e49bc, 0x4bfb9790,
      0xe1ddf2da, 0xa4cb7e33, 0x62fb1341, 0xcee4c6e8,
      0xef20cada, 0x36774c01, 0xd07e9efe, 0x2bf11fb4,
      0x95dbda4d, 0xae909198, 0xeaad8e71, 0x6b93d5a0,
      0xd08ed1d0, 0xafc725e0, 0x8e3c5b2f, 0x8e7594b7,
      0x8ff6e2fb, 0xf2122b64, 0x8888b812, 0x900df01c,
      0x4fad5ea0, 0x688fc31c, 0xd1cff191, 0xb3a8c1ad,
      0x2f2f2218, 0xbe0e1777, 0xea752dfe, 0x8b021fa1,
      0xe5a0cc0f, 0xb56f74e8, 0x18acf3d6, 0xce89e299,
      0xb4a84fe0, 0xfd13e0b7, 0x7cc43b81, 0xd2ada8d9,
      0x165fa266, 0x80957705, 0x93cc7314, 0x211a1477,
      0xe6ad2065, 0x77b5fa86, 0xc75442f5, 0xfb9d35cf,
      0xebcdaf0c, 0x7b3e89a0, 0xd6411bd3, 0xae1e7e49,
      0x00250e2d, 0x2071b35e, 0x226800bb, 0x57b8e0af,
      0x2464369b, 0xf009b91e, 0x5563911d, 0x59dfa6aa,
      0x78c14389, 0xd95a537f, 0x207d5ba2, 0x02e5b9c5,
      0x83260376, 0x6295cfa9, 0x11c81968, 0x4e734a41,
      0xb3472dca, 0x7b14a94a, 0x1b510052, 0x9a532915,
      0xd60f573f, 0xbc9bc6e4, 0x2b60a476, 0x81e67400,
      0x08ba6fb5, 0x571be91f, 0xf296ec6b, 0x2a0dd915,
      0xb6636521, 0xe7b9f9b6, 0xff34052e, 0xc5855664,
      0x53b02d5d, 0xa99f8fa1, 0x08ba4799, 0x6e85076a]),
    new Uint32Array([
      0x4b7a70e9, 0xb5b32944, 0xdb75092e, 0xc4192623,
      0xad6ea6b0, 0x49a7df7d, 0x9cee60b8, 0x8fedb266,
      0xecaa8c71, 0x699a17ff, 0x5664526c, 0xc2b19ee1,
      0x193602a5, 0x75094c29, 0xa0591340, 0xe4183a3e,
      0x3f54989a, 0x5b429d65, 0x6b8fe4d6, 0x99f73fd6,
      0xa1d29c07, 0xefe830f5, 0x4d2d38e6, 0xf0255dc1,
      0x4cdd2086, 0x8470eb26, 0x6382e9c6, 0x021ecc5e,
      0x09686b3f, 0x3ebaefc9, 0x3c971814, 0x6b6a70a1,
      0x687f3584, 0x52a0e286, 0xb79c5305, 0xaa500737,
      0x3e07841c, 0x7fdeae5c, 0x8e7d44ec, 0x5716f2b8,
      0xb03ada37, 0xf0500c0d, 0xf01c1f04, 0x0200b3ff,
      0xae0cf51a, 0x3cb574b2, 0x25837a58, 0xdc0921bd,
      0xd19113f9, 0x7ca92ff6, 0x94324773, 0x22f54701,
      0x3ae5e581, 0x37c2dadc, 0xc8b57634, 0x9af3dda7,
      0xa9446146, 0x0fd0030e, 0xecc8c73e, 0xa4751e41,
      0xe238cd99, 0x3bea0e2f, 0x3280bba1, 0x183eb331,
      0x4e548b38, 0x4f6db908, 0x6f420d03, 0xf60a04bf,
      0x2cb81290, 0x24977c79, 0x5679b072, 0xbcaf89af,
      0xde9a771f, 0xd9930810, 0xb38bae12, 0xdccf3f2e,
      0x5512721f, 0x2e6b7124, 0x501adde6, 0x9f84cd87,
      0x7a584718, 0x7408da17, 0xbc9f9abc, 0xe94b7d8c,
      0xec7aec3a, 0xdb851dfa, 0x63094366, 0xc464c3d2,
      0xef1c1847, 0x3215d908, 0xdd433b37, 0x24c2ba16,
      0x12a14d43, 0x2a65c451, 0x50940002, 0x133ae4dd,
      0x71dff89e, 0x10314e55, 0x81ac77d6, 0x5f11199b,
      0x043556f1, 0xd7a3c76b, 0x3c11183b, 0x5924a509,
      0xf28fe6ed, 0x97f1fbfa, 0x9ebabf2c, 0x1e153c6e,
      0x86e34570, 0xeae96fb1, 0x860e5e0a, 0x5a3e2ab3,
      0x771fe71c, 0x4e3d06fa, 0x2965dcb9, 0x99e71d0f,
      0x803e89d6, 0x5266c825, 0x2e4cc978, 0x9c10b36a,
      0xc6150eba, 0x94e2ea78, 0xa5fc3c53, 0x1e0a2df4,
      0xf2f74ea7, 0x361d2b3d, 0x1939260f, 0x19c27960,
      0x5223a708, 0xf71312b6, 0xebadfe6e, 0xeac31f66,
      0xe3bc4595, 0xa67bc883, 0xb17f37d1, 0x018cff28,
      0xc332ddef, 0xbe6c5aa5, 0x65582185, 0x68ab9802,
      0xeecea50f, 0xdb2f953b, 0x2aef7dad, 0x5b6e2f84,
      0x1521b628, 0x29076170, 0xecdd4775, 0x619f1510,
      0x13cca830, 0xeb61bd96, 0x0334fe1e, 0xaa0363cf,
      0xb5735c90, 0x4c70a239, 0xd59e9e0b, 0xcbaade14,
      0xeecc86bc, 0x60622ca7, 0x9cab5cab, 0xb2f3846e,
      0x648b1eaf, 0x19bdf0ca, 0xa02369b9, 0x655abb50,
      0x40685a32, 0x3c2ab4b3, 0x319ee9d5, 0xc021b8f7,
      0x9b540b19, 0x875fa099, 0x95f7997e, 0x623d7da8,
      0xf837889a, 0x97e32d77, 0x11ed935f, 0x16681281,
      0x0e358829, 0xc7e61fd6, 0x96dedfa1, 0x7858ba99,
      0x57f584a5, 0x1b227263, 0x9b83c3ff, 0x1ac24696,
      0xcdb30aeb, 0x532e3054, 0x8fd948e4, 0x6dbc3128,
      0x58ebf2ef, 0x34c6ffea, 0xfe28ed61, 0xee7c3c73,
      0x5d4a14d9, 0xe864b7e3, 0x42105d14, 0x203e13e0,
      0x45eee2b6, 0xa3aaabea, 0xdb6c4f15, 0xfacb4fd0,
      0xc742f442, 0xef6abbb5, 0x654f3b1d, 0x41cd2105,
      0xd81e799e, 0x86854dc7, 0xe44b476a, 0x3d816250,
      0xcf62a1f2, 0x5b8d2646, 0xfc8883a0, 0xc1c7b6a3,
      0x7f1524c3, 0x69cb7492, 0x47848a0b, 0x5692b285,
      0x095bbf00, 0xad19489d, 0x1462b174, 0x23820e00,
      0x58428d2a, 0x0c55f5ea, 0x1dadf43e, 0x233f7061,
      0x3372f092, 0x8d937e41, 0xd65fecf1, 0x6c223bdb,
      0x7cde3759, 0xcbee7460, 0x4085f2a7, 0xce77326e,
      0xa6078084, 0x19f8509e, 0xe8efd855, 0x61d99735,
      0xa969a7aa, 0xc50c06c2, 0x5a04abfc, 0x800bcadc,
      0x9e447a2e, 0xc3453484, 0xfdd56705, 0x0e1e9ec9,
      0xdb73dbd3, 0x105588cd, 0x675fda79, 0xe3674340,
      0xc5c43465, 0x713e38d8, 0x3d28f89e, 0xf16dff20,
      0x153e21e7, 0x8fb03d4a, 0xe6e39f2b, 0xdb83adf7]),
    new Uint32Array([
      0xe93d5a68, 0x948140f7, 0xf64c261c, 0x94692934,
      0x411520f7, 0x7602d4f7, 0xbcf46b2e, 0xd4a20068,
      0xd4082471, 0x3320f46a, 0x43b7d4b7, 0x500061af,
      0x1e39f62e, 0x97244546, 0x14214f74, 0xbf8b8840,
      0x4d95fc1d, 0x96b591af, 0x70f4ddd3, 0x66a02f45,
      0xbfbc09ec, 0x03bd9785, 0x7fac6dd0, 0x31cb8504,
      0x96eb27b3, 0x55fd3941, 0xda2547e6, 0xabca0a9a,
      0x28507825, 0x530429f4, 0x0a2c86da, 0xe9b66dfb,
      0x68dc1462, 0xd7486900, 0x680ec0a4, 0x27a18dee,
      0x4f3ffea2, 0xe887ad8c, 0xb58ce006, 0x7af4d6b6,
      0xaace1e7c, 0xd3375fec, 0xce78a399, 0x406b2a42,
      0x20fe9e35, 0xd9f385b9, 0xee39d7ab, 0x3b124e8b,
      0x1dc9faf7, 0x4b6d1856, 0x26a36631, 0xeae397b2,
      0x3a6efa74, 0xdd5b4332, 0x6841e7f7, 0xca7820fb,
      0xfb0af54e, 0xd8feb397, 0x454056ac, 0xba489527,
      0x55533a3a, 0x20838d87, 0xfe6ba9b7, 0xd096954b,
      0x55a867bc, 0xa1159a58, 0xcca92963, 0x99e1db33,
      0xa62a4a56, 0x3f3125f9, 0x5ef47e1c, 0x9029317c,
      0xfdf8e802, 0x04272f70, 0x80bb155c, 0x05282ce3,
      0x95c11548, 0xe4c66d22, 0x48c1133f, 0xc70f86dc,
      0x07f9c9ee, 0x41041f0f, 0x404779a4, 0x5d886e17,
      0x325f51eb, 0xd59bc0d1, 0xf2bcc18f, 0x41113564,
      0x257b7834, 0x602a9c60, 0xdff8e8a3, 0x1f636c1b,
      0x0e12b4c2, 0x02e1329e, 0xaf664fd1, 0xcad18115,
      0x6b2395e0, 0x333e92e1, 0x3b240b62, 0xeebeb922,
      0x85b2a20e, 0xe6ba0d99, 0xde720c8c, 0x2da2f728,
      0xd0127845, 0x95b794fd, 0x647d0862, 0xe7ccf5f0,
      0x5449a36f, 0x877d48fa, 0xc39dfd27, 0xf33e8d1e,
      0x0a476341, 0x992eff74, 0x3a6f6eab, 0xf4f8fd37,
      0xa812dc60, 0xa1ebddf8, 0x991be14c, 0xdb6e6b0d,
      0xc67b5510, 0x6d672c37, 0x2765d43b, 0xdcd0e804,
      0xf1290dc7, 0xcc00ffa3, 0xb5390f92, 0x690fed0b,
      0x667b9ffb, 0xcedb7d9c, 0xa091cf0b, 0xd9155ea3,
      0xbb132f88, 0x515bad24, 0x7b9479bf, 0x763bd6eb,
      0x37392eb3, 0xcc115979, 0x8026e297, 0xf42e312d,
      0x6842ada7, 0xc66a2b3b, 0x12754ccc, 0x782ef11c,
      0x6a124237, 0xb79251e7, 0x06a1bbe6, 0x4bfb6350,
      0x1a6b1018, 0x11caedfa, 0x3d25bdd8, 0xe2e1c3c9,
      0x44421659, 0x0a121386, 0xd90cec6e, 0xd5abea2a,
      0x64af674e, 0xda86a85f, 0xbebfe988, 0x64e4c3fe,
      0x9dbc8057, 0xf0f7c086, 0x60787bf8, 0x6003604d,
      0xd1fd8346, 0xf6381fb0, 0x7745ae04, 0xd736fccc,
      0x83426b33, 0xf01eab71, 0xb0804187, 0x3c005e5f,
      0x77a057be, 0xbde8ae24, 0x55464299, 0xbf582e61,
      0x4e58f48f, 0xf2ddfda2, 0xf474ef38, 0x8789bdc2,
      0x5366f9c3, 0xc8b38e74, 0xb475f255, 0x46fcd9b9,
      0x7aeb2661, 0x8b1ddf84, 0x846a0e79, 0x915f95e2,
      0x466e598e, 0x20b45770, 0x8cd55591, 0xc902de4c,
      0xb90bace1, 0xbb8205d0, 0x11a86248, 0x7574a99e,
      0xb77f19b6, 0xe0a9dc09, 0x662d09a1, 0xc4324633,
      0xe85a1f02, 0x09f0be8c, 0x4a99a025, 0x1d6efe10,
      0x1ab93d1d, 0x0ba5a4df, 0xa186f20f, 0x2868f169,
      0xdcb7da83, 0x573906fe, 0xa1e2ce9b, 0x4fcd7f52,
      0x50115e01, 0xa70683fa, 0xa002b5c4, 0x0de6d027,
      0x9af88c27, 0x773f8641, 0xc3604c06, 0x61a806b5,
      0xf0177a28, 0xc0f586e0, 0x006058aa, 0x30dc7d62,
      0x11e69ed7, 0x2338ea63, 0x53c2dd94, 0xc2c21634,
      0xbbcbee56, 0x90bcb6de, 0xebfc7da1, 0xce591d76,
      0x6f05e409, 0x4b7c0188, 0x39720a3d, 0x7c927c24,
      0x86e3725f, 0x724d9db9, 0x1ac15bb4, 0xd39eb8fc,
      0xed545578, 0x08fca5b5, 0xd83d7cd3, 0x4dad0fc4,
      0x1e50ef5e, 0xb161e6f8, 0xa28514d9, 0x6c51133c,
      0x6fd5c7e7, 0x56e14ec4, 0x362abfce, 0xddc6c837,
      0xd79a3234, 0x92638212, 0x670efa8e, 0x406000e0]),
    new Uint32Array([
      0x3a39ce37, 0xd3faf5cf, 0xabc27737, 0x5ac52d1b,
      0x5cb0679e, 0x4fa33742, 0xd3822740, 0x99bc9bbe,
      0xd5118e9d, 0xbf0f7315, 0xd62d1c7e, 0xc700c47b,
      0xb78c1b6b, 0x21a19045, 0xb26eb1be, 0x6a366eb4,
      0x5748ab2f, 0xbc946e79, 0xc6a376d2, 0x6549c2c8,
      0x530ff8ee, 0x468dde7d, 0xd5730a1d, 0x4cd04dc6,
      0x2939bbdb, 0xa9ba4650, 0xac9526e8, 0xbe5ee304,
      0xa1fad5f0, 0x6a2d519a, 0x63ef8ce2, 0x9a86ee22,
      0xc089c2b8, 0x43242ef6, 0xa51e03aa, 0x9cf2d0a4,
      0x83c061ba, 0x9be96a4d, 0x8fe51550, 0xba645bd6,
      0x2826a2f9, 0xa73a3ae1, 0x4ba99586, 0xef5562e9,
      0xc72fefd3, 0xf752f7da, 0x3f046f69, 0x77fa0a59,
      0x80e4a915, 0x87b08601, 0x9b09e6ad, 0x3b3ee593,
      0xe990fd5a, 0x9e34d797, 0x2cf0b7d9, 0x022b8b51,
      0x96d5ac3a, 0x017da67d, 0xd1cf3ed6, 0x7c7d2d28,
      0x1f9f25cf, 0xadf2b89b, 0x5ad6b472, 0x5a88f54c,
      0xe029ac71, 0xe019a5e6, 0x47b0acfd, 0xed93fa9b,
      0xe8d3c48d, 0x283b57cc, 0xf8d56629, 0x79132e28,
      0x785f0191, 0xed756055, 0xf7960e44, 0xe3d35e8c,
      0x15056dd4, 0x88f46dba, 0x03a16125, 0x0564f0bd,
      0xc3eb9e15, 0x3c9057a2, 0x97271aec, 0xa93a072a,
      0x1b3f6d9b, 0x1e6321f5, 0xf59c66fb, 0x26dcf319,
      0x7533d928, 0xb155fdf5, 0x03563482, 0x8aba3cbb,
      0x28517711, 0xc20ad9f8, 0xabcc5167, 0xccad925f,
      0x4de81751, 0x3830dc8e, 0x379d5862, 0x9320f991,
      0xea7a90c2, 0xfb3e7bce, 0x5121ce64, 0x774fbe32,
      0xa8b6e37e, 0xc3293d46, 0x48de5369, 0x6413e680,
      0xa2ae0810, 0xdd6db224, 0x69852dfd, 0x09072166,
      0xb39a460a, 0x6445c0dd, 0x586cdecf, 0x1c20c8ae,
      0x5bbef7dd, 0x1b588d40, 0xccd2017f, 0x6bb4e3bb,
      0xdda26a7e, 0x3a59ff45, 0x3e350a44, 0xbcb4cdd5,
      0x72eacea8, 0xfa6484bb, 0x8d6612ae, 0xbf3c6f47,
      0xd29be463, 0x542f5d9e, 0xaec2771b, 0xf64e6370,
      0x740e0d8d, 0xe75b1357, 0xf8721671, 0xaf537d5d,
      0x4040cb08, 0x4eb4e2cc, 0x34d2466a, 0x0115af84,
      0xe1b00428, 0x95983a1d, 0x06b89fb4, 0xce6ea048,
      0x6f3f3b82, 0x3520ab82, 0x011a1d4b, 0x277227f8,
      0x611560b1, 0xe7933fdc, 0xbb3a792b, 0x344525bd,
      0xa08839e1, 0x51ce794b, 0x2f32c9b7, 0xa01fbac9,
      0xe01cc87e, 0xbcc7d1f6, 0xcf0111c3, 0xa1e8aac7,
      0x1a908749, 0xd44fbd9a, 0xd0dadecb, 0xd50ada38,
      0x0339c32a, 0xc6913667, 0x8df9317c, 0xe0b12b4f,
      0xf79e59b7, 0x43f5bb3a, 0xf2d519ff, 0x27d9459c,
      0xbf97222c, 0x15e6fc2a, 0x0f91fc71, 0x9b941525,
      0xfae59361, 0xceb69ceb, 0xc2a86459, 0x12baa8d1,
      0xb6c1075e, 0xe3056a0c, 0x10d25065, 0xcb03a442,
      0xe0ec6e0e, 0x1698db3b, 0x4c98a0be, 0x3278e964,
      0x9f1f9532, 0xe0d392df, 0xd3a0342b, 0x8971f21e,
      0x1b0a7441, 0x4ba3348c, 0xc5be7120, 0xc37632d8,
      0xdf359f8d, 0x9b992f2e, 0xe60b6f47, 0x0fe3f11d,
      0xe54cda54, 0x1edad891, 0xce6279cf, 0xcd3e7e6f,
      0x1618b166, 0xfd2c1d05, 0x848fd2c5, 0xf6fb2299,
      0xf523f357, 0xa6327623, 0x93a83531, 0x56cccd02,
      0xacf08162, 0x5a75ebb5, 0x6e163697, 0x88d273cc,
      0xde966292, 0x81b949d0, 0x4c50901b, 0x71c65614,
      0xe6c6c7bd, 0x327a140a, 0x45e1d006, 0xc3f27b9a,
      0xc9aa53fd, 0x62a80f00, 0xbb25bfe2, 0x35bdd2f6,
      0x71126905, 0xb2040222, 0xb6cbcf7c, 0xcd769c2b,
      0x53113ec0, 0x1640e3d3, 0x38abbd60, 0x2547adf0,
      0xba38209c, 0xf746ce76, 0x77afa1c5, 0x20756060,
      0x85cbfe4e, 0x8ae88dd8, 0x7aaaf9b0, 0x4cf9aa7e,
      0x1948c25c, 0x02fb8a8c, 0x01c36ae4, 0xd6ebe1f9,
      0x90d4f869, 0xa65cdea0, 0x3f09252d, 0xc208e69f,
      0xb74e6132, 0xce77e25b, 0x578fdfe3, 0x3ac372e6])
    ];
  this.P = new Uint32Array([
    0x243f6a88, 0x85a308d3, 0x13198a2e, 0x03707344,
    0xa4093822, 0x299f31d0, 0x082efa98, 0xec4e6c89,
    0x452821e6, 0x38d01377, 0xbe5466cf, 0x34e90c6c,
    0xc0ac29b7, 0xc97c50dd, 0x3f84d5b5, 0xb5470917,
    0x9216d5d9, 0x8979fb1b]);
};

function F(S, x8, i) {
  return (((S[0][x8[i+3]] +
            S[1][x8[i+2]]) ^
            S[2][x8[i+1]]) +
            S[3][x8[i]]);
};

Blowfish.prototype.encipher = function(x, x8) {
  if (x8 === undefined) {
    x8 = new Uint8Array(x.buffer);
    if (x.byteOffset !== 0)
      x8 = x8.subarray(x.byteOffset);
  }
  x[0] ^= this.P[0];
  for (var i = 1; i < 16; i += 2) {
    x[1] ^= F(this.S, x8, 0) ^ this.P[i];
    x[0] ^= F(this.S, x8, 4) ^ this.P[i+1];
  }
  var t = x[0];
  x[0] = x[1] ^ this.P[17];
  x[1] = t;
};

Blowfish.prototype.decipher = function(x) {
  var x8 = new Uint8Array(x.buffer);
  if (x.byteOffset !== 0)
    x8 = x8.subarray(x.byteOffset);
  x[0] ^= this.P[17];
  for (var i = 16; i > 0; i -= 2) {
    x[1] ^= F(this.S, x8, 0) ^ this.P[i];
    x[0] ^= F(this.S, x8, 4) ^ this.P[i-1];
  }
  var t = x[0];
  x[0] = x[1] ^ this.P[0];
  x[1] = t;
};

function stream2word(data, databytes){
  var i, temp = 0;
  for (i = 0; i < 4; i++, BLF_J++) {
    if (BLF_J >= databytes) BLF_J = 0;
    temp = (temp << 8) | data[BLF_J];
  }
  return temp;
};

Blowfish.prototype.expand0state = function(key, keybytes) {
  var d = new Uint32Array(2), i, k;
  var d8 = new Uint8Array(d.buffer);

  for (i = 0, BLF_J = 0; i < 18; i++) {
    this.P[i] ^= stream2word(key, keybytes);
  }
  BLF_J = 0;

  for (i = 0; i < 18; i += 2) {
    this.encipher(d, d8);
    this.P[i]   = d[0];
    this.P[i+1] = d[1];
  }

  for (i = 0; i < 4; i++) {
    for (k = 0; k < 256; k += 2) {
      this.encipher(d, d8);
      this.S[i][k]   = d[0];
      this.S[i][k+1] = d[1];
    }
  }
};

Blowfish.prototype.expandstate = function(data, databytes, key, keybytes) {
  var d = new Uint32Array(2), i, k;

  for (i = 0, BLF_J = 0; i < 18; i++) {
    this.P[i] ^= stream2word(key, keybytes);
  }

  for (i = 0, BLF_J = 0; i < 18; i += 2) {
    d[0] ^= stream2word(data, databytes);
    d[1] ^= stream2word(data, databytes);
    this.encipher(d);
    this.P[i]   = d[0];
    this.P[i+1] = d[1];
  }

  for (i = 0; i < 4; i++) {
    for (k = 0; k < 256; k += 2) {
      d[0] ^= stream2word(data, databytes);
      d[1] ^= stream2word(data, databytes);
      this.encipher(d);
      this.S[i][k]   = d[0];
      this.S[i][k+1] = d[1];
    }
  }
  BLF_J = 0;
};

Blowfish.prototype.enc = function(data, blocks) {
  for (var i = 0; i < blocks; i++) {
    this.encipher(data.subarray(i*2));
  }
};

Blowfish.prototype.dec = function(data, blocks) {
  for (var i = 0; i < blocks; i++) {
    this.decipher(data.subarray(i*2));
  }
};

var BCRYPT_BLOCKS = 8,
    BCRYPT_HASHSIZE = 32;

function bcrypt_hash(sha2pass, sha2salt, out) {
  var state = new Blowfish(),
      cdata = new Uint32Array(BCRYPT_BLOCKS), i,
      ciphertext = new Uint8Array([79,120,121,99,104,114,111,109,97,116,105,
            99,66,108,111,119,102,105,115,104,83,119,97,116,68,121,110,97,109,
            105,116,101]); //"OxychromaticBlowfishSwatDynamite"

  state.expandstate(sha2salt, 64, sha2pass, 64);
  for (i = 0; i < 64; i++) {
    state.expand0state(sha2salt, 64);
    state.expand0state(sha2pass, 64);
  }

  for (i = 0; i < BCRYPT_BLOCKS; i++)
    cdata[i] = stream2word(ciphertext, ciphertext.byteLength);
  for (i = 0; i < 64; i++)
    state.enc(cdata, cdata.byteLength / 8);

  for (i = 0; i < BCRYPT_BLOCKS; i++) {
    out[4*i+3] = cdata[i] >>> 24;
    out[4*i+2] = cdata[i] >>> 16;
    out[4*i+1] = cdata[i] >>> 8;
    out[4*i+0] = cdata[i];
  }
};

function bcrypt_pbkdf(pass, passlen, salt, saltlen, key, keylen, rounds) {
  var sha2pass = new Uint8Array(64),
      sha2salt = new Uint8Array(64),
      out = new Uint8Array(BCRYPT_HASHSIZE),
      tmpout = new Uint8Array(BCRYPT_HASHSIZE),
      countsalt = new Uint8Array(saltlen+4),
      i, j, amt, stride, dest, count,
      origkeylen = keylen;

  if (rounds < 1)
    return -1;
  if (passlen === 0 || saltlen === 0 || keylen === 0 ||
      keylen > (out.byteLength * out.byteLength) || saltlen > (1<<20))
    return -1;

  stride = Math.floor((keylen + out.byteLength - 1) / out.byteLength);
  amt = Math.floor((keylen + stride - 1) / stride);

  for (i = 0; i < saltlen; i++)
    countsalt[i] = salt[i];

  crypto_hash_sha512(sha2pass, pass, passlen);

  for (count = 1; keylen > 0; count++) {
    countsalt[saltlen+0] = count >>> 24;
    countsalt[saltlen+1] = count >>> 16;
    countsalt[saltlen+2] = count >>>  8;
    countsalt[saltlen+3] = count;

    crypto_hash_sha512(sha2salt, countsalt, saltlen + 4);
    bcrypt_hash(sha2pass, sha2salt, tmpout);
    for (i = out.byteLength; i--;)
      out[i] = tmpout[i];

    for (i = 1; i < rounds; i++) {
      crypto_hash_sha512(sha2salt, tmpout, tmpout.byteLength);
      bcrypt_hash(sha2pass, sha2salt, tmpout);
      for (j = 0; j < out.byteLength; j++)
        out[j] ^= tmpout[j];
    }

    amt = Math.min(amt, keylen);
    for (i = 0; i < amt; i++) {
      dest = i * stride + (count - 1);
      if (dest >= origkeylen)
        break;
      key[dest] = out[i];
    }
    keylen -= i;
  }

  return 0;
};

module.exports = {
      BLOCKS: BCRYPT_BLOCKS,
      HASHSIZE: BCRYPT_HASHSIZE,
      hash: bcrypt_hash,
      pbkdf: bcrypt_pbkdf
};


/***/ }),

/***/ 9239:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/*jshint node:true */

var Buffer = __nccwpck_require__(4293).Buffer; // browserify
var SlowBuffer = __nccwpck_require__(4293).SlowBuffer;

module.exports = bufferEq;

function bufferEq(a, b) {

  // shortcutting on type is necessary for correctness
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    return false;
  }

  // buffer sizes should be well-known information, so despite this
  // shortcutting, it doesn't leak any information about the *contents* of the
  // buffers.
  if (a.length !== b.length) {
    return false;
  }

  var c = 0;
  for (var i = 0; i < a.length; i++) {
    /*jshint bitwise:false */
    c |= a[i] ^ b[i]; // XOR
  }
  return c === 0;
}

bufferEq.install = function() {
  Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
    return bufferEq(this, that);
  };
};

var origBufEqual = Buffer.prototype.equal;
var origSlowBufEqual = SlowBuffer.prototype.equal;
bufferEq.restore = function() {
  Buffer.prototype.equal = origBufEqual;
  SlowBuffer.prototype.equal = origSlowBufEqual;
};


/***/ }),

/***/ 5898:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
__webpack_unused_export__ = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
__webpack_unused_export__ = isBoolean;

function isNull(arg) {
  return arg === null;
}
__webpack_unused_export__ = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
__webpack_unused_export__ = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
__webpack_unused_export__ = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
__webpack_unused_export__ = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
__webpack_unused_export__ = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
__webpack_unused_export__ = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
__webpack_unused_export__ = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
__webpack_unused_export__ = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
__webpack_unused_export__ = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.VZ = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
__webpack_unused_export__ = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
__webpack_unused_export__ = isPrimitive;

__webpack_unused_export__ = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),

/***/ 9865:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

var crypto = __nccwpck_require__(6417);
var BigInteger = __nccwpck_require__(5587).BigInteger;
var ECPointFp = __nccwpck_require__(3943).ECPointFp;
var Buffer = __nccwpck_require__(5118).Buffer;
exports.ECCurves = __nccwpck_require__(1452);

// zero prepad
function unstupid(hex,len)
{
	return (hex.length >= len) ? hex : unstupid("0"+hex,len);
}

exports.ECKey = function(curve, key, isPublic)
{
  var priv;
	var c = curve();
	var n = c.getN();
  var bytes = Math.floor(n.bitLength()/8);

  if(key)
  {
    if(isPublic)
    {
      var curve = c.getCurve();
//      var x = key.slice(1,bytes+1); // skip the 04 for uncompressed format
//      var y = key.slice(bytes+1);
//      this.P = new ECPointFp(curve,
//        curve.fromBigInteger(new BigInteger(x.toString("hex"), 16)),
//        curve.fromBigInteger(new BigInteger(y.toString("hex"), 16)));      
      this.P = curve.decodePointHex(key.toString("hex"));
    }else{
      if(key.length != bytes) return false;
      priv = new BigInteger(key.toString("hex"), 16);      
    }
  }else{
    var n1 = n.subtract(BigInteger.ONE);
    var r = new BigInteger(crypto.randomBytes(n.bitLength()));
    priv = r.mod(n1).add(BigInteger.ONE);
    this.P = c.getG().multiply(priv);
  }
  if(this.P)
  {
//  var pubhex = unstupid(this.P.getX().toBigInteger().toString(16),bytes*2)+unstupid(this.P.getY().toBigInteger().toString(16),bytes*2);
//  this.PublicKey = Buffer.from("04"+pubhex,"hex");
    this.PublicKey = Buffer.from(c.getCurve().encodeCompressedPointHex(this.P),"hex");
  }
  if(priv)
  {
    this.PrivateKey = Buffer.from(unstupid(priv.toString(16),bytes*2),"hex");
    this.deriveSharedSecret = function(key)
    {
      if(!key || !key.P) return false;
      var S = key.P.multiply(priv);
      return Buffer.from(unstupid(S.getX().toBigInteger().toString(16),bytes*2),"hex");
   }     
  }
}



/***/ }),

/***/ 3943:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Basic Javascript Elliptic Curve implementation
// Ported loosely from BouncyCastle's Java EC code
// Only Fp curves implemented for now

// Requires jsbn.js and jsbn2.js
var BigInteger = __nccwpck_require__(5587).BigInteger
var Barrett = BigInteger.prototype.Barrett

// ----------------
// ECFieldElementFp

// constructor
function ECFieldElementFp(q,x) {
    this.x = x;
    // TODO if(x.compareTo(q) >= 0) error
    this.q = q;
}

function feFpEquals(other) {
    if(other == this) return true;
    return (this.q.equals(other.q) && this.x.equals(other.x));
}

function feFpToBigInteger() {
    return this.x;
}

function feFpNegate() {
    return new ECFieldElementFp(this.q, this.x.negate().mod(this.q));
}

function feFpAdd(b) {
    return new ECFieldElementFp(this.q, this.x.add(b.toBigInteger()).mod(this.q));
}

function feFpSubtract(b) {
    return new ECFieldElementFp(this.q, this.x.subtract(b.toBigInteger()).mod(this.q));
}

function feFpMultiply(b) {
    return new ECFieldElementFp(this.q, this.x.multiply(b.toBigInteger()).mod(this.q));
}

function feFpSquare() {
    return new ECFieldElementFp(this.q, this.x.square().mod(this.q));
}

function feFpDivide(b) {
    return new ECFieldElementFp(this.q, this.x.multiply(b.toBigInteger().modInverse(this.q)).mod(this.q));
}

ECFieldElementFp.prototype.equals = feFpEquals;
ECFieldElementFp.prototype.toBigInteger = feFpToBigInteger;
ECFieldElementFp.prototype.negate = feFpNegate;
ECFieldElementFp.prototype.add = feFpAdd;
ECFieldElementFp.prototype.subtract = feFpSubtract;
ECFieldElementFp.prototype.multiply = feFpMultiply;
ECFieldElementFp.prototype.square = feFpSquare;
ECFieldElementFp.prototype.divide = feFpDivide;

// ----------------
// ECPointFp

// constructor
function ECPointFp(curve,x,y,z) {
    this.curve = curve;
    this.x = x;
    this.y = y;
    // Projective coordinates: either zinv == null or z * zinv == 1
    // z and zinv are just BigIntegers, not fieldElements
    if(z == null) {
      this.z = BigInteger.ONE;
    }
    else {
      this.z = z;
    }
    this.zinv = null;
    //TODO: compression flag
}

function pointFpGetX() {
    if(this.zinv == null) {
      this.zinv = this.z.modInverse(this.curve.q);
    }
    var r = this.x.toBigInteger().multiply(this.zinv);
    this.curve.reduce(r);
    return this.curve.fromBigInteger(r);
}

function pointFpGetY() {
    if(this.zinv == null) {
      this.zinv = this.z.modInverse(this.curve.q);
    }
    var r = this.y.toBigInteger().multiply(this.zinv);
    this.curve.reduce(r);
    return this.curve.fromBigInteger(r);
}

function pointFpEquals(other) {
    if(other == this) return true;
    if(this.isInfinity()) return other.isInfinity();
    if(other.isInfinity()) return this.isInfinity();
    var u, v;
    // u = Y2 * Z1 - Y1 * Z2
    u = other.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(other.z)).mod(this.curve.q);
    if(!u.equals(BigInteger.ZERO)) return false;
    // v = X2 * Z1 - X1 * Z2
    v = other.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(other.z)).mod(this.curve.q);
    return v.equals(BigInteger.ZERO);
}

function pointFpIsInfinity() {
    if((this.x == null) && (this.y == null)) return true;
    return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
}

function pointFpNegate() {
    return new ECPointFp(this.curve, this.x, this.y.negate(), this.z);
}

function pointFpAdd(b) {
    if(this.isInfinity()) return b;
    if(b.isInfinity()) return this;

    // u = Y2 * Z1 - Y1 * Z2
    var u = b.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(b.z)).mod(this.curve.q);
    // v = X2 * Z1 - X1 * Z2
    var v = b.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(b.z)).mod(this.curve.q);

    if(BigInteger.ZERO.equals(v)) {
        if(BigInteger.ZERO.equals(u)) {
            return this.twice(); // this == b, so double
        }
	return this.curve.getInfinity(); // this = -b, so infinity
    }

    var THREE = new BigInteger("3");
    var x1 = this.x.toBigInteger();
    var y1 = this.y.toBigInteger();
    var x2 = b.x.toBigInteger();
    var y2 = b.y.toBigInteger();

    var v2 = v.square();
    var v3 = v2.multiply(v);
    var x1v2 = x1.multiply(v2);
    var zu2 = u.square().multiply(this.z);

    // x3 = v * (z2 * (z1 * u^2 - 2 * x1 * v^2) - v^3)
    var x3 = zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.q);
    // y3 = z2 * (3 * x1 * u * v^2 - y1 * v^3 - z1 * u^3) + u * v^3
    var y3 = x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.q);
    // z3 = v^3 * z1 * z2
    var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.q);

    return new ECPointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
}

function pointFpTwice() {
    if(this.isInfinity()) return this;
    if(this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();

    // TODO: optimized handling of constants
    var THREE = new BigInteger("3");
    var x1 = this.x.toBigInteger();
    var y1 = this.y.toBigInteger();

    var y1z1 = y1.multiply(this.z);
    var y1sqz1 = y1z1.multiply(y1).mod(this.curve.q);
    var a = this.curve.a.toBigInteger();

    // w = 3 * x1^2 + a * z1^2
    var w = x1.square().multiply(THREE);
    if(!BigInteger.ZERO.equals(a)) {
      w = w.add(this.z.square().multiply(a));
    }
    w = w.mod(this.curve.q);
    //this.curve.reduce(w);
    // x3 = 2 * y1 * z1 * (w^2 - 8 * x1 * y1^2 * z1)
    var x3 = w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.q);
    // y3 = 4 * y1^2 * z1 * (3 * w * x1 - 2 * y1^2 * z1) - w^3
    var y3 = w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.square().multiply(w)).mod(this.curve.q);
    // z3 = 8 * (y1 * z1)^3
    var z3 = y1z1.square().multiply(y1z1).shiftLeft(3).mod(this.curve.q);

    return new ECPointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3);
}

// Simple NAF (Non-Adjacent Form) multiplication algorithm
// TODO: modularize the multiplication algorithm
function pointFpMultiply(k) {
    if(this.isInfinity()) return this;
    if(k.signum() == 0) return this.curve.getInfinity();

    var e = k;
    var h = e.multiply(new BigInteger("3"));

    var neg = this.negate();
    var R = this;

    var i;
    for(i = h.bitLength() - 2; i > 0; --i) {
	R = R.twice();

	var hBit = h.testBit(i);
	var eBit = e.testBit(i);

	if (hBit != eBit) {
	    R = R.add(hBit ? this : neg);
	}
    }

    return R;
}

// Compute this*j + x*k (simultaneous multiplication)
function pointFpMultiplyTwo(j,x,k) {
  var i;
  if(j.bitLength() > k.bitLength())
    i = j.bitLength() - 1;
  else
    i = k.bitLength() - 1;

  var R = this.curve.getInfinity();
  var both = this.add(x);
  while(i >= 0) {
    R = R.twice();
    if(j.testBit(i)) {
      if(k.testBit(i)) {
        R = R.add(both);
      }
      else {
        R = R.add(this);
      }
    }
    else {
      if(k.testBit(i)) {
        R = R.add(x);
      }
    }
    --i;
  }

  return R;
}

ECPointFp.prototype.getX = pointFpGetX;
ECPointFp.prototype.getY = pointFpGetY;
ECPointFp.prototype.equals = pointFpEquals;
ECPointFp.prototype.isInfinity = pointFpIsInfinity;
ECPointFp.prototype.negate = pointFpNegate;
ECPointFp.prototype.add = pointFpAdd;
ECPointFp.prototype.twice = pointFpTwice;
ECPointFp.prototype.multiply = pointFpMultiply;
ECPointFp.prototype.multiplyTwo = pointFpMultiplyTwo;

// ----------------
// ECCurveFp

// constructor
function ECCurveFp(q,a,b) {
    this.q = q;
    this.a = this.fromBigInteger(a);
    this.b = this.fromBigInteger(b);
    this.infinity = new ECPointFp(this, null, null);
    this.reducer = new Barrett(this.q);
}

function curveFpGetQ() {
    return this.q;
}

function curveFpGetA() {
    return this.a;
}

function curveFpGetB() {
    return this.b;
}

function curveFpEquals(other) {
    if(other == this) return true;
    return(this.q.equals(other.q) && this.a.equals(other.a) && this.b.equals(other.b));
}

function curveFpGetInfinity() {
    return this.infinity;
}

function curveFpFromBigInteger(x) {
    return new ECFieldElementFp(this.q, x);
}

function curveReduce(x) {
    this.reducer.reduce(x);
}

// for now, work with hex strings because they're easier in JS
function curveFpDecodePointHex(s) {
    switch(parseInt(s.substr(0,2), 16)) { // first byte
    case 0:
	return this.infinity;
    case 2:
    case 3:
	// point compression not supported yet
	return null;
    case 4:
    case 6:
    case 7:
	var len = (s.length - 2) / 2;
	var xHex = s.substr(2, len);
	var yHex = s.substr(len+2, len);

	return new ECPointFp(this,
			     this.fromBigInteger(new BigInteger(xHex, 16)),
			     this.fromBigInteger(new BigInteger(yHex, 16)));

    default: // unsupported
	return null;
    }
}

function curveFpEncodePointHex(p) {
	if (p.isInfinity()) return "00";
	var xHex = p.getX().toBigInteger().toString(16);
	var yHex = p.getY().toBigInteger().toString(16);
	var oLen = this.getQ().toString(16).length;
	if ((oLen % 2) != 0) oLen++;
	while (xHex.length < oLen) {
		xHex = "0" + xHex;
	}
	while (yHex.length < oLen) {
		yHex = "0" + yHex;
	}
	return "04" + xHex + yHex;
}

ECCurveFp.prototype.getQ = curveFpGetQ;
ECCurveFp.prototype.getA = curveFpGetA;
ECCurveFp.prototype.getB = curveFpGetB;
ECCurveFp.prototype.equals = curveFpEquals;
ECCurveFp.prototype.getInfinity = curveFpGetInfinity;
ECCurveFp.prototype.fromBigInteger = curveFpFromBigInteger;
ECCurveFp.prototype.reduce = curveReduce;
//ECCurveFp.prototype.decodePointHex = curveFpDecodePointHex;
ECCurveFp.prototype.encodePointHex = curveFpEncodePointHex;

// from: https://github.com/kaielvin/jsbn-ec-point-compression
ECCurveFp.prototype.decodePointHex = function(s)
{
	var yIsEven;
    switch(parseInt(s.substr(0,2), 16)) { // first byte
    case 0:
	return this.infinity;
    case 2:
	yIsEven = false;
    case 3:
	if(yIsEven == undefined) yIsEven = true;
	var len = s.length - 2;
	var xHex = s.substr(2, len);
	var x = this.fromBigInteger(new BigInteger(xHex,16));
	var alpha = x.multiply(x.square().add(this.getA())).add(this.getB());
	var beta = alpha.sqrt();

    if (beta == null) throw "Invalid point compression";

    var betaValue = beta.toBigInteger();
    if (betaValue.testBit(0) != yIsEven)
    {
        // Use the other root
        beta = this.fromBigInteger(this.getQ().subtract(betaValue));
    }
    return new ECPointFp(this,x,beta);
    case 4:
    case 6:
    case 7:
	var len = (s.length - 2) / 2;
	var xHex = s.substr(2, len);
	var yHex = s.substr(len+2, len);

	return new ECPointFp(this,
			     this.fromBigInteger(new BigInteger(xHex, 16)),
			     this.fromBigInteger(new BigInteger(yHex, 16)));

    default: // unsupported
	return null;
    }
}
ECCurveFp.prototype.encodeCompressedPointHex = function(p)
{
	if (p.isInfinity()) return "00";
	var xHex = p.getX().toBigInteger().toString(16);
	var oLen = this.getQ().toString(16).length;
	if ((oLen % 2) != 0) oLen++;
	while (xHex.length < oLen)
		xHex = "0" + xHex;
	var yPrefix;
	if(p.getY().toBigInteger().isEven()) yPrefix = "02";
	else                                 yPrefix = "03";

	return yPrefix + xHex;
}


ECFieldElementFp.prototype.getR = function()
{
	if(this.r != undefined) return this.r;

    this.r = null;
    var bitLength = this.q.bitLength();
    if (bitLength > 128)
    {
        var firstWord = this.q.shiftRight(bitLength - 64);
        if (firstWord.intValue() == -1)
        {
            this.r = BigInteger.ONE.shiftLeft(bitLength).subtract(this.q);
        }
    }
    return this.r;
}
ECFieldElementFp.prototype.modMult = function(x1,x2)
{
    return this.modReduce(x1.multiply(x2));
}
ECFieldElementFp.prototype.modReduce = function(x)
{
    if (this.getR() != null)
    {
        var qLen = q.bitLength();
        while (x.bitLength() > (qLen + 1))
        {
            var u = x.shiftRight(qLen);
            var v = x.subtract(u.shiftLeft(qLen));
            if (!this.getR().equals(BigInteger.ONE))
            {
                u = u.multiply(this.getR());
            }
            x = u.add(v); 
        }
        while (x.compareTo(q) >= 0)
        {
            x = x.subtract(q);
        }
    }
    else
    {
        x = x.mod(q);
    }
    return x;
}
ECFieldElementFp.prototype.sqrt = function()
{
    if (!this.q.testBit(0)) throw "unsupported";

    // p mod 4 == 3
    if (this.q.testBit(1))
    {
    	var z = new ECFieldElementFp(this.q,this.x.modPow(this.q.shiftRight(2).add(BigInteger.ONE),this.q));
    	return z.square().equals(this) ? z : null;
    }

    // p mod 4 == 1
    var qMinusOne = this.q.subtract(BigInteger.ONE);

    var legendreExponent = qMinusOne.shiftRight(1);
    if (!(this.x.modPow(legendreExponent, this.q).equals(BigInteger.ONE)))
    {
        return null;
    }

    var u = qMinusOne.shiftRight(2);
    var k = u.shiftLeft(1).add(BigInteger.ONE);

    var Q = this.x;
    var fourQ = modDouble(modDouble(Q));

    var U, V;
    do
    {
        var P;
        do
        {
            P = new BigInteger(this.q.bitLength(), new SecureRandom());
        }
        while (P.compareTo(this.q) >= 0
            || !(P.multiply(P).subtract(fourQ).modPow(legendreExponent, this.q).equals(qMinusOne)));

        var result = this.lucasSequence(P, Q, k);
        U = result[0];
        V = result[1];

        if (this.modMult(V, V).equals(fourQ))
        {
            // Integer division by 2, mod q
            if (V.testBit(0))
            {
                V = V.add(q);
            }

            V = V.shiftRight(1);

            return new ECFieldElementFp(q,V);
        }
    }
    while (U.equals(BigInteger.ONE) || U.equals(qMinusOne));

    return null;
}
ECFieldElementFp.prototype.lucasSequence = function(P,Q,k)
{
    var n = k.bitLength();
    var s = k.getLowestSetBit();

    var Uh = BigInteger.ONE;
    var Vl = BigInteger.TWO;
    var Vh = P;
    var Ql = BigInteger.ONE;
    var Qh = BigInteger.ONE;

    for (var j = n - 1; j >= s + 1; --j)
    {
        Ql = this.modMult(Ql, Qh);

        if (k.testBit(j))
        {
            Qh = this.modMult(Ql, Q);
            Uh = this.modMult(Uh, Vh);
            Vl = this.modReduce(Vh.multiply(Vl).subtract(P.multiply(Ql)));
            Vh = this.modReduce(Vh.multiply(Vh).subtract(Qh.shiftLeft(1)));
        }
        else
        {
            Qh = Ql;
            Uh = this.modReduce(Uh.multiply(Vl).subtract(Ql));
            Vh = this.modReduce(Vh.multiply(Vl).subtract(P.multiply(Ql)));
            Vl = this.modReduce(Vl.multiply(Vl).subtract(Ql.shiftLeft(1)));
        }
    }

    Ql = this.modMult(Ql, Qh);
    Qh = this.modMult(Ql, Q);
    Uh = this.modReduce(Uh.multiply(Vl).subtract(Ql));
    Vl = this.modReduce(Vh.multiply(Vl).subtract(P.multiply(Ql)));
    Ql = this.modMult(Ql, Qh);

    for (var j = 1; j <= s; ++j)
    {
        Uh = this.modMult(Uh, Vl);
        Vl = this.modReduce(Vl.multiply(Vl).subtract(Ql.shiftLeft(1)));
        Ql = this.modMult(Ql, Ql);
    }

    return [ Uh, Vl ];
}

var exports = {
  ECCurveFp: ECCurveFp,
  ECPointFp: ECPointFp,
  ECFieldElementFp: ECFieldElementFp
}

module.exports = exports


/***/ }),

/***/ 1452:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Named EC curves

// Requires ec.js, jsbn.js, and jsbn2.js
var BigInteger = __nccwpck_require__(5587).BigInteger
var ECCurveFp = __nccwpck_require__(3943).ECCurveFp


// ----------------
// X9ECParameters

// constructor
function X9ECParameters(curve,g,n,h) {
    this.curve = curve;
    this.g = g;
    this.n = n;
    this.h = h;
}

function x9getCurve() {
    return this.curve;
}

function x9getG() {
    return this.g;
}

function x9getN() {
    return this.n;
}

function x9getH() {
    return this.h;
}

X9ECParameters.prototype.getCurve = x9getCurve;
X9ECParameters.prototype.getG = x9getG;
X9ECParameters.prototype.getN = x9getN;
X9ECParameters.prototype.getH = x9getH;

// ----------------
// SECNamedCurves

function fromHex(s) { return new BigInteger(s, 16); }

function secp128r1() {
    // p = 2^128 - 2^97 - 1
    var p = fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF");
    var a = fromHex("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC");
    var b = fromHex("E87579C11079F43DD824993C2CEE5ED3");
    //byte[] S = Hex.decode("000E0D4D696E6768756151750CC03A4473D03679");
    var n = fromHex("FFFFFFFE0000000075A30D1B9038A115");
    var h = BigInteger.ONE;
    var curve = new ECCurveFp(p, a, b);
    var G = curve.decodePointHex("04"
                + "161FF7528B899B2D0C28607CA52C5B86"
		+ "CF5AC8395BAFEB13C02DA292DDED7A83");
    return new X9ECParameters(curve, G, n, h);
}

function secp160k1() {
    // p = 2^160 - 2^32 - 2^14 - 2^12 - 2^9 - 2^8 - 2^7 - 2^3 - 2^2 - 1
    var p = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73");
    var a = BigInteger.ZERO;
    var b = fromHex("7");
    //byte[] S = null;
    var n = fromHex("0100000000000000000001B8FA16DFAB9ACA16B6B3");
    var h = BigInteger.ONE;
    var curve = new ECCurveFp(p, a, b);
    var G = curve.decodePointHex("04"
                + "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB"
                + "938CF935318FDCED6BC28286531733C3F03C4FEE");
    return new X9ECParameters(curve, G, n, h);
}

function secp160r1() {
    // p = 2^160 - 2^31 - 1
    var p = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF");
    var a = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC");
    var b = fromHex("1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45");
    //byte[] S = Hex.decode("1053CDE42C14D696E67687561517533BF3F83345");
    var n = fromHex("0100000000000000000001F4C8F927AED3CA752257");
    var h = BigInteger.ONE;
    var curve = new ECCurveFp(p, a, b);
    var G = curve.decodePointHex("04"
		+ "4A96B5688EF573284664698968C38BB913CBFC82"
		+ "23A628553168947D59DCC912042351377AC5FB32");
    return new X9ECParameters(curve, G, n, h);
}

function secp192k1() {
    // p = 2^192 - 2^32 - 2^12 - 2^8 - 2^7 - 2^6 - 2^3 - 1
    var p = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37");
    var a = BigInteger.ZERO;
    var b = fromHex("3");
    //byte[] S = null;
    var n = fromHex("FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D");
    var h = BigInteger.ONE;
    var curve = new ECCurveFp(p, a, b);
    var G = curve.decodePointHex("04"
                + "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D"
                + "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");
    return new X9ECParameters(curve, G, n, h);
}

function secp192r1() {
    // p = 2^192 - 2^64 - 1
    var p = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF");
    var a = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC");
    var b = fromHex("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1");
    //byte[] S = Hex.decode("3045AE6FC8422F64ED579528D38120EAE12196D5");
    var n = fromHex("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831");
    var h = BigInteger.ONE;
    var curve = new ECCurveFp(p, a, b);
    var G = curve.decodePointHex("04"
                + "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012"
                + "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811");
    return new X9ECParameters(curve, G, n, h);
}

function secp224r1() {
    // p = 2^224 - 2^96 + 1
    var p = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001");
    var a = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE");
    var b = fromHex("B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4");
    //byte[] S = Hex.decode("BD71344799D5C7FCDC45B59FA3B9AB8F6A948BC5");
    var n = fromHex("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D");
    var h = BigInteger.ONE;
    var curve = new ECCurveFp(p, a, b);
    var G = curve.decodePointHex("04"
                + "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21"
                + "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34");
    return new X9ECParameters(curve, G, n, h);
}

function secp256r1() {
    // p = 2^224 (2^32 - 1) + 2^192 + 2^96 - 1
    var p = fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF");
    var a = fromHex("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC");
    var b = fromHex("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B");
    //byte[] S = Hex.decode("C49D360886E704936A6678E1139D26B7819F7E90");
    var n = fromHex("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551");
    var h = BigInteger.ONE;
    var curve = new ECCurveFp(p, a, b);
    var G = curve.decodePointHex("04"
                + "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296"
		+ "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5");
    return new X9ECParameters(curve, G, n, h);
}

// TODO: make this into a proper hashtable
function getSECCurveByName(name) {
    if(name == "secp128r1") return secp128r1();
    if(name == "secp160k1") return secp160k1();
    if(name == "secp160r1") return secp160r1();
    if(name == "secp192k1") return secp192k1();
    if(name == "secp192r1") return secp192r1();
    if(name == "secp224r1") return secp224r1();
    if(name == "secp256r1") return secp256r1();
    return null;
}

module.exports = {
  "secp128r1":secp128r1,
  "secp160k1":secp160k1,
  "secp160r1":secp160r1,
  "secp192k1":secp192k1,
  "secp192r1":secp192r1,
  "secp224r1":secp224r1,
  "secp256r1":secp256r1
}


/***/ }),

/***/ 1728:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Buffer = __nccwpck_require__(1867).Buffer;

var getParamBytesForAlg = __nccwpck_require__(528);

var MAX_OCTET = 0x80,
	CLASS_UNIVERSAL = 0,
	PRIMITIVE_BIT = 0x20,
	TAG_SEQ = 0x10,
	TAG_INT = 0x02,
	ENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),
	ENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);

function base64Url(base64) {
	return base64
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
}

function signatureAsBuffer(signature) {
	if (Buffer.isBuffer(signature)) {
		return signature;
	} else if ('string' === typeof signature) {
		return Buffer.from(signature, 'base64');
	}

	throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}

function derToJose(signature, alg) {
	signature = signatureAsBuffer(signature);
	var paramBytes = getParamBytesForAlg(alg);

	// the DER encoded param should at most be the param size, plus a padding
	// zero, since due to being a signed integer
	var maxEncodedParamLength = paramBytes + 1;

	var inputLength = signature.length;

	var offset = 0;
	if (signature[offset++] !== ENCODED_TAG_SEQ) {
		throw new Error('Could not find expected "seq"');
	}

	var seqLength = signature[offset++];
	if (seqLength === (MAX_OCTET | 1)) {
		seqLength = signature[offset++];
	}

	if (inputLength - offset < seqLength) {
		throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
	}

	if (signature[offset++] !== ENCODED_TAG_INT) {
		throw new Error('Could not find expected "int" for "r"');
	}

	var rLength = signature[offset++];

	if (inputLength - offset - 2 < rLength) {
		throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
	}

	if (maxEncodedParamLength < rLength) {
		throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
	}

	var rOffset = offset;
	offset += rLength;

	if (signature[offset++] !== ENCODED_TAG_INT) {
		throw new Error('Could not find expected "int" for "s"');
	}

	var sLength = signature[offset++];

	if (inputLength - offset !== sLength) {
		throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
	}

	if (maxEncodedParamLength < sLength) {
		throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
	}

	var sOffset = offset;
	offset += sLength;

	if (offset !== inputLength) {
		throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
	}

	var rPadding = paramBytes - rLength,
		sPadding = paramBytes - sLength;

	var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);

	for (offset = 0; offset < rPadding; ++offset) {
		dst[offset] = 0;
	}
	signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);

	offset = paramBytes;

	for (var o = offset; offset < o + sPadding; ++offset) {
		dst[offset] = 0;
	}
	signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);

	dst = dst.toString('base64');
	dst = base64Url(dst);

	return dst;
}

function countPadding(buf, start, stop) {
	var padding = 0;
	while (start + padding < stop && buf[start + padding] === 0) {
		++padding;
	}

	var needsSign = buf[start + padding] >= MAX_OCTET;
	if (needsSign) {
		--padding;
	}

	return padding;
}

function joseToDer(signature, alg) {
	signature = signatureAsBuffer(signature);
	var paramBytes = getParamBytesForAlg(alg);

	var signatureBytes = signature.length;
	if (signatureBytes !== paramBytes * 2) {
		throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
	}

	var rPadding = countPadding(signature, 0, paramBytes);
	var sPadding = countPadding(signature, paramBytes, signature.length);
	var rLength = paramBytes - rPadding;
	var sLength = paramBytes - sPadding;

	var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;

	var shortLength = rsBytes < MAX_OCTET;

	var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);

	var offset = 0;
	dst[offset++] = ENCODED_TAG_SEQ;
	if (shortLength) {
		// Bit 8 has value "0"
		// bits 7-1 give the length.
		dst[offset++] = rsBytes;
	} else {
		// Bit 8 of first octet has value "1"
		// bits 7-1 give the number of additional length octets.
		dst[offset++] = MAX_OCTET	| 1;
		// length, base 256
		dst[offset++] = rsBytes & 0xff;
	}
	dst[offset++] = ENCODED_TAG_INT;
	dst[offset++] = rLength;
	if (rPadding < 0) {
		dst[offset++] = 0;
		offset += signature.copy(dst, offset, 0, paramBytes);
	} else {
		offset += signature.copy(dst, offset, rPadding, paramBytes);
	}
	dst[offset++] = ENCODED_TAG_INT;
	dst[offset++] = sLength;
	if (sPadding < 0) {
		dst[offset++] = 0;
		signature.copy(dst, offset, paramBytes);
	} else {
		signature.copy(dst, offset, paramBytes + sPadding);
	}

	return dst;
}

module.exports = {
	derToJose: derToJose,
	joseToDer: joseToDer
};


/***/ }),

/***/ 528:
/***/ ((module) => {

"use strict";


function getParamSize(keySize) {
	var result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);
	return result;
}

var paramBytesForAlg = {
	ES256: getParamSize(256),
	ES384: getParamSize(384),
	ES512: getParamSize(521)
};

function getParamBytesForAlg(alg) {
	var paramBytes = paramBytesForAlg[alg];
	if (paramBytes) {
		return paramBytes;
	}

	throw new Error('Unknown algorithm "' + alg + '"');
}

module.exports = getParamBytesForAlg;


/***/ }),

/***/ 8878:
/***/ (function(module) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ 7264:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

/*
 * extsprintf.js: extended POSIX-style sprintf
 */

var mod_assert = __nccwpck_require__(2357);
var mod_util = __nccwpck_require__(1669);

/*
 * Public interface
 */
exports.sprintf = jsSprintf;
exports.printf = jsPrintf;
exports.fprintf = jsFprintf;

/*
 * Stripped down version of s[n]printf(3c).  We make a best effort to throw an
 * exception when given a format string we don't understand, rather than
 * ignoring it, so that we won't break existing programs if/when we go implement
 * the rest of this.
 *
 * This implementation currently supports specifying
 *	- field alignment ('-' flag),
 * 	- zero-pad ('0' flag)
 *	- always show numeric sign ('+' flag),
 *	- field width
 *	- conversions for strings, decimal integers, and floats (numbers).
 *	- argument size specifiers.  These are all accepted but ignored, since
 *	  Javascript has no notion of the physical size of an argument.
 *
 * Everything else is currently unsupported, most notably precision, unsigned
 * numbers, non-decimal numbers, and characters.
 */
function jsSprintf(fmt)
{
	var regex = [
	    '([^%]*)',				/* normal text */
	    '%',				/* start of format */
	    '([\'\\-+ #0]*?)',			/* flags (optional) */
	    '([1-9]\\d*)?',			/* width (optional) */
	    '(\\.([1-9]\\d*))?',		/* precision (optional) */
	    '[lhjztL]*?',			/* length mods (ignored) */
	    '([diouxXfFeEgGaAcCsSp%jr])'	/* conversion */
	].join('');

	var re = new RegExp(regex);
	var args = Array.prototype.slice.call(arguments, 1);
	var flags, width, precision, conversion;
	var left, pad, sign, arg, match;
	var ret = '';
	var argn = 1;

	mod_assert.equal('string', typeof (fmt));

	while ((match = re.exec(fmt)) !== null) {
		ret += match[1];
		fmt = fmt.substring(match[0].length);

		flags = match[2] || '';
		width = match[3] || 0;
		precision = match[4] || '';
		conversion = match[6];
		left = false;
		sign = false;
		pad = ' ';

		if (conversion == '%') {
			ret += '%';
			continue;
		}

		if (args.length === 0)
			throw (new Error('too few args to sprintf'));

		arg = args.shift();
		argn++;

		if (flags.match(/[\' #]/))
			throw (new Error(
			    'unsupported flags: ' + flags));

		if (precision.length > 0)
			throw (new Error(
			    'non-zero precision not supported'));

		if (flags.match(/-/))
			left = true;

		if (flags.match(/0/))
			pad = '0';

		if (flags.match(/\+/))
			sign = true;

		switch (conversion) {
		case 's':
			if (arg === undefined || arg === null)
				throw (new Error('argument ' + argn +
				    ': attempted to print undefined or null ' +
				    'as a string'));
			ret += doPad(pad, width, left, arg.toString());
			break;

		case 'd':
			arg = Math.floor(arg);
			/*jsl:fallthru*/
		case 'f':
			sign = sign && arg > 0 ? '+' : '';
			ret += sign + doPad(pad, width, left,
			    arg.toString());
			break;

		case 'x':
			ret += doPad(pad, width, left, arg.toString(16));
			break;

		case 'j': /* non-standard */
			if (width === 0)
				width = 10;
			ret += mod_util.inspect(arg, false, width);
			break;

		case 'r': /* non-standard */
			ret += dumpException(arg);
			break;

		default:
			throw (new Error('unsupported conversion: ' +
			    conversion));
		}
	}

	ret += fmt;
	return (ret);
}

function jsPrintf() {
	var args = Array.prototype.slice.call(arguments);
	args.unshift(process.stdout);
	jsFprintf.apply(null, args);
}

function jsFprintf(stream) {
	var args = Array.prototype.slice.call(arguments, 1);
	return (stream.write(jsSprintf.apply(this, args)));
}

function doPad(chr, width, left, str)
{
	var ret = str;

	while (ret.length < width) {
		if (left)
			ret += chr;
		else
			ret = chr + ret;
	}

	return (ret);
}

/*
 * This function dumps long stack traces for exceptions having a cause() method.
 * See node-verror for an example.
 */
function dumpException(ex)
{
	var ret;

	if (!(ex instanceof Error))
		throw (new Error(jsSprintf('invalid type for %%r: %j', ex)));

	/* Note that V8 prepends "ex.stack" with ex.toString(). */
	ret = 'EXCEPTION: ' + ex.constructor.name + ': ' + ex.stack;

	if (ex.cause && typeof (ex.cause) === 'function') {
		var cex = ex.cause();
		if (cex) {
			ret += '\nCaused by: ' + dumpException(cex);
		}
	}

	return (ret);
}


/***/ }),

/***/ 2479:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

var parser = __nccwpck_require__(5086);
var signer = __nccwpck_require__(8143);
var verify = __nccwpck_require__(1227);
var utils = __nccwpck_require__(5689);



///--- API

module.exports = {

  parse: parser.parseRequest,
  parseRequest: parser.parseRequest,

  sign: signer.signRequest,
  signRequest: signer.signRequest,
  createSigner: signer.createSigner,
  isSigner: signer.isSigner,

  sshKeyToPEM: utils.sshKeyToPEM,
  sshKeyFingerprint: utils.fingerprint,
  pemToRsaSSHKey: utils.pemToRsaSSHKey,

  verify: verify.verifySignature,
  verifySignature: verify.verifySignature,
  verifyHMAC: verify.verifyHMAC
};


/***/ }),

/***/ 5086:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2012 Joyent, Inc.  All rights reserved.

var assert = __nccwpck_require__(6631);
var util = __nccwpck_require__(1669);
var utils = __nccwpck_require__(5689);



///--- Globals

var HASH_ALGOS = utils.HASH_ALGOS;
var PK_ALGOS = utils.PK_ALGOS;
var HttpSignatureError = utils.HttpSignatureError;
var InvalidAlgorithmError = utils.InvalidAlgorithmError;
var validateAlgorithm = utils.validateAlgorithm;

var State = {
  New: 0,
  Params: 1
};

var ParamsState = {
  Name: 0,
  Quote: 1,
  Value: 2,
  Comma: 3
};

///--- Specific Errors


function ExpiredRequestError(message) {
  HttpSignatureError.call(this, message, ExpiredRequestError);
}
util.inherits(ExpiredRequestError, HttpSignatureError);


function InvalidHeaderError(message) {
  HttpSignatureError.call(this, message, InvalidHeaderError);
}
util.inherits(InvalidHeaderError, HttpSignatureError);


function InvalidParamsError(message) {
  HttpSignatureError.call(this, message, InvalidParamsError);
}
util.inherits(InvalidParamsError, HttpSignatureError);


function MissingHeaderError(message) {
  HttpSignatureError.call(this, message, MissingHeaderError);
}
util.inherits(MissingHeaderError, HttpSignatureError);

function StrictParsingError(message) {
  HttpSignatureError.call(this, message, StrictParsingError);
}
util.inherits(StrictParsingError, HttpSignatureError);

///--- Exported API

module.exports = {

  /**
   * Parses the 'Authorization' header out of an http.ServerRequest object.
   *
   * Note that this API will fully validate the Authorization header, and throw
   * on any error.  It will not however check the signature, or the keyId format
   * as those are specific to your environment.  You can use the options object
   * to pass in extra constraints.
   *
   * As a response object you can expect this:
   *
   *     {
   *       "scheme": "Signature",
   *       "params": {
   *         "keyId": "foo",
   *         "algorithm": "rsa-sha256",
   *         "headers": [
   *           "date" or "x-date",
   *           "digest"
   *         ],
   *         "signature": "base64"
   *       },
   *       "signingString": "ready to be passed to crypto.verify()"
   *     }
   *
   * @param {Object} request an http.ServerRequest.
   * @param {Object} options an optional options object with:
   *                   - clockSkew: allowed clock skew in seconds (default 300).
   *                   - headers: required header names (def: date or x-date)
   *                   - algorithms: algorithms to support (default: all).
   *                   - strict: should enforce latest spec parsing
   *                             (default: false).
   * @return {Object} parsed out object (see above).
   * @throws {TypeError} on invalid input.
   * @throws {InvalidHeaderError} on an invalid Authorization header error.
   * @throws {InvalidParamsError} if the params in the scheme are invalid.
   * @throws {MissingHeaderError} if the params indicate a header not present,
   *                              either in the request headers from the params,
   *                              or not in the params from a required header
   *                              in options.
   * @throws {StrictParsingError} if old attributes are used in strict parsing
   *                              mode.
   * @throws {ExpiredRequestError} if the value of date or x-date exceeds skew.
   */
  parseRequest: function parseRequest(request, options) {
    assert.object(request, 'request');
    assert.object(request.headers, 'request.headers');
    if (options === undefined) {
      options = {};
    }
    if (options.headers === undefined) {
      options.headers = [request.headers['x-date'] ? 'x-date' : 'date'];
    }
    assert.object(options, 'options');
    assert.arrayOfString(options.headers, 'options.headers');
    assert.optionalFinite(options.clockSkew, 'options.clockSkew');

    var headers = request.headers;
    var authzHeaderName = options.authorizationHeaderName;
    var authz = headers[authzHeaderName] || headers[utils.HEADER.AUTH] ||
      headers[utils.HEADER.SIG];

    if (!authz) {
      var errHeader = authzHeaderName ? authzHeaderName :
        utils.HEADER.AUTH + ' or ' + utils.HEADER.SIG;

      throw new MissingHeaderError('no ' + errHeader + ' header ' +
        'present in the request');
    }

    options.clockSkew = options.clockSkew || 300;


    var i = 0;
    var state = authz === headers[utils.HEADER.SIG] ? State.Params : State.New;
    var substate = ParamsState.Name;
    var tmpName = '';
    var tmpValue = '';

    var parsed = {
      scheme: authz === headers[utils.HEADER.SIG] ? 'Signature' : '',
      params: {},
      signingString: ''
    };

    for (i = 0; i < authz.length; i++) {
      var c = authz.charAt(i);

      switch (Number(state)) {

        case State.New:
          if (c !== ' ') parsed.scheme += c;
          else state = State.Params;
          break;

        case State.Params:
          switch (Number(substate)) {

            case ParamsState.Name:
              var code = c.charCodeAt(0);
              // restricted name of A-Z / a-z
              if ((code >= 0x41 && code <= 0x5a) || // A-Z
                (code >= 0x61 && code <= 0x7a)) { // a-z
                tmpName += c;
              } else if (c === '=') {
                if (tmpName.length === 0)
                  throw new InvalidHeaderError('bad param format');
                substate = ParamsState.Quote;
              } else {
                throw new InvalidHeaderError('bad param format');
              }
              break;

            case ParamsState.Quote:
              if (c === '"') {
                tmpValue = '';
                substate = ParamsState.Value;
              } else {
                throw new InvalidHeaderError('bad param format');
              }
              break;

            case ParamsState.Value:
              if (c === '"') {
                parsed.params[tmpName] = tmpValue;
                substate = ParamsState.Comma;
              } else {
                tmpValue += c;
              }
              break;

            case ParamsState.Comma:
              if (c === ',') {
                tmpName = '';
                substate = ParamsState.Name;
              } else {
                throw new InvalidHeaderError('bad param format');
              }
              break;

            default:
              throw new Error('Invalid substate');
          }
          break;

        default:
          throw new Error('Invalid substate');
      }

    }

    if (!parsed.params.headers || parsed.params.headers === '') {
      if (request.headers['x-date']) {
        parsed.params.headers = ['x-date'];
      } else {
        parsed.params.headers = ['date'];
      }
    } else {
      parsed.params.headers = parsed.params.headers.split(' ');
    }

    // Minimally validate the parsed object
    if (!parsed.scheme || parsed.scheme !== 'Signature')
      throw new InvalidHeaderError('scheme was not "Signature"');

    if (!parsed.params.keyId)
      throw new InvalidHeaderError('keyId was not specified');

    if (!parsed.params.algorithm)
      throw new InvalidHeaderError('algorithm was not specified');

    if (!parsed.params.signature)
      throw new InvalidHeaderError('signature was not specified');

    // Check the algorithm against the official list
    parsed.params.algorithm = parsed.params.algorithm.toLowerCase();
    try {
      validateAlgorithm(parsed.params.algorithm);
    } catch (e) {
      if (e instanceof InvalidAlgorithmError)
        throw (new InvalidParamsError(parsed.params.algorithm + ' is not ' +
          'supported'));
      else
        throw (e);
    }

    // Build the signingString
    for (i = 0; i < parsed.params.headers.length; i++) {
      var h = parsed.params.headers[i].toLowerCase();
      parsed.params.headers[i] = h;

      if (h === 'request-line') {
        if (!options.strict) {
          /*
           * We allow headers from the older spec drafts if strict parsing isn't
           * specified in options.
           */
          parsed.signingString +=
            request.method + ' ' + request.url + ' HTTP/' + request.httpVersion;
        } else {
          /* Strict parsing doesn't allow older draft headers. */
          throw (new StrictParsingError('request-line is not a valid header ' +
            'with strict parsing enabled.'));
        }
      } else if (h === '(request-target)') {
        parsed.signingString +=
          '(request-target): ' + request.method.toLowerCase() + ' ' +
          request.url;
      } else {
        var value = request.headers[h];
        if (value === undefined)
          throw new MissingHeaderError(h + ' was not in the request');
        parsed.signingString += h + ': ' + value;
      }

      if ((i + 1) < parsed.params.headers.length)
        parsed.signingString += '\n';
    }

    // Check against the constraints
    var date;
    if (request.headers.date || request.headers['x-date']) {
      if (request.headers['x-date']) {
        date = new Date(request.headers['x-date']);
      } else {
        date = new Date(request.headers.date);
      }
      var now = new Date();
      var skew = Math.abs(now.getTime() - date.getTime());

      if (skew > options.clockSkew * 1000) {
        throw new ExpiredRequestError('clock skew of ' +
          (skew / 1000) +
          's was greater than ' +
          options.clockSkew + 's');
      }
    }

    options.headers.forEach(function (hdr) {
      // Remember that we already checked any headers in the params
      // were in the request, so if this passes we're good.
      if (parsed.params.headers.indexOf(hdr.toLowerCase()) < 0)
        throw new MissingHeaderError(hdr + ' was not a signed header');
    });

    if (options.algorithms) {
      if (options.algorithms.indexOf(parsed.params.algorithm) === -1)
        throw new InvalidParamsError(parsed.params.algorithm +
          ' is not a supported algorithm');
    }

    parsed.algorithm = parsed.params.algorithm.toUpperCase();
    parsed.keyId = parsed.params.keyId;
    return parsed;
  }

};


/***/ }),

/***/ 8143:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2012 Joyent, Inc.  All rights reserved.

var assert = __nccwpck_require__(6631);
var crypto = __nccwpck_require__(6417);
var util = __nccwpck_require__(1669);
var sshpk = __nccwpck_require__(7022);
var jsprim = __nccwpck_require__(6287);
var utils = __nccwpck_require__(5689);

var sprintf = __nccwpck_require__(1669).format;

var HASH_ALGOS = utils.HASH_ALGOS;
var PK_ALGOS = utils.PK_ALGOS;
var InvalidAlgorithmError = utils.InvalidAlgorithmError;
var HttpSignatureError = utils.HttpSignatureError;
var validateAlgorithm = utils.validateAlgorithm;

///--- Globals

var AUTHZ_FMT =
  'Signature keyId="%s",algorithm="%s",headers="%s",signature="%s"';

var SIGNATURE_FMT = 'keyId="%s",algorithm="%s",headers="%s",signature="%s"';

///--- Specific Errors

function MissingHeaderError(message) {
  HttpSignatureError.call(this, message, MissingHeaderError);
}
util.inherits(MissingHeaderError, HttpSignatureError);

function StrictParsingError(message) {
  HttpSignatureError.call(this, message, StrictParsingError);
}
util.inherits(StrictParsingError, HttpSignatureError);

/* See createSigner() */
function RequestSigner(options) {
  assert.object(options, 'options');

  var alg = [];
  if (options.algorithm !== undefined) {
    assert.string(options.algorithm, 'options.algorithm');
    alg = validateAlgorithm(options.algorithm);
  }
  this.rs_alg = alg;

  /*
   * RequestSigners come in two varieties: ones with an rs_signFunc, and ones
   * with an rs_signer.
   *
   * rs_signFunc-based RequestSigners have to build up their entire signing
   * string within the rs_lines array and give it to rs_signFunc as a single
   * concat'd blob. rs_signer-based RequestSigners can add a line at a time to
   * their signing state by using rs_signer.update(), thus only needing to
   * buffer the hash function state and one line at a time.
   */
  if (options.sign !== undefined) {
    assert.func(options.sign, 'options.sign');
    this.rs_signFunc = options.sign;

  } else if (alg[0] === 'hmac' && options.key !== undefined) {
    assert.string(options.keyId, 'options.keyId');
    this.rs_keyId = options.keyId;

    if (typeof (options.key) !== 'string' && !Buffer.isBuffer(options.key))
      throw (new TypeError('options.key for HMAC must be a string or Buffer'));

    /*
     * Make an rs_signer for HMACs, not a rs_signFunc -- HMACs digest their
     * data in chunks rather than requiring it all to be given in one go
     * at the end, so they are more similar to signers than signFuncs.
     */
    this.rs_signer = crypto.createHmac(alg[1].toUpperCase(), options.key);
    this.rs_signer.sign = function () {
      var digest = this.digest('base64');
      return ({
        hashAlgorithm: alg[1],
        toString: function () { return (digest); }
      });
    };

  } else if (options.key !== undefined) {
    var key = options.key;
    if (typeof (key) === 'string' || Buffer.isBuffer(key))
      key = sshpk.parsePrivateKey(key);

    assert.ok(sshpk.PrivateKey.isPrivateKey(key, [1, 2]),
      'options.key must be a sshpk.PrivateKey');
    this.rs_key = key;

    assert.string(options.keyId, 'options.keyId');
    this.rs_keyId = options.keyId;

    if (!PK_ALGOS[key.type]) {
      throw (new InvalidAlgorithmError(key.type.toUpperCase() + ' type ' +
        'keys are not supported'));
    }

    if (alg[0] !== undefined && key.type !== alg[0]) {
      throw (new InvalidAlgorithmError('options.key must be a ' +
        alg[0].toUpperCase() + ' key, was given a ' +
        key.type.toUpperCase() + ' key instead'));
    }

    this.rs_signer = key.createSign(alg[1]);

  } else {
    throw (new TypeError('options.sign (func) or options.key is required'));
  }

  this.rs_headers = [];
  this.rs_lines = [];
}

/**
 * Adds a header to be signed, with its value, into this signer.
 *
 * @param {String} header
 * @param {String} value
 * @return {String} value written
 */
RequestSigner.prototype.writeHeader = function (header, value) {
  assert.string(header, 'header');
  header = header.toLowerCase();
  assert.string(value, 'value');

  this.rs_headers.push(header);

  if (this.rs_signFunc) {
    this.rs_lines.push(header + ': ' + value);

  } else {
    var line = header + ': ' + value;
    if (this.rs_headers.length > 0)
      line = '\n' + line;
    this.rs_signer.update(line);
  }

  return (value);
};

/**
 * Adds a default Date header, returning its value.
 *
 * @return {String}
 */
RequestSigner.prototype.writeDateHeader = function () {
  return (this.writeHeader('date', jsprim.rfc1123(new Date())));
};

/**
 * Adds the request target line to be signed.
 *
 * @param {String} method, HTTP method (e.g. 'get', 'post', 'put')
 * @param {String} path
 */
RequestSigner.prototype.writeTarget = function (method, path) {
  assert.string(method, 'method');
  assert.string(path, 'path');
  method = method.toLowerCase();
  this.writeHeader('(request-target)', method + ' ' + path);
};

/**
 * Calculate the value for the Authorization header on this request
 * asynchronously.
 *
 * @param {Func} callback (err, authz)
 */
RequestSigner.prototype.sign = function (cb) {
  assert.func(cb, 'callback');

  if (this.rs_headers.length < 1)
    throw (new Error('At least one header must be signed'));

  var alg, authz;
  if (this.rs_signFunc) {
    var data = this.rs_lines.join('\n');
    var self = this;
    this.rs_signFunc(data, function (err, sig) {
      if (err) {
        cb(err);
        return;
      }
      try {
        assert.object(sig, 'signature');
        assert.string(sig.keyId, 'signature.keyId');
        assert.string(sig.algorithm, 'signature.algorithm');
        assert.string(sig.signature, 'signature.signature');
        alg = validateAlgorithm(sig.algorithm);

        authz = sprintf(AUTHZ_FMT,
          sig.keyId,
          sig.algorithm,
          self.rs_headers.join(' '),
          sig.signature);
      } catch (e) {
        cb(e);
        return;
      }
      cb(null, authz);
    });

  } else {
    try {
      var sigObj = this.rs_signer.sign();
    } catch (e) {
      cb(e);
      return;
    }
    alg = (this.rs_alg[0] || this.rs_key.type) + '-' + sigObj.hashAlgorithm;
    var signature = sigObj.toString();
    authz = sprintf(AUTHZ_FMT,
      this.rs_keyId,
      alg,
      this.rs_headers.join(' '),
      signature);
    cb(null, authz);
  }
};

///--- Exported API

module.exports = {
  /**
   * Identifies whether a given object is a request signer or not.
   *
   * @param {Object} object, the object to identify
   * @returns {Boolean}
   */
  isSigner: function (obj) {
    if (typeof (obj) === 'object' && obj instanceof RequestSigner)
      return (true);
    return (false);
  },

  /**
   * Creates a request signer, used to asynchronously build a signature
   * for a request (does not have to be an http.ClientRequest).
   *
   * @param {Object} options, either:
   *                   - {String} keyId
   *                   - {String|Buffer} key
   *                   - {String} algorithm (optional, required for HMAC)
   *                 or:
   *                   - {Func} sign (data, cb)
   * @return {RequestSigner}
   */
  createSigner: function createSigner(options) {
    return (new RequestSigner(options));
  },

  /**
   * Adds an 'Authorization' header to an http.ClientRequest object.
   *
   * Note that this API will add a Date header if it's not already set. Any
   * other headers in the options.headers array MUST be present, or this
   * will throw.
   *
   * You shouldn't need to check the return type; it's just there if you want
   * to be pedantic.
   *
   * The optional flag indicates whether parsing should use strict enforcement
   * of the version draft-cavage-http-signatures-04 of the spec or beyond.
   * The default is to be loose and support
   * older versions for compatibility.
   *
   * @param {Object} request an instance of http.ClientRequest.
   * @param {Object} options signing parameters object:
   *                   - {String} keyId required.
   *                   - {String} key required (either a PEM or HMAC key).
   *                   - {Array} headers optional; defaults to ['date'].
   *                   - {String} algorithm optional (unless key is HMAC);
   *                              default is the same as the sshpk default
   *                              signing algorithm for the type of key given
   *                   - {String} httpVersion optional; defaults to '1.1'.
   *                   - {Boolean} strict optional; defaults to 'false'.
   * @return {Boolean} true if Authorization (and optionally Date) were added.
   * @throws {TypeError} on bad parameter types (input).
   * @throws {InvalidAlgorithmError} if algorithm was bad or incompatible with
   *                                 the given key.
   * @throws {sshpk.KeyParseError} if key was bad.
   * @throws {MissingHeaderError} if a header to be signed was specified but
   *                              was not present.
   */
  signRequest: function signRequest(request, options) {
    assert.object(request, 'request');
    assert.object(options, 'options');
    assert.optionalString(options.algorithm, 'options.algorithm');
    assert.string(options.keyId, 'options.keyId');
    assert.optionalArrayOfString(options.headers, 'options.headers');
    assert.optionalString(options.httpVersion, 'options.httpVersion');

    if (!request.getHeader('Date'))
      request.setHeader('Date', jsprim.rfc1123(new Date()));
    if (!options.headers)
      options.headers = ['date'];
    if (!options.httpVersion)
      options.httpVersion = '1.1';

    var alg = [];
    if (options.algorithm) {
      options.algorithm = options.algorithm.toLowerCase();
      alg = validateAlgorithm(options.algorithm);
    }

    var i;
    var stringToSign = '';
    for (i = 0; i < options.headers.length; i++) {
      if (typeof (options.headers[i]) !== 'string')
        throw new TypeError('options.headers must be an array of Strings');

      var h = options.headers[i].toLowerCase();

      if (h === 'request-line') {
        if (!options.strict) {
          /**
           * We allow headers from the older spec drafts if strict parsing isn't
           * specified in options.
           */
          stringToSign +=
            request.method + ' ' + request.path + ' HTTP/' +
            options.httpVersion;
        } else {
          /* Strict parsing doesn't allow older draft headers. */
          throw (new StrictParsingError('request-line is not a valid header ' +
            'with strict parsing enabled.'));
        }
      } else if (h === '(request-target)') {
        stringToSign +=
          '(request-target): ' + request.method.toLowerCase() + ' ' +
          request.path;
      } else {
        var value = request.getHeader(h);
        if (value === undefined || value === '') {
          throw new MissingHeaderError(h + ' was not in the request');
        }
        stringToSign += h + ': ' + value;
      }

      if ((i + 1) < options.headers.length)
        stringToSign += '\n';
    }

    /* This is just for unit tests. */
    if (request.hasOwnProperty('_stringToSign')) {
      request._stringToSign = stringToSign;
    }

    var signature;
    if (alg[0] === 'hmac') {
      if (typeof (options.key) !== 'string' && !Buffer.isBuffer(options.key))
        throw (new TypeError('options.key must be a string or Buffer'));

      var hmac = crypto.createHmac(alg[1].toUpperCase(), options.key);
      hmac.update(stringToSign);
      signature = hmac.digest('base64');

    } else {
      var key = options.key;
      if (typeof (key) === 'string' || Buffer.isBuffer(key))
        key = sshpk.parsePrivateKey(options.key);

      assert.ok(sshpk.PrivateKey.isPrivateKey(key, [1, 2]),
        'options.key must be a sshpk.PrivateKey');

      if (!PK_ALGOS[key.type]) {
        throw (new InvalidAlgorithmError(key.type.toUpperCase() + ' type ' +
          'keys are not supported'));
      }

      if (alg[0] !== undefined && key.type !== alg[0]) {
        throw (new InvalidAlgorithmError('options.key must be a ' +
          alg[0].toUpperCase() + ' key, was given a ' +
          key.type.toUpperCase() + ' key instead'));
      }

      var signer = key.createSign(alg[1]);
      signer.update(stringToSign);
      var sigObj = signer.sign();
      if (!HASH_ALGOS[sigObj.hashAlgorithm]) {
        throw (new InvalidAlgorithmError(sigObj.hashAlgorithm.toUpperCase() +
          ' is not a supported hash algorithm'));
      }
      options.algorithm = key.type + '-' + sigObj.hashAlgorithm;
      signature = sigObj.toString();
      assert.notStrictEqual(signature, '', 'empty signature produced');
    }

    var authzHeaderName = options.authorizationHeaderName || 'Authorization';

    var FMT = authzHeaderName.toLowerCase() === utils.HEADER.SIG ?
      SIGNATURE_FMT : AUTHZ_FMT;

    request.setHeader(authzHeaderName, sprintf(FMT,
      options.keyId,
      options.algorithm,
      options.headers.join(' '),
      signature));

    return true;
  }

};


/***/ }),

/***/ 5689:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2012 Joyent, Inc.  All rights reserved.

var assert = __nccwpck_require__(6631);
var sshpk = __nccwpck_require__(7022);
var util = __nccwpck_require__(1669);

var HASH_ALGOS = {
  'sha1': true,
  'sha256': true,
  'sha512': true
};

var PK_ALGOS = {
  'rsa': true,
  'dsa': true,
  'ecdsa': true
};

var HEADER = {
  AUTH: 'authorization',
  SIG: 'signature'
};

function HttpSignatureError(message, caller) {
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, caller || HttpSignatureError);

  this.message = message;
  this.name = caller.name;
}
util.inherits(HttpSignatureError, Error);

function InvalidAlgorithmError(message) {
  HttpSignatureError.call(this, message, InvalidAlgorithmError);
}
util.inherits(InvalidAlgorithmError, HttpSignatureError);

function validateAlgorithm(algorithm) {
  var alg = algorithm.toLowerCase().split('-');

  if (alg.length !== 2) {
    throw (new InvalidAlgorithmError(alg[0].toUpperCase() + ' is not a ' +
      'valid algorithm'));
  }

  if (alg[0] !== 'hmac' && !PK_ALGOS[alg[0]]) {
    throw (new InvalidAlgorithmError(alg[0].toUpperCase() + ' type keys ' +
      'are not supported'));
  }

  if (!HASH_ALGOS[alg[1]]) {
    throw (new InvalidAlgorithmError(alg[1].toUpperCase() + ' is not a ' +
      'supported hash algorithm'));
  }

  return (alg);
}

///--- API

module.exports = {
  HEADER: HEADER,

  HASH_ALGOS: HASH_ALGOS,
  PK_ALGOS: PK_ALGOS,

  HttpSignatureError: HttpSignatureError,
  InvalidAlgorithmError: InvalidAlgorithmError,

  validateAlgorithm: validateAlgorithm,

  /**
   * Converts an OpenSSH public key (rsa only) to a PKCS#8 PEM file.
   *
   * The intent of this module is to interoperate with OpenSSL only,
   * specifically the node crypto module's `verify` method.
   *
   * @param {String} key an OpenSSH public key.
   * @return {String} PEM encoded form of the RSA public key.
   * @throws {TypeError} on bad input.
   * @throws {Error} on invalid ssh key formatted data.
   */
  sshKeyToPEM: function sshKeyToPEM(key) {
    assert.string(key, 'ssh_key');

    var k = sshpk.parseKey(key, 'ssh');
    return (k.toString('pem'));
  },


  /**
   * Generates an OpenSSH fingerprint from an ssh public key.
   *
   * @param {String} key an OpenSSH public key.
   * @return {String} key fingerprint.
   * @throws {TypeError} on bad input.
   * @throws {Error} if what you passed doesn't look like an ssh public key.
   */
  fingerprint: function fingerprint(key) {
    assert.string(key, 'ssh_key');

    var k = sshpk.parseKey(key, 'ssh');
    return (k.fingerprint('md5').toString('hex'));
  },

  /**
   * Converts a PKGCS#8 PEM file to an OpenSSH public key (rsa)
   *
   * The reverse of the above function.
   */
  pemToRsaSSHKey: function pemToRsaSSHKey(pem, comment) {
    assert.equal('string', typeof (pem), 'typeof pem');

    var k = sshpk.parseKey(pem, 'pem');
    k.comment = comment;
    return (k.toString('ssh'));
  }
};


/***/ }),

/***/ 1227:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

var assert = __nccwpck_require__(6631);
var crypto = __nccwpck_require__(6417);
var sshpk = __nccwpck_require__(7022);
var utils = __nccwpck_require__(5689);

var HASH_ALGOS = utils.HASH_ALGOS;
var PK_ALGOS = utils.PK_ALGOS;
var InvalidAlgorithmError = utils.InvalidAlgorithmError;
var HttpSignatureError = utils.HttpSignatureError;
var validateAlgorithm = utils.validateAlgorithm;

///--- Exported API

module.exports = {
  /**
   * Verify RSA/DSA signature against public key.  You are expected to pass in
   * an object that was returned from `parse()`.
   *
   * @param {Object} parsedSignature the object you got from `parse`.
   * @param {String} pubkey RSA/DSA private key PEM.
   * @return {Boolean} true if valid, false otherwise.
   * @throws {TypeError} if you pass in bad arguments.
   * @throws {InvalidAlgorithmError}
   */
  verifySignature: function verifySignature(parsedSignature, pubkey) {
    assert.object(parsedSignature, 'parsedSignature');
    if (typeof (pubkey) === 'string' || Buffer.isBuffer(pubkey))
      pubkey = sshpk.parseKey(pubkey);
    assert.ok(sshpk.Key.isKey(pubkey, [1, 1]), 'pubkey must be a sshpk.Key');

    var alg = validateAlgorithm(parsedSignature.algorithm);
    if (alg[0] === 'hmac' || alg[0] !== pubkey.type)
      return (false);

    var v = pubkey.createVerify(alg[1]);
    v.update(parsedSignature.signingString);
    return (v.verify(parsedSignature.params.signature, 'base64'));
  },

  /**
   * Verify HMAC against shared secret.  You are expected to pass in an object
   * that was returned from `parse()`.
   *
   * @param {Object} parsedSignature the object you got from `parse`.
   * @param {String} secret HMAC shared secret.
   * @return {Boolean} true if valid, false otherwise.
   * @throws {TypeError} if you pass in bad arguments.
   * @throws {InvalidAlgorithmError}
   */
  verifyHMAC: function verifyHMAC(parsedSignature, secret) {
    assert.object(parsedSignature, 'parsedHMAC');
    assert.string(secret, 'secret');

    var alg = validateAlgorithm(parsedSignature.algorithm);
    if (alg[0] !== 'hmac')
      return (false);

    var hashAlg = alg[1].toUpperCase();

    var hmac = crypto.createHmac(hashAlg, secret);
    hmac.update(parsedSignature.signingString);

    /*
     * Now double-hash to avoid leaking timing information - there's
     * no easy constant-time compare in JS, so we use this approach
     * instead. See for more info:
     * https://www.isecpartners.com/blog/2011/february/double-hmac-
     * verification.aspx
     */
    var h1 = crypto.createHmac(hashAlg, secret);
    h1.update(hmac.digest());
    h1 = h1.digest();
    var h2 = crypto.createHmac(hashAlg, secret);
    h2.update(new Buffer(parsedSignature.params.signature, 'base64'));
    h2 = h2.digest();

    /* Node 0.8 returns strings from .digest(). */
    if (typeof (h1) === 'string')
      return (h1 === h2);
    /* And node 0.10 lacks the .equals() method on Buffers. */
    if (Buffer.isBuffer(h1) && !h1.equals)
      return (h1.toString('binary') === h2.toString('binary'));

    return (h1.equals(h2));
  }
};


/***/ }),

/***/ 2340:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var realFetch = __nccwpck_require__(467);
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}


/***/ }),

/***/ 5587:
/***/ (function(module, exports) {

(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))	// force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {	// ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

	// Random number generator - requires a PRNG backend, e.g. prng4.js

	// For best results, put code like
	// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
	// in your main HTML document.

	var rng_state;
	var rng_pool;
	var rng_pptr;

	// Mix in a 32-bit integer into the pool
	function rng_seed_int(x) {
	  rng_pool[rng_pptr++] ^= x & 255;
	  rng_pool[rng_pptr++] ^= (x >> 8) & 255;
	  rng_pool[rng_pptr++] ^= (x >> 16) & 255;
	  rng_pool[rng_pptr++] ^= (x >> 24) & 255;
	  if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
	}

	// Mix in the current time (w/milliseconds) into the pool
	function rng_seed_time() {
	  rng_seed_int(new Date().getTime());
	}

	// Initialize the pool with junk if needed.
	if(rng_pool == null) {
	  rng_pool = new Array();
	  rng_pptr = 0;
	  var t;
	  if(typeof window !== "undefined" && window.crypto) {
		if (window.crypto.getRandomValues) {
		  // Use webcrypto if available
		  var ua = new Uint8Array(32);
		  window.crypto.getRandomValues(ua);
		  for(t = 0; t < 32; ++t)
			rng_pool[rng_pptr++] = ua[t];
		}
		else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
		  // Extract entropy (256 bits) from NS4 RNG if available
		  var z = window.crypto.random(32);
		  for(t = 0; t < z.length; ++t)
			rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
		}
	  }
	  while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
		t = Math.floor(65536 * Math.random());
		rng_pool[rng_pptr++] = t >>> 8;
		rng_pool[rng_pptr++] = t & 255;
	  }
	  rng_pptr = 0;
	  rng_seed_time();
	  //rng_seed_int(window.screenX);
	  //rng_seed_int(window.screenY);
	}

	function rng_get_byte() {
	  if(rng_state == null) {
		rng_seed_time();
		rng_state = prng_newstate();
		rng_state.init(rng_pool);
		for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
		  rng_pool[rng_pptr] = 0;
		rng_pptr = 0;
		//rng_pool = null;
	  }
	  // TODO: allow reseeding after first request
	  return rng_state.next();
	}

	function rng_get_bytes(ba) {
	  var i;
	  for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
	}

	function SecureRandom() {}

	SecureRandom.prototype.nextBytes = rng_get_bytes;

	// prng4.js - uses Arcfour as a PRNG

	function Arcfour() {
	  this.i = 0;
	  this.j = 0;
	  this.S = new Array();
	}

	// Initialize arcfour context from key, an array of ints, each from [0..255]
	function ARC4init(key) {
	  var i, j, t;
	  for(i = 0; i < 256; ++i)
		this.S[i] = i;
	  j = 0;
	  for(i = 0; i < 256; ++i) {
		j = (j + this.S[i] + key[i % key.length]) & 255;
		t = this.S[i];
		this.S[i] = this.S[j];
		this.S[j] = t;
	  }
	  this.i = 0;
	  this.j = 0;
	}

	function ARC4next() {
	  var t;
	  this.i = (this.i + 1) & 255;
	  this.j = (this.j + this.S[this.i]) & 255;
	  t = this.S[this.i];
	  this.S[this.i] = this.S[this.j];
	  this.S[this.j] = t;
	  return this.S[(t + this.S[this.i]) & 255];
	}

	Arcfour.prototype.init = ARC4init;
	Arcfour.prototype.next = ARC4next;

	// Plug in your RNG constructor here
	function prng_newstate() {
	  return new Arcfour();
	}

	// Pool size must be a multiple of 4 and greater than 32.
	// An array of bytes the size of the pool will be passed to init()
	var rng_psize = 256;

  BigInteger.SecureRandom = SecureRandom;
  BigInteger.BigInteger = BigInteger;
  if (true) {
    exports = module.exports = BigInteger;
  } else {}

}).call(this);


/***/ }),

/***/ 1328:
/***/ (function(module) {

/**
 * JSONSchema Validator - Validates JavaScript objects using JSON Schemas
 *	(http://www.json.com/json-schema-proposal/)
 *
 * Copyright (c) 2007 Kris Zyp SitePen (www.sitepen.com)
 * Licensed under the MIT (MIT-LICENSE.txt) license.
To use the validator call the validate function with an instance object and an optional schema object.
If a schema is provided, it will be used to validate. If the instance object refers to a schema (self-validating),
that schema will be used to validate and the schema parameter is not necessary (if both exist,
both validations will occur).
The validate method will return an array of validation errors. If there are no errors, then an
empty list will be returned. A validation error will have two properties:
"property" which indicates which property had the error
"message" which indicates what the error was
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return factory();
        });
    } else if ( true && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals
        root.jsonSchema = factory();
    }
}(this, function () {// setup primitive classes to be JSON Schema types
var exports = validate
exports.Integer = {type:"integer"};
var primitiveConstructors = {
	String: String,
	Boolean: Boolean,
	Number: Number,
	Object: Object,
	Array: Array,
	Date: Date
}
exports.validate = validate;
function validate(/*Any*/instance,/*Object*/schema) {
		// Summary:
		//  	To use the validator call JSONSchema.validate with an instance object and an optional schema object.
		// 		If a schema is provided, it will be used to validate. If the instance object refers to a schema (self-validating),
		// 		that schema will be used to validate and the schema parameter is not necessary (if both exist,
		// 		both validations will occur).
		// 		The validate method will return an object with two properties:
		// 			valid: A boolean indicating if the instance is valid by the schema
		// 			errors: An array of validation errors. If there are no errors, then an
		// 					empty list will be returned. A validation error will have two properties:
		// 						property: which indicates which property had the error
		// 						message: which indicates what the error was
		//
		return validate(instance, schema, {changing: false});//, coerce: false, existingOnly: false});
	};
exports.checkPropertyChange = function(/*Any*/value,/*Object*/schema, /*String*/property) {
		// Summary:
		// 		The checkPropertyChange method will check to see if an value can legally be in property with the given schema
		// 		This is slightly different than the validate method in that it will fail if the schema is readonly and it will
		// 		not check for self-validation, it is assumed that the passed in value is already internally valid.
		// 		The checkPropertyChange method will return the same object type as validate, see JSONSchema.validate for
		// 		information.
		//
		return validate(value, schema, {changing: property || "property"});
	};
var validate = exports._validate = function(/*Any*/instance,/*Object*/schema,/*Object*/options) {

	if (!options) options = {};
	var _changing = options.changing;

	function getType(schema){
		return schema.type || (primitiveConstructors[schema.name] == schema && schema.name.toLowerCase());
	}
	var errors = [];
	// validate a value against a property definition
	function checkProp(value, schema, path,i){

		var l;
		path += path ? typeof i == 'number' ? '[' + i + ']' : typeof i == 'undefined' ? '' : '.' + i : i;
		function addError(message){
			errors.push({property:path,message:message});
		}

		if((typeof schema != 'object' || schema instanceof Array) && (path || typeof schema != 'function') && !(schema && getType(schema))){
			if(typeof schema == 'function'){
				if(!(value instanceof schema)){
					addError("is not an instance of the class/constructor " + schema.name);
				}
			}else if(schema){
				addError("Invalid schema/property definition " + schema);
			}
			return null;
		}
		if(_changing && schema.readonly){
			addError("is a readonly field, it can not be changed");
		}
		if(schema['extends']){ // if it extends another schema, it must pass that schema as well
			checkProp(value,schema['extends'],path,i);
		}
		// validate a value against a type definition
		function checkType(type,value){
			if(type){
				if(typeof type == 'string' && type != 'any' &&
						(type == 'null' ? value !== null : typeof value != type) &&
						!(value instanceof Array && type == 'array') &&
						!(value instanceof Date && type == 'date') &&
						!(type == 'integer' && value%1===0)){
					return [{property:path,message:(typeof value) + " value found, but a " + type + " is required"}];
				}
				if(type instanceof Array){
					var unionErrors=[];
					for(var j = 0; j < type.length; j++){ // a union type
						if(!(unionErrors=checkType(type[j],value)).length){
							break;
						}
					}
					if(unionErrors.length){
						return unionErrors;
					}
				}else if(typeof type == 'object'){
					var priorErrors = errors;
					errors = [];
					checkProp(value,type,path);
					var theseErrors = errors;
					errors = priorErrors;
					return theseErrors;
				}
			}
			return [];
		}
		if(value === undefined){
			if(schema.required){
				addError("is missing and it is required");
			}
		}else{
			errors = errors.concat(checkType(getType(schema),value));
			if(schema.disallow && !checkType(schema.disallow,value).length){
				addError(" disallowed value was matched");
			}
			if(value !== null){
				if(value instanceof Array){
					if(schema.items){
						var itemsIsArray = schema.items instanceof Array;
						var propDef = schema.items;
						for (i = 0, l = value.length; i < l; i += 1) {
							if (itemsIsArray)
								propDef = schema.items[i];
							if (options.coerce)
								value[i] = options.coerce(value[i], propDef);
							errors.concat(checkProp(value[i],propDef,path,i));
						}
					}
					if(schema.minItems && value.length < schema.minItems){
						addError("There must be a minimum of " + schema.minItems + " in the array");
					}
					if(schema.maxItems && value.length > schema.maxItems){
						addError("There must be a maximum of " + schema.maxItems + " in the array");
					}
				}else if(schema.properties || schema.additionalProperties){
					errors.concat(checkObj(value, schema.properties, path, schema.additionalProperties));
				}
				if(schema.pattern && typeof value == 'string' && !value.match(schema.pattern)){
					addError("does not match the regex pattern " + schema.pattern);
				}
				if(schema.maxLength && typeof value == 'string' && value.length > schema.maxLength){
					addError("may only be " + schema.maxLength + " characters long");
				}
				if(schema.minLength && typeof value == 'string' && value.length < schema.minLength){
					addError("must be at least " + schema.minLength + " characters long");
				}
				if(typeof schema.minimum !== undefined && typeof value == typeof schema.minimum &&
						schema.minimum > value){
					addError("must have a minimum value of " + schema.minimum);
				}
				if(typeof schema.maximum !== undefined && typeof value == typeof schema.maximum &&
						schema.maximum < value){
					addError("must have a maximum value of " + schema.maximum);
				}
				if(schema['enum']){
					var enumer = schema['enum'];
					l = enumer.length;
					var found;
					for(var j = 0; j < l; j++){
						if(enumer[j]===value){
							found=1;
							break;
						}
					}
					if(!found){
						addError("does not have a value in the enumeration " + enumer.join(", "));
					}
				}
				if(typeof schema.maxDecimal == 'number' &&
					(value.toString().match(new RegExp("\\.[0-9]{" + (schema.maxDecimal + 1) + ",}")))){
					addError("may only have " + schema.maxDecimal + " digits of decimal places");
				}
			}
		}
		return null;
	}
	// validate an object against a schema
	function checkObj(instance,objTypeDef,path,additionalProp){

		if(typeof objTypeDef =='object'){
			if(typeof instance != 'object' || instance instanceof Array){
				errors.push({property:path,message:"an object is required"});
			}
			
			for(var i in objTypeDef){ 
				if(objTypeDef.hasOwnProperty(i)){
					var value = instance[i];
					// skip _not_ specified properties
					if (value === undefined && options.existingOnly) continue;
					var propDef = objTypeDef[i];
					// set default
					if(value === undefined && propDef["default"]){
						value = instance[i] = propDef["default"];
					}
					if(options.coerce && i in instance){
						value = instance[i] = options.coerce(value, propDef);
					}
					checkProp(value,propDef,path,i);
				}
			}
		}
		for(i in instance){
			if(instance.hasOwnProperty(i) && !(i.charAt(0) == '_' && i.charAt(1) == '_') && objTypeDef && !objTypeDef[i] && additionalProp===false){
				if (options.filter) {
					delete instance[i];
					continue;
				} else {
					errors.push({property:path,message:(typeof value) + "The property " + i +
						" is not defined in the schema and the schema does not allow additional properties"});
				}
			}
			var requires = objTypeDef && objTypeDef[i] && objTypeDef[i].requires;
			if(requires && !(requires in instance)){
				errors.push({property:path,message:"the presence of the property " + i + " requires that " + requires + " also be present"});
			}
			value = instance[i];
			if(additionalProp && (!(objTypeDef && typeof objTypeDef == 'object') || !(i in objTypeDef))){
				if(options.coerce){
					value = instance[i] = options.coerce(value, additionalProp);
				}
				checkProp(value,additionalProp,path,i);
			}
			if(!_changing && value && value.$schema){
				errors = errors.concat(checkProp(value,value.$schema,path,i));
			}
		}
		return errors;
	}
	if(schema){
		checkProp(instance,schema,'',_changing || '');
	}
	if(!_changing && instance && instance.$schema){
		checkProp(instance,instance.$schema,'','');
	}
	return {valid:!errors.length,errors:errors};
};
exports.mustBeValid = function(result){
	//	summary:
	//		This checks to ensure that the result is valid and will throw an appropriate error message if it is not
	// result: the result returned from checkPropertyChange or validate
	if(!result.valid){
		throw new TypeError(result.errors.map(function(error){return "for property " + error.property + ': ' + error.message;}).join(", \n"));
	}
}

return exports;
}));


/***/ }),

/***/ 3359:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var jws = __nccwpck_require__(4636);

module.exports = function (jwt, options) {
  options = options || {};
  var decoded = jws.decode(jwt, options);
  if (!decoded) { return null; }
  var payload = decoded.payload;

  //try parse the payload
  if(typeof payload === 'string') {
    try {
      var obj = JSON.parse(payload);
      if(obj !== null && typeof obj === 'object') {
        payload = obj;
      }
    } catch (e) { }
  }

  //return header if `complete` option is enabled.  header includes claims
  //such as `kid` and `alg` used to select the key within a JWKS needed to
  //verify the signature
  if (options.complete === true) {
    return {
      header: decoded.header,
      payload: payload,
      signature: decoded.signature
    };
  }
  return payload;
};


/***/ }),

/***/ 7486:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = {
  decode: __nccwpck_require__(3359),
  verify: __nccwpck_require__(2327),
  sign: __nccwpck_require__(2022),
  JsonWebTokenError: __nccwpck_require__(405),
  NotBeforeError: __nccwpck_require__(4383),
  TokenExpiredError: __nccwpck_require__(6637),
};


/***/ }),

/***/ 405:
/***/ ((module) => {

var JsonWebTokenError = function (message, error) {
  Error.call(this, message);
  if(Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = 'JsonWebTokenError';
  this.message = message;
  if (error) this.inner = error;
};

JsonWebTokenError.prototype = Object.create(Error.prototype);
JsonWebTokenError.prototype.constructor = JsonWebTokenError;

module.exports = JsonWebTokenError;


/***/ }),

/***/ 4383:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var JsonWebTokenError = __nccwpck_require__(405);

var NotBeforeError = function (message, date) {
  JsonWebTokenError.call(this, message);
  this.name = 'NotBeforeError';
  this.date = date;
};

NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);

NotBeforeError.prototype.constructor = NotBeforeError;

module.exports = NotBeforeError;

/***/ }),

/***/ 6637:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var JsonWebTokenError = __nccwpck_require__(405);

var TokenExpiredError = function (message, expiredAt) {
  JsonWebTokenError.call(this, message);
  this.name = 'TokenExpiredError';
  this.expiredAt = expiredAt;
};

TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);

TokenExpiredError.prototype.constructor = TokenExpiredError;

module.exports = TokenExpiredError;

/***/ }),

/***/ 9085:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var semver = __nccwpck_require__(7174);

module.exports = semver.satisfies(process.version, '^6.12.0 || >=8.0.0');


/***/ }),

/***/ 6098:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var ms = __nccwpck_require__(900);

module.exports = function (time, iat) {
  var timestamp = iat || Math.floor(Date.now() / 1000);

  if (typeof time === 'string') {
    var milliseconds = ms(time);
    if (typeof milliseconds === 'undefined') {
      return;
    }
    return Math.floor(timestamp + milliseconds / 1000);
  } else if (typeof time === 'number') {
    return timestamp + time;
  } else {
    return;
  }

};

/***/ }),

/***/ 7174:
/***/ ((module, exports) => {

exports = module.exports = SemVer

var debug
/* istanbul ignore next */
if (typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    args.unshift('SEMVER')
    console.log.apply(console, args)
  }
} else {
  debug = function () {}
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0'

var MAX_LENGTH = 256
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16

// The actual regexps go on exports.re
var re = exports.re = []
var src = exports.src = []
var R = 0

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*'
var NUMERICIDENTIFIERLOOSE = R++
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'

// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')'

var MAINVERSIONLOOSE = R++
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')'

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')'

var PRERELEASEIDENTIFIERLOOSE = R++
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')'

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))'

var PRERELEASELOOSE = R++
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?'

src[FULL] = '^' + FULLPLAIN + '$'

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?'

var LOOSE = R++
src[LOOSE] = '^' + LOOSEPLAIN + '$'

var GTLT = R++
src[GTLT] = '((?:<|>)?=?)'

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'
var XRANGEIDENTIFIER = R++
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*'

var XRANGEPLAIN = R++
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?'

var XRANGEPLAINLOOSE = R++
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?'

var XRANGE = R++
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$'
var XRANGELOOSE = R++
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])'

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++
src[LONETILDE] = '(?:~>?)'

var TILDETRIM = R++
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+'
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g')
var tildeTrimReplace = '$1~'

var TILDE = R++
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$'
var TILDELOOSE = R++
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++
src[LONECARET] = '(?:\\^)'

var CARETTRIM = R++
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+'
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g')
var caretTrimReplace = '$1^'

var CARET = R++
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$'
var CARETLOOSE = R++
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$'
var COMPARATOR = R++
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g')
var comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$'

var HYPHENRANGELOOSE = R++
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$'

// Star ranges basically just allow anything at all.
var STAR = R++
src[STAR] = '(<|>)?=?\\s*\\*'

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i])
  if (!re[i]) {
    re[i] = new RegExp(src[i])
  }
}

exports.parse = parse
function parse (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  var r = options.loose ? re[LOOSE] : re[FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

exports.valid = valid
function valid (version, options) {
  var v = parse(version, options)
  return v ? v.version : null
}

exports.clean = clean
function clean (version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}

exports.SemVer = SemVer

function SemVer (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }
  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version
    } else {
      version = version.version
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version)
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options)
  }

  debug('SemVer', version, options)
  this.options = options
  this.loose = !!options.loose

  var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL])

  if (!m) {
    throw new TypeError('Invalid Version: ' + version)
  }

  this.raw = version

  // these are actually numbers
  this.major = +m[1]
  this.minor = +m[2]
  this.patch = +m[3]

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version')
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version')
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version')
  }

  // numberify any prerelease numeric ids
  if (!m[4]) {
    this.prerelease = []
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id
        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num
        }
      }
      return id
    })
  }

  this.build = m[5] ? m[5].split('.') : []
  this.format()
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch
  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.')
  }
  return this.version
}

SemVer.prototype.toString = function () {
  return this.version
}

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other)
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return this.compareMain(other) || this.comparePre(other)
}

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch)
}

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) {
    return -1
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0
  }

  var i = 0
  do {
    var a = this.prerelease[i]
    var b = other.prerelease[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor = 0
      this.major++
      this.inc('pre', identifier)
      break
    case 'preminor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor++
      this.inc('pre', identifier)
      break
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0
      this.inc('patch', identifier)
      this.inc('pre', identifier)
      break
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier)
      }
      this.inc('pre', identifier)
      break

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) {
        this.major++
      }
      this.minor = 0
      this.patch = 0
      this.prerelease = []
      break
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++
      }
      this.patch = 0
      this.prerelease = []
      break
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++
      }
      this.prerelease = []
      break
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0]
      } else {
        var i = this.prerelease.length
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++
            i = -2
          }
        }
        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0)
        }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0]
          }
        } else {
          this.prerelease = [identifier, 0]
        }
      }
      break

    default:
      throw new Error('invalid increment argument: ' + release)
  }
  this.format()
  this.raw = this.version
  return this
}

exports.inc = inc
function inc (version, release, loose, identifier) {
  if (typeof (loose) === 'string') {
    identifier = loose
    loose = undefined
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version
  } catch (er) {
    return null
  }
}

exports.diff = diff
function diff (version1, version2) {
  if (eq(version1, version2)) {
    return null
  } else {
    var v1 = parse(version1)
    var v2 = parse(version2)
    var prefix = ''
    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre'
      var defaultResult = 'prerelease'
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers

var numeric = /^[0-9]+$/
function compareIdentifiers (a, b) {
  var anum = numeric.test(a)
  var bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

exports.rcompareIdentifiers = rcompareIdentifiers
function rcompareIdentifiers (a, b) {
  return compareIdentifiers(b, a)
}

exports.major = major
function major (a, loose) {
  return new SemVer(a, loose).major
}

exports.minor = minor
function minor (a, loose) {
  return new SemVer(a, loose).minor
}

exports.patch = patch
function patch (a, loose) {
  return new SemVer(a, loose).patch
}

exports.compare = compare
function compare (a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose))
}

exports.compareLoose = compareLoose
function compareLoose (a, b) {
  return compare(a, b, true)
}

exports.rcompare = rcompare
function rcompare (a, b, loose) {
  return compare(b, a, loose)
}

exports.sort = sort
function sort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compare(a, b, loose)
  })
}

exports.rsort = rsort
function rsort (list, loose) {
  return list.sort(function (a, b) {
    return exports.rcompare(a, b, loose)
  })
}

exports.gt = gt
function gt (a, b, loose) {
  return compare(a, b, loose) > 0
}

exports.lt = lt
function lt (a, b, loose) {
  return compare(a, b, loose) < 0
}

exports.eq = eq
function eq (a, b, loose) {
  return compare(a, b, loose) === 0
}

exports.neq = neq
function neq (a, b, loose) {
  return compare(a, b, loose) !== 0
}

exports.gte = gte
function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}

exports.lte = lte
function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}

exports.cmp = cmp
function cmp (a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError('Invalid operator: ' + op)
  }
}

exports.Comparator = Comparator
function Comparator (comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp
    } else {
      comp = comp.value
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options)
  }

  debug('comparator', comp, options)
  this.options = options
  this.loose = !!options.loose
  this.parse(comp)

  if (this.semver === ANY) {
    this.value = ''
  } else {
    this.value = this.operator + this.semver.version
  }

  debug('comp', this)
}

var ANY = {}
Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var m = comp.match(r)

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp)
  }

  this.operator = m[1]
  if (this.operator === '=') {
    this.operator = ''
  }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) {
    this.semver = ANY
  } else {
    this.semver = new SemVer(m[2], this.options.loose)
  }
}

Comparator.prototype.toString = function () {
  return this.value
}

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose)

  if (this.semver === ANY) {
    return true
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  return cmp(version, this.operator, this.semver, this.options)
}

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required')
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  var rangeTmp

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, options)
    return satisfies(this.value, rangeTmp, options)
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, options)
    return satisfies(comp.semver, rangeTmp, options)
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>')
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<')
  var sameSemVer = this.semver.version === comp.semver.version
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=')
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'))
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'))

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
}

exports.Range = Range
function Range (range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range
    } else {
      return new Range(range.raw, options)
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options)
  }

  if (!(this instanceof Range)) {
    return new Range(range, options)
  }

  this.options = options
  this.loose = !!options.loose
  this.includePrerelease = !!options.includePrerelease

  // First, split based on boolean or ||
  this.raw = range
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim())
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length
  })

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range)
  }

  this.format()
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim()
  }).join('||').trim()
  return this.range
}

Range.prototype.toString = function () {
  return this.range
}

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose
  range = range.trim()
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE]
  range = range.replace(hr, hyphenReplace)
  debug('hyphen replace', range)
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace)
  debug('comparator trim', range, re[COMPARATORTRIM])

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace)

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace)

  // normalize spaces
  range = range.split(/\s+/).join(' ')

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options)
  }, this).join(' ').split(/\s+/)
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe)
    })
  }
  set = set.map(function (comp) {
    return new Comparator(comp, this.options)
  }, this)

  return set
}

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required')
  }

  return this.set.some(function (thisComparators) {
    return thisComparators.every(function (thisComparator) {
      return range.set.some(function (rangeComparators) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, options)
        })
      })
    })
  })
}

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators
function toComparators (range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value
    }).join(' ').trim().split(' ')
  })
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator (comp, options) {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

function isX (id) {
  return !id || id.toLowerCase() === 'x' || id === '*'
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options)
  }).join(' ')
}

function replaceTilde (comp, options) {
  var r = options.loose ? re[TILDELOOSE] : re[TILDE]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
            ' <' + M + '.' + (+m + 1) + '.0'
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options)
  }).join(' ')
}

function replaceCaret (comp, options) {
  debug('caret', comp, options)
  var r = options.loose ? re[CARETLOOSE] : re[CARET]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
              ' <' + (+M + 1) + '.0.0'
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'
      }
    }

    debug('caret return', ret)
    return ret
  })
}

function replaceXRanges (comp, options) {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options)
  }).join(' ')
}

function replaceXRange (comp, options) {
  comp = comp.trim()
  var r = options.loose ? re[XRANGELOOSE] : re[XRANGE]
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    var xM = isX(M)
    var xm = xM || isX(m)
    var xp = xm || isX(p)
    var anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      ret = gtlt + M + '.' + m + '.' + p
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars (comp, options) {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '')
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0'
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0'
  } else {
    from = '>=' + from
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0'
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0'
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr
  } else {
    to = '<=' + to
  }

  return (from + ' ' + to).trim()
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) {
    return false
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true
    }
  }
  return false
}

function testSet (set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}

exports.satisfies = satisfies
function satisfies (version, range, options) {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}

exports.maxSatisfying = maxSatisfying
function maxSatisfying (versions, range, options) {
  var max = null
  var maxSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}

exports.minSatisfying = minSatisfying
function minSatisfying (versions, range, options) {
  var min = null
  var minSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}

exports.minVersion = minVersion
function minVersion (range, loose) {
  range = new Range(range, loose)

  var minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error('Unexpected operation: ' + comparator.operator)
      }
    })
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}

exports.validRange = validRange
function validRange (range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr
function ltr (version, range, options) {
  return outside(version, range, '<', options)
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr
function gtr (version, range, options) {
  return outside(version, range, '>', options)
}

exports.outside = outside
function outside (version, range, hilo, options) {
  version = new SemVer(version, options)
  range = new Range(range, options)

  var gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    var high = null
    var low = null

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

exports.prerelease = prerelease
function prerelease (version, options) {
  var parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}

exports.intersects = intersects
function intersects (r1, r2, options) {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}

exports.coerce = coerce
function coerce (version) {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  var match = version.match(re[COERCE])

  if (match == null) {
    return null
  }

  return parse(match[1] +
    '.' + (match[2] || '0') +
    '.' + (match[3] || '0'))
}


/***/ }),

/***/ 2022:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var timespan = __nccwpck_require__(6098);
var PS_SUPPORTED = __nccwpck_require__(9085);
var jws = __nccwpck_require__(4636);
var includes = __nccwpck_require__(7931);
var isBoolean = __nccwpck_require__(6501);
var isInteger = __nccwpck_require__(1441);
var isNumber = __nccwpck_require__(298);
var isPlainObject = __nccwpck_require__(5723);
var isString = __nccwpck_require__(5180);
var once = __nccwpck_require__(4499);

var SUPPORTED_ALGS = ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'HS256', 'HS384', 'HS512', 'none']
if (PS_SUPPORTED) {
  SUPPORTED_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}

var sign_options_schema = {
  expiresIn: { isValid: function(value) { return isInteger(value) || (isString(value) && value); }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
  notBefore: { isValid: function(value) { return isInteger(value) || (isString(value) && value); }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
  audience: { isValid: function(value) { return isString(value) || Array.isArray(value); }, message: '"audience" must be a string or array' },
  algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
  header: { isValid: isPlainObject, message: '"header" must be an object' },
  encoding: { isValid: isString, message: '"encoding" must be a string' },
  issuer: { isValid: isString, message: '"issuer" must be a string' },
  subject: { isValid: isString, message: '"subject" must be a string' },
  jwtid: { isValid: isString, message: '"jwtid" must be a string' },
  noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
  keyid: { isValid: isString, message: '"keyid" must be a string' },
  mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' }
};

var registered_claims_schema = {
  iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
  exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
  nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
};

function validate(schema, allowUnknown, object, parameterName) {
  if (!isPlainObject(object)) {
    throw new Error('Expected "' + parameterName + '" to be a plain object.');
  }
  Object.keys(object)
    .forEach(function(key) {
      var validator = schema[key];
      if (!validator) {
        if (!allowUnknown) {
          throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
        }
        return;
      }
      if (!validator.isValid(object[key])) {
        throw new Error(validator.message);
      }
    });
}

function validateOptions(options) {
  return validate(sign_options_schema, false, options, 'options');
}

function validatePayload(payload) {
  return validate(registered_claims_schema, true, payload, 'payload');
}

var options_to_payload = {
  'audience': 'aud',
  'issuer': 'iss',
  'subject': 'sub',
  'jwtid': 'jti'
};

var options_for_objects = [
  'expiresIn',
  'notBefore',
  'noTimestamp',
  'audience',
  'issuer',
  'subject',
  'jwtid',
];

module.exports = function (payload, secretOrPrivateKey, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else {
    options = options || {};
  }

  var isObjectPayload = typeof payload === 'object' &&
                        !Buffer.isBuffer(payload);

  var header = Object.assign({
    alg: options.algorithm || 'HS256',
    typ: isObjectPayload ? 'JWT' : undefined,
    kid: options.keyid
  }, options.header);

  function failure(err) {
    if (callback) {
      return callback(err);
    }
    throw err;
  }

  if (!secretOrPrivateKey && options.algorithm !== 'none') {
    return failure(new Error('secretOrPrivateKey must have a value'));
  }

  if (typeof payload === 'undefined') {
    return failure(new Error('payload is required'));
  } else if (isObjectPayload) {
    try {
      validatePayload(payload);
    }
    catch (error) {
      return failure(error);
    }
    if (!options.mutatePayload) {
      payload = Object.assign({},payload);
    }
  } else {
    var invalid_options = options_for_objects.filter(function (opt) {
      return typeof options[opt] !== 'undefined';
    });

    if (invalid_options.length > 0) {
      return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + (typeof payload ) + ' payload'));
    }
  }

  if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {
    return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
  }

  if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {
    return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
  }

  try {
    validateOptions(options);
  }
  catch (error) {
    return failure(error);
  }

  var timestamp = payload.iat || Math.floor(Date.now() / 1000);

  if (options.noTimestamp) {
    delete payload.iat;
  } else if (isObjectPayload) {
    payload.iat = timestamp;
  }

  if (typeof options.notBefore !== 'undefined') {
    try {
      payload.nbf = timespan(options.notBefore, timestamp);
    }
    catch (err) {
      return failure(err);
    }
    if (typeof payload.nbf === 'undefined') {
      return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }

  if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {
    try {
      payload.exp = timespan(options.expiresIn, timestamp);
    }
    catch (err) {
      return failure(err);
    }
    if (typeof payload.exp === 'undefined') {
      return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }

  Object.keys(options_to_payload).forEach(function (key) {
    var claim = options_to_payload[key];
    if (typeof options[key] !== 'undefined') {
      if (typeof payload[claim] !== 'undefined') {
        return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
      }
      payload[claim] = options[key];
    }
  });

  var encoding = options.encoding || 'utf8';

  if (typeof callback === 'function') {
    callback = callback && once(callback);

    jws.createSign({
      header: header,
      privateKey: secretOrPrivateKey,
      payload: payload,
      encoding: encoding
    }).once('error', callback)
      .once('done', function (signature) {
        callback(null, signature);
      });
  } else {
    return jws.sign({header: header, payload: payload, secret: secretOrPrivateKey, encoding: encoding});
  }
};


/***/ }),

/***/ 2327:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var JsonWebTokenError = __nccwpck_require__(405);
var NotBeforeError    = __nccwpck_require__(4383);
var TokenExpiredError = __nccwpck_require__(6637);
var decode            = __nccwpck_require__(3359);
var timespan          = __nccwpck_require__(6098);
var PS_SUPPORTED      = __nccwpck_require__(9085);
var jws               = __nccwpck_require__(4636);

var PUB_KEY_ALGS = ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512'];
var RSA_KEY_ALGS = ['RS256', 'RS384', 'RS512'];
var HS_ALGS = ['HS256', 'HS384', 'HS512'];

if (PS_SUPPORTED) {
  PUB_KEY_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
  RSA_KEY_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}

module.exports = function (jwtString, secretOrPublicKey, options, callback) {
  if ((typeof options === 'function') && !callback) {
    callback = options;
    options = {};
  }

  if (!options) {
    options = {};
  }

  //clone this object since we are going to mutate it.
  options = Object.assign({}, options);

  var done;

  if (callback) {
    done = callback;
  } else {
    done = function(err, data) {
      if (err) throw err;
      return data;
    };
  }

  if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {
    return done(new JsonWebTokenError('clockTimestamp must be a number'));
  }

  if (options.nonce !== undefined && (typeof options.nonce !== 'string' || options.nonce.trim() === '')) {
    return done(new JsonWebTokenError('nonce must be a non-empty string'));
  }

  var clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);

  if (!jwtString){
    return done(new JsonWebTokenError('jwt must be provided'));
  }

  if (typeof jwtString !== 'string') {
    return done(new JsonWebTokenError('jwt must be a string'));
  }

  var parts = jwtString.split('.');

  if (parts.length !== 3){
    return done(new JsonWebTokenError('jwt malformed'));
  }

  var decodedToken;

  try {
    decodedToken = decode(jwtString, { complete: true });
  } catch(err) {
    return done(err);
  }

  if (!decodedToken) {
    return done(new JsonWebTokenError('invalid token'));
  }

  var header = decodedToken.header;
  var getSecret;

  if(typeof secretOrPublicKey === 'function') {
    if(!callback) {
      return done(new JsonWebTokenError('verify must be called asynchronous if secret or public key is provided as a callback'));
    }

    getSecret = secretOrPublicKey;
  }
  else {
    getSecret = function(header, secretCallback) {
      return secretCallback(null, secretOrPublicKey);
    };
  }

  return getSecret(header, function(err, secretOrPublicKey) {
    if(err) {
      return done(new JsonWebTokenError('error in secret or public key callback: ' + err.message));
    }

    var hasSignature = parts[2].trim() !== '';

    if (!hasSignature && secretOrPublicKey){
      return done(new JsonWebTokenError('jwt signature is required'));
    }

    if (hasSignature && !secretOrPublicKey) {
      return done(new JsonWebTokenError('secret or public key must be provided'));
    }

    if (!hasSignature && !options.algorithms) {
      options.algorithms = ['none'];
    }

    if (!options.algorithms) {
      options.algorithms = ~secretOrPublicKey.toString().indexOf('BEGIN CERTIFICATE') ||
        ~secretOrPublicKey.toString().indexOf('BEGIN PUBLIC KEY') ? PUB_KEY_ALGS :
        ~secretOrPublicKey.toString().indexOf('BEGIN RSA PUBLIC KEY') ? RSA_KEY_ALGS : HS_ALGS;

    }

    if (!~options.algorithms.indexOf(decodedToken.header.alg)) {
      return done(new JsonWebTokenError('invalid algorithm'));
    }

    var valid;

    try {
      valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey);
    } catch (e) {
      return done(e);
    }

    if (!valid) {
      return done(new JsonWebTokenError('invalid signature'));
    }

    var payload = decodedToken.payload;

    if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
      if (typeof payload.nbf !== 'number') {
        return done(new JsonWebTokenError('invalid nbf value'));
      }
      if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
        return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));
      }
    }

    if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
      if (typeof payload.exp !== 'number') {
        return done(new JsonWebTokenError('invalid exp value'));
      }
      if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));
      }
    }

    if (options.audience) {
      var audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
      var target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];

      var match = target.some(function (targetAudience) {
        return audiences.some(function (audience) {
          return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
        });
      });

      if (!match) {
        return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));
      }
    }

    if (options.issuer) {
      var invalid_issuer =
              (typeof options.issuer === 'string' && payload.iss !== options.issuer) ||
              (Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1);

      if (invalid_issuer) {
        return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));
      }
    }

    if (options.subject) {
      if (payload.sub !== options.subject) {
        return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));
      }
    }

    if (options.jwtid) {
      if (payload.jti !== options.jwtid) {
        return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));
      }
    }

    if (options.nonce) {
      if (payload.nonce !== options.nonce) {
        return done(new JsonWebTokenError('jwt nonce invalid. expected: ' + options.nonce));
      }
    }

    if (options.maxAge) {
      if (typeof payload.iat !== 'number') {
        return done(new JsonWebTokenError('iat required when maxAge is specified'));
      }

      var maxAgeTimestamp = timespan(options.maxAge, payload.iat);
      if (typeof maxAgeTimestamp === 'undefined') {
        return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
      if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));
      }
    }

    if (options.complete === true) {
      var signature = decodedToken.signature;

      return done(null, {
        header: header,
        payload: payload,
        signature: signature
      });
    }

    return done(null, payload);
  });
};


/***/ }),

/***/ 6287:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

/*
 * lib/jsprim.js: utilities for primitive JavaScript types
 */

var mod_assert = __nccwpck_require__(6631);
var mod_util = __nccwpck_require__(1669);

var mod_extsprintf = __nccwpck_require__(7264);
var mod_verror = __nccwpck_require__(1692);
var mod_jsonschema = __nccwpck_require__(1328);

/*
 * Public interface
 */
exports.deepCopy = deepCopy;
exports.deepEqual = deepEqual;
exports.isEmpty = isEmpty;
exports.hasKey = hasKey;
exports.forEachKey = forEachKey;
exports.pluck = pluck;
exports.flattenObject = flattenObject;
exports.flattenIter = flattenIter;
exports.validateJsonObject = validateJsonObjectJS;
exports.validateJsonObjectJS = validateJsonObjectJS;
exports.randElt = randElt;
exports.extraProperties = extraProperties;
exports.mergeObjects = mergeObjects;

exports.startsWith = startsWith;
exports.endsWith = endsWith;

exports.parseInteger = parseInteger;

exports.iso8601 = iso8601;
exports.rfc1123 = rfc1123;
exports.parseDateTime = parseDateTime;

exports.hrtimediff = hrtimeDiff;
exports.hrtimeDiff = hrtimeDiff;
exports.hrtimeAccum = hrtimeAccum;
exports.hrtimeAdd = hrtimeAdd;
exports.hrtimeNanosec = hrtimeNanosec;
exports.hrtimeMicrosec = hrtimeMicrosec;
exports.hrtimeMillisec = hrtimeMillisec;


/*
 * Deep copy an acyclic *basic* Javascript object.  This only handles basic
 * scalars (strings, numbers, booleans) and arbitrarily deep arrays and objects
 * containing these.  This does *not* handle instances of other classes.
 */
function deepCopy(obj)
{
	var ret, key;
	var marker = '__deepCopy';

	if (obj && obj[marker])
		throw (new Error('attempted deep copy of cyclic object'));

	if (obj && obj.constructor == Object) {
		ret = {};
		obj[marker] = true;

		for (key in obj) {
			if (key == marker)
				continue;

			ret[key] = deepCopy(obj[key]);
		}

		delete (obj[marker]);
		return (ret);
	}

	if (obj && obj.constructor == Array) {
		ret = [];
		obj[marker] = true;

		for (key = 0; key < obj.length; key++)
			ret.push(deepCopy(obj[key]));

		delete (obj[marker]);
		return (ret);
	}

	/*
	 * It must be a primitive type -- just return it.
	 */
	return (obj);
}

function deepEqual(obj1, obj2)
{
	if (typeof (obj1) != typeof (obj2))
		return (false);

	if (obj1 === null || obj2 === null || typeof (obj1) != 'object')
		return (obj1 === obj2);

	if (obj1.constructor != obj2.constructor)
		return (false);

	var k;
	for (k in obj1) {
		if (!obj2.hasOwnProperty(k))
			return (false);

		if (!deepEqual(obj1[k], obj2[k]))
			return (false);
	}

	for (k in obj2) {
		if (!obj1.hasOwnProperty(k))
			return (false);
	}

	return (true);
}

function isEmpty(obj)
{
	var key;
	for (key in obj)
		return (false);
	return (true);
}

function hasKey(obj, key)
{
	mod_assert.equal(typeof (key), 'string');
	return (Object.prototype.hasOwnProperty.call(obj, key));
}

function forEachKey(obj, callback)
{
	for (var key in obj) {
		if (hasKey(obj, key)) {
			callback(key, obj[key]);
		}
	}
}

function pluck(obj, key)
{
	mod_assert.equal(typeof (key), 'string');
	return (pluckv(obj, key));
}

function pluckv(obj, key)
{
	if (obj === null || typeof (obj) !== 'object')
		return (undefined);

	if (obj.hasOwnProperty(key))
		return (obj[key]);

	var i = key.indexOf('.');
	if (i == -1)
		return (undefined);

	var key1 = key.substr(0, i);
	if (!obj.hasOwnProperty(key1))
		return (undefined);

	return (pluckv(obj[key1], key.substr(i + 1)));
}

/*
 * Invoke callback(row) for each entry in the array that would be returned by
 * flattenObject(data, depth).  This is just like flattenObject(data,
 * depth).forEach(callback), except that the intermediate array is never
 * created.
 */
function flattenIter(data, depth, callback)
{
	doFlattenIter(data, depth, [], callback);
}

function doFlattenIter(data, depth, accum, callback)
{
	var each;
	var key;

	if (depth === 0) {
		each = accum.slice(0);
		each.push(data);
		callback(each);
		return;
	}

	mod_assert.ok(data !== null);
	mod_assert.equal(typeof (data), 'object');
	mod_assert.equal(typeof (depth), 'number');
	mod_assert.ok(depth >= 0);

	for (key in data) {
		each = accum.slice(0);
		each.push(key);
		doFlattenIter(data[key], depth - 1, each, callback);
	}
}

function flattenObject(data, depth)
{
	if (depth === 0)
		return ([ data ]);

	mod_assert.ok(data !== null);
	mod_assert.equal(typeof (data), 'object');
	mod_assert.equal(typeof (depth), 'number');
	mod_assert.ok(depth >= 0);

	var rv = [];
	var key;

	for (key in data) {
		flattenObject(data[key], depth - 1).forEach(function (p) {
			rv.push([ key ].concat(p));
		});
	}

	return (rv);
}

function startsWith(str, prefix)
{
	return (str.substr(0, prefix.length) == prefix);
}

function endsWith(str, suffix)
{
	return (str.substr(
	    str.length - suffix.length, suffix.length) == suffix);
}

function iso8601(d)
{
	if (typeof (d) == 'number')
		d = new Date(d);
	mod_assert.ok(d.constructor === Date);
	return (mod_extsprintf.sprintf('%4d-%02d-%02dT%02d:%02d:%02d.%03dZ',
	    d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate(),
	    d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(),
	    d.getUTCMilliseconds()));
}

var RFC1123_MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var RFC1123_DAYS = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function rfc1123(date) {
	return (mod_extsprintf.sprintf('%s, %02d %s %04d %02d:%02d:%02d GMT',
	    RFC1123_DAYS[date.getUTCDay()], date.getUTCDate(),
	    RFC1123_MONTHS[date.getUTCMonth()], date.getUTCFullYear(),
	    date.getUTCHours(), date.getUTCMinutes(),
	    date.getUTCSeconds()));
}

/*
 * Parses a date expressed as a string, as either a number of milliseconds since
 * the epoch or any string format that Date accepts, giving preference to the
 * former where these two sets overlap (e.g., small numbers).
 */
function parseDateTime(str)
{
	/*
	 * This is irritatingly implicit, but significantly more concise than
	 * alternatives.  The "+str" will convert a string containing only a
	 * number directly to a Number, or NaN for other strings.  Thus, if the
	 * conversion succeeds, we use it (this is the milliseconds-since-epoch
	 * case).  Otherwise, we pass the string directly to the Date
	 * constructor to parse.
	 */
	var numeric = +str;
	if (!isNaN(numeric)) {
		return (new Date(numeric));
	} else {
		return (new Date(str));
	}
}


/*
 * Number.*_SAFE_INTEGER isn't present before node v0.12, so we hardcode
 * the ES6 definitions here, while allowing for them to someday be higher.
 */
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;


/*
 * Default options for parseInteger().
 */
var PI_DEFAULTS = {
	base: 10,
	allowSign: true,
	allowPrefix: false,
	allowTrailing: false,
	allowImprecise: false,
	trimWhitespace: false,
	leadingZeroIsOctal: false
};

var CP_0 = 0x30;
var CP_9 = 0x39;

var CP_A = 0x41;
var CP_B = 0x42;
var CP_O = 0x4f;
var CP_T = 0x54;
var CP_X = 0x58;
var CP_Z = 0x5a;

var CP_a = 0x61;
var CP_b = 0x62;
var CP_o = 0x6f;
var CP_t = 0x74;
var CP_x = 0x78;
var CP_z = 0x7a;

var PI_CONV_DEC = 0x30;
var PI_CONV_UC = 0x37;
var PI_CONV_LC = 0x57;


/*
 * A stricter version of parseInt() that provides options for changing what
 * is an acceptable string (for example, disallowing trailing characters).
 */
function parseInteger(str, uopts)
{
	mod_assert.string(str, 'str');
	mod_assert.optionalObject(uopts, 'options');

	var baseOverride = false;
	var options = PI_DEFAULTS;

	if (uopts) {
		baseOverride = hasKey(uopts, 'base');
		options = mergeObjects(options, uopts);
		mod_assert.number(options.base, 'options.base');
		mod_assert.ok(options.base >= 2, 'options.base >= 2');
		mod_assert.ok(options.base <= 36, 'options.base <= 36');
		mod_assert.bool(options.allowSign, 'options.allowSign');
		mod_assert.bool(options.allowPrefix, 'options.allowPrefix');
		mod_assert.bool(options.allowTrailing,
		    'options.allowTrailing');
		mod_assert.bool(options.allowImprecise,
		    'options.allowImprecise');
		mod_assert.bool(options.trimWhitespace,
		    'options.trimWhitespace');
		mod_assert.bool(options.leadingZeroIsOctal,
		    'options.leadingZeroIsOctal');

		if (options.leadingZeroIsOctal) {
			mod_assert.ok(!baseOverride,
			    '"base" and "leadingZeroIsOctal" are ' +
			    'mutually exclusive');
		}
	}

	var c;
	var pbase = -1;
	var base = options.base;
	var start;
	var mult = 1;
	var value = 0;
	var idx = 0;
	var len = str.length;

	/* Trim any whitespace on the left side. */
	if (options.trimWhitespace) {
		while (idx < len && isSpace(str.charCodeAt(idx))) {
			++idx;
		}
	}

	/* Check the number for a leading sign. */
	if (options.allowSign) {
		if (str[idx] === '-') {
			idx += 1;
			mult = -1;
		} else if (str[idx] === '+') {
			idx += 1;
		}
	}

	/* Parse the base-indicating prefix if there is one. */
	if (str[idx] === '0') {
		if (options.allowPrefix) {
			pbase = prefixToBase(str.charCodeAt(idx + 1));
			if (pbase !== -1 && (!baseOverride || pbase === base)) {
				base = pbase;
				idx += 2;
			}
		}

		if (pbase === -1 && options.leadingZeroIsOctal) {
			base = 8;
		}
	}

	/* Parse the actual digits. */
	for (start = idx; idx < len; ++idx) {
		c = translateDigit(str.charCodeAt(idx));
		if (c !== -1 && c < base) {
			value *= base;
			value += c;
		} else {
			break;
		}
	}

	/* If we didn't parse any digits, we have an invalid number. */
	if (start === idx) {
		return (new Error('invalid number: ' + JSON.stringify(str)));
	}

	/* Trim any whitespace on the right side. */
	if (options.trimWhitespace) {
		while (idx < len && isSpace(str.charCodeAt(idx))) {
			++idx;
		}
	}

	/* Check for trailing characters. */
	if (idx < len && !options.allowTrailing) {
		return (new Error('trailing characters after number: ' +
		    JSON.stringify(str.slice(idx))));
	}

	/* If our value is 0, we return now, to avoid returning -0. */
	if (value === 0) {
		return (0);
	}

	/* Calculate our final value. */
	var result = value * mult;

	/*
	 * If the string represents a value that cannot be precisely represented
	 * by JavaScript, then we want to check that:
	 *
	 * - We never increased the value past MAX_SAFE_INTEGER
	 * - We don't make the result negative and below MIN_SAFE_INTEGER
	 *
	 * Because we only ever increment the value during parsing, there's no
	 * chance of moving past MAX_SAFE_INTEGER and then dropping below it
	 * again, losing precision in the process. This means that we only need
	 * to do our checks here, at the end.
	 */
	if (!options.allowImprecise &&
	    (value > MAX_SAFE_INTEGER || result < MIN_SAFE_INTEGER)) {
		return (new Error('number is outside of the supported range: ' +
		    JSON.stringify(str.slice(start, idx))));
	}

	return (result);
}


/*
 * Interpret a character code as a base-36 digit.
 */
function translateDigit(d)
{
	if (d >= CP_0 && d <= CP_9) {
		/* '0' to '9' -> 0 to 9 */
		return (d - PI_CONV_DEC);
	} else if (d >= CP_A && d <= CP_Z) {
		/* 'A' - 'Z' -> 10 to 35 */
		return (d - PI_CONV_UC);
	} else if (d >= CP_a && d <= CP_z) {
		/* 'a' - 'z' -> 10 to 35 */
		return (d - PI_CONV_LC);
	} else {
		/* Invalid character code */
		return (-1);
	}
}


/*
 * Test if a value matches the ECMAScript definition of trimmable whitespace.
 */
function isSpace(c)
{
	return (c === 0x20) ||
	    (c >= 0x0009 && c <= 0x000d) ||
	    (c === 0x00a0) ||
	    (c === 0x1680) ||
	    (c === 0x180e) ||
	    (c >= 0x2000 && c <= 0x200a) ||
	    (c === 0x2028) ||
	    (c === 0x2029) ||
	    (c === 0x202f) ||
	    (c === 0x205f) ||
	    (c === 0x3000) ||
	    (c === 0xfeff);
}


/*
 * Determine which base a character indicates (e.g., 'x' indicates hex).
 */
function prefixToBase(c)
{
	if (c === CP_b || c === CP_B) {
		/* 0b/0B (binary) */
		return (2);
	} else if (c === CP_o || c === CP_O) {
		/* 0o/0O (octal) */
		return (8);
	} else if (c === CP_t || c === CP_T) {
		/* 0t/0T (decimal) */
		return (10);
	} else if (c === CP_x || c === CP_X) {
		/* 0x/0X (hexadecimal) */
		return (16);
	} else {
		/* Not a meaningful character */
		return (-1);
	}
}


function validateJsonObjectJS(schema, input)
{
	var report = mod_jsonschema.validate(input, schema);

	if (report.errors.length === 0)
		return (null);

	/* Currently, we only do anything useful with the first error. */
	var error = report.errors[0];

	/* The failed property is given by a URI with an irrelevant prefix. */
	var propname = error['property'];
	var reason = error['message'].toLowerCase();
	var i, j;

	/*
	 * There's at least one case where the property error message is
	 * confusing at best.  We work around this here.
	 */
	if ((i = reason.indexOf('the property ')) != -1 &&
	    (j = reason.indexOf(' is not defined in the schema and the ' +
	    'schema does not allow additional properties')) != -1) {
		i += 'the property '.length;
		if (propname === '')
			propname = reason.substr(i, j - i);
		else
			propname = propname + '.' + reason.substr(i, j - i);

		reason = 'unsupported property';
	}

	var rv = new mod_verror.VError('property "%s": %s', propname, reason);
	rv.jsv_details = error;
	return (rv);
}

function randElt(arr)
{
	mod_assert.ok(Array.isArray(arr) && arr.length > 0,
	    'randElt argument must be a non-empty array');

	return (arr[Math.floor(Math.random() * arr.length)]);
}

function assertHrtime(a)
{
	mod_assert.ok(a[0] >= 0 && a[1] >= 0,
	    'negative numbers not allowed in hrtimes');
	mod_assert.ok(a[1] < 1e9, 'nanoseconds column overflow');
}

/*
 * Compute the time elapsed between hrtime readings A and B, where A is later
 * than B.  hrtime readings come from Node's process.hrtime().  There is no
 * defined way to represent negative deltas, so it's illegal to diff B from A
 * where the time denoted by B is later than the time denoted by A.  If this
 * becomes valuable, we can define a representation and extend the
 * implementation to support it.
 */
function hrtimeDiff(a, b)
{
	assertHrtime(a);
	assertHrtime(b);
	mod_assert.ok(a[0] > b[0] || (a[0] == b[0] && a[1] >= b[1]),
	    'negative differences not allowed');

	var rv = [ a[0] - b[0], 0 ];

	if (a[1] >= b[1]) {
		rv[1] = a[1] - b[1];
	} else {
		rv[0]--;
		rv[1] = 1e9 - (b[1] - a[1]);
	}

	return (rv);
}

/*
 * Convert a hrtime reading from the array format returned by Node's
 * process.hrtime() into a scalar number of nanoseconds.
 */
function hrtimeNanosec(a)
{
	assertHrtime(a);

	return (Math.floor(a[0] * 1e9 + a[1]));
}

/*
 * Convert a hrtime reading from the array format returned by Node's
 * process.hrtime() into a scalar number of microseconds.
 */
function hrtimeMicrosec(a)
{
	assertHrtime(a);

	return (Math.floor(a[0] * 1e6 + a[1] / 1e3));
}

/*
 * Convert a hrtime reading from the array format returned by Node's
 * process.hrtime() into a scalar number of milliseconds.
 */
function hrtimeMillisec(a)
{
	assertHrtime(a);

	return (Math.floor(a[0] * 1e3 + a[1] / 1e6));
}

/*
 * Add two hrtime readings A and B, overwriting A with the result of the
 * addition.  This function is useful for accumulating several hrtime intervals
 * into a counter.  Returns A.
 */
function hrtimeAccum(a, b)
{
	assertHrtime(a);
	assertHrtime(b);

	/*
	 * Accumulate the nanosecond component.
	 */
	a[1] += b[1];
	if (a[1] >= 1e9) {
		/*
		 * The nanosecond component overflowed, so carry to the seconds
		 * field.
		 */
		a[0]++;
		a[1] -= 1e9;
	}

	/*
	 * Accumulate the seconds component.
	 */
	a[0] += b[0];

	return (a);
}

/*
 * Add two hrtime readings A and B, returning the result as a new hrtime array.
 * Does not modify either input argument.
 */
function hrtimeAdd(a, b)
{
	assertHrtime(a);

	var rv = [ a[0], a[1] ];

	return (hrtimeAccum(rv, b));
}


/*
 * Check an object for unexpected properties.  Accepts the object to check, and
 * an array of allowed property names (strings).  Returns an array of key names
 * that were found on the object, but did not appear in the list of allowed
 * properties.  If no properties were found, the returned array will be of
 * zero length.
 */
function extraProperties(obj, allowed)
{
	mod_assert.ok(typeof (obj) === 'object' && obj !== null,
	    'obj argument must be a non-null object');
	mod_assert.ok(Array.isArray(allowed),
	    'allowed argument must be an array of strings');
	for (var i = 0; i < allowed.length; i++) {
		mod_assert.ok(typeof (allowed[i]) === 'string',
		    'allowed argument must be an array of strings');
	}

	return (Object.keys(obj).filter(function (key) {
		return (allowed.indexOf(key) === -1);
	}));
}

/*
 * Given three sets of properties "provided" (may be undefined), "overrides"
 * (required), and "defaults" (may be undefined), construct an object containing
 * the union of these sets with "overrides" overriding "provided", and
 * "provided" overriding "defaults".  None of the input objects are modified.
 */
function mergeObjects(provided, overrides, defaults)
{
	var rv, k;

	rv = {};
	if (defaults) {
		for (k in defaults)
			rv[k] = defaults[k];
	}

	if (provided) {
		for (k in provided)
			rv[k] = provided[k];
	}

	if (overrides) {
		for (k in overrides)
			rv[k] = overrides[k];
	}

	return (rv);
}


/***/ }),

/***/ 7656:
/***/ (function(module, exports) {

"use strict";
/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright 2008-2020 Brian Turek, 1998-2009 Paul Johnston & Contributors
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information
*/
(function(aa){function C(d,b,a){var h=0,k=[],l=0,g,m,c,f,n,q,u,r,I=!1,v=[],x=[],t,y=!1,z=!1,w=-1;a=a||{};g=a.encoding||"UTF8";t=a.numRounds||1;if(t!==parseInt(t,10)||1>t)throw Error("numRounds must a integer >= 1");if("SHA-1"===d)n=512,q=K,u=ba,f=160,r=function(b){return b.slice()};else if(0===d.lastIndexOf("SHA-",0))if(q=function(b,h){return L(b,h,d)},u=function(b,h,k,a){var e,f;if("SHA-224"===d||"SHA-256"===d)e=(h+65>>>9<<4)+15,f=16;else if("SHA-384"===d||"SHA-512"===d)e=(h+129>>>10<<
5)+31,f=32;else throw Error("Unexpected error in SHA-2 implementation");for(;b.length<=e;)b.push(0);b[h>>>5]|=128<<24-h%32;h=h+k;b[e]=h&4294967295;b[e-1]=h/4294967296|0;k=b.length;for(h=0;h<k;h+=f)a=L(b.slice(h,h+f),a,d);if("SHA-224"===d)b=[a[0],a[1],a[2],a[3],a[4],a[5],a[6]];else if("SHA-256"===d)b=a;else if("SHA-384"===d)b=[a[0].a,a[0].b,a[1].a,a[1].b,a[2].a,a[2].b,a[3].a,a[3].b,a[4].a,a[4].b,a[5].a,a[5].b];else if("SHA-512"===d)b=[a[0].a,a[0].b,a[1].a,a[1].b,a[2].a,a[2].b,a[3].a,a[3].b,a[4].a,
a[4].b,a[5].a,a[5].b,a[6].a,a[6].b,a[7].a,a[7].b];else throw Error("Unexpected error in SHA-2 implementation");return b},r=function(b){return b.slice()},"SHA-224"===d)n=512,f=224;else if("SHA-256"===d)n=512,f=256;else if("SHA-384"===d)n=1024,f=384;else if("SHA-512"===d)n=1024,f=512;else throw Error("Chosen SHA variant is not supported");else if(0===d.lastIndexOf("SHA3-",0)||0===d.lastIndexOf("SHAKE",0)){var F=6;q=D;r=function(b){var d=[],a;for(a=0;5>a;a+=1)d[a]=b[a].slice();return d};w=1;if("SHA3-224"===
d)n=1152,f=224;else if("SHA3-256"===d)n=1088,f=256;else if("SHA3-384"===d)n=832,f=384;else if("SHA3-512"===d)n=576,f=512;else if("SHAKE128"===d)n=1344,f=-1,F=31,z=!0;else if("SHAKE256"===d)n=1088,f=-1,F=31,z=!0;else throw Error("Chosen SHA variant is not supported");u=function(b,d,a,h,k){a=n;var e=F,f,g=[],l=a>>>5,m=0,c=d>>>5;for(f=0;f<c&&d>=a;f+=l)h=D(b.slice(f,f+l),h),d-=a;b=b.slice(f);for(d%=a;b.length<l;)b.push(0);f=d>>>3;b[f>>2]^=e<<f%4*8;b[l-1]^=2147483648;for(h=D(b,h);32*g.length<k;){b=h[m%
5][m/5|0];g.push(b.b);if(32*g.length>=k)break;g.push(b.a);m+=1;0===64*m%a&&D(null,h)}return g}}else throw Error("Chosen SHA variant is not supported");c=M(b,g,w);m=A(d);this.setHMACKey=function(b,a,k){var e;if(!0===I)throw Error("HMAC key already set");if(!0===y)throw Error("Cannot set HMAC key after calling update");if(!0===z)throw Error("SHAKE is not supported for HMAC");g=(k||{}).encoding||"UTF8";a=M(a,g,w)(b);b=a.binLen;a=a.value;e=n>>>3;k=e/4-1;for(e<b/8&&(a=u(a,b,0,A(d),f));a.length<=k;)a.push(0);
for(b=0;b<=k;b+=1)v[b]=a[b]^909522486,x[b]=a[b]^1549556828;m=q(v,m);h=n;I=!0};this.update=function(b){var d,a,e,f=0,g=n>>>5;d=c(b,k,l);b=d.binLen;a=d.value;d=b>>>5;for(e=0;e<d;e+=g)f+n<=b&&(m=q(a.slice(e,e+g),m),f+=n);h+=f;k=a.slice(f>>>5);l=b%n;y=!0};this.getHash=function(b,a){var e,g,c,n;if(!0===I)throw Error("Cannot call getHash after setting HMAC key");c=N(a);if(!0===z){if(-1===c.shakeLen)throw Error("shakeLen must be specified in options");f=c.shakeLen}switch(b){case "HEX":e=function(b){return O(b,
f,w,c)};break;case "B64":e=function(b){return P(b,f,w,c)};break;case "BYTES":e=function(b){return Q(b,f,w)};break;case "ARRAYBUFFER":try{g=new ArrayBuffer(0)}catch(p){throw Error("ARRAYBUFFER not supported by this environment");}e=function(b){return R(b,f,w)};break;case "UINT8ARRAY":try{g=new Uint8Array(0)}catch(p){throw Error("UINT8ARRAY not supported by this environment");}e=function(b){return S(b,f,w)};break;default:throw Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");}n=u(k.slice(),
l,h,r(m),f);for(g=1;g<t;g+=1)!0===z&&0!==f%32&&(n[n.length-1]&=16777215>>>24-f%32),n=u(n,f,0,A(d),f);return e(n)};this.getHMAC=function(b,a){var e,g,c,p;if(!1===I)throw Error("Cannot call getHMAC without first setting HMAC key");c=N(a);switch(b){case "HEX":e=function(b){return O(b,f,w,c)};break;case "B64":e=function(b){return P(b,f,w,c)};break;case "BYTES":e=function(b){return Q(b,f,w)};break;case "ARRAYBUFFER":try{e=new ArrayBuffer(0)}catch(v){throw Error("ARRAYBUFFER not supported by this environment");
}e=function(b){return R(b,f,w)};break;case "UINT8ARRAY":try{e=new Uint8Array(0)}catch(v){throw Error("UINT8ARRAY not supported by this environment");}e=function(b){return S(b,f,w)};break;default:throw Error("outputFormat must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");}g=u(k.slice(),l,h,r(m),f);p=q(x,A(d));p=u(g,f,n,p,f);return e(p)}}function a(d,b){this.a=d;this.b=b}function T(d,b,a,h){var k,l,g,c,p;b=b||[0];a=a||0;l=a>>>3;p=-1===h?3:0;for(k=0;k<d.length;k+=1)c=k+l,g=c>>>2,b.length<=g&&b.push(0),
b[g]|=d[k]<<8*(p+c%4*h);return{value:b,binLen:8*d.length+a}}function O(a,b,e,h){var k="";b/=8;var l,g,c;c=-1===e?3:0;for(l=0;l<b;l+=1)g=a[l>>>2]>>>8*(c+l%4*e),k+="0123456789abcdef".charAt(g>>>4&15)+"0123456789abcdef".charAt(g&15);return h.outputUpper?k.toUpperCase():k}function P(a,b,e,h){var k="",l=b/8,g,c,p,f;f=-1===e?3:0;for(g=0;g<l;g+=3)for(c=g+1<l?a[g+1>>>2]:0,p=g+2<l?a[g+2>>>2]:0,p=(a[g>>>2]>>>8*(f+g%4*e)&255)<<16|(c>>>8*(f+(g+1)%4*e)&255)<<8|p>>>8*(f+(g+2)%4*e)&255,c=0;4>c;c+=1)8*g+6*c<=b?k+=
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(p>>>6*(3-c)&63):k+=h.b64Pad;return k}function Q(a,b,e){var h="";b/=8;var k,c,g;g=-1===e?3:0;for(k=0;k<b;k+=1)c=a[k>>>2]>>>8*(g+k%4*e)&255,h+=String.fromCharCode(c);return h}function R(a,b,e){b/=8;var h,k=new ArrayBuffer(b),c,g;g=new Uint8Array(k);c=-1===e?3:0;for(h=0;h<b;h+=1)g[h]=a[h>>>2]>>>8*(c+h%4*e)&255;return k}function S(a,b,e){b/=8;var h,k=new Uint8Array(b),c;c=-1===e?3:0;for(h=0;h<b;h+=1)k[h]=a[h>>>2]>>>8*(c+h%4*e)&
255;return k}function N(a){var b={outputUpper:!1,b64Pad:"=",shakeLen:-1};a=a||{};b.outputUpper=a.outputUpper||!1;!0===a.hasOwnProperty("b64Pad")&&(b.b64Pad=a.b64Pad);if(!0===a.hasOwnProperty("shakeLen")){if(0!==a.shakeLen%8)throw Error("shakeLen must be a multiple of 8");b.shakeLen=a.shakeLen}if("boolean"!==typeof b.outputUpper)throw Error("Invalid outputUpper formatting option");if("string"!==typeof b.b64Pad)throw Error("Invalid b64Pad formatting option");return b}function M(a,b,e){switch(b){case "UTF8":case "UTF16BE":case "UTF16LE":break;
default:throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");}switch(a){case "HEX":a=function(b,a,d){var g=b.length,c,p,f,n,q,u;if(0!==g%2)throw Error("String of HEX type must be in byte increments");a=a||[0];d=d||0;q=d>>>3;u=-1===e?3:0;for(c=0;c<g;c+=2){p=parseInt(b.substr(c,2),16);if(isNaN(p))throw Error("String of HEX type contains invalid characters");n=(c>>>1)+q;for(f=n>>>2;a.length<=f;)a.push(0);a[f]|=p<<8*(u+n%4*e)}return{value:a,binLen:4*g+d}};break;case "TEXT":a=function(a,d,c){var g,
m,p=0,f,n,q,u,r,t;d=d||[0];c=c||0;q=c>>>3;if("UTF8"===b)for(t=-1===e?3:0,f=0;f<a.length;f+=1)for(g=a.charCodeAt(f),m=[],128>g?m.push(g):2048>g?(m.push(192|g>>>6),m.push(128|g&63)):55296>g||57344<=g?m.push(224|g>>>12,128|g>>>6&63,128|g&63):(f+=1,g=65536+((g&1023)<<10|a.charCodeAt(f)&1023),m.push(240|g>>>18,128|g>>>12&63,128|g>>>6&63,128|g&63)),n=0;n<m.length;n+=1){r=p+q;for(u=r>>>2;d.length<=u;)d.push(0);d[u]|=m[n]<<8*(t+r%4*e);p+=1}else if("UTF16BE"===b||"UTF16LE"===b)for(t=-1===e?2:0,m="UTF16LE"===
b&&1!==e||"UTF16LE"!==b&&1===e,f=0;f<a.length;f+=1){g=a.charCodeAt(f);!0===m&&(n=g&255,g=n<<8|g>>>8);r=p+q;for(u=r>>>2;d.length<=u;)d.push(0);d[u]|=g<<8*(t+r%4*e);p+=2}return{value:d,binLen:8*p+c}};break;case "B64":a=function(b,a,d){var c=0,m,p,f,n,q,u,r,t;if(-1===b.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");p=b.indexOf("=");b=b.replace(/\=/g,"");if(-1!==p&&p<b.length)throw Error("Invalid '=' found in base-64 string");a=a||[0];d=d||0;u=d>>>3;t=-1===e?3:0;for(p=
0;p<b.length;p+=4){q=b.substr(p,4);for(f=n=0;f<q.length;f+=1)m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(q.charAt(f)),n|=m<<18-6*f;for(f=0;f<q.length-1;f+=1){r=c+u;for(m=r>>>2;a.length<=m;)a.push(0);a[m]|=(n>>>16-8*f&255)<<8*(t+r%4*e);c+=1}}return{value:a,binLen:8*c+d}};break;case "BYTES":a=function(b,a,d){var c,m,p,f,n,q;a=a||[0];d=d||0;p=d>>>3;q=-1===e?3:0;for(m=0;m<b.length;m+=1)c=b.charCodeAt(m),n=m+p,f=n>>>2,a.length<=f&&a.push(0),a[f]|=c<<8*(q+n%4*e);return{value:a,
binLen:8*b.length+d}};break;case "ARRAYBUFFER":try{a=new ArrayBuffer(0)}catch(h){throw Error("ARRAYBUFFER not supported by this environment");}a=function(b,a,d){return T(new Uint8Array(b),a,d,e)};break;case "UINT8ARRAY":try{a=new Uint8Array(0)}catch(h){throw Error("UINT8ARRAY not supported by this environment");}a=function(b,a,d){return T(b,a,d,e)};break;default:throw Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");}return a}function y(a,b){return a<<b|a>>>32-b}function U(d,
b){return 32<b?(b-=32,new a(d.b<<b|d.a>>>32-b,d.a<<b|d.b>>>32-b)):0!==b?new a(d.a<<b|d.b>>>32-b,d.b<<b|d.a>>>32-b):d}function x(a,b){return a>>>b|a<<32-b}function t(d,b){var e=null,e=new a(d.a,d.b);return e=32>=b?new a(e.a>>>b|e.b<<32-b&4294967295,e.b>>>b|e.a<<32-b&4294967295):new a(e.b>>>b-32|e.a<<64-b&4294967295,e.a>>>b-32|e.b<<64-b&4294967295)}function V(d,b){var e=null;return e=32>=b?new a(d.a>>>b,d.b>>>b|d.a<<32-b&4294967295):new a(0,d.a>>>b-32)}function ca(a,b,e){return a&b^~a&e}function da(d,
b,e){return new a(d.a&b.a^~d.a&e.a,d.b&b.b^~d.b&e.b)}function W(a,b,e){return a&b^a&e^b&e}function ea(d,b,e){return new a(d.a&b.a^d.a&e.a^b.a&e.a,d.b&b.b^d.b&e.b^b.b&e.b)}function fa(a){return x(a,2)^x(a,13)^x(a,22)}function ga(d){var b=t(d,28),e=t(d,34);d=t(d,39);return new a(b.a^e.a^d.a,b.b^e.b^d.b)}function ha(a){return x(a,6)^x(a,11)^x(a,25)}function ia(d){var b=t(d,14),e=t(d,18);d=t(d,41);return new a(b.a^e.a^d.a,b.b^e.b^d.b)}function ja(a){return x(a,7)^x(a,18)^a>>>3}function ka(d){var b=t(d,
1),e=t(d,8);d=V(d,7);return new a(b.a^e.a^d.a,b.b^e.b^d.b)}function la(a){return x(a,17)^x(a,19)^a>>>10}function ma(d){var b=t(d,19),e=t(d,61);d=V(d,6);return new a(b.a^e.a^d.a,b.b^e.b^d.b)}function G(a,b){var e=(a&65535)+(b&65535);return((a>>>16)+(b>>>16)+(e>>>16)&65535)<<16|e&65535}function na(a,b,e,h){var c=(a&65535)+(b&65535)+(e&65535)+(h&65535);return((a>>>16)+(b>>>16)+(e>>>16)+(h>>>16)+(c>>>16)&65535)<<16|c&65535}function H(a,b,e,h,c){var l=(a&65535)+(b&65535)+(e&65535)+(h&65535)+(c&65535);
return((a>>>16)+(b>>>16)+(e>>>16)+(h>>>16)+(c>>>16)+(l>>>16)&65535)<<16|l&65535}function oa(d,b){var e,h,c;e=(d.b&65535)+(b.b&65535);h=(d.b>>>16)+(b.b>>>16)+(e>>>16);c=(h&65535)<<16|e&65535;e=(d.a&65535)+(b.a&65535)+(h>>>16);h=(d.a>>>16)+(b.a>>>16)+(e>>>16);return new a((h&65535)<<16|e&65535,c)}function pa(d,b,e,h){var c,l,g;c=(d.b&65535)+(b.b&65535)+(e.b&65535)+(h.b&65535);l=(d.b>>>16)+(b.b>>>16)+(e.b>>>16)+(h.b>>>16)+(c>>>16);g=(l&65535)<<16|c&65535;c=(d.a&65535)+(b.a&65535)+(e.a&65535)+(h.a&65535)+
(l>>>16);l=(d.a>>>16)+(b.a>>>16)+(e.a>>>16)+(h.a>>>16)+(c>>>16);return new a((l&65535)<<16|c&65535,g)}function qa(d,b,e,h,c){var l,g,m;l=(d.b&65535)+(b.b&65535)+(e.b&65535)+(h.b&65535)+(c.b&65535);g=(d.b>>>16)+(b.b>>>16)+(e.b>>>16)+(h.b>>>16)+(c.b>>>16)+(l>>>16);m=(g&65535)<<16|l&65535;l=(d.a&65535)+(b.a&65535)+(e.a&65535)+(h.a&65535)+(c.a&65535)+(g>>>16);g=(d.a>>>16)+(b.a>>>16)+(e.a>>>16)+(h.a>>>16)+(c.a>>>16)+(l>>>16);return new a((g&65535)<<16|l&65535,m)}function B(d,b){return new a(d.a^b.a,d.b^
b.b)}function A(d){var b=[],e;if("SHA-1"===d)b=[1732584193,4023233417,2562383102,271733878,3285377520];else if(0===d.lastIndexOf("SHA-",0))switch(b=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],e=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],d){case "SHA-224":break;case "SHA-256":b=e;break;case "SHA-384":b=[new a(3418070365,b[0]),new a(1654270250,b[1]),new a(2438529370,b[2]),new a(355462360,b[3]),new a(1731405415,
b[4]),new a(41048885895,b[5]),new a(3675008525,b[6]),new a(1203062813,b[7])];break;case "SHA-512":b=[new a(e[0],4089235720),new a(e[1],2227873595),new a(e[2],4271175723),new a(e[3],1595750129),new a(e[4],2917565137),new a(e[5],725511199),new a(e[6],4215389547),new a(e[7],327033209)];break;default:throw Error("Unknown SHA variant");}else if(0===d.lastIndexOf("SHA3-",0)||0===d.lastIndexOf("SHAKE",0))for(d=0;5>d;d+=1)b[d]=[new a(0,0),new a(0,0),new a(0,0),new a(0,0),new a(0,0)];else throw Error("No SHA variants supported");
return b}function K(a,b){var e=[],h,c,l,g,m,p,f;h=b[0];c=b[1];l=b[2];g=b[3];m=b[4];for(f=0;80>f;f+=1)e[f]=16>f?a[f]:y(e[f-3]^e[f-8]^e[f-14]^e[f-16],1),p=20>f?H(y(h,5),c&l^~c&g,m,1518500249,e[f]):40>f?H(y(h,5),c^l^g,m,1859775393,e[f]):60>f?H(y(h,5),W(c,l,g),m,2400959708,e[f]):H(y(h,5),c^l^g,m,3395469782,e[f]),m=g,g=l,l=y(c,30),c=h,h=p;b[0]=G(h,b[0]);b[1]=G(c,b[1]);b[2]=G(l,b[2]);b[3]=G(g,b[3]);b[4]=G(m,b[4]);return b}function ba(a,b,e,c){var k;for(k=(b+65>>>9<<4)+15;a.length<=k;)a.push(0);a[b>>>5]|=
128<<24-b%32;b+=e;a[k]=b&4294967295;a[k-1]=b/4294967296|0;b=a.length;for(k=0;k<b;k+=16)c=K(a.slice(k,k+16),c);return c}function L(d,b,e){var h,k,l,g,m,p,f,n,q,u,r,t,v,x,y,A,z,w,F,B,C,D,E=[],J;if("SHA-224"===e||"SHA-256"===e)u=64,t=1,D=Number,v=G,x=na,y=H,A=ja,z=la,w=fa,F=ha,C=W,B=ca,J=c;else if("SHA-384"===e||"SHA-512"===e)u=80,t=2,D=a,v=oa,x=pa,y=qa,A=ka,z=ma,w=ga,F=ia,C=ea,B=da,J=X;else throw Error("Unexpected error in SHA-2 implementation");e=b[0];h=b[1];k=b[2];l=b[3];g=b[4];m=b[5];p=b[6];f=b[7];
for(r=0;r<u;r+=1)16>r?(q=r*t,n=d.length<=q?0:d[q],q=d.length<=q+1?0:d[q+1],E[r]=new D(n,q)):E[r]=x(z(E[r-2]),E[r-7],A(E[r-15]),E[r-16]),n=y(f,F(g),B(g,m,p),J[r],E[r]),q=v(w(e),C(e,h,k)),f=p,p=m,m=g,g=v(l,n),l=k,k=h,h=e,e=v(n,q);b[0]=v(e,b[0]);b[1]=v(h,b[1]);b[2]=v(k,b[2]);b[3]=v(l,b[3]);b[4]=v(g,b[4]);b[5]=v(m,b[5]);b[6]=v(p,b[6]);b[7]=v(f,b[7]);return b}function D(d,b){var e,c,k,l,g=[],m=[];if(null!==d)for(c=0;c<d.length;c+=2)b[(c>>>1)%5][(c>>>1)/5|0]=B(b[(c>>>1)%5][(c>>>1)/5|0],new a(d[c+1],d[c]));
for(e=0;24>e;e+=1){l=A("SHA3-");for(c=0;5>c;c+=1){k=b[c][0];var p=b[c][1],f=b[c][2],n=b[c][3],q=b[c][4];g[c]=new a(k.a^p.a^f.a^n.a^q.a,k.b^p.b^f.b^n.b^q.b)}for(c=0;5>c;c+=1)m[c]=B(g[(c+4)%5],U(g[(c+1)%5],1));for(c=0;5>c;c+=1)for(k=0;5>k;k+=1)b[c][k]=B(b[c][k],m[c]);for(c=0;5>c;c+=1)for(k=0;5>k;k+=1)l[k][(2*c+3*k)%5]=U(b[c][k],Y[c][k]);for(c=0;5>c;c+=1)for(k=0;5>k;k+=1)b[c][k]=B(l[c][k],new a(~l[(c+1)%5][k].a&l[(c+2)%5][k].a,~l[(c+1)%5][k].b&l[(c+2)%5][k].b));b[0][0]=B(b[0][0],Z[e])}return b}var c,
X,Y,Z;c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];X=[new a(c[0],3609767458),new a(c[1],602891725),new a(c[2],3964484399),new a(c[3],2173295548),new a(c[4],4081628472),new a(c[5],3053834265),new a(c[6],2937671579),new a(c[7],3664609560),new a(c[8],2734883394),new a(c[9],1164996542),new a(c[10],1323610764),new a(c[11],3590304994),new a(c[12],4068182383),new a(c[13],
991336113),new a(c[14],633803317),new a(c[15],3479774868),new a(c[16],2666613458),new a(c[17],944711139),new a(c[18],2341262773),new a(c[19],2007800933),new a(c[20],1495990901),new a(c[21],1856431235),new a(c[22],3175218132),new a(c[23],2198950837),new a(c[24],3999719339),new a(c[25],766784016),new a(c[26],2566594879),new a(c[27],3203337956),new a(c[28],1034457026),new a(c[29],2466948901),new a(c[30],3758326383),new a(c[31],168717936),new a(c[32],1188179964),new a(c[33],1546045734),new a(c[34],1522805485),
new a(c[35],2643833823),new a(c[36],2343527390),new a(c[37],1014477480),new a(c[38],1206759142),new a(c[39],344077627),new a(c[40],1290863460),new a(c[41],3158454273),new a(c[42],3505952657),new a(c[43],106217008),new a(c[44],3606008344),new a(c[45],1432725776),new a(c[46],1467031594),new a(c[47],851169720),new a(c[48],3100823752),new a(c[49],1363258195),new a(c[50],3750685593),new a(c[51],3785050280),new a(c[52],3318307427),new a(c[53],3812723403),new a(c[54],2003034995),new a(c[55],3602036899),
new a(c[56],1575990012),new a(c[57],1125592928),new a(c[58],2716904306),new a(c[59],442776044),new a(c[60],593698344),new a(c[61],3733110249),new a(c[62],2999351573),new a(c[63],3815920427),new a(3391569614,3928383900),new a(3515267271,566280711),new a(3940187606,3454069534),new a(4118630271,4000239992),new a(116418474,1914138554),new a(174292421,2731055270),new a(289380356,3203993006),new a(460393269,320620315),new a(685471733,587496836),new a(852142971,1086792851),new a(1017036298,365543100),new a(1126000580,
2618297676),new a(1288033470,3409855158),new a(1501505948,4234509866),new a(1607167915,987167468),new a(1816402316,1246189591)];Z=[new a(0,1),new a(0,32898),new a(2147483648,32906),new a(2147483648,2147516416),new a(0,32907),new a(0,2147483649),new a(2147483648,2147516545),new a(2147483648,32777),new a(0,138),new a(0,136),new a(0,2147516425),new a(0,2147483658),new a(0,2147516555),new a(2147483648,139),new a(2147483648,32905),new a(2147483648,32771),new a(2147483648,32770),new a(2147483648,128),new a(0,
32778),new a(2147483648,2147483658),new a(2147483648,2147516545),new a(2147483648,32896),new a(0,2147483649),new a(2147483648,2147516424)];Y=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];"function"===typeof define&&define.amd?define(function(){return C}): true?( true&&module.exports&&(module.exports=C),exports=C):0})(this);


/***/ }),

/***/ 6010:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var bufferEqual = __nccwpck_require__(9239);
var Buffer = __nccwpck_require__(1867).Buffer;
var crypto = __nccwpck_require__(6417);
var formatEcdsa = __nccwpck_require__(1728);
var util = __nccwpck_require__(1669);

var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".'
var MSG_INVALID_SECRET = 'secret must be a string or buffer';
var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';

var supportsKeyObjects = typeof crypto.createPublicKey === 'function';
if (supportsKeyObjects) {
  MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
  MSG_INVALID_SECRET += 'or a KeyObject';
}

function checkIsPublicKey(key) {
  if (Buffer.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return;
  }

  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key !== 'object') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.type !== 'string') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.asymmetricKeyType !== 'string') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }

  if (typeof key.export !== 'function') {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
};

function checkIsPrivateKey(key) {
  if (Buffer.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return;
  }

  if (typeof key === 'object') {
    return;
  }

  throw typeError(MSG_INVALID_SIGNER_KEY);
};

function checkIsSecretKey(key) {
  if (Buffer.isBuffer(key)) {
    return;
  }

  if (typeof key === 'string') {
    return key;
  }

  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (typeof key !== 'object') {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (key.type !== 'secret') {
    throw typeError(MSG_INVALID_SECRET);
  }

  if (typeof key.export !== 'function') {
    throw typeError(MSG_INVALID_SECRET);
  }
}

function fromBase64(base64) {
  return base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function toBase64(base64url) {
  base64url = base64url.toString();

  var padding = 4 - base64url.length % 4;
  if (padding !== 4) {
    for (var i = 0; i < padding; ++i) {
      base64url += '=';
    }
  }

  return base64url
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
}

function typeError(template) {
  var args = [].slice.call(arguments, 1);
  var errMsg = util.format.bind(util, template).apply(null, args);
  return new TypeError(errMsg);
}

function bufferOrString(obj) {
  return Buffer.isBuffer(obj) || typeof obj === 'string';
}

function normalizeInput(thing) {
  if (!bufferOrString(thing))
    thing = JSON.stringify(thing);
  return thing;
}

function createHmacSigner(bits) {
  return function sign(thing, secret) {
    checkIsSecretKey(secret);
    thing = normalizeInput(thing);
    var hmac = crypto.createHmac('sha' + bits, secret);
    var sig = (hmac.update(thing), hmac.digest('base64'))
    return fromBase64(sig);
  }
}

function createHmacVerifier(bits) {
  return function verify(thing, signature, secret) {
    var computedSig = createHmacSigner(bits)(thing, secret);
    return bufferEqual(Buffer.from(signature), Buffer.from(computedSig));
  }
}

function createKeySigner(bits) {
 return function sign(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    // Even though we are specifying "RSA" here, this works with ECDSA
    // keys as well.
    var signer = crypto.createSign('RSA-SHA' + bits);
    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
    return fromBase64(sig);
  }
}

function createKeyVerifier(bits) {
  return function verify(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify('RSA-SHA' + bits);
    verifier.update(thing);
    return verifier.verify(publicKey, signature, 'base64');
  }
}

function createPSSKeySigner(bits) {
  return function sign(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    var signer = crypto.createSign('RSA-SHA' + bits);
    var sig = (signer.update(thing), signer.sign({
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, 'base64'));
    return fromBase64(sig);
  }
}

function createPSSKeyVerifier(bits) {
  return function verify(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify('RSA-SHA' + bits);
    verifier.update(thing);
    return verifier.verify({
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, signature, 'base64');
  }
}

function createECDSASigner(bits) {
  var inner = createKeySigner(bits);
  return function sign() {
    var signature = inner.apply(null, arguments);
    signature = formatEcdsa.derToJose(signature, 'ES' + bits);
    return signature;
  };
}

function createECDSAVerifer(bits) {
  var inner = createKeyVerifier(bits);
  return function verify(thing, signature, publicKey) {
    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
    var result = inner(thing, signature, publicKey);
    return result;
  };
}

function createNoneSigner() {
  return function sign() {
    return '';
  }
}

function createNoneVerifier() {
  return function verify(thing, signature) {
    return signature === '';
  }
}

module.exports = function jwa(algorithm) {
  var signerFactories = {
    hs: createHmacSigner,
    rs: createKeySigner,
    ps: createPSSKeySigner,
    es: createECDSASigner,
    none: createNoneSigner,
  }
  var verifierFactories = {
    hs: createHmacVerifier,
    rs: createKeyVerifier,
    ps: createPSSKeyVerifier,
    es: createECDSAVerifer,
    none: createNoneVerifier,
  }
  var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
  if (!match)
    throw typeError(MSG_INVALID_ALGORITHM, algorithm);
  var algo = (match[1] || match[3]).toLowerCase();
  var bits = match[2];

  return {
    sign: signerFactories[algo](bits),
    verify: verifierFactories[algo](bits),
  }
};


/***/ }),

/***/ 4636:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

/*global exports*/
var SignStream = __nccwpck_require__(3334);
var VerifyStream = __nccwpck_require__(5522);

var ALGORITHMS = [
  'HS256', 'HS384', 'HS512',
  'RS256', 'RS384', 'RS512',
  'PS256', 'PS384', 'PS512',
  'ES256', 'ES384', 'ES512'
];

exports.ALGORITHMS = ALGORITHMS;
exports.sign = SignStream.sign;
exports.verify = VerifyStream.verify;
exports.decode = VerifyStream.decode;
exports.isValid = VerifyStream.isValid;
exports.createSign = function createSign(opts) {
  return new SignStream(opts);
};
exports.createVerify = function createVerify(opts) {
  return new VerifyStream(opts);
};


/***/ }),

/***/ 1868:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/*global module, process*/
var Buffer = __nccwpck_require__(1867).Buffer;
var Stream = __nccwpck_require__(2413);
var util = __nccwpck_require__(1669);

function DataStream(data) {
  this.buffer = null;
  this.writable = true;
  this.readable = true;

  // No input
  if (!data) {
    this.buffer = Buffer.alloc(0);
    return this;
  }

  // Stream
  if (typeof data.pipe === 'function') {
    this.buffer = Buffer.alloc(0);
    data.pipe(this);
    return this;
  }

  // Buffer or String
  // or Object (assumedly a passworded key)
  if (data.length || typeof data === 'object') {
    this.buffer = data;
    this.writable = false;
    process.nextTick(function () {
      this.emit('end', data);
      this.readable = false;
      this.emit('close');
    }.bind(this));
    return this;
  }

  throw new TypeError('Unexpected data type ('+ typeof data + ')');
}
util.inherits(DataStream, Stream);

DataStream.prototype.write = function write(data) {
  this.buffer = Buffer.concat([this.buffer, Buffer.from(data)]);
  this.emit('data', data);
};

DataStream.prototype.end = function end(data) {
  if (data)
    this.write(data);
  this.emit('end', data);
  this.emit('close');
  this.writable = false;
  this.readable = false;
};

module.exports = DataStream;


/***/ }),

/***/ 3334:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/*global module*/
var Buffer = __nccwpck_require__(1867).Buffer;
var DataStream = __nccwpck_require__(1868);
var jwa = __nccwpck_require__(6010);
var Stream = __nccwpck_require__(2413);
var toString = __nccwpck_require__(5292);
var util = __nccwpck_require__(1669);

function base64url(string, encoding) {
  return Buffer
    .from(string, encoding)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function jwsSecuredInput(header, payload, encoding) {
  encoding = encoding || 'utf8';
  var encodedHeader = base64url(toString(header), 'binary');
  var encodedPayload = base64url(toString(payload), encoding);
  return util.format('%s.%s', encodedHeader, encodedPayload);
}

function jwsSign(opts) {
  var header = opts.header;
  var payload = opts.payload;
  var secretOrKey = opts.secret || opts.privateKey;
  var encoding = opts.encoding;
  var algo = jwa(header.alg);
  var securedInput = jwsSecuredInput(header, payload, encoding);
  var signature = algo.sign(securedInput, secretOrKey);
  return util.format('%s.%s', securedInput, signature);
}

function SignStream(opts) {
  var secret = opts.secret||opts.privateKey||opts.key;
  var secretStream = new DataStream(secret);
  this.readable = true;
  this.header = opts.header;
  this.encoding = opts.encoding;
  this.secret = this.privateKey = this.key = secretStream;
  this.payload = new DataStream(opts.payload);
  this.secret.once('close', function () {
    if (!this.payload.writable && this.readable)
      this.sign();
  }.bind(this));

  this.payload.once('close', function () {
    if (!this.secret.writable && this.readable)
      this.sign();
  }.bind(this));
}
util.inherits(SignStream, Stream);

SignStream.prototype.sign = function sign() {
  try {
    var signature = jwsSign({
      header: this.header,
      payload: this.payload.buffer,
      secret: this.secret.buffer,
      encoding: this.encoding
    });
    this.emit('done', signature);
    this.emit('data', signature);
    this.emit('end');
    this.readable = false;
    return signature;
  } catch (e) {
    this.readable = false;
    this.emit('error', e);
    this.emit('close');
  }
};

SignStream.sign = jwsSign;

module.exports = SignStream;


/***/ }),

/***/ 5292:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/*global module*/
var Buffer = __nccwpck_require__(4293).Buffer;

module.exports = function toString(obj) {
  if (typeof obj === 'string')
    return obj;
  if (typeof obj === 'number' || Buffer.isBuffer(obj))
    return obj.toString();
  return JSON.stringify(obj);
};


/***/ }),

/***/ 5522:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/*global module*/
var Buffer = __nccwpck_require__(1867).Buffer;
var DataStream = __nccwpck_require__(1868);
var jwa = __nccwpck_require__(6010);
var Stream = __nccwpck_require__(2413);
var toString = __nccwpck_require__(5292);
var util = __nccwpck_require__(1669);
var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function isObject(thing) {
  return Object.prototype.toString.call(thing) === '[object Object]';
}

function safeJsonParse(thing) {
  if (isObject(thing))
    return thing;
  try { return JSON.parse(thing); }
  catch (e) { return undefined; }
}

function headerFromJWS(jwsSig) {
  var encodedHeader = jwsSig.split('.', 1)[0];
  return safeJsonParse(Buffer.from(encodedHeader, 'base64').toString('binary'));
}

function securedInputFromJWS(jwsSig) {
  return jwsSig.split('.', 2).join('.');
}

function signatureFromJWS(jwsSig) {
  return jwsSig.split('.')[2];
}

function payloadFromJWS(jwsSig, encoding) {
  encoding = encoding || 'utf8';
  var payload = jwsSig.split('.')[1];
  return Buffer.from(payload, 'base64').toString(encoding);
}

function isValidJws(string) {
  return JWS_REGEX.test(string) && !!headerFromJWS(string);
}

function jwsVerify(jwsSig, algorithm, secretOrKey) {
  if (!algorithm) {
    var err = new Error("Missing algorithm parameter for jws.verify");
    err.code = "MISSING_ALGORITHM";
    throw err;
  }
  jwsSig = toString(jwsSig);
  var signature = signatureFromJWS(jwsSig);
  var securedInput = securedInputFromJWS(jwsSig);
  var algo = jwa(algorithm);
  return algo.verify(securedInput, signature, secretOrKey);
}

function jwsDecode(jwsSig, opts) {
  opts = opts || {};
  jwsSig = toString(jwsSig);

  if (!isValidJws(jwsSig))
    return null;

  var header = headerFromJWS(jwsSig);

  if (!header)
    return null;

  var payload = payloadFromJWS(jwsSig);
  if (header.typ === 'JWT' || opts.json)
    payload = JSON.parse(payload, opts.encoding);

  return {
    header: header,
    payload: payload,
    signature: signatureFromJWS(jwsSig)
  };
}

function VerifyStream(opts) {
  opts = opts || {};
  var secretOrKey = opts.secret||opts.publicKey||opts.key;
  var secretStream = new DataStream(secretOrKey);
  this.readable = true;
  this.algorithm = opts.algorithm;
  this.encoding = opts.encoding;
  this.secret = this.publicKey = this.key = secretStream;
  this.signature = new DataStream(opts.signature);
  this.secret.once('close', function () {
    if (!this.signature.writable && this.readable)
      this.verify();
  }.bind(this));

  this.signature.once('close', function () {
    if (!this.secret.writable && this.readable)
      this.verify();
  }.bind(this));
}
util.inherits(VerifyStream, Stream);
VerifyStream.prototype.verify = function verify() {
  try {
    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
    var obj = jwsDecode(this.signature.buffer, this.encoding);
    this.emit('done', valid, obj);
    this.emit('data', valid);
    this.emit('end');
    this.readable = false;
    return valid;
  } catch (e) {
    this.readable = false;
    this.emit('error', e);
    this.emit('close');
  }
};

VerifyStream.decode = jwsDecode;
VerifyStream.isValid = isValidJws;
VerifyStream.verify = jwsVerify;

module.exports = VerifyStream;


/***/ }),

/***/ 7931:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = includes;


/***/ }),

/***/ 6501:
/***/ ((module) => {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && objectToString.call(value) == boolTag);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isBoolean;


/***/ }),

/***/ 1441:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = isInteger;


/***/ }),

/***/ 298:
/***/ ((module) => {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && objectToString.call(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 5723:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;


/***/ }),

/***/ 5180:
/***/ ((module) => {

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 4499:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = once;


/***/ }),

/***/ 900:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 467:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Stream = _interopDefault(__nccwpck_require__(2413));
var http = _interopDefault(__nccwpck_require__(8605));
var Url = _interopDefault(__nccwpck_require__(8835));
var https = _interopDefault(__nccwpck_require__(7211));
var zlib = _interopDefault(__nccwpck_require__(8761));

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = __nccwpck_require__(2877).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;


/***/ }),

/***/ 5049:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircuitBreaker = exports.Constants = exports.MaxAttemptsTerminationStrategy = exports.FixedTimeDelayStrategy = exports.GenericRetrier = exports.LOG = exports.ResourcePrincipalAuthenticationDetailsProvider = exports.InstancePrincipalsAuthenticationDetailsProviderBuilder = exports.ConfigFileReader = exports.ConfigFileAuthenticationDetailsProvider = exports.composeResponse = exports.composeRequest = exports.genericPaginateResponses = exports.paginateResponses = exports.genericPaginateRecords = exports.paginatedRecordsWithLimit = exports.paginatedResponsesWithLimit = exports.paginateRecords = exports.genericTerminalConditionWaiter = exports.genericWaiter = exports.MaxTimeTerminationStrategy = exports.ExponentialBackoffDelayStrategy = exports.EndpointBuilder = exports.Realm = exports.Region = exports.Range = exports.ObjectSerializer = exports.convertStringToType = exports.handleErrorBody = exports.mapContainer = exports.handleErrorResponse = exports.getStringFromResponseBody = exports.DefaultRequestSigner = exports.OciError = exports.FetchHttpClient = exports.isRegionProvider = exports.SimpleAuthenticationDetailsProvider = void 0;
const auth = __importStar(__nccwpck_require__(8154));
const error = __importStar(__nccwpck_require__(2956));
const signer = __importStar(__nccwpck_require__(484));
const helper = __importStar(__nccwpck_require__(7621));
const http = __importStar(__nccwpck_require__(6316));
const serializer = __importStar(__nccwpck_require__(2043));
const range = __importStar(__nccwpck_require__(1139));
const region_1 = __nccwpck_require__(263);
Object.defineProperty(exports, "Region", ({ enumerable: true, get: function () { return region_1.Region; } }));
const realm_1 = __nccwpck_require__(3755);
Object.defineProperty(exports, "Realm", ({ enumerable: true, get: function () { return realm_1.Realm; } }));
const endpoint_builder_1 = __nccwpck_require__(5373);
Object.defineProperty(exports, "EndpointBuilder", ({ enumerable: true, get: function () { return endpoint_builder_1.EndpointBuilder; } }));
const log_1 = __nccwpck_require__(6109);
Object.defineProperty(exports, "LOG", ({ enumerable: true, get: function () { return log_1.LOG; } }));
const constants_1 = __importDefault(__nccwpck_require__(8041));
exports.Constants = constants_1.default;
const circuit_breaker_1 = __importDefault(__nccwpck_require__(5620));
exports.CircuitBreaker = circuit_breaker_1.default;
const waiter_1 = __nccwpck_require__(779);
Object.defineProperty(exports, "ExponentialBackoffDelayStrategy", ({ enumerable: true, get: function () { return waiter_1.ExponentialBackoffDelayStrategy; } }));
Object.defineProperty(exports, "MaxTimeTerminationStrategy", ({ enumerable: true, get: function () { return waiter_1.MaxTimeTerminationStrategy; } }));
Object.defineProperty(exports, "genericWaiter", ({ enumerable: true, get: function () { return waiter_1.genericWaiter; } }));
Object.defineProperty(exports, "genericTerminalConditionWaiter", ({ enumerable: true, get: function () { return waiter_1.genericTerminalConditionWaiter; } }));
Object.defineProperty(exports, "MaxAttemptsTerminationStrategy", ({ enumerable: true, get: function () { return waiter_1.MaxAttemptsTerminationStrategy; } }));
Object.defineProperty(exports, "FixedTimeDelayStrategy", ({ enumerable: true, get: function () { return waiter_1.FixedTimeDelayStrategy; } }));
const retrier_1 = __nccwpck_require__(4922);
Object.defineProperty(exports, "GenericRetrier", ({ enumerable: true, get: function () { return retrier_1.GenericRetrier; } }));
const instance_principals_authentication_detail_provider_1 = __importDefault(__nccwpck_require__(252));
exports.InstancePrincipalsAuthenticationDetailsProviderBuilder = instance_principals_authentication_detail_provider_1.default;
const resource_principal_authentication_details_provider_1 = __importDefault(__nccwpck_require__(5228));
exports.ResourcePrincipalAuthenticationDetailsProvider = resource_principal_authentication_details_provider_1.default;
const paginators_1 = __nccwpck_require__(4310);
Object.defineProperty(exports, "paginateRecords", ({ enumerable: true, get: function () { return paginators_1.paginateRecords; } }));
Object.defineProperty(exports, "genericPaginateRecords", ({ enumerable: true, get: function () { return paginators_1.genericPaginateRecords; } }));
Object.defineProperty(exports, "paginatedRecordsWithLimit", ({ enumerable: true, get: function () { return paginators_1.paginatedRecordsWithLimit; } }));
Object.defineProperty(exports, "paginateResponses", ({ enumerable: true, get: function () { return paginators_1.paginateResponses; } }));
Object.defineProperty(exports, "genericPaginateResponses", ({ enumerable: true, get: function () { return paginators_1.genericPaginateResponses; } }));
Object.defineProperty(exports, "paginatedResponsesWithLimit", ({ enumerable: true, get: function () { return paginators_1.paginatedResponsesWithLimit; } }));
const config_file_auth_1 = __nccwpck_require__(3054);
Object.defineProperty(exports, "ConfigFileAuthenticationDetailsProvider", ({ enumerable: true, get: function () { return config_file_auth_1.ConfigFileAuthenticationDetailsProvider; } }));
const config_file_reader_1 = __nccwpck_require__(7407);
Object.defineProperty(exports, "ConfigFileReader", ({ enumerable: true, get: function () { return config_file_reader_1.ConfigFileReader; } }));
const request_generator_1 = __nccwpck_require__(3719);
Object.defineProperty(exports, "composeRequest", ({ enumerable: true, get: function () { return request_generator_1.composeRequest; } }));
const response_generator_1 = __nccwpck_require__(6192);
Object.defineProperty(exports, "composeResponse", ({ enumerable: true, get: function () { return response_generator_1.composeResponse; } }));
exports.SimpleAuthenticationDetailsProvider = auth.SimpleAuthenticationDetailsProvider;
exports.isRegionProvider = auth.isRegionProvider;
exports.FetchHttpClient = http.FetchHttpClient;
exports.OciError = error.OciError;
exports.DefaultRequestSigner = signer.DefaultRequestSigner;
exports.getStringFromResponseBody = helper.getStringFromResponseBody;
exports.handleErrorResponse = helper.handleErrorResponse;
exports.mapContainer = helper.mapContainer;
exports.handleErrorBody = helper.handleErrorBody;
exports.convertStringToType = helper.convertStringToType;
exports.ObjectSerializer = serializer.ObjectSerializer;
exports.Range = range.Range;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5149:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const UrlParser = __nccwpck_require__(8835);
const httpSignature = __nccwpck_require__(2479);
const jssha = __nccwpck_require__(7656);
const security_token_adapter_1 = __importDefault(__nccwpck_require__(84));
const auth_utils_1 = __importDefault(__nccwpck_require__(1458));
const signer_1 = __nccwpck_require__(484);
const http_1 = __nccwpck_require__(6316);
const helper_1 = __nccwpck_require__(7621);
const circuit_breaker_1 = __importDefault(__nccwpck_require__(5620));
/**
 * This class gets a security token from the auth service by signing the request with a PKI issued leaf certificate,
 * passing along a temporary public key that is bounded to the the security token, and the leaf certificate.
 */
class X509FederationClient {
    constructor(federationEndpoint, _tenancyId, _leafCertificateSupplier, sessionKeySupplier, intermediateCertificateSuppliers, purpose) {
        this.federationEndpoint = federationEndpoint;
        this._tenancyId = _tenancyId;
        this._leafCertificateSupplier = _leafCertificateSupplier;
        this.sessionKeySupplier = sessionKeySupplier;
        this.intermediateCertificateSuppliers = intermediateCertificateSuppliers;
        this.purpose = purpose;
        this.retry = 0;
        this.securityTokenAdapter = new security_token_adapter_1.default("", this.sessionKeySupplier);
    }
    // Getter for tenancyId
    get tenancyId() {
        return this._tenancyId;
    }
    // Getter for leafCerificateSupplier
    get leafCertificateSupplier() {
        return this._leafCertificateSupplier;
    }
    /**
     * Gets a security token. If there is already a valid token cached, it will be returned. Else this will make a call
     * to the auth service to get a new token, using the provided suppliers.
     *
     * This method is thread-safe.
     * @return the security token
     * @throws OciError If there is any issue with getting a token from the auth server
     */
    getSecurityToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.securityTokenAdapter.isValid()) {
                return this.securityTokenAdapter.getSecurityToken();
            }
            return yield this.refreshAndGetSecurityTokenInner(true);
        });
    }
    /**
     * Return a claim embedded in the security token
     * @param key the name of the claim
     * @return the value of the claim or null if unable to find
     */
    getStringClaim(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshAndGetSecurityTokenInner(true);
            return this.securityTokenAdapter.getStringClaim(key);
        });
    }
    refreshAndGetSecurityToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.refreshAndGetSecurityTokenInner(false);
        });
    }
    refreshAndGetSecurityTokenInner(doFinalTokenValidityCheck) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check again to see if the JWT is still invalid, unless we want to skip that check
            if (!doFinalTokenValidityCheck || !this.securityTokenAdapter.isValid()) {
                this.sessionKeySupplier.refreshKeys();
                // Check if leafCertificateSupplier contains a .refresh() method. If so, call refresh()
                if (this._leafCertificateSupplier && this._leafCertificateSupplier.refresh) {
                    try {
                        this._leafCertificateSupplier = yield this._leafCertificateSupplier.refresh();
                    }
                    catch (e) {
                        throw Error(`Fail to refresh leafCertificateSupplier, error: ${e}`);
                    }
                    // When using default purpose (ex, instance principals), the token request should always be signed with the same tenant id as the certificate.
                    // For other purposes, the tenant id can be different.
                    if (this.purpose === "DEFAULT") {
                        const newTenancyId = auth_utils_1.default.getTenantIdFromCertificate(this._leafCertificateSupplier.getCertificateAndKeyPair().getCertificate());
                        if (this.tenancyId != newTenancyId) {
                            throw Error("The tenancy id should never be changed in cert file!");
                        }
                    }
                }
                // Loop through each intermediateCertificateSuppliers and refresh them if possible
                for (let i = 0; i < this.intermediateCertificateSuppliers.length; i++) {
                    try {
                        if (this.intermediateCertificateSuppliers[i].refresh) {
                            this.intermediateCertificateSuppliers[i] = yield this.intermediateCertificateSuppliers[i].refresh();
                        }
                    }
                    catch (e) {
                        throw Error("Cannot refresh the intermediate certification");
                    }
                }
                this.securityTokenAdapter = yield this.getSecurityTokenFromServer();
                return this.securityTokenAdapter.getSecurityToken();
            }
            return this.securityTokenAdapter.getSecurityToken();
        });
    }
    /**
     * Gets a security token from the federation server
     * @return the security token, which is basically a JWT token string
     */
    getSecurityTokenFromServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const keyPair = this.sessionKeySupplier.getKeyPair();
            if (!keyPair) {
                throw Error("keyPair for session was not provided");
            }
            const publicKey = keyPair.getPublic();
            if (!publicKey) {
                throw Error("Public key is not present");
            }
            const certificateAndKeyPair = this.leafCertificateSupplier.getCertificateAndKeyPair();
            if (!certificateAndKeyPair) {
                throw Error("Certificate and key pair are not present");
            }
            const leafCertificate = certificateAndKeyPair.getCertificate();
            if (!leafCertificate) {
                throw Error("Leaf certificate is not present");
            }
            if (!certificateAndKeyPair.getPrivateKey()) {
                throw Error("Leaf certificate's private key is not present");
            }
            try {
                let intermediateStrings = [];
                if (this.intermediateCertificateSuppliers &&
                    this.intermediateCertificateSuppliers.length > 0) {
                    this.intermediateCertificateSuppliers.forEach((supplier) => {
                        const supplierCertificateAndKeyPair = supplier.getCertificateAndKeyPair();
                        if (supplierCertificateAndKeyPair && supplierCertificateAndKeyPair.getCertificate()) {
                            intermediateStrings.push(auth_utils_1.default.sanitizeCertificateString(supplierCertificateAndKeyPair.getCertificate().toString("pem")));
                        }
                    });
                }
                // Create request body and call auth service.
                const url = this.federationEndpoint + "/v1/x509";
                const requestPayload = {
                    certificate: auth_utils_1.default.sanitizeCertificateString(leafCertificate.toString("pem")),
                    purpose: this.purpose,
                    publicKey: auth_utils_1.default.sanitizeCertificateString(publicKey),
                    intermediateCertificates: intermediateStrings
                };
                let jsonPayload = JSON.stringify(requestPayload);
                jsonPayload = jsonPayload.replace(/\\n/g, "");
                const requestObj = {
                    uri: url,
                    body: jsonPayload,
                    method: "POST",
                    headers: new Headers()
                };
                const fingerprint = leafCertificate.fingerprint("sha1").toString("hex");
                const privateKey = certificateAndKeyPair.getPrivateKey();
                // Instantiate AuthTokenRequestSigner to sign the request
                const signer = new AuthTokenRequestSigner(this.tenancyId, fingerprint, privateKey);
                const httpClient = new http_1.FetchHttpClient(signer, circuit_breaker_1.default.internalCircuit);
                // Call Auth Service to get a JSON object which contains the auth token
                const response = yield httpClient.send(requestObj);
                //TODO: Implement retry here
                // retry here
                if (response.status !== 200) {
                    if (this.retry < 3) {
                        this.retry += 1;
                        return yield this.getSecurityTokenFromServer();
                    }
                    else {
                        throw Error(`Failed to call auth service for token, error: ${response}`);
                    }
                }
                this.retry = 0;
                const securityToken = yield response.json();
                return new security_token_adapter_1.default(securityToken.token, this.sessionKeySupplier);
            }
            catch (e) {
                throw Error(`Failed to call call Auth service, error: ${e}`);
            }
        });
    }
}
exports.default = X509FederationClient;
// A Signer class for FederationClient
class AuthTokenRequestSigner {
    constructor(tenancyId, fingerprint, privateKey) {
        this.tenancyId = tenancyId;
        this.fingerprint = fingerprint;
        this.privateKey = privateKey;
    }
    signHttpRequest(request, forceExcludeBody = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiKey = `${this.tenancyId}/fed-x509/${this.fingerprint}`;
            const headersToSign = [
                "date",
                "(request-target)",
                "host",
                "content-type",
                "content-length",
                "x-content-sha256"
            ];
            const EMPTY_SHA = "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=";
            if (!request.headers.has("host")) {
                const url = UrlParser.parse(request.uri);
                if (url.host) {
                    request.headers.set("host", url.host);
                }
                else {
                    throw new Error("Cannot parse host from url");
                }
            }
            if (!request.headers.has("x-date")) {
                request.headers.set("x-date", new Date().toUTCString());
            }
            if (!request.headers.has("Content-Type")) {
                request.headers.set("Content-Type", "application/json");
            }
            let contentLen = 0;
            const shaObj = new jssha("SHA-256", "TEXT");
            if (request.body) {
                const bodyStringContent = yield helper_1.getStringFromRequestBody(request.body);
                shaObj.update(bodyStringContent);
                request.headers.set("x-content-sha256", shaObj.getHash("B64"));
                contentLen = bodyStringContent.length;
            }
            if (contentLen === 0) {
                // if buffer is empty, it can only be an empty string payload
                request.headers.set("x-content-sha256", EMPTY_SHA);
            }
            if (!request.headers.has("Content-Length")) {
                request.headers.set("Content-Length", `${contentLen}`);
            }
            httpSignature.sign(new signer_1.SignerRequest(request.method, request.uri, request.headers), {
                key: this.privateKey.toBuffer("pem", {}),
                keyId: apiKey,
                headers: headersToSign
            });
            const authorizationHeader = request.headers.get("authorization");
            if (authorizationHeader) {
                request.headers.set("authorization", authorizationHeader.replace("Signature ", 'Signature version="1",'));
            }
            else {
                throw new Error("Unable to sign request");
            }
        });
    }
}
//# sourceMappingURL=X509-federation-client.js.map

/***/ }),

/***/ 2478:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Abstract builder base class for authentication details provider extending
 * @param <B> builder class
 * @param <P> provider class
 */
const endpoint_builder_1 = __nccwpck_require__(5373);
const http_1 = __nccwpck_require__(6316);
const region_1 = __nccwpck_require__(263);
const realm_1 = __nccwpck_require__(3755);
const auth_utils_1 = __importDefault(__nccwpck_require__(1458));
const X509_federation_client_1 = __importDefault(__nccwpck_require__(5149));
const session_key_supplier_1 = __importDefault(__nccwpck_require__(2306));
const url_based_x509_certificate_supplier_1 = __nccwpck_require__(8052);
const circuit_breaker_1 = __importDefault(__nccwpck_require__(5620));
class AbstractFederationClientAuthenticationDetailsProviderBuilder {
    constructor() {
        // url template for auth service.
        this.template = "https://auth.{region}.{secondLevelDomain}";
        // Default base url of metadata service.
        this.METADATA_SERVICE_BASE_URL = "http://169.254.169.254/opc/v2/";
        // The Authorization header value to be sent for requests to the metadata service.
        this.METADATA_AUTH_HEADERS = "Bearer Oracle";
        this.AUTHORIZATION = "Authorization";
        // Base url of metadata service.
        this._metadataBaseUrl = this.METADATA_SERVICE_BASE_URL;
        // The federation endpoint url.
        this._federationEndpoint = "";
        //Tenancy OCI, or empty string if detecting from instance metadata.
        this._tenancyId = "";
        // Purpose: Specifies the non-default purpose of the session token to be requested. For internal use only.
        this._purpose = "DEFAULT";
    }
    // metadataBaseUrl getter
    get metadataBaseUrl() {
        return this._metadataBaseUrl;
    }
    // federationEndpoint getter
    get federationEndpoint() {
        return this._federationEndpoint;
    }
    // LeafCertificateSupplier getter
    get leafCertificateSupplier() {
        return this._leafCertificateSupplier;
    }
    // tenancyId getter
    get tenancyId() {
        return this._tenancyId;
    }
    // region getter
    getRegion() {
        return this.region;
    }
    // Configure the metadata endpoint to use when retrieving the instance data and principal for federation.
    set metadataBaseUrl(metadataBaseUrl) {
        this._metadataBaseUrl = metadataBaseUrl;
        if (this._metadataBaseUrl.substr(-1) != "/") {
            this._metadataBaseUrl += "/";
        }
    }
    // Configures the custom federationEndpoint to use.
    set federationEndpoint(federationEndpoint) {
        this._federationEndpoint = federationEndpoint;
    }
    // Configures the custom leafCertificateSupplier to use.
    set leafCertificateSupplier(leafCertificateSupplier) {
        this._leafCertificateSupplier = leafCertificateSupplier;
    }
    // Configure the custom tenancyId to use.
    set tenancyId(tenancyId) {
        this._tenancyId = tenancyId;
    }
    // Configure the purpose to use.
    set purpose(purpose) {
        this._purpose = purpose;
    }
    // Configures the custom sessionKeySupplier to use.
    set sessionKeySupplier(sessionKeySupplier) {
        this._sessionKeySupplier = sessionKeySupplier;
    }
    // Configures the set of intermediate certificate suppliers to use, if any.
    set intermediateCertificateSuppliers(intermediateCertificateSuppliers) {
        this._intermediateCertificateSuppliers = intermediateCertificateSuppliers;
    }
    /**
     * Build a new AuthenticationDetailsProvider that uses the FederationClient.
     *
     * @return A new provider instance.
     */
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionKeySupplierToUse = this._sessionKeySupplier || new session_key_supplier_1.default();
            this._sessionKeySupplier = sessionKeySupplierToUse;
            this._federationClient = this.createFederationClient(this._sessionKeySupplier);
            return this.buildProvider(this._sessionKeySupplier);
        });
    }
    /**
     * Build the Federation Client
     * @param sessionKeySupplier
     * @return Federation Client
     */
    createFederationClient(sessionKeySupplier) {
        return new X509_federation_client_1.default(this._federationEndpoint, this._tenancyId, this._leafCertificateSupplier, sessionKeySupplier, this._intermediateCertificateSuppliers, this._purpose);
    }
    /**
     * Auto-detect endpoint and certificate information using Instance metadata.
     */
    autoDetectUsingMetadataUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.autoDetectEndpointUsingMetadataUrl();
            yield this.autoDetectCertificatesUsingMetadataUrl();
        });
    }
    /**
     * Auto detects the endpoint that should be used when talking to OCI Auth, if no endpoint
     * has been configured already.
     * @return The auto-detected, or currently set, auth endpoint.
     */
    autoDetectEndpointUsingMetadataUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._federationEndpoint === "") {
                const url = this._metadataBaseUrl + "instance/region";
                let headers = new Headers();
                headers.append("accept", "text/plain");
                headers.append("Content-Type", "application/json");
                headers.append(this.AUTHORIZATION, this.METADATA_AUTH_HEADERS);
                const httpClient = new http_1.FetchHttpClient(null, circuit_breaker_1.default.internalCircuit);
                const response = yield httpClient.send({
                    uri: url,
                    method: "GET",
                    headers: headers
                });
                // regionStr can be a shortCode or regionId
                const regionStr = yield response.text();
                const regionId = region_1.Region.getRegionIdFromShortCode(regionStr);
                try {
                    // Try to get region off regionId
                    this.region = region_1.Region.fromRegionId(regionId);
                }
                catch (e) {
                    console.log(`
          failed reason: ${e},
          Region not supported by this version of the SDK, registering region ${regionId} under OC1
        `);
                    this.region = region_1.Region.register(regionId, realm_1.Realm.OC1);
                }
                try {
                    const endpoint = endpoint_builder_1.EndpointBuilder.createEndpointFromRegion(this.template, this.region //TODO: Find out why there is a type mismatch
                    );
                    this._federationEndpoint = endpoint;
                }
                catch (e) {
                    throw Error(`Endpoint for auth service is not known in region ${this.region}`);
                }
            }
            return this._federationEndpoint;
        });
    }
    /**
     * Auto detects and configures the certificates needed using Instance metadata.
     *
     */
    autoDetectCertificatesUsingMetadataUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this._leafCertificateSupplier) {
                    this._leafCertificateSupplier = yield new url_based_x509_certificate_supplier_1.URLBasedX509CertificateSupplier(this.getMetaDataResourceDetail("identity/cert.pem"), this.getMetaDataResourceDetail("identity/key.pem"), null).refresh();
                }
                if (this._tenancyId === "") {
                    this._tenancyId = auth_utils_1.default.getTenantIdFromCertificate(this._leafCertificateSupplier.getCertificateAndKeyPair().getCertificate());
                }
                if (!this._intermediateCertificateSuppliers) {
                    this._intermediateCertificateSuppliers = [
                        yield new url_based_x509_certificate_supplier_1.URLBasedX509CertificateSupplier(this.getMetaDataResourceDetail("identity/intermediate.pem"), null, null).refresh()
                    ];
                }
            }
            catch (e) {
                throw Error("Failed to autoDetectCertificatesUsingMetadataUrl");
            }
        });
    }
    getMetaDataResourceDetail(path) {
        const url = this._metadataBaseUrl + path;
        let headers = new Headers();
        headers.append(this.AUTHORIZATION, this.METADATA_AUTH_HEADERS);
        return new url_based_x509_certificate_supplier_1.ResourceDetails(url, headers);
    }
}
exports.default = AbstractFederationClientAuthenticationDetailsProviderBuilder;
//# sourceMappingURL=abstract-federation-client-authenticated-details-provider-builder.js.map

/***/ }),

/***/ 3416:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Base class for authentication details providers that make remote requests.
 */
class AbstractRequestingAuthenticationDetailsProvider {
    constructor(federationClient, sessionKeySupplier) {
        this.federationClient = federationClient;
        this.sessionKeySupplier = sessionKeySupplier;
    }
    getKeyId() {
        return __awaiter(this, void 0, void 0, function* () {
            return "ST$" + (yield this.federationClient.getSecurityToken());
        });
    }
    getPrivateKey() {
        return this.sessionKeySupplier.getKeyPair().getPrivate();
    }
    getPassphrase() {
        return null;
    }
}
exports.default = AbstractRequestingAuthenticationDetailsProvider;
//# sourceMappingURL=abstract-requesting-authentication-detail-provider.js.map

/***/ }),

/***/ 8154:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimpleAuthenticationDetailsProvider = exports.isRegionProvider = void 0;
/*
 * User Defined type guard function to check if the object is of type RegionProvider
 * https://basarat.gitbooks.io/typescript/content/docs/types/typeGuard.html
 */
function isRegionProvider(arg) {
    return arg.getRegion !== undefined;
}
exports.isRegionProvider = isRegionProvider;
/**
 * The API based authentication details provider which implements [[AuthenticationDetailsProvider]].
 */
class SimpleAuthenticationDetailsProvider {
    /**
     * Construct an instance of [[SimpleAuthenticationDetailsProvider]].
     * @param tenancy   tenancy id.
     * @param user  user id.
     * @param fingerprint   user's fingerprint.
     * @param privateKey    private key to sign the request.
     * @param passphrase    the passphrase of private key.
     */
    constructor(tenancy, user, fingerprint, privateKey, passphrase, region, authType, delegationToken, profileCredentials) {
        this.tenancy = tenancy;
        this.user = user;
        this.fingerprint = fingerprint;
        this.privateKey = privateKey;
        this.passphrase = passphrase;
        this.region = region;
        this.authType = authType;
        this.delegationToken = delegationToken;
        this.profileCredentials = profileCredentials;
        // provider is a member variable that may or may not store the actual AuthenticationDetailsProvider.
        // In case of Cloud shell, provider would be the true AuthenticationDetailsProvider.
        this.provider = null;
    }
    /**
     * Get the key id to sign the http request.
     */
    getKeyId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.tenancy + "/" + this.user + "/" + this.fingerprint;
        });
    }
    /**
     * Get the private key to sign the http request.
     */
    getPrivateKey() {
        return this.privateKey;
    }
    /**
     * Get the passphrase of the private key to sign the http request.
     */
    getPassphrase() {
        return this.passphrase;
    }
    /**
     * Get the Tenancy
     */
    getTenantId() {
        return this.tenancy;
    }
    /**
     * Get the user
     */
    getUser() {
        return this.user;
    }
    /**
     * Get the fingerprint
     */
    getFingerprint() {
        return this.fingerprint;
    }
    /**
     * Get the region
     */
    getRegion() {
        return this.region;
    }
    /**
     * Get the authType
     */
    getAuthType() {
        return this.authType;
    }
    /**
     * Set the provider
     */
    setProvider(provider) {
        this.provider = provider;
    }
    /**
     * Get the provider
     */
    getProvider() {
        return this.provider;
    }
    /**
     * Get the delegation token
     */
    getDelegationToken() {
        return this.delegationToken;
    }
    getProfileCredentials() {
        return this.profileCredentials;
    }
}
exports.SimpleAuthenticationDetailsProvider = SimpleAuthenticationDetailsProvider;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 8873:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
class CertificateAndPrivateKeyPair {
    constructor(certificate, privateKey) {
        this.certificate = certificate;
        this.privateKey = privateKey;
    }
    getCertificate() {
        return this.certificate;
    }
    getPrivateKey() {
        return this.privateKey;
    }
}
exports.default = CertificateAndPrivateKeyPair;
//# sourceMappingURL=certificate-and-privatekey-pair.js.map

/***/ }),

/***/ 3054:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigFileAuthenticationDetailsProvider = void 0;
const auth_1 = __nccwpck_require__(8154);
const utils_1 = __nccwpck_require__(1563);
const config_file_reader_1 = __nccwpck_require__(7407);
const fs_1 = __nccwpck_require__(5747);
const region_1 = __nccwpck_require__(263);
const realm_1 = __nccwpck_require__(3755);
class ConfigFileAuthenticationDetailsProvider {
    /**
     * Creates a new instance using the config file at the default location,
     * see {@link ConfigFileReader#DEFAULT_FILE_PATH}.
     *
     * @param profile
     *            profile to load, optional
     * @param configurationFilePath
     *            config file path, optional
     * @throws Error
     *             if the configuration file could not be loaded
     */
    constructor(configurationFilePath, profile) {
        const pfl = profile || config_file_reader_1.ConfigFileReader.DEFAULT_PROFILE_NAME;
        if (configurationFilePath) {
            this.delegate = this.createConfigFileAuth(config_file_reader_1.ConfigFileReader.parseFileFromPath(configurationFilePath, pfl));
        }
        else {
            this.delegate = this.createConfigFileAuth(config_file_reader_1.ConfigFileReader.parseDefault(pfl));
        }
    }
    /**
     * Get a region based on regionId, if corresponding region is not found from regionId,
     * create a new region by registering regionId with Realm.OC1
     *
     * @param regionId: string
     * @param region: any
     * @return: Region
     */
    retrieveRegionFromRegionId(regionId) {
        let region;
        try {
            return (region = region_1.Region.fromRegionId(regionId));
        }
        catch (e) {
            console.warn(`Found regionId ${regionId} in config file, but not supported by this version of the SDK`);
            // Proceed by assuming the region id in the config file belongs to OC1 realm.
            return (region = region_1.Region.register(regionId, realm_1.Realm.OC1));
        }
    }
    createConfigFileAuth(file) {
        const authType = file.get("authentication_type");
        const tenantId = utils_1.checkNotNull(file.get("tenancy"), "missing tenancy in config");
        const delegationTokenPath = file.get("delegation_token_file");
        let delegationToken = "";
        let region = null;
        const regionEnvVar = process.env.OCI_REGION;
        let regionId = file.get("region") || regionEnvVar;
        if (regionId) {
            region = this.retrieveRegionFromRegionId(regionId);
        }
        else {
            throw Error("Region not specified in Config file or OCI_REGION env variable. Can not proceed without setting a region.");
        }
        if (delegationTokenPath) {
            delegationToken = fs_1.readFileSync(delegationTokenPath, "utf8").replace(/\n/g, "");
        }
        // If authType exist that means we are not doing file based authentication, return early.
        // This also assumes that a delegationTokenPath exists.
        if (authType) {
            return new auth_1.SimpleAuthenticationDetailsProvider(tenantId, "", "", "", "", region, authType, delegationToken);
        }
        const fingerprint = utils_1.checkNotNull(file.get("fingerprint"), "missing fingerprint in config");
        const user = utils_1.checkNotNull(file.get("user"), "missing user in config");
        const pemFilePath = utils_1.checkNotNull(file.get("key_file"), "missing key_file in config");
        const passPhrase = file.get("pass_phrase");
        const privateKey = this.getPvtKey(config_file_reader_1.ConfigFileReader.expandUserHome(pemFilePath));
        const profileCredentials = file.profileCredentials;
        return new auth_1.SimpleAuthenticationDetailsProvider(tenantId, user, fingerprint, privateKey, passPhrase, region, undefined, undefined, profileCredentials);
    }
    getPvtKey(filePath) {
        try {
            const key = fs_1.readFileSync(filePath, "utf8");
            return key;
        }
        catch (e) {
            throw "Failed to read private key from file path.";
        }
    }
    /**
     * Get the key id to sign the http request.
     */
    getKeyId() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delegate.getKeyId();
        });
    }
    /**
     * Get the private key to sign the http request.
     */
    getPrivateKey() {
        return this.delegate.getPrivateKey();
    }
    /**
     * Get the passphrase of the private key to sign the http request.
     */
    getPassphrase() {
        return this.delegate.getPassphrase();
    }
    /**
     * Get the Tenancy
     */
    getTenantId() {
        return this.delegate.getTenantId();
    }
    /**
     * Get the user
     */
    getUser() {
        return this.delegate.getUser();
    }
    /**
     * Get the fingerprint
     */
    getFingerprint() {
        return this.delegate.getFingerprint();
    }
    /**
     * Get the rehion
     */
    getRegion() {
        return this.delegate.getRegion();
    }
    /**
     * Get the authType
     */
    getAuthType() {
        return this.delegate.getAuthType();
    }
    /**
     * Set the provider
     */
    setProvider(provider) {
        this.delegate.setProvider(provider);
    }
    /**
     * Get the provider
     */
    getProvider() {
        return this.delegate.getProvider();
    }
    getDelegationToken() {
        return this.delegate.getDelegationToken();
    }
    getProfileCredentials() {
        return this.delegate.getProfileCredentials();
    }
}
exports.ConfigFileAuthenticationDetailsProvider = ConfigFileAuthenticationDetailsProvider;
//# sourceMappingURL=config-file-auth.js.map

/***/ }),

/***/ 2407:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const key_pair_1 = __importDefault(__nccwpck_require__(3448));
const load_private_key_from_file_1 = __nccwpck_require__(6686);
class FileBasedKeySupplier {
    constructor(privateKeyPath, passphrasePath) {
        this.privateKeyPath = privateKeyPath;
        this.passphrasePath = passphrasePath;
        this.refreshKeys();
    }
    // Getter: KeyPair
    getKeyPair() {
        return this.keyPair;
    }
    // Getter: Public Key
    get publicKey() {
        return this.getKeyPair().getPublic();
    }
    // Getter Private Key
    get privateKey() {
        return this.getKeyPair().getPrivate();
    }
    refreshKeys() {
        if (!this.privateKeyPath) {
            throw Error("privateKeyPath not set");
        }
        // Try to create a privateKey & publicKey from the given privateKeyPath & passphrasePath
        try {
            const { publicKey, privateKey } = load_private_key_from_file_1.loadPrivateKeyFromFile(this.privateKeyPath, this.passphrasePath);
            this.keyPair = new key_pair_1.default(publicKey, privateKey);
        }
        catch (e) {
            throw Error(`Problem occured trying to create KeyPairs from given paths with error: ${e}`);
        }
    }
}
exports.default = FileBasedKeySupplier;
//# sourceMappingURL=file-based-key-supplier.js.map

/***/ }),

/***/ 4947:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
const fs_1 = __nccwpck_require__(5747);
const security_token_adapter_1 = __importDefault(__nccwpck_require__(84));
/**
 * This class gets a security token from file.
 */
class FileBasedResourcePrincipalFederationClient {
    constructor(sessionKeySupplier, resourcePrincipalSessionTokenPath) {
        this.sessionKeySupplier = sessionKeySupplier;
        this.resourcePrincipalSessionTokenPath = resourcePrincipalSessionTokenPath;
        this.sessionKeySupplier = sessionKeySupplier;
        this.securityTokenAdapter = new security_token_adapter_1.default("", sessionKeySupplier);
        this.resourcePrincipalSessionTokenPath = resourcePrincipalSessionTokenPath;
    }
    /**
     * Gets a security token. If there is already a valid token cached, it will be returned. Else this will make a call
     * to the auth service to get a new token, using the provided suppliers.
     *
     * This method is thread-safe.
     * @return the security token
     * @throws OciError If there is any issue with getting a token from the auth server
     */
    getSecurityToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.securityTokenAdapter.isValid()) {
                return this.securityTokenAdapter.getSecurityToken();
            }
            return yield this.refreshAndGetSecurityTokenInner(true);
        });
    }
    /**
     * Return a claim embedded in the security token
     * @param key the name of the claim
     * @return the value of the claim or null if unable to find
     */
    getStringClaim(key) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshAndGetSecurityToken();
            return this.securityTokenAdapter.getStringClaim(key);
        });
    }
    refreshAndGetSecurityToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.refreshAndGetSecurityTokenInner(false);
        });
    }
    refreshAndGetSecurityTokenInner(doFinalTokenValidityCheck) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check again to see if the JWT is still invalid, unless we want to skip that check
            if (!doFinalTokenValidityCheck || !this.securityTokenAdapter.isValid()) {
                this.sessionKeySupplier.refreshKeys();
                this.securityTokenAdapter = this.getSecurityTokenFromFile();
                return this.securityTokenAdapter.getSecurityToken();
            }
            return this.securityTokenAdapter.getSecurityToken();
        });
    }
    /**
     * Gets a security token from file
     * @return the security token, which is basically a JWT token string
     */
    getSecurityTokenFromFile() {
        const keyPair = this.sessionKeySupplier.getKeyPair();
        if (!keyPair) {
            throw Error("Keypair for session was not provided");
        }
        let securityToken = "";
        try {
            securityToken = fs_1.readFileSync(this.resourcePrincipalSessionTokenPath, "utf8");
        }
        catch (e) {
            throw Error(`Failed to read token due to error: ${e}`);
        }
        return new security_token_adapter_1.default(securityToken, this.sessionKeySupplier);
    }
}
exports.default = FileBasedResourcePrincipalFederationClient;
//# sourceMappingURL=file-based-resource-principal-federation-client.js.map

/***/ }),

/***/ 4024:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const key_pair_1 = __importDefault(__nccwpck_require__(3448));
const sshpk_1 = __nccwpck_require__(7022);
/**
 * This is a SessionKeySupplier which fakes the ability to refresh its contained key.
 * It is initialised once with fixed values of private key and (optional) passphrase; that key is always returned.
 */
class FixedContentKeySupplier {
    constructor(privateKeyContent, passphrase) {
        this.privateKeyContent = privateKeyContent;
        this.passphrase = passphrase;
        try {
            let options = {};
            // parse privateKeyContent with passphrase (if it exist) into a PrivateKey
            if (passphrase) {
                Object.assign(options, { passphrase: passphrase });
            }
            const privateKey = sshpk_1.parsePrivateKey(privateKeyContent, "auto", options);
            const publicKey = privateKey.toPublic();
            this.keyPair = new key_pair_1.default(publicKey.toString("pem"), privateKey.toBuffer("pem", {}).toString());
        }
        catch (e) {
            throw Error(`Failed to read file contents, error: ${e}`);
        }
    }
    // Getter: KeyPair
    getKeyPair() {
        return this.keyPair;
    }
    // Getter: Public Key
    get publicKey() {
        return this.getKeyPair().getPublic();
    }
    // Getter Private Key
    get privateKey() {
        return this.getKeyPair().getPrivate();
    }
    refreshKeys() { }
}
exports.default = FixedContentKeySupplier;
//# sourceMappingURL=fixed-content-key-supplier.js.map

/***/ }),

/***/ 8384:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const security_token_adapter_1 = __importDefault(__nccwpck_require__(84));
/**
 * This class returns a security token, supplied as a fixed value.
 */
class FixedContentResourcePrincipalFederationClient {
    /**
     * Constructor of FixedContentResourcePrincipalFederationClient.
     *
     * @param resourcePrincipalSessionToken the constant value for the RPST
     * @param sessionKeySupplier the associated SessionKeySupplier
     */
    constructor(resourcePrincipalSessionToken, sessionKeySupplier) {
        this.securityTokenAdapter = new security_token_adapter_1.default(resourcePrincipalSessionToken, sessionKeySupplier);
    }
    getSecurityToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.securityTokenAdapter.getSecurityToken();
        });
    }
    refreshAndGetSecurityToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.securityTokenAdapter.getSecurityToken();
        });
    }
    getStringClaim(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.securityTokenAdapter.getStringClaim(key);
        });
    }
}
exports.default = FixedContentResourcePrincipalFederationClient;
//# sourceMappingURL=fixed-content-resource-principal-federation-client.js.map

/***/ }),

/***/ 1458:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Utilities dealing with authorization.
 */
class AuthUtils {
    /**
     * Get the tenant id from the given certificate.
     * @param certificate the given certificate.
     * @return the tenant id.
     */
    static getTenantIdFromCertificate(certificate) {
        let tenancyId = "";
        /* Note: We currently have a newer version of sshpk that don't match the same version
         * as the @types/sshpk. Because of the mismatch version, the types dont quite match
         * Microsoft have not updated their types file. To get around temporarily, cast "any"
         */
        const OPC_TENANT = "opc-tenant:";
        const OPC_IDENTITY = "opc-identity:";
        try {
            const subjects = certificate.subjects;
            for (let subject of subjects) {
                const components = subject.components;
                for (let component of components) {
                    if (component.value.includes(OPC_TENANT)) {
                        const str = component.value;
                        tenancyId = str.slice(str.indexOf(OPC_TENANT) + OPC_TENANT.length);
                        return tenancyId;
                    }
                    if (component.value.includes(OPC_IDENTITY)) {
                        const str = component.value;
                        tenancyId = str.slice(str.indexOf(OPC_IDENTITY) + OPC_IDENTITY.length);
                        return tenancyId;
                    }
                }
            }
            if (!tenancyId) {
                throw Error("The certificate does not contain tenant id.");
            }
        }
        catch (e) {
            throw Error("Failed to parse tenancyId from certificate");
        }
        return tenancyId;
    }
    static sanitizeCertificateString(certificate) {
        return certificate
            .replace("-----BEGIN CERTIFICATE-----", "")
            .replace("-----END CERTIFICATE-----", "")
            .replace("-----BEGIN PUBLIC KEY-----", "")
            .replace("-----END PUBLIC KEY-----", "")
            .replace("\n", "");
    }
}
exports.default = AuthUtils;
//# sourceMappingURL=auth-utils.js.map

/***/ }),

/***/ 5157:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delegateAuthProvider = void 0;
const instance_principals_authentication_detail_provider_1 = __importDefault(__nccwpck_require__(252));
function delegateAuthProvider(authenticationDetailsProvider) {
    return __awaiter(this, void 0, void 0, function* () {
        // Always make the check to see if there is a true authenticationDetailsProvider to use
        let provider = null;
        if (authenticationDetailsProvider.getProvider && authenticationDetailsProvider.getProvider()) {
            provider = authenticationDetailsProvider.getProvider();
        }
        else if (authenticationDetailsProvider.getAuthType &&
            authenticationDetailsProvider.getAuthType()) {
            // Check if authenticationDetialsProvider contain a auth_type,
            // if so, we want to set and use the appropriate auth provider.
            const authType = authenticationDetailsProvider.getAuthType();
            if (authType === "instance_principal") {
                provider = yield new instance_principals_authentication_detail_provider_1.default().build();
                authenticationDetailsProvider.setProvider(provider);
            }
        }
        return provider;
    });
}
exports.delegateAuthProvider = delegateAuthProvider;
//# sourceMappingURL=delegate-auth-provider.js.map

/***/ }),

/***/ 6686:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadPrivateKeyFromFile = void 0;
const fs_1 = __nccwpck_require__(5747);
const sshpk_1 = __nccwpck_require__(7022);
function loadPrivateKeyFromFile(privateKeyPath, passphrasePath) {
    try {
        let options = {};
        let passphraseFileContent;
        const privateKeyFileContent = fs_1.readFileSync(privateKeyPath, "utf8");
        if (passphrasePath) {
            passphraseFileContent = fs_1.readFileSync(passphrasePath, "utf8");
            Object.assign(options, { passphrase: passphraseFileContent });
        }
        // parse privateKeyFileContent with passphraseFileContent (if it exist) into a PrivateKey
        const privateKey = sshpk_1.parsePrivateKey(privateKeyFileContent, "auto", options);
        const publicKey = privateKey.toPublic();
        return {
            publicKey: publicKey.toString("pem"),
            privateKey: privateKey.toBuffer("pem", {}).toString()
        };
    }
    catch (e) {
        throw Error(`Failed to read file contents, error: ${e}`);
    }
}
exports.loadPrivateKeyFromFile = loadPrivateKeyFromFile;
//# sourceMappingURL=load-private-key-from-file.js.map

/***/ }),

/***/ 252:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const abstract_requesting_authentication_detail_provider_1 = __importDefault(__nccwpck_require__(3416));
const abstract_federation_client_authenticated_details_provider_builder_1 = __importDefault(__nccwpck_require__(2478));
class InstancePrincipalsAuthenticationDetailsProvider extends abstract_requesting_authentication_detail_provider_1.default {
    constructor(federationClient, sessionKeySupplier, region) {
        super(federationClient, sessionKeySupplier);
        this.federationClient = federationClient;
        this.sessionKeySupplier = sessionKeySupplier;
        this.region = region;
    }
    /**
     * Refreshes the authentication data used by the provider
     * @return the refreshed authentication data
     */
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.federationClient.refreshAndGetSecurityToken();
        });
    }
    // region getter
    getRegion() {
        return this.region;
    }
    /**
     * Creates a new InstancePrincipalsAuthenticationDetailsProviderBuilder.
     * @return A new builder instance.
     */
    static builder() {
        return new InstancePrincipalsAuthenticationDetailsProviderBuilder();
    }
}
class InstancePrincipalsAuthenticationDetailsProviderBuilder extends abstract_federation_client_authenticated_details_provider_builder_1.default {
    constructor(purpose) {
        super();
        if (purpose) {
            this.purpose = purpose;
        }
    }
    build() {
        const _super = Object.create(null, {
            build: { get: () => super.build }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.autoDetectUsingMetadataUrl();
            return yield _super.build.call(this);
        });
    }
    buildProvider(sessionKeySupplierToUse) {
        return new InstancePrincipalsAuthenticationDetailsProvider(this._federationClient, sessionKeySupplierToUse, this.region);
    }
    set federationEndpoint(federationEndpoint) {
        super._federationEndpoint = federationEndpoint;
    }
    set leafCertificateSupplier(leafCertificateSupplier) {
        super._leafCertificateSupplier = leafCertificateSupplier;
    }
}
exports.default = InstancePrincipalsAuthenticationDetailsProviderBuilder;
//# sourceMappingURL=instance-principals-authentication-detail-provider.js.map

/***/ }),

/***/ 3448:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * This class is a simple holder for a key pair (a public key and a
 * private key).
 */
class KeyPair {
    constructor(publicKey, privateKey) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }
    getPublic() {
        return this.publicKey;
    }
    getPrivate() {
        return this.privateKey;
    }
}
exports.default = KeyPair;
//# sourceMappingURL=key-pair.js.map

/***/ }),

/***/ 5228:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * This constructs a default implementation of the {@link ResourcePrincipalAuthenticationDetailsProvider}, constructed
 * in accordance with the following environment variable settings:
 * <ul>
 *
 * <li>{@code OCI_RESOURCE_PRINCIPAL_VERSION}:
 * <p>permitted values are "2.2"</p>
 * </li>
 *
 * <li>{@code OCI_RESOURCE_PRINCIPAL_RPST}:
 * <p>If this is an absolute path, then the filesystem-supplied resource principal session token will be retrieved from
 *   that location. This mode supports token refresh (if the environment replaces the RPST in the filesystem).</p>
 * <p>Otherwise, the environment variable is taken to hold the raw value of an RPST.
 *   Under these circumstances, the RPST cannot be refreshed; consequently, this mode is only usable for short-lived
 *   executables.</p>
 * </li>
 * <li>{@code OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM}:
 * <p>If this is an absolute path, then the filesystem-supplied private key will be retrieved from that location. As
 *   with the OCI_RESOURCE_PRINCIPAL_RPST, this mode supports token refresh if the environment can update the file
 *   contents.</p>
 * <p>Otherwise, the value is interpreted as the direct injection of a private key. The same considerations as to the
 *   lifetime of this value apply when directly injecting a key.</p>
 * </li>
 * <li>{@code OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE}:
 * <p>This is optional. If set, it contains either the location (as an absolute path) or the value of the passphrase
 *   associated with the private key.</p>
 * </li>
 * <li>{@code OCI_RESOURCE_PRINCIPAL_REGION}:
 * <p>If set, this holds the canonical form of the local region. This is intended to enable executables to locate their
 *   "local" OCI service endpoints.</p>
 * </li>
 * </ul>
 */
const path_1 = __importDefault(__nccwpck_require__(5622));
const region_1 = __nccwpck_require__(263);
const fixed_content_key_supplier_1 = __importDefault(__nccwpck_require__(4024));
const file_based_key_supplier_1 = __importDefault(__nccwpck_require__(2407));
const abstract_requesting_authentication_detail_provider_1 = __importDefault(__nccwpck_require__(3416));
const file_based_resource_principal_federation_client_1 = __importDefault(__nccwpck_require__(4947));
const fixed_content_resource_principal_federation_client_1 = __importDefault(__nccwpck_require__(8384));
class ResourcePrincipalAuthenticationDetailsProvider extends abstract_requesting_authentication_detail_provider_1.default {
    constructor(federationClient, sessionKeySupplier, region) {
        super(federationClient, sessionKeySupplier);
        this.federationClient = federationClient;
        this.sessionKeySupplier = sessionKeySupplier;
        this.region = region;
    }
    // Builder method to create ResourcePrincipalAuthenticationDetailsProviderBuilder which will build
    // ResourcePrincipalAuthenticationDetailsProvider
    static builder() {
        return new ResourcePrincipalAuthenticationDetailsProvider.ResourcePrincipalAuthenticationDetailsProviderBuilder().build();
    }
    /**
     * Session tokens carry JWT-like claims. Permit the retrieval of the value of those
     * claims from the token.
     * At the least, the token should carry claims for {@link ClaimKeys#COMPARTMENT_ID_CLAIM_KEY} and {@link ClaimKeys#TENANT_ID_CLAIM_KEY}
     * @param key the name of a claim in the session token
     * @return the claim value.
     */
    getStringClaim(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.federationClient.getStringClaim(key);
        });
    }
    /**
     * Refreshes the authentication data used by the provider
     * @return the refreshed authentication data
     */
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.federationClient.refreshAndGetSecurityToken();
        });
    }
    // region getter
    getRegion() {
        return this.region;
    }
}
exports.default = ResourcePrincipalAuthenticationDetailsProvider;
ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_VERSION = "OCI_RESOURCE_PRINCIPAL_VERSION";
ResourcePrincipalAuthenticationDetailsProvider.RP_VERSION_2_2 = "2.2";
ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_RPST = "OCI_RESOURCE_PRINCIPAL_RPST";
ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM = "OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM";
ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE = "OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE";
ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_REGION_ENV_VAR_NAME = "OCI_RESOURCE_PRINCIPAL_REGION";
ResourcePrincipalAuthenticationDetailsProvider.ClaimKeys = (_a = class ClaimsKey {
    },
    /**
     * COMPARTMENT_ID is the claim name that the RPST holds for the resource compartment.
     * This can be passed to {@link #getStringClaim} to retrieve the resource's compartment OCID.
     */
    _a.COMPARTMENT_ID_CLAIM_KEY = "res_compartment",
    /**
     * TENANT_ID_CLAIM_KEY is the claim name that the RPST holds for the resource tenancy.
     * This can be passed to {@link #getStringClaim} to retrieve the resource's tenancy OCID.
     */
    _a.TENANT_ID_CLAIM_KEY = "res_tenant",
    _a);
/**
 * Builder for ResourcePrincipalAuthenticationDetailsProvider that understands the V2.2 configuration
 */
ResourcePrincipalAuthenticationDetailsProvider.ResourcePrincipalAuthenticationDetailsProviderBuilder = class ResourcePrincipalAuthenticationDetailsProviderBuilder {
    constructor() { }
    build() {
        const OciResourcePrincipalVersion = process.env[ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_VERSION];
        if (!OciResourcePrincipalVersion) {
            throw Error("OCI_RESOURCE_PRINCIPAL_VERSION environment variable is missing");
        }
        switch (OciResourcePrincipalVersion) {
            case ResourcePrincipalAuthenticationDetailsProvider.RP_VERSION_2_2:
                return ResourcePrincipalAuthenticationDetailsProviderBuilder.build_2_2();
            default:
                throw Error(`OCI_RESOURCE_PRINCIPAL_VERSION environment variable has an unknown value ${OciResourcePrincipalVersion}`);
        }
    }
    /**
     * Helper method that interprets the runtime environment to build a v2.2-configured client
     * @return ResourcePrincipalAuthenticationDetailsProvider
     */
    static build_2_2() {
        let federationClient;
        let sessionKeySupplier;
        let region;
        const ociResourcePrincipalPrivateKey = process.env[ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM];
        const ociResourcePrincipalPassphrase = process.env[ResourcePrincipalAuthenticationDetailsProvider
            .OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE];
        const ociResourcePrincipalRPST = process.env[ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_RPST];
        const ociResourcePrincipalRegion = process.env[ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_REGION_ENV_VAR_NAME];
        if (!ociResourcePrincipalPrivateKey) {
            throw Error("OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM environment variable missing");
        }
        if (!ociResourcePrincipalRPST) {
            throw Error("OCI_RESOURCE_PRINCIPAL_RPST environment variable is missing");
        }
        if (!ociResourcePrincipalRegion) {
            throw Error("OCI_RESOURCE_PRINCIPAL_REGION_ENV_VAR_NAME environment variable missing");
        }
        // Do a check to see if the file path of privateKey and passphrase are absolute path
        if (path_1.default.isAbsolute(ociResourcePrincipalPrivateKey)) {
            if (ociResourcePrincipalPassphrase && !path_1.default.isAbsolute(ociResourcePrincipalPassphrase)) {
                throw Error("cannot mix path and constant settings for \
          OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM and OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE");
            }
            sessionKeySupplier = new file_based_key_supplier_1.default(ociResourcePrincipalPrivateKey, ociResourcePrincipalPassphrase);
        }
        else {
            sessionKeySupplier = new fixed_content_key_supplier_1.default(ociResourcePrincipalPrivateKey, ociResourcePrincipalPassphrase);
        }
        if (path_1.default.isAbsolute(ociResourcePrincipalRPST)) {
            federationClient = new file_based_resource_principal_federation_client_1.default(sessionKeySupplier, ociResourcePrincipalRPST);
        }
        else {
            federationClient = new fixed_content_resource_principal_federation_client_1.default(ociResourcePrincipalRPST, sessionKeySupplier);
        }
        //  The region should be something like "us-phoenix-1" but if we get "phx" then convert it.
        const regionId = region_1.Region.getRegionIdFromShortCode(ociResourcePrincipalRegion);
        region = region_1.Region.fromRegionId(regionId);
        return new ResourcePrincipalAuthenticationDetailsProvider(federationClient, sessionKeySupplier, region);
    }
};
//# sourceMappingURL=resource-principal-authentication-details-provider.js.map

/***/ }),

/***/ 84:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jsonwebtoken_1 = __importDefault(__nccwpck_require__(7486));
/**
 * Helper class to store security token and sessionKeySupplier
 * contain methods to check if token is expired and needs to be refreshed
 */
class SecurityTokenAdapter {
    constructor(securityToken, sessionKeySupplier) {
        this.securityToken = securityToken;
        this.sessionKeySupplier = sessionKeySupplier;
        this.jwt = null;
        this.jwt = this.securityToken ? this.parse(this.securityToken) : null;
    }
    /**
     * Getter for securityToken
     * @returns securityToken
     */
    getSecurityToken() {
        return this.securityToken;
    }
    /**
     * Helper method to verify token's secret matches publicKey string
     * then parse token string into an complete object (header, payload, signature)
     * @param token: string
     * @returns payload: object
     */
    parse(token) {
        try {
            const payload = jsonwebtoken_1.default.decode(token, { complete: true });
            return payload;
        }
        catch (e) {
            throw Error(`Failed to decode token, error: ${e}`);
        }
    }
    /**
     * Checks to see current token exists, and if so, check expiration time
     * @return true if valid
     */
    isValid() {
        const secondsSinceEpoch = Math.round(Date.now() / 1000);
        if (this.jwt == null) {
            return false;
        }
        else if (this.jwt.payload && this.jwt.payload.exp > secondsSinceEpoch) {
            return true;
        }
        return false;
    }
    /**
     * Return a claim from the token given a key if it exist, else return null
     * @param key: string
     * @return value of the claim
     */
    getStringClaim(key) {
        if (this.jwt == null) {
            return null;
        }
        return this.jwt.payload[key] ? this.jwt.payload[key] : null;
    }
}
exports.default = SecurityTokenAdapter;
//# sourceMappingURL=security-token-adapter.js.map

/***/ }),

/***/ 2306:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * This is a helper class to generate in-memory temporary session keys.
 * <p>
 * The thread safety of this class is ensured
 */
const crypto_1 = __nccwpck_require__(6417);
const key_pair_1 = __importDefault(__nccwpck_require__(3448));
class SessionKeySupplierImpl {
    constructor() {
        const { privateKey, publicKey } = crypto_1.generateKeyPairSync("rsa", {
            modulusLength: 2048,
            publicExponent: 65537,
            publicKeyEncoding: {
                type: "spki",
                format: "pem"
            },
            privateKeyEncoding: {
                type: "pkcs8",
                format: "pem"
            }
        });
        this.keyPair = new key_pair_1.default(publicKey, privateKey);
    }
    getKeyPair() {
        return this.keyPair;
    }
    refreshKeys() {
        const { privateKey, publicKey } = crypto_1.generateKeyPairSync("rsa", {
            modulusLength: 2048,
            publicExponent: 65537,
            publicKeyEncoding: {
                type: "spki",
                format: "pem"
            },
            privateKeyEncoding: {
                type: "pkcs8",
                format: "pem"
            }
        });
        this.keyPair = new key_pair_1.default(publicKey, privateKey);
    }
}
exports.default = SessionKeySupplierImpl;
//# sourceMappingURL=session-key-supplier.js.map

/***/ }),

/***/ 8052:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResourceDetails = exports.URLBasedX509CertificateSupplier = void 0;
/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
const sshpk_1 = __nccwpck_require__(7022);
const http_1 = __nccwpck_require__(6316);
const certificate_and_privatekey_pair_1 = __importDefault(__nccwpck_require__(8873));
const helper_1 = __nccwpck_require__(7621);
const circuit_breaker_1 = __importDefault(__nccwpck_require__(5620));
/**
 * A class that retrieves certificate based on metadata service url
 */
class URLBasedX509CertificateSupplier {
    constructor(certificateDetails, privateKeyDetails, privateKeyPassphraseCharacters) {
        this.certificateDetails = certificateDetails;
        this.privateKeyDetails = privateKeyDetails;
        this.privateKeyPassphraseCharacters = privateKeyPassphraseCharacters;
    }
    /**
     * So far we don't care whether the certificate is current or not.
     * @return false always.
     */
    isCurrent() {
        return false;
    }
    /**
     * A method to refresh the X509 certificate and return the certificate
     * @returns Promise<URLBasedX509CertificateSupplier>
     */
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            const certificate = yield this.readRawCertificate(this.certificateDetails);
            const privateKey = yield this.readPrivateKey(this.privateKeyDetails, this.privateKeyPassphraseCharacters);
            this.certificateAndKeyPair = new certificate_and_privatekey_pair_1.default(certificate, privateKey);
            return this;
        });
    }
    readRawCertificate(certificateDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const certificateStream = yield certificateDetails.send();
            // Convert responseStream to actual certificate string
            const certificateString = yield helper_1.getStringFromResponseBody(certificateStream.body);
            const certificate = sshpk_1.parseCertificate(certificateString, "pem");
            return certificate;
        });
    }
    readPrivateKey(privateKeyResourceDetails, privateKeyPassphrase) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = {};
            if (!privateKeyResourceDetails || !privateKeyResourceDetails.getUrl()) {
                return null;
            }
            if (privateKeyPassphrase) {
                Object.assign(options, { passphrase: privateKeyPassphrase });
            }
            try {
                const privateKeyStream = yield privateKeyResourceDetails.send();
                // Convert privateKeyStream to privateKey string
                const privateKeyString = yield helper_1.getStringFromResponseBody(privateKeyStream.body);
                const privateKey = sshpk_1.parsePrivateKey(privateKeyString, "auto", options);
                return privateKey;
            }
            catch (e) {
                throw Error(`Unable to obtain private key, error: , ${e}`);
            }
        });
    }
    getCertificateAndKeyPair() {
        return this.certificateAndKeyPair;
    }
}
exports.URLBasedX509CertificateSupplier = URLBasedX509CertificateSupplier;
class ResourceDetails {
    constructor(url, headers) {
        this.url = url;
        this.headers = headers;
    }
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            const httpClient = new http_1.FetchHttpClient(null, circuit_breaker_1.default.internalCircuit);
            const response = yield httpClient.send({
                uri: this.url,
                method: "GET",
                headers: this.headers
            });
            return response;
        });
    }
    getUrl() {
        return this.url;
    }
}
exports.ResourceDetails = ResourceDetails;
//# sourceMappingURL=url-based-x509-certificate-supplier.js.map

/***/ }),

/***/ 5620:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Breaker = __nccwpck_require__(3857);
class CircuitBreaker {
    constructor(options) {
        this.circuit = null;
        this.circuit = options
            ? new Breaker(fetch, options)
            : new Breaker(fetch, {
                timeout: 10000,
                errorThresholdPercentage: 50,
                resetTimeout: 30000 // After 30 seconds, try again.
            });
    }
}
exports.default = CircuitBreaker;
CircuitBreaker.enableDefault = false;
CircuitBreaker.defaultCircuit = new Breaker(fetch, {
    timeout: 10000,
    errorThresholdPercentage: 50,
    resetTimeout: 30000 // After 30 seconds, try again.
});
CircuitBreaker.internalCircuit = new Breaker(fetch, {
    timeout: 10000,
    errorThresholdPercentage: 50,
    resetTimeout: 30000 // After 30 seconds, try again.
});
//# sourceMappingURL=circuit-breaker.js.map

/***/ }),

/***/ 7407:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigAccumulator = exports.ConfigFile = exports.ConfigFileReader = void 0;
const fs_1 = __nccwpck_require__(5747);
class ConfigFileReader {
    /**
     * Creates a new ConfigFile instance using the configuration at the default location,
     * using the given profile.
     * @param profile The profile name to load, or null if you want to load the
     *            "DEFAULT" profile.
     * @return A new ConfigFile instance.
     * @throws Error, if the file could not be read.
     */
    static parseDefault(profile) {
        const envVarConfigFile = process.env.OCI_CONFIG_FILE;
        // Check if file exists in the location
        const defaultExists = ConfigFileReader.fileExists(ConfigFileReader.DEFAULT_FILE_PATH);
        const fallbackExists = ConfigFileReader.fileExists(ConfigFileReader.FALLBACK_DEFAULT_FILE_PATH);
        let configFileFromEnvVarExists = false;
        if (envVarConfigFile) {
            configFileFromEnvVarExists = ConfigFileReader.fileExists(envVarConfigFile);
        }
        // If default file exists, assign effecive file as default file, else fallback as effective file
        if (defaultExists) {
            return ConfigFileReader.parseFileFromPath(ConfigFileReader.DEFAULT_FILE_PATH, profile);
        }
        else if (configFileFromEnvVarExists) {
            return ConfigFileReader.parseFileFromPath(envVarConfigFile, profile);
        }
        else if (fallbackExists) {
            return ConfigFileReader.parseFileFromPath(ConfigFileReader.FALLBACK_DEFAULT_FILE_PATH, profile);
        }
        throw new Error(` Can't load the default config from ${ConfigFileReader.DEFAULT_FILE_PATH} or ${ConfigFileReader.FALLBACK_DEFAULT_FILE_PATH} because it does not exists or its not a file.`);
    }
    static expandUserHome(path) {
        // If the home (~) shortcut is used, then attempt to determine correct path.
        // Otherwise, leave as is to allow users to always be able to specify a path
        // without the SDK modifying it.
        if (path.startsWith("~/") || path.startsWith("~\\")) {
            return (__nccwpck_require__(2087).homedir() +
                ConfigFileReader.correctPath(process.platform === "win32", path.substring(1)));
        }
        else {
            return path;
        }
    }
    // Handle the case where somebody is copying the config file
    // between platforms (or copying examples without changing values)
    static correctPath(isWindows, path) {
        if (isWindows) {
            // https://msdn.microsoft.com/en-us/library/aa365247
            // forward slash is reserved, assume its not supposed to
            // be there and replace with back slash
            path = path.replace("/", "\\");
        }
        // back slash is not a reserved character on other platforms,
        // so do not attempt to modify it
        return path;
    }
    static fileExists(filepath) {
        return fs_1.existsSync(ConfigFileReader.expandUserHome(filepath));
    }
    static parseFileFromPath(path, profile) {
        if (ConfigFileReader.fileExists(path)) {
            const fileContent = fs_1.readFileSync(ConfigFileReader.expandUserHome(path), "utf8");
            return ConfigFileReader.parse(fileContent, profile);
        }
        throw Error(`File does not exists at ${path}`);
    }
    static parse(fileContent, profile) {
        const lines = fileContent.split("\n").filter(Boolean);
        const accumulator = new ConfigAccumulator();
        lines.forEach(l => {
            accumulator.accept(l);
        });
        if (!accumulator.foundDefaultProfile) {
            console.info("No DEFAULT profile was specified in the configuration");
        }
        if (profile !== null && !accumulator.configurationsByProfile.has(profile)) {
            throw new Error("No profile named " + profile + " exists in the configuration file");
        }
        return new ConfigFile(accumulator, profile);
    }
}
exports.ConfigFileReader = ConfigFileReader;
/**
 * Default location of the config file.
 */
ConfigFileReader.DEFAULT_FILE_PATH = "~/.oci/config";
/**
 * The fallback default location of the config file. If and only if the DEFAULT_FILE_PATH does not exist,
 * this fallback default location will be used.
 */
ConfigFileReader.FALLBACK_DEFAULT_FILE_PATH = "~/.oraclebmc/config";
ConfigFileReader.DEFAULT_PROFILE_NAME = "DEFAULT";
class ConfigFile {
    constructor(acc, profile) {
        this.accumulator = acc;
        this.profile = profile;
    }
    /**
     * Gets the value associated with a given key. The value returned will
     * be the one for the selected profile (if available), else the value in
     * the DEFAULT profile (if specified), else null.
     *
     * @param key, The key to look up.
     * @return The value, or null if it didn't exist.
     */
    get(key) {
        if (this.profile && this.accumulator.configurationsByProfile.get(this.profile).has(key)) {
            return this.accumulator.configurationsByProfile.get(this.profile).get(key);
        }
        return this.accumulator.foundDefaultProfile
            ? this.accumulator.configurationsByProfile
                .get(ConfigFileReader.DEFAULT_PROFILE_NAME)
                .get(key)
            : null;
    }
    get profileCredentials() {
        return this.accumulator;
    }
}
exports.ConfigFile = ConfigFile;
class ConfigAccumulator {
    constructor() {
        this.configurationsByProfile = new Map();
        this["foundDefaultProfile"] = false;
    }
    accept(line) {
        const trimmedLine = line.trim();
        // no blank Lines
        if (!trimmedLine) {
            return;
        }
        // skip comments
        if (trimmedLine.charAt(0) === "#") {
            return;
        }
        if (trimmedLine.charAt(0) === "[" && trimmedLine.charAt(trimmedLine.length - 1) === "]") {
            this.currentProfile = trimmedLine.substring(1, trimmedLine.length - 1).trim();
            if (!this.currentProfile) {
                throw Error("Cannot have empty profile name: " + line);
            }
            if (this.currentProfile === ConfigFileReader.DEFAULT_PROFILE_NAME) {
                this.foundDefaultProfile = true;
            }
            if (!this.configurationsByProfile.has(this.currentProfile)) {
                this.configurationsByProfile.set(this.currentProfile, new Map());
            }
            return;
        }
        const splitIndex = trimmedLine.indexOf("=");
        if (splitIndex === -1) {
            throw new Error("Found line with no key-value pair: " + line);
        }
        const key = trimmedLine.substring(0, splitIndex).trim();
        const value = trimmedLine.substring(splitIndex + 1).trim();
        if (!key) {
            throw new Error("Found line with no key: " + line);
        }
        if (!this.currentProfile) {
            throw new Error("Config parse error, attempted to read configuration without specifying a profile: " + line);
        }
        this.configurationsByProfile.get(this.currentProfile).set(key, value);
    }
}
exports.ConfigAccumulator = ConfigAccumulator;
//# sourceMappingURL=config-file-reader.js.map

/***/ }),

/***/ 8041:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Constants = {
    APPLICATION_JSON: "application/json"
};
exports.default = Constants;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 5373:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EndpointBuilder = void 0;
const region_1 = __nccwpck_require__(263);
const realm_1 = __nccwpck_require__(3755);
class EndpointBuilder {
    static createEndpointFromRegion(template, region) {
        const regionId = region.regionId;
        const secondLevelDomain = region.realm.secondLevelDomain;
        return EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(template, regionId, secondLevelDomain);
    }
    static createEndpointFromRegionId(template, regionId) {
        const region = region_1.Region.fromRegionId(regionId);
        if (region)
            return EndpointBuilder.createEndpointFromRegion(template, region);
        console.log(`Unknown regionId [${regionId}], Assuming its in default Realm OC1`);
        const defaultRealm = realm_1.Realm.OC1;
        return EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(template, regionId, defaultRealm.secondLevelDomain);
    }
    static createEndpointFromRegionIdAndSecondLevelDomain(template, regionId, secondLevelDomain) {
        if (!template)
            throw Error("Template can not be undefined or empty");
        if (!regionId)
            throw Error("regionId can not be undefined or empty");
        if (!secondLevelDomain)
            throw Error("secondLevelDomain can not be undefined or empty");
        return template.replace("{secondLevelDomain}", secondLevelDomain).replace("{region}", regionId);
    }
}
exports.EndpointBuilder = EndpointBuilder;
//# sourceMappingURL=endpoint-builder.js.map

/***/ }),

/***/ 2956:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OciError = void 0;
class OciError extends Error {
    constructor(statusCode, serviceCode, message, opcRequestId) {
        super(message);
        this.statusCode = statusCode;
        this.serviceCode = serviceCode;
        this.opcRequestId = opcRequestId;
    }
}
exports.OciError = OciError;
//# sourceMappingURL=error.js.map

/***/ }),

/***/ 3649:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addUserAgent = exports.addOpcRequestId = void 0;
/* This utility adds extra headers to each request before being sent over wire*/
const package_json_1 = __nccwpck_require__(1717);
const utils_1 = __nccwpck_require__(1563);
const uuidv1 = __nccwpck_require__(4185);
const OPC_REQUEST_ID_HEADER = "opc-request-id";
const USER_AGENT_HEADER = "User-Agent";
const BROWSER_USER_AGENT_HEADER = "X-Orcl-User-Agent";
const PLATFORM_KEY = "platform";
const RELEASE_KEY = "relase";
const VERSION_KEY = "nodeVersion";
let NODE_PLATFORM_HASH = new Map();
function addOpcRequestId(headers) {
    // if user has not passed opc-request-id
    if (!hasOpcRequestId(headers)) {
        headers.append(OPC_REQUEST_ID_HEADER, generateRequestId());
    }
}
exports.addOpcRequestId = addOpcRequestId;
function hasOpcRequestId(headers) {
    if (headers.has(OPC_REQUEST_ID_HEADER)) {
        return true;
    }
    return false;
}
function generateRequestId() {
    return uuidv1()
        .replace("-", "")
        .toLocaleUpperCase("en-US");
}
function addUserAgent(headers) {
    const appendUserAgent = process.env.OCI_SDK_APPEND_USER_AGENT;
    const clientInfo = `Oracle-TypeScriptSDK/${package_json_1.version}`;
    // Check if the sdk is used in browser or node, populate header accordingly.
    if (!utils_1.isBrowser()) {
        // Hash the values of Platform specific attributes
        if (utils_1.isEmpty(NODE_PLATFORM_HASH)) {
            populatePlatformHash();
        }
        const platform = NODE_PLATFORM_HASH.get(PLATFORM_KEY);
        const release = NODE_PLATFORM_HASH.get(RELEASE_KEY);
        const nodeVersion = NODE_PLATFORM_HASH.get(VERSION_KEY);
        // Formulate User-Agent
        let userAgent = appendUserAgent
            ? `${clientInfo} (${platform}/${release}; Node/${nodeVersion}) ${appendUserAgent}`
            : `${clientInfo} (${platform}/${release}; Node/${nodeVersion})`;
        // Headers will always be replaced if they exist already
        headers.append(USER_AGENT_HEADER, userAgent);
        return;
    }
    headers.append(BROWSER_USER_AGENT_HEADER, clientInfo);
}
exports.addUserAgent = addUserAgent;
function populatePlatformHash() {
    const os = __nccwpck_require__(2087);
    NODE_PLATFORM_HASH.set(PLATFORM_KEY, os.platform);
    NODE_PLATFORM_HASH.set(RELEASE_KEY, os.release);
    NODE_PLATFORM_HASH.set(VERSION_KEY, process.version);
}
//# sourceMappingURL=headers.js.map

/***/ }),

/***/ 7621:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStringFromRequestBody = exports.formatDateToRFC3339 = exports.autoDetectContentLengthAndReadBody = exports.addAdditionalHeaders = exports.getSignerAndReqBody = exports.readDataFromReadable = exports.readStringFromReadable = exports.getStringFromResponseBody = exports.convertStringToType = exports.handleErrorBody = exports.handleErrorResponse = exports.mapContainer = void 0;
/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
const fs_1 = __nccwpck_require__(5747);
const error_1 = __nccwpck_require__(2956);
const range_1 = __nccwpck_require__(1139);
const stream_1 = __nccwpck_require__(2413);
const headers_1 = __nccwpck_require__(3649);
const retry_token_header_1 = __nccwpck_require__(9502);
const utils_1 = __nccwpck_require__(1563);
function mapContainer(obj, getJsonObj) {
    const constructedObj = {};
    for (let key in obj) {
        constructedObj[key] = getJsonObj(obj[key]);
    }
    return constructedObj;
}
exports.mapContainer = mapContainer;
function handleErrorResponse(response, body) {
    const statusCode = response.status || -1;
    const requestId = response.headers.get("opc-request-id");
    if (body && body.code && body.message) {
        return new error_1.OciError(statusCode, body.code, body.message, requestId);
    }
    else if (typeof body == "string" && body.length > 0) {
        return new error_1.OciError(statusCode, "None", body, requestId);
    }
    else if (response.statusText && response.statusText.length > 0) {
        // There is no body text but statusText exists
        return new error_1.OciError(statusCode, "None", response.statusText, requestId);
    }
    else {
        return new error_1.OciError(statusCode, "None", "unknown reason.", requestId);
    }
}
exports.handleErrorResponse = handleErrorResponse;
function handleErrorBody(response) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield response.text();
        //  Try to parse string as an object
        try {
            data = JSON.parse(data);
        }
        catch (err) {
            return data;
        }
        return data;
    });
}
exports.handleErrorBody = handleErrorBody;
function convertStringToType(str, expectedType) {
    if (str == null)
        return str;
    expectedType = expectedType.toLowerCase();
    switch (expectedType) {
        case "string":
            return str;
        case "number":
            return Number(str);
        case "date":
            return formatDateToRFC3339(new Date(str));
        case "common.Range":
            return range_1.Range.parse(str);
    }
}
exports.convertStringToType = convertStringToType;
// get string content from response body
function getStringFromResponseBody(body) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof body === "string") {
            return body;
        }
        if (body instanceof stream_1.Readable) {
            // body is a stream type
            return readStringFromReadable(body);
        }
        // else if (body instanceof Blob) {
        //   // body is a blob type
        //   return readStringFromBlob(body);
        // } else if (body instanceof ReadableStream) {
        //   // body is a fetch readableStream type
        //   return readStringFromFetchReadableStream(body);
        // }
        else {
            // unknown type, unable to read body content for signing, reject it
            throw new Error("Unable to read body content to sign the request");
        }
    });
}
exports.getStringFromResponseBody = getStringFromResponseBody;
// read string from Readable asynchronously, return a string content of it
function readStringFromReadable(readable) {
    return __awaiter(this, void 0, void 0, function* () {
        let contentBuffer = [];
        let size = 0;
        const MEMIBYTES = 1024 * 1024;
        const sizeLimit = 2000 * MEMIBYTES;
        // set the encoding to return string instead of Buffer
        readable.setEncoding("utf8");
        return new Promise((resolve, reject) => {
            readable.on("end", () => {
                resolve(contentBuffer.join(""));
            });
            readable.on("data", chunk => {
                if (size > sizeLimit) {
                    throw Error("Tried to read stream but content length is greater than 2GB.");
                }
                contentBuffer.push(chunk);
                size += chunk.length;
            });
            readable.on("error", err => {
                // if error happened, it will be catched at http signer global error handling
                reject(err);
            });
        });
    });
}
exports.readStringFromReadable = readStringFromReadable;
// read data from Readable asynchronously, return a Buffer content of it
function readDataFromReadable(readable) {
    return __awaiter(this, void 0, void 0, function* () {
        let contentBuffer = [];
        let size = 0;
        const MEMIBYTES = 1024 * 1024;
        const sizeLimit = 2000 * MEMIBYTES;
        return new Promise((resolve, reject) => {
            readable.on("end", () => {
                const result = Buffer.concat(contentBuffer);
                resolve(result);
            });
            readable.on("readable", function () {
                let data;
                while ((data = readable.read())) {
                    if (size > sizeLimit) {
                        throw Error("Tried to read stream but content length is greater than 2GB.");
                    }
                    contentBuffer.push(data);
                    size += data.length;
                }
            });
            readable.on("error", err => {
                // if error happened, it will be catched at http signer global error handling
                reject(err);
            });
        });
    });
}
exports.readDataFromReadable = readDataFromReadable;
// read string from fetch ReadbaleString asynchronously, return a string content of it
// export async function readStringFromFetchReadableStream(readable: ReadableStream): Promise<string> {
//   let contentBuffer: Array<string> = [];
//   const reader = readable.getReader();
//   const decoder = new TextDecoder("utf-8");
//   return new Promise<string>((resolve, reject) => {
//     reader
//       .read()
//       .then(function processText({ done, value }): any {
//         if (done) {
//           // reading stream done, resolve it
//           resolve(contentBuffer.join(""));
//         }
//         // put each chunk into a buffer
//         contentBuffer.push(decoder.decode(value));
//         // read more data and call processText function again to read more
//         return reader.read().then(processText);
//       })
//       .catch(function(e) {
//         // reject if has error
//         reject(e);
//       });
//   });
// }
// read string from Blob asynchronously, return a string content of it
// export async function readStringFromBlob(blob: Blob): Promise<string> {
//   const reader = new FileReader();
//   return new Promise<string>((resolve, reject) => {
//     reader.onerror = err => {
//       reader.abort();
//       reject(err);
//     };
//     reader.onload = () => {
//       // read as Text is called, so this will be a string
//       resolve(reader.result as string);
//     };
//     // utf-8 default encoding is used here
//     reader.readAsText(blob);
//   });
// }
// returns duplicated body for separate consumption by signer and Fetch Request
function getSignerAndReqBody(body, forceExcludeBody) {
    const singerAndReqBody = { signerBody: undefined, requestBody: undefined };
    // If body does not exist or empty body
    if (!body || utils_1.isEmpty(body)) {
        return singerAndReqBody;
    }
    // If body is excluded for signing, no need to send signer body
    if (forceExcludeBody) {
        singerAndReqBody.requestBody = body;
        return singerAndReqBody;
    }
    // if body of type string, can be duplicated.
    if (typeof body === "string") {
        return { signerBody: body, requestBody: body };
    }
    // If body instance of Readable , duplicate the stream for signer and request body
    else if (body instanceof stream_1.Readable) {
        const signerbody = body.pipe(new stream_1.PassThrough());
        const reqBody = body.pipe(new stream_1.PassThrough());
        return { signerBody: signerbody, requestBody: reqBody };
    }
    // //if body instance of blob, can be duplicated.
    // else if (body instanceof Blob) {
    //   return { signerBody: body, requestBody: body };
    // }
    // // if body instance of ReadableStream, tee() it.
    // else if (body instanceof ReadableStream) {
    //   // body.tee() not supported in IE.
    //   // https://jira.oci.oraclecorp.com/browse/DEX-7126
    //   const duplicateStream = body.tee();
    //   return { signerBody: duplicateStream[0], requestBody: duplicateStream[1] };
    // }
    // unknown type, unable to read body content.
    else
        throw new Error("Unable to read body content");
}
exports.getSignerAndReqBody = getSignerAndReqBody;
function addAdditionalHeaders(headers, params) {
    headers_1.addOpcRequestId(headers);
    headers_1.addUserAgent(headers);
    retry_token_header_1.addRetryToken(headers);
}
exports.addAdditionalHeaders = addAdditionalHeaders;
function autoDetectContentLengthAndReadBody(headers, params) {
    return __awaiter(this, void 0, void 0, function* () {
        // Auto Detect content-length if needed, also read binary content if stream length cannot be determined.
        const reqHeaders = params.headerParams;
        if (reqHeaders) {
            const shouldCalculateContentLength = ("content-length" in reqHeaders && reqHeaders["content-length"] === undefined) ||
                ("Content-Length" in reqHeaders && reqHeaders["Content-Length"] === undefined);
            if (shouldCalculateContentLength) {
                const { body, contentLength } = yield calculateContentLengthAndBodyContent(params.bodyContent);
                headers.append("content-length", String(contentLength));
                return body;
            }
        }
    });
}
exports.autoDetectContentLengthAndReadBody = autoDetectContentLengthAndReadBody;
// Helper method to auto detect content-length if not given.
function calculateContentLengthAndBodyContent(body) {
    return __awaiter(this, void 0, void 0, function* () {
        let start = body.start || 0;
        let end = body.end || 0;
        const bodyType = typeof body;
        let contentLength;
        let content = body;
        try {
            if (bodyType == "object") {
                const path = body.path;
                if (path && body.end === Infinity) {
                    // If body.end is not defined, we can check if there is a fileLocation path
                    end = fs_1.statSync(path).size;
                    body["_readableState"].highWaterMark = end;
                    contentLength = end - start;
                }
                else if (!isNaN(body.end) && body.end != Infinity) {
                    end = body.end + 1;
                    // Check if the end is greater than the highWaterMark, if so, set highWaterMark as end.
                    body["_readableState"].highWaterMark =
                        body.readableHighWaterMark < end ? end : body.readableHighWaterMark;
                    contentLength = end - start;
                }
                else {
                    // If there is no file path to the stream then we need to read the content of stream
                    content = yield readDataFromReadable(body);
                    contentLength = Buffer.byteLength(content, "utf8");
                }
                return { body: content, contentLength: contentLength };
            }
            // bodyType must be a string.
            return { body, contentLength: body.length };
        }
        catch (e) {
            throw Error("SDK could not calculate contentLength from the request stream, please add contentLength and try again.");
        }
    });
}
// Helper method to format Date Objects to RFC3339 timestamp string.
function formatDateToRFC3339(date) {
    return (date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2) +
        "T" +
        date.getHours() +
        ":" +
        ("0" + date.getMinutes()).slice(-2) +
        ":" +
        ("0" + date.getSeconds()).slice(-2) +
        "Z");
}
exports.formatDateToRFC3339 = formatDateToRFC3339;
// get string content from body
function getStringFromRequestBody(body) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof body === "string") {
            return body;
        }
        if (body instanceof stream_1.Readable) {
            // body is a stream type
            return readStringFromReadable(body);
        }
        // else if (body instanceof Blob) {
        //   // body is a blob type
        //   return readStringFromBlob(body);
        // } else if (body instanceof ReadableStream) {
        //   // body is a fetch readableStream type
        //   return readStringFromFetchReadableStream(body);
        // }
        else {
            // unknown type, unable to read body content for signing, reject it
            throw new Error("Unable to read body content to sign the request");
        }
    });
}
exports.getStringFromRequestBody = getStringFromRequestBody;
//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 6316:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FetchHttpClient = void 0;
const promise = __importStar(__nccwpck_require__(8878));
__nccwpck_require__(2340);
const helper_1 = __nccwpck_require__(7621);
const Breaker = __nccwpck_require__(3857);
const circuit_breaker_1 = __importDefault(__nccwpck_require__(5620));
promise.polyfill();
class FetchHttpClient {
    constructor(signer, circuitBreaker) {
        this.signer = signer;
        this.circuitBreaker = null;
        if (circuitBreaker) {
            this.circuitBreaker = circuitBreaker;
        }
    }
    send(req, forceExcludeBody = false) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get Request body
            const body = helper_1.getSignerAndReqBody(req.body, forceExcludeBody);
            // Sign Request
            if (this.signer) {
                yield this.signer.signHttpRequest({
                    method: req.method,
                    headers: req.headers,
                    uri: req.uri,
                    body: body.signerBody
                }, forceExcludeBody);
            }
            const request = new Request(req.uri, {
                method: req.method,
                headers: req.headers,
                body: body.requestBody
            });
            if (this.circuitBreaker) {
                // The circuitBreaker library have .fire return as any, we need to cast it to a Promise<Response> to be consistent with
                // a fetch response type.
                return this.circuitBreaker.fire(request);
            }
            else if (circuit_breaker_1.default.enableDefault) {
                // else if we opt'd to use a default circuit breaker, an http call by default
                // will use the default circuit breaker to make the call
                return circuit_breaker_1.default.defaultCircuit.fire(request);
            }
            else {
                return fetch(new Request(req.uri, {
                    method: req.method,
                    headers: req.headers,
                    body: body.requestBody
                }));
            }
        });
    }
}
exports.FetchHttpClient = FetchHttpClient;
//# sourceMappingURL=http.js.map

/***/ }),

/***/ 6109:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LOG = void 0;
var LOG;
(function (LOG) {
    var _logger;
    Object.defineProperty(LOG, "logger", {
        get: function () {
            return _logger;
        },
        set: function (log) {
            _logger = log;
        }
    });
})(LOG = exports.LOG || (exports.LOG = {}));
//# sourceMappingURL=log.js.map

/***/ }),

/***/ 2043:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectSerializer = void 0;
var ObjectSerializer;
(function (ObjectSerializer) {
    function serialize(data, type, getJsonObj) {
        if (getJsonObj) {
            if (isList(type)) {
                // constuct List of json object first, such as: List<NonPrimaryType>
                // then return JSON.stringify of it
                return JSON.stringify(data.map((item) => {
                    return getJsonObj(item);
                }));
            }
            else if (isMap(type)) {
                // construct a map of json object, such as { [key: string]: model.NonPrimaryType }
                // Notes: we don't have any spec fall into this case now, put it here just in case it
                // has in the future
                const obj = {};
                Object.keys(data).forEach((key) => {
                    obj[key] = getJsonObj(data[key]);
                });
                return JSON.stringify(obj);
            }
            else {
                return JSON.stringify(getJsonObj(data));
            }
        }
        // for type without getJsonObj callback use native stringify
        return JSON.stringify(data);
    }
    ObjectSerializer.serialize = serialize;
    function deserialize(data, type) {
        return data;
    }
    ObjectSerializer.deserialize = deserialize;
    // check if type is List
    function isList(type) {
        return type.lastIndexOf("Array<", 0) === 0;
    }
    const mapRegex = new RegExp("^{\\[\\w*:\\w*]:model.\\w*}$");
    // check if type is a map, such as: { [key: string]: model.ComplexType }
    function isMap(type) {
        // remove whitespace from type for regex match
        return mapRegex.test(type.replace(/\s/g, ""));
    }
})(ObjectSerializer = exports.ObjectSerializer || (exports.ObjectSerializer = {}));
//# sourceMappingURL=object-serializer.js.map

/***/ }),

/***/ 4310:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paginatedResponsesWithLimit = exports.paginatedRecordsWithLimit = exports.paginateResponses = exports.genericPaginateResponses = exports.paginateRecords = exports.genericPaginateRecords = void 0;
function genericPaginate(request, listCall, getNextPageToken, setNextPageToken, getResults, limitedRecord) {
    return __asyncGenerator(this, arguments, function* genericPaginate_1() {
        let iteration = 0;
        const pageSize = request.limit || 0;
        if (limitedRecord && pageSize) {
            // We don't want to request a page size bigger than limitedRecord
            request.limit = Math.min(limitedRecord, pageSize);
        }
        else if (limitedRecord) {
            // If we do not have a page size, but we do have a limitedRecord, we will set page size = limitedRecord
            request.limit = limitedRecord;
        }
        while (true) {
            //  Return early if user does not want any records...
            if (limitedRecord === 0)
                return yield __await(void 0);
            //  If our request pageSize is bigger than the remaining records we need
            //  Set pageSize to the recordsRemaining to not retrieve more than necessary.
            if (request.limit && limitedRecord) {
                let recordsRemaining = limitedRecord - iteration;
                if (request.limit > recordsRemaining) {
                    request.limit = recordsRemaining;
                }
            }
            const response = yield __await(listCall(request));
            for (const result of getResults(response)) {
                if (result.items && result.items.length > 0) {
                    iteration += result.items.length;
                }
                else if (result.listObjects && result.listObjects.objects) {
                    iteration += result.listObjects.objects.length;
                }
                else {
                    iteration++;
                }
                yield yield __await(result);
                if (limitedRecord && iteration > limitedRecord - 1) {
                    return yield __await(void 0);
                }
            }
            const nextPageToken = getNextPageToken(response);
            if (!nextPageToken) {
                break;
            }
            setNextPageToken(request, nextPageToken);
        }
    });
}
function genericPaginateRecords(request, listCall, getNextPageToken, setNextPageToken, getItems, limitedRecord) {
    return genericPaginate(request, listCall, getNextPageToken, setNextPageToken, getItems, limitedRecord);
}
exports.genericPaginateRecords = genericPaginateRecords;
function paginateRecords(request, listCall, limitedRecord) {
    return genericPaginateRecords(request, listCall, res => findNextPageToken(res), (req, nextPageToken) => findSetPageToken(req, nextPageToken), res => findResult(res), limitedRecord);
}
exports.paginateRecords = paginateRecords;
function genericPaginateResponses(request, listCall, getNextPageToken, setNextPageToken, limitedRecord) {
    return genericPaginate(request, listCall, getNextPageToken, setNextPageToken, res => [res], limitedRecord);
}
exports.genericPaginateResponses = genericPaginateResponses;
function paginateResponses(request, listCall, limitedRecord) {
    return genericPaginateResponses(request, listCall, response => findNextPageToken(response), (req, nextPageToken) => findSetPageToken(req, nextPageToken), limitedRecord);
}
exports.paginateResponses = paginateResponses;
// Return a list of records up to limitedRecord. limitedRecord is optional. Do not pass limitedRecord if
// want to retrieve all records.
function paginatedRecordsWithLimit(request, listCall, limitedRecord) {
    return __awaiter(this, void 0, void 0, function* () {
        const records = [];
        const response = paginateRecords(request, listCall, limitedRecord);
        let record = yield response.next();
        while (record.done === false) {
            records.push(record);
            record = yield response.next();
        }
        return records;
    });
}
exports.paginatedRecordsWithLimit = paginatedRecordsWithLimit;
function paginatedResponsesWithLimit(request, listCall, limitedRecord) {
    return __awaiter(this, void 0, void 0, function* () {
        let records = [];
        const response = yield paginateResponses(request, listCall, limitedRecord);
        let iterator = yield response.next();
        let record = iterator.value;
        while (iterator.done === false) {
            record = iterator.value;
            records.push(record);
            iterator = yield response.next();
        }
        return records;
    });
}
exports.paginatedResponsesWithLimit = paginatedResponsesWithLimit;
// Not all function contains a property called ocpNextPage. ObjectStorage for example have an equivalence in listObject.nextStartWith
function findNextPageToken(res) {
    if ("listObjects" in res) {
        return res.listObjects.nextStartWith;
    }
    return res.opcNextPage;
}
// Not all function contain a property called 'page'. Object storage for example, uses 'start' to fetch the next pagination.
function findSetPageToken(req, nextPageToken) {
    if (req.start) {
        req.start = nextPageToken;
    }
    else {
        req.page = nextPageToken;
    }
}
function findResult(res) {
    if (res.listObjects && res.listObjects.objects) {
        return res.listObjects.objects;
    }
    return res.items;
}
//# sourceMappingURL=paginators.js.map

/***/ }),

/***/ 1139:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Range = void 0;
class Range {
    /**
     * Construct an instance of [[Range]].
     * @param startByte The start byte, if given.
     * @param endByte  The end byte, if given.
     * @param contentLength The content length as returned by the server, or null if unknown.
     */
    constructor(startByte, endByte, contentLength) {
        this.startByte = startByte;
        this.endByte = endByte;
        this.contentLength = contentLength;
        this.startByte = startByte;
        this.endByte = endByte;
        this.contentLength = contentLength;
    }
    /**
     * Parse the "content-range" header per https://tools.ietf.org/html/rfc7233#section-4.2.
     * <p>
     * Note, this is only for successful responses (206).  It does not handle 416 (range not satisfiable).
     * @param value The response header value.
     * @return A new Range header.
     */
    static parse(value) {
        console.debug("Attempting to parse range: %s", value);
        value = value.replace("bytes", "").trim();
        const parts = value.split("/");
        if (parts.length != 2)
            throw Error("Must provide <range>/<length> format for range request: " + value);
        const byteRangePart = parts[0];
        const contentLengthPart = parts[1];
        const contentLength = contentLengthPart === "*" ? null : Number(contentLengthPart);
        const byteValues = byteRangePart.split("-", -1); // include trailing empty strings
        if (byteValues.length != 2) {
            throw new Error("Must provide <start>-<end> format for range request: " + value);
        }
        const startByte = byteValues[0] === "" ? null : Number(byteValues[0]);
        const endByte = byteValues[1] === "" ? null : Number(byteValues[1]);
        if (startByte == null && endByte == null) {
            throw new Error("Must provide start/end byte for range request: " + value);
        }
        let range = new Range(startByte, endByte, contentLength);
        return range;
        return;
    }
}
exports.Range = Range;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ 3755:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Realm = void 0;
class Realm {
    constructor(realmId, secondLevelDomain) {
        this._secondLevelDomain = secondLevelDomain;
        this._realmId = realmId;
        Realm.KNOWN_REALMS.set(realmId, this);
    }
    get secondLevelDomain() {
        return this._secondLevelDomain;
    }
    get realmId() {
        return this._realmId;
    }
    static register(realmId, secondLevelDomain) {
        if (!realmId)
            throw Error("Realm Id can not be empty or undefined");
        if (!secondLevelDomain)
            throw Error("secondLevelDomain can not be empty or undefined");
        realmId = realmId.trim().toLocaleLowerCase("en-US");
        secondLevelDomain = secondLevelDomain.trim().toLocaleLowerCase("en-US");
        const realm = Realm.KNOWN_REALMS.get(realmId);
        if (realm) {
            if (realm.secondLevelDomain !== secondLevelDomain) {
                throw Error("RealmId " +
                    realmId +
                    " is already registered with  " +
                    realm.secondLevelDomain +
                    " It cannot be re-registered with a different secondLevelDomain");
            }
            return realm;
        }
        return new Realm(realmId, secondLevelDomain);
    }
}
exports.Realm = Realm;
Realm.KNOWN_REALMS = new Map();
Realm.OC1 = Realm.register("oc1", "oraclecloud.com");
Realm.OC2 = Realm.register("oc2", "oraclegovcloud.com");
Realm.OC3 = Realm.register("oc3", "oraclegovcloud.com");
Realm.OC4 = Realm.register("oc4", "oraclegovcloud.uk");
Realm.OC8 = Realm.register("oc8", "oraclecloud8.com");
//# sourceMappingURL=realm.js.map

/***/ }),

/***/ 4389:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegionMetadataSchema = void 0;
var RegionMetadataSchema;
(function (RegionMetadataSchema) {
    /*
     * Checks if the region info is valid
     */
    function isValidSchema(regionMetadataSchema) {
        if (regionMetadataSchema.realmKey === undefined || regionMetadataSchema.realmKey.length <= 0)
            return false;
        if (regionMetadataSchema.realmDomainComponent === undefined ||
            regionMetadataSchema.realmDomainComponent.length <= 0)
            return false;
        if (regionMetadataSchema.regionKey === undefined || regionMetadataSchema.regionKey.length <= 0)
            return false;
        if (regionMetadataSchema.regionIdentifier === undefined ||
            regionMetadataSchema.regionIdentifier.length <= 0)
            return false;
        return true;
    }
    RegionMetadataSchema.isValidSchema = isValidSchema;
})(RegionMetadataSchema = exports.RegionMetadataSchema || (exports.RegionMetadataSchema = {}));
//# sourceMappingURL=region-metadata-schema.js.map

/***/ }),

/***/ 263:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Region = void 0;
const realm_1 = __nccwpck_require__(3755);
const config_file_reader_1 = __nccwpck_require__(7407);
const fs_1 = __nccwpck_require__(5747);
const region_metadata_schema_1 = __nccwpck_require__(4389);
const http_1 = __nccwpck_require__(6316);
class Region {
    constructor(regionId, realm, regionCode) {
        this._realm = realm;
        this._regionId = regionId;
        Region.KNOWN_REGIONS.set(regionId, this);
        if (regionCode)
            Region.REGIONS_SHORT_NAMES[regionCode] = regionId;
    }
    get realm() {
        return this._realm;
    }
    get regionId() {
        return this._regionId;
    }
    static fromRegionId(regionId) {
        /*
         * load provided region from already registered regions if it exists
         * else load provided region from region configuration file if it exists
         * else load provided region from region metadeta environment variable
         * else if instance metadeta service (IMDS) has been opted in, try loading region from IMDS
         */
        if (!regionId)
            throw Error("RegionId can not be empty or undefined");
        regionId = regionId.trim().toLocaleLowerCase("en-US");
        let foundRegion = Region.KNOWN_REGIONS.get(regionId);
        if (!foundRegion) {
            Region.addRegionsFromConfigFile();
            foundRegion = Region.KNOWN_REGIONS.get(regionId);
        }
        if (!foundRegion) {
            Region.addRegionFromEnvVar();
            foundRegion = Region.KNOWN_REGIONS.get(regionId);
        }
        if (!foundRegion && Region.hasCalledForImds) {
            Region.addRegionFromImds();
            foundRegion = Region.KNOWN_REGIONS.get(regionId);
        }
        return foundRegion;
    }
    // Adds regions from the config file
    static addRegionsFromConfigFile() {
        if (!Region.hasUsedConfigFile) {
            Region.hasUsedConfigFile = true;
            let expandedRegionConfigFilePath = config_file_reader_1.ConfigFileReader.expandUserHome(Region.REGIONS_CONFIG_FILE_PATH);
            if (config_file_reader_1.ConfigFileReader.fileExists(expandedRegionConfigFilePath)) {
                try {
                    const fileContent = fs_1.readFileSync(expandedRegionConfigFilePath, "utf8");
                    const regionMetadata = JSON.parse(fileContent);
                    if (regionMetadata && regionMetadata.length > 0 && Array.isArray(regionMetadata)) {
                        regionMetadata.map(metadata => {
                            if (region_metadata_schema_1.RegionMetadataSchema.isValidSchema(metadata)) {
                                Region.register(metadata.regionIdentifier, realm_1.Realm.register(metadata.realmKey, metadata.realmDomainComponent), metadata.regionKey);
                            }
                        });
                    }
                }
                catch (error) {
                    console.log("error reading or parsing region config file");
                }
            }
        }
    }
    // Adds region from the environment variable
    static addRegionFromEnvVar() {
        if (!Region.hasUsedEnvVar) {
            Region.hasUsedEnvVar = true;
            const envVarRegionMetadata = process.env[Region.OCI_REGION_METADATA_ENV_VAR];
            if (envVarRegionMetadata) {
                try {
                    const regionMetadata = JSON.parse(envVarRegionMetadata);
                    if (region_metadata_schema_1.RegionMetadataSchema.isValidSchema(regionMetadata)) {
                        Region.register(regionMetadata.regionIdentifier, realm_1.Realm.register(regionMetadata.realmKey, regionMetadata.realmDomainComponent), regionMetadata.regionKey);
                    }
                }
                catch (error) {
                    console.log("error reading or parsing region metadata env var config file");
                }
            }
        }
    }
    // Add region from the Instance Metadata Service
    static addRegionFromImds() {
        if (Region.imdsRegionMetadata) {
            Region.register(Region.imdsRegionMetadata.regionIdentifier, realm_1.Realm.register(Region.imdsRegionMetadata.realmKey, Region.imdsRegionMetadata.realmDomainComponent), Region.imdsRegionMetadata.regionKey);
            Region.imdsRegionMetadata = undefined;
        }
    }
    /*
     * Enable instance metadata lookup for region info
     */
    static enableInstanceMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Region.hasCalledForImds) {
                Region.hasCalledForImds = true;
                try {
                    const url = Region.IMDS_BASE_URL + "instance/regionInfo/";
                    let headers = new Headers();
                    headers.append(Region.CONTENT_TYPE_HEADER, Region.CONTENT_TYPE_HEADER_VALUE);
                    headers.append(Region.AUTHORIZATION, Region.METADATA_AUTH_HEADERS);
                    const httpClient = new http_1.FetchHttpClient(null);
                    const response = yield httpClient.send({
                        uri: url,
                        method: "GET",
                        headers: headers
                    });
                    const regionMetadata = (yield response.json());
                    if (region_metadata_schema_1.RegionMetadataSchema.isValidSchema(regionMetadata)) {
                        Region.imdsRegionMetadata = regionMetadata;
                    }
                }
                catch (error) {
                    console.log("Unable to retrieve region metadata from instance metadata service, reason :" + error);
                }
            }
        });
    }
    static register(regionId, realm, regionCode) {
        if (!regionId)
            throw Error("RegionId can not be empty or undefined");
        regionId = regionId.trim().toLocaleLowerCase("en-US");
        const region = Region.KNOWN_REGIONS.get(regionId);
        if (region) {
            if (region.realm.secondLevelDomain !== realm.secondLevelDomain) {
                throw Error(" Region " +
                    regionId +
                    " is already associated with another Realm " +
                    region.realm +
                    " It cannot be re-registered with a different realm.");
            }
            return region;
        }
        if (regionCode) {
            regionCode = regionCode.trim().toLocaleLowerCase("en-US");
        }
        return new Region(regionId, realm, regionCode);
    }
    /**
     * Function to get regionId based regionStr: regionStr can be a short code or regionId
     * if it is a shortCode then we want to return the corresponding regionId
     * @param regionStr
     * @return regionId
     */
    static getRegionIdFromShortCode(regionStr) {
        regionStr = regionStr.toLocaleLowerCase();
        // If region short code is not found in the SDK, add regions from the regions config file
        let foundRegionId = Region.REGIONS_SHORT_NAMES[regionStr];
        if (!foundRegionId) {
            Region.addRegionsFromConfigFile();
            foundRegionId = Region.REGIONS_SHORT_NAMES[regionStr];
        }
        // else add region from environment variable, and then check for short code
        if (!foundRegionId) {
            Region.addRegionFromEnvVar();
            foundRegionId = Region.REGIONS_SHORT_NAMES[regionStr];
        }
        // else add region from IMDS if it has been opted in, and then check for short code
        if (!foundRegionId && Region.hasCalledForImds) {
            Region.addRegionFromImds();
            foundRegionId = Region.REGIONS_SHORT_NAMES[regionStr];
        }
        return foundRegionId ? foundRegionId : regionStr;
    }
}
exports.Region = Region;
Region.REGIONS_SHORT_NAMES = {
    "phx": "us-phoenix-1",
    "iad": "us-ashburn-1",
    "fra": "eu-frankfurt-1",
    "lhr": "uk-london-1",
    "yyz": "ca-toronto-1",
    "gru": "sa-saopaulo-1",
    "ams": "eu-amsterdam-1",
    "jed": "me-jeddah-1",
    "kix": "ap-osaka-1",
    "cwl": "uk-cardiff-1",
    "ltn": "uk-gov-london-1",
    "nrt": "ap-tokyo-1",
    "icn": "ap-seoul-1",
    "hyd": "ap-hyderabad-1",
    "bom": "ap-mumbai-1",
    "yny": "ap-chuncheon-1",
    "syd": "ap-sydney-1",
    "mel": "ap-melbourne-1",
    "yul": "ca-montreal-1",
    "zrh": "eu-zurich-1",
    "scl": "sa-santiago-1",
    "lfi": "us-langley-1",
    "luf": "us-luke-1",
    "ric": "us-gov-ashburn-1",
    "pia": "us-gov-chicago-1",
    "tus": "us-gov-phoenix-1",
    "sjc": "us-sanjose-1",
    "brs": "uk-gov-cardiff-1",
    "nja": "ap-chiyoda-1",
    "dxb": "me-dubai-1"
};
Region.KNOWN_REGIONS = new Map();
Region.hasCalledForImds = false;
Region.hasUsedConfigFile = false;
Region.hasUsedEnvVar = false;
Region.REGIONS_CONFIG_FILE_PATH = "~/.oci/regions-config.json";
Region.OCI_REGION_METADATA_ENV_VAR = "OCI_REGION_METADATA";
Region.IMDS_BASE_URL = "http://169.254.169.254/opc/v2/";
Region.METADATA_AUTH_HEADERS = "Bearer Oracle";
Region.AUTHORIZATION = "Authorization";
Region.CONTENT_TYPE_HEADER = "Content-Type";
Region.CONTENT_TYPE_HEADER_VALUE = "application/json";
// OC1
Region.AP_CHUNCHEON_1 = Region.register("ap-chuncheon-1", realm_1.Realm.OC1);
Region.AP_MUMBAI_1 = Region.register("ap-mumbai-1", realm_1.Realm.OC1);
Region.AP_HYDERABAD_1 = Region.register("ap-hyderabad-1", realm_1.Realm.OC1);
Region.AP_SEOUL_1 = Region.register("ap-seoul-1", realm_1.Realm.OC1);
Region.AP_SYDNEY_1 = Region.register("ap-sydney-1", realm_1.Realm.OC1);
Region.AP_MELBOURNE_1 = Region.register("ap-melbourne-1", realm_1.Realm.OC1);
Region.AP_OSAKA_1 = Region.register("ap-osaka-1", realm_1.Realm.OC1);
Region.AP_TOKYO_1 = Region.register("ap-tokyo-1", realm_1.Realm.OC1);
Region.CA_MONTREAL_1 = Region.register("ca-montreal-1", realm_1.Realm.OC1);
Region.CA_TORONTO_1 = Region.register("ca-toronto-1", realm_1.Realm.OC1);
Region.EU_FRANKFURT_1 = Region.register("eu-frankfurt-1", realm_1.Realm.OC1);
Region.EU_ZURICH_1 = Region.register("eu-zurich-1", realm_1.Realm.OC1);
Region.SA_SAOPAULO_1 = Region.register("sa-saopaulo-1", realm_1.Realm.OC1);
Region.UK_CARDIFF_1 = Region.register("uk-cardiff-1", realm_1.Realm.OC1);
Region.UK_LONDON_1 = Region.register("uk-london-1", realm_1.Realm.OC1);
Region.US_ASHBURN_1 = Region.register("us-ashburn-1", realm_1.Realm.OC1);
Region.US_PHOENIX_1 = Region.register("us-phoenix-1", realm_1.Realm.OC1);
Region.EU_AMSTERDAM_1 = Region.register("eu-amsterdam-1", realm_1.Realm.OC1);
Region.ME_JEDDAH_1 = Region.register("me-jeddah-1", realm_1.Realm.OC1);
Region.US_SANJOSE_1 = Region.register("us-sanjose-1", realm_1.Realm.OC1);
Region.ME_DUBAI_1 = Region.register("me-dubai-1", realm_1.Realm.OC1);
Region.SA_SANTIAGO_1 = Region.register("sa-santiago-1", realm_1.Realm.OC1);
// OC2
Region.US_LANGLEY_1 = Region.register("us-langley-1", realm_1.Realm.OC2);
Region.US_LUKE_1 = Region.register("us-luke-1", realm_1.Realm.OC2);
// OC3
Region.US_GOV_ASHBURN_1 = Region.register("us-gov-ashburn-1", realm_1.Realm.OC3);
Region.US_GOV_CHICAGO_1 = Region.register("us-gov-chicago-1", realm_1.Realm.OC3);
Region.US_GOV_PHOENIX_1 = Region.register("us-gov-phoenix-1", realm_1.Realm.OC3);
// OC4
Region.UK_GOV_LONDON_1 = Region.register("uk-gov-london-1", realm_1.Realm.OC4);
Region.UK_GOV_CARDIFF_1 = Region.register("uk-gov-cardiff-1", realm_1.Realm.OC4);
// OC8
Region.AP_CHIYODA_1 = Region.register("ap-chiyoda-1", realm_1.Realm.OC8);
//# sourceMappingURL=region.js.map

/***/ }),

/***/ 3719:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.composeRequest = void 0;
const helper_1 = __nccwpck_require__(7621);
/*
 * Composes and Signs an SDKRequest
 * @param RequestParams to create a request
 */
function composeRequest(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const headers = computeHeaders(params);
        const uri = computeUri(params);
        let body = params.bodyContent;
        // If body exists, lets check if we need to calculate content length
        if (body) {
            const content = yield helper_1.autoDetectContentLengthAndReadBody(headers, params);
            body = content ? content : body;
        }
        return {
            method: params.method,
            headers: headers,
            uri: uri,
            body: body
        };
    });
}
exports.composeRequest = composeRequest;
function computeUri(params) {
    const path = validateAndComputePath(params.path, params.pathParams);
    const queryString = stringify(params.queryParams);
    let uri = params.baseEndpoint + path;
    if (queryString) {
        uri = uri + "?" + queryString;
    }
    return uri;
}
function validateAndComputePath(path, pathParams) {
    if (pathParams) {
        for (const [key, value] of Object.entries(pathParams)) {
            if (value || value === false || value === 0) {
                path = path.replace(key, encodeURIComponent(String(value)));
            }
            else {
                throw new Error(`Missing required path parameter for ${key}`);
            }
        }
    }
    return path;
}
function computeHeaders(params) {
    const headers = new Headers();
    for (const [key, value] of Object.entries(params.defaultHeaders)) {
        headers.append(key, String(value));
    }
    if (params.headerParams) {
        for (const [key, value] of Object.entries(params.headerParams)) {
            if (value) {
                headers.append(key, String(value));
            }
        }
    }
    helper_1.addAdditionalHeaders(headers, params);
    return headers;
}
function stringify(queryParams) {
    let qs = "";
    if (queryParams) {
        qs = Object.keys(queryParams)
            .map(function (key) {
            let value = queryParams[key];
            // Format Date Object to RFC3339 timestamp string.
            if (Object.prototype.toString.call(value) === "[object Date]" && value instanceof Date) {
                return key + "=" + helper_1.formatDateToRFC3339(value);
            }
            else if (value || value === false || value === 0) {
                return key + "=" + value;
            }
        })
            .filter(key => key !== undefined && key !== null)
            .join("&");
    }
    return qs;
}
//# sourceMappingURL=request-generator.js.map

/***/ }),

/***/ 6192:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.composeResponse = void 0;
const object_serializer_1 = __nccwpck_require__(2043);
const helper_1 = __nccwpck_require__(7621);
/*
 * Composes an SDKResponse.
 * @param ResponseParams to create a response
 */
function composeResponse(params) {
    const response = params.responseObject;
    let content = params.body;
    if (content) {
        const bodyContent = object_serializer_1.ObjectSerializer.deserialize(content, params.bodyModel);
        const key = params.bodyKey;
        Object.assign(response, { [key]: bodyContent });
    }
    computeHeaders(params.responseHeaders, response);
    return response;
}
exports.composeResponse = composeResponse;
function computeHeaders(responseHeaders, response) {
    if (responseHeaders) {
        responseHeaders.forEach(header => {
            if (header.value) {
                Object.assign(response, {
                    [header.key]: helper_1.convertStringToType(header.value, header.dataType)
                });
            }
        });
    }
}
//# sourceMappingURL=response-generator.js.map

/***/ }),

/***/ 4922:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenericRetrier = void 0;
const waiter_1 = __nccwpck_require__(779);
const helper_1 = __nccwpck_require__(7621);
const __1 = __nccwpck_require__(5049);
class DefaultRetryCondition {
    static shouldBeRetried(error) {
        return (error.statusCode >= 500 ||
            (DefaultRetryCondition.RETRYABLE_SERVICE_ERRORS.has(error.statusCode) &&
                DefaultRetryCondition.RETRYABLE_SERVICE_ERRORS.get(error.statusCode) === error.serviceCode));
    }
}
/**
 * Default retry condition for Retry mechanism
 * NOTE : Retries are not supported for requests that have binary or stream bodies
 */
DefaultRetryCondition.RETRYABLE_SERVICE_ERRORS = new Map([
    [401, "NotAuthenticated"],
    [404, "NotAuthorizedOrNotFound"],
    [409, "IncorrectState"],
    [409, "NotAuthorizedOrResourceAlreadyExists"],
    [429, "TooManyRequests"],
    [500, "InternalServerError"],
    [401, "NotAuthenticated"],
    [404, "NotAuthorizedOrNotFound"],
    [409, "IncorrectState"],
    [409, "NotAuthorizedOrResourceAlreadyExists"],
    [429, "TooManyRequests"],
    [500, "InternalServerError"]
]);
const NoRetryConfigurationDetails = {
    terminationStrategy: new waiter_1.MaxAttemptsTerminationStrategy(1),
    delayStrategy: new waiter_1.ExponentialBackoffDelayStrategy(30),
    retryCondition: DefaultRetryCondition.shouldBeRetried
};
class GenericRetrier {
    constructor(retryConfiguration) {
        this._logger = undefined;
        const preferredRetryConfig = Object.assign(Object.assign({}, NoRetryConfigurationDetails), retryConfiguration);
        this.retryConfiguration = preferredRetryConfig;
    }
    set logger(logger) {
        this._logger = logger;
    }
    static createPreferredRetrier(clientRetryConfiguration, requestRetryConfiguration) {
        let retryConfigToUse = [requestRetryConfiguration, clientRetryConfiguration, {}].filter(configuration => configuration !== null && configuration !== undefined)[0];
        retryConfigToUse = Object.assign(Object.assign({}, NoRetryConfigurationDetails), retryConfigToUse);
        return new GenericRetrier(retryConfigToUse);
    }
    makeServiceCall(httpClient, request, excludeBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const waitContext = new waiter_1.WaitContextImpl();
            let lastKnownError;
            let shouldBeRetried = true;
            while (true) {
                try {
                    const response = yield httpClient.send(request, excludeBody);
                    if (response.status && response.status >= 200 && response.status <= 299) {
                        return response;
                    }
                    else {
                        const errBody = yield helper_1.handleErrorBody(response);
                        const errorObject = helper_1.handleErrorResponse(response, errBody);
                        shouldBeRetried = this.retryConfiguration.retryCondition(errorObject);
                        lastKnownError = errorObject;
                    }
                }
                catch (err) {
                    lastKnownError = new __1.OciError(err.code, "unknown code", err.message, "unknown");
                    shouldBeRetried = true;
                }
                if (!shouldBeRetried ||
                    this.retryConfiguration.terminationStrategy.shouldTerminate(waitContext) ||
                    !GenericRetrier.isRequestRetryable(request)) {
                    if (this._logger)
                        this._logger.debug("Not retrying the service call...");
                    throw lastKnownError;
                }
                yield waiter_1.delay(this.retryConfiguration.delayStrategy.delay(waitContext));
                waitContext.attemptCount++;
                GenericRetrier.refreshRequest(request);
                if (this._logger)
                    this._logger.debug("Retrying the service call, attempt : ", waitContext.attemptCount);
            }
        });
    }
    static refreshRequest(request) {
        request.headers.set("x-date", new Date().toUTCString());
        // TO-DO : Implement resetting/recreating stream/blobs
    }
    static isRequestRetryable(request) {
        if (!request.body)
            return true;
        if (request.body) {
            if (GenericRetrier.isReadableStream(request.body)) {
                return false;
            }
            return true;
        }
    }
    static isReadableStream(obj) {
        return typeof obj._read === "function" && typeof obj._readableState === "object";
    }
}
exports.GenericRetrier = GenericRetrier;
//# sourceMappingURL=retrier.js.map

/***/ }),

/***/ 9502:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.

 * This header is excluded from headers.ts as we need to use same retry token but new request token
 * which needs to be incorporated when we add retry strategy.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addRetryToken = void 0;
const uuidv1 = __nccwpck_require__(4185);
const OPC_RETRY_TOKEN_HEADER = "opc-retry-token";
function addRetryToken(headers) {
    // if user has not passed opc-retry-token
    if (!hasRetryToken(headers)) {
        headers.append(OPC_RETRY_TOKEN_HEADER, generateRetryToken());
    }
}
exports.addRetryToken = addRetryToken;
function hasRetryToken(headers) {
    if (headers.has(OPC_RETRY_TOKEN_HEADER)) {
        return true;
    }
    return false;
}
function generateRetryToken() {
    return uuidv1();
}
//# sourceMappingURL=retry-token-header.js.map

/***/ }),

/***/ 484:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultRequestSigner = exports.SignerRequest = void 0;
const helper_1 = __nccwpck_require__(7621);
const jssha = __nccwpck_require__(7656);
const sshpk_1 = __nccwpck_require__(7022);
const UrlParser = __nccwpck_require__(8835);
const delegate_auth_provider_1 = __nccwpck_require__(5157);
// tslint:disable-next-line:no-var-requires
const httpSignature = __nccwpck_require__(2479);
const HEADER_CONTENT_SHA = "x-content-sha256";
const HEADER_CONTENT_LEN = "Content-Length";
const HEADER_CONTENT_TYPE = "Content-Type";
const OPC_OBO_TOKEN = "opc-obo-token";
// The Subtle crypto implementation in IE11 will silently fail to digest an empty string.
// We have to manually define that value here to avoid hanging forever
const EMPTY_SHA = "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=";
class SignerRequest {
    constructor(method, url, headers) {
        this.headers = headers;
        this.method = method;
        this.path = UrlParser.parse(url).path;
    }
    getHeader(name) {
        return this.headers.get(name);
    }
    setHeader(name, value) {
        this.headers.set(name, value);
    }
}
exports.SignerRequest = SignerRequest;
/**
 * The default implementation of [[RequestSigner]].
 */
class DefaultRequestSigner {
    /**
     * Construct an instance of [[DefaultRequestSigner]].
     * @param authenticationDetailsProvider the authentication details provider.
     */
    constructor(authenticationDetailsProvider) {
        this.authenticationDetailsProvider = authenticationDetailsProvider;
        this.delegationToken = "";
        this.privateKey = "";
        let options = {};
        if (this.authenticationDetailsProvider.getPassphrase()) {
            Object.assign(options, { passphrase: this.authenticationDetailsProvider.getPassphrase() });
        }
        // We can skip parsing private Key if we have an auth type that is not file based authentication.
        // We will also set DefaultRequestSigner's delegation token from authenticationDetailsProvider before
        // authenticationDetialsProvider gets changed to its true authentication provider.
        if (this.authenticationDetailsProvider.getAuthType &&
            this.authenticationDetailsProvider.getAuthType()) {
            this.privateKeyBuffer = null;
            const delegationToken = this.authenticationDetailsProvider.getDelegationToken();
            this.delegationToken = delegationToken;
            return;
        }
        this.privateKey = this.authenticationDetailsProvider.getPrivateKey();
        this.privateKeyBuffer = sshpk_1.parsePrivateKey(this.authenticationDetailsProvider.getPrivateKey(), "auto", options).toBuffer("pem", {});
    }
    /**
     * Sign the http request.
     * @param request http request.
     * @param forceExcludeBody exclude body or not.
     */
    signHttpRequest(request, forceExcludeBody = false) {
        return __awaiter(this, void 0, void 0, function* () {
            // Populate missing headers required for signing
            let options = {};
            if (this.authenticationDetailsProvider.getPassphrase()) {
                Object.assign(options, { passphrase: this.authenticationDetailsProvider.getPassphrase() });
            }
            if (!request.headers.has("host")) {
                const url = UrlParser.parse(request.uri);
                if (url.host) {
                    request.headers.set("host", url.host);
                }
                else {
                    throw new Error("Cannot parse host from url");
                }
            }
            if (!request.headers.has("x-date")) {
                request.headers.set("x-date", new Date().toUTCString());
            }
            var headersToSign = [...DefaultRequestSigner.headersToSign];
            if (this.delegationToken) {
                request.headers.set(OPC_OBO_TOKEN, this.delegationToken);
                headersToSign.push(OPC_OBO_TOKEN);
            }
            if (!forceExcludeBody &&
                DefaultRequestSigner.methodsThatRequireExtraHeaders.indexOf(request.method.toUpperCase()) !==
                    -1) {
                if (!request.headers.has(HEADER_CONTENT_TYPE)) {
                    request.headers.set(HEADER_CONTENT_TYPE, "application/json");
                }
                let contentLen = 0;
                const shaObj = new jssha("SHA-256", "TEXT");
                if (request.body) {
                    const bodyStringContent = yield helper_1.getStringFromRequestBody(request.body);
                    shaObj.update(bodyStringContent);
                    request.headers.set(HEADER_CONTENT_SHA, shaObj.getHash("B64"));
                    contentLen = Buffer.byteLength(bodyStringContent, "utf8");
                }
                if (contentLen == 0) {
                    // if buffer is empty, it can only be an empty string payload
                    request.headers.set(HEADER_CONTENT_SHA, EMPTY_SHA);
                }
                if (!request.headers.has(HEADER_CONTENT_LEN)) {
                    request.headers.set(HEADER_CONTENT_LEN, `${contentLen}`);
                }
                headersToSign = headersToSign.concat(HEADER_CONTENT_TYPE, HEADER_CONTENT_LEN, HEADER_CONTENT_SHA);
            }
            // Always make the check to see if there is a true authenticationDetailsProvider to use
            const provider = yield delegate_auth_provider_1.delegateAuthProvider(this.authenticationDetailsProvider);
            if (provider) {
                this.authenticationDetailsProvider = provider;
            }
            const keyId = yield this.authenticationDetailsProvider.getKeyId();
            // Check if privateKey exists or if the authenticationDetailsProvider's private key have changed.
            let authPrivateKey = this.authenticationDetailsProvider.getPrivateKey();
            if (!this.privateKey || this.privateKey !== authPrivateKey) {
                this.privateKey = authPrivateKey;
                this.privateKeyBuffer = sshpk_1.parsePrivateKey(authPrivateKey, "auto", options).toBuffer("pem", {});
            }
            httpSignature.sign(new SignerRequest(request.method, request.uri, request.headers), {
                key: this.privateKeyBuffer,
                keyId: keyId,
                headers: headersToSign
            });
            const authorizationHeader = request.headers.get("authorization");
            if (authorizationHeader) {
                request.headers.set("authorization", authorizationHeader.replace("Signature ", 'Signature version="1",'));
            }
            else {
                throw new Error("Unable to sign request");
            }
        });
    }
}
exports.DefaultRequestSigner = DefaultRequestSigner;
DefaultRequestSigner.headersToSign = ["x-date", "(request-target)", "host"];
DefaultRequestSigner.methodsThatRequireExtraHeaders = ["POST", "PUT", "PATCH"];
//# sourceMappingURL=signer.js.map

/***/ }),

/***/ 1563:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.

 * Utility method to check if environment is node or browser
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkNotNull = exports.isEmpty = exports.isBrowser = void 0;
function isBrowser() {
    if (typeof window === "undefined") {
        return false;
    }
    return true;
}
exports.isBrowser = isBrowser;
// utility method checks if object is empty or not
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
exports.isEmpty = isEmpty;
// Utility method to check if value is null, else throw error with msg.
function checkNotNull(value, msg) {
    if (value) {
        return value;
    }
    throw new Error(msg);
}
exports.checkNotNull = checkNotNull;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 779:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.genericWaiter = exports.genericTerminalConditionWaiter = exports.delay = exports.MaxTimeTerminationStrategy = exports.MaxAttemptsTerminationStrategy = exports.FixedTimeDelayStrategy = exports.ExponentialBackoffDelayStrategy = exports.WaitContextImpl = void 0;
const __1 = __nccwpck_require__(5049);
class WaitContextImpl {
    constructor() {
        this.startTime = new Date();
        this.attemptCount = 0;
    }
}
exports.WaitContextImpl = WaitContextImpl;
class ExponentialBackoffDelayStrategy {
    constructor(maxDelayInSeconds) {
        this.maxDelayInSeconds = maxDelayInSeconds;
        this.currentDelayInSeconds = 1;
    }
    delay(context) {
        if (this.currentDelayInSeconds <= 0) {
            return this.maxDelayInSeconds;
        }
        const delay = Math.min(this.currentDelayInSeconds, this.maxDelayInSeconds);
        this.currentDelayInSeconds *= 2;
        return delay;
    }
}
exports.ExponentialBackoffDelayStrategy = ExponentialBackoffDelayStrategy;
class FixedTimeDelayStrategy {
    constructor(timeBetweenAttempsInSeconds) {
        this.timeBetweenAttempsInSeconds = timeBetweenAttempsInSeconds;
    }
    delay(context) {
        return this.timeBetweenAttempsInSeconds;
    }
}
exports.FixedTimeDelayStrategy = FixedTimeDelayStrategy;
class MaxAttemptsTerminationStrategy {
    constructor(maxAttempts) {
        this.maxAttempts = maxAttempts - 1;
    }
    shouldTerminate(context) {
        return context.attemptCount >= this.maxAttempts;
    }
}
exports.MaxAttemptsTerminationStrategy = MaxAttemptsTerminationStrategy;
class MaxTimeTerminationStrategy {
    constructor(maxTimeInSeconds) {
        this.maxTimeInSeconds = maxTimeInSeconds;
    }
    shouldTerminate(context) {
        const endTime = new Date();
        endTime.setTime(context.startTime.getTime() + this.maxTimeInSeconds * 1000);
        return new Date() >= endTime;
    }
}
exports.MaxTimeTerminationStrategy = MaxTimeTerminationStrategy;
const DefaultWaiterConfigurationDetails = {
    terminationStrategy: new MaxTimeTerminationStrategy(1200),
    delayStrategy: new ExponentialBackoffDelayStrategy(30)
};
function delay(second) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, second * 1000));
    });
}
exports.delay = delay;
function genericTerminalConditionWaiter(config, serviceCall, terminationPredicate, allow404 = false) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return genericWaiter(config, serviceCall, terminationPredicate);
        }
        catch (ex) {
            if (ex instanceof __1.OciError && ex.statusCode == 404 && allow404) {
                return null;
            }
            throw ex;
        }
    });
}
exports.genericTerminalConditionWaiter = genericTerminalConditionWaiter;
function genericWaiter(config, serviceCall, terminationPredicate) {
    return __awaiter(this, void 0, void 0, function* () {
        const waitContext = new WaitContextImpl();
        const { terminationStrategy, delayStrategy } = Object.assign(Object.assign({}, DefaultWaiterConfigurationDetails), config);
        while (true) {
            const response = yield serviceCall();
            if (terminationPredicate(response)) {
                return response;
            }
            if (terminationStrategy.shouldTerminate(waitContext)) {
                throw Error(`Termination strategy decided to terminate with context at: ${waitContext}`);
            }
            yield delay(delayStrategy.delay(waitContext));
            waitContext.attemptCount++;
        }
    });
}
exports.genericWaiter = genericWaiter;
//# sourceMappingURL=waiter.js.map

/***/ }),

/***/ 9515:
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ 1627:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var crypto = __nccwpck_require__(6417);

module.exports = function nodeRNG() {
  return crypto.randomBytes(16);
};


/***/ }),

/***/ 4185:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var rng = __nccwpck_require__(1627);
var bytesToUuid = __nccwpck_require__(9515);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 3857:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


module.exports = exports = __nccwpck_require__(8847);


/***/ }),

/***/ 8847:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


const EventEmitter = __nccwpck_require__(8614);
const Status = __nccwpck_require__(4341);
const Semaphore = __nccwpck_require__(9160);

const STATE = Symbol('state');
const OPEN = Symbol('open');
const CLOSED = Symbol('closed');
const HALF_OPEN = Symbol('half-open');
const PENDING_CLOSE = Symbol('pending-close');
const SHUTDOWN = Symbol('shutdown');
const FALLBACK_FUNCTION = Symbol('fallback');
const STATUS = Symbol('status');
const NAME = Symbol('name');
const GROUP = Symbol('group');
const CACHE = new WeakMap();
const ENABLED = Symbol('Enabled');
const WARMING_UP = Symbol('warming-up');
const VOLUME_THRESHOLD = Symbol('volume-threshold');
const OUR_ERROR = Symbol('our-error');
const RESET_TIMEOUT = Symbol('reset-timeout');
const WARMUP_TIMEOUT = Symbol('warmup-timeout');
const deprecation = `options.maxFailures is deprecated. \
Please use options.errorThresholdPercentage`;

/**
 * Constructs a {@link CircuitBreaker}.
 *
 * @class CircuitBreaker
 * @extends EventEmitter
 * @param {Function} action The action to fire for this {@link CircuitBreaker}
 * @param {Object} options Options for the {@link CircuitBreaker}
 * @param {Number} options.timeout The time in milliseconds that action should
 * be allowed to execute before timing out. Timeout can be disabled by setting
 * this to `false`. Default 10000 (10 seconds)
 * @param {Number} options.maxFailures (Deprecated) The number of times the
 * circuit can fail before opening. Default 10.
 * @param {Number} options.resetTimeout The time in milliseconds to wait before
 * setting the breaker to `halfOpen` state, and trying the action again.
 * Default: 30000 (30 seconds)
 * @param {Number} options.rollingCountTimeout Sets the duration of the
 * statistical rolling window, in milliseconds. This is how long Opossum keeps
 * metrics for the circuit breaker to use and for publishing. Default: 10000
 * @param {Number} options.rollingCountBuckets Sets the number of buckets the
 * rolling statistical window is divided into. So, if
 * options.rollingCountTimeout is 10000, and options.rollingCountBuckets is 10,
 * then the statistical window will be 1000 1 second snapshots in the
 * statistical window. Default: 10
 * @param {String} options.name the circuit name to use when reporting stats.
 * Default: the name of the function this circuit controls.
 * @param {boolean} options.rollingPercentilesEnabled This property indicates
 * whether execution latencies should be tracked and calculated as percentiles.
 * If they are disabled, all summary statistics (mean, percentiles) are
 * returned as -1. Default: false
 * @param {Number} options.capacity the number of concurrent requests allowed.
 * If the number currently executing function calls is equal to
 * options.capacity, further calls to `fire()` are rejected until at least one
 * of the current requests completes. Default: `Number.MAX_SAFE_INTEGER`.
 * @param {Number} options.errorThresholdPercentage the error percentage at
 * which to open the circuit and start short-circuiting requests to fallback.
 * Default: 50
 * @param {boolean} options.enabled whether this circuit is enabled upon
 * construction. Default: true
 * @param {boolean} options.allowWarmUp determines whether to allow failures
 * without opening the circuit during a brief warmup period (this is the
 * `rollingCountTimeout` property). Default: false
 * allow before enabling the circuit. This can help in situations where no
 * matter what your `errorThresholdPercentage` is, if the first execution
 * times out or fails, the circuit immediately opens.
 * @param {Number} options.volumeThreshold the minimum number of requests within
 * the rolling statistical window that must exist before the circuit breaker
 * can open. This is similar to `options.allowWarmUp` in that no matter how many
 * failures there are, if the number of requests within the statistical window
 * does not exceed this threshold, the circuit will remain closed. Default: 0
 * @param {Function} options.errorFilter an optional function that will be
 * called when the circuit's function fails (returns a rejected Promise). If
 * this function returns truthy, the circuit's failPure statistics will not be
 * incremented. This is useful, for example, when you don't want HTTP 404 to
 * trip the circuit, but still want to handle it as a failure case.
 * @param {boolean} options.cache whether the return value of the first
 * successful execution of the circuit's function will be cached. Once a value
 * has been cached that value will be returned for every subsequent execution:
 * the cache can be cleared using `clearCache`. (The metrics `cacheHit` and
 * `cacheMiss` reflect cache activity.) Default: false
 *
 *
 * @fires CircuitBreaker#halfOpen
 * @fires CircuitBreaker#close
 * @fires CircuitBreaker#open
 * @fires CircuitBreaker#fire
 * @fires CircuitBreaker#cacheHit
 * @fires CircuitBreaker#cacheMiss
 * @fires CircuitBreaker#reject
 * @fires CircuitBreaker#timeout
 * @fires CircuitBreaker#success
 * @fires CircuitBreaker#semaphoreLocked
 * @fires CircuitBreaker#healthCheckFailed
 * @fires CircuitBreaker#fallback
 * @fires CircuitBreaker#failure
 */
class CircuitBreaker extends EventEmitter {
  /**
   * Returns true if the provided error was generated here. It will be false
   * if the error came from the action itself.
   * @param {Error} error The Error to check.
   * @returns {Boolean} true if the error was generated here
   */
  static isOurError (error) {
    return !!error[OUR_ERROR];
  }

  constructor (action, options = {}) {
    super();
    this.options = options;
    this.options.timeout =
      options.timeout === false ? false : options.timeout || 10000;
    this.options.resetTimeout = options.resetTimeout || 30000;
    this.options.errorThresholdPercentage =
      options.errorThresholdPercentage || 50;
    this.options.rollingCountTimeout = options.rollingCountTimeout || 10000;
    this.options.rollingCountBuckets = options.rollingCountBuckets || 10;
    this.options.rollingPercentilesEnabled =
      options.rollingPercentilesEnabled !== false;
    this.options.capacity = Number.isInteger(options.capacity)
      ? options.capacity : Number.MAX_SAFE_INTEGER;
    this.options.errorFilter = options.errorFilter || (_ => false);

    this.semaphore = new Semaphore(this.options.capacity);

    this[VOLUME_THRESHOLD] = Number.isInteger(options.volumeThreshold)
      ? options.volumeThreshold : 0;
    this[WARMING_UP] = options.allowWarmUp === true;
    this[STATUS] = new Status(this.options);
    this[STATE] = CLOSED;
    this[FALLBACK_FUNCTION] = null;
    this[PENDING_CLOSE] = false;
    this[NAME] = options.name || action.name || nextName();
    this[GROUP] = options.group || this[NAME];
    this[ENABLED] = options.enabled !== false;

    if (this[WARMING_UP]) {
      const timer = this[WARMUP_TIMEOUT] = setTimeout(
        _ => (this[WARMING_UP] = false),
        this.options.rollingCountTimeout
      );
      if (typeof timer.unref === 'function') {
        timer.unref();
      }
    }

    if (typeof action !== 'function') {
      this.action = _ => Promise.resolve(action);
    } else this.action = action;

    if (options.maxFailures) console.error(deprecation);

    const increment = property =>
      (result, runTime) => this[STATUS].increment(property, runTime);

    this.on('success', increment('successes'));
    this.on('failure', increment('failures'));
    this.on('fallback', increment('fallbacks'));
    this.on('timeout', increment('timeouts'));
    this.on('fire', increment('fires'));
    this.on('reject', increment('rejects'));
    this.on('cacheHit', increment('cacheHits'));
    this.on('cacheMiss', increment('cacheMisses'));
    this.on('open', _ => this[STATUS].open());
    this.on('close', _ => this[STATUS].close());
    this.on('semaphoreLocked', increment('semaphoreRejections'));

    /**
     * @param {CircuitBreaker} circuit This current circuit
     * @returns {function(): void} A bound reset callback
     * @private
     */
    function _startTimer (circuit) {
      return _ => {
        const timer = circuit[RESET_TIMEOUT] = setTimeout(() => {
          circuit[STATE] = HALF_OPEN;
          circuit[PENDING_CLOSE] = true;
          /**
           * Emitted after `options.resetTimeout` has elapsed, allowing for
           * a single attempt to call the service again. If that attempt is
           * successful, the circuit will be closed. Otherwise it remains open.
           *
           * @event CircuitBreaker#halfOpen
           * @type {Number} how long the circuit remained open
           */
          circuit.emit('halfOpen', circuit.options.resetTimeout);
        }, circuit.options.resetTimeout);
        if (typeof timer.unref === 'function') {
          timer.unref();
        }
      };
    }

    this.on('open', _startTimer(this));
    this.on('success', _ => {
      if (this.halfOpen) {
        this.close();
      }
    });
    if (this.options.cache) {
      CACHE.set(this, undefined);
    }
  }

  /**
   * Closes the breaker, allowing the action to execute again
   * @fires CircuitBreaker#close
   * @returns {void}
   */
  close () {
    if (this[STATE] !== CLOSED) {
      if (this[RESET_TIMEOUT]) {
        clearTimeout(this[RESET_TIMEOUT]);
      }
      this[STATE] = CLOSED;
      this[PENDING_CLOSE] = false;
      /**
       * Emitted when the breaker is reset allowing the action to execute again
       * @event CircuitBreaker#close
       */
      this.emit('close');
    }
  }

  /**
   * Opens the breaker. Each time the breaker is fired while the circuit is
   * opened, a failed Promise is returned, or if any fallback function
   * has been provided, it is invoked.
   *
   * If the breaker is already open this call does nothing.
   * @fires CircuitBreaker#open
   * @returns {void}
   */
  open () {
    if (this[STATE] !== OPEN) {
      this[STATE] = OPEN;
      this[PENDING_CLOSE] = false;
      /**
       * Emitted when the breaker opens because the action has
       * failed more than `options.maxFailures` number of times.
       * @event CircuitBreaker#open
       */
      this.emit('open');
    }
  }

  /**
   * Shuts down this circuit breaker. All subsequent calls to the
   * circuit will fail, returning a rejected promise.
   * @returns {void}
   */
  shutdown () {
    this.disable();
    this.removeAllListeners();
    if (this[RESET_TIMEOUT]) {
      clearTimeout(this[RESET_TIMEOUT]);
    }
    if (this[WARMUP_TIMEOUT]) {
      clearTimeout(this[WARMUP_TIMEOUT]);
    }
    this.status.shutdown();
    this[STATE] = SHUTDOWN;
    /**
     * Emitted when the circuit breaker has been shut down.
     * @event CircuitBreaker#shutdown
     */
    this.emit('shutdown');
  }

  /**
   * Determines if the circuit has been shutdown.
   * @type {Boolean}
   */
  get isShutdown () {
    return this[STATE] === SHUTDOWN;
  }

  /**
   * Gets the name of this circuit
   * @type {String}
   */
  get name () {
    return this[NAME];
  }

  /**
   * Gets the name of this circuit group
   * @type {String}
   */
  get group () {
    return this[GROUP];
  }

  /**
   * Gets whether this circuit is in the `pendingClosed` state
   * @type {Boolean}
   */
  get pendingClose () {
    return this[PENDING_CLOSE];
  }

  /**
   * True if the circuit is currently closed. False otherwise.
   * @type {Boolean}
   */
  get closed () {
    return this[STATE] === CLOSED;
  }

  /**
   * True if the circuit is currently opened. False otherwise.
   * @type {Boolean}
   */
  get opened () {
    return this[STATE] === OPEN;
  }

  /**
   * True if the circuit is currently half opened. False otherwise.
   * @type {Boolean}
   */
  get halfOpen () {
    return this[STATE] === HALF_OPEN;
  }

  /**
   * The current {@link Status} of this {@link CircuitBreaker}
   * @type {Status}
   */
  get status () {
    return this[STATUS];
  }

  /**
   * Get the current stats for the circuit.
   * @see Status#stats
   * @type {Object}
   */
  get stats () {
    return this[STATUS].stats;
  }

  /**
   * Gets whether the circuit is enabled or not
   * @type {Boolean}
   */
  get enabled () {
    return this[ENABLED];
  }

  /**
   * Gets whether the circuit is currently in warm up phase
   * @type {Boolean}
   */
  get warmUp () {
    return this[WARMING_UP];
  }

  /**
   * Gets the volume threshold for this circuit
   * @type {Boolean}
   */
  get volumeThreshold () {
    return this[VOLUME_THRESHOLD];
  }

  /**
   * Provide a fallback function for this {@link CircuitBreaker}. This
   * function will be executed when the circuit is `fire`d and fails.
   * It will always be preceded by a `failure` event, and `breaker.fire` returns
   * a rejected Promise.
   * @param {Function | CircuitBreaker} func the fallback function to execute
   * when the breaker has opened or when a timeout or error occurs.
   * @return {CircuitBreaker} this
   */
  fallback (func) {
    let fb = func;
    if (func instanceof CircuitBreaker) {
      fb = function () {
        return func.fire.apply(func, arguments);
      };
    }
    this[FALLBACK_FUNCTION] = fb;
    return this;
  }

  /**
   * Execute the action for this circuit. If the action fails or times out, the
   * returned promise will be rejected. If the action succeeds, the promise will
   * resolve with the resolved value from action. If a fallback function was
   * provided, it will be invoked in the event of any failure or timeout.
   *
   * Any parameters passed to this function will be proxied to the circuit
   * function.
   *
   * @return {Promise<any>} promise resolves with the circuit function's return
   * value on success or is rejected on failure of the action. Use isOurError()
   * to determine if a rejection was a result of the circuit breaker or the
   * action.
   *
   * @fires CircuitBreaker#failure
   * @fires CircuitBreaker#fallback
   * @fires CircuitBreaker#fire
   * @fires CircuitBreaker#reject
   * @fires CircuitBreaker#success
   * @fires CircuitBreaker#timeout
   * @fires CircuitBreaker#semaphoreLocked
   */
  fire (...args) {
    return this.call.apply(this, [this.action].concat(args));
  }

  /**
   * Execute the action for this circuit using `context` as `this`.
   * If the action fails or times out, the
   * returned promise will be rejected. If the action succeeds, the promise will
   * resolve with the resolved value from action. If a fallback function was
   * provided, it will be invoked in the event of any failure or timeout.
   *
   * Any parameters in addition to `context will be passed to the
   * circuit function.
   *
   * @param {any} context the `this` context used for function execution
   * @param {any} rest the arguments passed to the action
   *
   * @return {Promise<any>} promise resolves with the circuit function's return
   * value on success or is rejected on failure of the action.
   *
   * @fires CircuitBreaker#failure
   * @fires CircuitBreaker#fallback
   * @fires CircuitBreaker#fire
   * @fires CircuitBreaker#reject
   * @fires CircuitBreaker#success
   * @fires CircuitBreaker#timeout
   * @fires CircuitBreaker#semaphoreLocked
   */
  call (context, ...rest) {
    if (this.isShutdown) {
      const err = buildError('The circuit has been shutdown.', 'ESHUTDOWN');
      return Promise.reject(err);
    }
    const args = Array.prototype.slice.call(rest);

    /**
     * Emitted when the circuit breaker action is executed
     * @event CircuitBreaker#fire
     * @type {any} the arguments passed to the fired function
     */
    this.emit('fire', args);

    if (CACHE.get(this) !== undefined) {
      /**
       * Emitted when the circuit breaker is using the cache
       * and finds a value.
       * @event CircuitBreaker#cacheHit
       */
      this.emit('cacheHit');
      return CACHE.get(this);
    } else if (this.options.cache) {
      /**
       * Emitted when the circuit breaker does not find a value in
       * the cache, but the cache option is enabled.
       * @event CircuitBreaker#cacheMiss
       */
      this.emit('cacheMiss');
    }

    if (!this[ENABLED]) {
      const result = this.action.apply(context, args);
      return (typeof result.then === 'function')
        ? result
        : Promise.resolve(result);
    }

    if (!this.closed && !this.pendingClose) {
      /**
       * Emitted when the circuit breaker is open and failing fast
       * @event CircuitBreaker#reject
       * @type {Error}
       */
      const error = buildError('Breaker is open', 'EOPENBREAKER');

      this.emit('reject', error);

      return fallback(this, error, args) ||
        Promise.reject(error);
    }
    this[PENDING_CLOSE] = false;

    let timeout;
    let timeoutError = false;
    return new Promise((resolve, reject) => {
      const latencyStartTime = Date.now();
      if (this.semaphore.test()) {
        if (this.options.timeout) {
          timeout = setTimeout(
            () => {
              timeoutError = true;
              const error = buildError(
                `Timed out after ${this.options.timeout}ms`, 'ETIMEDOUT'
              );
              const latency = Date.now() - latencyStartTime;
              this.semaphore.release();
              /**
               * Emitted when the circuit breaker action takes longer than
               * `options.timeout`
               * @event CircuitBreaker#timeout
               * @type {Error}
               */
              this.emit('timeout', error, latency, args);
              handleError(error, this, timeout, args, latency, resolve, reject);
            }, this.options.timeout);
        }

        try {
          const result = this.action.apply(context, args);
          const promise = (typeof result.then === 'function')
            ? result
            : Promise.resolve(result);

          promise.then(result => {
            if (!timeoutError) {
              clearTimeout(timeout);
              /**
               * Emitted when the circuit breaker action succeeds
               * @event CircuitBreaker#success
               * @type {any} the return value from the circuit
               */
              this.emit('success', result, (Date.now() - latencyStartTime));
              this.semaphore.release();
              resolve(result);
              if (this.options.cache) {
                CACHE.set(this, promise);
              }
            }
          })
            .catch(error => {
              if (!timeoutError) {
                this.semaphore.release();
                const latencyEndTime = Date.now() - latencyStartTime;
                handleError(
                  error, this, timeout, args, latencyEndTime, resolve, reject);
              }
            });
        } catch (error) {
          this.semaphore.release();
          const latency = Date.now() - latencyStartTime;
          handleError(error, this, timeout, args, latency, resolve, reject);
        }
      } else {
        const latency = Date.now() - latencyStartTime;
        const err = buildError('Semaphore locked', 'ESEMLOCKED');
        /**
         * Emitted when the rate limit has been reached and there
         * are no more locks to be obtained.
         * @event CircuitBreaker#semaphoreLocked
         * @type {Error}
         */
        this.emit('semaphoreLocked', err, latency);
        handleError(err, this, timeout, args, latency, resolve, reject);
      }
    });
  }

  /**
   * Clears the cache of this {@link CircuitBreaker}
   * @returns {void}
   */
  clearCache () {
    CACHE.set(this, undefined);
  }

  /**
   * Provide a health check function to be called periodically. The function
   * should return a Promise. If the promise is rejected the circuit will open.
   * This is in addition to the existing circuit behavior as defined by
   * `options.errorThresholdPercentage` in the constructor. For example, if the
   * health check function provided here always returns a resolved promise, the
   * circuit can still trip and open if there are failures exceeding the
   * configured threshold. The health check function is executed within the
   * circuit breaker's execution context, so `this` within the function is the
   * circuit breaker itself.
   *
   * @param {Function} func a health check function which returns a promise.
   * @param {Number} [interval] the amount of time between calls to the health
   * check function. Default: 5000 (5 seconds)
   *
   * @returns {void}
   *
   * @fires CircuitBreaker#healthCheckFailed
   * @throws {TypeError} if `interval` is supplied but not a number
   */
  healthCheck (func, interval) {
    interval = interval || 5000;
    if (typeof func !== 'function') {
      throw new TypeError('Health check function must be a function');
    }
    if (isNaN(interval)) {
      throw new TypeError('Health check interval must be a number');
    }

    const check = _ => {
      func.apply(this).catch(e => {
        /**
         * Emitted with the user-supplied health check function
         * returns a rejected promise.
         * @event CircuitBreaker#healthCheckFailed
         * @type {Error}
         */
        this.emit('healthCheckFailed', e);
        this.open();
      });
    };

    const timer = setInterval(check, interval);
    if (typeof timer.unref === 'function') {
      timer.unref();
    }

    check();
  }

  /**
   * Enables this circuit. If the circuit is the  disabled
   * state, it will be re-enabled. If not, this is essentially
   * a noop.
   * @returns {void}
   */
  enable () {
    this[ENABLED] = true;
  }

  /**
   * Disables this circuit, causing all calls to the circuit's function
   * to be executed without circuit or fallback protection.
   * @returns {void}
   */
  disable () {
    this[ENABLED] = false;
  }
}

function handleError (error, circuit, timeout, args, latency, resolve, reject) {
  clearTimeout(timeout);

  if (circuit.options.errorFilter(error)) {
    circuit.emit('success', error, latency);
  } else {
    fail(circuit, error, args, latency);
  }

  const fb = fallback(circuit, error, args);
  if (fb) resolve(fb);
  else reject(error);
}

function fallback (circuit, err, args) {
  if (circuit[FALLBACK_FUNCTION]) {
    const result =
      circuit[FALLBACK_FUNCTION]
        .apply(circuit[FALLBACK_FUNCTION], [...args, err]);
    /**
     * Emitted when the circuit breaker executes a fallback function
     * @event CircuitBreaker#fallback
     * @type {any} the return value of the fallback function
     */
    circuit.emit('fallback', result, err);
    if (result instanceof Promise) return result;
    return Promise.resolve(result);
  }
}

function fail (circuit, err, args, latency) {
  /**
   * Emitted when the circuit breaker action fails
   * @event CircuitBreaker#failure
   * @type {Error}
   */
  circuit.emit('failure', err, latency, args);
  if (circuit.warmUp) return;

  // check stats to see if the circuit should be opened
  const stats = circuit.stats;
  if ((stats.fires < circuit.volumeThreshold) && !circuit.halfOpen) return;
  const errorRate = stats.failures / stats.fires * 100;
  if (errorRate > circuit.options.errorThresholdPercentage ||
    stats.failures >= circuit.options.maxFailures ||
    circuit.halfOpen) {
    circuit.open();
  }
}

function buildError (msg, code) {
  const error = new Error(msg);
  error.code = code;
  error[OUR_ERROR] = true;
  return error;
}

// http://stackoverflow.com/a/2117523
const nextName = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });

module.exports = exports = CircuitBreaker;


/***/ }),

/***/ 9160:
/***/ ((module, exports) => {

"use strict";


module.exports = exports = semaphore;

function semaphore (count) {
  const resolvers = [];
  let counter = count;

  const sem = {
    take,
    release,
    test
  };

  Object.defineProperty(sem, 'count', {
    get: _ => counter,
    enumerable: true
  });

  return sem;

  function take (timeout) {
    if (counter > 0) {
      --counter;
      return Promise.resolve(release);
    }
    return new Promise((resolve, reject) => {
      resolvers.push(_ => {
        --counter;
        resolve(release);
      });
      if (timeout) {
        setTimeout(_ => {
          resolvers.shift();
          const err = new Error(`Timed out after ${timeout}ms`);
          err.code = 'ETIMEDOUT';
          reject(err);
        }, timeout);
      }
    });
  }

  function release () {
    counter++;
    if (resolvers.length > 0) {
      resolvers.shift()();
    }
  }

  function test () {
    if (counter < 1) return false;
    return take() && true;
  }
}


/***/ }),

/***/ 4341:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


const WINDOW = Symbol('window');
const BUCKETS = Symbol('buckets');
const TIMEOUT = Symbol('timeout');
const PERCENTILES = Symbol('percentiles');
const BUCKET_INTERVAL = Symbol('bucket-interval');
const SNAPSHOT_INTERVAL = Symbol('snapshot-interval');

const EventEmitter = __nccwpck_require__(8614).EventEmitter;

/**
 * Tracks execution status for a given {@link CircuitBreaker}.
 * A Status instance is created for every {@link CircuitBreaker}
 * and does not typically need to be created by a user.
 *
 * A Status instance will listen for all events on the {@link CircuitBreaker}
 * and track them in a rolling statistical window. The window duration is
 * determined by the `rollingCountTimeout` option provided to the
 * {@link CircuitBreaker}. The window consists of an array of Objects,
 * each representing the counts for a {@link CircuitBreaker}'s events.
 *
 * The array's length is determined by the {@link CircuitBreaker}'s
 * `rollingCountBuckets` option. The duration of each slice of the window
 * is determined by dividing the `rollingCountTimeout` by
 * `rollingCountBuckets`.
 *
 * @class Status
 * @extends EventEmitter
 * @param {Object} options for the status window
 * @param {Number} options.rollingCountBuckets number of buckets in the window
 * @param {Number} options.rollingCountTimeout the duration of the window
 * @param {Boolean} options.rollingPercentilesEnabled whether to calculate
 * percentiles
 * @example
 * // Creates a 1 second window consisting of ten time slices,
 * // each 100ms long.
 * const circuit = circuitBreaker(fs.readFile,
 *  { rollingCountBuckets: 10, rollingCountTimeout: 1000});
 *
 * // get the cumulative statistics for the last second
 * circuit.status.stats;
 *
 * // get the array of 10, 1 second time slices for the last second
 * circuit.status.window;
 * @fires Status#snapshot
 * @see CircuitBreaker#status
 */
class Status extends EventEmitter {
  constructor (options) {
    super();

    // Set up our statistical rolling window
    this[BUCKETS] = options.rollingCountBuckets;
    this[TIMEOUT] = options.rollingCountTimeout;
    this[WINDOW] = new Array(this[BUCKETS]);
    this[PERCENTILES] = [0.0, 0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.995, 1];

    // Default this value to true
    this.rollingPercentilesEnabled = options.rollingPercentilesEnabled;

    // prime the window with buckets
    for (let i = 0; i < this[BUCKETS]; i++) this[WINDOW][i] = bucket();

    // rotate the buckets periodically
    const bucketInterval = Math.floor(this[TIMEOUT] / this[BUCKETS]);
    this[BUCKET_INTERVAL] = setInterval(nextBucket(this[WINDOW]),
      bucketInterval);

    // No unref() in the browser
    if (typeof this[BUCKET_INTERVAL].unref === 'function') {
      this[BUCKET_INTERVAL].unref();
    }

    /**
     * Emitted at each time-slice. Listeners for this
     * event will receive a cumulative snapshot of the current status window.
     * @event Status#snapshot
     * @type {Object}
     */
    this[SNAPSHOT_INTERVAL] = setInterval(
      _ => this.emit('snapshot', this.stats),
      bucketInterval);
    if (typeof this[SNAPSHOT_INTERVAL].unref === 'function') {
      this[SNAPSHOT_INTERVAL].unref();
    }
  }

  /**
   * Get the cumulative stats for the current window
   * @type {Object}
   */
  get stats () {
    const totals = this[WINDOW].reduce((acc, val) => {
      if (!val) { return acc; }
      Object.keys(acc).forEach(key => {
        if (key !== 'latencyTimes' && key !== 'percentiles') {
          (acc[key] += val[key] || 0);
        }
      });

      if (this.rollingPercentilesEnabled) {
        acc.latencyTimes.push.apply(acc.latencyTimes, val.latencyTimes || []);
      }
      return acc;
    }, bucket());

    if (this.rollingPercentilesEnabled) {
      // Sort the latencyTimes
      totals.latencyTimes.sort((a, b) => a - b);

      // Get the mean latency
      // Mean = sum of all values in the array/length of array
      if (totals.latencyTimes.length) {
        totals.latencyMean =
          (totals
            .latencyTimes
            .reduce((a, b) => a + b, 0)) / totals.latencyTimes.length;
      } else {
        totals.latencyMean = 0;
      }

      // Calculate Percentiles
      this[PERCENTILES].forEach(percentile => {
        totals.percentiles[percentile] =
          calculatePercentile(percentile, totals.latencyTimes);
      });
    } else {
      totals.latencyMean = -1;
      this[PERCENTILES].forEach(percentile => {
        totals.percentiles[percentile] = -1;
      });
    }

    return totals;
  }

  /**
   * Gets the stats window as an array of time-sliced objects.
   * @type {Array}
   */
  get window () {
    return this[WINDOW].slice();
  }

  increment (property, latencyRunTime) {
    this[WINDOW][0][property]++;
    if (property === 'successes' ||
        property === 'failures' ||
        property === 'timeouts') {
      this[WINDOW][0].latencyTimes.push(latencyRunTime || 0);
    }
  }

  open () {
    this[WINDOW][0].isCircuitBreakerOpen = true;
  }

  close () {
    this[WINDOW][0].isCircuitBreakerOpen = false;
  }

  shutdown () {
    this.removeAllListeners();
    clearInterval(this[BUCKET_INTERVAL]);
    clearInterval(this[SNAPSHOT_INTERVAL]);
  }
}

const nextBucket = window => _ => {
  window.pop();
  window.unshift(bucket());
};

const bucket = _ => ({
  failures: 0,
  fallbacks: 0,
  successes: 0,
  rejects: 0,
  fires: 0,
  timeouts: 0,
  cacheHits: 0,
  cacheMisses: 0,
  semaphoreRejections: 0,
  percentiles: {},
  latencyTimes: []
});

function calculatePercentile (percentile, arr) {
  if (percentile === 0) {
    return arr[0] || 0;
  }
  const idx = Math.ceil(percentile * arr.length);
  return arr[idx - 1] || 0;
}

module.exports = exports = Status;


/***/ }),

/***/ 1867:
/***/ ((module, exports, __nccwpck_require__) => {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = __nccwpck_require__(4293)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ 5118:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
/* eslint-disable node/no-deprecated-api */



var buffer = __nccwpck_require__(4293)
var Buffer = buffer.Buffer

var safer = {}

var key

for (key in buffer) {
  if (!buffer.hasOwnProperty(key)) continue
  if (key === 'SlowBuffer' || key === 'Buffer') continue
  safer[key] = buffer[key]
}

var Safer = safer.Buffer = {}
for (key in Buffer) {
  if (!Buffer.hasOwnProperty(key)) continue
  if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue
  Safer[key] = Buffer[key]
}

safer.Buffer.prototype = Buffer.prototype

if (!Safer.from || Safer.from === Uint8Array.from) {
  Safer.from = function (value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value)
    }
    if (value && typeof value.length === 'undefined') {
      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value)
    }
    return Buffer(value, encodingOrOffset, length)
  }
}

if (!Safer.alloc) {
  Safer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size)
    }
    if (size < 0 || size >= 2 * (1 << 30)) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"')
    }
    var buf = Buffer(size)
    if (!fill || fill.length === 0) {
      buf.fill(0)
    } else if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
    return buf
  }
}

if (!safer.kStringMaxLength) {
  try {
    safer.kStringMaxLength = process.binding('buffer').kStringMaxLength
  } catch (e) {
    // we can't determine kStringMaxLength in environments where process.binding
    // is unsupported, so let's not set it
  }
}

if (!safer.constants) {
  safer.constants = {
    MAX_LENGTH: safer.kMaxLength
  }
  if (safer.kStringMaxLength) {
    safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength
  }
}

module.exports = safer


/***/ }),

/***/ 6126:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

var Buffer = __nccwpck_require__(5118).Buffer;

var algInfo = {
	'dsa': {
		parts: ['p', 'q', 'g', 'y'],
		sizePart: 'p'
	},
	'rsa': {
		parts: ['e', 'n'],
		sizePart: 'n'
	},
	'ecdsa': {
		parts: ['curve', 'Q'],
		sizePart: 'Q'
	},
	'ed25519': {
		parts: ['A'],
		sizePart: 'A'
	}
};
algInfo['curve25519'] = algInfo['ed25519'];

var algPrivInfo = {
	'dsa': {
		parts: ['p', 'q', 'g', 'y', 'x']
	},
	'rsa': {
		parts: ['n', 'e', 'd', 'iqmp', 'p', 'q']
	},
	'ecdsa': {
		parts: ['curve', 'Q', 'd']
	},
	'ed25519': {
		parts: ['A', 'k']
	}
};
algPrivInfo['curve25519'] = algPrivInfo['ed25519'];

var hashAlgs = {
	'md5': true,
	'sha1': true,
	'sha256': true,
	'sha384': true,
	'sha512': true
};

/*
 * Taken from
 * http://csrc.nist.gov/groups/ST/toolkit/documents/dss/NISTReCur.pdf
 */
var curves = {
	'nistp256': {
		size: 256,
		pkcs8oid: '1.2.840.10045.3.1.7',
		p: Buffer.from(('00' +
		    'ffffffff 00000001 00000000 00000000' +
		    '00000000 ffffffff ffffffff ffffffff').
		    replace(/ /g, ''), 'hex'),
		a: Buffer.from(('00' +
		    'FFFFFFFF 00000001 00000000 00000000' +
		    '00000000 FFFFFFFF FFFFFFFF FFFFFFFC').
		    replace(/ /g, ''), 'hex'),
		b: Buffer.from((
		    '5ac635d8 aa3a93e7 b3ebbd55 769886bc' +
		    '651d06b0 cc53b0f6 3bce3c3e 27d2604b').
		    replace(/ /g, ''), 'hex'),
		s: Buffer.from(('00' +
		    'c49d3608 86e70493 6a6678e1 139d26b7' +
		    '819f7e90').
		    replace(/ /g, ''), 'hex'),
		n: Buffer.from(('00' +
		    'ffffffff 00000000 ffffffff ffffffff' +
		    'bce6faad a7179e84 f3b9cac2 fc632551').
		    replace(/ /g, ''), 'hex'),
		G: Buffer.from(('04' +
		    '6b17d1f2 e12c4247 f8bce6e5 63a440f2' +
		    '77037d81 2deb33a0 f4a13945 d898c296' +
		    '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16' +
		    '2bce3357 6b315ece cbb64068 37bf51f5').
		    replace(/ /g, ''), 'hex')
	},
	'nistp384': {
		size: 384,
		pkcs8oid: '1.3.132.0.34',
		p: Buffer.from(('00' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff fffffffe' +
		    'ffffffff 00000000 00000000 ffffffff').
		    replace(/ /g, ''), 'hex'),
		a: Buffer.from(('00' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE' +
		    'FFFFFFFF 00000000 00000000 FFFFFFFC').
		    replace(/ /g, ''), 'hex'),
		b: Buffer.from((
		    'b3312fa7 e23ee7e4 988e056b e3f82d19' +
		    '181d9c6e fe814112 0314088f 5013875a' +
		    'c656398d 8a2ed19d 2a85c8ed d3ec2aef').
		    replace(/ /g, ''), 'hex'),
		s: Buffer.from(('00' +
		    'a335926a a319a27a 1d00896a 6773a482' +
		    '7acdac73').
		    replace(/ /g, ''), 'hex'),
		n: Buffer.from(('00' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff c7634d81 f4372ddf' +
		    '581a0db2 48b0a77a ecec196a ccc52973').
		    replace(/ /g, ''), 'hex'),
		G: Buffer.from(('04' +
		    'aa87ca22 be8b0537 8eb1c71e f320ad74' +
		    '6e1d3b62 8ba79b98 59f741e0 82542a38' +
		    '5502f25d bf55296c 3a545e38 72760ab7' +
		    '3617de4a 96262c6f 5d9e98bf 9292dc29' +
		    'f8f41dbd 289a147c e9da3113 b5f0b8c0' +
		    '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f').
		    replace(/ /g, ''), 'hex')
	},
	'nistp521': {
		size: 521,
		pkcs8oid: '1.3.132.0.35',
		p: Buffer.from((
		    '01ffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffff').replace(/ /g, ''), 'hex'),
		a: Buffer.from(('01FF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFC').
		    replace(/ /g, ''), 'hex'),
		b: Buffer.from(('51' +
		    '953eb961 8e1c9a1f 929a21a0 b68540ee' +
		    'a2da725b 99b315f3 b8b48991 8ef109e1' +
		    '56193951 ec7e937b 1652c0bd 3bb1bf07' +
		    '3573df88 3d2c34f1 ef451fd4 6b503f00').
		    replace(/ /g, ''), 'hex'),
		s: Buffer.from(('00' +
		    'd09e8800 291cb853 96cc6717 393284aa' +
		    'a0da64ba').replace(/ /g, ''), 'hex'),
		n: Buffer.from(('01ff' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff fffffffa' +
		    '51868783 bf2f966b 7fcc0148 f709a5d0' +
		    '3bb5c9b8 899c47ae bb6fb71e 91386409').
		    replace(/ /g, ''), 'hex'),
		G: Buffer.from(('04' +
		    '00c6 858e06b7 0404e9cd 9e3ecb66 2395b442' +
		         '9c648139 053fb521 f828af60 6b4d3dba' +
		         'a14b5e77 efe75928 fe1dc127 a2ffa8de' +
		         '3348b3c1 856a429b f97e7e31 c2e5bd66' +
		    '0118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9' +
		         '98f54449 579b4468 17afbd17 273e662c' +
		         '97ee7299 5ef42640 c550b901 3fad0761' +
		         '353c7086 a272c240 88be9476 9fd16650').
		    replace(/ /g, ''), 'hex')
	}
};

module.exports = {
	info: algInfo,
	privInfo: algPrivInfo,
	hashAlgs: hashAlgs,
	curves: curves
};


/***/ }),

/***/ 7406:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2016 Joyent, Inc.

module.exports = Certificate;

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var crypto = __nccwpck_require__(6417);
var Fingerprint = __nccwpck_require__(3079);
var Signature = __nccwpck_require__(1394);
var errs = __nccwpck_require__(7979);
var util = __nccwpck_require__(1669);
var utils = __nccwpck_require__(575);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var Identity = __nccwpck_require__(508);

var formats = {};
formats['openssh'] = __nccwpck_require__(4033);
formats['x509'] = __nccwpck_require__(267);
formats['pem'] = __nccwpck_require__(217);

var CertificateParseError = errs.CertificateParseError;
var InvalidAlgorithmError = errs.InvalidAlgorithmError;

function Certificate(opts) {
	assert.object(opts, 'options');
	assert.arrayOfObject(opts.subjects, 'options.subjects');
	utils.assertCompatible(opts.subjects[0], Identity, [1, 0],
	    'options.subjects');
	utils.assertCompatible(opts.subjectKey, Key, [1, 0],
	    'options.subjectKey');
	utils.assertCompatible(opts.issuer, Identity, [1, 0], 'options.issuer');
	if (opts.issuerKey !== undefined) {
		utils.assertCompatible(opts.issuerKey, Key, [1, 0],
		    'options.issuerKey');
	}
	assert.object(opts.signatures, 'options.signatures');
	assert.buffer(opts.serial, 'options.serial');
	assert.date(opts.validFrom, 'options.validFrom');
	assert.date(opts.validUntil, 'optons.validUntil');

	assert.optionalArrayOfString(opts.purposes, 'options.purposes');

	this._hashCache = {};

	this.subjects = opts.subjects;
	this.issuer = opts.issuer;
	this.subjectKey = opts.subjectKey;
	this.issuerKey = opts.issuerKey;
	this.signatures = opts.signatures;
	this.serial = opts.serial;
	this.validFrom = opts.validFrom;
	this.validUntil = opts.validUntil;
	this.purposes = opts.purposes;
}

Certificate.formats = formats;

Certificate.prototype.toBuffer = function (format, options) {
	if (format === undefined)
		format = 'x509';
	assert.string(format, 'format');
	assert.object(formats[format], 'formats[format]');
	assert.optionalObject(options, 'options');

	return (formats[format].write(this, options));
};

Certificate.prototype.toString = function (format, options) {
	if (format === undefined)
		format = 'pem';
	return (this.toBuffer(format, options).toString());
};

Certificate.prototype.fingerprint = function (algo) {
	if (algo === undefined)
		algo = 'sha256';
	assert.string(algo, 'algorithm');
	var opts = {
		type: 'certificate',
		hash: this.hash(algo),
		algorithm: algo
	};
	return (new Fingerprint(opts));
};

Certificate.prototype.hash = function (algo) {
	assert.string(algo, 'algorithm');
	algo = algo.toLowerCase();
	if (algs.hashAlgs[algo] === undefined)
		throw (new InvalidAlgorithmError(algo));

	if (this._hashCache[algo])
		return (this._hashCache[algo]);

	var hash = crypto.createHash(algo).
	    update(this.toBuffer('x509')).digest();
	this._hashCache[algo] = hash;
	return (hash);
};

Certificate.prototype.isExpired = function (when) {
	if (when === undefined)
		when = new Date();
	return (!((when.getTime() >= this.validFrom.getTime()) &&
		(when.getTime() < this.validUntil.getTime())));
};

Certificate.prototype.isSignedBy = function (issuerCert) {
	utils.assertCompatible(issuerCert, Certificate, [1, 0], 'issuer');

	if (!this.issuer.equals(issuerCert.subjects[0]))
		return (false);
	if (this.issuer.purposes && this.issuer.purposes.length > 0 &&
	    this.issuer.purposes.indexOf('ca') === -1) {
		return (false);
	}

	return (this.isSignedByKey(issuerCert.subjectKey));
};

Certificate.prototype.getExtension = function (keyOrOid) {
	assert.string(keyOrOid, 'keyOrOid');
	var ext = this.getExtensions().filter(function (maybeExt) {
		if (maybeExt.format === 'x509')
			return (maybeExt.oid === keyOrOid);
		if (maybeExt.format === 'openssh')
			return (maybeExt.name === keyOrOid);
		return (false);
	})[0];
	return (ext);
};

Certificate.prototype.getExtensions = function () {
	var exts = [];
	var x509 = this.signatures.x509;
	if (x509 && x509.extras && x509.extras.exts) {
		x509.extras.exts.forEach(function (ext) {
			ext.format = 'x509';
			exts.push(ext);
		});
	}
	var openssh = this.signatures.openssh;
	if (openssh && openssh.exts) {
		openssh.exts.forEach(function (ext) {
			ext.format = 'openssh';
			exts.push(ext);
		});
	}
	return (exts);
};

Certificate.prototype.isSignedByKey = function (issuerKey) {
	utils.assertCompatible(issuerKey, Key, [1, 2], 'issuerKey');

	if (this.issuerKey !== undefined) {
		return (this.issuerKey.
		    fingerprint('sha512').matches(issuerKey));
	}

	var fmt = Object.keys(this.signatures)[0];
	var valid = formats[fmt].verify(this, issuerKey);
	if (valid)
		this.issuerKey = issuerKey;
	return (valid);
};

Certificate.prototype.signWith = function (key) {
	utils.assertCompatible(key, PrivateKey, [1, 2], 'key');
	var fmts = Object.keys(formats);
	var didOne = false;
	for (var i = 0; i < fmts.length; ++i) {
		if (fmts[i] !== 'pem') {
			var ret = formats[fmts[i]].sign(this, key);
			if (ret === true)
				didOne = true;
		}
	}
	if (!didOne) {
		throw (new Error('Failed to sign the certificate for any ' +
		    'available certificate formats'));
	}
};

Certificate.createSelfSigned = function (subjectOrSubjects, key, options) {
	var subjects;
	if (Array.isArray(subjectOrSubjects))
		subjects = subjectOrSubjects;
	else
		subjects = [subjectOrSubjects];

	assert.arrayOfObject(subjects);
	subjects.forEach(function (subject) {
		utils.assertCompatible(subject, Identity, [1, 0], 'subject');
	});

	utils.assertCompatible(key, PrivateKey, [1, 2], 'private key');

	assert.optionalObject(options, 'options');
	if (options === undefined)
		options = {};
	assert.optionalObject(options.validFrom, 'options.validFrom');
	assert.optionalObject(options.validUntil, 'options.validUntil');
	var validFrom = options.validFrom;
	var validUntil = options.validUntil;
	if (validFrom === undefined)
		validFrom = new Date();
	if (validUntil === undefined) {
		assert.optionalNumber(options.lifetime, 'options.lifetime');
		var lifetime = options.lifetime;
		if (lifetime === undefined)
			lifetime = 10*365*24*3600;
		validUntil = new Date();
		validUntil.setTime(validUntil.getTime() + lifetime*1000);
	}
	assert.optionalBuffer(options.serial, 'options.serial');
	var serial = options.serial;
	if (serial === undefined)
		serial = Buffer.from('0000000000000001', 'hex');

	var purposes = options.purposes;
	if (purposes === undefined)
		purposes = [];

	if (purposes.indexOf('signature') === -1)
		purposes.push('signature');

	/* Self-signed certs are always CAs. */
	if (purposes.indexOf('ca') === -1)
		purposes.push('ca');
	if (purposes.indexOf('crl') === -1)
		purposes.push('crl');

	/*
	 * If we weren't explicitly given any other purposes, do the sensible
	 * thing and add some basic ones depending on the subject type.
	 */
	if (purposes.length <= 3) {
		var hostSubjects = subjects.filter(function (subject) {
			return (subject.type === 'host');
		});
		var userSubjects = subjects.filter(function (subject) {
			return (subject.type === 'user');
		});
		if (hostSubjects.length > 0) {
			if (purposes.indexOf('serverAuth') === -1)
				purposes.push('serverAuth');
		}
		if (userSubjects.length > 0) {
			if (purposes.indexOf('clientAuth') === -1)
				purposes.push('clientAuth');
		}
		if (userSubjects.length > 0 || hostSubjects.length > 0) {
			if (purposes.indexOf('keyAgreement') === -1)
				purposes.push('keyAgreement');
			if (key.type === 'rsa' &&
			    purposes.indexOf('encryption') === -1)
				purposes.push('encryption');
		}
	}

	var cert = new Certificate({
		subjects: subjects,
		issuer: subjects[0],
		subjectKey: key.toPublic(),
		issuerKey: key.toPublic(),
		signatures: {},
		serial: serial,
		validFrom: validFrom,
		validUntil: validUntil,
		purposes: purposes
	});
	cert.signWith(key);

	return (cert);
};

Certificate.create =
    function (subjectOrSubjects, key, issuer, issuerKey, options) {
	var subjects;
	if (Array.isArray(subjectOrSubjects))
		subjects = subjectOrSubjects;
	else
		subjects = [subjectOrSubjects];

	assert.arrayOfObject(subjects);
	subjects.forEach(function (subject) {
		utils.assertCompatible(subject, Identity, [1, 0], 'subject');
	});

	utils.assertCompatible(key, Key, [1, 0], 'key');
	if (PrivateKey.isPrivateKey(key))
		key = key.toPublic();
	utils.assertCompatible(issuer, Identity, [1, 0], 'issuer');
	utils.assertCompatible(issuerKey, PrivateKey, [1, 2], 'issuer key');

	assert.optionalObject(options, 'options');
	if (options === undefined)
		options = {};
	assert.optionalObject(options.validFrom, 'options.validFrom');
	assert.optionalObject(options.validUntil, 'options.validUntil');
	var validFrom = options.validFrom;
	var validUntil = options.validUntil;
	if (validFrom === undefined)
		validFrom = new Date();
	if (validUntil === undefined) {
		assert.optionalNumber(options.lifetime, 'options.lifetime');
		var lifetime = options.lifetime;
		if (lifetime === undefined)
			lifetime = 10*365*24*3600;
		validUntil = new Date();
		validUntil.setTime(validUntil.getTime() + lifetime*1000);
	}
	assert.optionalBuffer(options.serial, 'options.serial');
	var serial = options.serial;
	if (serial === undefined)
		serial = Buffer.from('0000000000000001', 'hex');

	var purposes = options.purposes;
	if (purposes === undefined)
		purposes = [];

	if (purposes.indexOf('signature') === -1)
		purposes.push('signature');

	if (options.ca === true) {
		if (purposes.indexOf('ca') === -1)
			purposes.push('ca');
		if (purposes.indexOf('crl') === -1)
			purposes.push('crl');
	}

	var hostSubjects = subjects.filter(function (subject) {
		return (subject.type === 'host');
	});
	var userSubjects = subjects.filter(function (subject) {
		return (subject.type === 'user');
	});
	if (hostSubjects.length > 0) {
		if (purposes.indexOf('serverAuth') === -1)
			purposes.push('serverAuth');
	}
	if (userSubjects.length > 0) {
		if (purposes.indexOf('clientAuth') === -1)
			purposes.push('clientAuth');
	}
	if (userSubjects.length > 0 || hostSubjects.length > 0) {
		if (purposes.indexOf('keyAgreement') === -1)
			purposes.push('keyAgreement');
		if (key.type === 'rsa' &&
		    purposes.indexOf('encryption') === -1)
			purposes.push('encryption');
	}

	var cert = new Certificate({
		subjects: subjects,
		issuer: issuer,
		subjectKey: key,
		issuerKey: issuerKey.toPublic(),
		signatures: {},
		serial: serial,
		validFrom: validFrom,
		validUntil: validUntil,
		purposes: purposes
	});
	cert.signWith(issuerKey);

	return (cert);
};

Certificate.parse = function (data, format, options) {
	if (typeof (data) !== 'string')
		assert.buffer(data, 'data');
	if (format === undefined)
		format = 'auto';
	assert.string(format, 'format');
	if (typeof (options) === 'string')
		options = { filename: options };
	assert.optionalObject(options, 'options');
	if (options === undefined)
		options = {};
	assert.optionalString(options.filename, 'options.filename');
	if (options.filename === undefined)
		options.filename = '(unnamed)';

	assert.object(formats[format], 'formats[format]');

	try {
		var k = formats[format].read(data, options);
		return (k);
	} catch (e) {
		throw (new CertificateParseError(options.filename, format, e));
	}
};

Certificate.isCertificate = function (obj, ver) {
	return (utils.isCompatible(obj, Certificate, ver));
};

/*
 * API versions for Certificate:
 * [1,0] -- initial ver
 * [1,1] -- openssh format now unpacks extensions
 */
Certificate.prototype._sshpkApiVersion = [1, 1];

Certificate._oldVersionDetect = function (obj) {
	return ([1, 0]);
};


/***/ }),

/***/ 7602:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2017 Joyent, Inc.

module.exports = {
	DiffieHellman: DiffieHellman,
	generateECDSA: generateECDSA,
	generateED25519: generateED25519
};

var assert = __nccwpck_require__(6631);
var crypto = __nccwpck_require__(6417);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var utils = __nccwpck_require__(575);
var nacl = __nccwpck_require__(8729);

var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);

var CRYPTO_HAVE_ECDH = (crypto.createECDH !== undefined);

var ecdh = __nccwpck_require__(9865);
var ec = __nccwpck_require__(3943);
var jsbn = __nccwpck_require__(5587).BigInteger;

function DiffieHellman(key) {
	utils.assertCompatible(key, Key, [1, 4], 'key');
	this._isPriv = PrivateKey.isPrivateKey(key, [1, 3]);
	this._algo = key.type;
	this._curve = key.curve;
	this._key = key;
	if (key.type === 'dsa') {
		if (!CRYPTO_HAVE_ECDH) {
			throw (new Error('Due to bugs in the node 0.10 ' +
			    'crypto API, node 0.12.x or later is required ' +
			    'to use DH'));
		}
		this._dh = crypto.createDiffieHellman(
		    key.part.p.data, undefined,
		    key.part.g.data, undefined);
		this._p = key.part.p;
		this._g = key.part.g;
		if (this._isPriv)
			this._dh.setPrivateKey(key.part.x.data);
		this._dh.setPublicKey(key.part.y.data);

	} else if (key.type === 'ecdsa') {
		if (!CRYPTO_HAVE_ECDH) {
			this._ecParams = new X9ECParameters(this._curve);

			if (this._isPriv) {
				this._priv = new ECPrivate(
				    this._ecParams, key.part.d.data);
			}
			return;
		}

		var curve = {
			'nistp256': 'prime256v1',
			'nistp384': 'secp384r1',
			'nistp521': 'secp521r1'
		}[key.curve];
		this._dh = crypto.createECDH(curve);
		if (typeof (this._dh) !== 'object' ||
		    typeof (this._dh.setPrivateKey) !== 'function') {
			CRYPTO_HAVE_ECDH = false;
			DiffieHellman.call(this, key);
			return;
		}
		if (this._isPriv)
			this._dh.setPrivateKey(key.part.d.data);
		this._dh.setPublicKey(key.part.Q.data);

	} else if (key.type === 'curve25519') {
		if (this._isPriv) {
			utils.assertCompatible(key, PrivateKey, [1, 5], 'key');
			this._priv = key.part.k.data;
		}

	} else {
		throw (new Error('DH not supported for ' + key.type + ' keys'));
	}
}

DiffieHellman.prototype.getPublicKey = function () {
	if (this._isPriv)
		return (this._key.toPublic());
	return (this._key);
};

DiffieHellman.prototype.getPrivateKey = function () {
	if (this._isPriv)
		return (this._key);
	else
		return (undefined);
};
DiffieHellman.prototype.getKey = DiffieHellman.prototype.getPrivateKey;

DiffieHellman.prototype._keyCheck = function (pk, isPub) {
	assert.object(pk, 'key');
	if (!isPub)
		utils.assertCompatible(pk, PrivateKey, [1, 3], 'key');
	utils.assertCompatible(pk, Key, [1, 4], 'key');

	if (pk.type !== this._algo) {
		throw (new Error('A ' + pk.type + ' key cannot be used in ' +
		    this._algo + ' Diffie-Hellman'));
	}

	if (pk.curve !== this._curve) {
		throw (new Error('A key from the ' + pk.curve + ' curve ' +
		    'cannot be used with a ' + this._curve +
		    ' Diffie-Hellman'));
	}

	if (pk.type === 'dsa') {
		assert.deepEqual(pk.part.p, this._p,
		    'DSA key prime does not match');
		assert.deepEqual(pk.part.g, this._g,
		    'DSA key generator does not match');
	}
};

DiffieHellman.prototype.setKey = function (pk) {
	this._keyCheck(pk);

	if (pk.type === 'dsa') {
		this._dh.setPrivateKey(pk.part.x.data);
		this._dh.setPublicKey(pk.part.y.data);

	} else if (pk.type === 'ecdsa') {
		if (CRYPTO_HAVE_ECDH) {
			this._dh.setPrivateKey(pk.part.d.data);
			this._dh.setPublicKey(pk.part.Q.data);
		} else {
			this._priv = new ECPrivate(
			    this._ecParams, pk.part.d.data);
		}

	} else if (pk.type === 'curve25519') {
		var k = pk.part.k;
		if (!pk.part.k)
			k = pk.part.r;
		this._priv = k.data;
		if (this._priv[0] === 0x00)
			this._priv = this._priv.slice(1);
		this._priv = this._priv.slice(0, 32);
	}
	this._key = pk;
	this._isPriv = true;
};
DiffieHellman.prototype.setPrivateKey = DiffieHellman.prototype.setKey;

DiffieHellman.prototype.computeSecret = function (otherpk) {
	this._keyCheck(otherpk, true);
	if (!this._isPriv)
		throw (new Error('DH exchange has not been initialized with ' +
		    'a private key yet'));

	var pub;
	if (this._algo === 'dsa') {
		return (this._dh.computeSecret(
		    otherpk.part.y.data));

	} else if (this._algo === 'ecdsa') {
		if (CRYPTO_HAVE_ECDH) {
			return (this._dh.computeSecret(
			    otherpk.part.Q.data));
		} else {
			pub = new ECPublic(
			    this._ecParams, otherpk.part.Q.data);
			return (this._priv.deriveSharedSecret(pub));
		}

	} else if (this._algo === 'curve25519') {
		pub = otherpk.part.A.data;
		while (pub[0] === 0x00 && pub.length > 32)
			pub = pub.slice(1);
		var priv = this._priv;
		assert.strictEqual(pub.length, 32);
		assert.strictEqual(priv.length, 32);

		var secret = nacl.box.before(new Uint8Array(pub),
		    new Uint8Array(priv));

		return (Buffer.from(secret));
	}

	throw (new Error('Invalid algorithm: ' + this._algo));
};

DiffieHellman.prototype.generateKey = function () {
	var parts = [];
	var priv, pub;
	if (this._algo === 'dsa') {
		this._dh.generateKeys();

		parts.push({name: 'p', data: this._p.data});
		parts.push({name: 'q', data: this._key.part.q.data});
		parts.push({name: 'g', data: this._g.data});
		parts.push({name: 'y', data: this._dh.getPublicKey()});
		parts.push({name: 'x', data: this._dh.getPrivateKey()});
		this._key = new PrivateKey({
			type: 'dsa',
			parts: parts
		});
		this._isPriv = true;
		return (this._key);

	} else if (this._algo === 'ecdsa') {
		if (CRYPTO_HAVE_ECDH) {
			this._dh.generateKeys();

			parts.push({name: 'curve',
			    data: Buffer.from(this._curve)});
			parts.push({name: 'Q', data: this._dh.getPublicKey()});
			parts.push({name: 'd', data: this._dh.getPrivateKey()});
			this._key = new PrivateKey({
				type: 'ecdsa',
				curve: this._curve,
				parts: parts
			});
			this._isPriv = true;
			return (this._key);

		} else {
			var n = this._ecParams.getN();
			var r = new jsbn(crypto.randomBytes(n.bitLength()));
			var n1 = n.subtract(jsbn.ONE);
			priv = r.mod(n1).add(jsbn.ONE);
			pub = this._ecParams.getG().multiply(priv);

			priv = Buffer.from(priv.toByteArray());
			pub = Buffer.from(this._ecParams.getCurve().
			    encodePointHex(pub), 'hex');

			this._priv = new ECPrivate(this._ecParams, priv);

			parts.push({name: 'curve',
			    data: Buffer.from(this._curve)});
			parts.push({name: 'Q', data: pub});
			parts.push({name: 'd', data: priv});

			this._key = new PrivateKey({
				type: 'ecdsa',
				curve: this._curve,
				parts: parts
			});
			this._isPriv = true;
			return (this._key);
		}

	} else if (this._algo === 'curve25519') {
		var pair = nacl.box.keyPair();
		priv = Buffer.from(pair.secretKey);
		pub = Buffer.from(pair.publicKey);
		priv = Buffer.concat([priv, pub]);
		assert.strictEqual(priv.length, 64);
		assert.strictEqual(pub.length, 32);

		parts.push({name: 'A', data: pub});
		parts.push({name: 'k', data: priv});
		this._key = new PrivateKey({
			type: 'curve25519',
			parts: parts
		});
		this._isPriv = true;
		return (this._key);
	}

	throw (new Error('Invalid algorithm: ' + this._algo));
};
DiffieHellman.prototype.generateKeys = DiffieHellman.prototype.generateKey;

/* These are helpers for using ecc-jsbn (for node 0.10 compatibility). */

function X9ECParameters(name) {
	var params = algs.curves[name];
	assert.object(params);

	var p = new jsbn(params.p);
	var a = new jsbn(params.a);
	var b = new jsbn(params.b);
	var n = new jsbn(params.n);
	var h = jsbn.ONE;
	var curve = new ec.ECCurveFp(p, a, b);
	var G = curve.decodePointHex(params.G.toString('hex'));

	this.curve = curve;
	this.g = G;
	this.n = n;
	this.h = h;
}
X9ECParameters.prototype.getCurve = function () { return (this.curve); };
X9ECParameters.prototype.getG = function () { return (this.g); };
X9ECParameters.prototype.getN = function () { return (this.n); };
X9ECParameters.prototype.getH = function () { return (this.h); };

function ECPublic(params, buffer) {
	this._params = params;
	if (buffer[0] === 0x00)
		buffer = buffer.slice(1);
	this._pub = params.getCurve().decodePointHex(buffer.toString('hex'));
}

function ECPrivate(params, buffer) {
	this._params = params;
	this._priv = new jsbn(utils.mpNormalize(buffer));
}
ECPrivate.prototype.deriveSharedSecret = function (pubKey) {
	assert.ok(pubKey instanceof ECPublic);
	var S = pubKey._pub.multiply(this._priv);
	return (Buffer.from(S.getX().toBigInteger().toByteArray()));
};

function generateED25519() {
	var pair = nacl.sign.keyPair();
	var priv = Buffer.from(pair.secretKey);
	var pub = Buffer.from(pair.publicKey);
	assert.strictEqual(priv.length, 64);
	assert.strictEqual(pub.length, 32);

	var parts = [];
	parts.push({name: 'A', data: pub});
	parts.push({name: 'k', data: priv.slice(0, 32)});
	var key = new PrivateKey({
		type: 'ed25519',
		parts: parts
	});
	return (key);
}

/* Generates a new ECDSA private key on a given curve. */
function generateECDSA(curve) {
	var parts = [];
	var key;

	if (CRYPTO_HAVE_ECDH) {
		/*
		 * Node crypto doesn't expose key generation directly, but the
		 * ECDH instances can generate keys. It turns out this just
		 * calls into the OpenSSL generic key generator, and we can
		 * read its output happily without doing an actual DH. So we
		 * use that here.
		 */
		var osCurve = {
			'nistp256': 'prime256v1',
			'nistp384': 'secp384r1',
			'nistp521': 'secp521r1'
		}[curve];

		var dh = crypto.createECDH(osCurve);
		dh.generateKeys();

		parts.push({name: 'curve',
		    data: Buffer.from(curve)});
		parts.push({name: 'Q', data: dh.getPublicKey()});
		parts.push({name: 'd', data: dh.getPrivateKey()});

		key = new PrivateKey({
			type: 'ecdsa',
			curve: curve,
			parts: parts
		});
		return (key);
	} else {

		var ecParams = new X9ECParameters(curve);

		/* This algorithm taken from FIPS PUB 186-4 (section B.4.1) */
		var n = ecParams.getN();
		/*
		 * The crypto.randomBytes() function can only give us whole
		 * bytes, so taking a nod from X9.62, we round up.
		 */
		var cByteLen = Math.ceil((n.bitLength() + 64) / 8);
		var c = new jsbn(crypto.randomBytes(cByteLen));

		var n1 = n.subtract(jsbn.ONE);
		var priv = c.mod(n1).add(jsbn.ONE);
		var pub = ecParams.getG().multiply(priv);

		priv = Buffer.from(priv.toByteArray());
		pub = Buffer.from(ecParams.getCurve().
		    encodePointHex(pub), 'hex');

		parts.push({name: 'curve', data: Buffer.from(curve)});
		parts.push({name: 'Q', data: pub});
		parts.push({name: 'd', data: priv});

		key = new PrivateKey({
			type: 'ecdsa',
			curve: curve,
			parts: parts
		});
		return (key);
	}
}


/***/ }),

/***/ 4694:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

module.exports = {
	Verifier: Verifier,
	Signer: Signer
};

var nacl = __nccwpck_require__(8729);
var stream = __nccwpck_require__(2413);
var util = __nccwpck_require__(1669);
var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var Signature = __nccwpck_require__(1394);

function Verifier(key, hashAlgo) {
	if (hashAlgo.toLowerCase() !== 'sha512')
		throw (new Error('ED25519 only supports the use of ' +
		    'SHA-512 hashes'));

	this.key = key;
	this.chunks = [];

	stream.Writable.call(this, {});
}
util.inherits(Verifier, stream.Writable);

Verifier.prototype._write = function (chunk, enc, cb) {
	this.chunks.push(chunk);
	cb();
};

Verifier.prototype.update = function (chunk) {
	if (typeof (chunk) === 'string')
		chunk = Buffer.from(chunk, 'binary');
	this.chunks.push(chunk);
};

Verifier.prototype.verify = function (signature, fmt) {
	var sig;
	if (Signature.isSignature(signature, [2, 0])) {
		if (signature.type !== 'ed25519')
			return (false);
		sig = signature.toBuffer('raw');

	} else if (typeof (signature) === 'string') {
		sig = Buffer.from(signature, 'base64');

	} else if (Signature.isSignature(signature, [1, 0])) {
		throw (new Error('signature was created by too old ' +
		    'a version of sshpk and cannot be verified'));
	}

	assert.buffer(sig);
	return (nacl.sign.detached.verify(
	    new Uint8Array(Buffer.concat(this.chunks)),
	    new Uint8Array(sig),
	    new Uint8Array(this.key.part.A.data)));
};

function Signer(key, hashAlgo) {
	if (hashAlgo.toLowerCase() !== 'sha512')
		throw (new Error('ED25519 only supports the use of ' +
		    'SHA-512 hashes'));

	this.key = key;
	this.chunks = [];

	stream.Writable.call(this, {});
}
util.inherits(Signer, stream.Writable);

Signer.prototype._write = function (chunk, enc, cb) {
	this.chunks.push(chunk);
	cb();
};

Signer.prototype.update = function (chunk) {
	if (typeof (chunk) === 'string')
		chunk = Buffer.from(chunk, 'binary');
	this.chunks.push(chunk);
};

Signer.prototype.sign = function () {
	var sig = nacl.sign.detached(
	    new Uint8Array(Buffer.concat(this.chunks)),
	    new Uint8Array(Buffer.concat([
		this.key.part.k.data, this.key.part.A.data])));
	var sigBuf = Buffer.from(sig);
	var sigObj = Signature.parse(sigBuf, 'ed25519', 'raw');
	sigObj.hashAlgorithm = 'sha512';
	return (sigObj);
};


/***/ }),

/***/ 7979:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

var assert = __nccwpck_require__(6631);
var util = __nccwpck_require__(1669);

function FingerprintFormatError(fp, format) {
	if (Error.captureStackTrace)
		Error.captureStackTrace(this, FingerprintFormatError);
	this.name = 'FingerprintFormatError';
	this.fingerprint = fp;
	this.format = format;
	this.message = 'Fingerprint format is not supported, or is invalid: ';
	if (fp !== undefined)
		this.message += ' fingerprint = ' + fp;
	if (format !== undefined)
		this.message += ' format = ' + format;
}
util.inherits(FingerprintFormatError, Error);

function InvalidAlgorithmError(alg) {
	if (Error.captureStackTrace)
		Error.captureStackTrace(this, InvalidAlgorithmError);
	this.name = 'InvalidAlgorithmError';
	this.algorithm = alg;
	this.message = 'Algorithm "' + alg + '" is not supported';
}
util.inherits(InvalidAlgorithmError, Error);

function KeyParseError(name, format, innerErr) {
	if (Error.captureStackTrace)
		Error.captureStackTrace(this, KeyParseError);
	this.name = 'KeyParseError';
	this.format = format;
	this.keyName = name;
	this.innerErr = innerErr;
	this.message = 'Failed to parse ' + name + ' as a valid ' + format +
	    ' format key: ' + innerErr.message;
}
util.inherits(KeyParseError, Error);

function SignatureParseError(type, format, innerErr) {
	if (Error.captureStackTrace)
		Error.captureStackTrace(this, SignatureParseError);
	this.name = 'SignatureParseError';
	this.type = type;
	this.format = format;
	this.innerErr = innerErr;
	this.message = 'Failed to parse the given data as a ' + type +
	    ' signature in ' + format + ' format: ' + innerErr.message;
}
util.inherits(SignatureParseError, Error);

function CertificateParseError(name, format, innerErr) {
	if (Error.captureStackTrace)
		Error.captureStackTrace(this, CertificateParseError);
	this.name = 'CertificateParseError';
	this.format = format;
	this.certName = name;
	this.innerErr = innerErr;
	this.message = 'Failed to parse ' + name + ' as a valid ' + format +
	    ' format certificate: ' + innerErr.message;
}
util.inherits(CertificateParseError, Error);

function KeyEncryptedError(name, format) {
	if (Error.captureStackTrace)
		Error.captureStackTrace(this, KeyEncryptedError);
	this.name = 'KeyEncryptedError';
	this.format = format;
	this.keyName = name;
	this.message = 'The ' + format + ' format key ' + name + ' is ' +
	    'encrypted (password-protected), and no passphrase was ' +
	    'provided in `options`';
}
util.inherits(KeyEncryptedError, Error);

module.exports = {
	FingerprintFormatError: FingerprintFormatError,
	InvalidAlgorithmError: InvalidAlgorithmError,
	KeyParseError: KeyParseError,
	SignatureParseError: SignatureParseError,
	KeyEncryptedError: KeyEncryptedError,
	CertificateParseError: CertificateParseError
};


/***/ }),

/***/ 3079:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2018 Joyent, Inc.

module.exports = Fingerprint;

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var crypto = __nccwpck_require__(6417);
var errs = __nccwpck_require__(7979);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var Certificate = __nccwpck_require__(7406);
var utils = __nccwpck_require__(575);

var FingerprintFormatError = errs.FingerprintFormatError;
var InvalidAlgorithmError = errs.InvalidAlgorithmError;

function Fingerprint(opts) {
	assert.object(opts, 'options');
	assert.string(opts.type, 'options.type');
	assert.buffer(opts.hash, 'options.hash');
	assert.string(opts.algorithm, 'options.algorithm');

	this.algorithm = opts.algorithm.toLowerCase();
	if (algs.hashAlgs[this.algorithm] !== true)
		throw (new InvalidAlgorithmError(this.algorithm));

	this.hash = opts.hash;
	this.type = opts.type;
	this.hashType = opts.hashType;
}

Fingerprint.prototype.toString = function (format) {
	if (format === undefined) {
		if (this.algorithm === 'md5' || this.hashType === 'spki')
			format = 'hex';
		else
			format = 'base64';
	}
	assert.string(format);

	switch (format) {
	case 'hex':
		if (this.hashType === 'spki')
			return (this.hash.toString('hex'));
		return (addColons(this.hash.toString('hex')));
	case 'base64':
		if (this.hashType === 'spki')
			return (this.hash.toString('base64'));
		return (sshBase64Format(this.algorithm,
		    this.hash.toString('base64')));
	default:
		throw (new FingerprintFormatError(undefined, format));
	}
};

Fingerprint.prototype.matches = function (other) {
	assert.object(other, 'key or certificate');
	if (this.type === 'key' && this.hashType !== 'ssh') {
		utils.assertCompatible(other, Key, [1, 7], 'key with spki');
		if (PrivateKey.isPrivateKey(other)) {
			utils.assertCompatible(other, PrivateKey, [1, 6],
			    'privatekey with spki support');
		}
	} else if (this.type === 'key') {
		utils.assertCompatible(other, Key, [1, 0], 'key');
	} else {
		utils.assertCompatible(other, Certificate, [1, 0],
		    'certificate');
	}

	var theirHash = other.hash(this.algorithm, this.hashType);
	var theirHash2 = crypto.createHash(this.algorithm).
	    update(theirHash).digest('base64');

	if (this.hash2 === undefined)
		this.hash2 = crypto.createHash(this.algorithm).
		    update(this.hash).digest('base64');

	return (this.hash2 === theirHash2);
};

/*JSSTYLED*/
var base64RE = /^[A-Za-z0-9+\/=]+$/;
/*JSSTYLED*/
var hexRE = /^[a-fA-F0-9]+$/;

Fingerprint.parse = function (fp, options) {
	assert.string(fp, 'fingerprint');

	var alg, hash, enAlgs;
	if (Array.isArray(options)) {
		enAlgs = options;
		options = {};
	}
	assert.optionalObject(options, 'options');
	if (options === undefined)
		options = {};
	if (options.enAlgs !== undefined)
		enAlgs = options.enAlgs;
	if (options.algorithms !== undefined)
		enAlgs = options.algorithms;
	assert.optionalArrayOfString(enAlgs, 'algorithms');

	var hashType = 'ssh';
	if (options.hashType !== undefined)
		hashType = options.hashType;
	assert.string(hashType, 'options.hashType');

	var parts = fp.split(':');
	if (parts.length == 2) {
		alg = parts[0].toLowerCase();
		if (!base64RE.test(parts[1]))
			throw (new FingerprintFormatError(fp));
		try {
			hash = Buffer.from(parts[1], 'base64');
		} catch (e) {
			throw (new FingerprintFormatError(fp));
		}
	} else if (parts.length > 2) {
		alg = 'md5';
		if (parts[0].toLowerCase() === 'md5')
			parts = parts.slice(1);
		parts = parts.map(function (p) {
			while (p.length < 2)
				p = '0' + p;
			if (p.length > 2)
				throw (new FingerprintFormatError(fp));
			return (p);
		});
		parts = parts.join('');
		if (!hexRE.test(parts) || parts.length % 2 !== 0)
			throw (new FingerprintFormatError(fp));
		try {
			hash = Buffer.from(parts, 'hex');
		} catch (e) {
			throw (new FingerprintFormatError(fp));
		}
	} else {
		if (hexRE.test(fp)) {
			hash = Buffer.from(fp, 'hex');
		} else if (base64RE.test(fp)) {
			hash = Buffer.from(fp, 'base64');
		} else {
			throw (new FingerprintFormatError(fp));
		}

		switch (hash.length) {
		case 32:
			alg = 'sha256';
			break;
		case 16:
			alg = 'md5';
			break;
		case 20:
			alg = 'sha1';
			break;
		case 64:
			alg = 'sha512';
			break;
		default:
			throw (new FingerprintFormatError(fp));
		}

		/* Plain hex/base64: guess it's probably SPKI unless told. */
		if (options.hashType === undefined)
			hashType = 'spki';
	}

	if (alg === undefined)
		throw (new FingerprintFormatError(fp));

	if (algs.hashAlgs[alg] === undefined)
		throw (new InvalidAlgorithmError(alg));

	if (enAlgs !== undefined) {
		enAlgs = enAlgs.map(function (a) { return a.toLowerCase(); });
		if (enAlgs.indexOf(alg) === -1)
			throw (new InvalidAlgorithmError(alg));
	}

	return (new Fingerprint({
		algorithm: alg,
		hash: hash,
		type: options.type || 'key',
		hashType: hashType
	}));
};

function addColons(s) {
	/*JSSTYLED*/
	return (s.replace(/(.{2})(?=.)/g, '$1:'));
}

function base64Strip(s) {
	/*JSSTYLED*/
	return (s.replace(/=*$/, ''));
}

function sshBase64Format(alg, h) {
	return (alg.toUpperCase() + ':' + base64Strip(h));
}

Fingerprint.isFingerprint = function (obj, ver) {
	return (utils.isCompatible(obj, Fingerprint, ver));
};

/*
 * API versions for Fingerprint:
 * [1,0] -- initial ver
 * [1,1] -- first tagged ver
 * [1,2] -- hashType and spki support
 */
Fingerprint.prototype._sshpkApiVersion = [1, 2];

Fingerprint._oldVersionDetect = function (obj) {
	assert.func(obj.toString);
	assert.func(obj.matches);
	return ([1, 0]);
};


/***/ }),

/***/ 8243:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2018 Joyent, Inc.

module.exports = {
	read: read,
	write: write
};

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var utils = __nccwpck_require__(575);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);

var pem = __nccwpck_require__(4324);
var ssh = __nccwpck_require__(8927);
var rfc4253 = __nccwpck_require__(8688);
var dnssec = __nccwpck_require__(3561);
var putty = __nccwpck_require__(974);

var DNSSEC_PRIVKEY_HEADER_PREFIX = 'Private-key-format: v1';

function read(buf, options) {
	if (typeof (buf) === 'string') {
		if (buf.trim().match(/^[-]+[ ]*BEGIN/))
			return (pem.read(buf, options));
		if (buf.match(/^\s*ssh-[a-z]/))
			return (ssh.read(buf, options));
		if (buf.match(/^\s*ecdsa-/))
			return (ssh.read(buf, options));
		if (buf.match(/^putty-user-key-file-2:/i))
			return (putty.read(buf, options));
		if (findDNSSECHeader(buf))
			return (dnssec.read(buf, options));
		buf = Buffer.from(buf, 'binary');
	} else {
		assert.buffer(buf);
		if (findPEMHeader(buf))
			return (pem.read(buf, options));
		if (findSSHHeader(buf))
			return (ssh.read(buf, options));
		if (findPuTTYHeader(buf))
			return (putty.read(buf, options));
		if (findDNSSECHeader(buf))
			return (dnssec.read(buf, options));
	}
	if (buf.readUInt32BE(0) < buf.length)
		return (rfc4253.read(buf, options));
	throw (new Error('Failed to auto-detect format of key'));
}

function findPuTTYHeader(buf) {
	var offset = 0;
	while (offset < buf.length &&
	    (buf[offset] === 32 || buf[offset] === 10 || buf[offset] === 9))
		++offset;
	if (offset + 22 <= buf.length &&
	    buf.slice(offset, offset + 22).toString('ascii').toLowerCase() ===
	    'putty-user-key-file-2:')
		return (true);
	return (false);
}

function findSSHHeader(buf) {
	var offset = 0;
	while (offset < buf.length &&
	    (buf[offset] === 32 || buf[offset] === 10 || buf[offset] === 9))
		++offset;
	if (offset + 4 <= buf.length &&
	    buf.slice(offset, offset + 4).toString('ascii') === 'ssh-')
		return (true);
	if (offset + 6 <= buf.length &&
	    buf.slice(offset, offset + 6).toString('ascii') === 'ecdsa-')
		return (true);
	return (false);
}

function findPEMHeader(buf) {
	var offset = 0;
	while (offset < buf.length &&
	    (buf[offset] === 32 || buf[offset] === 10))
		++offset;
	if (buf[offset] !== 45)
		return (false);
	while (offset < buf.length &&
	    (buf[offset] === 45))
		++offset;
	while (offset < buf.length &&
	    (buf[offset] === 32))
		++offset;
	if (offset + 5 > buf.length ||
	    buf.slice(offset, offset + 5).toString('ascii') !== 'BEGIN')
		return (false);
	return (true);
}

function findDNSSECHeader(buf) {
	// private case first
	if (buf.length <= DNSSEC_PRIVKEY_HEADER_PREFIX.length)
		return (false);
	var headerCheck = buf.slice(0, DNSSEC_PRIVKEY_HEADER_PREFIX.length);
	if (headerCheck.toString('ascii') === DNSSEC_PRIVKEY_HEADER_PREFIX)
		return (true);

	// public-key RFC3110 ?
	// 'domain.com. IN KEY ...' or 'domain.com. IN DNSKEY ...'
	// skip any comment-lines
	if (typeof (buf) !== 'string') {
		buf = buf.toString('ascii');
	}
	var lines = buf.split('\n');
	var line = 0;
	/* JSSTYLED */
	while (lines[line].match(/^\;/))
		line++;
	if (lines[line].toString('ascii').match(/\. IN KEY /))
		return (true);
	if (lines[line].toString('ascii').match(/\. IN DNSKEY /))
		return (true);
	return (false);
}

function write(key, options) {
	throw (new Error('"auto" format cannot be used for writing'));
}


/***/ }),

/***/ 3561:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2017 Joyent, Inc.

module.exports = {
	read: read,
	write: write
};

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var utils = __nccwpck_require__(575);
var SSHBuffer = __nccwpck_require__(5621);
var Dhe = __nccwpck_require__(7602);

var supportedAlgos = {
	'rsa-sha1' : 5,
	'rsa-sha256' : 8,
	'rsa-sha512' : 10,
	'ecdsa-p256-sha256' : 13,
	'ecdsa-p384-sha384' : 14
	/*
	 * ed25519 is hypothetically supported with id 15
	 * but the common tools available don't appear to be
	 * capable of generating/using ed25519 keys
	 */
};

var supportedAlgosById = {};
Object.keys(supportedAlgos).forEach(function (k) {
	supportedAlgosById[supportedAlgos[k]] = k.toUpperCase();
});

function read(buf, options) {
	if (typeof (buf) !== 'string') {
		assert.buffer(buf, 'buf');
		buf = buf.toString('ascii');
	}
	var lines = buf.split('\n');
	if (lines[0].match(/^Private-key-format\: v1/)) {
		var algElems = lines[1].split(' ');
		var algoNum = parseInt(algElems[1], 10);
		var algoName = algElems[2];
		if (!supportedAlgosById[algoNum])
			throw (new Error('Unsupported algorithm: ' + algoName));
		return (readDNSSECPrivateKey(algoNum, lines.slice(2)));
	}

	// skip any comment-lines
	var line = 0;
	/* JSSTYLED */
	while (lines[line].match(/^\;/))
		line++;
	// we should now have *one single* line left with our KEY on it.
	if ((lines[line].match(/\. IN KEY /) ||
	    lines[line].match(/\. IN DNSKEY /)) && lines[line+1].length === 0) {
		return (readRFC3110(lines[line]));
	}
	throw (new Error('Cannot parse dnssec key'));
}

function readRFC3110(keyString) {
	var elems = keyString.split(' ');
	//unused var flags = parseInt(elems[3], 10);
	//unused var protocol = parseInt(elems[4], 10);
	var algorithm = parseInt(elems[5], 10);
	if (!supportedAlgosById[algorithm])
		throw (new Error('Unsupported algorithm: ' + algorithm));
	var base64key = elems.slice(6, elems.length).join();
	var keyBuffer = Buffer.from(base64key, 'base64');
	if (supportedAlgosById[algorithm].match(/^RSA-/)) {
		// join the rest of the body into a single base64-blob
		var publicExponentLen = keyBuffer.readUInt8(0);
		if (publicExponentLen != 3 && publicExponentLen != 1)
			throw (new Error('Cannot parse dnssec key: ' +
			    'unsupported exponent length'));

		var publicExponent = keyBuffer.slice(1, publicExponentLen+1);
		publicExponent = utils.mpNormalize(publicExponent);
		var modulus = keyBuffer.slice(1+publicExponentLen);
		modulus = utils.mpNormalize(modulus);
		// now, make the key
		var rsaKey = {
			type: 'rsa',
			parts: []
		};
		rsaKey.parts.push({ name: 'e', data: publicExponent});
		rsaKey.parts.push({ name: 'n', data: modulus});
		return (new Key(rsaKey));
	}
	if (supportedAlgosById[algorithm] === 'ECDSA-P384-SHA384' ||
	    supportedAlgosById[algorithm] === 'ECDSA-P256-SHA256') {
		var curve = 'nistp384';
		var size = 384;
		if (supportedAlgosById[algorithm].match(/^ECDSA-P256-SHA256/)) {
			curve = 'nistp256';
			size = 256;
		}

		var ecdsaKey = {
			type: 'ecdsa',
			curve: curve,
			size: size,
			parts: [
				{name: 'curve', data: Buffer.from(curve) },
				{name: 'Q', data: utils.ecNormalize(keyBuffer) }
			]
		};
		return (new Key(ecdsaKey));
	}
	throw (new Error('Unsupported algorithm: ' +
	    supportedAlgosById[algorithm]));
}

function elementToBuf(e) {
	return (Buffer.from(e.split(' ')[1], 'base64'));
}

function readDNSSECRSAPrivateKey(elements) {
	var rsaParams = {};
	elements.forEach(function (element) {
		if (element.split(' ')[0] === 'Modulus:')
			rsaParams['n'] = elementToBuf(element);
		else if (element.split(' ')[0] === 'PublicExponent:')
			rsaParams['e'] = elementToBuf(element);
		else if (element.split(' ')[0] === 'PrivateExponent:')
			rsaParams['d'] = elementToBuf(element);
		else if (element.split(' ')[0] === 'Prime1:')
			rsaParams['p'] = elementToBuf(element);
		else if (element.split(' ')[0] === 'Prime2:')
			rsaParams['q'] = elementToBuf(element);
		else if (element.split(' ')[0] === 'Exponent1:')
			rsaParams['dmodp'] = elementToBuf(element);
		else if (element.split(' ')[0] === 'Exponent2:')
			rsaParams['dmodq'] = elementToBuf(element);
		else if (element.split(' ')[0] === 'Coefficient:')
			rsaParams['iqmp'] = elementToBuf(element);
	});
	// now, make the key
	var key = {
		type: 'rsa',
		parts: [
			{ name: 'e', data: utils.mpNormalize(rsaParams['e'])},
			{ name: 'n', data: utils.mpNormalize(rsaParams['n'])},
			{ name: 'd', data: utils.mpNormalize(rsaParams['d'])},
			{ name: 'p', data: utils.mpNormalize(rsaParams['p'])},
			{ name: 'q', data: utils.mpNormalize(rsaParams['q'])},
			{ name: 'dmodp',
			    data: utils.mpNormalize(rsaParams['dmodp'])},
			{ name: 'dmodq',
			    data: utils.mpNormalize(rsaParams['dmodq'])},
			{ name: 'iqmp',
			    data: utils.mpNormalize(rsaParams['iqmp'])}
		]
	};
	return (new PrivateKey(key));
}

function readDNSSECPrivateKey(alg, elements) {
	if (supportedAlgosById[alg].match(/^RSA-/)) {
		return (readDNSSECRSAPrivateKey(elements));
	}
	if (supportedAlgosById[alg] === 'ECDSA-P384-SHA384' ||
	    supportedAlgosById[alg] === 'ECDSA-P256-SHA256') {
		var d = Buffer.from(elements[0].split(' ')[1], 'base64');
		var curve = 'nistp384';
		var size = 384;
		if (supportedAlgosById[alg] === 'ECDSA-P256-SHA256') {
			curve = 'nistp256';
			size = 256;
		}
		// DNSSEC generates the public-key on the fly (go calculate it)
		var publicKey = utils.publicFromPrivateECDSA(curve, d);
		var Q = publicKey.part['Q'].data;
		var ecdsaKey = {
			type: 'ecdsa',
			curve: curve,
			size: size,
			parts: [
				{name: 'curve', data: Buffer.from(curve) },
				{name: 'd', data: d },
				{name: 'Q', data: Q }
			]
		};
		return (new PrivateKey(ecdsaKey));
	}
	throw (new Error('Unsupported algorithm: ' + supportedAlgosById[alg]));
}

function dnssecTimestamp(date) {
	var year = date.getFullYear() + ''; //stringify
	var month = (date.getMonth() + 1);
	var timestampStr = year + month + date.getUTCDate();
	timestampStr += '' + date.getUTCHours() + date.getUTCMinutes();
	timestampStr += date.getUTCSeconds();
	return (timestampStr);
}

function rsaAlgFromOptions(opts) {
	if (!opts || !opts.hashAlgo || opts.hashAlgo === 'sha1')
		return ('5 (RSASHA1)');
	else if (opts.hashAlgo === 'sha256')
		return ('8 (RSASHA256)');
	else if (opts.hashAlgo === 'sha512')
		return ('10 (RSASHA512)');
	else
		throw (new Error('Unknown or unsupported hash: ' +
		    opts.hashAlgo));
}

function writeRSA(key, options) {
	// if we're missing parts, add them.
	if (!key.part.dmodp || !key.part.dmodq) {
		utils.addRSAMissing(key);
	}

	var out = '';
	out += 'Private-key-format: v1.3\n';
	out += 'Algorithm: ' + rsaAlgFromOptions(options) + '\n';
	var n = utils.mpDenormalize(key.part['n'].data);
	out += 'Modulus: ' + n.toString('base64') + '\n';
	var e = utils.mpDenormalize(key.part['e'].data);
	out += 'PublicExponent: ' + e.toString('base64') + '\n';
	var d = utils.mpDenormalize(key.part['d'].data);
	out += 'PrivateExponent: ' + d.toString('base64') + '\n';
	var p = utils.mpDenormalize(key.part['p'].data);
	out += 'Prime1: ' + p.toString('base64') + '\n';
	var q = utils.mpDenormalize(key.part['q'].data);
	out += 'Prime2: ' + q.toString('base64') + '\n';
	var dmodp = utils.mpDenormalize(key.part['dmodp'].data);
	out += 'Exponent1: ' + dmodp.toString('base64') + '\n';
	var dmodq = utils.mpDenormalize(key.part['dmodq'].data);
	out += 'Exponent2: ' + dmodq.toString('base64') + '\n';
	var iqmp = utils.mpDenormalize(key.part['iqmp'].data);
	out += 'Coefficient: ' + iqmp.toString('base64') + '\n';
	// Assume that we're valid as-of now
	var timestamp = new Date();
	out += 'Created: ' + dnssecTimestamp(timestamp) + '\n';
	out += 'Publish: ' + dnssecTimestamp(timestamp) + '\n';
	out += 'Activate: ' + dnssecTimestamp(timestamp) + '\n';
	return (Buffer.from(out, 'ascii'));
}

function writeECDSA(key, options) {
	var out = '';
	out += 'Private-key-format: v1.3\n';

	if (key.curve === 'nistp256') {
		out += 'Algorithm: 13 (ECDSAP256SHA256)\n';
	} else if (key.curve === 'nistp384') {
		out += 'Algorithm: 14 (ECDSAP384SHA384)\n';
	} else {
		throw (new Error('Unsupported curve'));
	}
	var base64Key = key.part['d'].data.toString('base64');
	out += 'PrivateKey: ' + base64Key + '\n';

	// Assume that we're valid as-of now
	var timestamp = new Date();
	out += 'Created: ' + dnssecTimestamp(timestamp) + '\n';
	out += 'Publish: ' + dnssecTimestamp(timestamp) + '\n';
	out += 'Activate: ' + dnssecTimestamp(timestamp) + '\n';

	return (Buffer.from(out, 'ascii'));
}

function write(key, options) {
	if (PrivateKey.isPrivateKey(key)) {
		if (key.type === 'rsa') {
			return (writeRSA(key, options));
		} else if (key.type === 'ecdsa') {
			return (writeECDSA(key, options));
		} else {
			throw (new Error('Unsupported algorithm: ' + key.type));
		}
	} else if (Key.isKey(key)) {
		/*
		 * RFC3110 requires a keyname, and a keytype, which we
		 * don't really have a mechanism for specifying such
		 * additional metadata.
		 */
		throw (new Error('Format "dnssec" only supports ' +
		    'writing private keys'));
	} else {
		throw (new Error('key is not a Key or PrivateKey'));
	}
}


/***/ }),

/***/ 4033:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2017 Joyent, Inc.

module.exports = {
	read: read,
	verify: verify,
	sign: sign,
	signAsync: signAsync,
	write: write,

	/* Internal private API */
	fromBuffer: fromBuffer,
	toBuffer: toBuffer
};

var assert = __nccwpck_require__(6631);
var SSHBuffer = __nccwpck_require__(5621);
var crypto = __nccwpck_require__(6417);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var Identity = __nccwpck_require__(508);
var rfc4253 = __nccwpck_require__(8688);
var Signature = __nccwpck_require__(1394);
var utils = __nccwpck_require__(575);
var Certificate = __nccwpck_require__(7406);

function verify(cert, key) {
	/*
	 * We always give an issuerKey, so if our verify() is being called then
	 * there was no signature. Return false.
	 */
	return (false);
}

var TYPES = {
	'user': 1,
	'host': 2
};
Object.keys(TYPES).forEach(function (k) { TYPES[TYPES[k]] = k; });

var ECDSA_ALGO = /^ecdsa-sha2-([^@-]+)-cert-v01@openssh.com$/;

function read(buf, options) {
	if (Buffer.isBuffer(buf))
		buf = buf.toString('ascii');
	var parts = buf.trim().split(/[ \t\n]+/g);
	if (parts.length < 2 || parts.length > 3)
		throw (new Error('Not a valid SSH certificate line'));

	var algo = parts[0];
	var data = parts[1];

	data = Buffer.from(data, 'base64');
	return (fromBuffer(data, algo));
}

function fromBuffer(data, algo, partial) {
	var sshbuf = new SSHBuffer({ buffer: data });
	var innerAlgo = sshbuf.readString();
	if (algo !== undefined && innerAlgo !== algo)
		throw (new Error('SSH certificate algorithm mismatch'));
	if (algo === undefined)
		algo = innerAlgo;

	var cert = {};
	cert.signatures = {};
	cert.signatures.openssh = {};

	cert.signatures.openssh.nonce = sshbuf.readBuffer();

	var key = {};
	var parts = (key.parts = []);
	key.type = getAlg(algo);

	var partCount = algs.info[key.type].parts.length;
	while (parts.length < partCount)
		parts.push(sshbuf.readPart());
	assert.ok(parts.length >= 1, 'key must have at least one part');

	var algInfo = algs.info[key.type];
	if (key.type === 'ecdsa') {
		var res = ECDSA_ALGO.exec(algo);
		assert.ok(res !== null);
		assert.strictEqual(res[1], parts[0].data.toString());
	}

	for (var i = 0; i < algInfo.parts.length; ++i) {
		parts[i].name = algInfo.parts[i];
		if (parts[i].name !== 'curve' &&
		    algInfo.normalize !== false) {
			var p = parts[i];
			p.data = utils.mpNormalize(p.data);
		}
	}

	cert.subjectKey = new Key(key);

	cert.serial = sshbuf.readInt64();

	var type = TYPES[sshbuf.readInt()];
	assert.string(type, 'valid cert type');

	cert.signatures.openssh.keyId = sshbuf.readString();

	var principals = [];
	var pbuf = sshbuf.readBuffer();
	var psshbuf = new SSHBuffer({ buffer: pbuf });
	while (!psshbuf.atEnd())
		principals.push(psshbuf.readString());
	if (principals.length === 0)
		principals = ['*'];

	cert.subjects = principals.map(function (pr) {
		if (type === 'user')
			return (Identity.forUser(pr));
		else if (type === 'host')
			return (Identity.forHost(pr));
		throw (new Error('Unknown identity type ' + type));
	});

	cert.validFrom = int64ToDate(sshbuf.readInt64());
	cert.validUntil = int64ToDate(sshbuf.readInt64());

	var exts = [];
	var extbuf = new SSHBuffer({ buffer: sshbuf.readBuffer() });
	var ext;
	while (!extbuf.atEnd()) {
		ext = { critical: true };
		ext.name = extbuf.readString();
		ext.data = extbuf.readBuffer();
		exts.push(ext);
	}
	extbuf = new SSHBuffer({ buffer: sshbuf.readBuffer() });
	while (!extbuf.atEnd()) {
		ext = { critical: false };
		ext.name = extbuf.readString();
		ext.data = extbuf.readBuffer();
		exts.push(ext);
	}
	cert.signatures.openssh.exts = exts;

	/* reserved */
	sshbuf.readBuffer();

	var signingKeyBuf = sshbuf.readBuffer();
	cert.issuerKey = rfc4253.read(signingKeyBuf);

	/*
	 * OpenSSH certs don't give the identity of the issuer, just their
	 * public key. So, we use an Identity that matches anything. The
	 * isSignedBy() function will later tell you if the key matches.
	 */
	cert.issuer = Identity.forHost('**');

	var sigBuf = sshbuf.readBuffer();
	cert.signatures.openssh.signature =
	    Signature.parse(sigBuf, cert.issuerKey.type, 'ssh');

	if (partial !== undefined) {
		partial.remainder = sshbuf.remainder();
		partial.consumed = sshbuf._offset;
	}

	return (new Certificate(cert));
}

function int64ToDate(buf) {
	var i = buf.readUInt32BE(0) * 4294967296;
	i += buf.readUInt32BE(4);
	var d = new Date();
	d.setTime(i * 1000);
	d.sourceInt64 = buf;
	return (d);
}

function dateToInt64(date) {
	if (date.sourceInt64 !== undefined)
		return (date.sourceInt64);
	var i = Math.round(date.getTime() / 1000);
	var upper = Math.floor(i / 4294967296);
	var lower = Math.floor(i % 4294967296);
	var buf = Buffer.alloc(8);
	buf.writeUInt32BE(upper, 0);
	buf.writeUInt32BE(lower, 4);
	return (buf);
}

function sign(cert, key) {
	if (cert.signatures.openssh === undefined)
		cert.signatures.openssh = {};
	try {
		var blob = toBuffer(cert, true);
	} catch (e) {
		delete (cert.signatures.openssh);
		return (false);
	}
	var sig = cert.signatures.openssh;
	var hashAlgo = undefined;
	if (key.type === 'rsa' || key.type === 'dsa')
		hashAlgo = 'sha1';
	var signer = key.createSign(hashAlgo);
	signer.write(blob);
	sig.signature = signer.sign();
	return (true);
}

function signAsync(cert, signer, done) {
	if (cert.signatures.openssh === undefined)
		cert.signatures.openssh = {};
	try {
		var blob = toBuffer(cert, true);
	} catch (e) {
		delete (cert.signatures.openssh);
		done(e);
		return;
	}
	var sig = cert.signatures.openssh;

	signer(blob, function (err, signature) {
		if (err) {
			done(err);
			return;
		}
		try {
			/*
			 * This will throw if the signature isn't of a
			 * type/algo that can be used for SSH.
			 */
			signature.toBuffer('ssh');
		} catch (e) {
			done(e);
			return;
		}
		sig.signature = signature;
		done();
	});
}

function write(cert, options) {
	if (options === undefined)
		options = {};

	var blob = toBuffer(cert);
	var out = getCertType(cert.subjectKey) + ' ' + blob.toString('base64');
	if (options.comment)
		out = out + ' ' + options.comment;
	return (out);
}


function toBuffer(cert, noSig) {
	assert.object(cert.signatures.openssh, 'signature for openssh format');
	var sig = cert.signatures.openssh;

	if (sig.nonce === undefined)
		sig.nonce = crypto.randomBytes(16);
	var buf = new SSHBuffer({});
	buf.writeString(getCertType(cert.subjectKey));
	buf.writeBuffer(sig.nonce);

	var key = cert.subjectKey;
	var algInfo = algs.info[key.type];
	algInfo.parts.forEach(function (part) {
		buf.writePart(key.part[part]);
	});

	buf.writeInt64(cert.serial);

	var type = cert.subjects[0].type;
	assert.notStrictEqual(type, 'unknown');
	cert.subjects.forEach(function (id) {
		assert.strictEqual(id.type, type);
	});
	type = TYPES[type];
	buf.writeInt(type);

	if (sig.keyId === undefined) {
		sig.keyId = cert.subjects[0].type + '_' +
		    (cert.subjects[0].uid || cert.subjects[0].hostname);
	}
	buf.writeString(sig.keyId);

	var sub = new SSHBuffer({});
	cert.subjects.forEach(function (id) {
		if (type === TYPES.host)
			sub.writeString(id.hostname);
		else if (type === TYPES.user)
			sub.writeString(id.uid);
	});
	buf.writeBuffer(sub.toBuffer());

	buf.writeInt64(dateToInt64(cert.validFrom));
	buf.writeInt64(dateToInt64(cert.validUntil));

	var exts = sig.exts;
	if (exts === undefined)
		exts = [];

	var extbuf = new SSHBuffer({});
	exts.forEach(function (ext) {
		if (ext.critical !== true)
			return;
		extbuf.writeString(ext.name);
		extbuf.writeBuffer(ext.data);
	});
	buf.writeBuffer(extbuf.toBuffer());

	extbuf = new SSHBuffer({});
	exts.forEach(function (ext) {
		if (ext.critical === true)
			return;
		extbuf.writeString(ext.name);
		extbuf.writeBuffer(ext.data);
	});
	buf.writeBuffer(extbuf.toBuffer());

	/* reserved */
	buf.writeBuffer(Buffer.alloc(0));

	sub = rfc4253.write(cert.issuerKey);
	buf.writeBuffer(sub);

	if (!noSig)
		buf.writeBuffer(sig.signature.toBuffer('ssh'));

	return (buf.toBuffer());
}

function getAlg(certType) {
	if (certType === 'ssh-rsa-cert-v01@openssh.com')
		return ('rsa');
	if (certType === 'ssh-dss-cert-v01@openssh.com')
		return ('dsa');
	if (certType.match(ECDSA_ALGO))
		return ('ecdsa');
	if (certType === 'ssh-ed25519-cert-v01@openssh.com')
		return ('ed25519');
	throw (new Error('Unsupported cert type ' + certType));
}

function getCertType(key) {
	if (key.type === 'rsa')
		return ('ssh-rsa-cert-v01@openssh.com');
	if (key.type === 'dsa')
		return ('ssh-dss-cert-v01@openssh.com');
	if (key.type === 'ecdsa')
		return ('ecdsa-sha2-' + key.curve + '-cert-v01@openssh.com');
	if (key.type === 'ed25519')
		return ('ssh-ed25519-cert-v01@openssh.com');
	throw (new Error('Unsupported key type ' + key.type));
}


/***/ }),

/***/ 4324:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2018 Joyent, Inc.

module.exports = {
	read: read,
	write: write
};

var assert = __nccwpck_require__(6631);
var asn1 = __nccwpck_require__(970);
var crypto = __nccwpck_require__(6417);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var utils = __nccwpck_require__(575);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);

var pkcs1 = __nccwpck_require__(9367);
var pkcs8 = __nccwpck_require__(4173);
var sshpriv = __nccwpck_require__(3923);
var rfc4253 = __nccwpck_require__(8688);

var errors = __nccwpck_require__(7979);

var OID_PBES2 = '1.2.840.113549.1.5.13';
var OID_PBKDF2 = '1.2.840.113549.1.5.12';

var OID_TO_CIPHER = {
	'1.2.840.113549.3.7': '3des-cbc',
	'2.16.840.1.101.3.4.1.2': 'aes128-cbc',
	'2.16.840.1.101.3.4.1.42': 'aes256-cbc'
};
var CIPHER_TO_OID = {};
Object.keys(OID_TO_CIPHER).forEach(function (k) {
	CIPHER_TO_OID[OID_TO_CIPHER[k]] = k;
});

var OID_TO_HASH = {
	'1.2.840.113549.2.7': 'sha1',
	'1.2.840.113549.2.9': 'sha256',
	'1.2.840.113549.2.11': 'sha512'
};
var HASH_TO_OID = {};
Object.keys(OID_TO_HASH).forEach(function (k) {
	HASH_TO_OID[OID_TO_HASH[k]] = k;
});

/*
 * For reading we support both PKCS#1 and PKCS#8. If we find a private key,
 * we just take the public component of it and use that.
 */
function read(buf, options, forceType) {
	var input = buf;
	if (typeof (buf) !== 'string') {
		assert.buffer(buf, 'buf');
		buf = buf.toString('ascii');
	}

	var lines = buf.trim().split(/[\r\n]+/g);

	var m;
	var si = -1;
	while (!m && si < lines.length) {
		m = lines[++si].match(/*JSSTYLED*/
		    /[-]+[ ]*BEGIN ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/);
	}
	assert.ok(m, 'invalid PEM header');

	var m2;
	var ei = lines.length;
	while (!m2 && ei > 0) {
		m2 = lines[--ei].match(/*JSSTYLED*/
		    /[-]+[ ]*END ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/);
	}
	assert.ok(m2, 'invalid PEM footer');

	/* Begin and end banners must match key type */
	assert.equal(m[2], m2[2]);
	var type = m[2].toLowerCase();

	var alg;
	if (m[1]) {
		/* They also must match algorithms, if given */
		assert.equal(m[1], m2[1], 'PEM header and footer mismatch');
		alg = m[1].trim();
	}

	lines = lines.slice(si, ei + 1);

	var headers = {};
	while (true) {
		lines = lines.slice(1);
		m = lines[0].match(/*JSSTYLED*/
		    /^([A-Za-z0-9-]+): (.+)$/);
		if (!m)
			break;
		headers[m[1].toLowerCase()] = m[2];
	}

	/* Chop off the first and last lines */
	lines = lines.slice(0, -1).join('');
	buf = Buffer.from(lines, 'base64');

	var cipher, key, iv;
	if (headers['proc-type']) {
		var parts = headers['proc-type'].split(',');
		if (parts[0] === '4' && parts[1] === 'ENCRYPTED') {
			if (typeof (options.passphrase) === 'string') {
				options.passphrase = Buffer.from(
				    options.passphrase, 'utf-8');
			}
			if (!Buffer.isBuffer(options.passphrase)) {
				throw (new errors.KeyEncryptedError(
				    options.filename, 'PEM'));
			} else {
				parts = headers['dek-info'].split(',');
				assert.ok(parts.length === 2);
				cipher = parts[0].toLowerCase();
				iv = Buffer.from(parts[1], 'hex');
				key = utils.opensslKeyDeriv(cipher, iv,
				    options.passphrase, 1).key;
			}
		}
	}

	if (alg && alg.toLowerCase() === 'encrypted') {
		var eder = new asn1.BerReader(buf);
		var pbesEnd;
		eder.readSequence();

		eder.readSequence();
		pbesEnd = eder.offset + eder.length;

		var method = eder.readOID();
		if (method !== OID_PBES2) {
			throw (new Error('Unsupported PEM/PKCS8 encryption ' +
			    'scheme: ' + method));
		}

		eder.readSequence();	/* PBES2-params */

		eder.readSequence();	/* keyDerivationFunc */
		var kdfEnd = eder.offset + eder.length;
		var kdfOid = eder.readOID();
		if (kdfOid !== OID_PBKDF2)
			throw (new Error('Unsupported PBES2 KDF: ' + kdfOid));
		eder.readSequence();
		var salt = eder.readString(asn1.Ber.OctetString, true);
		var iterations = eder.readInt();
		var hashAlg = 'sha1';
		if (eder.offset < kdfEnd) {
			eder.readSequence();
			var hashAlgOid = eder.readOID();
			hashAlg = OID_TO_HASH[hashAlgOid];
			if (hashAlg === undefined) {
				throw (new Error('Unsupported PBKDF2 hash: ' +
				    hashAlgOid));
			}
		}
		eder._offset = kdfEnd;

		eder.readSequence();	/* encryptionScheme */
		var cipherOid = eder.readOID();
		cipher = OID_TO_CIPHER[cipherOid];
		if (cipher === undefined) {
			throw (new Error('Unsupported PBES2 cipher: ' +
			    cipherOid));
		}
		iv = eder.readString(asn1.Ber.OctetString, true);

		eder._offset = pbesEnd;
		buf = eder.readString(asn1.Ber.OctetString, true);

		if (typeof (options.passphrase) === 'string') {
			options.passphrase = Buffer.from(
			    options.passphrase, 'utf-8');
		}
		if (!Buffer.isBuffer(options.passphrase)) {
			throw (new errors.KeyEncryptedError(
			    options.filename, 'PEM'));
		}

		var cinfo = utils.opensshCipherInfo(cipher);

		cipher = cinfo.opensslName;
		key = utils.pbkdf2(hashAlg, salt, iterations, cinfo.keySize,
		    options.passphrase);
		alg = undefined;
	}

	if (cipher && key && iv) {
		var cipherStream = crypto.createDecipheriv(cipher, key, iv);
		var chunk, chunks = [];
		cipherStream.once('error', function (e) {
			if (e.toString().indexOf('bad decrypt') !== -1) {
				throw (new Error('Incorrect passphrase ' +
				    'supplied, could not decrypt key'));
			}
			throw (e);
		});
		cipherStream.write(buf);
		cipherStream.end();
		while ((chunk = cipherStream.read()) !== null)
			chunks.push(chunk);
		buf = Buffer.concat(chunks);
	}

	/* The new OpenSSH internal format abuses PEM headers */
	if (alg && alg.toLowerCase() === 'openssh')
		return (sshpriv.readSSHPrivate(type, buf, options));
	if (alg && alg.toLowerCase() === 'ssh2')
		return (rfc4253.readType(type, buf, options));

	var der = new asn1.BerReader(buf);
	der.originalInput = input;

	/*
	 * All of the PEM file types start with a sequence tag, so chop it
	 * off here
	 */
	der.readSequence();

	/* PKCS#1 type keys name an algorithm in the banner explicitly */
	if (alg) {
		if (forceType)
			assert.strictEqual(forceType, 'pkcs1');
		return (pkcs1.readPkcs1(alg, type, der));
	} else {
		if (forceType)
			assert.strictEqual(forceType, 'pkcs8');
		return (pkcs8.readPkcs8(alg, type, der));
	}
}

function write(key, options, type) {
	assert.object(key);

	var alg = {
	    'ecdsa': 'EC',
	    'rsa': 'RSA',
	    'dsa': 'DSA',
	    'ed25519': 'EdDSA'
	}[key.type];
	var header;

	var der = new asn1.BerWriter();

	if (PrivateKey.isPrivateKey(key)) {
		if (type && type === 'pkcs8') {
			header = 'PRIVATE KEY';
			pkcs8.writePkcs8(der, key);
		} else {
			if (type)
				assert.strictEqual(type, 'pkcs1');
			header = alg + ' PRIVATE KEY';
			pkcs1.writePkcs1(der, key);
		}

	} else if (Key.isKey(key)) {
		if (type && type === 'pkcs1') {
			header = alg + ' PUBLIC KEY';
			pkcs1.writePkcs1(der, key);
		} else {
			if (type)
				assert.strictEqual(type, 'pkcs8');
			header = 'PUBLIC KEY';
			pkcs8.writePkcs8(der, key);
		}

	} else {
		throw (new Error('key is not a Key or PrivateKey'));
	}

	var tmp = der.buffer.toString('base64');
	var len = tmp.length + (tmp.length / 64) +
	    18 + 16 + header.length*2 + 10;
	var buf = Buffer.alloc(len);
	var o = 0;
	o += buf.write('-----BEGIN ' + header + '-----\n', o);
	for (var i = 0; i < tmp.length; ) {
		var limit = i + 64;
		if (limit > tmp.length)
			limit = tmp.length;
		o += buf.write(tmp.slice(i, limit), o);
		buf[o++] = 10;
		i = limit;
	}
	o += buf.write('-----END ' + header + '-----\n', o);

	return (buf.slice(0, o));
}


/***/ }),

/***/ 9367:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

module.exports = {
	read: read,
	readPkcs1: readPkcs1,
	write: write,
	writePkcs1: writePkcs1
};

var assert = __nccwpck_require__(6631);
var asn1 = __nccwpck_require__(970);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var utils = __nccwpck_require__(575);

var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var pem = __nccwpck_require__(4324);

var pkcs8 = __nccwpck_require__(4173);
var readECDSACurve = pkcs8.readECDSACurve;

function read(buf, options) {
	return (pem.read(buf, options, 'pkcs1'));
}

function write(key, options) {
	return (pem.write(key, options, 'pkcs1'));
}

/* Helper to read in a single mpint */
function readMPInt(der, nm) {
	assert.strictEqual(der.peek(), asn1.Ber.Integer,
	    nm + ' is not an Integer');
	return (utils.mpNormalize(der.readString(asn1.Ber.Integer, true)));
}

function readPkcs1(alg, type, der) {
	switch (alg) {
	case 'RSA':
		if (type === 'public')
			return (readPkcs1RSAPublic(der));
		else if (type === 'private')
			return (readPkcs1RSAPrivate(der));
		throw (new Error('Unknown key type: ' + type));
	case 'DSA':
		if (type === 'public')
			return (readPkcs1DSAPublic(der));
		else if (type === 'private')
			return (readPkcs1DSAPrivate(der));
		throw (new Error('Unknown key type: ' + type));
	case 'EC':
	case 'ECDSA':
		if (type === 'private')
			return (readPkcs1ECDSAPrivate(der));
		else if (type === 'public')
			return (readPkcs1ECDSAPublic(der));
		throw (new Error('Unknown key type: ' + type));
	case 'EDDSA':
	case 'EdDSA':
		if (type === 'private')
			return (readPkcs1EdDSAPrivate(der));
		throw (new Error(type + ' keys not supported with EdDSA'));
	default:
		throw (new Error('Unknown key algo: ' + alg));
	}
}

function readPkcs1RSAPublic(der) {
	// modulus and exponent
	var n = readMPInt(der, 'modulus');
	var e = readMPInt(der, 'exponent');

	// now, make the key
	var key = {
		type: 'rsa',
		parts: [
			{ name: 'e', data: e },
			{ name: 'n', data: n }
		]
	};

	return (new Key(key));
}

function readPkcs1RSAPrivate(der) {
	var version = readMPInt(der, 'version');
	assert.strictEqual(version[0], 0);

	// modulus then public exponent
	var n = readMPInt(der, 'modulus');
	var e = readMPInt(der, 'public exponent');
	var d = readMPInt(der, 'private exponent');
	var p = readMPInt(der, 'prime1');
	var q = readMPInt(der, 'prime2');
	var dmodp = readMPInt(der, 'exponent1');
	var dmodq = readMPInt(der, 'exponent2');
	var iqmp = readMPInt(der, 'iqmp');

	// now, make the key
	var key = {
		type: 'rsa',
		parts: [
			{ name: 'n', data: n },
			{ name: 'e', data: e },
			{ name: 'd', data: d },
			{ name: 'iqmp', data: iqmp },
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'dmodp', data: dmodp },
			{ name: 'dmodq', data: dmodq }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs1DSAPrivate(der) {
	var version = readMPInt(der, 'version');
	assert.strictEqual(version.readUInt8(0), 0);

	var p = readMPInt(der, 'p');
	var q = readMPInt(der, 'q');
	var g = readMPInt(der, 'g');
	var y = readMPInt(der, 'y');
	var x = readMPInt(der, 'x');

	// now, make the key
	var key = {
		type: 'dsa',
		parts: [
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'g', data: g },
			{ name: 'y', data: y },
			{ name: 'x', data: x }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs1EdDSAPrivate(der) {
	var version = readMPInt(der, 'version');
	assert.strictEqual(version.readUInt8(0), 1);

	// private key
	var k = der.readString(asn1.Ber.OctetString, true);

	der.readSequence(0xa0);
	var oid = der.readOID();
	assert.strictEqual(oid, '1.3.101.112', 'the ed25519 curve identifier');

	der.readSequence(0xa1);
	var A = utils.readBitString(der);

	var key = {
		type: 'ed25519',
		parts: [
			{ name: 'A', data: utils.zeroPadToLength(A, 32) },
			{ name: 'k', data: k }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs1DSAPublic(der) {
	var y = readMPInt(der, 'y');
	var p = readMPInt(der, 'p');
	var q = readMPInt(der, 'q');
	var g = readMPInt(der, 'g');

	var key = {
		type: 'dsa',
		parts: [
			{ name: 'y', data: y },
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'g', data: g }
		]
	};

	return (new Key(key));
}

function readPkcs1ECDSAPublic(der) {
	der.readSequence();

	var oid = der.readOID();
	assert.strictEqual(oid, '1.2.840.10045.2.1', 'must be ecPublicKey');

	var curveOid = der.readOID();

	var curve;
	var curves = Object.keys(algs.curves);
	for (var j = 0; j < curves.length; ++j) {
		var c = curves[j];
		var cd = algs.curves[c];
		if (cd.pkcs8oid === curveOid) {
			curve = c;
			break;
		}
	}
	assert.string(curve, 'a known ECDSA named curve');

	var Q = der.readString(asn1.Ber.BitString, true);
	Q = utils.ecNormalize(Q);

	var key = {
		type: 'ecdsa',
		parts: [
			{ name: 'curve', data: Buffer.from(curve) },
			{ name: 'Q', data: Q }
		]
	};

	return (new Key(key));
}

function readPkcs1ECDSAPrivate(der) {
	var version = readMPInt(der, 'version');
	assert.strictEqual(version.readUInt8(0), 1);

	// private key
	var d = der.readString(asn1.Ber.OctetString, true);

	der.readSequence(0xa0);
	var curve = readECDSACurve(der);
	assert.string(curve, 'a known elliptic curve');

	der.readSequence(0xa1);
	var Q = der.readString(asn1.Ber.BitString, true);
	Q = utils.ecNormalize(Q);

	var key = {
		type: 'ecdsa',
		parts: [
			{ name: 'curve', data: Buffer.from(curve) },
			{ name: 'Q', data: Q },
			{ name: 'd', data: d }
		]
	};

	return (new PrivateKey(key));
}

function writePkcs1(der, key) {
	der.startSequence();

	switch (key.type) {
	case 'rsa':
		if (PrivateKey.isPrivateKey(key))
			writePkcs1RSAPrivate(der, key);
		else
			writePkcs1RSAPublic(der, key);
		break;
	case 'dsa':
		if (PrivateKey.isPrivateKey(key))
			writePkcs1DSAPrivate(der, key);
		else
			writePkcs1DSAPublic(der, key);
		break;
	case 'ecdsa':
		if (PrivateKey.isPrivateKey(key))
			writePkcs1ECDSAPrivate(der, key);
		else
			writePkcs1ECDSAPublic(der, key);
		break;
	case 'ed25519':
		if (PrivateKey.isPrivateKey(key))
			writePkcs1EdDSAPrivate(der, key);
		else
			writePkcs1EdDSAPublic(der, key);
		break;
	default:
		throw (new Error('Unknown key algo: ' + key.type));
	}

	der.endSequence();
}

function writePkcs1RSAPublic(der, key) {
	der.writeBuffer(key.part.n.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.e.data, asn1.Ber.Integer);
}

function writePkcs1RSAPrivate(der, key) {
	var ver = Buffer.from([0]);
	der.writeBuffer(ver, asn1.Ber.Integer);

	der.writeBuffer(key.part.n.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.e.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.d.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	if (!key.part.dmodp || !key.part.dmodq)
		utils.addRSAMissing(key);
	der.writeBuffer(key.part.dmodp.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.dmodq.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.iqmp.data, asn1.Ber.Integer);
}

function writePkcs1DSAPrivate(der, key) {
	var ver = Buffer.from([0]);
	der.writeBuffer(ver, asn1.Ber.Integer);

	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.g.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.y.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.x.data, asn1.Ber.Integer);
}

function writePkcs1DSAPublic(der, key) {
	der.writeBuffer(key.part.y.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.g.data, asn1.Ber.Integer);
}

function writePkcs1ECDSAPublic(der, key) {
	der.startSequence();

	der.writeOID('1.2.840.10045.2.1'); /* ecPublicKey */
	var curve = key.part.curve.data.toString();
	var curveOid = algs.curves[curve].pkcs8oid;
	assert.string(curveOid, 'a known ECDSA named curve');
	der.writeOID(curveOid);

	der.endSequence();

	var Q = utils.ecNormalize(key.part.Q.data, true);
	der.writeBuffer(Q, asn1.Ber.BitString);
}

function writePkcs1ECDSAPrivate(der, key) {
	var ver = Buffer.from([1]);
	der.writeBuffer(ver, asn1.Ber.Integer);

	der.writeBuffer(key.part.d.data, asn1.Ber.OctetString);

	der.startSequence(0xa0);
	var curve = key.part.curve.data.toString();
	var curveOid = algs.curves[curve].pkcs8oid;
	assert.string(curveOid, 'a known ECDSA named curve');
	der.writeOID(curveOid);
	der.endSequence();

	der.startSequence(0xa1);
	var Q = utils.ecNormalize(key.part.Q.data, true);
	der.writeBuffer(Q, asn1.Ber.BitString);
	der.endSequence();
}

function writePkcs1EdDSAPrivate(der, key) {
	var ver = Buffer.from([1]);
	der.writeBuffer(ver, asn1.Ber.Integer);

	der.writeBuffer(key.part.k.data, asn1.Ber.OctetString);

	der.startSequence(0xa0);
	der.writeOID('1.3.101.112');
	der.endSequence();

	der.startSequence(0xa1);
	utils.writeBitString(der, key.part.A.data);
	der.endSequence();
}

function writePkcs1EdDSAPublic(der, key) {
	throw (new Error('Public keys are not supported for EdDSA PKCS#1'));
}


/***/ }),

/***/ 4173:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2018 Joyent, Inc.

module.exports = {
	read: read,
	readPkcs8: readPkcs8,
	write: write,
	writePkcs8: writePkcs8,
	pkcs8ToBuffer: pkcs8ToBuffer,

	readECDSACurve: readECDSACurve,
	writeECDSACurve: writeECDSACurve
};

var assert = __nccwpck_require__(6631);
var asn1 = __nccwpck_require__(970);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var utils = __nccwpck_require__(575);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var pem = __nccwpck_require__(4324);

function read(buf, options) {
	return (pem.read(buf, options, 'pkcs8'));
}

function write(key, options) {
	return (pem.write(key, options, 'pkcs8'));
}

/* Helper to read in a single mpint */
function readMPInt(der, nm) {
	assert.strictEqual(der.peek(), asn1.Ber.Integer,
	    nm + ' is not an Integer');
	return (utils.mpNormalize(der.readString(asn1.Ber.Integer, true)));
}

function readPkcs8(alg, type, der) {
	/* Private keys in pkcs#8 format have a weird extra int */
	if (der.peek() === asn1.Ber.Integer) {
		assert.strictEqual(type, 'private',
		    'unexpected Integer at start of public key');
		der.readString(asn1.Ber.Integer, true);
	}

	der.readSequence();
	var next = der.offset + der.length;

	var oid = der.readOID();
	switch (oid) {
	case '1.2.840.113549.1.1.1':
		der._offset = next;
		if (type === 'public')
			return (readPkcs8RSAPublic(der));
		else
			return (readPkcs8RSAPrivate(der));
	case '1.2.840.10040.4.1':
		if (type === 'public')
			return (readPkcs8DSAPublic(der));
		else
			return (readPkcs8DSAPrivate(der));
	case '1.2.840.10045.2.1':
		if (type === 'public')
			return (readPkcs8ECDSAPublic(der));
		else
			return (readPkcs8ECDSAPrivate(der));
	case '1.3.101.112':
		if (type === 'public') {
			return (readPkcs8EdDSAPublic(der));
		} else {
			return (readPkcs8EdDSAPrivate(der));
		}
	case '1.3.101.110':
		if (type === 'public') {
			return (readPkcs8X25519Public(der));
		} else {
			return (readPkcs8X25519Private(der));
		}
	default:
		throw (new Error('Unknown key type OID ' + oid));
	}
}

function readPkcs8RSAPublic(der) {
	// bit string sequence
	der.readSequence(asn1.Ber.BitString);
	der.readByte();
	der.readSequence();

	// modulus
	var n = readMPInt(der, 'modulus');
	var e = readMPInt(der, 'exponent');

	// now, make the key
	var key = {
		type: 'rsa',
		source: der.originalInput,
		parts: [
			{ name: 'e', data: e },
			{ name: 'n', data: n }
		]
	};

	return (new Key(key));
}

function readPkcs8RSAPrivate(der) {
	der.readSequence(asn1.Ber.OctetString);
	der.readSequence();

	var ver = readMPInt(der, 'version');
	assert.equal(ver[0], 0x0, 'unknown RSA private key version');

	// modulus then public exponent
	var n = readMPInt(der, 'modulus');
	var e = readMPInt(der, 'public exponent');
	var d = readMPInt(der, 'private exponent');
	var p = readMPInt(der, 'prime1');
	var q = readMPInt(der, 'prime2');
	var dmodp = readMPInt(der, 'exponent1');
	var dmodq = readMPInt(der, 'exponent2');
	var iqmp = readMPInt(der, 'iqmp');

	// now, make the key
	var key = {
		type: 'rsa',
		parts: [
			{ name: 'n', data: n },
			{ name: 'e', data: e },
			{ name: 'd', data: d },
			{ name: 'iqmp', data: iqmp },
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'dmodp', data: dmodp },
			{ name: 'dmodq', data: dmodq }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs8DSAPublic(der) {
	der.readSequence();

	var p = readMPInt(der, 'p');
	var q = readMPInt(der, 'q');
	var g = readMPInt(der, 'g');

	// bit string sequence
	der.readSequence(asn1.Ber.BitString);
	der.readByte();

	var y = readMPInt(der, 'y');

	// now, make the key
	var key = {
		type: 'dsa',
		parts: [
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'g', data: g },
			{ name: 'y', data: y }
		]
	};

	return (new Key(key));
}

function readPkcs8DSAPrivate(der) {
	der.readSequence();

	var p = readMPInt(der, 'p');
	var q = readMPInt(der, 'q');
	var g = readMPInt(der, 'g');

	der.readSequence(asn1.Ber.OctetString);
	var x = readMPInt(der, 'x');

	/* The pkcs#8 format does not include the public key */
	var y = utils.calculateDSAPublic(g, p, x);

	var key = {
		type: 'dsa',
		parts: [
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'g', data: g },
			{ name: 'y', data: y },
			{ name: 'x', data: x }
		]
	};

	return (new PrivateKey(key));
}

function readECDSACurve(der) {
	var curveName, curveNames;
	var j, c, cd;

	if (der.peek() === asn1.Ber.OID) {
		var oid = der.readOID();

		curveNames = Object.keys(algs.curves);
		for (j = 0; j < curveNames.length; ++j) {
			c = curveNames[j];
			cd = algs.curves[c];
			if (cd.pkcs8oid === oid) {
				curveName = c;
				break;
			}
		}

	} else {
		// ECParameters sequence
		der.readSequence();
		var version = der.readString(asn1.Ber.Integer, true);
		assert.strictEqual(version[0], 1, 'ECDSA key not version 1');

		var curve = {};

		// FieldID sequence
		der.readSequence();
		var fieldTypeOid = der.readOID();
		assert.strictEqual(fieldTypeOid, '1.2.840.10045.1.1',
		    'ECDSA key is not from a prime-field');
		var p = curve.p = utils.mpNormalize(
		    der.readString(asn1.Ber.Integer, true));
		/*
		 * p always starts with a 1 bit, so count the zeros to get its
		 * real size.
		 */
		curve.size = p.length * 8 - utils.countZeros(p);

		// Curve sequence
		der.readSequence();
		curve.a = utils.mpNormalize(
		    der.readString(asn1.Ber.OctetString, true));
		curve.b = utils.mpNormalize(
		    der.readString(asn1.Ber.OctetString, true));
		if (der.peek() === asn1.Ber.BitString)
			curve.s = der.readString(asn1.Ber.BitString, true);

		// Combined Gx and Gy
		curve.G = der.readString(asn1.Ber.OctetString, true);
		assert.strictEqual(curve.G[0], 0x4,
		    'uncompressed G is required');

		curve.n = utils.mpNormalize(
		    der.readString(asn1.Ber.Integer, true));
		curve.h = utils.mpNormalize(
		    der.readString(asn1.Ber.Integer, true));
		assert.strictEqual(curve.h[0], 0x1, 'a cofactor=1 curve is ' +
		    'required');

		curveNames = Object.keys(algs.curves);
		var ks = Object.keys(curve);
		for (j = 0; j < curveNames.length; ++j) {
			c = curveNames[j];
			cd = algs.curves[c];
			var equal = true;
			for (var i = 0; i < ks.length; ++i) {
				var k = ks[i];
				if (cd[k] === undefined)
					continue;
				if (typeof (cd[k]) === 'object' &&
				    cd[k].equals !== undefined) {
					if (!cd[k].equals(curve[k])) {
						equal = false;
						break;
					}
				} else if (Buffer.isBuffer(cd[k])) {
					if (cd[k].toString('binary')
					    !== curve[k].toString('binary')) {
						equal = false;
						break;
					}
				} else {
					if (cd[k] !== curve[k]) {
						equal = false;
						break;
					}
				}
			}
			if (equal) {
				curveName = c;
				break;
			}
		}
	}
	return (curveName);
}

function readPkcs8ECDSAPrivate(der) {
	var curveName = readECDSACurve(der);
	assert.string(curveName, 'a known elliptic curve');

	der.readSequence(asn1.Ber.OctetString);
	der.readSequence();

	var version = readMPInt(der, 'version');
	assert.equal(version[0], 1, 'unknown version of ECDSA key');

	var d = der.readString(asn1.Ber.OctetString, true);
	var Q;

	if (der.peek() == 0xa0) {
		der.readSequence(0xa0);
		der._offset += der.length;
	}
	if (der.peek() == 0xa1) {
		der.readSequence(0xa1);
		Q = der.readString(asn1.Ber.BitString, true);
		Q = utils.ecNormalize(Q);
	}

	if (Q === undefined) {
		var pub = utils.publicFromPrivateECDSA(curveName, d);
		Q = pub.part.Q.data;
	}

	var key = {
		type: 'ecdsa',
		parts: [
			{ name: 'curve', data: Buffer.from(curveName) },
			{ name: 'Q', data: Q },
			{ name: 'd', data: d }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs8ECDSAPublic(der) {
	var curveName = readECDSACurve(der);
	assert.string(curveName, 'a known elliptic curve');

	var Q = der.readString(asn1.Ber.BitString, true);
	Q = utils.ecNormalize(Q);

	var key = {
		type: 'ecdsa',
		parts: [
			{ name: 'curve', data: Buffer.from(curveName) },
			{ name: 'Q', data: Q }
		]
	};

	return (new Key(key));
}

function readPkcs8EdDSAPublic(der) {
	if (der.peek() === 0x00)
		der.readByte();

	var A = utils.readBitString(der);

	var key = {
		type: 'ed25519',
		parts: [
			{ name: 'A', data: utils.zeroPadToLength(A, 32) }
		]
	};

	return (new Key(key));
}

function readPkcs8X25519Public(der) {
	var A = utils.readBitString(der);

	var key = {
		type: 'curve25519',
		parts: [
			{ name: 'A', data: utils.zeroPadToLength(A, 32) }
		]
	};

	return (new Key(key));
}

function readPkcs8EdDSAPrivate(der) {
	if (der.peek() === 0x00)
		der.readByte();

	der.readSequence(asn1.Ber.OctetString);
	var k = der.readString(asn1.Ber.OctetString, true);
	k = utils.zeroPadToLength(k, 32);

	var A;
	if (der.peek() === asn1.Ber.BitString) {
		A = utils.readBitString(der);
		A = utils.zeroPadToLength(A, 32);
	} else {
		A = utils.calculateED25519Public(k);
	}

	var key = {
		type: 'ed25519',
		parts: [
			{ name: 'A', data: utils.zeroPadToLength(A, 32) },
			{ name: 'k', data: utils.zeroPadToLength(k, 32) }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs8X25519Private(der) {
	if (der.peek() === 0x00)
		der.readByte();

	der.readSequence(asn1.Ber.OctetString);
	var k = der.readString(asn1.Ber.OctetString, true);
	k = utils.zeroPadToLength(k, 32);

	var A = utils.calculateX25519Public(k);

	var key = {
		type: 'curve25519',
		parts: [
			{ name: 'A', data: utils.zeroPadToLength(A, 32) },
			{ name: 'k', data: utils.zeroPadToLength(k, 32) }
		]
	};

	return (new PrivateKey(key));
}

function pkcs8ToBuffer(key) {
	var der = new asn1.BerWriter();
	writePkcs8(der, key);
	return (der.buffer);
}

function writePkcs8(der, key) {
	der.startSequence();

	if (PrivateKey.isPrivateKey(key)) {
		var sillyInt = Buffer.from([0]);
		der.writeBuffer(sillyInt, asn1.Ber.Integer);
	}

	der.startSequence();
	switch (key.type) {
	case 'rsa':
		der.writeOID('1.2.840.113549.1.1.1');
		if (PrivateKey.isPrivateKey(key))
			writePkcs8RSAPrivate(key, der);
		else
			writePkcs8RSAPublic(key, der);
		break;
	case 'dsa':
		der.writeOID('1.2.840.10040.4.1');
		if (PrivateKey.isPrivateKey(key))
			writePkcs8DSAPrivate(key, der);
		else
			writePkcs8DSAPublic(key, der);
		break;
	case 'ecdsa':
		der.writeOID('1.2.840.10045.2.1');
		if (PrivateKey.isPrivateKey(key))
			writePkcs8ECDSAPrivate(key, der);
		else
			writePkcs8ECDSAPublic(key, der);
		break;
	case 'ed25519':
		der.writeOID('1.3.101.112');
		if (PrivateKey.isPrivateKey(key))
			throw (new Error('Ed25519 private keys in pkcs8 ' +
			    'format are not supported'));
		writePkcs8EdDSAPublic(key, der);
		break;
	default:
		throw (new Error('Unsupported key type: ' + key.type));
	}

	der.endSequence();
}

function writePkcs8RSAPrivate(key, der) {
	der.writeNull();
	der.endSequence();

	der.startSequence(asn1.Ber.OctetString);
	der.startSequence();

	var version = Buffer.from([0]);
	der.writeBuffer(version, asn1.Ber.Integer);

	der.writeBuffer(key.part.n.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.e.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.d.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	if (!key.part.dmodp || !key.part.dmodq)
		utils.addRSAMissing(key);
	der.writeBuffer(key.part.dmodp.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.dmodq.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.iqmp.data, asn1.Ber.Integer);

	der.endSequence();
	der.endSequence();
}

function writePkcs8RSAPublic(key, der) {
	der.writeNull();
	der.endSequence();

	der.startSequence(asn1.Ber.BitString);
	der.writeByte(0x00);

	der.startSequence();
	der.writeBuffer(key.part.n.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.e.data, asn1.Ber.Integer);
	der.endSequence();

	der.endSequence();
}

function writePkcs8DSAPrivate(key, der) {
	der.startSequence();
	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.g.data, asn1.Ber.Integer);
	der.endSequence();

	der.endSequence();

	der.startSequence(asn1.Ber.OctetString);
	der.writeBuffer(key.part.x.data, asn1.Ber.Integer);
	der.endSequence();
}

function writePkcs8DSAPublic(key, der) {
	der.startSequence();
	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.g.data, asn1.Ber.Integer);
	der.endSequence();
	der.endSequence();

	der.startSequence(asn1.Ber.BitString);
	der.writeByte(0x00);
	der.writeBuffer(key.part.y.data, asn1.Ber.Integer);
	der.endSequence();
}

function writeECDSACurve(key, der) {
	var curve = algs.curves[key.curve];
	if (curve.pkcs8oid) {
		/* This one has a name in pkcs#8, so just write the oid */
		der.writeOID(curve.pkcs8oid);

	} else {
		// ECParameters sequence
		der.startSequence();

		var version = Buffer.from([1]);
		der.writeBuffer(version, asn1.Ber.Integer);

		// FieldID sequence
		der.startSequence();
		der.writeOID('1.2.840.10045.1.1'); // prime-field
		der.writeBuffer(curve.p, asn1.Ber.Integer);
		der.endSequence();

		// Curve sequence
		der.startSequence();
		var a = curve.p;
		if (a[0] === 0x0)
			a = a.slice(1);
		der.writeBuffer(a, asn1.Ber.OctetString);
		der.writeBuffer(curve.b, asn1.Ber.OctetString);
		der.writeBuffer(curve.s, asn1.Ber.BitString);
		der.endSequence();

		der.writeBuffer(curve.G, asn1.Ber.OctetString);
		der.writeBuffer(curve.n, asn1.Ber.Integer);
		var h = curve.h;
		if (!h) {
			h = Buffer.from([1]);
		}
		der.writeBuffer(h, asn1.Ber.Integer);

		// ECParameters
		der.endSequence();
	}
}

function writePkcs8ECDSAPublic(key, der) {
	writeECDSACurve(key, der);
	der.endSequence();

	var Q = utils.ecNormalize(key.part.Q.data, true);
	der.writeBuffer(Q, asn1.Ber.BitString);
}

function writePkcs8ECDSAPrivate(key, der) {
	writeECDSACurve(key, der);
	der.endSequence();

	der.startSequence(asn1.Ber.OctetString);
	der.startSequence();

	var version = Buffer.from([1]);
	der.writeBuffer(version, asn1.Ber.Integer);

	der.writeBuffer(key.part.d.data, asn1.Ber.OctetString);

	der.startSequence(0xa1);
	var Q = utils.ecNormalize(key.part.Q.data, true);
	der.writeBuffer(Q, asn1.Ber.BitString);
	der.endSequence();

	der.endSequence();
	der.endSequence();
}

function writePkcs8EdDSAPublic(key, der) {
	der.endSequence();

	utils.writeBitString(der, key.part.A.data);
}

function writePkcs8EdDSAPrivate(key, der) {
	der.endSequence();

	var k = utils.mpNormalize(key.part.k.data, true);
	der.startSequence(asn1.Ber.OctetString);
	der.writeBuffer(k, asn1.Ber.OctetString);
	der.endSequence();
}


/***/ }),

/***/ 974:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2018 Joyent, Inc.

module.exports = {
	read: read,
	write: write
};

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var rfc4253 = __nccwpck_require__(8688);
var Key = __nccwpck_require__(6814);

var errors = __nccwpck_require__(7979);

function read(buf, options) {
	var lines = buf.toString('ascii').split(/[\r\n]+/);
	var found = false;
	var parts;
	var si = 0;
	while (si < lines.length) {
		parts = splitHeader(lines[si++]);
		if (parts &&
		    parts[0].toLowerCase() === 'putty-user-key-file-2') {
			found = true;
			break;
		}
	}
	if (!found) {
		throw (new Error('No PuTTY format first line found'));
	}
	var alg = parts[1];

	parts = splitHeader(lines[si++]);
	assert.equal(parts[0].toLowerCase(), 'encryption');

	parts = splitHeader(lines[si++]);
	assert.equal(parts[0].toLowerCase(), 'comment');
	var comment = parts[1];

	parts = splitHeader(lines[si++]);
	assert.equal(parts[0].toLowerCase(), 'public-lines');
	var publicLines = parseInt(parts[1], 10);
	if (!isFinite(publicLines) || publicLines < 0 ||
	    publicLines > lines.length) {
		throw (new Error('Invalid public-lines count'));
	}

	var publicBuf = Buffer.from(
	    lines.slice(si, si + publicLines).join(''), 'base64');
	var keyType = rfc4253.algToKeyType(alg);
	var key = rfc4253.read(publicBuf);
	if (key.type !== keyType) {
		throw (new Error('Outer key algorithm mismatch'));
	}
	key.comment = comment;
	return (key);
}

function splitHeader(line) {
	var idx = line.indexOf(':');
	if (idx === -1)
		return (null);
	var header = line.slice(0, idx);
	++idx;
	while (line[idx] === ' ')
		++idx;
	var rest = line.slice(idx);
	return ([header, rest]);
}

function write(key, options) {
	assert.object(key);
	if (!Key.isKey(key))
		throw (new Error('Must be a public key'));

	var alg = rfc4253.keyTypeToAlg(key);
	var buf = rfc4253.write(key);
	var comment = key.comment || '';

	var b64 = buf.toString('base64');
	var lines = wrap(b64, 64);

	lines.unshift('Public-Lines: ' + lines.length);
	lines.unshift('Comment: ' + comment);
	lines.unshift('Encryption: none');
	lines.unshift('PuTTY-User-Key-File-2: ' + alg);

	return (Buffer.from(lines.join('\n') + '\n'));
}

function wrap(txt, len) {
	var lines = [];
	var pos = 0;
	while (pos < txt.length) {
		lines.push(txt.slice(pos, pos + 64));
		pos += 64;
	}
	return (lines);
}


/***/ }),

/***/ 8688:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

module.exports = {
	read: read.bind(undefined, false, undefined),
	readType: read.bind(undefined, false),
	write: write,
	/* semi-private api, used by sshpk-agent */
	readPartial: read.bind(undefined, true),

	/* shared with ssh format */
	readInternal: read,
	keyTypeToAlg: keyTypeToAlg,
	algToKeyType: algToKeyType
};

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var utils = __nccwpck_require__(575);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var SSHBuffer = __nccwpck_require__(5621);

function algToKeyType(alg) {
	assert.string(alg);
	if (alg === 'ssh-dss')
		return ('dsa');
	else if (alg === 'ssh-rsa')
		return ('rsa');
	else if (alg === 'ssh-ed25519')
		return ('ed25519');
	else if (alg === 'ssh-curve25519')
		return ('curve25519');
	else if (alg.match(/^ecdsa-sha2-/))
		return ('ecdsa');
	else
		throw (new Error('Unknown algorithm ' + alg));
}

function keyTypeToAlg(key) {
	assert.object(key);
	if (key.type === 'dsa')
		return ('ssh-dss');
	else if (key.type === 'rsa')
		return ('ssh-rsa');
	else if (key.type === 'ed25519')
		return ('ssh-ed25519');
	else if (key.type === 'curve25519')
		return ('ssh-curve25519');
	else if (key.type === 'ecdsa')
		return ('ecdsa-sha2-' + key.part.curve.data.toString());
	else
		throw (new Error('Unknown key type ' + key.type));
}

function read(partial, type, buf, options) {
	if (typeof (buf) === 'string')
		buf = Buffer.from(buf);
	assert.buffer(buf, 'buf');

	var key = {};

	var parts = key.parts = [];
	var sshbuf = new SSHBuffer({buffer: buf});

	var alg = sshbuf.readString();
	assert.ok(!sshbuf.atEnd(), 'key must have at least one part');

	key.type = algToKeyType(alg);

	var partCount = algs.info[key.type].parts.length;
	if (type && type === 'private')
		partCount = algs.privInfo[key.type].parts.length;

	while (!sshbuf.atEnd() && parts.length < partCount)
		parts.push(sshbuf.readPart());
	while (!partial && !sshbuf.atEnd())
		parts.push(sshbuf.readPart());

	assert.ok(parts.length >= 1,
	    'key must have at least one part');
	assert.ok(partial || sshbuf.atEnd(),
	    'leftover bytes at end of key');

	var Constructor = Key;
	var algInfo = algs.info[key.type];
	if (type === 'private' || algInfo.parts.length !== parts.length) {
		algInfo = algs.privInfo[key.type];
		Constructor = PrivateKey;
	}
	assert.strictEqual(algInfo.parts.length, parts.length);

	if (key.type === 'ecdsa') {
		var res = /^ecdsa-sha2-(.+)$/.exec(alg);
		assert.ok(res !== null);
		assert.strictEqual(res[1], parts[0].data.toString());
	}

	var normalized = true;
	for (var i = 0; i < algInfo.parts.length; ++i) {
		var p = parts[i];
		p.name = algInfo.parts[i];
		/*
		 * OpenSSH stores ed25519 "private" keys as seed + public key
		 * concat'd together (k followed by A). We want to keep them
		 * separate for other formats that don't do this.
		 */
		if (key.type === 'ed25519' && p.name === 'k')
			p.data = p.data.slice(0, 32);

		if (p.name !== 'curve' && algInfo.normalize !== false) {
			var nd;
			if (key.type === 'ed25519') {
				nd = utils.zeroPadToLength(p.data, 32);
			} else {
				nd = utils.mpNormalize(p.data);
			}
			if (nd.toString('binary') !==
			    p.data.toString('binary')) {
				p.data = nd;
				normalized = false;
			}
		}
	}

	if (normalized)
		key._rfc4253Cache = sshbuf.toBuffer();

	if (partial && typeof (partial) === 'object') {
		partial.remainder = sshbuf.remainder();
		partial.consumed = sshbuf._offset;
	}

	return (new Constructor(key));
}

function write(key, options) {
	assert.object(key);

	var alg = keyTypeToAlg(key);
	var i;

	var algInfo = algs.info[key.type];
	if (PrivateKey.isPrivateKey(key))
		algInfo = algs.privInfo[key.type];
	var parts = algInfo.parts;

	var buf = new SSHBuffer({});

	buf.writeString(alg);

	for (i = 0; i < parts.length; ++i) {
		var data = key.part[parts[i]].data;
		if (algInfo.normalize !== false) {
			if (key.type === 'ed25519')
				data = utils.zeroPadToLength(data, 32);
			else
				data = utils.mpNormalize(data);
		}
		if (key.type === 'ed25519' && parts[i] === 'k')
			data = Buffer.concat([data, key.part.A.data]);
		buf.writeBuffer(data);
	}

	return (buf.toBuffer());
}


/***/ }),

/***/ 3923:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

module.exports = {
	read: read,
	readSSHPrivate: readSSHPrivate,
	write: write
};

var assert = __nccwpck_require__(6631);
var asn1 = __nccwpck_require__(970);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var utils = __nccwpck_require__(575);
var crypto = __nccwpck_require__(6417);

var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var pem = __nccwpck_require__(4324);
var rfc4253 = __nccwpck_require__(8688);
var SSHBuffer = __nccwpck_require__(5621);
var errors = __nccwpck_require__(7979);

var bcrypt;

function read(buf, options) {
	return (pem.read(buf, options));
}

var MAGIC = 'openssh-key-v1';

function readSSHPrivate(type, buf, options) {
	buf = new SSHBuffer({buffer: buf});

	var magic = buf.readCString();
	assert.strictEqual(magic, MAGIC, 'bad magic string');

	var cipher = buf.readString();
	var kdf = buf.readString();
	var kdfOpts = buf.readBuffer();

	var nkeys = buf.readInt();
	if (nkeys !== 1) {
		throw (new Error('OpenSSH-format key file contains ' +
		    'multiple keys: this is unsupported.'));
	}

	var pubKey = buf.readBuffer();

	if (type === 'public') {
		assert.ok(buf.atEnd(), 'excess bytes left after key');
		return (rfc4253.read(pubKey));
	}

	var privKeyBlob = buf.readBuffer();
	assert.ok(buf.atEnd(), 'excess bytes left after key');

	var kdfOptsBuf = new SSHBuffer({ buffer: kdfOpts });
	switch (kdf) {
	case 'none':
		if (cipher !== 'none') {
			throw (new Error('OpenSSH-format key uses KDF "none" ' +
			     'but specifies a cipher other than "none"'));
		}
		break;
	case 'bcrypt':
		var salt = kdfOptsBuf.readBuffer();
		var rounds = kdfOptsBuf.readInt();
		var cinf = utils.opensshCipherInfo(cipher);
		if (bcrypt === undefined) {
			bcrypt = __nccwpck_require__(5447);
		}

		if (typeof (options.passphrase) === 'string') {
			options.passphrase = Buffer.from(options.passphrase,
			    'utf-8');
		}
		if (!Buffer.isBuffer(options.passphrase)) {
			throw (new errors.KeyEncryptedError(
			    options.filename, 'OpenSSH'));
		}

		var pass = new Uint8Array(options.passphrase);
		var salti = new Uint8Array(salt);
		/* Use the pbkdf to derive both the key and the IV. */
		var out = new Uint8Array(cinf.keySize + cinf.blockSize);
		var res = bcrypt.pbkdf(pass, pass.length, salti, salti.length,
		    out, out.length, rounds);
		if (res !== 0) {
			throw (new Error('bcrypt_pbkdf function returned ' +
			    'failure, parameters invalid'));
		}
		out = Buffer.from(out);
		var ckey = out.slice(0, cinf.keySize);
		var iv = out.slice(cinf.keySize, cinf.keySize + cinf.blockSize);
		var cipherStream = crypto.createDecipheriv(cinf.opensslName,
		    ckey, iv);
		cipherStream.setAutoPadding(false);
		var chunk, chunks = [];
		cipherStream.once('error', function (e) {
			if (e.toString().indexOf('bad decrypt') !== -1) {
				throw (new Error('Incorrect passphrase ' +
				    'supplied, could not decrypt key'));
			}
			throw (e);
		});
		cipherStream.write(privKeyBlob);
		cipherStream.end();
		while ((chunk = cipherStream.read()) !== null)
			chunks.push(chunk);
		privKeyBlob = Buffer.concat(chunks);
		break;
	default:
		throw (new Error(
		    'OpenSSH-format key uses unknown KDF "' + kdf + '"'));
	}

	buf = new SSHBuffer({buffer: privKeyBlob});

	var checkInt1 = buf.readInt();
	var checkInt2 = buf.readInt();
	if (checkInt1 !== checkInt2) {
		throw (new Error('Incorrect passphrase supplied, could not ' +
		    'decrypt key'));
	}

	var ret = {};
	var key = rfc4253.readInternal(ret, 'private', buf.remainder());

	buf.skip(ret.consumed);

	var comment = buf.readString();
	key.comment = comment;

	return (key);
}

function write(key, options) {
	var pubKey;
	if (PrivateKey.isPrivateKey(key))
		pubKey = key.toPublic();
	else
		pubKey = key;

	var cipher = 'none';
	var kdf = 'none';
	var kdfopts = Buffer.alloc(0);
	var cinf = { blockSize: 8 };
	var passphrase;
	if (options !== undefined) {
		passphrase = options.passphrase;
		if (typeof (passphrase) === 'string')
			passphrase = Buffer.from(passphrase, 'utf-8');
		if (passphrase !== undefined) {
			assert.buffer(passphrase, 'options.passphrase');
			assert.optionalString(options.cipher, 'options.cipher');
			cipher = options.cipher;
			if (cipher === undefined)
				cipher = 'aes128-ctr';
			cinf = utils.opensshCipherInfo(cipher);
			kdf = 'bcrypt';
		}
	}

	var privBuf;
	if (PrivateKey.isPrivateKey(key)) {
		privBuf = new SSHBuffer({});
		var checkInt = crypto.randomBytes(4).readUInt32BE(0);
		privBuf.writeInt(checkInt);
		privBuf.writeInt(checkInt);
		privBuf.write(key.toBuffer('rfc4253'));
		privBuf.writeString(key.comment || '');

		var n = 1;
		while (privBuf._offset % cinf.blockSize !== 0)
			privBuf.writeChar(n++);
		privBuf = privBuf.toBuffer();
	}

	switch (kdf) {
	case 'none':
		break;
	case 'bcrypt':
		var salt = crypto.randomBytes(16);
		var rounds = 16;
		var kdfssh = new SSHBuffer({});
		kdfssh.writeBuffer(salt);
		kdfssh.writeInt(rounds);
		kdfopts = kdfssh.toBuffer();

		if (bcrypt === undefined) {
			bcrypt = __nccwpck_require__(5447);
		}
		var pass = new Uint8Array(passphrase);
		var salti = new Uint8Array(salt);
		/* Use the pbkdf to derive both the key and the IV. */
		var out = new Uint8Array(cinf.keySize + cinf.blockSize);
		var res = bcrypt.pbkdf(pass, pass.length, salti, salti.length,
		    out, out.length, rounds);
		if (res !== 0) {
			throw (new Error('bcrypt_pbkdf function returned ' +
			    'failure, parameters invalid'));
		}
		out = Buffer.from(out);
		var ckey = out.slice(0, cinf.keySize);
		var iv = out.slice(cinf.keySize, cinf.keySize + cinf.blockSize);

		var cipherStream = crypto.createCipheriv(cinf.opensslName,
		    ckey, iv);
		cipherStream.setAutoPadding(false);
		var chunk, chunks = [];
		cipherStream.once('error', function (e) {
			throw (e);
		});
		cipherStream.write(privBuf);
		cipherStream.end();
		while ((chunk = cipherStream.read()) !== null)
			chunks.push(chunk);
		privBuf = Buffer.concat(chunks);
		break;
	default:
		throw (new Error('Unsupported kdf ' + kdf));
	}

	var buf = new SSHBuffer({});

	buf.writeCString(MAGIC);
	buf.writeString(cipher);	/* cipher */
	buf.writeString(kdf);		/* kdf */
	buf.writeBuffer(kdfopts);	/* kdfoptions */

	buf.writeInt(1);		/* nkeys */
	buf.writeBuffer(pubKey.toBuffer('rfc4253'));

	if (privBuf)
		buf.writeBuffer(privBuf);

	buf = buf.toBuffer();

	var header;
	if (PrivateKey.isPrivateKey(key))
		header = 'OPENSSH PRIVATE KEY';
	else
		header = 'OPENSSH PUBLIC KEY';

	var tmp = buf.toString('base64');
	var len = tmp.length + (tmp.length / 70) +
	    18 + 16 + header.length*2 + 10;
	buf = Buffer.alloc(len);
	var o = 0;
	o += buf.write('-----BEGIN ' + header + '-----\n', o);
	for (var i = 0; i < tmp.length; ) {
		var limit = i + 70;
		if (limit > tmp.length)
			limit = tmp.length;
		o += buf.write(tmp.slice(i, limit), o);
		buf[o++] = 10;
		i = limit;
	}
	o += buf.write('-----END ' + header + '-----\n', o);

	return (buf.slice(0, o));
}


/***/ }),

/***/ 8927:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

module.exports = {
	read: read,
	write: write
};

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var rfc4253 = __nccwpck_require__(8688);
var utils = __nccwpck_require__(575);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);

var sshpriv = __nccwpck_require__(3923);

/*JSSTYLED*/
var SSHKEY_RE = /^([a-z0-9-]+)[ \t]+([a-zA-Z0-9+\/]+[=]*)([ \t]+([^ \t][^\n]*[\n]*)?)?$/;
/*JSSTYLED*/
var SSHKEY_RE2 = /^([a-z0-9-]+)[ \t\n]+([a-zA-Z0-9+\/][a-zA-Z0-9+\/ \t\n=]*)([^a-zA-Z0-9+\/ \t\n=].*)?$/;

function read(buf, options) {
	if (typeof (buf) !== 'string') {
		assert.buffer(buf, 'buf');
		buf = buf.toString('ascii');
	}

	var trimmed = buf.trim().replace(/[\\\r]/g, '');
	var m = trimmed.match(SSHKEY_RE);
	if (!m)
		m = trimmed.match(SSHKEY_RE2);
	assert.ok(m, 'key must match regex');

	var type = rfc4253.algToKeyType(m[1]);
	var kbuf = Buffer.from(m[2], 'base64');

	/*
	 * This is a bit tricky. If we managed to parse the key and locate the
	 * key comment with the regex, then do a non-partial read and assert
	 * that we have consumed all bytes. If we couldn't locate the key
	 * comment, though, there may be whitespace shenanigans going on that
	 * have conjoined the comment to the rest of the key. We do a partial
	 * read in this case to try to make the best out of a sorry situation.
	 */
	var key;
	var ret = {};
	if (m[4]) {
		try {
			key = rfc4253.read(kbuf);

		} catch (e) {
			m = trimmed.match(SSHKEY_RE2);
			assert.ok(m, 'key must match regex');
			kbuf = Buffer.from(m[2], 'base64');
			key = rfc4253.readInternal(ret, 'public', kbuf);
		}
	} else {
		key = rfc4253.readInternal(ret, 'public', kbuf);
	}

	assert.strictEqual(type, key.type);

	if (m[4] && m[4].length > 0) {
		key.comment = m[4];

	} else if (ret.consumed) {
		/*
		 * Now the magic: trying to recover the key comment when it's
		 * gotten conjoined to the key or otherwise shenanigan'd.
		 *
		 * Work out how much base64 we used, then drop all non-base64
		 * chars from the beginning up to this point in the the string.
		 * Then offset in this and try to make up for missing = chars.
		 */
		var data = m[2] + (m[3] ? m[3] : '');
		var realOffset = Math.ceil(ret.consumed / 3) * 4;
		data = data.slice(0, realOffset - 2). /*JSSTYLED*/
		    replace(/[^a-zA-Z0-9+\/=]/g, '') +
		    data.slice(realOffset - 2);

		var padding = ret.consumed % 3;
		if (padding > 0 &&
		    data.slice(realOffset - 1, realOffset) !== '=')
			realOffset--;
		while (data.slice(realOffset, realOffset + 1) === '=')
			realOffset++;

		/* Finally, grab what we think is the comment & clean it up. */
		var trailer = data.slice(realOffset);
		trailer = trailer.replace(/[\r\n]/g, ' ').
		    replace(/^\s+/, '');
		if (trailer.match(/^[a-zA-Z0-9]/))
			key.comment = trailer;
	}

	return (key);
}

function write(key, options) {
	assert.object(key);
	if (!Key.isKey(key))
		throw (new Error('Must be a public key'));

	var parts = [];
	var alg = rfc4253.keyTypeToAlg(key);
	parts.push(alg);

	var buf = rfc4253.write(key);
	parts.push(buf.toString('base64'));

	if (key.comment)
		parts.push(key.comment);

	return (Buffer.from(parts.join(' ')));
}


/***/ }),

/***/ 217:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2016 Joyent, Inc.

var x509 = __nccwpck_require__(267);

module.exports = {
	read: read,
	verify: x509.verify,
	sign: x509.sign,
	write: write
};

var assert = __nccwpck_require__(6631);
var asn1 = __nccwpck_require__(970);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var utils = __nccwpck_require__(575);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var pem = __nccwpck_require__(4324);
var Identity = __nccwpck_require__(508);
var Signature = __nccwpck_require__(1394);
var Certificate = __nccwpck_require__(7406);

function read(buf, options) {
	if (typeof (buf) !== 'string') {
		assert.buffer(buf, 'buf');
		buf = buf.toString('ascii');
	}

	var lines = buf.trim().split(/[\r\n]+/g);

	var m;
	var si = -1;
	while (!m && si < lines.length) {
		m = lines[++si].match(/*JSSTYLED*/
		    /[-]+[ ]*BEGIN CERTIFICATE[ ]*[-]+/);
	}
	assert.ok(m, 'invalid PEM header');

	var m2;
	var ei = lines.length;
	while (!m2 && ei > 0) {
		m2 = lines[--ei].match(/*JSSTYLED*/
		    /[-]+[ ]*END CERTIFICATE[ ]*[-]+/);
	}
	assert.ok(m2, 'invalid PEM footer');

	lines = lines.slice(si, ei + 1);

	var headers = {};
	while (true) {
		lines = lines.slice(1);
		m = lines[0].match(/*JSSTYLED*/
		    /^([A-Za-z0-9-]+): (.+)$/);
		if (!m)
			break;
		headers[m[1].toLowerCase()] = m[2];
	}

	/* Chop off the first and last lines */
	lines = lines.slice(0, -1).join('');
	buf = Buffer.from(lines, 'base64');

	return (x509.read(buf, options));
}

function write(cert, options) {
	var dbuf = x509.write(cert, options);

	var header = 'CERTIFICATE';
	var tmp = dbuf.toString('base64');
	var len = tmp.length + (tmp.length / 64) +
	    18 + 16 + header.length*2 + 10;
	var buf = Buffer.alloc(len);
	var o = 0;
	o += buf.write('-----BEGIN ' + header + '-----\n', o);
	for (var i = 0; i < tmp.length; ) {
		var limit = i + 64;
		if (limit > tmp.length)
			limit = tmp.length;
		o += buf.write(tmp.slice(i, limit), o);
		buf[o++] = 10;
		i = limit;
	}
	o += buf.write('-----END ' + header + '-----\n', o);

	return (buf.slice(0, o));
}


/***/ }),

/***/ 267:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2017 Joyent, Inc.

module.exports = {
	read: read,
	verify: verify,
	sign: sign,
	signAsync: signAsync,
	write: write
};

var assert = __nccwpck_require__(6631);
var asn1 = __nccwpck_require__(970);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var utils = __nccwpck_require__(575);
var Key = __nccwpck_require__(6814);
var PrivateKey = __nccwpck_require__(9602);
var pem = __nccwpck_require__(4324);
var Identity = __nccwpck_require__(508);
var Signature = __nccwpck_require__(1394);
var Certificate = __nccwpck_require__(7406);
var pkcs8 = __nccwpck_require__(4173);

/*
 * This file is based on RFC5280 (X.509).
 */

/* Helper to read in a single mpint */
function readMPInt(der, nm) {
	assert.strictEqual(der.peek(), asn1.Ber.Integer,
	    nm + ' is not an Integer');
	return (utils.mpNormalize(der.readString(asn1.Ber.Integer, true)));
}

function verify(cert, key) {
	var sig = cert.signatures.x509;
	assert.object(sig, 'x509 signature');

	var algParts = sig.algo.split('-');
	if (algParts[0] !== key.type)
		return (false);

	var blob = sig.cache;
	if (blob === undefined) {
		var der = new asn1.BerWriter();
		writeTBSCert(cert, der);
		blob = der.buffer;
	}

	var verifier = key.createVerify(algParts[1]);
	verifier.write(blob);
	return (verifier.verify(sig.signature));
}

function Local(i) {
	return (asn1.Ber.Context | asn1.Ber.Constructor | i);
}

function Context(i) {
	return (asn1.Ber.Context | i);
}

var SIGN_ALGS = {
	'rsa-md5': '1.2.840.113549.1.1.4',
	'rsa-sha1': '1.2.840.113549.1.1.5',
	'rsa-sha256': '1.2.840.113549.1.1.11',
	'rsa-sha384': '1.2.840.113549.1.1.12',
	'rsa-sha512': '1.2.840.113549.1.1.13',
	'dsa-sha1': '1.2.840.10040.4.3',
	'dsa-sha256': '2.16.840.1.101.3.4.3.2',
	'ecdsa-sha1': '1.2.840.10045.4.1',
	'ecdsa-sha256': '1.2.840.10045.4.3.2',
	'ecdsa-sha384': '1.2.840.10045.4.3.3',
	'ecdsa-sha512': '1.2.840.10045.4.3.4',
	'ed25519-sha512': '1.3.101.112'
};
Object.keys(SIGN_ALGS).forEach(function (k) {
	SIGN_ALGS[SIGN_ALGS[k]] = k;
});
SIGN_ALGS['1.3.14.3.2.3'] = 'rsa-md5';
SIGN_ALGS['1.3.14.3.2.29'] = 'rsa-sha1';

var EXTS = {
	'issuerKeyId': '2.5.29.35',
	'altName': '2.5.29.17',
	'basicConstraints': '2.5.29.19',
	'keyUsage': '2.5.29.15',
	'extKeyUsage': '2.5.29.37'
};

function read(buf, options) {
	if (typeof (buf) === 'string') {
		buf = Buffer.from(buf, 'binary');
	}
	assert.buffer(buf, 'buf');

	var der = new asn1.BerReader(buf);

	der.readSequence();
	if (Math.abs(der.length - der.remain) > 1) {
		throw (new Error('DER sequence does not contain whole byte ' +
		    'stream'));
	}

	var tbsStart = der.offset;
	der.readSequence();
	var sigOffset = der.offset + der.length;
	var tbsEnd = sigOffset;

	if (der.peek() === Local(0)) {
		der.readSequence(Local(0));
		var version = der.readInt();
		assert.ok(version <= 3,
		    'only x.509 versions up to v3 supported');
	}

	var cert = {};
	cert.signatures = {};
	var sig = (cert.signatures.x509 = {});
	sig.extras = {};

	cert.serial = readMPInt(der, 'serial');

	der.readSequence();
	var after = der.offset + der.length;
	var certAlgOid = der.readOID();
	var certAlg = SIGN_ALGS[certAlgOid];
	if (certAlg === undefined)
		throw (new Error('unknown signature algorithm ' + certAlgOid));

	der._offset = after;
	cert.issuer = Identity.parseAsn1(der);

	der.readSequence();
	cert.validFrom = readDate(der);
	cert.validUntil = readDate(der);

	cert.subjects = [Identity.parseAsn1(der)];

	der.readSequence();
	after = der.offset + der.length;
	cert.subjectKey = pkcs8.readPkcs8(undefined, 'public', der);
	der._offset = after;

	/* issuerUniqueID */
	if (der.peek() === Local(1)) {
		der.readSequence(Local(1));
		sig.extras.issuerUniqueID =
		    buf.slice(der.offset, der.offset + der.length);
		der._offset += der.length;
	}

	/* subjectUniqueID */
	if (der.peek() === Local(2)) {
		der.readSequence(Local(2));
		sig.extras.subjectUniqueID =
		    buf.slice(der.offset, der.offset + der.length);
		der._offset += der.length;
	}

	/* extensions */
	if (der.peek() === Local(3)) {
		der.readSequence(Local(3));
		var extEnd = der.offset + der.length;
		der.readSequence();

		while (der.offset < extEnd)
			readExtension(cert, buf, der);

		assert.strictEqual(der.offset, extEnd);
	}

	assert.strictEqual(der.offset, sigOffset);

	der.readSequence();
	after = der.offset + der.length;
	var sigAlgOid = der.readOID();
	var sigAlg = SIGN_ALGS[sigAlgOid];
	if (sigAlg === undefined)
		throw (new Error('unknown signature algorithm ' + sigAlgOid));
	der._offset = after;

	var sigData = der.readString(asn1.Ber.BitString, true);
	if (sigData[0] === 0)
		sigData = sigData.slice(1);
	var algParts = sigAlg.split('-');

	sig.signature = Signature.parse(sigData, algParts[0], 'asn1');
	sig.signature.hashAlgorithm = algParts[1];
	sig.algo = sigAlg;
	sig.cache = buf.slice(tbsStart, tbsEnd);

	return (new Certificate(cert));
}

function readDate(der) {
	if (der.peek() === asn1.Ber.UTCTime) {
		return (utcTimeToDate(der.readString(asn1.Ber.UTCTime)));
	} else if (der.peek() === asn1.Ber.GeneralizedTime) {
		return (gTimeToDate(der.readString(asn1.Ber.GeneralizedTime)));
	} else {
		throw (new Error('Unsupported date format'));
	}
}

function writeDate(der, date) {
	if (date.getUTCFullYear() >= 2050 || date.getUTCFullYear() < 1950) {
		der.writeString(dateToGTime(date), asn1.Ber.GeneralizedTime);
	} else {
		der.writeString(dateToUTCTime(date), asn1.Ber.UTCTime);
	}
}

/* RFC5280, section 4.2.1.6 (GeneralName type) */
var ALTNAME = {
	OtherName: Local(0),
	RFC822Name: Context(1),
	DNSName: Context(2),
	X400Address: Local(3),
	DirectoryName: Local(4),
	EDIPartyName: Local(5),
	URI: Context(6),
	IPAddress: Context(7),
	OID: Context(8)
};

/* RFC5280, section 4.2.1.12 (KeyPurposeId) */
var EXTPURPOSE = {
	'serverAuth': '1.3.6.1.5.5.7.3.1',
	'clientAuth': '1.3.6.1.5.5.7.3.2',
	'codeSigning': '1.3.6.1.5.5.7.3.3',

	/* See https://github.com/joyent/oid-docs/blob/master/root.md */
	'joyentDocker': '1.3.6.1.4.1.38678.1.4.1',
	'joyentCmon': '1.3.6.1.4.1.38678.1.4.2'
};
var EXTPURPOSE_REV = {};
Object.keys(EXTPURPOSE).forEach(function (k) {
	EXTPURPOSE_REV[EXTPURPOSE[k]] = k;
});

var KEYUSEBITS = [
	'signature', 'identity', 'keyEncryption',
	'encryption', 'keyAgreement', 'ca', 'crl'
];

function readExtension(cert, buf, der) {
	der.readSequence();
	var after = der.offset + der.length;
	var extId = der.readOID();
	var id;
	var sig = cert.signatures.x509;
	if (!sig.extras.exts)
		sig.extras.exts = [];

	var critical;
	if (der.peek() === asn1.Ber.Boolean)
		critical = der.readBoolean();

	switch (extId) {
	case (EXTS.basicConstraints):
		der.readSequence(asn1.Ber.OctetString);
		der.readSequence();
		var bcEnd = der.offset + der.length;
		var ca = false;
		if (der.peek() === asn1.Ber.Boolean)
			ca = der.readBoolean();
		if (cert.purposes === undefined)
			cert.purposes = [];
		if (ca === true)
			cert.purposes.push('ca');
		var bc = { oid: extId, critical: critical };
		if (der.offset < bcEnd && der.peek() === asn1.Ber.Integer)
			bc.pathLen = der.readInt();
		sig.extras.exts.push(bc);
		break;
	case (EXTS.extKeyUsage):
		der.readSequence(asn1.Ber.OctetString);
		der.readSequence();
		if (cert.purposes === undefined)
			cert.purposes = [];
		var ekEnd = der.offset + der.length;
		while (der.offset < ekEnd) {
			var oid = der.readOID();
			cert.purposes.push(EXTPURPOSE_REV[oid] || oid);
		}
		/*
		 * This is a bit of a hack: in the case where we have a cert
		 * that's only allowed to do serverAuth or clientAuth (and not
		 * the other), we want to make sure all our Subjects are of
		 * the right type. But we already parsed our Subjects and
		 * decided if they were hosts or users earlier (since it appears
		 * first in the cert).
		 *
		 * So we go through and mutate them into the right kind here if
		 * it doesn't match. This might not be hugely beneficial, as it
		 * seems that single-purpose certs are not often seen in the
		 * wild.
		 */
		if (cert.purposes.indexOf('serverAuth') !== -1 &&
		    cert.purposes.indexOf('clientAuth') === -1) {
			cert.subjects.forEach(function (ide) {
				if (ide.type !== 'host') {
					ide.type = 'host';
					ide.hostname = ide.uid ||
					    ide.email ||
					    ide.components[0].value;
				}
			});
		} else if (cert.purposes.indexOf('clientAuth') !== -1 &&
		    cert.purposes.indexOf('serverAuth') === -1) {
			cert.subjects.forEach(function (ide) {
				if (ide.type !== 'user') {
					ide.type = 'user';
					ide.uid = ide.hostname ||
					    ide.email ||
					    ide.components[0].value;
				}
			});
		}
		sig.extras.exts.push({ oid: extId, critical: critical });
		break;
	case (EXTS.keyUsage):
		der.readSequence(asn1.Ber.OctetString);
		var bits = der.readString(asn1.Ber.BitString, true);
		var setBits = readBitField(bits, KEYUSEBITS);
		setBits.forEach(function (bit) {
			if (cert.purposes === undefined)
				cert.purposes = [];
			if (cert.purposes.indexOf(bit) === -1)
				cert.purposes.push(bit);
		});
		sig.extras.exts.push({ oid: extId, critical: critical,
		    bits: bits });
		break;
	case (EXTS.altName):
		der.readSequence(asn1.Ber.OctetString);
		der.readSequence();
		var aeEnd = der.offset + der.length;
		while (der.offset < aeEnd) {
			switch (der.peek()) {
			case ALTNAME.OtherName:
			case ALTNAME.EDIPartyName:
				der.readSequence();
				der._offset += der.length;
				break;
			case ALTNAME.OID:
				der.readOID(ALTNAME.OID);
				break;
			case ALTNAME.RFC822Name:
				/* RFC822 specifies email addresses */
				var email = der.readString(ALTNAME.RFC822Name);
				id = Identity.forEmail(email);
				if (!cert.subjects[0].equals(id))
					cert.subjects.push(id);
				break;
			case ALTNAME.DirectoryName:
				der.readSequence(ALTNAME.DirectoryName);
				id = Identity.parseAsn1(der);
				if (!cert.subjects[0].equals(id))
					cert.subjects.push(id);
				break;
			case ALTNAME.DNSName:
				var host = der.readString(
				    ALTNAME.DNSName);
				id = Identity.forHost(host);
				if (!cert.subjects[0].equals(id))
					cert.subjects.push(id);
				break;
			default:
				der.readString(der.peek());
				break;
			}
		}
		sig.extras.exts.push({ oid: extId, critical: critical });
		break;
	default:
		sig.extras.exts.push({
			oid: extId,
			critical: critical,
			data: der.readString(asn1.Ber.OctetString, true)
		});
		break;
	}

	der._offset = after;
}

var UTCTIME_RE =
    /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?Z$/;
function utcTimeToDate(t) {
	var m = t.match(UTCTIME_RE);
	assert.ok(m, 'timestamps must be in UTC');
	var d = new Date();

	var thisYear = d.getUTCFullYear();
	var century = Math.floor(thisYear / 100) * 100;

	var year = parseInt(m[1], 10);
	if (thisYear % 100 < 50 && year >= 60)
		year += (century - 1);
	else
		year += century;
	d.setUTCFullYear(year, parseInt(m[2], 10) - 1, parseInt(m[3], 10));
	d.setUTCHours(parseInt(m[4], 10), parseInt(m[5], 10));
	if (m[6] && m[6].length > 0)
		d.setUTCSeconds(parseInt(m[6], 10));
	return (d);
}

var GTIME_RE =
    /^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?Z$/;
function gTimeToDate(t) {
	var m = t.match(GTIME_RE);
	assert.ok(m);
	var d = new Date();

	d.setUTCFullYear(parseInt(m[1], 10), parseInt(m[2], 10) - 1,
	    parseInt(m[3], 10));
	d.setUTCHours(parseInt(m[4], 10), parseInt(m[5], 10));
	if (m[6] && m[6].length > 0)
		d.setUTCSeconds(parseInt(m[6], 10));
	return (d);
}

function zeroPad(n, m) {
	if (m === undefined)
		m = 2;
	var s = '' + n;
	while (s.length < m)
		s = '0' + s;
	return (s);
}

function dateToUTCTime(d) {
	var s = '';
	s += zeroPad(d.getUTCFullYear() % 100);
	s += zeroPad(d.getUTCMonth() + 1);
	s += zeroPad(d.getUTCDate());
	s += zeroPad(d.getUTCHours());
	s += zeroPad(d.getUTCMinutes());
	s += zeroPad(d.getUTCSeconds());
	s += 'Z';
	return (s);
}

function dateToGTime(d) {
	var s = '';
	s += zeroPad(d.getUTCFullYear(), 4);
	s += zeroPad(d.getUTCMonth() + 1);
	s += zeroPad(d.getUTCDate());
	s += zeroPad(d.getUTCHours());
	s += zeroPad(d.getUTCMinutes());
	s += zeroPad(d.getUTCSeconds());
	s += 'Z';
	return (s);
}

function sign(cert, key) {
	if (cert.signatures.x509 === undefined)
		cert.signatures.x509 = {};
	var sig = cert.signatures.x509;

	sig.algo = key.type + '-' + key.defaultHashAlgorithm();
	if (SIGN_ALGS[sig.algo] === undefined)
		return (false);

	var der = new asn1.BerWriter();
	writeTBSCert(cert, der);
	var blob = der.buffer;
	sig.cache = blob;

	var signer = key.createSign();
	signer.write(blob);
	cert.signatures.x509.signature = signer.sign();

	return (true);
}

function signAsync(cert, signer, done) {
	if (cert.signatures.x509 === undefined)
		cert.signatures.x509 = {};
	var sig = cert.signatures.x509;

	var der = new asn1.BerWriter();
	writeTBSCert(cert, der);
	var blob = der.buffer;
	sig.cache = blob;

	signer(blob, function (err, signature) {
		if (err) {
			done(err);
			return;
		}
		sig.algo = signature.type + '-' + signature.hashAlgorithm;
		if (SIGN_ALGS[sig.algo] === undefined) {
			done(new Error('Invalid signing algorithm "' +
			    sig.algo + '"'));
			return;
		}
		sig.signature = signature;
		done();
	});
}

function write(cert, options) {
	var sig = cert.signatures.x509;
	assert.object(sig, 'x509 signature');

	var der = new asn1.BerWriter();
	der.startSequence();
	if (sig.cache) {
		der._ensure(sig.cache.length);
		sig.cache.copy(der._buf, der._offset);
		der._offset += sig.cache.length;
	} else {
		writeTBSCert(cert, der);
	}

	der.startSequence();
	der.writeOID(SIGN_ALGS[sig.algo]);
	if (sig.algo.match(/^rsa-/))
		der.writeNull();
	der.endSequence();

	var sigData = sig.signature.toBuffer('asn1');
	var data = Buffer.alloc(sigData.length + 1);
	data[0] = 0;
	sigData.copy(data, 1);
	der.writeBuffer(data, asn1.Ber.BitString);
	der.endSequence();

	return (der.buffer);
}

function writeTBSCert(cert, der) {
	var sig = cert.signatures.x509;
	assert.object(sig, 'x509 signature');

	der.startSequence();

	der.startSequence(Local(0));
	der.writeInt(2);
	der.endSequence();

	der.writeBuffer(utils.mpNormalize(cert.serial), asn1.Ber.Integer);

	der.startSequence();
	der.writeOID(SIGN_ALGS[sig.algo]);
	if (sig.algo.match(/^rsa-/))
		der.writeNull();
	der.endSequence();

	cert.issuer.toAsn1(der);

	der.startSequence();
	writeDate(der, cert.validFrom);
	writeDate(der, cert.validUntil);
	der.endSequence();

	var subject = cert.subjects[0];
	var altNames = cert.subjects.slice(1);
	subject.toAsn1(der);

	pkcs8.writePkcs8(der, cert.subjectKey);

	if (sig.extras && sig.extras.issuerUniqueID) {
		der.writeBuffer(sig.extras.issuerUniqueID, Local(1));
	}

	if (sig.extras && sig.extras.subjectUniqueID) {
		der.writeBuffer(sig.extras.subjectUniqueID, Local(2));
	}

	if (altNames.length > 0 || subject.type === 'host' ||
	    (cert.purposes !== undefined && cert.purposes.length > 0) ||
	    (sig.extras && sig.extras.exts)) {
		der.startSequence(Local(3));
		der.startSequence();

		var exts = [];
		if (cert.purposes !== undefined && cert.purposes.length > 0) {
			exts.push({
				oid: EXTS.basicConstraints,
				critical: true
			});
			exts.push({
				oid: EXTS.keyUsage,
				critical: true
			});
			exts.push({
				oid: EXTS.extKeyUsage,
				critical: true
			});
		}
		exts.push({ oid: EXTS.altName });
		if (sig.extras && sig.extras.exts)
			exts = sig.extras.exts;

		for (var i = 0; i < exts.length; ++i) {
			der.startSequence();
			der.writeOID(exts[i].oid);

			if (exts[i].critical !== undefined)
				der.writeBoolean(exts[i].critical);

			if (exts[i].oid === EXTS.altName) {
				der.startSequence(asn1.Ber.OctetString);
				der.startSequence();
				if (subject.type === 'host') {
					der.writeString(subject.hostname,
					    Context(2));
				}
				for (var j = 0; j < altNames.length; ++j) {
					if (altNames[j].type === 'host') {
						der.writeString(
						    altNames[j].hostname,
						    ALTNAME.DNSName);
					} else if (altNames[j].type ===
					    'email') {
						der.writeString(
						    altNames[j].email,
						    ALTNAME.RFC822Name);
					} else {
						/*
						 * Encode anything else as a
						 * DN style name for now.
						 */
						der.startSequence(
						    ALTNAME.DirectoryName);
						altNames[j].toAsn1(der);
						der.endSequence();
					}
				}
				der.endSequence();
				der.endSequence();
			} else if (exts[i].oid === EXTS.basicConstraints) {
				der.startSequence(asn1.Ber.OctetString);
				der.startSequence();
				var ca = (cert.purposes.indexOf('ca') !== -1);
				var pathLen = exts[i].pathLen;
				der.writeBoolean(ca);
				if (pathLen !== undefined)
					der.writeInt(pathLen);
				der.endSequence();
				der.endSequence();
			} else if (exts[i].oid === EXTS.extKeyUsage) {
				der.startSequence(asn1.Ber.OctetString);
				der.startSequence();
				cert.purposes.forEach(function (purpose) {
					if (purpose === 'ca')
						return;
					if (KEYUSEBITS.indexOf(purpose) !== -1)
						return;
					var oid = purpose;
					if (EXTPURPOSE[purpose] !== undefined)
						oid = EXTPURPOSE[purpose];
					der.writeOID(oid);
				});
				der.endSequence();
				der.endSequence();
			} else if (exts[i].oid === EXTS.keyUsage) {
				der.startSequence(asn1.Ber.OctetString);
				/*
				 * If we parsed this certificate from a byte
				 * stream (i.e. we didn't generate it in sshpk)
				 * then we'll have a ".bits" property on the
				 * ext with the original raw byte contents.
				 *
				 * If we have this, use it here instead of
				 * regenerating it. This guarantees we output
				 * the same data we parsed, so signatures still
				 * validate.
				 */
				if (exts[i].bits !== undefined) {
					der.writeBuffer(exts[i].bits,
					    asn1.Ber.BitString);
				} else {
					var bits = writeBitField(cert.purposes,
					    KEYUSEBITS);
					der.writeBuffer(bits,
					    asn1.Ber.BitString);
				}
				der.endSequence();
			} else {
				der.writeBuffer(exts[i].data,
				    asn1.Ber.OctetString);
			}

			der.endSequence();
		}

		der.endSequence();
		der.endSequence();
	}

	der.endSequence();
}

/*
 * Reads an ASN.1 BER bitfield out of the Buffer produced by doing
 * `BerReader#readString(asn1.Ber.BitString)`. That function gives us the raw
 * contents of the BitString tag, which is a count of unused bits followed by
 * the bits as a right-padded byte string.
 *
 * `bits` is the Buffer, `bitIndex` should contain an array of string names
 * for the bits in the string, ordered starting with bit #0 in the ASN.1 spec.
 *
 * Returns an array of Strings, the names of the bits that were set to 1.
 */
function readBitField(bits, bitIndex) {
	var bitLen = 8 * (bits.length - 1) - bits[0];
	var setBits = {};
	for (var i = 0; i < bitLen; ++i) {
		var byteN = 1 + Math.floor(i / 8);
		var bit = 7 - (i % 8);
		var mask = 1 << bit;
		var bitVal = ((bits[byteN] & mask) !== 0);
		var name = bitIndex[i];
		if (bitVal && typeof (name) === 'string') {
			setBits[name] = true;
		}
	}
	return (Object.keys(setBits));
}

/*
 * `setBits` is an array of strings, containing the names for each bit that
 * sould be set to 1. `bitIndex` is same as in `readBitField()`.
 *
 * Returns a Buffer, ready to be written out with `BerWriter#writeString()`.
 */
function writeBitField(setBits, bitIndex) {
	var bitLen = bitIndex.length;
	var blen = Math.ceil(bitLen / 8);
	var unused = blen * 8 - bitLen;
	var bits = Buffer.alloc(1 + blen); // zero-filled
	bits[0] = unused;
	for (var i = 0; i < bitLen; ++i) {
		var byteN = 1 + Math.floor(i / 8);
		var bit = 7 - (i % 8);
		var mask = 1 << bit;
		var name = bitIndex[i];
		if (name === undefined)
			continue;
		var bitVal = (setBits.indexOf(name) !== -1);
		if (bitVal) {
			bits[byteN] |= mask;
		}
	}
	return (bits);
}


/***/ }),

/***/ 508:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2017 Joyent, Inc.

module.exports = Identity;

var assert = __nccwpck_require__(6631);
var algs = __nccwpck_require__(6126);
var crypto = __nccwpck_require__(6417);
var Fingerprint = __nccwpck_require__(3079);
var Signature = __nccwpck_require__(1394);
var errs = __nccwpck_require__(7979);
var util = __nccwpck_require__(1669);
var utils = __nccwpck_require__(575);
var asn1 = __nccwpck_require__(970);
var Buffer = __nccwpck_require__(5118).Buffer;

/*JSSTYLED*/
var DNS_NAME_RE = /^([*]|[a-z0-9][a-z0-9\-]{0,62})(?:\.([*]|[a-z0-9][a-z0-9\-]{0,62}))*$/i;

var oids = {};
oids.cn = '2.5.4.3';
oids.o = '2.5.4.10';
oids.ou = '2.5.4.11';
oids.l = '2.5.4.7';
oids.s = '2.5.4.8';
oids.c = '2.5.4.6';
oids.sn = '2.5.4.4';
oids.postalCode = '2.5.4.17';
oids.serialNumber = '2.5.4.5';
oids.street = '2.5.4.9';
oids.x500UniqueIdentifier = '2.5.4.45';
oids.role = '2.5.4.72';
oids.telephoneNumber = '2.5.4.20';
oids.description = '2.5.4.13';
oids.dc = '0.9.2342.19200300.100.1.25';
oids.uid = '0.9.2342.19200300.100.1.1';
oids.mail = '0.9.2342.19200300.100.1.3';
oids.title = '2.5.4.12';
oids.gn = '2.5.4.42';
oids.initials = '2.5.4.43';
oids.pseudonym = '2.5.4.65';
oids.emailAddress = '1.2.840.113549.1.9.1';

var unoids = {};
Object.keys(oids).forEach(function (k) {
	unoids[oids[k]] = k;
});

function Identity(opts) {
	var self = this;
	assert.object(opts, 'options');
	assert.arrayOfObject(opts.components, 'options.components');
	this.components = opts.components;
	this.componentLookup = {};
	this.components.forEach(function (c) {
		if (c.name && !c.oid)
			c.oid = oids[c.name];
		if (c.oid && !c.name)
			c.name = unoids[c.oid];
		if (self.componentLookup[c.name] === undefined)
			self.componentLookup[c.name] = [];
		self.componentLookup[c.name].push(c);
	});
	if (this.componentLookup.cn && this.componentLookup.cn.length > 0) {
		this.cn = this.componentLookup.cn[0].value;
	}
	assert.optionalString(opts.type, 'options.type');
	if (opts.type === undefined) {
		if (this.components.length === 1 &&
		    this.componentLookup.cn &&
		    this.componentLookup.cn.length === 1 &&
		    this.componentLookup.cn[0].value.match(DNS_NAME_RE)) {
			this.type = 'host';
			this.hostname = this.componentLookup.cn[0].value;

		} else if (this.componentLookup.dc &&
		    this.components.length === this.componentLookup.dc.length) {
			this.type = 'host';
			this.hostname = this.componentLookup.dc.map(
			    function (c) {
				return (c.value);
			}).join('.');

		} else if (this.componentLookup.uid &&
		    this.components.length ===
		    this.componentLookup.uid.length) {
			this.type = 'user';
			this.uid = this.componentLookup.uid[0].value;

		} else if (this.componentLookup.cn &&
		    this.componentLookup.cn.length === 1 &&
		    this.componentLookup.cn[0].value.match(DNS_NAME_RE)) {
			this.type = 'host';
			this.hostname = this.componentLookup.cn[0].value;

		} else if (this.componentLookup.uid &&
		    this.componentLookup.uid.length === 1) {
			this.type = 'user';
			this.uid = this.componentLookup.uid[0].value;

		} else if (this.componentLookup.mail &&
		    this.componentLookup.mail.length === 1) {
			this.type = 'email';
			this.email = this.componentLookup.mail[0].value;

		} else if (this.componentLookup.cn &&
		    this.componentLookup.cn.length === 1) {
			this.type = 'user';
			this.uid = this.componentLookup.cn[0].value;

		} else {
			this.type = 'unknown';
		}
	} else {
		this.type = opts.type;
		if (this.type === 'host')
			this.hostname = opts.hostname;
		else if (this.type === 'user')
			this.uid = opts.uid;
		else if (this.type === 'email')
			this.email = opts.email;
		else
			throw (new Error('Unknown type ' + this.type));
	}
}

Identity.prototype.toString = function () {
	return (this.components.map(function (c) {
		var n = c.name.toUpperCase();
		/*JSSTYLED*/
		n = n.replace(/=/g, '\\=');
		var v = c.value;
		/*JSSTYLED*/
		v = v.replace(/,/g, '\\,');
		return (n + '=' + v);
	}).join(', '));
};

Identity.prototype.get = function (name, asArray) {
	assert.string(name, 'name');
	var arr = this.componentLookup[name];
	if (arr === undefined || arr.length === 0)
		return (undefined);
	if (!asArray && arr.length > 1)
		throw (new Error('Multiple values for attribute ' + name));
	if (!asArray)
		return (arr[0].value);
	return (arr.map(function (c) {
		return (c.value);
	}));
};

Identity.prototype.toArray = function (idx) {
	return (this.components.map(function (c) {
		return ({
			name: c.name,
			value: c.value
		});
	}));
};

/*
 * These are from X.680 -- PrintableString allowed chars are in section 37.4
 * table 8. Spec for IA5Strings is "1,6 + SPACE + DEL" where 1 refers to
 * ISO IR #001 (standard ASCII control characters) and 6 refers to ISO IR #006
 * (the basic ASCII character set).
 */
/* JSSTYLED */
var NOT_PRINTABLE = /[^a-zA-Z0-9 '(),+.\/:=?-]/;
/* JSSTYLED */
var NOT_IA5 = /[^\x00-\x7f]/;

Identity.prototype.toAsn1 = function (der, tag) {
	der.startSequence(tag);
	this.components.forEach(function (c) {
		der.startSequence(asn1.Ber.Constructor | asn1.Ber.Set);
		der.startSequence();
		der.writeOID(c.oid);
		/*
		 * If we fit in a PrintableString, use that. Otherwise use an
		 * IA5String or UTF8String.
		 *
		 * If this identity was parsed from a DN, use the ASN.1 types
		 * from the original representation (otherwise this might not
		 * be a full match for the original in some validators).
		 */
		if (c.asn1type === asn1.Ber.Utf8String ||
		    c.value.match(NOT_IA5)) {
			var v = Buffer.from(c.value, 'utf8');
			der.writeBuffer(v, asn1.Ber.Utf8String);

		} else if (c.asn1type === asn1.Ber.IA5String ||
		    c.value.match(NOT_PRINTABLE)) {
			der.writeString(c.value, asn1.Ber.IA5String);

		} else {
			var type = asn1.Ber.PrintableString;
			if (c.asn1type !== undefined)
				type = c.asn1type;
			der.writeString(c.value, type);
		}
		der.endSequence();
		der.endSequence();
	});
	der.endSequence();
};

function globMatch(a, b) {
	if (a === '**' || b === '**')
		return (true);
	var aParts = a.split('.');
	var bParts = b.split('.');
	if (aParts.length !== bParts.length)
		return (false);
	for (var i = 0; i < aParts.length; ++i) {
		if (aParts[i] === '*' || bParts[i] === '*')
			continue;
		if (aParts[i] !== bParts[i])
			return (false);
	}
	return (true);
}

Identity.prototype.equals = function (other) {
	if (!Identity.isIdentity(other, [1, 0]))
		return (false);
	if (other.components.length !== this.components.length)
		return (false);
	for (var i = 0; i < this.components.length; ++i) {
		if (this.components[i].oid !== other.components[i].oid)
			return (false);
		if (!globMatch(this.components[i].value,
		    other.components[i].value)) {
			return (false);
		}
	}
	return (true);
};

Identity.forHost = function (hostname) {
	assert.string(hostname, 'hostname');
	return (new Identity({
		type: 'host',
		hostname: hostname,
		components: [ { name: 'cn', value: hostname } ]
	}));
};

Identity.forUser = function (uid) {
	assert.string(uid, 'uid');
	return (new Identity({
		type: 'user',
		uid: uid,
		components: [ { name: 'uid', value: uid } ]
	}));
};

Identity.forEmail = function (email) {
	assert.string(email, 'email');
	return (new Identity({
		type: 'email',
		email: email,
		components: [ { name: 'mail', value: email } ]
	}));
};

Identity.parseDN = function (dn) {
	assert.string(dn, 'dn');
	var parts = [''];
	var idx = 0;
	var rem = dn;
	while (rem.length > 0) {
		var m;
		/*JSSTYLED*/
		if ((m = /^,/.exec(rem)) !== null) {
			parts[++idx] = '';
			rem = rem.slice(m[0].length);
		/*JSSTYLED*/
		} else if ((m = /^\\,/.exec(rem)) !== null) {
			parts[idx] += ',';
			rem = rem.slice(m[0].length);
		/*JSSTYLED*/
		} else if ((m = /^\\./.exec(rem)) !== null) {
			parts[idx] += m[0];
			rem = rem.slice(m[0].length);
		/*JSSTYLED*/
		} else if ((m = /^[^\\,]+/.exec(rem)) !== null) {
			parts[idx] += m[0];
			rem = rem.slice(m[0].length);
		} else {
			throw (new Error('Failed to parse DN'));
		}
	}
	var cmps = parts.map(function (c) {
		c = c.trim();
		var eqPos = c.indexOf('=');
		while (eqPos > 0 && c.charAt(eqPos - 1) === '\\')
			eqPos = c.indexOf('=', eqPos + 1);
		if (eqPos === -1) {
			throw (new Error('Failed to parse DN'));
		}
		/*JSSTYLED*/
		var name = c.slice(0, eqPos).toLowerCase().replace(/\\=/g, '=');
		var value = c.slice(eqPos + 1);
		return ({ name: name, value: value });
	});
	return (new Identity({ components: cmps }));
};

Identity.fromArray = function (components) {
	assert.arrayOfObject(components, 'components');
	components.forEach(function (cmp) {
		assert.object(cmp, 'component');
		assert.string(cmp.name, 'component.name');
		if (!Buffer.isBuffer(cmp.value) &&
		    !(typeof (cmp.value) === 'string')) {
			throw (new Error('Invalid component value'));
		}
	});
	return (new Identity({ components: components }));
};

Identity.parseAsn1 = function (der, top) {
	var components = [];
	der.readSequence(top);
	var end = der.offset + der.length;
	while (der.offset < end) {
		der.readSequence(asn1.Ber.Constructor | asn1.Ber.Set);
		var after = der.offset + der.length;
		der.readSequence();
		var oid = der.readOID();
		var type = der.peek();
		var value;
		switch (type) {
		case asn1.Ber.PrintableString:
		case asn1.Ber.IA5String:
		case asn1.Ber.OctetString:
		case asn1.Ber.T61String:
			value = der.readString(type);
			break;
		case asn1.Ber.Utf8String:
			value = der.readString(type, true);
			value = value.toString('utf8');
			break;
		case asn1.Ber.CharacterString:
		case asn1.Ber.BMPString:
			value = der.readString(type, true);
			value = value.toString('utf16le');
			break;
		default:
			throw (new Error('Unknown asn1 type ' + type));
		}
		components.push({ oid: oid, asn1type: type, value: value });
		der._offset = after;
	}
	der._offset = end;
	return (new Identity({
		components: components
	}));
};

Identity.isIdentity = function (obj, ver) {
	return (utils.isCompatible(obj, Identity, ver));
};

/*
 * API versions for Identity:
 * [1,0] -- initial ver
 */
Identity.prototype._sshpkApiVersion = [1, 0];

Identity._oldVersionDetect = function (obj) {
	return ([1, 0]);
};


/***/ }),

/***/ 7022:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

var Key = __nccwpck_require__(6814);
var Fingerprint = __nccwpck_require__(3079);
var Signature = __nccwpck_require__(1394);
var PrivateKey = __nccwpck_require__(9602);
var Certificate = __nccwpck_require__(7406);
var Identity = __nccwpck_require__(508);
var errs = __nccwpck_require__(7979);

module.exports = {
	/* top-level classes */
	Key: Key,
	parseKey: Key.parse,
	Fingerprint: Fingerprint,
	parseFingerprint: Fingerprint.parse,
	Signature: Signature,
	parseSignature: Signature.parse,
	PrivateKey: PrivateKey,
	parsePrivateKey: PrivateKey.parse,
	generatePrivateKey: PrivateKey.generate,
	Certificate: Certificate,
	parseCertificate: Certificate.parse,
	createSelfSignedCertificate: Certificate.createSelfSigned,
	createCertificate: Certificate.create,
	Identity: Identity,
	identityFromDN: Identity.parseDN,
	identityForHost: Identity.forHost,
	identityForUser: Identity.forUser,
	identityForEmail: Identity.forEmail,
	identityFromArray: Identity.fromArray,

	/* errors */
	FingerprintFormatError: errs.FingerprintFormatError,
	InvalidAlgorithmError: errs.InvalidAlgorithmError,
	KeyParseError: errs.KeyParseError,
	SignatureParseError: errs.SignatureParseError,
	KeyEncryptedError: errs.KeyEncryptedError,
	CertificateParseError: errs.CertificateParseError
};


/***/ }),

/***/ 6814:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2018 Joyent, Inc.

module.exports = Key;

var assert = __nccwpck_require__(6631);
var algs = __nccwpck_require__(6126);
var crypto = __nccwpck_require__(6417);
var Fingerprint = __nccwpck_require__(3079);
var Signature = __nccwpck_require__(1394);
var DiffieHellman = __nccwpck_require__(7602).DiffieHellman;
var errs = __nccwpck_require__(7979);
var utils = __nccwpck_require__(575);
var PrivateKey = __nccwpck_require__(9602);
var edCompat;

try {
	edCompat = __nccwpck_require__(4694);
} catch (e) {
	/* Just continue through, and bail out if we try to use it. */
}

var InvalidAlgorithmError = errs.InvalidAlgorithmError;
var KeyParseError = errs.KeyParseError;

var formats = {};
formats['auto'] = __nccwpck_require__(8243);
formats['pem'] = __nccwpck_require__(4324);
formats['pkcs1'] = __nccwpck_require__(9367);
formats['pkcs8'] = __nccwpck_require__(4173);
formats['rfc4253'] = __nccwpck_require__(8688);
formats['ssh'] = __nccwpck_require__(8927);
formats['ssh-private'] = __nccwpck_require__(3923);
formats['openssh'] = formats['ssh-private'];
formats['dnssec'] = __nccwpck_require__(3561);
formats['putty'] = __nccwpck_require__(974);
formats['ppk'] = formats['putty'];

function Key(opts) {
	assert.object(opts, 'options');
	assert.arrayOfObject(opts.parts, 'options.parts');
	assert.string(opts.type, 'options.type');
	assert.optionalString(opts.comment, 'options.comment');

	var algInfo = algs.info[opts.type];
	if (typeof (algInfo) !== 'object')
		throw (new InvalidAlgorithmError(opts.type));

	var partLookup = {};
	for (var i = 0; i < opts.parts.length; ++i) {
		var part = opts.parts[i];
		partLookup[part.name] = part;
	}

	this.type = opts.type;
	this.parts = opts.parts;
	this.part = partLookup;
	this.comment = undefined;
	this.source = opts.source;

	/* for speeding up hashing/fingerprint operations */
	this._rfc4253Cache = opts._rfc4253Cache;
	this._hashCache = {};

	var sz;
	this.curve = undefined;
	if (this.type === 'ecdsa') {
		var curve = this.part.curve.data.toString();
		this.curve = curve;
		sz = algs.curves[curve].size;
	} else if (this.type === 'ed25519' || this.type === 'curve25519') {
		sz = 256;
		this.curve = 'curve25519';
	} else {
		var szPart = this.part[algInfo.sizePart];
		sz = szPart.data.length;
		sz = sz * 8 - utils.countZeros(szPart.data);
	}
	this.size = sz;
}

Key.formats = formats;

Key.prototype.toBuffer = function (format, options) {
	if (format === undefined)
		format = 'ssh';
	assert.string(format, 'format');
	assert.object(formats[format], 'formats[format]');
	assert.optionalObject(options, 'options');

	if (format === 'rfc4253') {
		if (this._rfc4253Cache === undefined)
			this._rfc4253Cache = formats['rfc4253'].write(this);
		return (this._rfc4253Cache);
	}

	return (formats[format].write(this, options));
};

Key.prototype.toString = function (format, options) {
	return (this.toBuffer(format, options).toString());
};

Key.prototype.hash = function (algo, type) {
	assert.string(algo, 'algorithm');
	assert.optionalString(type, 'type');
	if (type === undefined)
		type = 'ssh';
	algo = algo.toLowerCase();
	if (algs.hashAlgs[algo] === undefined)
		throw (new InvalidAlgorithmError(algo));

	var cacheKey = algo + '||' + type;
	if (this._hashCache[cacheKey])
		return (this._hashCache[cacheKey]);

	var buf;
	if (type === 'ssh') {
		buf = this.toBuffer('rfc4253');
	} else if (type === 'spki') {
		buf = formats.pkcs8.pkcs8ToBuffer(this);
	} else {
		throw (new Error('Hash type ' + type + ' not supported'));
	}
	var hash = crypto.createHash(algo).update(buf).digest();
	this._hashCache[cacheKey] = hash;
	return (hash);
};

Key.prototype.fingerprint = function (algo, type) {
	if (algo === undefined)
		algo = 'sha256';
	if (type === undefined)
		type = 'ssh';
	assert.string(algo, 'algorithm');
	assert.string(type, 'type');
	var opts = {
		type: 'key',
		hash: this.hash(algo, type),
		algorithm: algo,
		hashType: type
	};
	return (new Fingerprint(opts));
};

Key.prototype.defaultHashAlgorithm = function () {
	var hashAlgo = 'sha1';
	if (this.type === 'rsa')
		hashAlgo = 'sha256';
	if (this.type === 'dsa' && this.size > 1024)
		hashAlgo = 'sha256';
	if (this.type === 'ed25519')
		hashAlgo = 'sha512';
	if (this.type === 'ecdsa') {
		if (this.size <= 256)
			hashAlgo = 'sha256';
		else if (this.size <= 384)
			hashAlgo = 'sha384';
		else
			hashAlgo = 'sha512';
	}
	return (hashAlgo);
};

Key.prototype.createVerify = function (hashAlgo) {
	if (hashAlgo === undefined)
		hashAlgo = this.defaultHashAlgorithm();
	assert.string(hashAlgo, 'hash algorithm');

	/* ED25519 is not supported by OpenSSL, use a javascript impl. */
	if (this.type === 'ed25519' && edCompat !== undefined)
		return (new edCompat.Verifier(this, hashAlgo));
	if (this.type === 'curve25519')
		throw (new Error('Curve25519 keys are not suitable for ' +
		    'signing or verification'));

	var v, nm, err;
	try {
		nm = hashAlgo.toUpperCase();
		v = crypto.createVerify(nm);
	} catch (e) {
		err = e;
	}
	if (v === undefined || (err instanceof Error &&
	    err.message.match(/Unknown message digest/))) {
		nm = 'RSA-';
		nm += hashAlgo.toUpperCase();
		v = crypto.createVerify(nm);
	}
	assert.ok(v, 'failed to create verifier');
	var oldVerify = v.verify.bind(v);
	var key = this.toBuffer('pkcs8');
	var curve = this.curve;
	var self = this;
	v.verify = function (signature, fmt) {
		if (Signature.isSignature(signature, [2, 0])) {
			if (signature.type !== self.type)
				return (false);
			if (signature.hashAlgorithm &&
			    signature.hashAlgorithm !== hashAlgo)
				return (false);
			if (signature.curve && self.type === 'ecdsa' &&
			    signature.curve !== curve)
				return (false);
			return (oldVerify(key, signature.toBuffer('asn1')));

		} else if (typeof (signature) === 'string' ||
		    Buffer.isBuffer(signature)) {
			return (oldVerify(key, signature, fmt));

		/*
		 * Avoid doing this on valid arguments, walking the prototype
		 * chain can be quite slow.
		 */
		} else if (Signature.isSignature(signature, [1, 0])) {
			throw (new Error('signature was created by too old ' +
			    'a version of sshpk and cannot be verified'));

		} else {
			throw (new TypeError('signature must be a string, ' +
			    'Buffer, or Signature object'));
		}
	};
	return (v);
};

Key.prototype.createDiffieHellman = function () {
	if (this.type === 'rsa')
		throw (new Error('RSA keys do not support Diffie-Hellman'));

	return (new DiffieHellman(this));
};
Key.prototype.createDH = Key.prototype.createDiffieHellman;

Key.parse = function (data, format, options) {
	if (typeof (data) !== 'string')
		assert.buffer(data, 'data');
	if (format === undefined)
		format = 'auto';
	assert.string(format, 'format');
	if (typeof (options) === 'string')
		options = { filename: options };
	assert.optionalObject(options, 'options');
	if (options === undefined)
		options = {};
	assert.optionalString(options.filename, 'options.filename');
	if (options.filename === undefined)
		options.filename = '(unnamed)';

	assert.object(formats[format], 'formats[format]');

	try {
		var k = formats[format].read(data, options);
		if (k instanceof PrivateKey)
			k = k.toPublic();
		if (!k.comment)
			k.comment = options.filename;
		return (k);
	} catch (e) {
		if (e.name === 'KeyEncryptedError')
			throw (e);
		throw (new KeyParseError(options.filename, format, e));
	}
};

Key.isKey = function (obj, ver) {
	return (utils.isCompatible(obj, Key, ver));
};

/*
 * API versions for Key:
 * [1,0] -- initial ver, may take Signature for createVerify or may not
 * [1,1] -- added pkcs1, pkcs8 formats
 * [1,2] -- added auto, ssh-private, openssh formats
 * [1,3] -- added defaultHashAlgorithm
 * [1,4] -- added ed support, createDH
 * [1,5] -- first explicitly tagged version
 * [1,6] -- changed ed25519 part names
 * [1,7] -- spki hash types
 */
Key.prototype._sshpkApiVersion = [1, 7];

Key._oldVersionDetect = function (obj) {
	assert.func(obj.toBuffer);
	assert.func(obj.fingerprint);
	if (obj.createDH)
		return ([1, 4]);
	if (obj.defaultHashAlgorithm)
		return ([1, 3]);
	if (obj.formats['auto'])
		return ([1, 2]);
	if (obj.formats['pkcs1'])
		return ([1, 1]);
	return ([1, 0]);
};


/***/ }),

/***/ 9602:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2017 Joyent, Inc.

module.exports = PrivateKey;

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var crypto = __nccwpck_require__(6417);
var Fingerprint = __nccwpck_require__(3079);
var Signature = __nccwpck_require__(1394);
var errs = __nccwpck_require__(7979);
var util = __nccwpck_require__(1669);
var utils = __nccwpck_require__(575);
var dhe = __nccwpck_require__(7602);
var generateECDSA = dhe.generateECDSA;
var generateED25519 = dhe.generateED25519;
var edCompat = __nccwpck_require__(4694);
var nacl = __nccwpck_require__(8729);

var Key = __nccwpck_require__(6814);

var InvalidAlgorithmError = errs.InvalidAlgorithmError;
var KeyParseError = errs.KeyParseError;
var KeyEncryptedError = errs.KeyEncryptedError;

var formats = {};
formats['auto'] = __nccwpck_require__(8243);
formats['pem'] = __nccwpck_require__(4324);
formats['pkcs1'] = __nccwpck_require__(9367);
formats['pkcs8'] = __nccwpck_require__(4173);
formats['rfc4253'] = __nccwpck_require__(8688);
formats['ssh-private'] = __nccwpck_require__(3923);
formats['openssh'] = formats['ssh-private'];
formats['ssh'] = formats['ssh-private'];
formats['dnssec'] = __nccwpck_require__(3561);

function PrivateKey(opts) {
	assert.object(opts, 'options');
	Key.call(this, opts);

	this._pubCache = undefined;
}
util.inherits(PrivateKey, Key);

PrivateKey.formats = formats;

PrivateKey.prototype.toBuffer = function (format, options) {
	if (format === undefined)
		format = 'pkcs1';
	assert.string(format, 'format');
	assert.object(formats[format], 'formats[format]');
	assert.optionalObject(options, 'options');

	return (formats[format].write(this, options));
};

PrivateKey.prototype.hash = function (algo, type) {
	return (this.toPublic().hash(algo, type));
};

PrivateKey.prototype.fingerprint = function (algo, type) {
	return (this.toPublic().fingerprint(algo, type));
};

PrivateKey.prototype.toPublic = function () {
	if (this._pubCache)
		return (this._pubCache);

	var algInfo = algs.info[this.type];
	var pubParts = [];
	for (var i = 0; i < algInfo.parts.length; ++i) {
		var p = algInfo.parts[i];
		pubParts.push(this.part[p]);
	}

	this._pubCache = new Key({
		type: this.type,
		source: this,
		parts: pubParts
	});
	if (this.comment)
		this._pubCache.comment = this.comment;
	return (this._pubCache);
};

PrivateKey.prototype.derive = function (newType) {
	assert.string(newType, 'type');
	var priv, pub, pair;

	if (this.type === 'ed25519' && newType === 'curve25519') {
		priv = this.part.k.data;
		if (priv[0] === 0x00)
			priv = priv.slice(1);

		pair = nacl.box.keyPair.fromSecretKey(new Uint8Array(priv));
		pub = Buffer.from(pair.publicKey);

		return (new PrivateKey({
			type: 'curve25519',
			parts: [
				{ name: 'A', data: utils.mpNormalize(pub) },
				{ name: 'k', data: utils.mpNormalize(priv) }
			]
		}));
	} else if (this.type === 'curve25519' && newType === 'ed25519') {
		priv = this.part.k.data;
		if (priv[0] === 0x00)
			priv = priv.slice(1);

		pair = nacl.sign.keyPair.fromSeed(new Uint8Array(priv));
		pub = Buffer.from(pair.publicKey);

		return (new PrivateKey({
			type: 'ed25519',
			parts: [
				{ name: 'A', data: utils.mpNormalize(pub) },
				{ name: 'k', data: utils.mpNormalize(priv) }
			]
		}));
	}
	throw (new Error('Key derivation not supported from ' + this.type +
	    ' to ' + newType));
};

PrivateKey.prototype.createVerify = function (hashAlgo) {
	return (this.toPublic().createVerify(hashAlgo));
};

PrivateKey.prototype.createSign = function (hashAlgo) {
	if (hashAlgo === undefined)
		hashAlgo = this.defaultHashAlgorithm();
	assert.string(hashAlgo, 'hash algorithm');

	/* ED25519 is not supported by OpenSSL, use a javascript impl. */
	if (this.type === 'ed25519' && edCompat !== undefined)
		return (new edCompat.Signer(this, hashAlgo));
	if (this.type === 'curve25519')
		throw (new Error('Curve25519 keys are not suitable for ' +
		    'signing or verification'));

	var v, nm, err;
	try {
		nm = hashAlgo.toUpperCase();
		v = crypto.createSign(nm);
	} catch (e) {
		err = e;
	}
	if (v === undefined || (err instanceof Error &&
	    err.message.match(/Unknown message digest/))) {
		nm = 'RSA-';
		nm += hashAlgo.toUpperCase();
		v = crypto.createSign(nm);
	}
	assert.ok(v, 'failed to create verifier');
	var oldSign = v.sign.bind(v);
	var key = this.toBuffer('pkcs1');
	var type = this.type;
	var curve = this.curve;
	v.sign = function () {
		var sig = oldSign(key);
		if (typeof (sig) === 'string')
			sig = Buffer.from(sig, 'binary');
		sig = Signature.parse(sig, type, 'asn1');
		sig.hashAlgorithm = hashAlgo;
		sig.curve = curve;
		return (sig);
	};
	return (v);
};

PrivateKey.parse = function (data, format, options) {
	if (typeof (data) !== 'string')
		assert.buffer(data, 'data');
	if (format === undefined)
		format = 'auto';
	assert.string(format, 'format');
	if (typeof (options) === 'string')
		options = { filename: options };
	assert.optionalObject(options, 'options');
	if (options === undefined)
		options = {};
	assert.optionalString(options.filename, 'options.filename');
	if (options.filename === undefined)
		options.filename = '(unnamed)';

	assert.object(formats[format], 'formats[format]');

	try {
		var k = formats[format].read(data, options);
		assert.ok(k instanceof PrivateKey, 'key is not a private key');
		if (!k.comment)
			k.comment = options.filename;
		return (k);
	} catch (e) {
		if (e.name === 'KeyEncryptedError')
			throw (e);
		throw (new KeyParseError(options.filename, format, e));
	}
};

PrivateKey.isPrivateKey = function (obj, ver) {
	return (utils.isCompatible(obj, PrivateKey, ver));
};

PrivateKey.generate = function (type, options) {
	if (options === undefined)
		options = {};
	assert.object(options, 'options');

	switch (type) {
	case 'ecdsa':
		if (options.curve === undefined)
			options.curve = 'nistp256';
		assert.string(options.curve, 'options.curve');
		return (generateECDSA(options.curve));
	case 'ed25519':
		return (generateED25519());
	default:
		throw (new Error('Key generation not supported with key ' +
		    'type "' + type + '"'));
	}
};

/*
 * API versions for PrivateKey:
 * [1,0] -- initial ver
 * [1,1] -- added auto, pkcs[18], openssh/ssh-private formats
 * [1,2] -- added defaultHashAlgorithm
 * [1,3] -- added derive, ed, createDH
 * [1,4] -- first tagged version
 * [1,5] -- changed ed25519 part names and format
 * [1,6] -- type arguments for hash() and fingerprint()
 */
PrivateKey.prototype._sshpkApiVersion = [1, 6];

PrivateKey._oldVersionDetect = function (obj) {
	assert.func(obj.toPublic);
	assert.func(obj.createSign);
	if (obj.derive)
		return ([1, 3]);
	if (obj.defaultHashAlgorithm)
		return ([1, 2]);
	if (obj.formats['auto'])
		return ([1, 1]);
	return ([1, 0]);
};


/***/ }),

/***/ 1394:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

module.exports = Signature;

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var algs = __nccwpck_require__(6126);
var crypto = __nccwpck_require__(6417);
var errs = __nccwpck_require__(7979);
var utils = __nccwpck_require__(575);
var asn1 = __nccwpck_require__(970);
var SSHBuffer = __nccwpck_require__(5621);

var InvalidAlgorithmError = errs.InvalidAlgorithmError;
var SignatureParseError = errs.SignatureParseError;

function Signature(opts) {
	assert.object(opts, 'options');
	assert.arrayOfObject(opts.parts, 'options.parts');
	assert.string(opts.type, 'options.type');

	var partLookup = {};
	for (var i = 0; i < opts.parts.length; ++i) {
		var part = opts.parts[i];
		partLookup[part.name] = part;
	}

	this.type = opts.type;
	this.hashAlgorithm = opts.hashAlgo;
	this.curve = opts.curve;
	this.parts = opts.parts;
	this.part = partLookup;
}

Signature.prototype.toBuffer = function (format) {
	if (format === undefined)
		format = 'asn1';
	assert.string(format, 'format');

	var buf;
	var stype = 'ssh-' + this.type;

	switch (this.type) {
	case 'rsa':
		switch (this.hashAlgorithm) {
		case 'sha256':
			stype = 'rsa-sha2-256';
			break;
		case 'sha512':
			stype = 'rsa-sha2-512';
			break;
		case 'sha1':
		case undefined:
			break;
		default:
			throw (new Error('SSH signature ' +
			    'format does not support hash ' +
			    'algorithm ' + this.hashAlgorithm));
		}
		if (format === 'ssh') {
			buf = new SSHBuffer({});
			buf.writeString(stype);
			buf.writePart(this.part.sig);
			return (buf.toBuffer());
		} else {
			return (this.part.sig.data);
		}
		break;

	case 'ed25519':
		if (format === 'ssh') {
			buf = new SSHBuffer({});
			buf.writeString(stype);
			buf.writePart(this.part.sig);
			return (buf.toBuffer());
		} else {
			return (this.part.sig.data);
		}
		break;

	case 'dsa':
	case 'ecdsa':
		var r, s;
		if (format === 'asn1') {
			var der = new asn1.BerWriter();
			der.startSequence();
			r = utils.mpNormalize(this.part.r.data);
			s = utils.mpNormalize(this.part.s.data);
			der.writeBuffer(r, asn1.Ber.Integer);
			der.writeBuffer(s, asn1.Ber.Integer);
			der.endSequence();
			return (der.buffer);
		} else if (format === 'ssh' && this.type === 'dsa') {
			buf = new SSHBuffer({});
			buf.writeString('ssh-dss');
			r = this.part.r.data;
			if (r.length > 20 && r[0] === 0x00)
				r = r.slice(1);
			s = this.part.s.data;
			if (s.length > 20 && s[0] === 0x00)
				s = s.slice(1);
			if ((this.hashAlgorithm &&
			    this.hashAlgorithm !== 'sha1') ||
			    r.length + s.length !== 40) {
				throw (new Error('OpenSSH only supports ' +
				    'DSA signatures with SHA1 hash'));
			}
			buf.writeBuffer(Buffer.concat([r, s]));
			return (buf.toBuffer());
		} else if (format === 'ssh' && this.type === 'ecdsa') {
			var inner = new SSHBuffer({});
			r = this.part.r.data;
			inner.writeBuffer(r);
			inner.writePart(this.part.s);

			buf = new SSHBuffer({});
			/* XXX: find a more proper way to do this? */
			var curve;
			if (r[0] === 0x00)
				r = r.slice(1);
			var sz = r.length * 8;
			if (sz === 256)
				curve = 'nistp256';
			else if (sz === 384)
				curve = 'nistp384';
			else if (sz === 528)
				curve = 'nistp521';
			buf.writeString('ecdsa-sha2-' + curve);
			buf.writeBuffer(inner.toBuffer());
			return (buf.toBuffer());
		}
		throw (new Error('Invalid signature format'));
	default:
		throw (new Error('Invalid signature data'));
	}
};

Signature.prototype.toString = function (format) {
	assert.optionalString(format, 'format');
	return (this.toBuffer(format).toString('base64'));
};

Signature.parse = function (data, type, format) {
	if (typeof (data) === 'string')
		data = Buffer.from(data, 'base64');
	assert.buffer(data, 'data');
	assert.string(format, 'format');
	assert.string(type, 'type');

	var opts = {};
	opts.type = type.toLowerCase();
	opts.parts = [];

	try {
		assert.ok(data.length > 0, 'signature must not be empty');
		switch (opts.type) {
		case 'rsa':
			return (parseOneNum(data, type, format, opts));
		case 'ed25519':
			return (parseOneNum(data, type, format, opts));

		case 'dsa':
		case 'ecdsa':
			if (format === 'asn1')
				return (parseDSAasn1(data, type, format, opts));
			else if (opts.type === 'dsa')
				return (parseDSA(data, type, format, opts));
			else
				return (parseECDSA(data, type, format, opts));

		default:
			throw (new InvalidAlgorithmError(type));
		}

	} catch (e) {
		if (e instanceof InvalidAlgorithmError)
			throw (e);
		throw (new SignatureParseError(type, format, e));
	}
};

function parseOneNum(data, type, format, opts) {
	if (format === 'ssh') {
		try {
			var buf = new SSHBuffer({buffer: data});
			var head = buf.readString();
		} catch (e) {
			/* fall through */
		}
		if (buf !== undefined) {
			var msg = 'SSH signature does not match expected ' +
			    'type (expected ' + type + ', got ' + head + ')';
			switch (head) {
			case 'ssh-rsa':
				assert.strictEqual(type, 'rsa', msg);
				opts.hashAlgo = 'sha1';
				break;
			case 'rsa-sha2-256':
				assert.strictEqual(type, 'rsa', msg);
				opts.hashAlgo = 'sha256';
				break;
			case 'rsa-sha2-512':
				assert.strictEqual(type, 'rsa', msg);
				opts.hashAlgo = 'sha512';
				break;
			case 'ssh-ed25519':
				assert.strictEqual(type, 'ed25519', msg);
				opts.hashAlgo = 'sha512';
				break;
			default:
				throw (new Error('Unknown SSH signature ' +
				    'type: ' + head));
			}
			var sig = buf.readPart();
			assert.ok(buf.atEnd(), 'extra trailing bytes');
			sig.name = 'sig';
			opts.parts.push(sig);
			return (new Signature(opts));
		}
	}
	opts.parts.push({name: 'sig', data: data});
	return (new Signature(opts));
}

function parseDSAasn1(data, type, format, opts) {
	var der = new asn1.BerReader(data);
	der.readSequence();
	var r = der.readString(asn1.Ber.Integer, true);
	var s = der.readString(asn1.Ber.Integer, true);

	opts.parts.push({name: 'r', data: utils.mpNormalize(r)});
	opts.parts.push({name: 's', data: utils.mpNormalize(s)});

	return (new Signature(opts));
}

function parseDSA(data, type, format, opts) {
	if (data.length != 40) {
		var buf = new SSHBuffer({buffer: data});
		var d = buf.readBuffer();
		if (d.toString('ascii') === 'ssh-dss')
			d = buf.readBuffer();
		assert.ok(buf.atEnd(), 'extra trailing bytes');
		assert.strictEqual(d.length, 40, 'invalid inner length');
		data = d;
	}
	opts.parts.push({name: 'r', data: data.slice(0, 20)});
	opts.parts.push({name: 's', data: data.slice(20, 40)});
	return (new Signature(opts));
}

function parseECDSA(data, type, format, opts) {
	var buf = new SSHBuffer({buffer: data});

	var r, s;
	var inner = buf.readBuffer();
	var stype = inner.toString('ascii');
	if (stype.slice(0, 6) === 'ecdsa-') {
		var parts = stype.split('-');
		assert.strictEqual(parts[0], 'ecdsa');
		assert.strictEqual(parts[1], 'sha2');
		opts.curve = parts[2];
		switch (opts.curve) {
		case 'nistp256':
			opts.hashAlgo = 'sha256';
			break;
		case 'nistp384':
			opts.hashAlgo = 'sha384';
			break;
		case 'nistp521':
			opts.hashAlgo = 'sha512';
			break;
		default:
			throw (new Error('Unsupported ECDSA curve: ' +
			    opts.curve));
		}
		inner = buf.readBuffer();
		assert.ok(buf.atEnd(), 'extra trailing bytes on outer');
		buf = new SSHBuffer({buffer: inner});
		r = buf.readPart();
	} else {
		r = {data: inner};
	}

	s = buf.readPart();
	assert.ok(buf.atEnd(), 'extra trailing bytes');

	r.name = 'r';
	s.name = 's';

	opts.parts.push(r);
	opts.parts.push(s);
	return (new Signature(opts));
}

Signature.isSignature = function (obj, ver) {
	return (utils.isCompatible(obj, Signature, ver));
};

/*
 * API versions for Signature:
 * [1,0] -- initial ver
 * [2,0] -- support for rsa in full ssh format, compat with sshpk-agent
 *          hashAlgorithm property
 * [2,1] -- first tagged version
 */
Signature.prototype._sshpkApiVersion = [2, 1];

Signature._oldVersionDetect = function (obj) {
	assert.func(obj.toBuffer);
	if (obj.hasOwnProperty('hashAlgorithm'))
		return ([2, 0]);
	return ([1, 0]);
};


/***/ }),

/***/ 5621:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

module.exports = SSHBuffer;

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;

function SSHBuffer(opts) {
	assert.object(opts, 'options');
	if (opts.buffer !== undefined)
		assert.buffer(opts.buffer, 'options.buffer');

	this._size = opts.buffer ? opts.buffer.length : 1024;
	this._buffer = opts.buffer || Buffer.alloc(this._size);
	this._offset = 0;
}

SSHBuffer.prototype.toBuffer = function () {
	return (this._buffer.slice(0, this._offset));
};

SSHBuffer.prototype.atEnd = function () {
	return (this._offset >= this._buffer.length);
};

SSHBuffer.prototype.remainder = function () {
	return (this._buffer.slice(this._offset));
};

SSHBuffer.prototype.skip = function (n) {
	this._offset += n;
};

SSHBuffer.prototype.expand = function () {
	this._size *= 2;
	var buf = Buffer.alloc(this._size);
	this._buffer.copy(buf, 0);
	this._buffer = buf;
};

SSHBuffer.prototype.readPart = function () {
	return ({data: this.readBuffer()});
};

SSHBuffer.prototype.readBuffer = function () {
	var len = this._buffer.readUInt32BE(this._offset);
	this._offset += 4;
	assert.ok(this._offset + len <= this._buffer.length,
	    'length out of bounds at +0x' + this._offset.toString(16) +
	    ' (data truncated?)');
	var buf = this._buffer.slice(this._offset, this._offset + len);
	this._offset += len;
	return (buf);
};

SSHBuffer.prototype.readString = function () {
	return (this.readBuffer().toString());
};

SSHBuffer.prototype.readCString = function () {
	var offset = this._offset;
	while (offset < this._buffer.length &&
	    this._buffer[offset] !== 0x00)
		offset++;
	assert.ok(offset < this._buffer.length, 'c string does not terminate');
	var str = this._buffer.slice(this._offset, offset).toString();
	this._offset = offset + 1;
	return (str);
};

SSHBuffer.prototype.readInt = function () {
	var v = this._buffer.readUInt32BE(this._offset);
	this._offset += 4;
	return (v);
};

SSHBuffer.prototype.readInt64 = function () {
	assert.ok(this._offset + 8 < this._buffer.length,
	    'buffer not long enough to read Int64');
	var v = this._buffer.slice(this._offset, this._offset + 8);
	this._offset += 8;
	return (v);
};

SSHBuffer.prototype.readChar = function () {
	var v = this._buffer[this._offset++];
	return (v);
};

SSHBuffer.prototype.writeBuffer = function (buf) {
	while (this._offset + 4 + buf.length > this._size)
		this.expand();
	this._buffer.writeUInt32BE(buf.length, this._offset);
	this._offset += 4;
	buf.copy(this._buffer, this._offset);
	this._offset += buf.length;
};

SSHBuffer.prototype.writeString = function (str) {
	this.writeBuffer(Buffer.from(str, 'utf8'));
};

SSHBuffer.prototype.writeCString = function (str) {
	while (this._offset + 1 + str.length > this._size)
		this.expand();
	this._buffer.write(str, this._offset);
	this._offset += str.length;
	this._buffer[this._offset++] = 0;
};

SSHBuffer.prototype.writeInt = function (v) {
	while (this._offset + 4 > this._size)
		this.expand();
	this._buffer.writeUInt32BE(v, this._offset);
	this._offset += 4;
};

SSHBuffer.prototype.writeInt64 = function (v) {
	assert.buffer(v, 'value');
	if (v.length > 8) {
		var lead = v.slice(0, v.length - 8);
		for (var i = 0; i < lead.length; ++i) {
			assert.strictEqual(lead[i], 0,
			    'must fit in 64 bits of precision');
		}
		v = v.slice(v.length - 8, v.length);
	}
	while (this._offset + 8 > this._size)
		this.expand();
	v.copy(this._buffer, this._offset);
	this._offset += 8;
};

SSHBuffer.prototype.writeChar = function (v) {
	while (this._offset + 1 > this._size)
		this.expand();
	this._buffer[this._offset++] = v;
};

SSHBuffer.prototype.writePart = function (p) {
	this.writeBuffer(p.data);
};

SSHBuffer.prototype.write = function (buf) {
	while (this._offset + buf.length > this._size)
		this.expand();
	buf.copy(this._buffer, this._offset);
	this._offset += buf.length;
};


/***/ }),

/***/ 575:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

// Copyright 2015 Joyent, Inc.

module.exports = {
	bufferSplit: bufferSplit,
	addRSAMissing: addRSAMissing,
	calculateDSAPublic: calculateDSAPublic,
	calculateED25519Public: calculateED25519Public,
	calculateX25519Public: calculateX25519Public,
	mpNormalize: mpNormalize,
	mpDenormalize: mpDenormalize,
	ecNormalize: ecNormalize,
	countZeros: countZeros,
	assertCompatible: assertCompatible,
	isCompatible: isCompatible,
	opensslKeyDeriv: opensslKeyDeriv,
	opensshCipherInfo: opensshCipherInfo,
	publicFromPrivateECDSA: publicFromPrivateECDSA,
	zeroPadToLength: zeroPadToLength,
	writeBitString: writeBitString,
	readBitString: readBitString,
	pbkdf2: pbkdf2
};

var assert = __nccwpck_require__(6631);
var Buffer = __nccwpck_require__(5118).Buffer;
var PrivateKey = __nccwpck_require__(9602);
var Key = __nccwpck_require__(6814);
var crypto = __nccwpck_require__(6417);
var algs = __nccwpck_require__(6126);
var asn1 = __nccwpck_require__(970);

var ec = __nccwpck_require__(3943);
var jsbn = __nccwpck_require__(5587).BigInteger;
var nacl = __nccwpck_require__(8729);

var MAX_CLASS_DEPTH = 3;

function isCompatible(obj, klass, needVer) {
	if (obj === null || typeof (obj) !== 'object')
		return (false);
	if (needVer === undefined)
		needVer = klass.prototype._sshpkApiVersion;
	if (obj instanceof klass &&
	    klass.prototype._sshpkApiVersion[0] == needVer[0])
		return (true);
	var proto = Object.getPrototypeOf(obj);
	var depth = 0;
	while (proto.constructor.name !== klass.name) {
		proto = Object.getPrototypeOf(proto);
		if (!proto || ++depth > MAX_CLASS_DEPTH)
			return (false);
	}
	if (proto.constructor.name !== klass.name)
		return (false);
	var ver = proto._sshpkApiVersion;
	if (ver === undefined)
		ver = klass._oldVersionDetect(obj);
	if (ver[0] != needVer[0] || ver[1] < needVer[1])
		return (false);
	return (true);
}

function assertCompatible(obj, klass, needVer, name) {
	if (name === undefined)
		name = 'object';
	assert.ok(obj, name + ' must not be null');
	assert.object(obj, name + ' must be an object');
	if (needVer === undefined)
		needVer = klass.prototype._sshpkApiVersion;
	if (obj instanceof klass &&
	    klass.prototype._sshpkApiVersion[0] == needVer[0])
		return;
	var proto = Object.getPrototypeOf(obj);
	var depth = 0;
	while (proto.constructor.name !== klass.name) {
		proto = Object.getPrototypeOf(proto);
		assert.ok(proto && ++depth <= MAX_CLASS_DEPTH,
		    name + ' must be a ' + klass.name + ' instance');
	}
	assert.strictEqual(proto.constructor.name, klass.name,
	    name + ' must be a ' + klass.name + ' instance');
	var ver = proto._sshpkApiVersion;
	if (ver === undefined)
		ver = klass._oldVersionDetect(obj);
	assert.ok(ver[0] == needVer[0] && ver[1] >= needVer[1],
	    name + ' must be compatible with ' + klass.name + ' klass ' +
	    'version ' + needVer[0] + '.' + needVer[1]);
}

var CIPHER_LEN = {
	'des-ede3-cbc': { key: 24, iv: 8 },
	'aes-128-cbc': { key: 16, iv: 16 },
	'aes-256-cbc': { key: 32, iv: 16 }
};
var PKCS5_SALT_LEN = 8;

function opensslKeyDeriv(cipher, salt, passphrase, count) {
	assert.buffer(salt, 'salt');
	assert.buffer(passphrase, 'passphrase');
	assert.number(count, 'iteration count');

	var clen = CIPHER_LEN[cipher];
	assert.object(clen, 'supported cipher');

	salt = salt.slice(0, PKCS5_SALT_LEN);

	var D, D_prev, bufs;
	var material = Buffer.alloc(0);
	while (material.length < clen.key + clen.iv) {
		bufs = [];
		if (D_prev)
			bufs.push(D_prev);
		bufs.push(passphrase);
		bufs.push(salt);
		D = Buffer.concat(bufs);
		for (var j = 0; j < count; ++j)
			D = crypto.createHash('md5').update(D).digest();
		material = Buffer.concat([material, D]);
		D_prev = D;
	}

	return ({
	    key: material.slice(0, clen.key),
	    iv: material.slice(clen.key, clen.key + clen.iv)
	});
}

/* See: RFC2898 */
function pbkdf2(hashAlg, salt, iterations, size, passphrase) {
	var hkey = Buffer.alloc(salt.length + 4);
	salt.copy(hkey);

	var gen = 0, ts = [];
	var i = 1;
	while (gen < size) {
		var t = T(i++);
		gen += t.length;
		ts.push(t);
	}
	return (Buffer.concat(ts).slice(0, size));

	function T(I) {
		hkey.writeUInt32BE(I, hkey.length - 4);

		var hmac = crypto.createHmac(hashAlg, passphrase);
		hmac.update(hkey);

		var Ti = hmac.digest();
		var Uc = Ti;
		var c = 1;
		while (c++ < iterations) {
			hmac = crypto.createHmac(hashAlg, passphrase);
			hmac.update(Uc);
			Uc = hmac.digest();
			for (var x = 0; x < Ti.length; ++x)
				Ti[x] ^= Uc[x];
		}
		return (Ti);
	}
}

/* Count leading zero bits on a buffer */
function countZeros(buf) {
	var o = 0, obit = 8;
	while (o < buf.length) {
		var mask = (1 << obit);
		if ((buf[o] & mask) === mask)
			break;
		obit--;
		if (obit < 0) {
			o++;
			obit = 8;
		}
	}
	return (o*8 + (8 - obit) - 1);
}

function bufferSplit(buf, chr) {
	assert.buffer(buf);
	assert.string(chr);

	var parts = [];
	var lastPart = 0;
	var matches = 0;
	for (var i = 0; i < buf.length; ++i) {
		if (buf[i] === chr.charCodeAt(matches))
			++matches;
		else if (buf[i] === chr.charCodeAt(0))
			matches = 1;
		else
			matches = 0;

		if (matches >= chr.length) {
			var newPart = i + 1;
			parts.push(buf.slice(lastPart, newPart - matches));
			lastPart = newPart;
			matches = 0;
		}
	}
	if (lastPart <= buf.length)
		parts.push(buf.slice(lastPart, buf.length));

	return (parts);
}

function ecNormalize(buf, addZero) {
	assert.buffer(buf);
	if (buf[0] === 0x00 && buf[1] === 0x04) {
		if (addZero)
			return (buf);
		return (buf.slice(1));
	} else if (buf[0] === 0x04) {
		if (!addZero)
			return (buf);
	} else {
		while (buf[0] === 0x00)
			buf = buf.slice(1);
		if (buf[0] === 0x02 || buf[0] === 0x03)
			throw (new Error('Compressed elliptic curve points ' +
			    'are not supported'));
		if (buf[0] !== 0x04)
			throw (new Error('Not a valid elliptic curve point'));
		if (!addZero)
			return (buf);
	}
	var b = Buffer.alloc(buf.length + 1);
	b[0] = 0x0;
	buf.copy(b, 1);
	return (b);
}

function readBitString(der, tag) {
	if (tag === undefined)
		tag = asn1.Ber.BitString;
	var buf = der.readString(tag, true);
	assert.strictEqual(buf[0], 0x00, 'bit strings with unused bits are ' +
	    'not supported (0x' + buf[0].toString(16) + ')');
	return (buf.slice(1));
}

function writeBitString(der, buf, tag) {
	if (tag === undefined)
		tag = asn1.Ber.BitString;
	var b = Buffer.alloc(buf.length + 1);
	b[0] = 0x00;
	buf.copy(b, 1);
	der.writeBuffer(b, tag);
}

function mpNormalize(buf) {
	assert.buffer(buf);
	while (buf.length > 1 && buf[0] === 0x00 && (buf[1] & 0x80) === 0x00)
		buf = buf.slice(1);
	if ((buf[0] & 0x80) === 0x80) {
		var b = Buffer.alloc(buf.length + 1);
		b[0] = 0x00;
		buf.copy(b, 1);
		buf = b;
	}
	return (buf);
}

function mpDenormalize(buf) {
	assert.buffer(buf);
	while (buf.length > 1 && buf[0] === 0x00)
		buf = buf.slice(1);
	return (buf);
}

function zeroPadToLength(buf, len) {
	assert.buffer(buf);
	assert.number(len);
	while (buf.length > len) {
		assert.equal(buf[0], 0x00);
		buf = buf.slice(1);
	}
	while (buf.length < len) {
		var b = Buffer.alloc(buf.length + 1);
		b[0] = 0x00;
		buf.copy(b, 1);
		buf = b;
	}
	return (buf);
}

function bigintToMpBuf(bigint) {
	var buf = Buffer.from(bigint.toByteArray());
	buf = mpNormalize(buf);
	return (buf);
}

function calculateDSAPublic(g, p, x) {
	assert.buffer(g);
	assert.buffer(p);
	assert.buffer(x);
	g = new jsbn(g);
	p = new jsbn(p);
	x = new jsbn(x);
	var y = g.modPow(x, p);
	var ybuf = bigintToMpBuf(y);
	return (ybuf);
}

function calculateED25519Public(k) {
	assert.buffer(k);

	var kp = nacl.sign.keyPair.fromSeed(new Uint8Array(k));
	return (Buffer.from(kp.publicKey));
}

function calculateX25519Public(k) {
	assert.buffer(k);

	var kp = nacl.box.keyPair.fromSeed(new Uint8Array(k));
	return (Buffer.from(kp.publicKey));
}

function addRSAMissing(key) {
	assert.object(key);
	assertCompatible(key, PrivateKey, [1, 1]);

	var d = new jsbn(key.part.d.data);
	var buf;

	if (!key.part.dmodp) {
		var p = new jsbn(key.part.p.data);
		var dmodp = d.mod(p.subtract(1));

		buf = bigintToMpBuf(dmodp);
		key.part.dmodp = {name: 'dmodp', data: buf};
		key.parts.push(key.part.dmodp);
	}
	if (!key.part.dmodq) {
		var q = new jsbn(key.part.q.data);
		var dmodq = d.mod(q.subtract(1));

		buf = bigintToMpBuf(dmodq);
		key.part.dmodq = {name: 'dmodq', data: buf};
		key.parts.push(key.part.dmodq);
	}
}

function publicFromPrivateECDSA(curveName, priv) {
	assert.string(curveName, 'curveName');
	assert.buffer(priv);
	var params = algs.curves[curveName];
	var p = new jsbn(params.p);
	var a = new jsbn(params.a);
	var b = new jsbn(params.b);
	var curve = new ec.ECCurveFp(p, a, b);
	var G = curve.decodePointHex(params.G.toString('hex'));

	var d = new jsbn(mpNormalize(priv));
	var pub = G.multiply(d);
	pub = Buffer.from(curve.encodePointHex(pub), 'hex');

	var parts = [];
	parts.push({name: 'curve', data: Buffer.from(curveName)});
	parts.push({name: 'Q', data: pub});

	var key = new Key({type: 'ecdsa', curve: curve, parts: parts});
	return (key);
}

function opensshCipherInfo(cipher) {
	var inf = {};
	switch (cipher) {
	case '3des-cbc':
		inf.keySize = 24;
		inf.blockSize = 8;
		inf.opensslName = 'des-ede3-cbc';
		break;
	case 'blowfish-cbc':
		inf.keySize = 16;
		inf.blockSize = 8;
		inf.opensslName = 'bf-cbc';
		break;
	case 'aes128-cbc':
	case 'aes128-ctr':
	case 'aes128-gcm@openssh.com':
		inf.keySize = 16;
		inf.blockSize = 16;
		inf.opensslName = 'aes-128-' + cipher.slice(7, 10);
		break;
	case 'aes192-cbc':
	case 'aes192-ctr':
	case 'aes192-gcm@openssh.com':
		inf.keySize = 24;
		inf.blockSize = 16;
		inf.opensslName = 'aes-192-' + cipher.slice(7, 10);
		break;
	case 'aes256-cbc':
	case 'aes256-ctr':
	case 'aes256-gcm@openssh.com':
		inf.keySize = 32;
		inf.blockSize = 16;
		inf.opensslName = 'aes-256-' + cipher.slice(7, 10);
		break;
	default:
		throw (new Error(
		    'Unsupported openssl cipher "' + cipher + '"'));
	}
	return (inf);
}


/***/ }),

/***/ 8729:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

(function(nacl) {
'use strict';

// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
// Public domain.
//
// Implementation derived from TweetNaCl version 20140427.
// See for details: http://tweetnacl.cr.yp.to/

var gf = function(init) {
  var i, r = new Float64Array(16);
  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
  return r;
};

//  Pluggable, initialized in high-level API below.
var randombytes = function(/* x, n */) { throw new Error('no PRNG'); };

var _0 = new Uint8Array(16);
var _9 = new Uint8Array(32); _9[0] = 9;

var gf0 = gf(),
    gf1 = gf([1]),
    _121665 = gf([0xdb41, 1]),
    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

function ts64(x, i, h, l) {
  x[i]   = (h >> 24) & 0xff;
  x[i+1] = (h >> 16) & 0xff;
  x[i+2] = (h >>  8) & 0xff;
  x[i+3] = h & 0xff;
  x[i+4] = (l >> 24)  & 0xff;
  x[i+5] = (l >> 16)  & 0xff;
  x[i+6] = (l >>  8)  & 0xff;
  x[i+7] = l & 0xff;
}

function vn(x, xi, y, yi, n) {
  var i,d = 0;
  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
  return (1 & ((d - 1) >>> 8)) - 1;
}

function crypto_verify_16(x, xi, y, yi) {
  return vn(x,xi,y,yi,16);
}

function crypto_verify_32(x, xi, y, yi) {
  return vn(x,xi,y,yi,32);
}

function core_salsa20(o, p, k, c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }
   x0 =  x0 +  j0 | 0;
   x1 =  x1 +  j1 | 0;
   x2 =  x2 +  j2 | 0;
   x3 =  x3 +  j3 | 0;
   x4 =  x4 +  j4 | 0;
   x5 =  x5 +  j5 | 0;
   x6 =  x6 +  j6 | 0;
   x7 =  x7 +  j7 | 0;
   x8 =  x8 +  j8 | 0;
   x9 =  x9 +  j9 | 0;
  x10 = x10 + j10 | 0;
  x11 = x11 + j11 | 0;
  x12 = x12 + j12 | 0;
  x13 = x13 + j13 | 0;
  x14 = x14 + j14 | 0;
  x15 = x15 + j15 | 0;

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x1 >>>  0 & 0xff;
  o[ 5] = x1 >>>  8 & 0xff;
  o[ 6] = x1 >>> 16 & 0xff;
  o[ 7] = x1 >>> 24 & 0xff;

  o[ 8] = x2 >>>  0 & 0xff;
  o[ 9] = x2 >>>  8 & 0xff;
  o[10] = x2 >>> 16 & 0xff;
  o[11] = x2 >>> 24 & 0xff;

  o[12] = x3 >>>  0 & 0xff;
  o[13] = x3 >>>  8 & 0xff;
  o[14] = x3 >>> 16 & 0xff;
  o[15] = x3 >>> 24 & 0xff;

  o[16] = x4 >>>  0 & 0xff;
  o[17] = x4 >>>  8 & 0xff;
  o[18] = x4 >>> 16 & 0xff;
  o[19] = x4 >>> 24 & 0xff;

  o[20] = x5 >>>  0 & 0xff;
  o[21] = x5 >>>  8 & 0xff;
  o[22] = x5 >>> 16 & 0xff;
  o[23] = x5 >>> 24 & 0xff;

  o[24] = x6 >>>  0 & 0xff;
  o[25] = x6 >>>  8 & 0xff;
  o[26] = x6 >>> 16 & 0xff;
  o[27] = x6 >>> 24 & 0xff;

  o[28] = x7 >>>  0 & 0xff;
  o[29] = x7 >>>  8 & 0xff;
  o[30] = x7 >>> 16 & 0xff;
  o[31] = x7 >>> 24 & 0xff;

  o[32] = x8 >>>  0 & 0xff;
  o[33] = x8 >>>  8 & 0xff;
  o[34] = x8 >>> 16 & 0xff;
  o[35] = x8 >>> 24 & 0xff;

  o[36] = x9 >>>  0 & 0xff;
  o[37] = x9 >>>  8 & 0xff;
  o[38] = x9 >>> 16 & 0xff;
  o[39] = x9 >>> 24 & 0xff;

  o[40] = x10 >>>  0 & 0xff;
  o[41] = x10 >>>  8 & 0xff;
  o[42] = x10 >>> 16 & 0xff;
  o[43] = x10 >>> 24 & 0xff;

  o[44] = x11 >>>  0 & 0xff;
  o[45] = x11 >>>  8 & 0xff;
  o[46] = x11 >>> 16 & 0xff;
  o[47] = x11 >>> 24 & 0xff;

  o[48] = x12 >>>  0 & 0xff;
  o[49] = x12 >>>  8 & 0xff;
  o[50] = x12 >>> 16 & 0xff;
  o[51] = x12 >>> 24 & 0xff;

  o[52] = x13 >>>  0 & 0xff;
  o[53] = x13 >>>  8 & 0xff;
  o[54] = x13 >>> 16 & 0xff;
  o[55] = x13 >>> 24 & 0xff;

  o[56] = x14 >>>  0 & 0xff;
  o[57] = x14 >>>  8 & 0xff;
  o[58] = x14 >>> 16 & 0xff;
  o[59] = x14 >>> 24 & 0xff;

  o[60] = x15 >>>  0 & 0xff;
  o[61] = x15 >>>  8 & 0xff;
  o[62] = x15 >>> 16 & 0xff;
  o[63] = x15 >>> 24 & 0xff;
}

function core_hsalsa20(o,p,k,c) {
  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
      x15 = j15, u;

  for (var i = 0; i < 20; i += 2) {
    u = x0 + x12 | 0;
    x4 ^= u<<7 | u>>>(32-7);
    u = x4 + x0 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x4 | 0;
    x12 ^= u<<13 | u>>>(32-13);
    u = x12 + x8 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x1 | 0;
    x9 ^= u<<7 | u>>>(32-7);
    u = x9 + x5 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x9 | 0;
    x1 ^= u<<13 | u>>>(32-13);
    u = x1 + x13 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x6 | 0;
    x14 ^= u<<7 | u>>>(32-7);
    u = x14 + x10 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x14 | 0;
    x6 ^= u<<13 | u>>>(32-13);
    u = x6 + x2 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x11 | 0;
    x3 ^= u<<7 | u>>>(32-7);
    u = x3 + x15 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x3 | 0;
    x11 ^= u<<13 | u>>>(32-13);
    u = x11 + x7 | 0;
    x15 ^= u<<18 | u>>>(32-18);

    u = x0 + x3 | 0;
    x1 ^= u<<7 | u>>>(32-7);
    u = x1 + x0 | 0;
    x2 ^= u<<9 | u>>>(32-9);
    u = x2 + x1 | 0;
    x3 ^= u<<13 | u>>>(32-13);
    u = x3 + x2 | 0;
    x0 ^= u<<18 | u>>>(32-18);

    u = x5 + x4 | 0;
    x6 ^= u<<7 | u>>>(32-7);
    u = x6 + x5 | 0;
    x7 ^= u<<9 | u>>>(32-9);
    u = x7 + x6 | 0;
    x4 ^= u<<13 | u>>>(32-13);
    u = x4 + x7 | 0;
    x5 ^= u<<18 | u>>>(32-18);

    u = x10 + x9 | 0;
    x11 ^= u<<7 | u>>>(32-7);
    u = x11 + x10 | 0;
    x8 ^= u<<9 | u>>>(32-9);
    u = x8 + x11 | 0;
    x9 ^= u<<13 | u>>>(32-13);
    u = x9 + x8 | 0;
    x10 ^= u<<18 | u>>>(32-18);

    u = x15 + x14 | 0;
    x12 ^= u<<7 | u>>>(32-7);
    u = x12 + x15 | 0;
    x13 ^= u<<9 | u>>>(32-9);
    u = x13 + x12 | 0;
    x14 ^= u<<13 | u>>>(32-13);
    u = x14 + x13 | 0;
    x15 ^= u<<18 | u>>>(32-18);
  }

  o[ 0] = x0 >>>  0 & 0xff;
  o[ 1] = x0 >>>  8 & 0xff;
  o[ 2] = x0 >>> 16 & 0xff;
  o[ 3] = x0 >>> 24 & 0xff;

  o[ 4] = x5 >>>  0 & 0xff;
  o[ 5] = x5 >>>  8 & 0xff;
  o[ 6] = x5 >>> 16 & 0xff;
  o[ 7] = x5 >>> 24 & 0xff;

  o[ 8] = x10 >>>  0 & 0xff;
  o[ 9] = x10 >>>  8 & 0xff;
  o[10] = x10 >>> 16 & 0xff;
  o[11] = x10 >>> 24 & 0xff;

  o[12] = x15 >>>  0 & 0xff;
  o[13] = x15 >>>  8 & 0xff;
  o[14] = x15 >>> 16 & 0xff;
  o[15] = x15 >>> 24 & 0xff;

  o[16] = x6 >>>  0 & 0xff;
  o[17] = x6 >>>  8 & 0xff;
  o[18] = x6 >>> 16 & 0xff;
  o[19] = x6 >>> 24 & 0xff;

  o[20] = x7 >>>  0 & 0xff;
  o[21] = x7 >>>  8 & 0xff;
  o[22] = x7 >>> 16 & 0xff;
  o[23] = x7 >>> 24 & 0xff;

  o[24] = x8 >>>  0 & 0xff;
  o[25] = x8 >>>  8 & 0xff;
  o[26] = x8 >>> 16 & 0xff;
  o[27] = x8 >>> 24 & 0xff;

  o[28] = x9 >>>  0 & 0xff;
  o[29] = x9 >>>  8 & 0xff;
  o[30] = x9 >>> 16 & 0xff;
  o[31] = x9 >>> 24 & 0xff;
}

function crypto_core_salsa20(out,inp,k,c) {
  core_salsa20(out,inp,k,c);
}

function crypto_core_hsalsa20(out,inp,k,c) {
  core_hsalsa20(out,inp,k,c);
}

var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
            // "expand 32-byte k"

function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
    mpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
  }
  return 0;
}

function crypto_stream_salsa20(c,cpos,b,n,k) {
  var z = new Uint8Array(16), x = new Uint8Array(64);
  var u, i;
  for (i = 0; i < 16; i++) z[i] = 0;
  for (i = 0; i < 8; i++) z[i] = n[i];
  while (b >= 64) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
    u = 1;
    for (i = 8; i < 16; i++) {
      u = u + (z[i] & 0xff) | 0;
      z[i] = u & 0xff;
      u >>>= 8;
    }
    b -= 64;
    cpos += 64;
  }
  if (b > 0) {
    crypto_core_salsa20(x,z,k,sigma);
    for (i = 0; i < b; i++) c[cpos+i] = x[i];
  }
  return 0;
}

function crypto_stream(c,cpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20(c,cpos,d,sn,s);
}

function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
  var s = new Uint8Array(32);
  crypto_core_hsalsa20(s,n,k,sigma);
  var sn = new Uint8Array(8);
  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
}

/*
* Port of Andrew Moon's Poly1305-donna-16. Public domain.
* https://github.com/floodyberry/poly1305-donna
*/

var poly1305 = function(key) {
  this.buffer = new Uint8Array(16);
  this.r = new Uint16Array(10);
  this.h = new Uint16Array(10);
  this.pad = new Uint16Array(8);
  this.leftover = 0;
  this.fin = 0;

  var t0, t1, t2, t3, t4, t5, t6, t7;

  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
  this.r[9] = ((t7 >>>  5)) & 0x007f;

  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
};

poly1305.prototype.blocks = function(m, mpos, bytes) {
  var hibit = this.fin ? 0 : (1 << 11);
  var t0, t1, t2, t3, t4, t5, t6, t7, c;
  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

  var h0 = this.h[0],
      h1 = this.h[1],
      h2 = this.h[2],
      h3 = this.h[3],
      h4 = this.h[4],
      h5 = this.h[5],
      h6 = this.h[6],
      h7 = this.h[7],
      h8 = this.h[8],
      h9 = this.h[9];

  var r0 = this.r[0],
      r1 = this.r[1],
      r2 = this.r[2],
      r3 = this.r[3],
      r4 = this.r[4],
      r5 = this.r[5],
      r6 = this.r[6],
      r7 = this.r[7],
      r8 = this.r[8],
      r9 = this.r[9];

  while (bytes >= 16) {
    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
    h5 += ((t4 >>>  1)) & 0x1fff;
    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
    h9 += ((t7 >>> 5)) | hibit;

    c = 0;

    d0 = c;
    d0 += h0 * r0;
    d0 += h1 * (5 * r9);
    d0 += h2 * (5 * r8);
    d0 += h3 * (5 * r7);
    d0 += h4 * (5 * r6);
    c = (d0 >>> 13); d0 &= 0x1fff;
    d0 += h5 * (5 * r5);
    d0 += h6 * (5 * r4);
    d0 += h7 * (5 * r3);
    d0 += h8 * (5 * r2);
    d0 += h9 * (5 * r1);
    c += (d0 >>> 13); d0 &= 0x1fff;

    d1 = c;
    d1 += h0 * r1;
    d1 += h1 * r0;
    d1 += h2 * (5 * r9);
    d1 += h3 * (5 * r8);
    d1 += h4 * (5 * r7);
    c = (d1 >>> 13); d1 &= 0x1fff;
    d1 += h5 * (5 * r6);
    d1 += h6 * (5 * r5);
    d1 += h7 * (5 * r4);
    d1 += h8 * (5 * r3);
    d1 += h9 * (5 * r2);
    c += (d1 >>> 13); d1 &= 0x1fff;

    d2 = c;
    d2 += h0 * r2;
    d2 += h1 * r1;
    d2 += h2 * r0;
    d2 += h3 * (5 * r9);
    d2 += h4 * (5 * r8);
    c = (d2 >>> 13); d2 &= 0x1fff;
    d2 += h5 * (5 * r7);
    d2 += h6 * (5 * r6);
    d2 += h7 * (5 * r5);
    d2 += h8 * (5 * r4);
    d2 += h9 * (5 * r3);
    c += (d2 >>> 13); d2 &= 0x1fff;

    d3 = c;
    d3 += h0 * r3;
    d3 += h1 * r2;
    d3 += h2 * r1;
    d3 += h3 * r0;
    d3 += h4 * (5 * r9);
    c = (d3 >>> 13); d3 &= 0x1fff;
    d3 += h5 * (5 * r8);
    d3 += h6 * (5 * r7);
    d3 += h7 * (5 * r6);
    d3 += h8 * (5 * r5);
    d3 += h9 * (5 * r4);
    c += (d3 >>> 13); d3 &= 0x1fff;

    d4 = c;
    d4 += h0 * r4;
    d4 += h1 * r3;
    d4 += h2 * r2;
    d4 += h3 * r1;
    d4 += h4 * r0;
    c = (d4 >>> 13); d4 &= 0x1fff;
    d4 += h5 * (5 * r9);
    d4 += h6 * (5 * r8);
    d4 += h7 * (5 * r7);
    d4 += h8 * (5 * r6);
    d4 += h9 * (5 * r5);
    c += (d4 >>> 13); d4 &= 0x1fff;

    d5 = c;
    d5 += h0 * r5;
    d5 += h1 * r4;
    d5 += h2 * r3;
    d5 += h3 * r2;
    d5 += h4 * r1;
    c = (d5 >>> 13); d5 &= 0x1fff;
    d5 += h5 * r0;
    d5 += h6 * (5 * r9);
    d5 += h7 * (5 * r8);
    d5 += h8 * (5 * r7);
    d5 += h9 * (5 * r6);
    c += (d5 >>> 13); d5 &= 0x1fff;

    d6 = c;
    d6 += h0 * r6;
    d6 += h1 * r5;
    d6 += h2 * r4;
    d6 += h3 * r3;
    d6 += h4 * r2;
    c = (d6 >>> 13); d6 &= 0x1fff;
    d6 += h5 * r1;
    d6 += h6 * r0;
    d6 += h7 * (5 * r9);
    d6 += h8 * (5 * r8);
    d6 += h9 * (5 * r7);
    c += (d6 >>> 13); d6 &= 0x1fff;

    d7 = c;
    d7 += h0 * r7;
    d7 += h1 * r6;
    d7 += h2 * r5;
    d7 += h3 * r4;
    d7 += h4 * r3;
    c = (d7 >>> 13); d7 &= 0x1fff;
    d7 += h5 * r2;
    d7 += h6 * r1;
    d7 += h7 * r0;
    d7 += h8 * (5 * r9);
    d7 += h9 * (5 * r8);
    c += (d7 >>> 13); d7 &= 0x1fff;

    d8 = c;
    d8 += h0 * r8;
    d8 += h1 * r7;
    d8 += h2 * r6;
    d8 += h3 * r5;
    d8 += h4 * r4;
    c = (d8 >>> 13); d8 &= 0x1fff;
    d8 += h5 * r3;
    d8 += h6 * r2;
    d8 += h7 * r1;
    d8 += h8 * r0;
    d8 += h9 * (5 * r9);
    c += (d8 >>> 13); d8 &= 0x1fff;

    d9 = c;
    d9 += h0 * r9;
    d9 += h1 * r8;
    d9 += h2 * r7;
    d9 += h3 * r6;
    d9 += h4 * r5;
    c = (d9 >>> 13); d9 &= 0x1fff;
    d9 += h5 * r4;
    d9 += h6 * r3;
    d9 += h7 * r2;
    d9 += h8 * r1;
    d9 += h9 * r0;
    c += (d9 >>> 13); d9 &= 0x1fff;

    c = (((c << 2) + c)) | 0;
    c = (c + d0) | 0;
    d0 = c & 0x1fff;
    c = (c >>> 13);
    d1 += c;

    h0 = d0;
    h1 = d1;
    h2 = d2;
    h3 = d3;
    h4 = d4;
    h5 = d5;
    h6 = d6;
    h7 = d7;
    h8 = d8;
    h9 = d9;

    mpos += 16;
    bytes -= 16;
  }
  this.h[0] = h0;
  this.h[1] = h1;
  this.h[2] = h2;
  this.h[3] = h3;
  this.h[4] = h4;
  this.h[5] = h5;
  this.h[6] = h6;
  this.h[7] = h7;
  this.h[8] = h8;
  this.h[9] = h9;
};

poly1305.prototype.finish = function(mac, macpos) {
  var g = new Uint16Array(10);
  var c, mask, f, i;

  if (this.leftover) {
    i = this.leftover;
    this.buffer[i++] = 1;
    for (; i < 16; i++) this.buffer[i] = 0;
    this.fin = 1;
    this.blocks(this.buffer, 0, 16);
  }

  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  for (i = 2; i < 10; i++) {
    this.h[i] += c;
    c = this.h[i] >>> 13;
    this.h[i] &= 0x1fff;
  }
  this.h[0] += (c * 5);
  c = this.h[0] >>> 13;
  this.h[0] &= 0x1fff;
  this.h[1] += c;
  c = this.h[1] >>> 13;
  this.h[1] &= 0x1fff;
  this.h[2] += c;

  g[0] = this.h[0] + 5;
  c = g[0] >>> 13;
  g[0] &= 0x1fff;
  for (i = 1; i < 10; i++) {
    g[i] = this.h[i] + c;
    c = g[i] >>> 13;
    g[i] &= 0x1fff;
  }
  g[9] -= (1 << 13);

  mask = (c ^ 1) - 1;
  for (i = 0; i < 10; i++) g[i] &= mask;
  mask = ~mask;
  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

  f = this.h[0] + this.pad[0];
  this.h[0] = f & 0xffff;
  for (i = 1; i < 8; i++) {
    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
    this.h[i] = f & 0xffff;
  }

  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
};

poly1305.prototype.update = function(m, mpos, bytes) {
  var i, want;

  if (this.leftover) {
    want = (16 - this.leftover);
    if (want > bytes)
      want = bytes;
    for (i = 0; i < want; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    bytes -= want;
    mpos += want;
    this.leftover += want;
    if (this.leftover < 16)
      return;
    this.blocks(this.buffer, 0, 16);
    this.leftover = 0;
  }

  if (bytes >= 16) {
    want = bytes - (bytes % 16);
    this.blocks(m, mpos, want);
    mpos += want;
    bytes -= want;
  }

  if (bytes) {
    for (i = 0; i < bytes; i++)
      this.buffer[this.leftover + i] = m[mpos+i];
    this.leftover += bytes;
  }
};

function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
  var s = new poly1305(k);
  s.update(m, mpos, n);
  s.finish(out, outpos);
  return 0;
}

function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
  var x = new Uint8Array(16);
  crypto_onetimeauth(x,0,m,mpos,n,k);
  return crypto_verify_16(h,hpos,x,0);
}

function crypto_secretbox(c,m,d,n,k) {
  var i;
  if (d < 32) return -1;
  crypto_stream_xor(c,0,m,0,d,n,k);
  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
  for (i = 0; i < 16; i++) c[i] = 0;
  return 0;
}

function crypto_secretbox_open(m,c,d,n,k) {
  var i;
  var x = new Uint8Array(32);
  if (d < 32) return -1;
  crypto_stream(x,0,32,n,k);
  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
  crypto_stream_xor(m,0,c,0,d,n,k);
  for (i = 0; i < 32; i++) m[i] = 0;
  return 0;
}

function set25519(r, a) {
  var i;
  for (i = 0; i < 16; i++) r[i] = a[i]|0;
}

function car25519(o) {
  var i, v, c = 1;
  for (i = 0; i < 16; i++) {
    v = o[i] + c + 65535;
    c = Math.floor(v / 65536);
    o[i] = v - c * 65536;
  }
  o[0] += c-1 + 37 * (c-1);
}

function sel25519(p, q, b) {
  var t, c = ~(b-1);
  for (var i = 0; i < 16; i++) {
    t = c & (p[i] ^ q[i]);
    p[i] ^= t;
    q[i] ^= t;
  }
}

function pack25519(o, n) {
  var i, j, b;
  var m = gf(), t = gf();
  for (i = 0; i < 16; i++) t[i] = n[i];
  car25519(t);
  car25519(t);
  car25519(t);
  for (j = 0; j < 2; j++) {
    m[0] = t[0] - 0xffed;
    for (i = 1; i < 15; i++) {
      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
      m[i-1] &= 0xffff;
    }
    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
    b = (m[15]>>16) & 1;
    m[14] &= 0xffff;
    sel25519(t, m, 1-b);
  }
  for (i = 0; i < 16; i++) {
    o[2*i] = t[i] & 0xff;
    o[2*i+1] = t[i]>>8;
  }
}

function neq25519(a, b) {
  var c = new Uint8Array(32), d = new Uint8Array(32);
  pack25519(c, a);
  pack25519(d, b);
  return crypto_verify_32(c, 0, d, 0);
}

function par25519(a) {
  var d = new Uint8Array(32);
  pack25519(d, a);
  return d[0] & 1;
}

function unpack25519(o, n) {
  var i;
  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
  o[15] &= 0x7fff;
}

function A(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
}

function Z(o, a, b) {
  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
}

function M(o, a, b) {
  var v, c,
     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
    b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7],
    b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11],
    b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];

  v = a[0];
  t0 += v * b0;
  t1 += v * b1;
  t2 += v * b2;
  t3 += v * b3;
  t4 += v * b4;
  t5 += v * b5;
  t6 += v * b6;
  t7 += v * b7;
  t8 += v * b8;
  t9 += v * b9;
  t10 += v * b10;
  t11 += v * b11;
  t12 += v * b12;
  t13 += v * b13;
  t14 += v * b14;
  t15 += v * b15;
  v = a[1];
  t1 += v * b0;
  t2 += v * b1;
  t3 += v * b2;
  t4 += v * b3;
  t5 += v * b4;
  t6 += v * b5;
  t7 += v * b6;
  t8 += v * b7;
  t9 += v * b8;
  t10 += v * b9;
  t11 += v * b10;
  t12 += v * b11;
  t13 += v * b12;
  t14 += v * b13;
  t15 += v * b14;
  t16 += v * b15;
  v = a[2];
  t2 += v * b0;
  t3 += v * b1;
  t4 += v * b2;
  t5 += v * b3;
  t6 += v * b4;
  t7 += v * b5;
  t8 += v * b6;
  t9 += v * b7;
  t10 += v * b8;
  t11 += v * b9;
  t12 += v * b10;
  t13 += v * b11;
  t14 += v * b12;
  t15 += v * b13;
  t16 += v * b14;
  t17 += v * b15;
  v = a[3];
  t3 += v * b0;
  t4 += v * b1;
  t5 += v * b2;
  t6 += v * b3;
  t7 += v * b4;
  t8 += v * b5;
  t9 += v * b6;
  t10 += v * b7;
  t11 += v * b8;
  t12 += v * b9;
  t13 += v * b10;
  t14 += v * b11;
  t15 += v * b12;
  t16 += v * b13;
  t17 += v * b14;
  t18 += v * b15;
  v = a[4];
  t4 += v * b0;
  t5 += v * b1;
  t6 += v * b2;
  t7 += v * b3;
  t8 += v * b4;
  t9 += v * b5;
  t10 += v * b6;
  t11 += v * b7;
  t12 += v * b8;
  t13 += v * b9;
  t14 += v * b10;
  t15 += v * b11;
  t16 += v * b12;
  t17 += v * b13;
  t18 += v * b14;
  t19 += v * b15;
  v = a[5];
  t5 += v * b0;
  t6 += v * b1;
  t7 += v * b2;
  t8 += v * b3;
  t9 += v * b4;
  t10 += v * b5;
  t11 += v * b6;
  t12 += v * b7;
  t13 += v * b8;
  t14 += v * b9;
  t15 += v * b10;
  t16 += v * b11;
  t17 += v * b12;
  t18 += v * b13;
  t19 += v * b14;
  t20 += v * b15;
  v = a[6];
  t6 += v * b0;
  t7 += v * b1;
  t8 += v * b2;
  t9 += v * b3;
  t10 += v * b4;
  t11 += v * b5;
  t12 += v * b6;
  t13 += v * b7;
  t14 += v * b8;
  t15 += v * b9;
  t16 += v * b10;
  t17 += v * b11;
  t18 += v * b12;
  t19 += v * b13;
  t20 += v * b14;
  t21 += v * b15;
  v = a[7];
  t7 += v * b0;
  t8 += v * b1;
  t9 += v * b2;
  t10 += v * b3;
  t11 += v * b4;
  t12 += v * b5;
  t13 += v * b6;
  t14 += v * b7;
  t15 += v * b8;
  t16 += v * b9;
  t17 += v * b10;
  t18 += v * b11;
  t19 += v * b12;
  t20 += v * b13;
  t21 += v * b14;
  t22 += v * b15;
  v = a[8];
  t8 += v * b0;
  t9 += v * b1;
  t10 += v * b2;
  t11 += v * b3;
  t12 += v * b4;
  t13 += v * b5;
  t14 += v * b6;
  t15 += v * b7;
  t16 += v * b8;
  t17 += v * b9;
  t18 += v * b10;
  t19 += v * b11;
  t20 += v * b12;
  t21 += v * b13;
  t22 += v * b14;
  t23 += v * b15;
  v = a[9];
  t9 += v * b0;
  t10 += v * b1;
  t11 += v * b2;
  t12 += v * b3;
  t13 += v * b4;
  t14 += v * b5;
  t15 += v * b6;
  t16 += v * b7;
  t17 += v * b8;
  t18 += v * b9;
  t19 += v * b10;
  t20 += v * b11;
  t21 += v * b12;
  t22 += v * b13;
  t23 += v * b14;
  t24 += v * b15;
  v = a[10];
  t10 += v * b0;
  t11 += v * b1;
  t12 += v * b2;
  t13 += v * b3;
  t14 += v * b4;
  t15 += v * b5;
  t16 += v * b6;
  t17 += v * b7;
  t18 += v * b8;
  t19 += v * b9;
  t20 += v * b10;
  t21 += v * b11;
  t22 += v * b12;
  t23 += v * b13;
  t24 += v * b14;
  t25 += v * b15;
  v = a[11];
  t11 += v * b0;
  t12 += v * b1;
  t13 += v * b2;
  t14 += v * b3;
  t15 += v * b4;
  t16 += v * b5;
  t17 += v * b6;
  t18 += v * b7;
  t19 += v * b8;
  t20 += v * b9;
  t21 += v * b10;
  t22 += v * b11;
  t23 += v * b12;
  t24 += v * b13;
  t25 += v * b14;
  t26 += v * b15;
  v = a[12];
  t12 += v * b0;
  t13 += v * b1;
  t14 += v * b2;
  t15 += v * b3;
  t16 += v * b4;
  t17 += v * b5;
  t18 += v * b6;
  t19 += v * b7;
  t20 += v * b8;
  t21 += v * b9;
  t22 += v * b10;
  t23 += v * b11;
  t24 += v * b12;
  t25 += v * b13;
  t26 += v * b14;
  t27 += v * b15;
  v = a[13];
  t13 += v * b0;
  t14 += v * b1;
  t15 += v * b2;
  t16 += v * b3;
  t17 += v * b4;
  t18 += v * b5;
  t19 += v * b6;
  t20 += v * b7;
  t21 += v * b8;
  t22 += v * b9;
  t23 += v * b10;
  t24 += v * b11;
  t25 += v * b12;
  t26 += v * b13;
  t27 += v * b14;
  t28 += v * b15;
  v = a[14];
  t14 += v * b0;
  t15 += v * b1;
  t16 += v * b2;
  t17 += v * b3;
  t18 += v * b4;
  t19 += v * b5;
  t20 += v * b6;
  t21 += v * b7;
  t22 += v * b8;
  t23 += v * b9;
  t24 += v * b10;
  t25 += v * b11;
  t26 += v * b12;
  t27 += v * b13;
  t28 += v * b14;
  t29 += v * b15;
  v = a[15];
  t15 += v * b0;
  t16 += v * b1;
  t17 += v * b2;
  t18 += v * b3;
  t19 += v * b4;
  t20 += v * b5;
  t21 += v * b6;
  t22 += v * b7;
  t23 += v * b8;
  t24 += v * b9;
  t25 += v * b10;
  t26 += v * b11;
  t27 += v * b12;
  t28 += v * b13;
  t29 += v * b14;
  t30 += v * b15;

  t0  += 38 * t16;
  t1  += 38 * t17;
  t2  += 38 * t18;
  t3  += 38 * t19;
  t4  += 38 * t20;
  t5  += 38 * t21;
  t6  += 38 * t22;
  t7  += 38 * t23;
  t8  += 38 * t24;
  t9  += 38 * t25;
  t10 += 38 * t26;
  t11 += 38 * t27;
  t12 += 38 * t28;
  t13 += 38 * t29;
  t14 += 38 * t30;
  // t15 left as is

  // first car
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  // second car
  c = 1;
  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
  t0 += c-1 + 37 * (c-1);

  o[ 0] = t0;
  o[ 1] = t1;
  o[ 2] = t2;
  o[ 3] = t3;
  o[ 4] = t4;
  o[ 5] = t5;
  o[ 6] = t6;
  o[ 7] = t7;
  o[ 8] = t8;
  o[ 9] = t9;
  o[10] = t10;
  o[11] = t11;
  o[12] = t12;
  o[13] = t13;
  o[14] = t14;
  o[15] = t15;
}

function S(o, a) {
  M(o, a, a);
}

function inv25519(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 253; a >= 0; a--) {
    S(c, c);
    if(a !== 2 && a !== 4) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function pow2523(o, i) {
  var c = gf();
  var a;
  for (a = 0; a < 16; a++) c[a] = i[a];
  for (a = 250; a >= 0; a--) {
      S(c, c);
      if(a !== 1) M(c, c, i);
  }
  for (a = 0; a < 16; a++) o[a] = c[a];
}

function crypto_scalarmult(q, n, p) {
  var z = new Uint8Array(32);
  var x = new Float64Array(80), r, i;
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf();
  for (i = 0; i < 31; i++) z[i] = n[i];
  z[31]=(n[31]&127)|64;
  z[0]&=248;
  unpack25519(x,p);
  for (i = 0; i < 16; i++) {
    b[i]=x[i];
    d[i]=a[i]=c[i]=0;
  }
  a[0]=d[0]=1;
  for (i=254; i>=0; --i) {
    r=(z[i>>>3]>>>(i&7))&1;
    sel25519(a,b,r);
    sel25519(c,d,r);
    A(e,a,c);
    Z(a,a,c);
    A(c,b,d);
    Z(b,b,d);
    S(d,e);
    S(f,a);
    M(a,c,a);
    M(c,b,e);
    A(e,a,c);
    Z(a,a,c);
    S(b,a);
    Z(c,d,f);
    M(a,c,_121665);
    A(a,a,d);
    M(c,c,a);
    M(a,d,f);
    M(d,b,x);
    S(b,e);
    sel25519(a,b,r);
    sel25519(c,d,r);
  }
  for (i = 0; i < 16; i++) {
    x[i+16]=a[i];
    x[i+32]=c[i];
    x[i+48]=b[i];
    x[i+64]=d[i];
  }
  var x32 = x.subarray(32);
  var x16 = x.subarray(16);
  inv25519(x32,x32);
  M(x16,x16,x32);
  pack25519(q,x16);
  return 0;
}

function crypto_scalarmult_base(q, n) {
  return crypto_scalarmult(q, n, _9);
}

function crypto_box_keypair(y, x) {
  randombytes(x, 32);
  return crypto_scalarmult_base(y, x);
}

function crypto_box_beforenm(k, y, x) {
  var s = new Uint8Array(32);
  crypto_scalarmult(s, x, y);
  return crypto_core_hsalsa20(k, _0, s, sigma);
}

var crypto_box_afternm = crypto_secretbox;
var crypto_box_open_afternm = crypto_secretbox_open;

function crypto_box(c, m, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_afternm(c, m, d, n, k);
}

function crypto_box_open(m, c, d, n, y, x) {
  var k = new Uint8Array(32);
  crypto_box_beforenm(k, y, x);
  return crypto_box_open_afternm(m, c, d, n, k);
}

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function crypto_hashblocks_hl(hh, hl, m, n) {
  var wh = new Int32Array(16), wl = new Int32Array(16),
      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
      th, tl, i, j, h, l, a, b, c, d;

  var ah0 = hh[0],
      ah1 = hh[1],
      ah2 = hh[2],
      ah3 = hh[3],
      ah4 = hh[4],
      ah5 = hh[5],
      ah6 = hh[6],
      ah7 = hh[7],

      al0 = hl[0],
      al1 = hl[1],
      al2 = hl[2],
      al3 = hl[3],
      al4 = hl[4],
      al5 = hl[5],
      al6 = hl[6],
      al7 = hl[7];

  var pos = 0;
  while (n >= 128) {
    for (i = 0; i < 16; i++) {
      j = 8 * i + pos;
      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
    }
    for (i = 0; i < 80; i++) {
      bh0 = ah0;
      bh1 = ah1;
      bh2 = ah2;
      bh3 = ah3;
      bh4 = ah4;
      bh5 = ah5;
      bh6 = ah6;
      bh7 = ah7;

      bl0 = al0;
      bl1 = al1;
      bl2 = al2;
      bl3 = al3;
      bl4 = al4;
      bl5 = al5;
      bl6 = al6;
      bl7 = al7;

      // add
      h = ah7;
      l = al7;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      // Sigma1
      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // Ch
      h = (ah4 & ah5) ^ (~ah4 & ah6);
      l = (al4 & al5) ^ (~al4 & al6);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // K
      h = K[i*2];
      l = K[i*2+1];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // w
      h = wh[i%16];
      l = wl[i%16];

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      th = c & 0xffff | d << 16;
      tl = a & 0xffff | b << 16;

      // add
      h = th;
      l = tl;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      // Sigma0
      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      // Maj
      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh7 = (c & 0xffff) | (d << 16);
      bl7 = (a & 0xffff) | (b << 16);

      // add
      h = bh3;
      l = bl3;

      a = l & 0xffff; b = l >>> 16;
      c = h & 0xffff; d = h >>> 16;

      h = th;
      l = tl;

      a += l & 0xffff; b += l >>> 16;
      c += h & 0xffff; d += h >>> 16;

      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;

      bh3 = (c & 0xffff) | (d << 16);
      bl3 = (a & 0xffff) | (b << 16);

      ah1 = bh0;
      ah2 = bh1;
      ah3 = bh2;
      ah4 = bh3;
      ah5 = bh4;
      ah6 = bh5;
      ah7 = bh6;
      ah0 = bh7;

      al1 = bl0;
      al2 = bl1;
      al3 = bl2;
      al4 = bl3;
      al5 = bl4;
      al6 = bl5;
      al7 = bl6;
      al0 = bl7;

      if (i%16 === 15) {
        for (j = 0; j < 16; j++) {
          // add
          h = wh[j];
          l = wl[j];

          a = l & 0xffff; b = l >>> 16;
          c = h & 0xffff; d = h >>> 16;

          h = wh[(j+9)%16];
          l = wl[(j+9)%16];

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          // sigma0
          th = wh[(j+1)%16];
          tl = wl[(j+1)%16];
          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          // sigma1
          th = wh[(j+14)%16];
          tl = wl[(j+14)%16];
          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

          a += l & 0xffff; b += l >>> 16;
          c += h & 0xffff; d += h >>> 16;

          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;

          wh[j] = (c & 0xffff) | (d << 16);
          wl[j] = (a & 0xffff) | (b << 16);
        }
      }
    }

    // add
    h = ah0;
    l = al0;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[0];
    l = hl[0];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[0] = ah0 = (c & 0xffff) | (d << 16);
    hl[0] = al0 = (a & 0xffff) | (b << 16);

    h = ah1;
    l = al1;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[1];
    l = hl[1];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[1] = ah1 = (c & 0xffff) | (d << 16);
    hl[1] = al1 = (a & 0xffff) | (b << 16);

    h = ah2;
    l = al2;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[2];
    l = hl[2];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[2] = ah2 = (c & 0xffff) | (d << 16);
    hl[2] = al2 = (a & 0xffff) | (b << 16);

    h = ah3;
    l = al3;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[3];
    l = hl[3];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[3] = ah3 = (c & 0xffff) | (d << 16);
    hl[3] = al3 = (a & 0xffff) | (b << 16);

    h = ah4;
    l = al4;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[4];
    l = hl[4];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[4] = ah4 = (c & 0xffff) | (d << 16);
    hl[4] = al4 = (a & 0xffff) | (b << 16);

    h = ah5;
    l = al5;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[5];
    l = hl[5];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[5] = ah5 = (c & 0xffff) | (d << 16);
    hl[5] = al5 = (a & 0xffff) | (b << 16);

    h = ah6;
    l = al6;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[6];
    l = hl[6];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[6] = ah6 = (c & 0xffff) | (d << 16);
    hl[6] = al6 = (a & 0xffff) | (b << 16);

    h = ah7;
    l = al7;

    a = l & 0xffff; b = l >>> 16;
    c = h & 0xffff; d = h >>> 16;

    h = hh[7];
    l = hl[7];

    a += l & 0xffff; b += l >>> 16;
    c += h & 0xffff; d += h >>> 16;

    b += a >>> 16;
    c += b >>> 16;
    d += c >>> 16;

    hh[7] = ah7 = (c & 0xffff) | (d << 16);
    hl[7] = al7 = (a & 0xffff) | (b << 16);

    pos += 128;
    n -= 128;
  }

  return n;
}

function crypto_hash(out, m, n) {
  var hh = new Int32Array(8),
      hl = new Int32Array(8),
      x = new Uint8Array(256),
      i, b = n;

  hh[0] = 0x6a09e667;
  hh[1] = 0xbb67ae85;
  hh[2] = 0x3c6ef372;
  hh[3] = 0xa54ff53a;
  hh[4] = 0x510e527f;
  hh[5] = 0x9b05688c;
  hh[6] = 0x1f83d9ab;
  hh[7] = 0x5be0cd19;

  hl[0] = 0xf3bcc908;
  hl[1] = 0x84caa73b;
  hl[2] = 0xfe94f82b;
  hl[3] = 0x5f1d36f1;
  hl[4] = 0xade682d1;
  hl[5] = 0x2b3e6c1f;
  hl[6] = 0xfb41bd6b;
  hl[7] = 0x137e2179;

  crypto_hashblocks_hl(hh, hl, m, n);
  n %= 128;

  for (i = 0; i < n; i++) x[i] = m[b-n+i];
  x[n] = 128;

  n = 256-128*(n<112?1:0);
  x[n-9] = 0;
  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
  crypto_hashblocks_hl(hh, hl, x, n);

  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

  return 0;
}

function add(p, q) {
  var a = gf(), b = gf(), c = gf(),
      d = gf(), e = gf(), f = gf(),
      g = gf(), h = gf(), t = gf();

  Z(a, p[1], p[0]);
  Z(t, q[1], q[0]);
  M(a, a, t);
  A(b, p[0], p[1]);
  A(t, q[0], q[1]);
  M(b, b, t);
  M(c, p[3], q[3]);
  M(c, c, D2);
  M(d, p[2], q[2]);
  A(d, d, d);
  Z(e, b, a);
  Z(f, d, c);
  A(g, d, c);
  A(h, b, a);

  M(p[0], e, f);
  M(p[1], h, g);
  M(p[2], g, f);
  M(p[3], e, h);
}

function cswap(p, q, b) {
  var i;
  for (i = 0; i < 4; i++) {
    sel25519(p[i], q[i], b);
  }
}

function pack(r, p) {
  var tx = gf(), ty = gf(), zi = gf();
  inv25519(zi, p[2]);
  M(tx, p[0], zi);
  M(ty, p[1], zi);
  pack25519(r, ty);
  r[31] ^= par25519(tx) << 7;
}

function scalarmult(p, q, s) {
  var b, i;
  set25519(p[0], gf0);
  set25519(p[1], gf1);
  set25519(p[2], gf1);
  set25519(p[3], gf0);
  for (i = 255; i >= 0; --i) {
    b = (s[(i/8)|0] >> (i&7)) & 1;
    cswap(p, q, b);
    add(q, p);
    add(p, p);
    cswap(p, q, b);
  }
}

function scalarbase(p, s) {
  var q = [gf(), gf(), gf(), gf()];
  set25519(q[0], X);
  set25519(q[1], Y);
  set25519(q[2], gf1);
  M(q[3], X, Y);
  scalarmult(p, q, s);
}

function crypto_sign_keypair(pk, sk, seeded) {
  var d = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()];
  var i;

  if (!seeded) randombytes(sk, 32);
  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  scalarbase(p, d);
  pack(pk, p);

  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
  return 0;
}

var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

function modL(r, x) {
  var carry, i, j, k;
  for (i = 63; i >= 32; --i) {
    carry = 0;
    for (j = i - 32, k = i - 12; j < k; ++j) {
      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
      carry = (x[j] + 128) >> 8;
      x[j] -= carry * 256;
    }
    x[j] += carry;
    x[i] = 0;
  }
  carry = 0;
  for (j = 0; j < 32; j++) {
    x[j] += carry - (x[31] >> 4) * L[j];
    carry = x[j] >> 8;
    x[j] &= 255;
  }
  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
  for (i = 0; i < 32; i++) {
    x[i+1] += x[i] >> 8;
    r[i] = x[i] & 255;
  }
}

function reduce(r) {
  var x = new Float64Array(64), i;
  for (i = 0; i < 64; i++) x[i] = r[i];
  for (i = 0; i < 64; i++) r[i] = 0;
  modL(r, x);
}

// Note: difference from C - smlen returned, not passed as argument.
function crypto_sign(sm, m, n, sk) {
  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
  var i, j, x = new Float64Array(64);
  var p = [gf(), gf(), gf(), gf()];

  crypto_hash(d, sk, 32);
  d[0] &= 248;
  d[31] &= 127;
  d[31] |= 64;

  var smlen = n + 64;
  for (i = 0; i < n; i++) sm[64 + i] = m[i];
  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

  crypto_hash(r, sm.subarray(32), n+32);
  reduce(r);
  scalarbase(p, r);
  pack(sm, p);

  for (i = 32; i < 64; i++) sm[i] = sk[i];
  crypto_hash(h, sm, n + 64);
  reduce(h);

  for (i = 0; i < 64; i++) x[i] = 0;
  for (i = 0; i < 32; i++) x[i] = r[i];
  for (i = 0; i < 32; i++) {
    for (j = 0; j < 32; j++) {
      x[i+j] += h[i] * d[j];
    }
  }

  modL(sm.subarray(32), x);
  return smlen;
}

function unpackneg(r, p) {
  var t = gf(), chk = gf(), num = gf(),
      den = gf(), den2 = gf(), den4 = gf(),
      den6 = gf();

  set25519(r[2], gf1);
  unpack25519(r[1], p);
  S(num, r[1]);
  M(den, num, D);
  Z(num, num, r[2]);
  A(den, r[2], den);

  S(den2, den);
  S(den4, den2);
  M(den6, den4, den2);
  M(t, den6, num);
  M(t, t, den);

  pow2523(t, t);
  M(t, t, num);
  M(t, t, den);
  M(t, t, den);
  M(r[0], t, den);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) M(r[0], r[0], I);

  S(chk, r[0]);
  M(chk, chk, den);
  if (neq25519(chk, num)) return -1;

  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

  M(r[3], r[0], r[1]);
  return 0;
}

function crypto_sign_open(m, sm, n, pk) {
  var i, mlen;
  var t = new Uint8Array(32), h = new Uint8Array(64);
  var p = [gf(), gf(), gf(), gf()],
      q = [gf(), gf(), gf(), gf()];

  mlen = -1;
  if (n < 64) return -1;

  if (unpackneg(q, pk)) return -1;

  for (i = 0; i < n; i++) m[i] = sm[i];
  for (i = 0; i < 32; i++) m[i+32] = pk[i];
  crypto_hash(h, m, n);
  reduce(h);
  scalarmult(p, q, h);

  scalarbase(q, sm.subarray(32));
  add(p, q);
  pack(t, p);

  n -= 64;
  if (crypto_verify_32(sm, 0, t, 0)) {
    for (i = 0; i < n; i++) m[i] = 0;
    return -1;
  }

  for (i = 0; i < n; i++) m[i] = sm[i + 64];
  mlen = n;
  return mlen;
}

var crypto_secretbox_KEYBYTES = 32,
    crypto_secretbox_NONCEBYTES = 24,
    crypto_secretbox_ZEROBYTES = 32,
    crypto_secretbox_BOXZEROBYTES = 16,
    crypto_scalarmult_BYTES = 32,
    crypto_scalarmult_SCALARBYTES = 32,
    crypto_box_PUBLICKEYBYTES = 32,
    crypto_box_SECRETKEYBYTES = 32,
    crypto_box_BEFORENMBYTES = 32,
    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
    crypto_sign_BYTES = 64,
    crypto_sign_PUBLICKEYBYTES = 32,
    crypto_sign_SECRETKEYBYTES = 64,
    crypto_sign_SEEDBYTES = 32,
    crypto_hash_BYTES = 64;

nacl.lowlevel = {
  crypto_core_hsalsa20: crypto_core_hsalsa20,
  crypto_stream_xor: crypto_stream_xor,
  crypto_stream: crypto_stream,
  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
  crypto_stream_salsa20: crypto_stream_salsa20,
  crypto_onetimeauth: crypto_onetimeauth,
  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
  crypto_verify_16: crypto_verify_16,
  crypto_verify_32: crypto_verify_32,
  crypto_secretbox: crypto_secretbox,
  crypto_secretbox_open: crypto_secretbox_open,
  crypto_scalarmult: crypto_scalarmult,
  crypto_scalarmult_base: crypto_scalarmult_base,
  crypto_box_beforenm: crypto_box_beforenm,
  crypto_box_afternm: crypto_box_afternm,
  crypto_box: crypto_box,
  crypto_box_open: crypto_box_open,
  crypto_box_keypair: crypto_box_keypair,
  crypto_hash: crypto_hash,
  crypto_sign: crypto_sign,
  crypto_sign_keypair: crypto_sign_keypair,
  crypto_sign_open: crypto_sign_open,

  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
  crypto_sign_BYTES: crypto_sign_BYTES,
  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
  crypto_hash_BYTES: crypto_hash_BYTES
};

/* High-level API */

function checkLengths(k, n) {
  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
}

function checkBoxLengths(pk, sk) {
  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
}

function checkArrayTypes() {
  var t, i;
  for (i = 0; i < arguments.length; i++) {
     if ((t = Object.prototype.toString.call(arguments[i])) !== '[object Uint8Array]')
       throw new TypeError('unexpected type ' + t + ', use Uint8Array');
  }
}

function cleanup(arr) {
  for (var i = 0; i < arr.length; i++) arr[i] = 0;
}

// TODO: Completely remove this in v0.15.
if (!nacl.util) {
  nacl.util = {};
  nacl.util.decodeUTF8 = nacl.util.encodeUTF8 = nacl.util.encodeBase64 = nacl.util.decodeBase64 = function() {
    throw new Error('nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js');
  };
}

nacl.randomBytes = function(n) {
  var b = new Uint8Array(n);
  randombytes(b, n);
  return b;
};

nacl.secretbox = function(msg, nonce, key) {
  checkArrayTypes(msg, nonce, key);
  checkLengths(key, nonce);
  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
  var c = new Uint8Array(m.length);
  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
  crypto_secretbox(c, m, m.length, nonce, key);
  return c.subarray(crypto_secretbox_BOXZEROBYTES);
};

nacl.secretbox.open = function(box, nonce, key) {
  checkArrayTypes(box, nonce, key);
  checkLengths(key, nonce);
  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
  var m = new Uint8Array(c.length);
  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
  if (c.length < 32) return false;
  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return false;
  return m.subarray(crypto_secretbox_ZEROBYTES);
};

nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

nacl.scalarMult = function(n, p) {
  checkArrayTypes(n, p);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult(q, n, p);
  return q;
};

nacl.scalarMult.base = function(n) {
  checkArrayTypes(n);
  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
  var q = new Uint8Array(crypto_scalarmult_BYTES);
  crypto_scalarmult_base(q, n);
  return q;
};

nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

nacl.box = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox(msg, nonce, k);
};

nacl.box.before = function(publicKey, secretKey) {
  checkArrayTypes(publicKey, secretKey);
  checkBoxLengths(publicKey, secretKey);
  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
  crypto_box_beforenm(k, publicKey, secretKey);
  return k;
};

nacl.box.after = nacl.secretbox;

nacl.box.open = function(msg, nonce, publicKey, secretKey) {
  var k = nacl.box.before(publicKey, secretKey);
  return nacl.secretbox.open(msg, nonce, k);
};

nacl.box.open.after = nacl.secretbox.open;

nacl.box.keyPair = function() {
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
  crypto_box_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.box.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
  crypto_scalarmult_base(pk, secretKey);
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
nacl.box.nonceLength = crypto_box_NONCEBYTES;
nacl.box.overheadLength = nacl.secretbox.overheadLength;

nacl.sign = function(msg, secretKey) {
  checkArrayTypes(msg, secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
  crypto_sign(signedMsg, msg, msg.length, secretKey);
  return signedMsg;
};

nacl.sign.open = function(signedMsg, publicKey) {
  if (arguments.length !== 2)
    throw new Error('nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?');
  checkArrayTypes(signedMsg, publicKey);
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var tmp = new Uint8Array(signedMsg.length);
  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
  if (mlen < 0) return null;
  var m = new Uint8Array(mlen);
  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
  return m;
};

nacl.sign.detached = function(msg, secretKey) {
  var signedMsg = nacl.sign(msg, secretKey);
  var sig = new Uint8Array(crypto_sign_BYTES);
  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
  return sig;
};

nacl.sign.detached.verify = function(msg, sig, publicKey) {
  checkArrayTypes(msg, sig, publicKey);
  if (sig.length !== crypto_sign_BYTES)
    throw new Error('bad signature size');
  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
    throw new Error('bad public key size');
  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
  var i;
  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
};

nacl.sign.keyPair = function() {
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  crypto_sign_keypair(pk, sk);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.keyPair.fromSecretKey = function(secretKey) {
  checkArrayTypes(secretKey);
  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
    throw new Error('bad secret key size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
};

nacl.sign.keyPair.fromSeed = function(seed) {
  checkArrayTypes(seed);
  if (seed.length !== crypto_sign_SEEDBYTES)
    throw new Error('bad seed size');
  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
  for (var i = 0; i < 32; i++) sk[i] = seed[i];
  crypto_sign_keypair(pk, sk, true);
  return {publicKey: pk, secretKey: sk};
};

nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
nacl.sign.seedLength = crypto_sign_SEEDBYTES;
nacl.sign.signatureLength = crypto_sign_BYTES;

nacl.hash = function(msg) {
  checkArrayTypes(msg);
  var h = new Uint8Array(crypto_hash_BYTES);
  crypto_hash(h, msg, msg.length);
  return h;
};

nacl.hash.hashLength = crypto_hash_BYTES;

nacl.verify = function(x, y) {
  checkArrayTypes(x, y);
  // Zero length arguments are considered not equal.
  if (x.length === 0 || y.length === 0) return false;
  if (x.length !== y.length) return false;
  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
};

nacl.setPRNG = function(fn) {
  randombytes = fn;
};

(function() {
  // Initialize PRNG if environment provides CSPRNG.
  // If not, methods calling randombytes will throw.
  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
  if (crypto && crypto.getRandomValues) {
    // Browsers.
    var QUOTA = 65536;
    nacl.setPRNG(function(x, n) {
      var i, v = new Uint8Array(n);
      for (i = 0; i < n; i += QUOTA) {
        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
      }
      for (i = 0; i < n; i++) x[i] = v[i];
      cleanup(v);
    });
  } else if (true) {
    // Node.js.
    crypto = __nccwpck_require__(6417);
    if (crypto && crypto.randomBytes) {
      nacl.setPRNG(function(x, n) {
        var i, v = crypto.randomBytes(n);
        for (i = 0; i < n; i++) x[i] = v[i];
        cleanup(v);
      });
    }
  }
})();

})( true && module.exports ? module.exports : (self.nacl = self.nacl || {}));


/***/ }),

/***/ 1692:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/*
 * verror.js: richer JavaScript errors
 */

var mod_assertplus = __nccwpck_require__(6631);
var mod_util = __nccwpck_require__(1669);

var mod_extsprintf = __nccwpck_require__(7264);
var mod_isError = __nccwpck_require__(5898)/* .isError */ .VZ;
var sprintf = mod_extsprintf.sprintf;

/*
 * Public interface
 */

/* So you can 'var VError = require('verror')' */
module.exports = VError;
/* For compatibility */
VError.VError = VError;
/* Other exported classes */
VError.SError = SError;
VError.WError = WError;
VError.MultiError = MultiError;

/*
 * Common function used to parse constructor arguments for VError, WError, and
 * SError.  Named arguments to this function:
 *
 *     strict		force strict interpretation of sprintf arguments, even
 *     			if the options in "argv" don't say so
 *
 *     argv		error's constructor arguments, which are to be
 *     			interpreted as described in README.md.  For quick
 *     			reference, "argv" has one of the following forms:
 *
 *          [ sprintf_args... ]           (argv[0] is a string)
 *          [ cause, sprintf_args... ]    (argv[0] is an Error)
 *          [ options, sprintf_args... ]  (argv[0] is an object)
 *
 * This function normalizes these forms, producing an object with the following
 * properties:
 *
 *    options           equivalent to "options" in third form.  This will never
 *    			be a direct reference to what the caller passed in
 *    			(i.e., it may be a shallow copy), so it can be freely
 *    			modified.
 *
 *    shortmessage      result of sprintf(sprintf_args), taking options.strict
 *    			into account as described in README.md.
 */
function parseConstructorArguments(args)
{
	var argv, options, sprintf_args, shortmessage, k;

	mod_assertplus.object(args, 'args');
	mod_assertplus.bool(args.strict, 'args.strict');
	mod_assertplus.array(args.argv, 'args.argv');
	argv = args.argv;

	/*
	 * First, figure out which form of invocation we've been given.
	 */
	if (argv.length === 0) {
		options = {};
		sprintf_args = [];
	} else if (mod_isError(argv[0])) {
		options = { 'cause': argv[0] };
		sprintf_args = argv.slice(1);
	} else if (typeof (argv[0]) === 'object') {
		options = {};
		for (k in argv[0]) {
			options[k] = argv[0][k];
		}
		sprintf_args = argv.slice(1);
	} else {
		mod_assertplus.string(argv[0],
		    'first argument to VError, SError, or WError ' +
		    'constructor must be a string, object, or Error');
		options = {};
		sprintf_args = argv;
	}

	/*
	 * Now construct the error's message.
	 *
	 * extsprintf (which we invoke here with our caller's arguments in order
	 * to construct this Error's message) is strict in its interpretation of
	 * values to be processed by the "%s" specifier.  The value passed to
	 * extsprintf must actually be a string or something convertible to a
	 * String using .toString().  Passing other values (notably "null" and
	 * "undefined") is considered a programmer error.  The assumption is
	 * that if you actually want to print the string "null" or "undefined",
	 * then that's easy to do that when you're calling extsprintf; on the
	 * other hand, if you did NOT want that (i.e., there's actually a bug
	 * where the program assumes some variable is non-null and tries to
	 * print it, which might happen when constructing a packet or file in
	 * some specific format), then it's better to stop immediately than
	 * produce bogus output.
	 *
	 * However, sometimes the bug is only in the code calling VError, and a
	 * programmer might prefer to have the error message contain "null" or
	 * "undefined" rather than have the bug in the error path crash the
	 * program (making the first bug harder to identify).  For that reason,
	 * by default VError converts "null" or "undefined" arguments to their
	 * string representations and passes those to extsprintf.  Programmers
	 * desiring the strict behavior can use the SError class or pass the
	 * "strict" option to the VError constructor.
	 */
	mod_assertplus.object(options);
	if (!options.strict && !args.strict) {
		sprintf_args = sprintf_args.map(function (a) {
			return (a === null ? 'null' :
			    a === undefined ? 'undefined' : a);
		});
	}

	if (sprintf_args.length === 0) {
		shortmessage = '';
	} else {
		shortmessage = sprintf.apply(null, sprintf_args);
	}

	return ({
	    'options': options,
	    'shortmessage': shortmessage
	});
}

/*
 * See README.md for reference documentation.
 */
function VError()
{
	var args, obj, parsed, cause, ctor, message, k;

	args = Array.prototype.slice.call(arguments, 0);

	/*
	 * This is a regrettable pattern, but JavaScript's built-in Error class
	 * is defined to work this way, so we allow the constructor to be called
	 * without "new".
	 */
	if (!(this instanceof VError)) {
		obj = Object.create(VError.prototype);
		VError.apply(obj, arguments);
		return (obj);
	}

	/*
	 * For convenience and backwards compatibility, we support several
	 * different calling forms.  Normalize them here.
	 */
	parsed = parseConstructorArguments({
	    'argv': args,
	    'strict': false
	});

	/*
	 * If we've been given a name, apply it now.
	 */
	if (parsed.options.name) {
		mod_assertplus.string(parsed.options.name,
		    'error\'s "name" must be a string');
		this.name = parsed.options.name;
	}

	/*
	 * For debugging, we keep track of the original short message (attached
	 * this Error particularly) separately from the complete message (which
	 * includes the messages of our cause chain).
	 */
	this.jse_shortmsg = parsed.shortmessage;
	message = parsed.shortmessage;

	/*
	 * If we've been given a cause, record a reference to it and update our
	 * message appropriately.
	 */
	cause = parsed.options.cause;
	if (cause) {
		mod_assertplus.ok(mod_isError(cause), 'cause is not an Error');
		this.jse_cause = cause;

		if (!parsed.options.skipCauseMessage) {
			message += ': ' + cause.message;
		}
	}

	/*
	 * If we've been given an object with properties, shallow-copy that
	 * here.  We don't want to use a deep copy in case there are non-plain
	 * objects here, but we don't want to use the original object in case
	 * the caller modifies it later.
	 */
	this.jse_info = {};
	if (parsed.options.info) {
		for (k in parsed.options.info) {
			this.jse_info[k] = parsed.options.info[k];
		}
	}

	this.message = message;
	Error.call(this, message);

	if (Error.captureStackTrace) {
		ctor = parsed.options.constructorOpt || this.constructor;
		Error.captureStackTrace(this, ctor);
	}

	return (this);
}

mod_util.inherits(VError, Error);
VError.prototype.name = 'VError';

VError.prototype.toString = function ve_toString()
{
	var str = (this.hasOwnProperty('name') && this.name ||
		this.constructor.name || this.constructor.prototype.name);
	if (this.message)
		str += ': ' + this.message;

	return (str);
};

/*
 * This method is provided for compatibility.  New callers should use
 * VError.cause() instead.  That method also uses the saner `null` return value
 * when there is no cause.
 */
VError.prototype.cause = function ve_cause()
{
	var cause = VError.cause(this);
	return (cause === null ? undefined : cause);
};

/*
 * Static methods
 *
 * These class-level methods are provided so that callers can use them on
 * instances of Errors that are not VErrors.  New interfaces should be provided
 * only using static methods to eliminate the class of programming mistake where
 * people fail to check whether the Error object has the corresponding methods.
 */

VError.cause = function (err)
{
	mod_assertplus.ok(mod_isError(err), 'err must be an Error');
	return (mod_isError(err.jse_cause) ? err.jse_cause : null);
};

VError.info = function (err)
{
	var rv, cause, k;

	mod_assertplus.ok(mod_isError(err), 'err must be an Error');
	cause = VError.cause(err);
	if (cause !== null) {
		rv = VError.info(cause);
	} else {
		rv = {};
	}

	if (typeof (err.jse_info) == 'object' && err.jse_info !== null) {
		for (k in err.jse_info) {
			rv[k] = err.jse_info[k];
		}
	}

	return (rv);
};

VError.findCauseByName = function (err, name)
{
	var cause;

	mod_assertplus.ok(mod_isError(err), 'err must be an Error');
	mod_assertplus.string(name, 'name');
	mod_assertplus.ok(name.length > 0, 'name cannot be empty');

	for (cause = err; cause !== null; cause = VError.cause(cause)) {
		mod_assertplus.ok(mod_isError(cause));
		if (cause.name == name) {
			return (cause);
		}
	}

	return (null);
};

VError.hasCauseWithName = function (err, name)
{
	return (VError.findCauseByName(err, name) !== null);
};

VError.fullStack = function (err)
{
	mod_assertplus.ok(mod_isError(err), 'err must be an Error');

	var cause = VError.cause(err);

	if (cause) {
		return (err.stack + '\ncaused by: ' + VError.fullStack(cause));
	}

	return (err.stack);
};

VError.errorFromList = function (errors)
{
	mod_assertplus.arrayOfObject(errors, 'errors');

	if (errors.length === 0) {
		return (null);
	}

	errors.forEach(function (e) {
		mod_assertplus.ok(mod_isError(e));
	});

	if (errors.length == 1) {
		return (errors[0]);
	}

	return (new MultiError(errors));
};

VError.errorForEach = function (err, func)
{
	mod_assertplus.ok(mod_isError(err), 'err must be an Error');
	mod_assertplus.func(func, 'func');

	if (err instanceof MultiError) {
		err.errors().forEach(function iterError(e) { func(e); });
	} else {
		func(err);
	}
};


/*
 * SError is like VError, but stricter about types.  You cannot pass "null" or
 * "undefined" as string arguments to the formatter.
 */
function SError()
{
	var args, obj, parsed, options;

	args = Array.prototype.slice.call(arguments, 0);
	if (!(this instanceof SError)) {
		obj = Object.create(SError.prototype);
		SError.apply(obj, arguments);
		return (obj);
	}

	parsed = parseConstructorArguments({
	    'argv': args,
	    'strict': true
	});

	options = parsed.options;
	VError.call(this, options, '%s', parsed.shortmessage);

	return (this);
}

/*
 * We don't bother setting SError.prototype.name because once constructed,
 * SErrors are just like VErrors.
 */
mod_util.inherits(SError, VError);


/*
 * Represents a collection of errors for the purpose of consumers that generally
 * only deal with one error.  Callers can extract the individual errors
 * contained in this object, but may also just treat it as a normal single
 * error, in which case a summary message will be printed.
 */
function MultiError(errors)
{
	mod_assertplus.array(errors, 'list of errors');
	mod_assertplus.ok(errors.length > 0, 'must be at least one error');
	this.ase_errors = errors;

	VError.call(this, {
	    'cause': errors[0]
	}, 'first of %d error%s', errors.length, errors.length == 1 ? '' : 's');
}

mod_util.inherits(MultiError, VError);
MultiError.prototype.name = 'MultiError';

MultiError.prototype.errors = function me_errors()
{
	return (this.ase_errors.slice(0));
};


/*
 * See README.md for reference details.
 */
function WError()
{
	var args, obj, parsed, options;

	args = Array.prototype.slice.call(arguments, 0);
	if (!(this instanceof WError)) {
		obj = Object.create(WError.prototype);
		WError.apply(obj, args);
		return (obj);
	}

	parsed = parseConstructorArguments({
	    'argv': args,
	    'strict': false
	});

	options = parsed.options;
	options['skipCauseMessage'] = true;
	VError.call(this, options, '%s', parsed.shortmessage);

	return (this);
}

mod_util.inherits(WError, VError);
WError.prototype.name = 'WError';

WError.prototype.toString = function we_toString()
{
	var str = (this.hasOwnProperty('name') && this.name ||
		this.constructor.name || this.constructor.prototype.name);
	if (this.message)
		str += ': ' + this.message;
	if (this.jse_cause && this.jse_cause.message)
		str += '; caused by ' + this.jse_cause.toString();

	return (str);
};

/*
 * For purely historical reasons, WError's cause() function allows you to set
 * the cause.
 */
WError.prototype.cause = function we_cause(c)
{
	if (mod_isError(c))
		this.jse_cause = c;

	return (this.jse_cause);
};


/***/ }),

/***/ 2877:
/***/ ((module) => {

module.exports = eval("require")("encoding");


/***/ }),

/***/ 1717:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"oci-common","_id":"oci-common@1.19.5","_inBundle":false,"_integrity":"sha512-9UvA0ycZfd2g7whH/OFl8tWyq9YvY2izhkz8XC4GDIUGdrrM1yWa+YXGak8h1fegSaQsaXAxjWg1jfdgvWqtFQ==","_location":"/oci-common","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"oci-common","name":"oci-common","escapedName":"oci-common","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/oci-common/-/oci-common-1.19.5.tgz","_shasum":"e5dbda9ca6ea3fe7059d35a122b8af31402f3603","_spec":"oci-common","_where":"/Volumes/Git/oracle-actions/run-oci-cli-command","author":{"name":"Oracle Cloud Infrastructure"},"bugs":{"url":"https://github.com/oracle/oci-typescript-sdk/issues"},"bundleDependencies":false,"contributors":[{"name":"Jyoti Saini","email":"jyoti.s.saini@oracle.com"},{"name":"Joe Levy","email":"joe.levy@oracle.com"},{"name":"Walt Tran","email":"walt.tran@oracle.com"}],"dependencies":{"@types/isomorphic-fetch":"0.0.35","@types/jsonwebtoken":"^8.5.0","@types/jssha":"^2.0.0","@types/opossum":"4.1.1","@types/sshpk":"^1.10.3","es6-promise":"4.2.6","http-signature":"1.3.1","isomorphic-fetch":"3.0.0","jsonwebtoken":"8.5.1","jssha":"2.4.1","opossum":"5.0.1","sshpk":"1.16.1","uuid":"3.3.3"},"deprecated":false,"description":"OCI Common module for NodeJS","devDependencies":{"@types/chai":"^4.1.7","@types/mocha":"^5.2.5","@types/node":"10.17.0","awesome-typescript-loader":"3.1.3","chai":"^4.2.0","mocha":"^5.2.0","source-map-loader":"0.2.1","ts-node":"^8.0.2","typescript":"4.1.3","webpack":"4.0.0","webpack-cli":"^3.3.0"},"homepage":"https://github.com/oracle/oci-typescript-sdk#readme","license":"(UPL-1.0 OR Apache-2.0)","main":"./index.js","name":"oci-common","publishConfig":{"registry":"https://registry.npmjs.org"},"repository":{"type":"git","url":"git+https://github.com/oracle/oci-typescript-sdk.git"},"scripts":{},"typings":"./index","version":"1.19.5"}');

/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");;

/***/ }),

/***/ 4293:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 3129:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");;

/***/ }),

/***/ 6417:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 4304:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(3109);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map