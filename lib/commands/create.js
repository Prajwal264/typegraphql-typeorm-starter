"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommand = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var child_process_1 = __importDefault(require("child_process"));
var chalk_1 = __importDefault(require("chalk"));
var CreateCommand = /** @class */ (function () {
    function CreateCommand() {
        this.source = path_1.default.resolve(__dirname, '../../source');
    }
    CreateCommand.prototype.execute = function (name) {
        var target = path_1.default.resolve(process.cwd(), name);
        if (fs_extra_1.default.existsSync(target)) {
            console.log("The directory '" + name + "' already exists, please try again");
            process.exit();
        }
        try {
            fs_extra_1.default.mkdirSync(target);
            fs_extra_1.default.copySync(this.source, target);
        }
        catch (error) {
            console.log('Failed to create project');
            console.log(error);
            process.exit();
        }
        var exec = child_process_1.default.spawn('npm install', { shell: true, cwd: target, stdio: 'inherit' });
        exec.on('exit', function (code) {
            if (code === 0) {
                console.clear();
                console.log("Congratulations, your project has been created at folder " + chalk_1.default.cyanBright.bold(name));
                console.log("\n");
                console.log("You  " + chalk_1.default.cyanBright.bold("cd ./" + name) + " ");
                console.log("Then run " + chalk_1.default.cyanBright.bold('yarn watch') + " to start your typescript ");
                console.log("Then run " + chalk_1.default.cyanBright.bold('yarn start') + " actively serve it on " + chalk_1.default.cyanBright.bold('localhost:4000') + " ");
            }
            else {
                console.log("Error initializing project");
                console.log(code);
            }
        });
    };
    return CreateCommand;
}());
exports.CreateCommand = CreateCommand;
