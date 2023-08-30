import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$decodeURIComponent",
    description: "Decodes text from a url",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to decode",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text ]) {
        return Return.success(decodeURIComponent(text))
    },
})