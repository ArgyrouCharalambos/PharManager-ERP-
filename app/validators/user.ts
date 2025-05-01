import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
    vine.object({
        fullName: vine.string(),
        email: vine.string().email(),
        password: vine.string().minLength(8)
    })
)

export const connexionUserValidator = vine.compile(
    vine.object({
        email: vine.string().email(),
        password: vine.string().minLength(8)
    })
)

export const forgotPasswordValidator = vine.compile(
    vine.object({
        email: vine.string().email(),
    })
)
export const changePasswordValidator = vine.compile(
    vine.object({
        password: vine.string().minLength(8)
    })
)