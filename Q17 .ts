let guest_list : string[] = ['adeeba','sania','areeba','iqra'];
//for(let i=0; i<guest_list.length; i++){
   // console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n')
//}
let not_present : string = 'aymen';
let new_guest : string = 'afsheen'
//for(let i=0; i<guest_list.length; i++)(
   //console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n')
//)
console.log(`Ms. ${not_present} will not be coming tomorrow for dinner. `)
guest_list.unshift('alishba','maryam','ahad');
//for(let i=0; i<guest_list.length; i++)(
   // console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. We found big table so we decided to invite more guests.\n\nThank You\n')
 //)
 console.log('\nUnfortunately we cannot arrange big table so only two people are allowed')
 while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry Sir/Madam.${remove_guest} you are not invited for dinner.`);
 }
 for(let i=0; i<guest_list.length; i++){
   console.log('Respected Sir/Madam' + guest_list[i] + ',\nYes you are still invited for dinner tomorrow\nThank You\n')
 }
 guest_list.splice(0,2)
 console.log(guest_list)