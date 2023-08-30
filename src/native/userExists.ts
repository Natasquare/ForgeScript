import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userExists",
    description: "Returns whether an user id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user to check",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ id ]) {
        return Return.success(
            CompiledFunction.IdRegex.test(id) &&
            !!(await ctx.client.users.fetch(id).catch(noop))    
        )
    },
})