"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$status",
    version: "1.0.0",
    description: "Returns the member status",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guildID",
            description: "The guild id to return the member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true
        },
        {
            name: "role ID",
            description: "The member id return its status",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true
        }
    ],
    execute(ctx, [guild, member]) {
        return structures_1.Return.success((member ?? ctx.member)?.presence?.status);
    }
});
//# sourceMappingURL=status.js.map