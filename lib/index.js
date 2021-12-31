#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var create_1 = require("./commands/create");
commander_1.default
    .name('typegraphql-typeorm-starter')
    .version('1.0.2');
commander_1.default
    .command('new <name>')
    .description('Creates a new typegraphql-typeorm starter package')
    .action(function (name) {
    var command = new create_1.CreateCommand();
    command.execute(name);
});
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
}
commander_1.default.parse(process.argv);
