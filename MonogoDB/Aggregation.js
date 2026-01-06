// Aggregate to count the number of cars for each maker
db.cars.aggregate([
    {
        $group:
        {
            _id: "$maker",
            TotalCars: { $sum: 1 }
        }
    }]
)

// Aggregate to find the average price of cars for each maker

db.cars.aggregate([
    {
        $group:
        {
            _id: "$maker",
            AvgPrice: { $avg: "$price" }
        }
    }]
)

// Aggregate to count the number of cars for each fuel type

db.cars.aggregate([
    {
        $group:
        {
            _id: "$fuel_type",
            TotalCars: { $sum: 1 }
        }
    }
])


// Aggregate to find all cars made by "Hyundai"

db.cars.aggregate([
    {
        $match: {
            maker: "Hyundai"
        }
    }
])


// Aggregate to find all cars made by "Hyundai" with engine capacity greater than 1200 cc

db.cars.aggregate([
    ... {
        $match: {
            maker: "Hyundai",
            "engine.cc": { $gt: 1200 }
        }
    }
])


// Aggregate to count the number of cars made by "Hyundai"

db.cars.aggregate([
    ... {
        $match: {
            maker: "Hyundai"
        }
    },
    { $count: "Total_cars" }
])

// Aggregate to find distinct fuel types of cars made by "Hyundai"

db.cars.aggregate([
    {
        $match: {
            maker: "Hyundai"
        }
    },
    {
        $group: {
            _id: "$fuel_type"
        }
    }
])


// Aggregate to count the number of cars for each fuel type made by "Hyundai"

db.cars.aggregate([
    {
        $match: {
            maker: "Hyundai"
        }
    },
    {
        $group: {
            _id: "$fuel_type",
            TotalCar: { $sum: 1 }
        }
    }
])

// Aggregate to project only the maker, model, and fuel type of cars made by "Hyundai"

db.cars.aggregate([
    {
        $match: {
            maker: "Hyundai"
        }
    },
    {
        $project: {
            _id: 0,
            maker: 1,
            model: 1,
            fuel_type: 1
        }
    }
])


// Aggregate to sort the cars made by "Hyundai" by model in ascending order

db.cars.aggregate([
    {
        $match: { maker: "Hyundai" }
    },
    {
        $project:
        {
            _id: 0,
            maker: 1,
            model: 1,
            fuel_type: 1
        }
    },
    {
        $sort: { model: 1 }
    }
])

// Aggregate to count the number of cars for each maker using $sortByCount

db.cars.aggregate([
    {
        $sortByCount: "$maker"
    }
])


// {
//   _id: ObjectId('695b5296c6e4ed44ef1e2621'),
//   "maker": 'Hyundai',
//   model: 'Creta',
//   fuel_type: 'Diesel',
//   transmission: 'Manual',
//   engine: { type: 'Naturally Aspirated', cc: 1493, torque: '250 Nm' },
//   features: [
//     'Sunroof',
//     'Leather Seats',
//     'Wireless Charging',
//     'Ventilated Seats',
//     'Bluetooth'
//   ],
//   sunroof: true,
//   airbags: 6,
//   price: 1500000,
//   owners: [
//     { name: 'Raju', purchase_date: '2021-03-15', location: 'Mumbai' },
//     { name: 'Shyam', purchase_date: '2023-01-10', location: 'Delhi' }
//   ],
//   service_history: [
//     { date: '2022-04-10', service_type: 'Oil Change', cost: 5000 },
//     {
//       date: '2023-07-18',
//       service_type: 'Brake Replacement',
//       cost: 12000
//     }
//   ]
// }

//We do have multiple owners for each car right (owners are list of documents),now if you want to work on
//each owner then we can use $unwind stage

// Aggregate to unwind the owners array for each car made by "Hyundai"

db.cars.aggregate([
    {
        $match: { maker: "Hyundai" }
    },
    {
        $unwind: "$owners"
    }
])

// Aggregate to project the full car name (maker + model) for cars made by "Hyundai"

db.cars.aggregate([
    { $match: { maker: "Hyundai" } },
    {
        $project: {
            _id: 0,
            Car_Name: { $concat: ["$maker", " ", "$model"] },
        }
    }
])

//Aggregate with String Operators
// Aggregate to check if the fuel type contains the substring "Dies" for cars made by "Hyundai"

db.cars.aggregate([
    {
        $project: {
            _id: 0,
            model: 1,
            is_diesel: {
                $regexMatch: {
                    input: "$fuel_type",
                    regex: "Dies"
                }
            }
        }
    }])