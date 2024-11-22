"use strict" // strict saare code ko new version me daal deta h agar koi galti karoge to ye error dedega

/* chalo data type samjhte hai 
 hame kuch data agar chahiye jaise koi number name booliyan value jaise true false ye decimal value  to hame us data ko
 save rakhne ke liye ek memory location chahiye or us memory me rakhne ke liye hame ek varriable chahiye jisme wo data store ho sake.
*/
const a = null // const ko bina initialise kare rakhoge to error dega ise data dena hoga.

let b // let ko bina initialise kare rakh sakte hai output undefined ayega

var c /* var ko bhi bina initialise kare rakh sakte hai output undefined ayega. var ko ab use nhi karna chahiye*/

const studentId = 1
let studentName = "Rehan"
let studentAddress = "Patther Ki Masjid"
let studentNumber = 9117428975
let studentAge 
let studentClass = null
let studentAttendance = true

console.table([studentId, studentName, studentAddress, studentNumber, studentClass, studentAge, studentAttendance, typeof studentClass])




/* null ek object hai or ye empty value indicate karta hai thik waise jaise ek khali glass me hawa ho | undefined indicate karta hai ki varriable me koi data store ni kiya gaya hai abtak*/
console.log([a , b, c, typeof a])
