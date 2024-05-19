export async function timeout (data: unknown, time: number) {
    setTimeout(() => {
        console.log('[DATA]', data)
    }, time)
}