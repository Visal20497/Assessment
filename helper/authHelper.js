let bcrypt=require('bcrypt')
// this helper  to generate the encrypt passoword
 function encryptPassword(password) {
    let slat = 10
    let hashedPass = bcrypt.hash(password, slat)
    return hashedPass
}
 let matchPassword = async (passoword, hashPassword
) => {
    return bcrypt.compare(passoword, hashPassword)
}
module.exports={encryptPassword,matchPassword}
