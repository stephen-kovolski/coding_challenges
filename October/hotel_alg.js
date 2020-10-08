//The hotel room data needs to be stored in state and localStorage. This is so the whole app can have read/set access to the data, make sure you create a roomsContext hook and provide that context to the whole application. Use that context in functional components when the data needs to be read or set. The room's information needs to be stored in both a context and localStorage as a two dimensional array, where each nested element is an object. 
// Ex. [ [ {room: ‘101’, renter: ‘bill’, price: 50 }}, { room: ‘102’, renting: null, price: 60 }, ... ], [ {room: ‘202’, …}, …], [...], [...] ]
// *triple dots represent room data that would be there
// As you can see from above each sub array will represent a floor (four total), and each floor will have four rooms. Each room will be represented as an object with room (room number), renter (who is renting currently), and price (in dollars) properties. Note that a room not being rented should have a renter value of null. This will be used to represent a room not being rented.
// When your application is first used the data should not be hard-coded, but should be produced programmatically. 

// Room prices equation; Price = 
// ( $50 x floorNum ) + ( $10 x roomNum(ones place) - $10) + fixedDeposit($45)

// Room 202 = ( 50*2 ) + ( 10*2 - 10 ) + 45 = $155
// Room 301 = ( 50*3 ) + ( 10*1 - 10 ) + 45 = $195



// Your output should be:
// [
//   [
//     { room: '101', renter: null, price: 95 },
//     { room: '102', renter: null, price: 105 },
//     { room: '103', renter: null, price: 115 },
//     { room: '104', renter: null, price: 125 }
//   ],








// function roomNum(param1, param2) {

//     let stringRoom = param.toString()

//     console.log(stringRoom)

//     for (let i = 0; i < stringRoom.length; i++) {

//             //console.log(stringRoom[i])

//         if (stringRoom[0] == 1) {
//             console.log()
//         }

//     }



// }

// roomNum(101)



//loop through floors [i]. 
//loop through rooms [j]




function hotelRooms(floor, room) {

    let emptyArr = [];
    
    const deposit = 45,
            floorCost = 50,
            roomCost = 10;
    
        for (let i = 0; i < floor; i++) {
            emptyArr.push([])
        
    
            for (let j = 0; j < room; j++) {
    
                    emptyArr[i].push({
    
                        room: `${i+1}${j<9 ? '0' : ""}${j+1}`,
                        renter: null,
                        price: ( (i + 1) * floorCost ) + ( roomCost * j ) + deposit
    
    
                    })
            }
    
        }
    console.log(emptyArr)
    
    }
    
    hotelRooms(4,4)