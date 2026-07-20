const v = prompt()


const bot = Math.floor(Math.random() * 6 + 1)

if (bot == v) {
    console.log(`ยินดีด้วย! คุณทายถูกต้อง เลขที่ออกคือ ${v}`)
}
else {
    console.log(`เสียใจด้วย! คุณทายผิด บอททอยลูกเต๋าได้เลข ${bot}`)
}