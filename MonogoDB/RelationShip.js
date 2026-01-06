//MongoDB is a NoSQL database that uses collections and documents to store data.
// It doesn't enforce strict schema relationship like a foregin keys in realtional DB.

// We can still model relationships between documents in Mongodb using a few approaches:

// The two main types of relationships are:

// 1. Embedded Relationships (Denoralization)
// : In this approach, related data is stored within the same document.
// This is useful for one-to-few relationships where the related data is not too large or complex.

// Example: A blog post with embedded comments

//2. Referenced Relationships:(Normalization) 
// In this approach, related data is stored in separate documents,
// and references (usually ObjectIds) are used to link them together.
// This is useful for one-to-many or many-to-many relationships where the related data can be large or complex.


// One to One Relationship:

// 1=> user ==> Contact


// one to many Relationship:
// 2=> user ==> Posts


// Many to Many Relationship:
// 3=> students ==> courses


// Join with $lookup:
// In Mongodb, we can perform join-like operations using the $lookup stage in aggregation pipelines.

db.users.aggregate([
    {
        "$lookup": {
            from: "orders", // The target collection to join with
            localField: "order_id", // Field from the 'users' documents
            foreignField: "_id", // Field from 'orders' collection
            as: "orders" // The name of the new array field to add to the input documents
        }
    }
])