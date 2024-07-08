let guest_list : string[] = ['adeeba','sania','areeba','iqra'];
//for(let i=0; i<guest_list.length; i++){
   // console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n')
//}
let not_present : string = 'aymen';
let new_guest : string = 'afsheen'
for(let i=0; i<guest_list.length; i++)(
   console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n')
)
console.log(`Ms. ${not_present} will not be coming tomorrow for dinner. `)
guest_list.unshift('alishba','maryam','ahad');
for(let i=0; i<guest_list.length; i++)(
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. We found big table so we decided to invite more guests.\n\nThank You\n')
 )