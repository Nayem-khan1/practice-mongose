import UserFakeData from "./User.model";

export const createUserDataToDB = async() =>{
    const userData =  new UserFakeData({
        id: "1542",
        role: "Job Holder",
        password: "jpadkfjh",
        name: {
            firstName: "Mr.",
            middleName: "Tokyo",
            lastName: "Khan",
        },
        gender: "male",
        dateOfBirth: "47/5/12544",
        email: "email@address.com",
        contactNo: "014521362565",
        emergencyContactNo: "0132532654",
        presentAddress: "Hatirjhill",
        permanentAddress: "Elaka",

    })
    await userData.save();
    return userData;
}