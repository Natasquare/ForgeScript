import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$startTyping",
    description: "Starts typing in a channel",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to start typing at",
            required: true,
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        }
    ],
    async execute(ctx, [ ch ]) {
        const channel = ch ?? ctx.channel
        return Return.success(
            !!(channel.isTextBased() ? await channel.sendTyping().catch(() => null) : undefined)
        )
    },
})